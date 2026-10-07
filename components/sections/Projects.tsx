"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";

const categories = [
  "Cybersécurité",
  "Développement",
  "Expérience",
  "Académique",
] as const;

type Category = (typeof categories)[number];

const githubProfile = "https://github.com/romuald12-crypto";

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

type Project = {
  title: string;
  categories: Category[];
  github?: string;
  description: string;
  highlights?: string[];
  tags: string[];
  href?: string;
  status?: string;
};

const projects: Project[] = [
  {
    title: "TAMYCS Shield - Secure PassVault",
    categories: ["Cybersécurité", "Académique"],
    github: "https://github.com/oumar771/tamycs-shield",
    description:
      "Gestionnaire de mots de passe sécurisé, réalisé en équipe à l’ESAIP dans le cadre du cours Secure Programming.",
    highlights: [
      "Coffre-fort chiffré en AES-256-GCM, authentification JWT et bcrypt.",
      "Politique de mots de passe conforme ANSSI, protection contre le brute force et le XSS.",
      "Générateur de mots de passe et export CSV / JSON.",
    ],
    tags: ["Node.js", "Express", "MongoDB", "JWT", "AES-256-GCM"],
    href: "https://tamycs-shield.vercel.app",
    status: "Projet d’équipe – ESAIP 2026",
  },
  {
    title: "CEH Practical Labs - Ethical Hacking",
    categories: ["Cybersécurité"],
    github: githubProfile,
    description:
      "Labs pratiques des modules 11 à 20 du programme Certified Ethical Hacker (CEH) : des techniques offensives documentées et reproductibles.",
    highlights: [
      "Exploitation web : injection SQL, XSS et session hijacking.",
      "Cryptographie, password cracking et évasion IDS / firewall.",
      "Environnements de test : Kali Linux, Metasploitable 2 et DVWA.",
    ],
    tags: [
      "Kali Linux",
      "Metasploit",
      "Nmap",
      "Wireshark",
      "SQLmap",
      "John the Ripper",
      "OpenSSL",
      "GPG",
      "VirtualBox",
    ],
  },
  {
    title: "Camtel - Technicien Réseau & Infrastructure",
    categories: ["Expérience"],
    description:
      "Administration et support d’infrastructure réseau en environnement professionnel chez Camtel (Cameroon Telecommunications), pendant 3 mois.",
    highlights: [
      "Maintenance de l’infrastructure : serveurs, routeurs, switchs.",
      "Diagnostic et résolution de problèmes réseau, support utilisateurs et assistance technique.",
      "Surveillance de l’infrastructure et des logs.",
      "Rédaction de documentation technique et de procédures.",
    ],
    tags: [
      "Administration réseau",
      "Troubleshooting infrastructure",
      "Support niveau 2/3",
      "Documentation technique",
    ],
    status: "Juillet – Septembre 2023",
  },
  {
    title: "Rainalyse Beauté",
    categories: ["Développement", "Cybersécurité"],
    github: githubProfile,
    description:
      "Plateforme de réservation pour services beauté et coiffure : choix du service, du personnel et du créneau, paiement de l’acompte, espace client et espace d’administration.",
    highlights: [
      "Réservation : disponibilités par personnel et par créneau, liste d’attente, politique d’acompte et d’annulation.",
      "Intégration Stripe et PayPal, factures PDF avec QR code de vérification.",
      "Sécurité : Row Level Security, autorisations par rôle vérifiées côté serveur, en-têtes de sécurité (CSP, HSTS).",
      "Correction d’une faille d’escalade de privilèges : rôles déplacés de user_metadata vers app_metadata.",
      "64 tests unitaires avec Vitest.",
    ],
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Supabase",
      "PostgreSQL",
      "Stripe",
      "PayPal",
      "Vitest",
    ],
    status: "En développement",
  },
  {
    title: "Gestion de Dépenses - Écosystème Microsoft",
    categories: ["Expérience", "Développement"],
    github: githubProfile,
    description:
      "Application complète de gestion de dépenses réalisée en stage chez KARAYES GROUP sur Microsoft Power Platform. Gestion des budgets, tracking dépenses, rapports automatisés.",
    highlights: [
      "Application Canvas responsive (PC et mobile) en Power Fx, avec upload de justificatifs et modèle de données relationnel dans Dataverse.",
      "Sécurité : SSO avec Microsoft Entra ID, RBAC à trois rôles (Employé, Manager, Administrateur), principe du moindre privilège.",
      "Automatisation : flux Power Automate avec e-mails transactionnels et analyse de sentiment via AI Builder.",
      "Reporting Power BI : mesures DAX, cartes KPI et visuels interactifs.",
      "Projet mené en Agile, de l’analyse des besoins en UML jusqu’aux tests.",
    ],
    tags: [
      "Power Apps",
      "Power Fx",
      "Dataverse",
      "Power Automate",
      "AI Builder",
      "Power BI",
      "Power Pages",
      "Microsoft Entra ID",
    ],
    status: "Juillet – Septembre 2026",
  },
  {
    title: "Phishing Risk Scorer",
    categories: ["Cybersécurité", "Développement"],
    github: "https://github.com/Mbesigne/phishing-scorer",
    description:
      "Outil de détection de phishing : un moteur d’analyse en Python attribue un score de risque à une URL ou à un e-mail, avec une interface web et une extension Chrome pour Gmail et Outlook.",
    highlights: [
      "Dix vecteurs d’analyse : typosquattage, URL raccourcies, adresse IP directe, certificat SSL, langage d’urgence, contenu de la page.",
      "Lecture des en-têtes SMTP (SPF, DKIM, DMARC) et vérification de réputation avec VirusTotal et Google Safe Browsing.",
      "API REST Flask avec historique SQLite, analyse par lot et export CSV / JSON.",
      "Extension Chrome (Manifest V3) qui ajoute un bouton d’analyse sur chaque e-mail.",
    ],
    tags: ["Python", "Flask", "SQLite", "Extension Chrome", "VirusTotal", "JavaScript"],
    href: "https://phishing-risk-scorer-v2.onrender.com",
    status: "Version 2",
  },
  {
    title: "Simulation V2X (BME)",
    categories: ["Académique"],
    github: githubProfile,
    description:
      "Travaux pratiques du cours V2X Communication (BMEVIHIAV37) à BME Budapest : simulation de communications véhicule-à-tout et analyse de la charge du canal radio.",
    highlights: [
      "Simulations Artery/OMNeT++ exécutées dans Docker.",
      "Comparaison du Channel Busy Ratio (CBR) à 50 % et 100 % de véhicules équipés.",
      "Traitement des logs en Python, graphiques matplotlib et rapport technique en anglais.",
    ],
    tags: ["Artery", "OMNeT++", "Docker", "Python", "matplotlib"],
    status: "TP terminé",
  },
];

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
  const [filter, setFilter] = useState<Category | null>(null);
  const visible = filter
    ? projects.filter((project) => project.categories.includes(filter))
    : projects;

  const filters: { label: string; value: Category | null; count: number }[] = [
    { label: "Tous", value: null, count: projects.length },
    ...categories.map((category) => ({
      label: category,
      value: category,
      count: projects.filter((project) => project.categories.includes(category))
        .length,
    })),
  ];

  return (
    <section id="projets" className="scroll-mt-20 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          title="Projets et expériences"
          subtitle="Filtrez par domaine, puis ouvrez une carte pour voir le détail."
        />

        <Reveal
          delay={0.1}
          className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-4"
        >
          <ul aria-label="Filtrer les projets" className="flex flex-wrap gap-2.5">
            {filters.map((item) => {
              const active = filter === item.value;

              return (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => setFilter(item.value)}
                    aria-pressed={active}
                    className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 ${
                      active
                        ? "border-sky-400/60 bg-sky-400/15 text-zinc-50"
                        : "border-white/10 bg-white/5 text-zinc-400 hover:border-white/25 hover:text-zinc-100"
                    }`}
                  >
                    {item.label}
                    <span className={active ? "text-sky-200" : "text-zinc-500"}>
                      {item.count}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          <a
            href="https://github.com/romuald12-crypto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 text-sm font-medium text-zinc-100 transition-colors duration-300 hover:border-indigo-400/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            <GithubIcon />
            Voir mon GitHub
          </a>
          <p aria-live="polite" className="sr-only">
            {visible.length} réalisations affichées
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
      </div>
    </section>
  );
}
