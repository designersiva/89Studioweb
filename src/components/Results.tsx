import { motion } from "motion/react";

const stats = [
  { label: "Revenue Growth", value: "310%", suffix: "+" },
  { label: "Leads Generated", value: "50k", suffix: "+" },
  { label: "Client Retention", value: "98", suffix: "%" },
  { label: "Projects Delivered", value: "450", suffix: "+" },
];

export default function Results() {
  return (
    <section className="py-24 bg-bg overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              We don't sell services. We sell <span className="text-accent">Outcomes.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Our methodology is rooted in data and psychological triggers. We don't just make things look pretty; we make them perform.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent flex-shrink-0 mt-1" />
                <p className="text-lg font-medium">Eliminate guesswork with strategy-first execution.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent flex-shrink-0 mt-1" />
                <p className="text-lg font-medium">Scale faster with intelligent automation systems.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent flex-shrink-0 mt-1" />
                <p className="text-lg font-medium">Command premium prices with elite brand positioning.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-3xl text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
