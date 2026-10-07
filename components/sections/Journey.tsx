"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";

type Kind = "Formation" | "Stage" | "Erasmus";

type Step = {
  kind: Kind;
  period: string;
  title: string;
  place: string;
  // dark : logo dessiné sur fond noir, affiché sans le cartouche blanc.
  logo?: { src: string; alt: string; width: number; height: number; dark?: boolean };
  description: string;
  points: string[];
};

const kindDot: Record<Kind, string> = {
  Formation: "bg-sky-400",
  Stage: "bg-violet-400",
  Erasmus: "bg-amber-300",
};

const journey: Step[] = [
  {
    kind: "Formation",
    period: "2023 – 2025",
    title: "IUC - Bachelor en Génie Informatique",
    place: "Cameroun",
    logo: { src: "/logos/iuc.png", alt: "Logo IUC", width: 258, height: 350 },
    description:
      "Formation initiale en informatique et télécommunications à l’Institut Universitaire de la Côte.",
    points: [
      "Fondamentaux en programmation et en systèmes.",
      "Bases des réseaux et des télécommunications.",
    ],
  },
  {
    kind: "Stage",
    period: "Juillet – Septembre 2023",
    title: "Camtel - Technicien Réseau & Infrastructure",
    place: "Cameroun",
    logo: { src: "/logos/camtel.png", alt: "Logo Camtel", width: 200, height: 200 },
    description:
      "Trois mois au sein de l’opérateur Cameroon Telecommunications, sur l’infrastructure réseau.",
    points: [
      "Maintenance des serveurs, routeurs et switchs.",
      "Diagnostic réseau et support utilisateurs niveau 2/3.",
      "Surveillance des logs et rédaction de procédures.",
    ],
  },
  {
    kind: "Formation",
    period: "Sept. 2025 – Oct. 2026",
    title: "ESAIP - Bachelor 3 Cybersécurité",
    place: "Angers, France",
    logo: { src: "/logos/esaip.png", alt: "Logo ESAIP Engineering School", width: 508, height: 184 },
    description:
      "Spécialisation en cybersécurité, pentest et DevSecOps. Projet de fin d’études en cours.",
    points: [
      "Cours Secure Programming : gestionnaire de mots de passe TAMYCS Shield, réalisé en équipe.",
      "Sécurité offensive et défensive, de l’audit au durcissement.",
    ],
  },
  {
    kind: "Erasmus",
    period: "Février – Juin 2026",
    title: "BME - Échange universitaire",
    place: "Budapest, Hongrie",
    logo: { src: "/logos/bme.png", alt: "Logo BME Műegyetem", width: 851, height: 183 },
    description:
      "Un semestre à la Budapest University of Technology and Economics, avec des cours et des rapports en anglais.",
    points: [
      "V2X Communication : simulations Artery / OMNeT++ dans Docker.",
      "Trustworthy AI & Data Analysis : analyse de données en Python.",
    ],
  },
  {
    kind: "Stage",
    period: "Juillet – Septembre 2026",
    title: "Karayes Group - Stagiaire Power Platform",
    place: "Douala, Cameroun",
    logo: { src: "/logos/karayes.png", alt: "Logo Karayes Group", width: 200, height: 200, dark: true },
    description:
      "Conception d’une application de gestion de dépenses sur Microsoft Power Platform.",
    points: [
      "Application Power Apps et modèle de données Dataverse.",
      "SSO Microsoft Entra ID et RBAC à trois rôles.",
      "Automatisation Power Automate et reporting Power BI.",
    ],
  },
];

export default function Journey() {
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 55%"],
  });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });
  const nextOnRight = journey.length % 2 === 1;

  return (
    <section id="parcours" className="scroll-mt-20 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          title="Parcours"
          subtitle="Trois pays, deux écoles et deux stages : du Cameroun à Angers, en passant par Budapest."
        />

        <Reveal delay={0.1} className="mt-8">
          <ul aria-label="Légende" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400">
            {(Object.keys(kindDot) as Kind[]).map((kind) => (
              <li key={kind} className="flex items-center gap-2">
                <span aria-hidden="true" className={`h-2 w-2 rounded-full ${kindDot[kind]}`} />
                {kind}
              </li>
            ))}
          </ul>
        </Reveal>

        <div ref={timelineRef} className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute left-[7px] top-0 h-full w-px bg-white/10 md:left-1/2"
          />
          <motion.div
            aria-hidden="true"
            style={{ scaleY: reduceMotion ? scrollYProgress : lineProgress }}
            className="absolute left-[7px] top-0 h-full w-px origin-top bg-gradient-to-b from-sky-400 via-indigo-400 to-violet-500 shadow-[0_0_12px_1px_rgb(99_102_241/0.8)] md:left-1/2"
          />

          <ol>
          {journey.map((step, index) => {
            const onRight = index % 2 === 1;

            return (
              <li
                key={step.title + step.period}
                className="relative mb-10 pl-10 md:grid md:grid-cols-2 md:gap-16 md:pl-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-7 h-[15px] w-[15px] rounded-full border-2 border-indigo-300 bg-[#05060f] shadow-[0_0_14px_3px_rgb(99_102_241/0.7)] md:left-1/2 md:-translate-x-1/2"
                />

                <Reveal
                  variant={onRight ? "right" : "left"}
                  className={onRight ? "md:col-start-2" : undefined}
                >
                  <TiltCard className="p-6">
                    {step.logo && (
                      <div
                        className={`mb-4 inline-block max-w-full overflow-hidden rounded-lg ${
                          step.logo.dark ? "bg-black" : "bg-white px-3 py-2"
                        }`}
                      >
                        <Image
                          src={step.logo.src}
                          alt={step.logo.alt}
                          width={step.logo.width}
                          height={step.logo.height}
                          className="h-auto max-h-12 w-auto max-w-full"
                        />
                      </div>
                    )}
                    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                      <span className="inline-flex items-center gap-2 font-medium text-zinc-100">
                        <span aria-hidden="true" className={`h-2 w-2 rounded-full ${kindDot[step.kind]}`} />
                        {step.kind}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-widest text-sky-300">
                        {step.period}
                      </span>
                    </p>
                    <h3 className="mt-3 font-display text-lg font-semibold text-zinc-50">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-500">{step.place}</p>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {step.description}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-400">
                      {step.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-sky-400 to-violet-500" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </TiltCard>
                </Reveal>
              </li>
            );
          })}

            {/* Dernière étape laissée ouverte : la place de la future entreprise. */}
            <li className="relative pl-10 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
              <span
                aria-hidden="true"
                className="absolute left-0 top-7 flex h-[15px] w-[15px] md:left-1/2 md:-translate-x-1/2"
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-[15px] w-[15px] rounded-full border-2 border-emerald-300 bg-[#05060f]" />
              </span>

              <Reveal
                variant={nextOnRight ? "right" : "left"}
                className={nextOnRight ? "md:col-start-2" : undefined}
              >
                <div className="rounded-2xl border border-dashed border-emerald-400/40 bg-emerald-400/[0.04] p-6">
                  <p className="text-sm font-medium text-emerald-200">
                    Prochaine étape, disponible immédiatement
                  </p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-zinc-50">
                    À la recherche d’une alternance en cybersécurité : votre
                    entreprise ?
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    Rythme de 2 semaines en entreprise et 2 semaines à l’école,
                    mobile dans toute la France.
                  </p>
                  <a
                    href="#contact"
                    className="btn-gradient mt-5 inline-flex rounded-xl px-5 py-3 text-sm font-semibold text-white"
                  >
                    <span className="relative z-10">Me contacter</span>
                  </a>
                </div>
              </Reveal>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
