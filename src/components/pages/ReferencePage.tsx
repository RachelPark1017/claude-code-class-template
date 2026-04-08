import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, BookOpen } from "lucide-react";
import { siteConfig } from "../../config/site.config";

const references = siteConfig.reference.articles;

export default function ReferencePage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-orange-500/30">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-12 cursor-pointer"
        >
          <ArrowLeft size={18} />
          <span>돌아가기</span>
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <BookOpen size={24} className="text-orange-400" />
            <p className="text-orange-400 font-mono text-sm tracking-widest uppercase">
              Reference
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {siteConfig.reference.heading}
          </h1>
          <p className="text-lg text-zinc-400 mb-16">
            {siteConfig.reference.subheading}
          </p>
        </motion.div>

        <div className="space-y-6">
          {references.map((ref, i) => (
            <motion.a
              key={i}
              href={ref.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="block p-6 md:p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-orange-500/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">
                  {ref.title}
                </h2>
                <ExternalLink
                  size={18}
                  className="text-zinc-600 group-hover:text-orange-400 shrink-0 mt-1 transition-colors"
                />
              </div>

              <p className="text-zinc-400 leading-relaxed mb-4">{ref.desc}</p>

              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm text-zinc-500">
                  {ref.source} · {ref.author} · {ref.date}
                </span>
                <div className="flex gap-2">
                  {ref.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
