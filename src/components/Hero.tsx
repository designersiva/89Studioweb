import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-widest uppercase mb-6 text-gray-400">
              Premium Creative Agency
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[1.1] mb-8">
              We build <span className="text-accent">digital legacies</span> for the bold.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl">
              89Studio is a high-performance agency merging elite design, strategic marketing, and intelligent automation to scale your brand.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href="#contact"
                className="group w-full sm:w-auto px-8 py-5 bg-white text-black font-bold rounded-full hover:bg-accent transition-all flex items-center justify-center gap-3 text-lg neon-glow"
              >
                Book a Strategy Call
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#work"
                className="group w-full sm:w-auto px-8 py-5 border border-white/20 hover:border-white/40 font-bold rounded-full transition-all flex items-center justify-center gap-3 text-lg"
              >
                <Play size={20} fill="currentColor" />
                View Our Work
              </a>
            </div>

            <div className="mt-16 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-bg bg-gray-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <p>Trusted by 150+ global brands & startups</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
      >
        <div className="w-1 h-2 bg-accent rounded-full" />
      </motion.div>
    </section>
  );
}
