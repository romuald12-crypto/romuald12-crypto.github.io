import HeroPortrait from "@/components/ui/HeroPortrait";
import Reveal from "@/components/ui/Reveal";
import ScrambleText from "@/components/ui/ScrambleText";

const facts = [
  { label: "Formation", value: "Bachelor 3 Cybersécurité, ESAIP Angers" },
  { label: "Rythme", value: "2 semaines en entreprise, 2 semaines à l’école" },
  { label: "Mobilité", value: "Toute la France" },
];

const profiles = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mbe-romuald" },
  { label: "GitHub", href: "https://github.com/romuald12-crypto" },
  { label: "TryHackMe", href: "https://tryhackme.com/p/romualddior86" },
];

export default function Hero() {
  return (
    <section
      id="accueil"
      className="scroll-mt-20 flex min-h-[calc(100vh-4.5rem)] items-center px-4 sm:px-6"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 py-20 md:grid-cols-[1fr_auto]">
        <div>
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-1.5 text-sm font-medium text-emerald-200 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              À la recherche d’une alternance, disponible immédiatement
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display text-4xl font-bold tracking-tight text-zinc-50 md:text-6xl">
              <ScrambleText
                text="Romuald Mbe Signe"
                className="text-gradient text-gradient-animated"
              />
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 text-xl text-slate-300 md:text-2xl">
              Étudiant en Cybersécurité | Pentest &amp; DevSecOps
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-slate-400 md:text-lg">
              À la recherche d’une alternance en cybersécurité. Je pratique le
              pentest sur des labs et je sécurise les applications que je
              développe : contrôle d’accès, chiffrement, correction de failles.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <dl className="mt-8 grid max-w-2xl gap-x-8 gap-y-5 border-t border-white/10 pt-6 sm:grid-cols-3">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-sm text-slate-500">{fact.label}</dt>
                  <dd className="mt-1 text-sm font-medium text-zinc-100">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projets"
                className="btn-gradient rounded-xl px-6 py-3.5 text-sm font-semibold text-white"
              >
                <span className="relative z-10">Voir mes projets</span>
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-zinc-100 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/60 hover:bg-white/10"
              >
                Me contacter
              </a>
              <a
                href="/cv-romuald-mbe-signe.pdf"
                download="CV-Romuald-Mbe-Signe.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-zinc-100 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/60 hover:bg-white/10"
              >
                <span aria-hidden="true">↓</span>
                Télécharger mon CV
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400">
              Retrouvez-moi sur
              {profiles.map((profile) => (
                <a
                  key={profile.label}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center font-medium text-sky-200 underline decoration-sky-400/40 underline-offset-4 transition-colors duration-300 hover:text-zinc-50 hover:decoration-sky-300"
                >
                  {profile.label}
                </a>
              ))}
            </p>
          </Reveal>
        </div>

        <Reveal variant="flip" delay={0.2}>
          <HeroPortrait />
        </Reveal>
      </div>
    </section>
  );
}
