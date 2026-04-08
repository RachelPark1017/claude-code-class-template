import { motion } from "motion/react";
import { Cpu, Layers, Clock } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { siteConfig } from "../../config/site.config";

const ICON_MAP = { Cpu, Layers, Clock };

export default function WhyNowSection() {
  const items = siteConfig.whyNow.items.map((item) => ({
    ...item,
    icon: ICON_MAP[item.icon as keyof typeof ICON_MAP],
  }));

  const headingLines = siteConfig.whyNow.heading.split("\n");

  return (
    <section id="why-now" className="py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Why Now">
          {headingLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < headingLines.length - 1 && <br />}
            </span>
          ))}
        </SectionHeading>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] hover:border-orange-500/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
