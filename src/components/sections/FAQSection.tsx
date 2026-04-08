import { ArrowRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { siteConfig } from "../../config/site.config";

const faqs = siteConfig.faq.items;

export default function FAQSection({
  onNavigateReference,
}: {
  onNavigateReference: () => void;
}) {
  return (
    <section className="py-32 bg-zinc-900/30 border-y border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading subtitle="FAQ" align="center">
          자주 묻는 질문
        </SectionHeading>

        <div className="space-y-4 mt-12">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group p-6 rounded-2xl bg-black border border-white/5 open:border-orange-500/30 transition-colors cursor-pointer"
            >
              <summary className="text-lg font-semibold text-white flex justify-between items-center list-none outline-none">
                {faq.q}
                <span className="text-orange-400 group-open:rotate-45 transition-transform duration-300 text-2xl leading-none">
                  +
                </span>
              </summary>
              <p className="mt-4 text-zinc-400 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onNavigateReference}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:border-white/30 transition-all cursor-pointer"
          >
            추천 레퍼런스 보기 <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
