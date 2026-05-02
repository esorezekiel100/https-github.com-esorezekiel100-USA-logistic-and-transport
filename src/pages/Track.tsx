import React, { useState, useEffect } from "react";
import { Search, MapPin, Truck, Calendar, Clock, AlertCircle, ChevronRight, Navigation } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ShipmentMap from "../components/ShipmentMap";

interface TrackingResult {
  id: string;
  status: string;
  currentLocation: string;
  estimatedDelivery: string;
  lastUpdate: string;
  lat: number;
  lng: number;
  origin: { lat: number; lng: number; name: string };
  destination: { lat: number; lng: number; name: string };
  history: { time: string; status: string; location: string }[];
}

export default function Track() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TrackingResult | null>(null);
  const [error, setError] = useState(false);

  // Simulated "Live" update - purely visual for the demo
  useEffect(() => {
    if (!result) return;
    
    const interval = setInterval(() => {
      setResult(prev => {
        if (!prev) return null;
        return {
          ...prev,
          lat: prev.lat + (Math.random() - 0.5) * 0.001,
          lng: prev.lng + (Math.random() - 0.5) * 0.001
        };
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [result?.id]);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setResult(null);
    setError(false);

    try {
      const response = await fetch(`/api/track/${query}`);
      if (!response.ok) throw new Error("Shipment not found");
      const data = await response.json();
      
      // Enhance mock data with history
      data.history = [
        { time: "2026-05-02 08:30 AM", status: data.status, location: data.currentLocation },
        { time: "2026-05-01 02:15 PM", status: "In Transit", location: "Baton Rouge, LA" },
        { time: "2026-04-30 09:00 AM", status: "Picked Up", location: "Birmingham, AL Facility" }
      ];
      
      setResult(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const statuses = ["Dispatched", "In Transit", "Out for Delivery", "Delivered"];
  const currentStatusIndex = result ? statuses.indexOf(result.status) : -1;

  return (
    <div className="min-h-screen pt-32 pb-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-block px-4 py-1 bg-[#E85D04]/10 text-[#E85D04] text-xs font-bold uppercase tracking-widest mb-6 rounded-full">
            Real-Time Logistics
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#0A2540] mb-6 tracking-tighter">
            Shipment <span className="text-[#E85D04]">Tracking</span>
          </h1>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            Enter your Shipment ID or Reference Number below to check the real-time status of your vehicle transport.
          </p>

          <div className="relative max-w-2xl mx-auto mb-16">
            <form onSubmit={handleTrack} className="flex relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Search className="w-6 h-6" />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter Shipment ID (e.g. USAL-2024-8842)"
                className="w-full bg-white border-2 border-transparent shadow-xl rounded-2xl pl-14 pr-32 py-6 text-lg focus:outline-none focus:border-[#E85D04] transition-all"
              />
              <button
                type="submit"
                disabled={loading}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#0A2540] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#1E3A5F] transition-all disabled:bg-gray-300"
              >
                {loading ? "..." : "Track"}
              </button>
            </form>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="bg-red-50 border border-red-100 p-8 rounded-3xl text-center mb-12"
            >
              <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-red-900 mb-2">Shipment Not Found</h3>
              <p className="text-red-700 max-w-md mx-auto mb-6">
                Please double-check your Shipment ID. If the problem persists, contact our support team.
              </p>
              <a href="tel:+17135807463" className="font-bold text-[#0A2540] hover:underline">
                Call Support: +1 (713) 580-7463
              </a>
            </motion.div>
          )}

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-left space-y-6"
            >
              {/* Main Status Card */}
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 pb-8 border-b border-gray-50 uppercase tracking-widest text-[10px] font-bold text-gray-400">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#0A2540]">Shipment ID:</span>
                    <span className="text-gray-900">{result.id}</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-2 md:mt-0">
                    <span className="text-[#0A2540]">Last Update:</span>
                    <span className="text-gray-900">{new Date(result.lastUpdate).toLocaleString()}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="space-y-1">
                    <div className="flex items-center text-[#E85D04] mb-2 font-bold uppercase tracking-widest text-xs">
                      <Truck className="w-4 h-4 mr-2" /> Current Status
                    </div>
                    <div className="text-2xl font-black text-[#0A2540]">{result.status}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center text-[#E85D04] mb-2 font-bold uppercase tracking-widest text-xs">
                      <MapPin className="w-4 h-4 mr-2" /> Location
                    </div>
                    <div className="text-2xl font-black text-[#0A2540]">{result.currentLocation}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center text-[#E85D04] mb-2 font-bold uppercase tracking-widest text-xs">
                      <Calendar className="w-4 h-4 mr-2" /> Est. Delivery
                    </div>
                    <div className="text-2xl font-black text-[#0A2540]">{result.estimatedDelivery}</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative pt-6 pb-2">
                  <div className="absolute top-6 left-0 w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentStatusIndex + 1) / statuses.length) * 100}%` }}
                      className="h-full bg-[#E85D04]"
                    />
                  </div>
                  <div className="relative flex justify-between">
                    {statuses.map((s, i) => (
                      <div key={s} className="flex flex-col items-center">
                        <div className={`w-3.5 h-3.5 rounded-full border-4 border-white mb-3 shadow-sm ${i <= currentStatusIndex ? "bg-[#E85D04]" : "bg-gray-200"}`} />
                        <span className={`text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-center max-w-[60px] md:max-w-none ${i <= currentStatusIndex ? "text-[#0A2540]" : "text-gray-400"}`}>
                          {s}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dynamic Map Component */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
              >
                <div className="flex items-center justify-between p-4 mb-2">
                    <h3 className="text-sm font-black uppercase tracking-widest text-[#0A2540] flex items-center">
                        <Navigation className="w-4 h-4 mr-2 text-[#E85D04]" /> 
                        Live Transit Visualization
                    </h3>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Real-Time Data Feed</span>
                    </div>
                </div>
                <ShipmentMap 
                    currentPos={[result.lat, result.lng]} 
                    origin={result.origin} 
                    destination={result.destination} 
                />
              </motion.div>

              {/* History Card */}
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 mt-6">
                <h3 className="text-xl font-bold text-[#0A2540] mb-8 flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-[#E85D04]" /> Shipment History
                </h3>
                <div className="space-y-8">
                  {result.history.map((step, i) => (
                    <div key={i} className="flex space-x-6 relative last:pb-0 pb-8">
                      {i !== result.history.length - 1 && (
                        <div className="absolute left-[7px] top-[30px] bottom-0 w-px bg-gray-100" />
                      )}
                      <div className={`w-4 h-4 rounded-full flex-shrink-0 mt-1.5 ${i === 0 ? "bg-[#E85D04] ring-4 ring-[#E85D04]/20" : "bg-gray-300"}`} />
                      <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{step.time}</div>
                        <div className="text-sm font-bold text-[#0A2540]">{step.status}</div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <MapPin className="w-3 h-3 mr-2" /> {step.location}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Support Section */}
        {!result && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12">
            <div className="bg-white p-8 rounded-3xl border border-gray-100">
              <h4 className="font-bold text-[#0A2540] mb-2">Need help?</h4>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                If you lost your Shipment ID or need immediate assistance regarding your delivery, our support line is available 24/7.
              </p>
              <a href="tel:+17135807463" className="text-[#E85D04] font-bold text-sm flex items-center hover:underline">
                Call +1 (713) 580-7463 <ChevronRight className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100">
              <h4 className="font-bold text-[#0A2540] mb-2">Carrier Partner?</h4>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Log in to the USAL Partner Portal to view your manifest, report status, and access digital BOLs.
              </p>
              <button className="text-[#E85D04] font-bold text-sm flex items-center hover:underline">
                Partner Login <ChevronRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
