import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, 
  X, 
  ChevronRight, 
  ChevronDown, 
  Home, 
  Truck, 
  MapPin, 
  Box, 
  Info, 
  Users, 
  Shield, 
  ArrowRight,
  Phone,
  LayoutDashboard
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  interface NavLink {
    name: string;
    path: string;
    isPortal?: boolean;
    icon: React.ElementType;
    desc?: string;
  }

  const primaryLinks: NavLink[] = [
    { name: "Home", path: "/", icon: Home, desc: "Main Gateway" },
    { name: "Our Fleet", path: "/fleet", icon: Truck, desc: "Vehicle Inventory" },
    { name: "Book Shipment", path: "/start-shipment", icon: Box, desc: "Schedule a Pickup" },
    { name: "Track Delivery", path: "/track", icon: MapPin, desc: "Live Status Updates" },
  ];

  const overflowLinks: NavLink[] = [
    { name: "About USAL", path: "/about", icon: Info, desc: "Our Company History" },
    { name: "Our Services", path: "/services", icon: Shield, desc: "Logistics Solutions" },
    { name: "Join Our Team", path: "/driver-onboarding", icon: Users, desc: "Driver Careers" },
    { name: "Driver Portal", path: "/driver-dashboard", isPortal: true, icon: LayoutDashboard, desc: "For Active Drivers" },
  ];

  const allLinks = [...primaryLinks, ...overflowLinks];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-2xl py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <Logo scrolled={scrolled} />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {primaryLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] font-black uppercase tracking-widest-plus transition-all hover:text-brand-orange ${
                  scrolled ? "text-brand-blue/70" : "text-white drop-shadow-md"
                } ${location.pathname === link.path ? "text-brand-orange !opacity-100" : ""}`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* More Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsMoreOpen(true)}
                className={`flex items-center gap-1 text-[10px] font-black uppercase tracking-widest-plus transition-all hover:text-brand-orange ${
                  scrolled ? "text-brand-blue/70" : "text-white/80 drop-shadow-sm"
                } ${overflowLinks.some(l => l.path === location.pathname) ? "text-brand-orange" : ""}`}
              >
                More <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isMoreOpen ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {isMoreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseLeave={() => setIsMoreOpen(false)}
                    className="absolute right-0 mt-2 w-56 bg-white shadow-2xl rounded-sm border-t-4 border-brand-orange overflow-hidden z-[60]"
                  >
                    <div className="py-2">
                      {overflowLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setIsMoreOpen(false)}
                          className={`block px-6 py-3 text-[10px] font-black uppercase tracking-widest-plus transition-all hover:bg-brand-light hover:text-brand-orange whitespace-nowrap ${
                            link.isPortal ? "text-brand-orange border-l-2 border-brand-orange" : "text-brand-blue/70"
                          } ${location.pathname === link.path ? "bg-brand-light text-brand-orange" : ""}`}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/quote"
              className="bg-brand-orange text-white px-6 py-2.5 rounded-sm font-bold text-[10px] uppercase tracking-widest hover:bg-brand-blue transition-all shadow-lg ml-4"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${scrolled ? "text-brand-blue" : "text-white"}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 lg:hidden z-[100]">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-brand-blue/80 backdrop-blur-md"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
              className="absolute inset-y-0 right-0 w-[90%] max-w-[420px] bg-[#0A2540] shadow-3xl flex flex-col overflow-hidden"
            >
              {/* Decorative Brand Watermark */}
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 select-none pointer-events-none opacity-[0.03] text-[120px] font-black tracking-[-0.1em] text-white">
                USAL-CORP
              </div>

              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange opacity-10 rounded-full -mr-40 -mt-40 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue opacity-30 rounded-full -ml-40 -mb-40 blur-3xl" />
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                   style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />

              <div className="relative z-10 flex flex-col h-full">
                {/* Header Area */}
                <div className="p-8 pt-12 flex justify-between items-center border-b border-white/5 bg-brand-blue/20 backdrop-blur-sm">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-orange mb-1">Navigation</div>
                    <div className="text-2xl font-black text-white tracking-tighter">USAL <span className="text-white/40">SYSTEMS</span></div>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="group p-4 bg-white/5 hover:bg-brand-orange rounded-2xl transition-all active:scale-90"
                  >
                    <X className="h-6 w-6 text-white group-hover:rotate-90 transition-transform" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-8 custom-scrollbar">
                  <div className="space-y-3 mb-12">
                    <div className="px-2 mb-4 text-[9px] font-black uppercase tracking-[0.3em] text-white/30">Priority Access</div>
                    {primaryLinks.map((link, i) => (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
                      >
                        <Link
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className="group relative block p-5 rounded-3xl transition-all bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-brand-orange/40 overflow-hidden shadow-xl"
                        >
                          <div className="flex items-center gap-5">
                            <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
                              <link.icon size={26} strokeWidth={2.5} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <span className="text-lg font-black uppercase tracking-tighter text-white group-hover:text-brand-orange transition-colors">
                                  {link.name}
                                </span>
                                <ChevronRight className="w-5 h-5 text-white/10 group-hover:text-brand-orange group-hover:translate-x-1 transition-all" />
                              </div>
                              <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1 group-hover:text-white/60 transition-colors">
                                {link.desc}
                              </p>
                            </div>
                          </div>
                          {/* Animated Accent */}
                          <div className="absolute left-0 top-0 w-1 h-full bg-brand-orange scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <div className="px-2 mb-4 text-[9px] font-black uppercase tracking-[0.3em] text-white/30">Intelligence & Support</div>
                    <div className="grid grid-cols-1 gap-3">
                      {overflowLinks.map((link, i) => (
                        <motion.div
                          key={link.path}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + (i * 0.05) }}
                        >
                          <Link
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`group flex items-center gap-4 p-4 rounded-2xl transition-all border ${
                              link.isPortal 
                                ? "bg-brand-orange text-white border-brand-orange shadow-lg shadow-brand-orange/20" 
                                : "bg-white/5 border-white/5 hover:bg-white/10"
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                              link.isPortal ? "bg-white/20" : "bg-white/5 text-white/40 group-hover:text-brand-orange"
                            }`}>
                              <link.icon size={20} />
                            </div>
                            <div>
                              <div className="text-sm font-black uppercase tracking-tighter">{link.name}</div>
                              <div className={`text-[9px] font-bold uppercase tracking-widest opacity-60 ${
                                link.isPortal ? "text-white" : "text-white/40"
                              }`}>{link.desc}</div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-10"
                  >
                    <Link
                      to="/quote"
                      onClick={() => setIsOpen(false)}
                      className="group w-full relative flex items-center justify-center overflow-hidden bg-white text-brand-blue px-10 py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-[11px] shadow-3xl transition-all hover:-translate-y-1 active:scale-95"
                    >
                      <div className="absolute inset-0 bg-brand-orange -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
                      <span className="relative z-10 group-hover:text-white flex items-center">
                        Get a Quote <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </span>
                    </Link>
                  </motion.div>
                </div>

                {/* Footer Info Hub */}
                <div className="mt-auto p-8 bg-brand-blue/30 backdrop-blur-md border-t border-white/5">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-green-500/10 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-white">System Active</div>
                      </div>
                      <p className="text-[9px] font-bold text-white/30 uppercase leading-relaxed">Nationwide Coverage <br/> Across 48 States</p>
                    </div>
                    <div className="space-y-2 text-right">
                      <p className="text-[9px] font-black uppercase tracking-widest text-brand-orange">24/7 Support</p>
                      <p className="text-lg font-black text-white tracking-tighter leading-none">+1 (713) 580-7463</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )
}
      </AnimatePresence>
    </nav>
  );
}
