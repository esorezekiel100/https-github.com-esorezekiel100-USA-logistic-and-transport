import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
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
  }

  const primaryLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Fleet & Tech", path: "/fleet" },
    { name: "Logistics Portal", path: "/start-shipment" },
    { name: "Track", path: "/track" },
  ];

  const overflowLinks: NavLink[] = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Agents", path: "/become-agent" },
    { name: "Join Team", path: "/driver-onboarding" },
    { name: "Driver Dashboard", path: "/driver-dashboard", isPortal: true },
    { name: "Contact", path: "/contact" },
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
                  scrolled ? "text-brand-blue/70" : "text-white/80 drop-shadow-sm"
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
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 lg:hidden bg-brand-blue z-[100] px-8 pt-32"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white p-2 hover:bg-white/10 rounded-full transition-all"
            >
              <X className="h-10 w-10" />
            </button>
            <div className="space-y-6 text-left">
              {allLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-3xl font-black uppercase tracking-tighter hover:text-brand-orange transition-colors ${
                      link.isPortal ? "text-brand-orange" : "text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to="/quote"
                  onClick={() => setIsOpen(false)}
                  className="mt-12 inline-flex items-center bg-brand-orange text-white px-12 py-5 rounded-sm text-sm font-bold uppercase tracking-widest shadow-xl active:scale-95 transition-all"
                >
                  Request Rate <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
