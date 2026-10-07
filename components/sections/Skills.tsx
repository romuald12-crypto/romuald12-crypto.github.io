"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

type Skill = { name: string; detail: string; proof: string; level: number };
type Domain = { id: string; label: string; skills: Skill[]; tools: string[] };

const domains: Domain[] = [
  {
    id: "offensive",
    label: "Sécurité offensive",
    skills: [
      {
        name: "Exploitation web",
        detail: "Injection SQL, XSS, session hijacking",
        proof: "CEH Practical Labs",
        level: 70,
      },
      {
        name: "Exploitation de vulnérabilités",
        detail: "Metasploit et SQLmap sur Metasploitable 2 et DVWA",
        proof: "CEH Practical Labs",
        level: 65,
      },
      {
        name: "Reconnaissance et analyse réseau",
        detail: "Scan de ports, capture et lecture de trafic",
        proof: "CEH Practical Labs",
        level: 70,
      },
      {
        name: "Mots de passe et cryptographie",
        detail: "Password cracking, OpenSSL, GPG, évasion IDS / firewall",
        proof: "CEH Practical Labs",
        level: 60,
      },
      {
        name: "Entraînement continu",
        detail: "Salles et parcours orientés pentest et OWASP",
        proof: "TryHackMe",
        level: 65,
      },
    ],
    tools: ["Kali Linux", "Metasploit", "Nmap", "Wireshark", "SQLmap", "John the Ripper"],
  },
  {
    id: "applicative",
    label: "Sécurité applicative",
    skills: [
      {
        name: "Chiffrement et hachage",
        detail: "AES-256-GCM pour les données, bcrypt pour les mots de passe",
        proof: "TAMYCS Shield",
        level: 65,
      },
      {
        name: "Authentification",
        detail: "JWT, SSO avec Microsoft Entra ID",
        proof: "TAMYCS Shield, Karayes Group",
        level: 75,
      },
      {
        name: "Contrôle d’accès",
        detail: "RBAC, Row Level Security, principe du moindre privilège",
        proof: "RainaLyse Beauté, Karayes Group",
        level: 80,
      },
      {
        name: "Durcissement web",
        detail: "En-têtes CSP et HSTS, Helmet, limitation des tentatives",
        proof: "RainaLyse Beauté, TAMYCS Shield",
        level: 70,
      },
      {
        name: "Pratiques DevSecOps",
        detail: "Audit de dépendances, tests automatisés",
        proof: "RainaLyse Beauté",
        level: 55,
      },
    ],
    tools: ["JWT", "bcrypt", "Helmet", "Supabase RLS", "Microsoft Entra ID"],
  },
  {
    id: "web",
    label: "Développement web",
    skills: [
      {
        name: "Front-end",
        detail: "Next.js, React, TypeScript, Tailwind CSS",
        proof: "RainaLyse Beauté, ce portfolio",
        level: 85,
      },
      {
        name: "Back-end et API",
        detail: "Node.js, Express, routes protégées",
        proof: "TAMYCS Shield",
        level: 70,
      },
      {
        name: "Bases de données",
        detail: "PostgreSQL avec Supabase, MongoDB",
        proof: "RainaLyse Beauté, TAMYCS Shield",
        level: 75,
      },
      {
        name: "Paiement en ligne",
        detail: "Stripe, PayPal, factures PDF avec QR code",
        proof: "RainaLyse Beauté",
        level: 70,
      },
      {
        name: "Tests",
        detail: "64 tests unitaires avec Vitest",
        proof: "RainaLyse Beauté",
        level: 65,
      },
    ],
    tools: ["Next.js", "React", "TypeScript", "Node.js", "Supabase", "PostgreSQL", "MongoDB"],
  },
  {
    id: "power-platform",
    label: "Microsoft Power Platform",
    skills: [
      {
        name: "Applications métier",
        detail: "Power Apps en Power Fx, modèle de données Dataverse",
        proof: "Karayes Group",
        level: 75,
      },
      {
        name: "Automatisation",
        detail: "Flux Power Automate, analyse de sentiment avec AI Builder",
        proof: "Karayes Group",
        level: 70,
      },
      {
        name: "Reporting",
        detail: "Power BI, mesures DAX, cartes KPI",
        proof: "Karayes Group",
        level: 60,
      },
      {
        name: "Identité et rôles",
        detail: "SSO Entra ID, trois rôles : employé, manager, administrateur",
        proof: "Karayes Group",
        level: 70,
      },
    ],
    tools: ["Power Apps", "Dataverse", "Power Automate", "AI Builder", "Power BI"],
  },
  {
    id: "reseaux-data",
    label: "Réseaux, data et méthodes",
    skills: [
      {
        name: "Réseaux et infrastructure",
        detail: "Routeurs, switchs, serveurs, surveillance des logs",
        proof: "Camtel",
        level: 65,
      },
      {
        name: "Support et documentation",
        detail: "Support niveau 2/3, procédures et documentation technique",
        proof: "Camtel",
        level: 70,
      },
      {
        name: "Analyse de données",
        detail: "Python, pandas, matplotlib, Jupyter Notebook",
        proof: "Cours Trustworthy AI (BME)",
        level: 60,
      },
      {
        name: "Simulation",
        detail: "Artery / OMNeT++ dans Docker, rapport technique en anglais",
        proof: "Simulation V2X (BME)",
        level: 50,
      },
      {
        name: "Méthodes de projet",
        detail: "Agile / Scrum, UML, Git",
        proof: "Karayes Group",
        level: 70,
      },
    ],
    tools: ["Python", "Docker", "Git", "Jupyter Notebook", "UML"],
  },
];

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = domains[activeIndex];

  // Navigation au clavier entre les onglets, comme le prévoit le modèle ARIA.
  function handleKeyDown(event: React.KeyboardEvent) {
    const step =
      event.key === "ArrowDown" || event.key === "ArrowRight"
        ? 1
        : event.key === "ArrowUp" || event.key === "ArrowLeft"
          ? -1
          : 0;
    if (step === 0) return;

    event.preventDefault();
    const next = (activeIndex + step + domains.length) % domains.length;
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <section id="competences" className="scroll-mt-20 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          title="Compétences"
          subtitle="Chaque compétence est reliée au projet où je l’ai mise en pratique."
        />

        <Reveal delay={0.1} className="mt-12">
          <div className="grid gap-8 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-10">
            <div
              role="tablist"
              aria-label="Domaines de compétences"
              aria-orientation="vertical"
              onKeyDown={handleKeyDown}
              className="flex flex-wrap gap-2 lg:flex-col lg:gap-1"
            >
              {domains.map((domain, index) => {
                const selected = index === activeIndex;

                return (
                  <button
                    key={domain.id}
                    ref={(element) => {
                      tabRefs.current[index] = element;
                    }}
                    type="button"
                    role="tab"
                    id={`onglet-${domain.id}`}
                    aria-selected={selected}
                    aria-controls="panneau-competences"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActiveIndex(index)}
                    className={`relative min-h-11 rounded-lg border px-4 py-2.5 text-left text-sm font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 lg:border-transparent lg:pl-5 ${
                      selected
                        ? "border-sky-400/60 bg-sky-400/10 text-zinc-50 lg:bg-white/[0.06]"
                        : "border-white/10 text-zinc-400 hover:text-zinc-100 lg:hover:bg-white/[0.03]"
                    }`}
                  >
                    {selected && (
                      <motion.span
                        layoutId="onglet-actif"
                        aria-hidden="true"
                        className="absolute inset-y-2 left-0 hidden w-0.5 rounded-full bg-gradient-to-b from-sky-400 to-violet-500 lg:block"
                      />
                    )}
                    {domain.label}
                  </button>
                );
              })}
            </div>

            <div
              role="tabpanel"
              id="panneau-competences"
              aria-labelledby={`onglet-${active.id}`}
              tabIndex={0}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 shadow-[0_30px_60px_-30px_rgb(0_0_0/0.9)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400 md:p-8"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    aria-hidden="true"
                    className="hidden grid-cols-[minmax(0,1fr)_14rem] gap-6 pb-3 text-sm text-zinc-500 sm:grid"
                  >
                    <span>Compétence</span>
                    <span>Mise en pratique dans</span>
                  </div>

                  <ul>
                    {active.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="grid gap-1.5 border-t border-white/10 py-4 sm:grid-cols-[minmax(0,1fr)_14rem] sm:gap-6"
                      >
                        <div>
                          <h3 className="font-display text-base font-semibold text-zinc-50">
                            {skill.name}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                            {skill.detail}
                          </p>
                        </div>
                        <p className="text-sm text-sky-200">
                          <span className="sr-only">Mise en pratique dans : </span>
                          {skill.proof}
                        </p>
                        <div className="flex items-center gap-3 sm:col-span-2">
                          <div
                            aria-hidden="true"
                            className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10"
                          >
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                              className="h-full rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-500"
                            />
                          </div>
                          <p className="w-12 text-right font-mono text-xs text-zinc-300">
                            <span className="sr-only">Niveau : </span>
                            {skill.level} %
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <ul className="flex flex-wrap gap-2 border-t border-white/10 pt-5">
                    {active.tools.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
