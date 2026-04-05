import { motion } from "motion/react";
import { Palette, Megaphone, Cpu, Lightbulb } from "lucide-react";

const services = [
  {
    title: "Branding & Design",
    description: "We create visual identities that don't just look good—they dominate the market and command attention.",
    benefit: "Result: Instant brand authority and premium perception.",
    icon: Palette,
  },
  {
    title: "Digital Marketing",
    description: "Data-driven growth strategies that turn cold traffic into loyal customers through precision targeting.",
    benefit: "Result: Scalable revenue and consistent lead generation.",
    icon: Megaphone,
  },
  {
    title: "Automation Systems",
    description: "Custom AI and workflow automations that buy back your time and eliminate operational bottlenecks.",
    benefit: "Result: 40% increase in operational efficiency.",
    icon: Cpu,
  },
  {
    title: "Consulting & Strategy",
    description: "Elite business consulting to navigate scaling challenges and optimize your entire ecosystem.",
    benefit: "Result: A clear, actionable roadmap to market leadership.",
    icon: Lightbulb,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-accent">Core Expertise</span>
            </h2>
            <p className="text-xl text-gray-400">
              We don't do generic. We build custom engines designed specifically for your brand's growth.
            </p>
          </div>
          <div className="text-right">
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-2">Capabilities</p>
            <div className="h-1 w-24 bg-accent ml-auto" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl group hover:bg-white/10 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-black transition-all duration-500">
                <service.icon size={28} className="text-accent group-hover:text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <p className="text-sm font-bold text-white border-t border-white/10 pt-4">
                {service.benefit}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
