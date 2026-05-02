import { motion } from "motion/react";
import { Truck, Shield, Globe, Box, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const serviceList = [
    {
      id: "auto-transport",
      title: "Auto Transport",
      tagline: "Precision vehicle movement.",
      desc: "Comprehensive logistics solutions for OEMs, dealerships, and individual owners. Open and enclosed carrier options available nationwide.",
      icon: <Truck className="w-10 h-10" />,
      features: ["OEM Tier-1 Logistics", "Interstate Transport", "Enclosed luxury handling", "Real-time ETA tracking"]
    },
    {
      id: "brokerage",
      title: "Brokerage Services",
      tagline: "USAL Solutions network.",
      desc: "Our nationwide brokerage network handles full truckload and specialized hauls through a vetted list of premier carrier partners.",
      icon: <Globe className="w-10 h-10" />,
      features: ["National Carrier Network", "Dedicated Account Managers", "Single point of billing", "Vetted safety compliance"]
    },
    {
      id: "truckload",
      title: "Full Truckload",
      tagline: "Maximum capacity.",
      desc: "Reliable dry van and specialized carrier services covering the contiguous United States with Houston and Birmingham hubs.",
      icon: <Box className="w-10 h-10" />,
      features: ["382 Total Tractors", "Scheduled high-volume hauls", "Dedicated route optimization", "100% ELD Tracking"]
    },
    {
      id: "hazmat",
      title: "Hazmat & Specialized",
      tagline: "Safe handling.",
      desc: "Licensed and certified transport for hazardous materials and sensitive cargo requiring strict DOT regulation compliance.",
      icon: <Shield className="w-10 h-10" />,
      features: ["DOT Certified Hazmat", "Highly trained drivers", "Spill mitigation protocols", "Strict regulatory audit chain"]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0A2540] py-24 md:py-40 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black mb-8 tracking-tighter shadow-sm">
              Integrated <span className="text-[#E85D04]">Logistics</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              From the assembly line to the showroom floor, our solutions are engineered for safety, speed, and absolute reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {serviceList.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 sm:p-12 rounded-[30px] sm:rounded-[40px] shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-2xl transition-all group"
              >
                <div>
                  <div className="bg-[#0A2540]/5 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center text-[#E85D04] mb-6 sm:mb-8 group-hover:bg-[#E85D04] group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <div className="mb-6 sm:mb-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#E85D04] mb-2 block">{service.tagline}</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#0A2540] tracking-tighter">{service.title}</h2>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-10 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="space-y-3 sm:space-y-4 mb-10 sm:mb-12">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-center text-[13px] sm:text-sm font-medium text-gray-700">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#E85D04] mr-3 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/quote"
                  className="inline-flex items-center font-bold text-[#E85D04] group-hover:text-[#D00000]"
                >
                  Request a Solution <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why USAL */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1000" 
                alt="Trucking Excellence" 
                className="rounded-[30px] shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-black text-[#0A2540] mb-8 tracking-tighter">Why Choose USAL?</h2>
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start space-x-4 md:space-x-6">
                  <div className="text-[#E85D04] font-bold text-3xl md:text-4xl">01</div>
                  <div>
                    <h4 className="font-bold text-lg md:text-xl mb-2 text-[#0A2540]">100% Visibility</h4>
                    <p className="text-gray-600 text-[13px] md:text-sm">Full ELD integration across our entire fleet provides real-time GPS tracking for every vehicle.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 md:space-x-6">
                  <div className="text-[#E85D04] font-bold text-3xl md:text-4xl">02</div>
                  <div>
                    <h4 className="font-bold text-lg md:text-xl mb-2 text-[#0A2540]">Superior Equipment</h4>
                    <p className="text-gray-600 text-[13px] md:text-sm">We maintain a 10/10 equipment quality rating, ensuring damage-free delivery every time.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 md:space-x-6">
                  <div className="text-[#E85D04] font-bold text-3xl md:text-4xl">03</div>
                  <div>
                    <h4 className="font-bold text-lg md:text-xl mb-2 text-[#0A2540]">Expert Drivers</h4>
                    <p className="text-gray-600 text-[13px] md:text-sm">Our 392 drivers are among the most qualified in the industry with rigorous safety training.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-[#E85D04] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 md:mb-8 tracking-tighter">Custom Logistical Planning</h2>
          <p className="text-lg md:text-xl mb-8 md:mb-12 opacity-90">Our expert team can design a custom logistics workflow for your specific national or regional needs.</p>
          <Link to="/contact" className="inline-block px-8 sm:px-12 py-4 sm:py-5 bg-[#0A2540] text-white rounded-full font-bold hover:bg-gray-900 transition-all text-base sm:text-lg">
            Consult With Our Experts
          </Link>
        </div>
      </section>
    </div>
  );
}
