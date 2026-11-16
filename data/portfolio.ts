// Source unique du contenu du portfolio : pour mettre le site à jour,
// il suffit de modifier ce fichier.

export const identity = {
  name: "Romuald MBE SIGNE",
  title: "Ingénieur Informatique, Full-Stack, Cloud & Cybersécurité",
  status: "Étudiant MSc Pro Bac +5 — Epitech Paris",
  subtitle:
    "Conception d’applications web/mobiles scalables, automatisation de processus par l’IA, architectures Cloud/CRM et sécurisation des systèmes d’information.",
  availability: "Disponible pour une alternance ou un stage",
  location: "Île-de-France (mobilité nationale)",
  languages: "Français et anglais professionnel courant",
};

// ---------------------------------------------------------------- Filtres

export const domains = [
  { id: "fullstack", label: "Full-Stack & Web" },
  { id: "ia", label: "IA & Automatisation" },
  { id: "cyber-cloud", label: "Cybersécurité & Cloud" },
] as const;

export type DomainId = (typeof domains)[number]["id"];

// ----------------------------------------------------------- Compétences

export type SkillGroup = {
  id: string;
  label: string;
  domain: DomainId;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "fullstack-mobile",
    label: "Développement Full-Stack & Mobile",
    domain: "fullstack",
    skills: [
      "TypeScript",
      "JavaScript (ES6+)",
      "C#",
      ".NET Core",
      "ASP.NET",
      "Python",
      "React",
      "Next.js",
      "Angular",
      "Node.js",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "Flutter",
      "Android",
    ],
  },
  {
    id: "ia-automatisation",
    label: "IA Générative & Automatisation",
    domain: "ia",
    skills: [
      "LLMs (Claude, GPT)",
      "Agents IA autonomes",
      "RAG",
      "LangChain",
      "MCP (Model Context Protocol)",
      "n8n",
      "Make",
      "Power Automate",
      "Claude Code",
      "Cursor",
      "GitHub Copilot",
    ],
  },
  {
    id: "cloud-crm-data",
    label: "Cloud, CRM & Bases de données",
    domain: "cyber-cloud",
    skills: [
      "Microsoft Azure",
      "Dynamics 365",
      "Power Platform",
      "Dataverse",
      "PostgreSQL",
      "MySQL",
      "Supabase",
      "SQL Server",
      "APIs REST",
    ],
  },
  {
    id: "cyber-reseaux-devops",
    label: "Cybersécurité, Réseaux & DevOps",
    domain: "cyber-cloud",
    skills: [
      "Audit de sécurité Cloud (Defender for Cloud)",
      "RBAC",
      "Pentesting",
      "SIEM / SOAR",
      "Réponse à incident",
      "Wireshark",
      "Nmap",
      "TCP/IP",
      "Git",
      "Azure DevOps",
      "Docker",
      "CI/CD",
      "Linux / Windows",
    ],
  },
];

// ------------------------------------------------------------ Expériences

export type Experience = {
  role: string;
  company: string;
  period: string;
  place?: string;
  logo?: { src: string; alt: string; width: number; height: number; dark?: boolean };
  points: string[];
  tech: string[];
};

// Ordre antéchronologique.
export const experiences: Experience[] = [
  {
    role: "Stagiaire Ingénieur Logiciel, Cloud & Cybersécurité",
    company: "KARAYES GROUP SARL",
    period: "Juillet 2026 – Octobre 2026",
    logo: { src: "/logos/karayes.png", alt: "Logo Karayes Group", width: 200, height: 200, dark: true },
    points: [
      "Conception et développement d’une plateforme de gestion des dépenses sur Microsoft Dynamics 365, Power Platform, C# / .NET Core et Azure.",
      "Modélisation de bases de données relationnelles (Dataverse / SQL), intégration d’APIs REST et automatisation des flux métiers.",
      "Audits de sécurité Cloud (Microsoft Defender for Cloud), mise en place des politiques RBAC et pilotage des KPI via Power BI.",
      "Tests techniques et fonctionnels, déploiements CI/CD via Azure DevOps / Git et rédaction de la documentation technique.",
    ],
    tech: [
      "Dynamics 365",
      "Power Platform",
      "C#",
      ".NET Core",
      "Azure",
      "Dataverse",
      "Defender for Cloud",
      "Power BI",
      "Azure DevOps",
    ],
  },
  {
    role: "Stagiaire Développeur Full-Stack & Mobile",
    company: "Ejara",
    period: "Mai 2025 – Août 2025",
    points: [
      "Développement de nouvelles fonctionnalités front-end (React, TypeScript) et back-end (Node.js), ainsi que des évolutions mobiles Android.",
      "Intégration d’APIs REST, manipulation de bases de données SQL, tests unitaires et fonctionnels, participation aux phases de recette.",
    ],
    tech: ["React", "TypeScript", "Node.js", "Android", "SQL", "APIs REST"],
  },
  {
    role: "Stagiaire Développeur IA & Prototypage",
    company: "ActivSpaces",
    period: "Juin 2024 – Août 2024",
    points: [
      "Conception de preuves de concept (PoC) d’agents IA et de pipelines RAG basés sur les LLMs (Claude, GPT) et LangChain.",
      "Automatisation de workflows avec n8n et Make, et intégration via APIs REST.",
    ],
    tech: ["LLMs", "RAG", "LangChain", "n8n", "Make", "APIs REST"],
  },
  {
    role: "Stagiaire Développeur Web Front-End & Outils Métiers",
    company: "Sigalix",
    period: "Juin 2024 – Août 2024",
    points: [
      "Développement d’interfaces web responsives et maintenance évolutive d’outils métiers.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "React"],
  },
  {
    role: "Stagiaire Technicien Réseaux & Infrastructures Télécoms",
    company: "CAMTEL (Cameroon Telecommunications)",
    period: "Juillet 2023 – Septembre 2023",
    logo: { src: "/logos/camtel.png", alt: "Logo Camtel", width: 200, height: 200 },
    points: [
      "Déploiement, configuration et maintenance des infrastructures réseaux et des accès internet (fibre, ADSL, TCP/IP) sous Windows et Linux.",
    ],
    tech: ["TCP/IP", "Fibre", "ADSL", "Windows", "Linux"],
  },
];

// -------------------------------------------------------------- Formation

export type Education = {
  degree: string;
  school: string;
  period: string;
  note?: string;
  logo?: { src: string; alt: string; width: number; height: number };
};

export const education: Education[] = [
  {
    degree: "Master of Science (MSc Pro) — Ingénierie Informatique & Cybersécurité (Bac +5)",
    school: "Epitech Paris",
    period: "2026 – 2028",
  },
  {
    degree: "Bachelor Informatique & Cybersécurité (Bac +3)",
    school: "ESAIP Angers",
    period: "2025 – 2026",
    note: "Semestre d’échange Erasmus à BME Budapest (Hongrie)",
    logo: { src: "/logos/esaip.png", alt: "Logo ESAIP Engineering School", width: 508, height: 184 },
  },
  {
    degree: "Cycle Préparatoire Ingénieur en Génie Informatique (Bac +2)",
    school: "Institut Universitaire de la Côte (IUC)",
    period: "2023 – 2025",
    logo: { src: "/logos/iuc.png", alt: "Logo IUC", width: 258, height: 350 },
  },
];

// --------------------------------------------------------------- Projets

export type ProjectDetail = {
  slug: string;
  tagline: string;
  sections: { title: string; points: string[] }[];
  screenshots: { src: string; alt: string }[];
};

export type Project = {
  title: string;
  detail?: ProjectDetail;
  domains: DomainId[];
  description: string;
  highlights?: string[];
  tags: string[];
  github?: string;
  href?: string;
  status?: string;
};

const githubProfile = "https://github.com/romuald12-crypto";

export const projects: Project[] = [
  {
    title: "Kombiz — SaaS de gestion commerciale pour commerçants",
    domains: ["fullstack", "cyber-cloud"],
    description:
      "Application de gestion commerciale (ex-Stock & Crédit) : suivi des stocks, des ventes et des crédits clients pour les petits commerçants.",
    highlights: [
      "Gestion des stocks, des ventes et des crédits clients.",
      "Isolation des données par commerçant avec les politiques RLS de Supabase.",
      "Tests unitaires avec Vitest et tests de bout en bout avec Playwright.",
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "RLS", "Vitest", "Playwright"],
    // TODO : remplacer par l'URL du site en ligne et le dépôt GitHub de Kombiz.
    href: "https://example.com/kombiz",
    github: githubProfile,
    status: "SaaS",
    detail: {
      slug: "kombiz",
      tagline: "Stocks, ventes et crédits clients, au même endroit.",
      sections: [
        {
          title: "Architecture",
          points: [
            "Application Next.js (App Router) avec TypeScript, connectée à une base PostgreSQL hébergée sur Supabase.",
            "Modèle de données relationnel : produits, mouvements de stock, ventes, clients et échéances de crédit.",
            "Logique métier côté serveur, pour que les calculs (stock restant, solde client) ne dépendent pas du navigateur.",
          ],
        },
        {
          title: "Sécurité et Row Level Security",
          points: [
            "Chaque table est protégée par des politiques RLS : un commerçant ne lit et ne modifie que ses propres données.",
            "Authentification Supabase et autorisations vérifiées côté serveur.",
            "Aucune clé de service exposée au client.",
          ],
        },
        {
          title: "Tests automatisés",
          points: [
            "Vitest pour la logique métier : calculs de stock, de marges et de soldes de crédit.",
            "Playwright pour les parcours complets : connexion, vente, enregistrement d'un crédit.",
          ],
        },
      ],
      screenshots: [
        { src: "/projects/kombiz/capture-1.svg", alt: "Kombiz : tableau de bord (placeholder)" },
        { src: "/projects/kombiz/capture-2.svg", alt: "Kombiz : gestion des stocks (placeholder)" },
        { src: "/projects/kombiz/capture-3.svg", alt: "Kombiz : crédits clients (placeholder)" },
      ],
    },
  },
  {
    title: "MobiFact — Plateforme SaaS de facturation, devis et gestion client",
    domains: ["fullstack"],
    description:
      "Architecture full-stack complète pour générer devis et factures, suivre les clients et gérer les droits d’accès.",
    highlights: [
      "Génération automatisée de devis et de factures.",
      "Suivi client et gestion des droits d’accès.",
      "Déploiement continu.",
    ],
    tags: ["TypeScript", "Next.js", "React", "Node.js", "Supabase (SQL)", "Tailwind CSS"],
    github: githubProfile,
  },
  {
    title: "Infrastructure d’agents IA métiers & connecteurs MCP / RAG",
    domains: ["ia"],
    description:
      "Agents IA capables d’interagir avec des bases de données et des documentations techniques via RAG et MCP, pour automatiser les processus opérationnels.",
    tags: ["Python", "TypeScript", "Claude / GPT API", "LangChain", "MCP", "n8n"],
    github: githubProfile,
  },
  {
    title: "Orchestration SOAR & dashboard Power BI de suivi des vulnérabilités",
    domains: ["cyber-cloud"],
    description:
      "Pipeline automatisé d’enrichissement d’alertes de sécurité et tableau de bord décisionnel centralisant les scores CVSS et la surface d’attaque.",
    tags: ["Python", "PowerShell", "Power BI", "APIs REST", "Nmap", "Wireshark"],
    github: githubProfile,
  },
  {
    title: "Applications mobiles cross-platform & Android",
    domains: ["fullstack"],
    description:
      "Applications mobiles ergonomiques avec persistance des données locales et distantes, et optimisation des performances.",
    tags: ["Flutter", "Android", "APIs REST", "SQL"],
    github: githubProfile,
  },
  {
    title: "TAMYCS Shield — Secure PassVault",
    domains: ["cyber-cloud", "fullstack"],
    description:
      "Gestionnaire de mots de passe sécurisé, réalisé en équipe à l’ESAIP dans le cadre du cours Secure Programming.",
    highlights: [
      "Coffre-fort chiffré en AES-256-GCM, authentification JWT et bcrypt.",
      "Politique de mots de passe conforme ANSSI, protection contre le brute force et le XSS.",
      "Générateur de mots de passe et export CSV / JSON.",
    ],
    tags: ["Node.js", "Express", "MongoDB", "JWT", "AES-256-GCM"],
    github: "https://github.com/oumar771/tamycs-shield",
    href: "https://tamycs-shield.vercel.app",
    status: "Projet d’équipe – ESAIP 2026",
  },
  {
    title: "Rainalyse Beauté",
    domains: ["fullstack", "cyber-cloud"],
    description:
      "Plateforme de réservation pour services beauté et coiffure : choix du service, du personnel et du créneau, paiement de l’acompte, espace client et espace d’administration.",
    highlights: [
      "Disponibilités par personnel et par créneau, liste d’attente, politique d’acompte et d’annulation.",
      "Intégration Stripe et PayPal, factures PDF avec QR code de vérification.",
      "Row Level Security, autorisations par rôle vérifiées côté serveur, en-têtes de sécurité (CSP, HSTS).",
      "64 tests unitaires avec Vitest.",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Stripe", "Vitest"],
    github: githubProfile,
    status: "En développement",
  },
  {
    title: "Phishing Risk Scorer",
    domains: ["cyber-cloud", "fullstack"],
    description:
      "Moteur d’analyse en Python qui attribue un score de risque à une URL ou à un e-mail, avec interface web et extension Chrome pour Gmail et Outlook.",
    highlights: [
      "Dix vecteurs d’analyse : typosquattage, URL raccourcies, certificat SSL, langage d’urgence, etc.",
      "Lecture des en-têtes SMTP (SPF, DKIM, DMARC), réputation via VirusTotal et Google Safe Browsing.",
      "API REST Flask avec historique SQLite et extension Chrome (Manifest V3).",
    ],
    tags: ["Python", "Flask", "SQLite", "Extension Chrome", "VirusTotal"],
    github: "https://github.com/Mbesigne/phishing-scorer",
    href: "https://phishing-risk-scorer-v2.onrender.com",
    status: "Version 2",
  },
  {
    title: "CEH Practical Labs — Ethical Hacking",
    domains: ["cyber-cloud"],
    description:
      "Labs pratiques des modules 11 à 20 du programme Certified Ethical Hacker : techniques offensives documentées et reproductibles.",
    highlights: [
      "Injection SQL, XSS et session hijacking.",
      "Cryptographie, password cracking et évasion IDS / firewall.",
      "Environnements de test : Kali Linux, Metasploitable 2 et DVWA.",
    ],
    tags: ["Kali Linux", "Metasploit", "Nmap", "Wireshark", "SQLmap"],
    github: githubProfile,
  },
];

// ----------------------------------------------------------------- Liens

export const profiles = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mbe-romuald" },
  { label: "GitHub", href: githubProfile },
  { label: "TryHackMe", href: "https://tryhackme.com/p/romualddior86" },
];

export const cvHref = "/cv-romuald-mbe-signe.pdf";
