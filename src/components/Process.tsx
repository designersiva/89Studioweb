import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Deep dive into your business, goals, and market gaps to find the winning angle.",
    benefit: "Outcome: A rock-solid foundation for growth.",
  },
  {
    number: "02",
    title: "Strategize",
    description: "Crafting a bespoke roadmap that aligns design, marketing, and automation.",
    benefit: "Outcome: No guesswork, just precision execution.",
  },
  {
    number: "03",
    title: "Execute",
    description: "Our elite team brings the vision to life with high-end design and tech.",
    benefit: "Outcome: Premium assets that convert.",
  },
  {
    number: "04",
    title: "Scale",
    description: "Continuous optimization and scaling to ensure long-term market dominance.",
    benefit: "Outcome: Sustainable growth and high ROI.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white text-black rounded-[4rem] mx-4 my-8">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">How We <span className="text-gray-400">Work</span></h2>
          <p className="text-xl text-gray-600">
            A streamlined, 4-step framework designed for speed and results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-8xl font-display font-black text-gray-100 absolute -top-10 -left-4 z-0">
                {step.number}
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-6">{step.description}</p>
                <div className="inline-block px-4 py-2 bg-black text-white text-xs font-bold rounded-lg">
                  {step.benefit}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
