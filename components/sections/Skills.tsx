"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FilterBar, { type DomainFilter } from "@/components/ui/FilterBar";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { domains, skillGroups } from "@/data/portfolio";

export default function Skills() {
  const [filter, setFilter] = useState<DomainFilter>(null);
  const visible = filter
    ? skillGroups.filter((group) => group.domain === filter)
    : skillGroups;

  const counts = {
    all: skillGroups.length,
    ...Object.fromEntries(
      domains.map((d) => [d.id, skillGroups.filter((g) => g.domain === d.id).length]),
    ),
  } as Record<"all" | (typeof domains)[number]["id"], number>;

  return (
    <section id="competences" className="scroll-mt-20 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          title="Compétences"
          subtitle="Quatre familles de compétences, du développement full-stack à la sécurisation des systèmes."
        />

        <Reveal delay={0.1} className="mt-10">
          <FilterBar
            label="Filtrer les compétences"
            value={filter}
            onChange={setFilter}
            counts={counts}
          />
          <p aria-live="polite" className="sr-only">
            {visible.length} familles de compétences affichées
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((group) => (
              <motion.article
                key={group.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 shadow-[0_30px_60px_-30px_rgb(0_0_0/0.9)]"
              >
                <h3 className="font-display text-lg font-semibold text-zinc-50">
                  {group.label}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 transition-colors duration-300 hover:border-indigo-400/50 hover:text-zinc-50"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
