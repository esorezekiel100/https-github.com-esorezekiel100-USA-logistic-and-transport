import React, { useState } from "react";
import { motion } from "motion/react";
import { Truck, Users, Award, ShieldCheck, FileText, ChevronRight, CheckCircle2, TrendingUp, Handshake } from "lucide-react";

export default function BecomeAgent() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const benefits = [
    { title: "National Network", desc: "Access USAL's massive fleet and Tier-1 carrier partnerships.", icon: <Truck className="w-8 h-8" /> },
    { title: "Proprietary Tech", desc: "Use our advanced TMS and real-time tracking dashboards.", icon: <Award className="w-8 h-8" /> },
    { title: "Support 24/7", desc: "Dedicated dispatch and agent support based in Houston.", icon: <Users className="w-8 h-8" /> },
    { title: "High Commission", desc: "Competitive rates and prompt payment on all bookings.", icon: <TrendingUp className="w-8 h-8" /> },
  ];

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-brand-light">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-12 shadow-2xl rounded-sm border-t-4 border-brand-orange text-center"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <Handshake className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-extrabold text-brand-blue mb-4 tracking-tighter uppercase">Application Sent</h2>
          <p className="text-gray-500 mb-8 text-sm font-medium leading-relaxed">
            Thank you for your interest in joining the USAL network. Our Agent Relations team will review your credentials and contact you within **1 business day**.
          </p>
          <button 
            onClick={() => window.location.href = "/"}
            className="w-full bg-brand-blue text-white py-4 font-bold uppercase tracking-widest text-sm hover:bg-brand-blue-light transition-all"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="bg-brand-blue py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute w-full h-full bg-[url('https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-block px-3 py-1 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest mb-6 rounded-sm">
              Strategic Partnership
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none uppercase">
              Join the <span className="text-brand-orange">Network.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
              Scale your logistics business with USAL's infrastructure, technology, and 18+ years of industry leadership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Content */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-brand-blue mb-8 tracking-tighter uppercase">Why Partner with USAL?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {benefits.map((b, i) => (
                   <div key={i} className="bg-white p-6 border border-gray-200 rounded-sm hover:shadow-xl transition-all group">
                     <div className="text-brand-orange mb-4 group-hover:scale-110 transition-transform origin-left">{b.icon}</div>
                     <h4 className="text-[11px] font-black uppercase tracking-widest text-brand-blue mb-2">{b.title}</h4>
                     <p className="text-[10px] text-brand-gray font-medium leading-relaxed">{b.desc}</p>
                   </div>
                 ))}
              </div>
              <div className="mt-12 p-8 bg-brand-blue rounded-sm text-white">
                 <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"><Handshake className="w-6 h-6 text-brand-orange" /></div>
                   <h3 className="font-bold uppercase tracking-widest text-sm">Preferred Broker Status</h3>
                 </div>
                 <p className="text-xs text-gray-400 font-medium leading-relaxed mb-6">Established agents with a track record of excellence gain access to our "Premier Carrier" pool and priority route allocation.</p>
                 <div className="flex items-center gap-1.5 text-green-500 font-bold text-[10px] uppercase tracking-widest">
                   <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Recruitment Open
                 </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-white p-10 md:p-16 shadow-2xl rounded-sm border-t-4 border-brand-orange border-b-4 border-brand-blue">
               <div className="text-center mb-10">
                 <h3 className="text-2xl font-black text-brand-blue tracking-tighter uppercase mb-2">Agent Application</h3>
                 <p className="text-xs text-brand-gray font-medium uppercase tracking-widest tracking-widest border-b border-gray-100 pb-4 inline-block">Start your partnership today</p>
               </div>
               <form onSubmit={handleSubmit} className="space-y-8">
                 <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray">Full Legal Name</label>
                   <input required type="text" className="w-full border-b-2 border-gray-100 py-3 text-sm font-bold focus:outline-none focus:border-brand-blue uppercase tracking-wider" />
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray">Company Name</label>
                     <input required type="text" className="w-full border-b-2 border-gray-100 py-3 text-sm font-bold focus:outline-none focus:border-brand-blue uppercase tracking-wider" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray">MC / DOT #</label>
                     <input required type="text" className="w-full border-b-2 border-gray-100 py-3 text-sm font-bold focus:outline-none focus:border-brand-blue uppercase tracking-wider" />
                   </div>
                 </div>
                 <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray">Primary Operations Email</label>
                   <input required type="email" className="w-full border-b-2 border-gray-100 py-3 text-sm font-bold focus:outline-none focus:border-brand-blue uppercase tracking-wider" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray">Additional Experience / Certifications</label>
                   <textarea rows={3} className="w-full border-b-2 border-gray-100 py-3 text-sm font-bold focus:outline-none focus:border-brand-blue uppercase tracking-wider" placeholder="Hazmat, Military, OEM Specialization..."></textarea>
                 </div>
                 <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-brand-blue text-white py-5 font-bold uppercase tracking-widest text-xs hover:bg-brand-blue-light transition-all shadow-xl flex items-center justify-center group"
                >
                  {loading ? "Processing Credentials..." : (
                    <>
                      Apply for Agent Network <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
               </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Handshake className="w-12 h-12 text-brand-orange mx-auto mb-8" />
          <h2 className="text-2xl md:text-4xl font-extrabold text-brand-blue tracking-tighter uppercase italic leading-tight">
            "At USAL, our agents aren't just contractors—they are the strategic link that powers the S.O.L.D. mission across North America."
          </h2>
          <div className="mt-8 flex items-center justify-center space-x-3">
             <div className="w-10 h-1 bg-brand-orange" />
             <span className="text-[10px] font-black uppercase tracking-widest text-brand-gray">Agent Relations Board</span>
          </div>
        </div>
      </section>
    </div>
  );
}
