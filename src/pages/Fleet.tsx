import { motion } from "motion/react";
import { Truck, MapPin, Gauge, ShieldCheck, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Fleet() {
  const fleetStats = [
    { label: "Owned Tractors", value: "29", detail: "Late-model fleet" },
    { label: "Leased Tractors", value: "353", detail: "Tier-1 contracts" },
    { label: "Total Asset Fleet", value: "382", detail: "Tractors & Trailers" },
    { label: "Qualified Drivers", value: "392", detail: "FMCSA Gold Standard" }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0A2540] py-32 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
              Modern Fleet. <br />
              <span className="text-[#E85D04]">Maximum Reliability.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Equipped with the latest technology and maintained to the highest industry standards, our fleet is the backbone of the North American automotive supply chain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {fleetStats.map((stat, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-[40px] border border-gray-100 group hover:bg-[#0A2540] hover:text-white transition-all duration-500">
                <div className="text-4xl font-black mb-4 group-hover:text-[#E85D04] transition-colors">{stat.value}</div>
                <div className="text-sm font-bold uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-xs text-gray-400 group-hover:text-gray-300">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black text-[#0A2540] mb-8 tracking-tighter">Technology-Driven Logistics</h2>
              <div className="space-y-12">
                <div className="flex space-x-6">
                  <div className="bg-white p-4 rounded-2xl shadow-sm h-fit text-[#E85D04]">
                    <Gauge className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3">100% ELD Integration</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Every tractor in our fleet is equipped with advanced Electronic Logging Devices for precise location tracking and HOS compliance.</p>
                  </div>
                </div>
                <div className="flex space-x-6">
                  <div className="bg-white p-4 rounded-2xl shadow-sm h-fit text-[#E85D04]">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3">Real-Time Data Pipelines</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Our TMS integrates directly with OEM systems via REST API to ensure seamless data flow and automated status updates.</p>
                  </div>
                </div>
                <div className="flex space-x-6">
                  <div className="bg-white p-4 rounded-2xl shadow-sm h-fit text-[#E85D04]">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3">Live Fleet Visualization</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Our dispatch team monitors the entire national fleet on a live GIS dashboard for rapid response to traffic or weather delays.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-12 rounded-[50px] shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-full h-2 bg-[#E85D04]" />
               <div className="flex justify-between items-center mb-10">
                 <div className="font-black text-2xl">Operating Efficiency</div>
                 <div className="text-3xl font-bold text-[#E85D04]">99.8%</div>
               </div>
               <div className="space-y-6">
                 <div>
                   <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2">
                     <span>On-Time Performance</span>
                     <span>98%</span>
                   </div>
                   <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                     <motion.div initial={{ width: 0 }} whileInView={{ width: "98%" }} className="h-full bg-[#0A2540]" />
                   </div>
                 </div>
                 <div>
                   <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2">
                     <span>Maintenance Score</span>
                     <span>96%</span>
                   </div>
                   <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                     <motion.div initial={{ width: 0 }} whileInView={{ width: "96%" }} className="h-full bg-[#0A2540]" />
                   </div>
                 </div>
                 <div>
                   <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2">
                     <span>Driver Retention</span>
                     <span>92%</span>
                   </div>
                   <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                     <motion.div initial={{ width: 0 }} whileInView={{ width: "92%" }} className="h-full bg-[#0A2540]" />
                   </div>
                 </div>
               </div>
               <div className="mt-12 pt-12 border-t border-gray-100">
                 <div className="flex items-center space-x-4 mb-4">
                   <div className="w-12 h-12 bg-gray-100 rounded-full" />
                   <div>
                     <div className="font-bold text-sm">28.8M Miles Driven</div>
                     <div className="text-xs text-gray-500">2024 Cumulative (contiguous US)</div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-[#0A2540] mb-8 tracking-tighter">National Coverage Hubs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            Strategically located to serve the most active automotive manufacturing and sales corridors in North America.
          </p>
          
          <div className="relative aspect-video max-w-5xl mx-auto bg-gray-100 rounded-[60px] overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-[#0A2540] opacity-5 overflow-hidden">
               {/* Decorative Grid */}
               <div className="grid grid-cols-12 h-full border-gray-900/10 border-r border-t" />
            </div>
            
            {/* Mock Map Markers */}
            <div className="absolute top-[60%] left-[60%] animate-pulse group-hover:scale-150 transition-transform cursor-pointer">
              <div className="bg-[#E85D04] p-3 rounded-full text-white shadow-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="absolute mt-2 -ml-16 bg-white p-3 rounded-xl shadow-xl w-40 text-left border border-gray-100">
                <div className="font-bold text-xs">Houston, TX (HQ)</div>
                <div className="text-[10px] text-gray-500">Primary Ops & Maintenance</div>
              </div>
            </div>

            <div className="absolute top-[45%] left-[75%] animate-bounce group-hover:scale-150 transition-transform cursor-pointer">
              <div className="bg-[#E85D04] p-3 rounded-full text-white shadow-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="absolute mt-2 -ml-16 bg-white p-3 rounded-xl shadow-xl w-40 text-left border border-gray-100">
                <div className="font-bold text-xs">Birmingham, AL</div>
                <div className="text-[10px] text-gray-500">Regional Distribution Hub</div>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-gray-900/50 text-white text-left flex justify-between items-end">
               <div>
                  <div className="text-sm font-bold uppercase tracking-widest mb-1 opacity-70">Service Area</div>
                  <div className="text-3xl font-black tracking-tighter italic uppercase text-[#E85D04]">Contiguous United States</div>
               </div>
               <Link to="/contact" className="bg-white text-[#0A2540] px-8 py-4 rounded-full font-bold flex items-center hover:bg-[#E85D04] hover:text-white transition-all">
                 Request Access <ChevronRight className="ml-2 w-5 h-5" />
               </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
