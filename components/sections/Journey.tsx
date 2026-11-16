"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import { education, experiences } from "@/data/portfolio";

export default function Journey() {
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 55%"],
  });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });
  const nextOnRight = experiences.length % 2 === 1;

  return (
    <section id="parcours" className="scroll-mt-20 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          title="Expériences et formation"
          subtitle="Cinq stages en entreprise, du réseau télécom au Cloud et à l’IA, puis un cursus d’ingénieur en informatique et cybersécurité."
        />

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
          {experiences.map((step, index) => {
            const onRight = index % 2 === 1;

            return (
              <li
                key={step.company + step.period}
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
                    <article>
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
                      <p className="font-mono text-xs uppercase tracking-widest text-sky-300">
                        <time>{step.period}</time>
                      </p>
                      <h3 className="mt-3 font-display text-lg font-semibold text-zinc-50">
                        {step.role}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-indigo-200">
                        {step.company}
                      </p>
                      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-400">
                        {step.points.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-sky-400 to-violet-500" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">
                        {step.tech.map((tech) => (
                          <li
                            key={tech}
                            className="rounded-full border border-indigo-400/25 bg-indigo-400/10 px-3 py-1 text-xs text-indigo-100"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </article>
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
                    Prochaine étape, disponible
                  </p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-zinc-50">
                    À la recherche d’une alternance ou d’un stage : votre
                    entreprise ?
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    Île-de-France, avec une mobilité sur toute la France.
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

        <div className="mt-20">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold text-zinc-50">
              Formation
            </h3>
          </Reveal>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {education.map((item, index) => (
              <li key={item.degree}>
                <Reveal delay={index * 0.08} className="h-full">
                  <TiltCard className="h-full p-6">
                    <article>
                      {item.logo && (
                        <div className="mb-4 inline-block max-w-full overflow-hidden rounded-lg bg-white px-3 py-2">
                          <Image
                            src={item.logo.src}
                            alt={item.logo.alt}
                            width={item.logo.width}
                            height={item.logo.height}
                            className="h-auto max-h-10 w-auto max-w-full"
                          />
                        </div>
                      )}
                      <p className="font-mono text-xs uppercase tracking-widest text-sky-300">
                        <time>{item.period}</time>
                      </p>
                      <h4 className="mt-3 font-display text-base font-semibold text-zinc-50">
                        {item.degree}
                      </h4>
                      <p className="mt-1 text-sm font-medium text-indigo-200">
                        {item.school}
                      </p>
                      {item.note && (
                        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                          {item.note}
                        </p>
                      )}
                    </article>
                  </TiltCard>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
