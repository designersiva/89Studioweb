import { motion } from "motion/react";
import { Zap, Target, ShieldCheck, BarChart3, Clock } from "lucide-react";

const reasons = [
  {
    title: "Elite Speed",
    description: "We move at the speed of startups. No bureaucracy, just high-velocity execution.",
    icon: Zap,
  },
  {
    title: "Strategy-First",
    description: "We never design without a 'why'. Every pixel and word is backed by market data.",
    icon: Target,
  },
  {
    title: "Premium Design",
    description: "We build high-end visual experiences that position you as a market leader.",
    icon: ShieldCheck,
  },
  {
    title: "Automation Advantage",
    description: "We don't just build websites; we build self-operating business systems.",
    icon: BarChart3,
  },
  {
    title: "Results Mindset",
    description: "We are obsessed with your ROI. If it doesn't move the needle, we don't do it.",
    icon: Clock,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-bg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
            <h2 className="text-5xl md:text-7xl font-bold mb-8 relative z-10">
              Why <span className="text-accent">89Studio?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Most agencies are order-takers. We are strategic partners. We challenge your assumptions to find the most efficient path to scale.
            </p>
            <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 relative group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Our Team"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-2xl font-bold">The 89Studio Advantage</p>
                <p className="text-accent font-mono text-sm">Built for the top 1%</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-black transition-all duration-300">
                  <reason.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
