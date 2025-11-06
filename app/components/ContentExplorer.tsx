"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { clsx } from "clsx";
import type { Topic } from "@/lib/topics";

type ContentExplorerProps = {
  topics: Topic[];
};

export function ContentExplorer({ topics }: ContentExplorerProps) {
  const [activeId, setActiveId] = useState<string>(topics[0]?.id ?? "");

  const activeTopic = useMemo(
    () => topics.find((topic) => topic.id === activeId) ?? topics[0],
    [activeId, topics]
  );

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 lg:flex-row lg:gap-12">
      <aside className="lg:w-80">
        <div className="sticky top-8 space-y-6 rounded-md border border-parchment/30 bg-ink/40 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
          <header className="space-y-2">
            <p className="text-xs uppercase tracking-[0.35em] text-ash">
              Topics
            </p>
            <h2 className="text-2xl font-bold">Chips &amp; Craft Mastery</h2>
            <p className="text-sm leading-relaxed text-ash">
              Pick the thread that matches your current hunger. I&apos;ll meet
              you there—calm, candid, and fully in your corner.
            </p>
          </header>
          <nav className="space-y-3">
            {topics.map((topic) => (
              <button
                key={topic.id}
                type="button"
                onClick={() => setActiveId(topic.id)}
                className={clsx(
                  "group flex w-full flex-col items-start gap-1 rounded-md border px-4 py-3 text-left transition-colors",
                  activeTopic?.id === topic.id
                    ? "border-parchment bg-parchment text-ink"
                    : "border-parchment/20 bg-transparent text-parchment hover:border-parchment/60"
                )}
              >
                <span
                  className={clsx(
                    "text-[11px] uppercase tracking-[0.3em]",
                    activeTopic?.id === topic.id
                      ? "text-ink/70"
                      : "text-ash group-hover:text-parchment/70"
                  )}
                >
                  {topic.badge}
                </span>
                <span className="text-lg font-semibold leading-tight">
                  {topic.title}
                </span>
                <span
                  className={clsx(
                    "text-xs leading-relaxed",
                    activeTopic?.id === topic.id
                      ? "text-ink/80"
                      : "text-ash group-hover:text-parchment/80"
                  )}
                >
                  {topic.microSummary}
                </span>
              </button>
            ))}
          </nav>
          <div className="rounded-md border border-parchment/20 bg-ink/60 p-4 text-xs leading-relaxed text-ash">
            Brief mirror: you showed up with ambition and a hint of restless
            energy. So I&apos;m steadying the tempo, giving you depth without
            drowning you. Breathe, then dive.
          </div>
        </div>
      </aside>
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {activeTopic && (
            <motion.article
              key={activeTopic.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="space-y-10 rounded-md border border-parchment/20 bg-ink/30 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-sm"
            >
              <header className="space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-ash">
                  <span>{activeTopic.badge}</span>
                  <span className="h-px flex-1 bg-parchment/20" />
                  <span>{activeTopic.vibe}</span>
                </div>
                <h1 className="text-4xl font-bold leading-[1.05]">
                  {activeTopic.title}
                </h1>
                <p className=" text-base leading-relaxed text-parchment/90">
                  {activeTopic.microSummary}
                </p>
              </header>
              <div className="space-y-12 text-base leading-relaxed tracking-tight text-parchment/90">
                {activeTopic.sections.map((section) => (
                  <section key={section.heading} className="space-y-4">
                    <h2 className="text-2xl font-semibold uppercase tracking-[0.2em] text-parchment">
                      {section.heading}
                    </h2>
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={index} className="text-lg leading-[1.8]">
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets && (
                      <ul className="space-y-2 border-l border-parchment/30 pl-4 text-sm text-parchment/80">
                        {section.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="leading-relaxed">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.callout && (
                      <div className="rounded-md border border-parchment/40 bg-ink/60 p-4 text-sm text-parchment/85">
                        <span className="font-semibold uppercase tracking-[0.3em] text-ash">
                          Hidden Detail
                        </span>
                        <p className="mt-2 leading-relaxed text-parchment/85">
                          {section.callout}
                        </p>
                      </div>
                    )}
                  </section>
                ))}
              </div>
              <footer className="space-y-6 border-t border-parchment/20 pt-8 text-sm text-parchment/80">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.35em] text-ash">
                    Reflection
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-parchment/85">
                    {activeTopic.reflection}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.35em] text-ash">
                    Pocket Takeaways
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {activeTopic.takeaways.map((takeaway, index) => (
                      <li
                        key={index}
                        className="flex gap-3 text-base leading-relaxed text-parchment/90"
                      >
                        <span className="mt-2 h-0.5 w-6 shrink-0 bg-parchment/60" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </footer>
            </motion.article>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
