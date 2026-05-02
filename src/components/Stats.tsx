import { motion } from "motion/react";

export default function Stats() {
  const stats = [
    { label: "Contracted Tractors", value: "382", suffix: "" },
    { label: "Qualified Drivers", value: "392", suffix: "" },
    { label: "Annual Miles", value: "28", suffix: "M+" },
    { label: "Years Experience", value: "18", suffix: "+" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="text-3xl sm:text-5xl md:text-7xl font-black text-[#0A2540] mb-2 tracking-tighter transition-colors group-hover:text-[#E85D04]">
                {stat.value}<span className="text-[#E85D04]">{stat.suffix}</span>
              </div>
              <div className="text-[10px] sm:text-sm font-bold uppercase tracking-widest text-gray-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
