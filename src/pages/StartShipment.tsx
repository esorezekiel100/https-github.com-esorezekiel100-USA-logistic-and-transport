import React, { useState } from "react";
import { motion } from "motion/react";
import { Truck, MapPin, Calendar, CreditCard, CheckCircle2, ChevronRight, Package, ShieldCheck } from "lucide-react";

export default function StartShipment() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-brand-light">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-12 shadow-2xl rounded-sm border-t-4 border-brand-orange text-center"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-extrabold text-brand-blue mb-4 tracking-tighter uppercase">Shipment Booked</h2>
          <p className="text-gray-500 mb-8 text-sm font-medium leading-relaxed">
            Your booking request has been initiated. Our dispatch team will verify the details and send your tracking manifest within **30 minutes**.
          </p>
          <button 
            onClick={() => window.location.href = "/"}
            className="w-full bg-brand-blue text-white py-4 font-bold uppercase tracking-widest text-sm hover:bg-brand-blue-light transition-all"
          >
            Return to Dashboard
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 bg-brand-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Progress Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest mb-4 rounded-sm">
            Logistics Portal
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-brand-blue mb-8 tracking-tighter uppercase">
            Start <span className="text-brand-orange">Shipment</span>
          </h1>
          
          <div className="relative flex justify-between max-w-lg mx-auto">
             {[1, 2, 3].map((s) => (
               <div key={s} className="flex flex-col items-center relative z-10">
                 <div className={`w-10 h-10 rounded-full border-4 border-white flex items-center justify-center font-bold text-sm shadow-sm transition-colors ${
                   step >= s ? "bg-brand-orange text-white" : "bg-gray-200 text-gray-500"
                 }`}>
                   {s}
                 </div>
                 <span className={`text-[10px] uppercase font-black tracking-widest mt-3 ${
                   step >= s ? "text-brand-blue" : "text-gray-400"
                 }`}>
                   {s === 1 ? "Details" : s === 2 ? "Booking" : "Confirm"}
                 </span>
               </div>
             ))}
             <div className="absolute top-5 left-0 w-full h-1 bg-gray-200 -z-0" />
             <div 
               className="absolute top-5 left-0 h-1 bg-brand-orange transition-all duration-500 -z-0" 
               style={{ width: `${((step - 1) / 2) * 100}%` }}
             />
          </div>
        </div>

        {/* Multi-step Form */}
        <div className="bg-white p-8 md:p-16 shadow-2xl rounded-sm border-t-4 border-brand-blue relative overflow-hidden">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray">Pick-Up Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-0 top-1/2 -translate-y-1/2 text-brand-orange w-5 h-5" />
                      <input required type="text" placeholder="City, State or ZIP" className="w-full border-b-2 border-gray-100 py-3 pl-8 text-sm font-bold focus:outline-none focus:border-brand-blue uppercase tracking-wider" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray">Delivery Destination</label>
                    <div className="relative">
                      <MapPin className="absolute left-0 top-1/2 -translate-y-1/2 text-brand-orange w-5 h-5" />
                      <input required type="text" placeholder="City, State or ZIP" className="w-full border-b-2 border-gray-100 py-3 pl-8 text-sm font-bold focus:outline-none focus:border-brand-blue uppercase tracking-wider" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray">Transport Type</label>
                    <select className="w-full border-b-2 border-gray-100 py-3 text-sm font-bold focus:outline-none focus:border-brand-blue uppercase tracking-wider bg-transparent cursor-pointer">
                      <option>Open Auto Carrier</option>
                      <option>Enclosed Luxury Carrier</option>
                      <option>Express Expedited</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray">Vehicle Count</label>
                    <input required type="number" min="1" defaultValue="1" className="w-full border-b-2 border-gray-100 py-3 text-sm font-bold focus:outline-none focus:border-brand-blue uppercase tracking-wider" />
                  </div>
                </div>

                <button 
                  type="button" 
                  onClick={nextStep}
                  className="w-full bg-brand-blue text-white py-5 font-bold uppercase tracking-widest text-xs hover:bg-brand-blue-light transition-all shadow-lg flex items-center justify-center"
                >
                  Configure Fleet Logistics <ChevronRight className="ml-2 w-4 h-4" />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                <div className="bg-brand-light p-6 rounded-sm border border-gray-100 mb-8">
                   <h3 className="text-xs font-black uppercase tracking-widest text-brand-blue mb-4">Carrier Allocation</h3>
                   <p className="text-xs text-brand-gray leading-relaxed font-medium">Selecting Tier-1 carrier route: Houston Hub &gt; Southeast Corridor. Expected window: 48-72 Hours.</p>
                </div>

                <div className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray">Contact Name</label>
                    <input required type="text" className="w-full border-b-2 border-gray-100 py-3 text-sm font-bold focus:outline-none focus:border-brand-blue uppercase tracking-wider" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray">Contact Email</label>
                    <input required type="email" className="w-full border-b-2 border-gray-100 py-3 text-sm font-bold focus:outline-none focus:border-brand-blue uppercase tracking-wider" />
                  </div>
                </div>

                <div className="flex gap-4">
                  <button type="button" onClick={prevStep} className="flex-1 border-2 border-brand-blue py-5 text-brand-blue font-bold uppercase tracking-widest text-xs">Back</button>
                  <button type="button" onClick={nextStep} className="flex-[2] bg-brand-blue text-white py-5 font-bold uppercase tracking-widest text-xs">Continue to Verification</button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8 text-center">
                <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue tracking-tighter uppercase">Verify Shipment Details</h3>
                <p className="text-sm text-brand-gray font-medium mb-10 max-w-sm mx-auto leading-relaxed">
                  By clicking confirm, you authorize USAL to process this logistical request. Electronic BOL will be generated and sent via email.
                </p>

                <div className="bg-brand-light p-6 rounded-sm border border-gray-100 text-left mb-10">
                   <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-brand-blue mb-2">
                      <span>Rate Type</span>
                      <span className="text-brand-orange">Professional Fleet</span>
                   </div>
                   <div className="text-2xl font-black text-brand-blue">$1,280.00 <span className="text-xs text-brand-gray font-bold">Estimated</span></div>
                </div>

                <div className="flex gap-4">
                  <button type="button" onClick={prevStep} className="flex-1 border-2 border-brand-blue py-5 text-brand-blue font-bold uppercase tracking-widest text-xs font-semibold">Back</button>
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="flex-[2] bg-brand-orange text-white py-5 font-bold uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-transform"
                  >
                    {loading ? "Allocating Fleet..." : "Confirm & Launch Shipment"}
                  </button>
                </div>
              </motion.div>
            )}
          </form>
        </div>

        {/* Support Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white p-6 border border-gray-200">
             <ShieldCheck className="w-6 h-6 text-brand-orange mb-4" />
             <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-blue mb-2">Global Insurance</h4>
             <p className="text-[10px] text-brand-gray font-medium leading-relaxed">Tier-1 cargo protection automatically applied to this hauler.</p>
           </div>
           <div className="bg-white p-6 border border-gray-200">
             <Truck className="w-6 h-6 text-brand-orange mb-4" />
             <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-blue mb-2">Vetted Carriers</h4>
             <p className="text-[10px] text-brand-gray font-medium leading-relaxed">100% FMCSA compliant network with 10/10 safety ratings.</p>
           </div>
           <div className="bg-white p-6 border border-gray-200">
             <Calendar className="w-6 h-6 text-brand-orange mb-4" />
             <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-blue mb-2">Route Sync</h4>
             <p className="text-[10px] text-brand-gray font-medium leading-relaxed">Optimized routing through our proprietary logistics portal.</p>
           </div>
        </div>
      </div>
    </div>
  );
}
