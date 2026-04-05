import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO, TechFlow",
    result: "3x Revenue in 12 Months",
    quote: "89Studio didn't just redesign our site; they redesigned our entire business model. The automation they built saves us 20 hours a week.",
  },
  {
    name: "Marcus Thorne",
    role: "Founder, Thorne Media",
    result: "500% Lead Increase",
    quote: "The branding is elite. We finally look like the industry leaders we are. Their strategy-first approach is what sets them apart.",
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director, Aura",
    result: "98% Client Satisfaction",
    quote: "Working with 89Studio is like having a secret weapon. They are fast, professional, and obsessed with our success.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">What Leaders <span className="text-accent">Say</span></h2>
          <p className="text-xl text-gray-400">Real results from real partnerships.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-[2.5rem] relative"
            >
              <Quote className="text-accent/20 absolute top-8 right-8" size={48} />
              <div className="text-accent font-bold text-sm mb-6 uppercase tracking-widest">
                {t.result}
              </div>
              <p className="text-lg text-gray-300 mb-8 italic leading-relaxed">
                "{t.quote}"
              </p>
              <div>
                <div className="font-bold text-xl">{t.name}</div>
                <div className="text-gray-500 text-sm">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
