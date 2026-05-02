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

      {/* Fleet Inventory Section */}
      <section id="fleet-inventory" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-[#0A2540] mb-4 tracking-tighter">Fleet Inventory</h2>
              <p className="text-gray-500 text-[13px] md:text-sm max-w-xl leading-relaxed">
                A live snapshot of our active asset distribution. All vehicles are equipped with ELD systems and undergo preventative maintenance every 15,000 miles.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:gap-4 bg-gray-50 p-2 rounded-2xl border border-gray-100 w-fit">
              <div className="px-4 md:px-6 py-2 bg-white rounded-xl shadow-sm text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#E85D04]">
                Active Units: 382
              </div>
              <div className="px-4 md:px-6 py-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400">
                Avg Age: 1.8 Years
              </div>
            </div>
          </div>

          <div className="relative group">
            {/* Mobile Scroll Indicator Icon */}
            <div className="md:hidden flex items-center justify-center gap-2 mb-4 text-[9px] font-bold text-brand-orange uppercase tracking-widest animate-pulse">
              <span>Swipe to view details</span>
              <ChevronRight className="w-3 h-3" />
            </div>

            <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
              <table className="w-full text-left min-w-[700px]">
                <thead>
                <tr className="border-b border-gray-100">
                  <th className="pb-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Unit ID</th>
                  <th className="pb-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Model & Specs</th>
                  <th className="pb-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Year</th>
                  <th className="pb-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
                  <th className="pb-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Last Known Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  { id: "T-2045", model: "Freightliner Cascadia", year: "2024", status: "In Service", location: "Houston, TX", color: "bg-green-500" },
                  { id: "T-2041", model: "Peterbilt 579 UltraLoft", year: "2023", status: "In Service", location: "Birmingham, AL", color: "bg-green-500" },
                  { id: "T-1998", model: "Volvo VNL 860", year: "2024", status: "Maintenance", location: "Dallas, TX", color: "bg-orange-500" },
                  { id: "T-2033", model: "Kenworth T680", year: "2023", status: "In Service", location: "Atlanta, GA", color: "bg-green-500" },
                  { id: "T-2050", model: "Freightliner Cascadia", year: "2024", status: "Resting", location: "Nashville, TN", color: "bg-blue-500" },
                  { id: "T-1855", model: "International LT Series", year: "2022", status: "In Service", location: "Charlotte, NC", color: "bg-green-500" },
                  { id: "T-2101", model: "Freightliner Cascadia", year: "2025", status: "Pre-Delivery", location: "Customs Hub", color: "bg-purple-500" }
                ].map((unit) => (
                  <tr key={unit.id} className="group hover:bg-gray-50 transition-colors">
                    <td className="py-6 font-black text-[#0A2540]">{unit.id}</td>
                    <td className="py-6">
                      <div className="text-sm font-bold text-[#0A2540]">{unit.model}</div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Class 8 Tractor</div>
                    </td>
                    <td className="py-6 text-sm font-medium text-gray-500">{unit.year}</td>
                    <td className="py-6">
                      <span className="inline-flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${unit.color} animate-pulse`} />
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#0A2540]">
                          {unit.status}
                        </span>
                      </span>
                    </td>
                    <td className="py-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-[#E85D04]" />
                        {unit.location}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
          
        <div className="mt-12 flex justify-center">
            <button className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#E85D04] transition-colors border-2 border-dashed border-gray-200 px-12 py-4 rounded-2xl w-full">
              Load More Asset Data (Displaying 7 of 382)
            </button>
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
