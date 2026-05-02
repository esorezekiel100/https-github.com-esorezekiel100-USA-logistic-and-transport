import Hero from "../components/Hero";
import Stats from "../components/Stats";
import SOLDSection from "../components/SOLDSection";
import { ArrowRight, Truck, Shield, Clock, Gavel, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Home() {
  const services = [
    {
      title: "Auto Transport",
      description: "OEM vehicle logistics and interstate auto carrier services with open or enclosed options.",
      icon: <Truck className="w-8 h-8" />,
      link: "/services"
    },
    {
      title: "Brokerage Services",
      description: "USAL Solutions: A nationwide network for full truckload and specialized logistics.",
      icon: <Shield className="w-8 h-8" />,
      link: "/services"
    },
    {
      title: "Hazmat Transport",
      description: "Specialized handling and transport of hazardous materials with full DOT compliance.",
      icon: <Gavel className="w-8 h-8" />,
      link: "/services"
    }
  ];

  return (
    <div className="overflow-hidden">
      <Hero />
      
      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Mocking partner/license logos */}
            <div className="flex items-center space-x-2 font-bold text-xl text-gray-800">FMCSA</div>
            <div className="flex items-center space-x-2 font-bold text-xl text-gray-800">U.S. DOT</div>
            <div className="flex items-center space-x-2 font-bold text-xl text-gray-800">FRIEDKIN GROUP</div>
            <div className="flex items-center space-x-2 font-bold text-xl text-gray-800">BBB ACCREDITED</div>
          </div>
        </div>
      </section>

      <SOLDSection />
      
      <Stats />

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-4 tracking-tighter">
              Comprehensive Logistics Solutions
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              From individual vehicle transport to large-scale fleet management, we deliver excellence across every mile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="bg-[#0A2540]/5 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-[#E85D04] mb-6">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#0A2540] mb-4">{service.title}</h3>
                <p className="text-gray-600 text-[13px] md:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-sm font-bold text-[#E85D04] hover:text-[#D00000] group"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-time Tracking CTA */}
      <section className="py-16 md:py-24 bg-[#0A2540] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E85D04]/10 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tighter">
                Transparency at Every Turn
              </h2>
              <p className="text-sm md:text-base text-gray-400 mb-6 md:mb-8 max-w-lg leading-relaxed">
                Connect to USAL's advanced tracking system for real-time updates on your shipment's progress. 100% electronic tracking on all movements.
              </p>
              <Link
                to="/track"
                className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-[#E85D04] text-white rounded-full font-bold text-sm md:text-base hover:bg-[#D00000] transition-all"
              >
                Start Tracking <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex items-center space-x-4 pb-4 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[11px] md:text-sm font-medium">System Status: Operational</span>
                </div>
                <div className="pt-4">
                  <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Track Sample</label>
                  <div className="flex flex-col sm:flex-row">
                    <div className="bg-white/10 flex-grow px-4 py-3 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none font-mono text-sm">USAL-2024-8842</div>
                    <button className="bg-white text-[#0A2540] px-6 py-3 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none font-bold text-sm">Track</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-6xl font-bold text-[#0A2540] mb-6 md:mb-8 tracking-tighter">
            Ready to experience the USAL difference?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 md:mb-12">
            Contact us today for a custom quote or more information about our national brokerage network.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <Link
              to="/quote"
              className="px-8 md:px-10 py-3 md:py-4 bg-[#0A2540] text-white rounded-full font-bold text-sm md:text-base hover:bg-[#1E3A5F] transition-all"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+17135807463"
              className="px-8 md:px-10 py-3 md:py-4 border-2 border-[#0A2540] text-[#0A2540] rounded-full font-bold text-sm md:text-base hover:bg-gray-50 transition-all flex items-center justify-center"
            >
              <Phone className="mr-2 w-4 h-4 md:w-5 md:h-5" /> +1 (713) 580-7463
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
