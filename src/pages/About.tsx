import { motion } from "motion/react";
import { Shield, Users, Target, Award, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const values = [
    { title: "Trust", desc: "Integrity is at the heart of every vehicle we transport.", icon: <Shield /> },
    { title: "Excellence", desc: "Setting the mark for damage-free, on-time delivery.", icon: <Award /> },
    { title: "Unity", desc: "A diverse team driven by shared S.O.L.D. principles.", icon: <Users /> },
    { title: "Precision", desc: "Data-driven logistics for maximum efficiency.", icon: <Target /> },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0A2540] py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1549466600-62463fd39999?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
              Premier Auto Transport <br />
              <span className="text-[#E85D04]">Since 2008.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Headquartered in Houston, Texas, US AutoLogistics is a family of companies committed to revolutionizing the automotive supply chain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-[#E85D04]/10 text-[#E85D04] text-xs font-bold uppercase tracking-widest mb-6 rounded-full">
                Our History
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-8 tracking-tighter">
                A Legacy of Safety <br /> and Relentless Reliability.
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2008 as part of The Friedkin Group, US AutoLogistics (USAL) was established with a singular mission: to provide the highest standard of auto transport services in North America.
                </p>
                <p>
                  With primary operations spanning Houston, TX, and Birmingham, AL, we have grown from a regional carrier to a national logistics powerhouse. Our success is built on the S.O.L.D. philosophy—Safely, On Time, Legally Compliant, and Damage-Free.
                </p>
                <p>
                  Today, we operate a massive fleet of nearly 400 tractors and manage a sophisticated national brokerage network, serving OEMs, dealerships, and commercial partners with unwavering precision.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1000" 
                  alt="USAL Logistics Ops" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-[#E85D04] p-10 rounded-3xl shadow-xl text-white hidden md:block">
                <div className="text-5xl font-black mb-2">18+</div>
                <div className="text-xs font-bold uppercase tracking-widest">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] tracking-tighter">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
                <div className="bg-[#0A2540]/5 w-16 h-16 rounded-2xl flex items-center justify-center text-[#E85D04] mx-auto mb-6">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-4">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A2540] rounded-3xl p-12 md:p-20 text-white relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Safety & Compliance</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <CheckCircle2 className="text-[#E85D04]" />
                    <span className="text-lg">USDOT #357779</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle2 className="text-[#E85D04]" />
                    <span className="text-lg">MC #226461</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle2 className="text-[#E85D04]" />
                    <span className="text-lg">Satisfactory Safety Rating Since 1990</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center lg:items-end">
                <Link to="/contact" className="px-10 py-5 bg-[#E85D04] text-white rounded-full font-bold hover:bg-[#D00000] transition-all text-center">
                  Partner with USAL Today
                </Link>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 opacity-5 -mb-20 -mr-20">
              <Shield className="w-96 h-96" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
