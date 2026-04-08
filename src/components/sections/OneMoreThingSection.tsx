import { Layers, Zap, ArrowRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { siteConfig } from "../../config/site.config";

const ICON_MAP = { Layers, Zap };
const ICON_BG: Record<string, string> = {
  orange: "bg-orange-500/10 text-orange-400",
  blue: "bg-blue-500/10 text-blue-400",
};

export default function OneMoreThingSection() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="One More Thing">
          {siteConfig.oneMoreThing.heading.split("\n").map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-8">
          {siteConfig.oneMoreThing.cards.map((card, i) => {
            const Icon = ICON_MAP[card.icon as keyof typeof ICON_MAP];
            return (
              <div
                key={i}
                className="p-8 rounded-3xl bg-zinc-900 border border-white/5"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${ICON_BG[card.iconColor]}`}
                >
                  <Icon size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {card.title}
                </h3>
                <p className="text-zinc-400 mb-6">{card.desc}</p>
                {"codeBlock" in card && card.codeBlock && (
                  <div className="p-4 rounded-xl bg-black border border-white/5 font-mono text-sm text-zinc-300 whitespace-pre-line">
                    {card.codeBlock}
                  </div>
                )}
                {"link" in card && card.link && (
                  <a
                    href={card.link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {card.link.text} <ArrowRight size={14} />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
