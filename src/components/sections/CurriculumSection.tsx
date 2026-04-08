import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { siteConfig } from "../../config/site.config";

const curriculum = siteConfig.curriculum.days;

export default function CurriculumSection() {
  const [activeDay, setActiveDay] = useState<number>(curriculum[0]?.day ?? 1);

  return (
    <section
      id="curriculum"
      className="py-32 bg-zinc-900/30 border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Curriculum">
          {siteConfig.curriculum.heading.split("\n").map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </SectionHeading>

        <div className="flex flex-col md:flex-row gap-4 h-[500px]">
          {curriculum.map((item) => (
            <div
              key={item.day}
              onMouseEnter={() => setActiveDay(item.day)}
              onClick={() => setActiveDay(item.day)}
              className={`relative overflow-hidden rounded-3xl border border-white/5 transition-all duration-500 ease-in-out cursor-pointer flex flex-col justify-end p-8 ${activeDay === item.day ? "flex-[3] bg-zinc-800" : "flex-[1] bg-black hover:bg-zinc-900"}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-500 ${activeDay === item.day ? "opacity-100" : "opacity-0"}`}
              ></div>
              {activeDay === item.day && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-20 -mt-20 transition-opacity duration-500"></div>
              )}

              <div className="relative z-20">
                <h3
                  className={`font-bold text-white transition-all duration-500 ${activeDay === item.day ? "text-5xl mb-6" : "text-3xl mb-2"}`}
                >
                  Day {item.day}
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-500 ${activeDay === item.day ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <h4 className="font-semibold text-white text-xl mb-3">
                    {item.title}
                  </h4>
                  <p className="text-zinc-300 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <ul className="space-y-2">
                    {item.topics.map((topic, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-zinc-400"
                      >
                        <CheckCircle2 size={14} className="text-orange-400" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
