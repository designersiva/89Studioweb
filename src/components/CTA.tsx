import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-bg px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="container mx-auto bg-accent rounded-[3rem] p-12 md:p-24 text-black text-center relative overflow-hidden"
      >
        {/* Decorative Circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-black/5 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black/5 rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
            Ready to <span className="underline">dominate</span> your market?
          </h2>
          <p className="text-xl md:text-2xl font-medium mb-12 opacity-80">
            We only take on 3 new clients per month to ensure elite quality. Secure your spot for Q2 today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#contact"
              className="w-full sm:w-auto px-10 py-6 bg-black text-white font-bold rounded-full text-xl hover:scale-105 transition-transform flex items-center justify-center gap-3"
            >
              Book Your Strategy Call <ArrowRight />
            </a>
            <p className="text-sm font-bold uppercase tracking-widest opacity-60">
              Free 30-Min Audit Included
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
