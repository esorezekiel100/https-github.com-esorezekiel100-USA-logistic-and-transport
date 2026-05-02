import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6 text-left">
            <Link to="/" className="inline-block">
              <Logo scrolled={true} />
            </Link>
            <p className="text-gray-500 text-xs leading-relaxed font-medium mt-4">
              Precision delivery and strategic fleet management for North America's leading OEMs and shippers.
            </p>
            <div className="flex space-x-3">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="p-2 border border-gray-200 rounded-sm text-brand-blue hover:bg-brand-blue hover:text-white transition-all">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-brand-blue border-b border-gray-100 pb-2 mb-6">Navigation</h3>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-wider text-gray-400">
              <li><Link to="/about" className="hover:text-brand-orange transition-colors">Our Story</Link></li>
              <li><Link to="/services" className="hover:text-brand-orange transition-colors">Logistics Solutions</Link></li>
              <li><Link to="/fleet" className="hover:text-brand-orange transition-colors">Fleet & Tech</Link></li>
              <li><Link to="/track" className="hover:text-brand-orange transition-colors">Tracking Network</Link></li>
              <li><Link to="/quote" className="hover:text-brand-orange transition-colors">Request Quote</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-brand-blue border-b border-gray-100 pb-2 mb-6">HQ Operations</h3>
            <div className="space-y-6">
              <div>
                <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Corporate Address</div>
                <div className="text-xs font-bold text-brand-blue leading-tight">21021 Essman Lane,<br />Houston, TX 77073</div>
              </div>
              <div>
                <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Dispatch Control</div>
                <div className="text-xs font-bold text-brand-blue">+1 (713) 580-7463</div>
              </div>
            </div>
          </div>

          {/* Tracking Quick Link */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-brand-blue border-b border-gray-100 pb-2 mb-6">Fleet Tracking</h3>
            <p className="text-[11px] text-gray-500 font-medium mb-4">Enter Reference # for real-time status.</p>
            <form action="/track" className="flex">
              <input
                type="text"
                placeholder="USAL-48293"
                className="bg-brand-light border border-gray-200 rounded-l-sm px-4 py-3 text-xs font-bold focus:outline-none focus:border-brand-blue w-full uppercase tracking-wider"
              />
              <button className="bg-brand-blue text-white px-4 py-3 rounded-r-sm font-bold text-[10px] uppercase tracking-widest hover:bg-brand-blue-light transition-all">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-brand-light py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <div className="flex items-center space-x-6">
            <p>© {currentYear} US AutoLogistics</p>
            <span className="opacity-30">|</span>
            <div className="flex space-x-6">
              <span>USDOT #357779</span>
              <span>MC #226461</span>
            </div>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-brand-blue transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-brand-blue transition-colors">Terms</Link>
            <div className="flex items-center gap-1.5 text-green-600">
               <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span> Fleet Operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
