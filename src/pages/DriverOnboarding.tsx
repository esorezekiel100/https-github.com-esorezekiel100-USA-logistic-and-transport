import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, 
  User, 
  FileText, 
  PlayCircle, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  Upload, 
  HardHat,
  Monitor
} from "lucide-react";

export default function DriverOnboarding() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const steps = [
    { title: "Personal Profile", id: 1 },
    { title: "Documentation", id: 2 },
    { title: "Safety Training", id: 3 },
    { title: "System Setup", id: 4 },
  ];

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCompleted(true);
    }, 2500);
  };

  if (completed) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-brand-light">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-12 shadow-2xl rounded-sm border-t-4 border-green-500 text-center"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-extrabold text-brand-blue mb-4 tracking-tighter uppercase">Welcome to USAL</h2>
          <p className="text-gray-500 mb-8 text-sm font-medium leading-relaxed">
            Your onboarding documentation has been submitted successfully. A Fleet Manager will reach out to schedule your final road test and equipment assignment.
          </p>
          <div className="space-y-4">
            <div className="bg-brand-light p-4 rounded-sm text-left border border-gray-100 italic text-[11px] text-brand-gray">
              "You are now part of the S.O.L.D. mission. Drive safely, professional."
            </div>
            <button 
              onClick={() => window.location.href = "/"}
              className="w-full bg-brand-blue text-white py-4 font-bold uppercase tracking-widest text-sm hover:bg-brand-blue-light transition-all"
            >
              Go to Dashboard
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 bg-brand-light font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest mb-4 rounded-sm">
            Fleet Operations
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-brand-blue mb-6 tracking-tighter uppercase">
            Driver <span className="text-brand-orange">Onboarding</span>
          </h1>
          <p className="text-brand-gray text-[11px] font-bold uppercase tracking-widest-plus mb-12">
            Integrated Excellence Starts Here
          </p>
          
          {/* Progress Indicator */}
          <div className="relative flex justify-between max-w-2xl mx-auto px-2">
             {steps.map((s) => (
               <div key={s.id} className="flex flex-col items-center relative z-10 flex-1">
                 <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white flex items-center justify-center font-bold text-xs md:text-sm shadow-sm transition-all duration-500 ${
                   step >= s.id ? "bg-brand-blue text-white" : "bg-gray-200 text-gray-500"
                 }`}>
                   {step > s.id ? <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" /> : s.id}
                 </div>
                 <span className={`hidden sm:block text-[9px] uppercase font-black tracking-widest mt-4 ${
                   step >= s.id ? "text-brand-blue" : "text-gray-400"
                 }`}>
                   {s.title}
                 </span>
                 {step === s.id && (
                   <span className="sm:hidden absolute -bottom-6 whitespace-nowrap text-[8px] uppercase font-black tracking-widest text-brand-blue">
                     {s.title}
                   </span>
                 )}
               </div>
             ))}
             <div className="absolute top-5 md:top-6 left-0 w-full h-1 bg-gray-200 -z-0" />
             <div 
               className="absolute top-5 md:top-6 left-0 h-1 bg-brand-blue transition-all duration-1000 -z-0" 
               style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
             />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-white shadow-2xl rounded-sm border-t-8 border-brand-blue relative overflow-hidden transition-all duration-500 min-h-[400px] md:min-h-[500px]">
          
          <div className="p-5 md:p-16">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-6 md:space-y-8"
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-8">
                    <div className="bg-brand-light p-3 md:p-4 rounded-sm text-brand-orange">
                      <User className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-brand-blue tracking-tighter uppercase leading-none">Personal Profile</h3>
                      <p className="text-[10px] text-brand-gray font-bold uppercase tracking-widest mt-1 md:mt-2">Primary Identity Verification</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2 text-left">
                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray">Full Legal Name (as on CDL)</label>
                      <input required type="text" className="w-full border-b border-gray-200 py-3 text-sm font-bold focus:outline-none focus:border-brand-orange bg-transparent placeholder-gray-300" placeholder="Johnathan Doe" />
                    </div>
                    <div className="space-y-2 text-left">
                       <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray">Social Security Number (Last 4)</label>
                       <input required type="password" maxLength={4} className="w-full border-b font-mono border-gray-200 py-3 text-sm font-bold focus:outline-none focus:border-brand-orange bg-transparent text-left" placeholder="****" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <div className="space-y-2 text-left">
                       <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray">CDL License Number</label>
                       <input required type="text" className="w-full border-b border-gray-200 py-3 text-sm font-bold focus:outline-none focus:border-brand-orange bg-transparent uppercase tracking-wider" />
                    </div>
                    <div className="space-y-2 text-left">
                       <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray">CDL Class</label>
                       <select className="w-full border-b border-gray-200 py-3 text-sm font-bold focus:outline-none focus:border-brand-orange bg-transparent cursor-pointer font-sans uppercase">
                         <option>Class A (Mandatory)</option>
                         <option>Class B</option>
                       </select>
                    </div>
                    <div className="space-y-2 text-left">
                       <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray">CDL Exp. Date</label>
                       <input required type="date" className="w-full border-b border-gray-200 py-3 text-sm font-bold focus:outline-none focus:border-brand-orange bg-transparent" />
                    </div>
                  </div>

                  <button 
                    onClick={nextStep}
                    className="w-full bg-brand-blue text-white py-5 font-bold uppercase tracking-widest text-xs hover:bg-brand-blue-light transition-all shadow-xl flex items-center justify-center group mt-4"
                  >
                    Proceed to Documentation <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                   key="step2"
                   initial={{ opacity: 0, x: 50 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -50 }}
                   className="space-y-6 md:space-y-8"
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-8 text-left">
                    <div className="bg-brand-light p-3 md:p-4 rounded-sm text-brand-orange">
                      <FileText className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-brand-blue tracking-tighter uppercase leading-none">Digital Verification</h3>
                      <p className="text-[10px] text-brand-gray font-bold uppercase tracking-widest mt-1 md:mt-2">Compliance & Credential Checks</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                     {[
                       { label: "Front of CDL License", icon: <ShieldCheck className="w-5 h-5" /> },
                       { label: "DOT Medical Card", icon: <ShieldCheck className="w-5 h-5" /> },
                       { label: "Motor Vehicle Record (MVR)", icon: <FileText className="w-5 h-5" /> },
                       { label: "Twic Card (Optional)", icon: <User className="w-5 h-5" /> }
                     ].map((doc, idx) => (
                       <div key={idx} className="border border-dashed border-gray-200 p-4 md:p-6 flex flex-col items-center justify-center text-center space-y-3 hover:border-brand-orange hover:bg-brand-light/50 transition-all cursor-pointer group">
                         <div className="text-gray-300 group-hover:text-brand-orange transition-colors">
                           <Upload className="w-6 h-6 md:w-8 md:h-8" />
                         </div>
                         <div>
                            <div className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-brand-blue">{doc.label}</div>
                            <p className="text-[8px] text-gray-400 font-bold uppercase mt-1">PDF or High-Res Image Only</p>
                         </div>
                       </div>
                     ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <button onClick={prevStep} className="order-2 sm:order-1 flex-1 border-2 border-brand-blue py-5 text-brand-blue font-bold uppercase tracking-widest text-xs hover:bg-brand-light transition-all">Back</button>
                    <button onClick={nextStep} className="order-1 sm:order-2 flex-[2] bg-brand-blue text-white py-5 font-bold uppercase tracking-widest text-xs hover:bg-brand-blue-light transition-all shadow-xl">Verify & Continue</button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                   key="step3"
                   initial={{ opacity: 0, x: 50 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -50 }}
                   className="space-y-8"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-brand-light p-4 rounded-sm text-brand-orange">
                      <HardHat className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-brand-blue tracking-tighter uppercase leading-none">Safety & Culture</h3>
                      <p className="text-xs text-brand-gray font-bold uppercase tracking-widest mt-2">The S.O.L.D. Philosophy Training</p>
                    </div>
                  </div>

                  <div className="aspect-video bg-brand-blue relative flex items-center justify-center group overflow-hidden rounded-sm cursor-pointer shadow-inner">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549466600-62463fd39999?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-30" />
                    <div className="relative z-10 text-center">
                       <PlayCircle className="w-20 h-20 text-white opacity-90 group-hover:scale-110 group-hover:text-brand-orange transition-all duration-300" />
                       <div className="text-white font-black uppercase tracking-widest text-xs mt-6">Safety Orientation Video (12:45)</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                     <div className="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-100">
                        <input type="checkbox" className="mt-1 w-4 h-4 accent-brand-orange" />
                        <p className="text-[11px] font-medium text-brand-blue leading-relaxed uppercase tracking-wider">I certify that I have watched the USAL Safety Orientation Video in its entirety and understand the S.O.L.D. principles.</p>
                     </div>
                  </div>

                  <div className="flex gap-4">
                    <button onClick={prevStep} className="flex-1 border-2 border-brand-blue py-5 text-brand-blue font-bold uppercase tracking-widest text-xs">Back</button>
                    <button onClick={nextStep} className="flex-[2] bg-brand-blue text-white py-5 font-bold uppercase tracking-widest text-xs shadow-xl">Complete Module</button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div 
                   key="step4"
                   initial={{ opacity: 0, x: 50 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -50 }}
                   className="space-y-8"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-brand-light p-4 rounded-sm text-brand-orange">
                      <Monitor className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-brand-blue tracking-tighter uppercase leading-none">System Setup</h3>
                      <p className="text-xs text-brand-gray font-bold uppercase tracking-widest mt-2">TMS & ELD Registration</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-brand-light p-8 rounded-sm border border-gray-100">
                       <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-blue mb-4">Account Creation</h4>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="space-y-2">
                           <label className="text-[9px] font-black uppercase tracking-widest text-brand-gray">Username (System ID)</label>
                           <div className="bg-gray-100 p-3 text-xs font-bold text-brand-blue uppercase font-mono tracking-tighter">DRIVER_TX_7482_TEMP</div>
                         </div>
                         <div className="space-y-2">
                           <label className="text-[9px] font-black uppercase tracking-widest text-brand-gray">Log-in Password</label>
                           <input type="password" defaultValue="**********" className="w-full border-b border-gray-200 py-3 text-sm font-bold focus:outline-none focus:border-brand-orange bg-transparent" />
                         </div>
                       </div>
                    </div>

                    <div className="p-4 flex items-center gap-4 border border-brand-blue/10 bg-brand-blue/5 rounded-sm">
                       <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                       <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">Integrated Fleet Dashboard Ready</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button onClick={prevStep} className="flex-1 border-2 border-brand-blue py-5 text-brand-blue font-bold uppercase tracking-widest text-xs">Back</button>
                    <button 
                      onClick={handleFinalSubmit}
                      disabled={loading}
                      className="flex-[2] bg-brand-orange text-white py-5 font-bold uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-transform"
                    >
                      {loading ? "Registering System ID..." : "Finalize Driver Onboarding"}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer of card */}
          <div className="bg-brand-light px-8 py-4 border-t border-gray-100 flex items-center justify-between">
            <div className="text-[8px] font-black uppercase tracking-widest text-gray-400">
              Session ID: DRV-ONB-{new Date().getTime().toString().slice(-6)}
            </div>
            <div className="flex items-center gap-4 text-[8px] font-black uppercase tracking-widest text-gray-400">
              <span className="opacity-50 underline">Support: +1 (713) 580-7463</span>
              <span className="opacity-50">v1.2 // OPS-DASH</span>
            </div>
          </div>
        </div>

        {/* Requirements Sidebar Placeholder (Bottom for mobile/full for desktop) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-white p-8 border border-gray-200 group hover:border-brand-orange transition-colors">
              <h4 className="text-xs font-black uppercase tracking-widest text-brand-blue mb-4">Required Gear List</h4>
              <ul className="space-y-4">
                 {["High-Visibility Vest", "Steel-Toed Boots", "Smart Device (iOS/Android)", "DOT Medical Certificate"].map((item, i) => (
                   <li key={i} className="flex items-center text-[10px] font-bold uppercase tracking-widest text-brand-gray">
                      <ChevronRight className="w-3 h-3 text-brand-orange mr-2" /> {item}
                   </li>
                 ))}
              </ul>
           </div>
           <div className="bg-white p-8 border border-gray-200 group hover:border-brand-orange transition-colors">
              <h4 className="text-xs font-black uppercase tracking-widest text-brand-blue mb-4">Dispatch Contacts</h4>
              <ul className="space-y-4">
                 <li className="space-y-1">
                    <div className="text-[10px] font-black uppercase text-brand-blue">Houston Hub</div>
                    <div className="text-[10px] font-bold text-brand-gray underline">+1 (713) 580-7463 (Ext. 01)</div>
                 </li>
                 <li className="space-y-1">
                    <div className="text-[10px] font-black uppercase text-brand-blue">Birmingham Distribution</div>
                    <div className="text-[10px] font-bold text-brand-gray underline">+1 (713) 580-7463 (Ext. 02)</div>
                 </li>
              </ul>
           </div>
        </div>
      </div>
    </div>
  );
}
