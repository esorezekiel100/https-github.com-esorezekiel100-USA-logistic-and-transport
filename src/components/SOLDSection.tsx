import { motion } from "motion/react";
import { Shield, Clock, Gavel, CheckCircle } from "lucide-react";

export default function SOLDSection() {
  const values = [
    {
      letter: "S",
      title: "Safely",
      description: "Superior FMCSA safety ratings since 1990. We prioritize the security of your vehicles and our drivers above all else.",
      icon: <Shield className="w-12 h-12" />,
      color: "bg-blue-500"
    },
    {
      letter: "O",
      title: "On Time",
      description: "Advanced logistical planning ensures your shipment arrives exactly when scheduled, every single time.",
      icon: <Clock className="w-12 h-12" />,
      color: "bg-orange-500"
    },
    {
      letter: "L",
      title: "Legally Compliant",
      description: "Fully licensed by DOT and FMCSA. We adhere strictly to all interstate transport and hazmat regulations.",
      icon: <Gavel className="w-12 h-12" />,
      color: "bg-green-500"
    },
    {
      letter: "D",
      title: "Damage-Free",
      description: "Precise loading protocols and 10/10 equipment quality ratings guarantee your cargo arrives in pristine condition.",
      icon: <CheckCircle className="w-12 h-12" />,
      color: "bg-red-500"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10 md:mb-16">
          <div className="inline-block px-3 py-1 bg-brand-blue text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest-plus mb-4 rounded-sm">
            Operational Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-brand-blue uppercase">
            The S.O.L.D. Standard
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 group rounded-sm"
            >
              <div className="text-3xl font-black mb-4 text-brand-orange group-hover:scale-110 transition-transform origin-left">
                {item.letter}
              </div>
              <h3 className="text-[13px] font-bold mb-3 uppercase tracking-widest text-brand-blue border-b border-gray-100 pb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
