import React from "react";

interface LogoProps {
  scrolled?: boolean;
  className?: string;
}

export default function Logo({ scrolled = false, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 md:gap-3 group select-none ${className}`}>
      {/* Icon Mark */}
      <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
        {/* The "Globe/Network" Element - Abstracted as a high-tech sphere */}
        <div className={`absolute inset-0 rounded-full border-2 transition-all duration-500 scale-90 group-hover:scale-100 ${
          scrolled ? "border-brand-blue/20" : "border-white/20"
        }`} />
        
        {/* Minimalist Globe Lines */}
        <svg 
          viewBox="0 0 100 100" 
          className={`absolute inset-1 transition-transform duration-700 group-hover:rotate-45 ${
            scrolled ? "text-brand-blue/30" : "text-white/30"
          }`}
        >
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M50 2L50 98M2 50L98 50" stroke="currentColor" strokeWidth="0.5" />
          <ellipse cx="50" cy="50" rx="20" ry="48" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <ellipse cx="50" cy="50" rx="48" ry="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>

        {/* The "Star & Stripes" Identity */}
        <div className="relative z-10 scale-90 md:scale-100">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M12 2L14.5 9H22L16 13.5L18.5 20.5L12 16L5.5 20.5L8 13.5L2 9H9.5L12 2Z" 
              className={`transition-colors duration-300 ${scrolled ? "fill-brand-blue" : "fill-brand-orange"}`}
            />
            {/* Motion Lines (Stripes) */}
            <rect x="0" y="11" width="6" height="1.5" rx="0.75" className={scrolled ? "fill-brand-blue/40" : "fill-white/40"} />
            <rect x="-2" y="14" width="4" height="1.5" rx="0.75" className={scrolled ? "fill-brand-blue/40" : "fill-white/40"} />
          </svg>
        </div>
      </div>

      {/* Typography Lockup */}
      <div className="leading-none text-left">
        <div className="flex items-baseline gap-1">
          <span className={`text-xl md:text-2xl font-black italic tracking-tighter transition-colors duration-300 ${
            scrolled ? "text-brand-blue" : "text-white"
          }`}>
            USA
          </span>
          <span className={`text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
            scrolled ? "text-brand-orange" : "text-brand-orange font-black"
          }`}>
            Logistics
          </span>
        </div>
        <div className={`text-[7px] md:text-[9px] font-black uppercase tracking-widest-plus mt-0.5 transition-all duration-300 ${
          scrolled ? "text-brand-gray" : "text-white/40"
        }`}>
          & TRANSPORT SOLUTIONS
        </div>
      </div>
    </div>
  );
}
