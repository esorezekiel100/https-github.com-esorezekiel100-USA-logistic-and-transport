import React, { useState } from "react";
import { Send, CheckCircle2, Phone, ShieldCheck, Clock } from "lucide-react";
import { motion } from "motion/react";

export default function Quote() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-gray-50 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-8 md:p-12 rounded-3xl shadow-xl text-center"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
            <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2540] mb-4">Request Received</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed">
            Thank you for choosing USAL! We have received your quote request and one of our logistics specialists will contact you within **1 business hour**.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="w-full bg-[#0A2540] text-white py-4 rounded-xl font-bold hover:bg-[#1E3A5F] transition-all"
          >
            New Request
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          
          {/* Form Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-block px-4 py-1 bg-[#E85D04]/10 text-[#E85D04] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 rounded-full">
              Instant Pricing
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#0A2540] mb-6 tracking-tighter leading-none">
              Get Your Free <br />
              <span className="text-[#E85D04]">No-Obligation</span> Quote
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12 leading-relaxed">
              Complete the form below and receive a customized logistics proposal tailored to your specific vehicle transport needs.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-xl shadow-sm text-[#E85D04]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A2540]">Fully Insured & Compliant</h3>
                  <p className="text-sm text-gray-500">All shipments are covered under our national cargo insurance policy.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-xl shadow-sm text-[#E85D04]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A2540]">1-Hour Response Time</h3>
                  <p className="text-sm text-gray-500">During business hours, our team responds to all inquiries within 60 minutes.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-16 p-6 sm:p-8 bg-[#0A2540] text-white rounded-[30px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-lg md:text-xl font-bold mb-4">Immediate Assistance?</h3>
              <p className="text-white/60 text-[13px] md:text-sm mb-6">Our Houston dispatch team is standing by to help with urgent shipments.</p>
              <a href="tel:+17135807463" className="inline-flex items-center text-[#E85D04] font-black text-base md:text-lg hover:underline transition-all">
                Call +1 (713) 580-7463
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 sm:p-8 md:p-12 rounded-[30px] shadow-xl border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                  <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#E85D04] transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                  <input required type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#E85D04] transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                  <input required type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#E85D04] transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Company (Optional)</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#E85D04] transition-all" />
                </div>
              </div>

              <div className="space-y-2 pt-4">
                <h4 className="text-sm font-bold text-[#0A2540] border-b pb-2 mb-4">Shipment Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Pickup Location (City/ZIP)</label>
                    <input required type="text" placeholder="Houston, TX" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#E85D04] transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Delivery Location (City/ZIP)</label>
                    <input required type="text" placeholder="Birmingham, AL" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#E85D04] transition-all" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Vehicle Type</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#E85D04] transition-all">
                    <option>Standard Car / Sedan</option>
                    <option>SUV / Crossover</option>
                    <option>Pickup Truck</option>
                    <option>Exotic / Luxury</option>
                    <option>Multiple Vehicles</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Est. Shipment Date</label>
                  <input type="date" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#E85D04] transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Special Instructions</label>
                <textarea rows={3} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#E85D04] transition-all"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className={`w-full py-5 rounded-xl font-bold flex items-center justify-center space-x-3 transition-all ${
                  loading ? "bg-gray-300 cursor-not-allowed" : "bg-[#E85D04] text-white hover:bg-[#D00000] shadow-lg shadow-[#E85D04]/20"
                }`}
              >
                {loading ? "Processing..." : (
                  <>
                    <span>Submit Quote Request</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
              
              <p className="text-[10px] text-gray-400 text-center uppercase tracking-tighter">
                By submitting, you agree to our terms of service and privacy policy. 
                We never share your personal information.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
