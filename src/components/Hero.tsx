import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      label: "Premier Auto Transport",
      title: "Driving Excellence in Auto Logistics",
      desc: "Precision delivery and strategic fleet management for the nation's leading OEMs and commercial shippers.",
      image: "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?auto=format&fit=crop&q=80&w=2000",
      ctaLabel: "Get a Quote",
      ctaLink: "/quote",
    },
    {
      label: "National Network",
      title: "North American Supply Chain Leader",
      desc: "Operating 382 modern tractors across contiguous US with dedicated hubs in Houston and Birmingham.",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000",
      ctaLabel: "View Fleet",
      ctaLink: "/fleet",
    },
    {
      label: "Safety First",
      title: "The S.O.L.D. Standard Operations",
      desc: "Superior FMCSA safety ratings since 2008. We prioritize the security of your vehicles and our professional drivers.",
      image: "https://images.unsplash.com/photo-1586528116311-ad86d704d275?auto=format&fit=crop&q=80&w=2000",
      ctaLabel: "Our Philosophy",
      ctaLink: "/about",
    },
    {
      label: "Global Reach",
      title: "Strategic Shipping Solutions",
      desc: "Comprehensive port-to-dealer logistics with optimized routing and real-time network visibility.",
      image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=2000",
      ctaLabel: "Learn More",
      ctaLink: "/services",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-brand-blue">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Top-down Shadow Overlay (Protects Navbar legibility) */}
          <div className="absolute inset-0 z-15 bg-gradient-to-b from-black/80 via-black/20 to-transparent h-64 pointer-events-none" />

          {/* Side Gradient Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-blue via-brand-blue/80 to-transparent" />
          
          {/* Background Pattern Layer */}
          <div className="absolute inset-0 z-[5] opacity-20 pointer-events-none">
            <div 
              className="absolute w-full h-full" 
              style={{ 
                backgroundImage: 'linear-gradient(30deg, #1E3A5F 12%, transparent 12.5%, transparent 87%, #1E3A5F 87.5%, #1E3A5F), linear-gradient(150deg, #1E3A5F 12%, transparent 12.5%, transparent 87%, #1E3A5F 87.5%, #1E3A5F), linear-gradient(60deg, #1E3A5F 25%, transparent 25.5%, transparent 75%, #1E3A5F 75%, #1E3A5F)', 
                backgroundSize: '80px 140px' 
              }}
            />
          </div>

          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url("${slides[currentSlide].image}")`,
              filter: 'brightness(0.5)'
            }}
          />
          
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center pt-24 md:pt-48">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4 md:space-y-6"
              >
                <div className="inline-block px-3 py-1 bg-brand-orange text-white text-[10px] md:text-[11px] font-bold uppercase tracking-widest rounded-sm">
                  {slides[currentSlide].label}
                </div>
                
                <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.95]">
                  {slides[currentSlide].title.split(" ").slice(0, 2).join(" ")} <br />
                  <span className="text-white opacity-80">{slides[currentSlide].title.split(" ").slice(2).join(" ")}</span>
                </h1>
                
                <p className="text-[12px] sm:text-[13px] md:text-lg text-gray-300 max-w-xs sm:max-w-md leading-relaxed font-light">
                  {slides[currentSlide].desc}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                  <Link
                    to="/start-shipment"
                    className="inline-flex items-center justify-center px-6 md:px-10 py-3 md:py-4 bg-brand-orange text-white rounded-sm font-bold uppercase tracking-widest text-[10px] md:text-[11px] hover:bg-white hover:text-brand-blue transition-all shadow-xl hover:-translate-y-1 group"
                  >
                    Book Now <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to={slides[currentSlide].ctaLink}
                    className="inline-flex items-center justify-center px-6 md:px-10 py-3 md:py-4 bg-white/10 text-white border border-white/20 rounded-sm font-bold uppercase tracking-widest text-[10px] md:text-[11px] hover:bg-white/20 transition-all backdrop-blur-sm"
                  >
                    {slides[currentSlide].ctaLabel}
                  </Link>
                </div>
                <div className="sm:hidden">
                  <Link
                    to="/track"
                    className="inline-flex items-center text-white/60 hover:text-white transition-all text-[10px] font-bold uppercase tracking-widest"
                  >
                    Track Shipment
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 transition-all duration-300 ${
              currentSlide === i ? "w-16 bg-brand-orange" : "w-8 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="absolute right-12 bottom-12 z-30 flex space-x-4">
        <button 
          onClick={prevSlide}
          className="p-3 border border-white/20 rounded-sm text-white hover:bg-white hover:text-brand-blue transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={nextSlide}
          className="p-3 border border-white/20 rounded-sm text-white hover:bg-white hover:text-brand-blue transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Vertical Status Label */}
      <div className="absolute top-1/2 -right-24 -translate-y-1/2 rotate-90 z-20 hidden xl:block">
        <div className="flex items-center space-x-6 text-white/40 font-black uppercase tracking-widest text-[10px]">
          <span>Fleet Connected</span>
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span>EST. 2008</span>
        </div>
      </div>
    </section>
  );
}
