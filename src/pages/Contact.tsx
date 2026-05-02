import { motion } from "motion/react";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Linkedin, Facebook } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <section className="bg-[#0A2540] py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">Get in <span className="text-[#E85D04]">Touch</span></h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our Houston headquarters and Birmingham facility are ready to support your complex logistics requirements.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Details */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-[#0A2540] mb-8 tracking-tighter">Houston Headquarters</h3>
                <div className="space-y-6 text-gray-600">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-[#E85D04] w-6 h-6 shrink-0 mt-1" />
                    <p className="text-sm">21021 Essman Lane,<br />Houston, TX 77073</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="text-[#E85D04] w-6 h-6 shrink-0" />
                    <a href="tel:+17135807463" className="text-sm hover:text-[#E85D04] transition-colors font-bold">+1 (713) 580-7463</a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="text-[#E85D04] w-6 h-6 shrink-0" />
                    <a href="mailto:info@usalat.com" className="text-sm hover:text-[#E85D04] transition-colors">info@usalat.com</a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-[#0A2540] mb-8 tracking-tighter">Business Hours</h3>
                <div className="space-y-4 text-sm text-gray-600 font-medium">
                  <div className="flex justify-between border-b pb-2">
                    <span>Monday - Friday</span>
                    <span className="text-[#0A2540]">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Saturday</span>
                    <span className="text-[#0A2540]">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-red-500">Closed</span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="flex-1 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-[#0A2540] hover:bg-[#E85D04] hover:text-white transition-all text-center flex flex-col items-center">
                  <Linkedin className="mb-2" />
                  <span className="text-xs font-bold uppercase tracking-widest">LinkedIn</span>
                </a>
                <a href="#" className="flex-1 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-[#0A2540] hover:bg-[#E85D04] hover:text-white transition-all text-center flex flex-col items-center">
                  <Facebook className="mb-2" />
                  <span className="text-xs font-bold uppercase tracking-widest">Facebook</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-xl border border-gray-100">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Name</label>
                        <input required type="text" className="w-full bg-gray-50 border-b-2 border-gray-200 px-0 py-3 focus:outline-none focus:border-[#E85D04] transition-all text-lg font-medium" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                        <input required type="email" className="w-full bg-gray-50 border-b-2 border-gray-200 px-0 py-3 focus:outline-none focus:border-[#E85D04] transition-all text-lg font-medium" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Phone</label>
                        <input required type="tel" className="w-full bg-gray-50 border-b-2 border-gray-200 px-0 py-3 focus:outline-none focus:border-[#E85D04] transition-all text-lg font-medium" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
                        <select className="w-full bg-gray-50 border-b-2 border-gray-200 px-0 py-4 focus:outline-none focus:border-[#E85D04] transition-all text-lg font-medium">
                          <option>General Inquiry</option>
                          <option>Sales & Partnerships</option>
                          <option>Customer Support</option>
                          <option>Carrier Registration</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                      <textarea rows={5} className="w-full bg-gray-50 border-b-2 border-gray-200 px-0 py-3 focus:outline-none focus:border-[#E85D04] transition-all text-lg font-medium"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-[#0A2540] text-white py-6 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-[#E85D04] transition-all shadow-xl hover:shadow-[#E85D04]/20 transform hover:-translate-y-1">
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-20">
                     <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 text-green-600">
                       <Send className="w-10 h-10" />
                     </div>
                     <h2 className="text-4xl font-black text-[#0A2540] mb-4">Message Sent!</h2>
                     <p className="text-gray-500 mb-10">Our team has received your inquiry and will be in touch shortly.</p>
                     <button onClick={() => setSubmitted(false)} className="px-10 py-4 bg-gray-100 text-gray-700 rounded-full font-bold hover:bg-gray-200">Send another</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed Placeholder */}
      <section className="h-[600px] bg-gray-200 relative grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.4984242634426!2d-95.42173168488587!3d29.99351098188208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640cac6a7987019%3A0xc07a8bdf942945d4!2s21021%20Essman%20Ln%2C%20Houston%2C%20TX%2077073!5e0!3m2!1sen!2sus!4v1701234567890!5m2!1sen!2sus" 
           width="100%" 
           height="100%" 
           style={{ border: 0 }} 
           allowFullScreen 
           loading="lazy" 
           referrerPolicy="no-referrer-when-downgrade"
         />
         <div className="absolute top-10 left-10 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 hidden md:block">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-[#E85D04] p-2 rounded-lg text-white"><MapPin className="w-5 h-5"/></div>
              <h4 className="font-bold">USAL Houston</h4>
            </div>
            <p className="text-xs text-gray-400">Click map for directions</p>
         </div>
      </section>
    </div>
  );
}
