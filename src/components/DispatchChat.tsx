import React, { useState, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import { Send, User, ShieldCheck, X, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  id: string;
  text: string;
  sender: "driver" | "dispatch";
  timestamp: string;
}

interface DispatchChatProps {
  driverId: string;
}

export default function DispatchChat({ driverId }: DispatchChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef<Socket | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Connect to same host
    const socket = io();
    socketRef.current = socket;

    socket.on("connect", () => {
      setIsConnected(true);
      socket.emit("join", driverId);
    });

    socket.on("message", (msg: Message) => {
      setMessages((prev) => {
        // Prevent duplicate messages (idempotency check)
        if (prev.some((p) => p.id === msg.id)) return prev;
        return [...prev, msg];
      });
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    return () => {
      socket.disconnect();
    };
  }, [driverId]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !socketRef.current) return;

    socketRef.current.emit("message", {
      room: driverId,
      text: input,
      sender: "driver"
    });

    setInput("");
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-28 right-6 bg-brand-orange text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 bg-brand-blue text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
          DISPATCH
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed inset-x-4 bottom-24 lg:bottom-12 lg:right-12 lg:left-auto lg:w-96 bg-white rounded-3xl shadow-3xl z-50 border border-gray-100 flex flex-col max-h-[70vh]"
          >
            {/* Header */}
            <div className="bg-brand-blue p-5 rounded-t-3xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-xl">
                  <ShieldCheck className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-black tracking-widest uppercase">Dispatch Center</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${isConnected ? "bg-green-500 animate-pulse" : "bg-red-500"}`} />
                    <span className="text-[9px] font-bold text-white/50 uppercase tracking-widest">
                      {isConnected ? "Secure Connection" : "Connection Lost"}
                    </span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 bg-brand-light space-y-4">
              {messages.length === 0 && (
                <div className="text-center py-10">
                  <div className="bg-white p-4 rounded-3xl shadow-sm inline-block mb-3">
                    <User className="w-8 h-8 text-brand-blue opacity-20" />
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Direct secure line to logistics team
                  </p>
                </div>
              )}
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: msg.sender === "driver" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.sender === "driver" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-2xl text-[13px] ${
                    msg.sender === "driver" 
                      ? "bg-brand-blue text-white rounded-br-none shadow-lg" 
                      : "bg-white text-brand-blue rounded-bl-none shadow-md border border-gray-100"
                  }`}>
                    <div className="mb-1 text-[8px] font-black uppercase tracking-widest opacity-40">
                      {msg.sender === "driver" ? "You" : "Dispatch"}
                    </div>
                    <p className="font-medium leading-relaxed">{msg.text}</p>
                    <div className="mt-1 text-[8px] font-bold opacity-30 text-right italic">
                      {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </motion.div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 rounded-b-3xl">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-3.5 pr-14 text-sm font-medium focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="absolute right-2 p-2.5 bg-brand-orange text-white rounded-xl shadow-lg disabled:opacity-50 disabled:grayscale transition-all active:scale-90"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
