"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FilterBar, { type DomainFilter } from "@/components/ui/FilterBar";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import { domains, profiles, projects, type Project } from "@/data/portfolio";

const githubProfile = profiles.find((p) => p.label === "GitHub")!.href;

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const detailsId = useId();

  return (
    <TiltCard className="flex flex-col p-6">
      <article className="flex h-full flex-col">
        <h3 className="font-display text-lg font-semibold text-zinc-50">
          {project.title}
        </h3>
        {project.status && (
          <p className="mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-200">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            {project.status}
          </p>
        )}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>

        {project.highlights && (
          <>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls={detailsId}
              className="mt-4 inline-flex min-h-11 w-fit items-center gap-2 text-sm font-medium text-sky-200 transition-colors duration-300 hover:text-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400"
            >
              {open ? "Masquer le détail" : "Voir le détail"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.ul
                  id={detailsId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-2 overflow-hidden text-sm leading-relaxed text-zinc-400"
                >
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-sky-400 to-violet-500" />
                      {highlight}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </>
        )}

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 transition-colors duration-300 hover:border-indigo-400/50 hover:text-zinc-50"
            >
              {tag}
            </li>
          ))}
        </ul>

        {(project.href || project.github) && (
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1">
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Voir le projet ${project.title}`}
                className="group/link inline-flex min-h-11 w-fit items-center gap-2 text-sm font-medium text-indigo-300 transition-colors duration-300 hover:text-sky-200"
              >
                Voir le projet
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover/link:translate-x-1"
                >
                  →
                </span>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub du projet ${project.title}`}
                className="inline-flex min-h-11 w-fit items-center gap-2 text-sm font-medium text-zinc-300 transition-colors duration-300 hover:text-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400"
              >
                <GithubIcon size={16} />
                GitHub
              </a>
            )}
          </div>
        )}
      </article>
    </TiltCard>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<DomainFilter>(null);
  const visible = filter
    ? projects.filter((project) => project.domains.includes(filter))
    : projects;

  const counts = {
    all: projects.length,
    ...Object.fromEntries(
      domains.map((d) => [d.id, projects.filter((p) => p.domains.includes(d.id)).length]),
    ),
  } as Record<"all" | (typeof domains)[number]["id"], number>;

  return (
    <section id="projets" className="scroll-mt-20 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          title="Projets"
          subtitle="Filtrez par domaine, puis ouvrez une carte pour voir le détail."
        />

        <Reveal
          delay={0.1}
          className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-4"
        >
          <FilterBar
            label="Filtrer les projets"
            value={filter}
            onChange={setFilter}
            counts={counts}
          />
          <a
            href={githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 text-sm font-medium text-zinc-100 transition-colors duration-300 hover:border-indigo-400/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            <GithubIcon />
            Voir mon GitHub
          </a>
          <p aria-live="polite" className="sr-only">
            {visible.length} projets affichés
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {visible.map((project, index) => (
            <Reveal
              key={project.title}
              variant="flip"
              delay={(index % 2) * 0.1}
              className="h-full"
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10">
          <aside
            aria-labelledby="partenariat-titre"
            className="flex flex-wrap items-center justify-between gap-x-8 gap-y-5 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 md:p-8"
          >
            <div className="max-w-[60ch]">
              <p className="text-sm font-medium text-sky-200">Partenariat</p>
              <h3
                id="partenariat-titre"
                className="mt-2 font-display text-lg font-semibold text-zinc-50"
              >
                Je collabore avec Marc Sylvinho Tsafack
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Étudiant ingénieur en cybersécurité à l’ESAIP Angers, certifié
                SOC Analyst et Jr Penetration Tester sur TryHackMe, et fondateur
                d’ANANSI.
              </p>
            </div>
            <a
              href="https://portfolio-marcsylvinho.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 text-sm font-semibold text-zinc-100 transition-colors duration-300 hover:border-indigo-400/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Voir son portfolio
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover/link:translate-x-1"
              >
                →
              </span>
            </a>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
