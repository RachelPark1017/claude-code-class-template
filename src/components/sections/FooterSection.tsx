import { siteConfig } from "../../config/site.config";

export default function FooterSection({
  onNavigateReference,
}: {
  onNavigateReference: () => void;
}) {
  return (
    <footer className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-900/20 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8 whitespace-pre-line">
          {siteConfig.footer.headline}
        </h2>
        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto whitespace-pre-line">
          {siteConfig.footer.subline}
        </p>
        <a
          href="#prerequisites"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white font-semibold text-lg hover:bg-orange-600 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(249,115,22,0.3)]"
        >
          {siteConfig.footer.ctaText}
        </a>

        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div>{siteConfig.footer.copyright}</div>
          <div className="flex items-center gap-6">
            {siteConfig.footer.contactPerson && (
              <span>{siteConfig.footer.contactPerson}</span>
            )}
            <button
              onClick={onNavigateReference}
              className="hover:text-white transition-colors cursor-pointer"
            >
              추천 레퍼런스 →
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
