"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const email = "mberomuald66@gmail.com";

type ContactLink = { label: string; value: string; href: string; copy?: string };

const contactLinks: ContactLink[] = [
  { label: "E-mail", value: email, href: `mailto:${email}`, copy: email },
  { label: "Téléphone", value: "+33 7 58 40 61 04", href: "tel:+33758406104", copy: "+33758406104" },
  { label: "LinkedIn", value: "linkedin.com/in/mbe-romuald", href: "https://www.linkedin.com/in/mbe-romuald" },
  { label: "GitHub", value: "github.com/romuald12-crypto", href: "https://github.com/romuald12-crypto" },
  { label: "TryHackMe", value: "tryhackme.com/p/romualddior86", href: "https://tryhackme.com/p/romualddior86" },
];

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

// Logos des moyens de contact, indexés par libellé. TryHackMe est représenté
// par un nuage simplifié, clin d'œil à son logo.
const icons: Record<string, React.ReactNode> = {
  "E-mail": (
    <svg viewBox="0 0 24 24" {...strokeProps}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  Téléphone: (
    <svg viewBox="0 0 24 24" {...strokeProps}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  ),
  TryHackMe: (
    <svg viewBox="0 0 24 24" {...strokeProps}>
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  ),
};

const subjects = [
  "Proposition d’alternance",
  "Demande d’entretien",
  "Question",
];

const fieldClass =
  "mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 transition-colors duration-300 focus:border-sky-400/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  const [subject, setSubject] = useState(subjects[0]);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(null), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function copy(link: ContactLink) {
    if (!link.copy) return;
    try {
      await navigator.clipboard.writeText(link.copy);
      setCopied(link.label);
    } catch {
      // Presse-papiers indisponible : le lien reste utilisable.
    }
  }

  // Pas de serveur d'envoi : le formulaire prépare l'e-mail et l'ouvre dans la
  // messagerie du visiteur.
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const signature = [name.trim(), company.trim()].filter(Boolean).join(", ");
    const body = `Bonjour Romuald,\n\n${message.trim()}\n\n${signature}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className="scroll-mt-20 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="05"
          title="Contact"
          subtitle="Un projet, une opportunité ou simplement une question ? N’hésitez pas à m’écrire."
        />

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <Reveal delay={0.1}>
            <p className="font-display text-2xl font-semibold leading-snug text-zinc-50">
              À la recherche d’une alternance en cybersécurité, disponible
              immédiatement.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Basé à Angers, mobile dans toute la France. Rythme de 2 semaines
              en entreprise et 2 semaines à l’école.
            </p>

            <ul className="mt-8">
              {contactLinks.map((link) => (
                <li
                  key={link.label}
                  className="flex items-center gap-4 border-t border-white/10 py-4"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sky-200 [&>svg]:h-5 [&>svg]:w-5"
                  >
                    {icons[link.label]}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-zinc-500">{link.label}</p>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="mt-0.5 inline-block break-all text-sm font-medium text-zinc-100 underline decoration-white/20 underline-offset-4 transition-colors duration-300 hover:text-sky-200 hover:decoration-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400"
                    >
                      {link.value}
                    </a>
                  </div>
                  {link.copy && (
                    <button
                      type="button"
                      onClick={() => copy(link)}
                      aria-label={`Copier : ${link.label}`}
                      className="min-h-11 rounded-lg border border-white/10 bg-white/5 px-3 text-xs font-medium text-zinc-300 transition-colors duration-300 hover:border-sky-400/50 hover:text-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                    >
                      {copied === link.label ? "Copié" : "Copier"}
                    </button>
                  )}
                </li>
              ))}
            </ul>
            <p aria-live="polite" className="sr-only">
              {copied ? `${copied} copié dans le presse-papiers` : ""}
            </p>

            <a
              href="/cv-romuald-mbe-signe.pdf"
              download="CV-Romuald-Mbe-Signe.pdf"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-zinc-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/60 hover:bg-white/10"
            >
              <span aria-hidden="true">↓</span>
              Télécharger mon CV (PDF)
            </a>
          </Reveal>

          <Reveal variant="flip" delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 shadow-[0_30px_60px_-30px_rgb(0_0_0/0.9)] md:p-8"
            >
              <h3 className="font-display text-lg font-semibold text-zinc-50">
                Écrivez-moi en une minute
              </h3>

              <fieldset className="mt-6">
                <legend className="text-sm text-zinc-300">Objet</legend>
                <div className="mt-2 flex flex-wrap gap-2">
                  {subjects.map((item) => {
                    const active = subject === item;

                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setSubject(item)}
                        aria-pressed={active}
                        className={`min-h-11 rounded-full border px-4 text-sm font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 ${
                          active
                            ? "border-sky-400/60 bg-sky-400/15 text-zinc-50"
                            : "border-white/10 bg-white/5 text-zinc-400 hover:border-white/25 hover:text-zinc-100"
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className="block text-sm text-zinc-300">
                  Votre nom
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className={fieldClass}
                  />
                </label>
                <label className="block text-sm text-zinc-300">
                  Entreprise (facultatif)
                  <input
                    type="text"
                    name="company"
                    autoComplete="organization"
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                    className={fieldClass}
                  />
                </label>
              </div>

              <label className="mt-5 block text-sm text-zinc-300">
                Votre message
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className={`${fieldClass} resize-y`}
                />
              </label>

              <button
                type="submit"
                className="btn-gradient mt-6 inline-flex rounded-xl px-6 py-3.5 text-sm font-semibold text-white"
              >
                <span className="relative z-10">Ouvrir dans votre messagerie</span>
              </button>
              <p className="mt-3 text-xs leading-relaxed text-zinc-500">
                Le message s’ouvre dans votre application de messagerie, prêt à
                être envoyé. Rien n’est enregistré sur ce site.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
