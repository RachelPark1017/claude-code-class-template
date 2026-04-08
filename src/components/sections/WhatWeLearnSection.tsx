import { useState } from "react";
import { BookOpen, Zap, Layers } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Typewriter from "../common/Typewriter";
import { siteConfig } from "../../config/site.config";

const ICON_MAP = { BookOpen, Zap, Layers };

const terminalContent = siteConfig.whatWeLearn.tabs.map((tab) => ({
  user: tab.user,
  claude: tab.claude,
}));

const tabs = siteConfig.whatWeLearn.tabs.map((tab) => {
  const Icon = ICON_MAP[tab.icon as keyof typeof ICON_MAP];
  return { title: tab.title, icon: <Icon size={18} /> };
});

export default function WhatWeLearnSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-32 bg-zinc-900/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading subtitle="What We Learn">
              {siteConfig.whatWeLearn.heading.split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </SectionHeading>
            <div className="space-y-6 mb-12">
              {siteConfig.whatWeLearn.intro.map((paragraph, i) => (
                <p key={i} className="text-xl text-zinc-400 leading-relaxed">
                  {paragraph.split(/(\*\*[^*]+\*\*)/).map((part, j) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong key={j} className="text-orange-500 font-bold">
                        {part.slice(2, -2)}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all text-left ${activeTab === idx ? "bg-orange-500/10 border-orange-500/30 text-orange-400" : "bg-zinc-900/50 border-white/5 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-300"}`}
                >
                  {tab.icon}
                  <span className="font-semibold">{tab.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent blur-3xl rounded-full"></div>
            <div className="relative rounded-2xl border border-white/10 bg-black overflow-hidden shadow-2xl h-[400px] flex flex-col terminal-window">
              <div className="h-10 border-b border-white/10 bg-zinc-900 flex items-center px-4 gap-2 shrink-0">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-4 text-xs font-mono text-zinc-500">
                  claude-code
                </div>
              </div>
              <div className="p-6 font-mono text-sm overflow-y-auto flex-grow">
                <div className="flex gap-4 mb-4">
                  <span className="text-orange-400">❯</span>
                  <span className="text-white">claude</span>
                </div>
                <div className="text-zinc-400 mb-6">
                  Welcome to Claude Code! I can help you write code, analyze
                  data, and automate tasks.
                </div>
                <div className="flex gap-4 mb-6">
                  <span className="text-blue-400 shrink-0">You:</span>
                  <span className="text-zinc-300">
                    <Typewriter
                      key={`user-${activeTab}`}
                      text={terminalContent[activeTab].user}
                      delay={30}
                      startDelay={100}
                    />
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange-400 shrink-0">Claude:</span>
                  <div className="text-zinc-300 space-y-2">
                    <p>
                      <Typewriter
                        key={`claude-1-${activeTab}`}
                        text={terminalContent[activeTab].claude[0]}
                        delay={20}
                        startDelay={1500}
                      />
                    </p>
                    <p className="text-zinc-500 italic">
                      <Typewriter
                        key={`claude-2-${activeTab}`}
                        text={terminalContent[activeTab].claude[1]}
                        delay={20}
                        startDelay={2500}
                      />
                    </p>
                    <p>
                      <Typewriter
                        key={`claude-3-${activeTab}`}
                        text={terminalContent[activeTab].claude[2]}
                        delay={20}
                        startDelay={3500}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
