import AboutTerminal from "@/components/ui/AboutTerminal";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const approach = [
  {
    title: "Attaquer pour comprendre",
    text: "Injection SQL, XSS, session hijacking, password cracking : je pratique sur Metasploitable 2, DVWA et TryHackMe.",
  },
  {
    title: "Sécuriser dès la conception",
    text: "Moindre privilège, RBAC, Row Level Security, en-têtes CSP et HSTS : la sécurité fait partie du code, pas d’une étape finale.",
  },
  {
    title: "Construire et tester",
    text: "Next.js, Supabase, Power Platform : des applications complètes, livrées avec leurs tests et leur documentation.",
  },
];

const languages = [
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "TOEIC 735 / 990 (mai 2025), EF SET C1" },
  { name: "Allemand", level: "Notions" },
];

const linkClass =
  "font-medium text-sky-200 underline decoration-sky-400/40 underline-offset-4 transition-colors duration-300 hover:text-zinc-50 hover:decoration-sky-300";

export default function About() {
  return (
    <section id="a-propos" className="scroll-mt-20 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" title="À propos" />

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <Reveal delay={0.1}>
            <p className="font-display text-2xl font-semibold leading-snug text-zinc-50 md:text-3xl">
              Je construis des applications, puis je cherche comment les casser.
            </p>
            <p className="mt-4 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-1.5 text-sm font-medium text-emerald-200">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-400" />
              À la recherche d’une alternance en cybersécurité
            </p>
            <div className="mt-6 max-w-[62ch] space-y-4 text-base leading-relaxed text-zinc-300">
              <p>
                Je m’appelle Romuald Mbe Signe, étudiant en cybersécurité et
                futur ingénieur, avec un profil qui couvre à la fois l’attaque
                et la construction. Originaire du Cameroun, j’ai commencé par
                deux ans d’ingénierie informatique à l’IUC avant de rejoindre
                l’ESAIP à Angers pour un Bachelor en cybersécurité. J’ai ensuite
                complété ce parcours par un échange Erasmus à la Budapest
                University of Technology and Economics, jusqu’en juin 2026, une
                expérience qui m’a appris à m’adapter vite et à travailler dans
                un cadre international.
              </p>
              <p>
                Mon approche repose sur un principe simple : pour bien défendre
                un système, il faut savoir comment on l’attaque, et pour bien le
                sécuriser, il faut savoir le construire. C’est pourquoi je
                travaille à la fois sur le pentest, le DevSecOps et le
                développement full-stack sécurisé, avec React, Next.js, Node.js,
                Flutter et Python. J’ai notamment conçu le Phishing Risk Scorer,
                une extension Chrome qui évalue le risque des pages de phishing,
                ainsi que FinSecure MoMo, une solution de détection de fraude
                sur le mobile money fondée sur le machine learning.
              </p>
              <p>
                Sur le terrain, j’ai déjà travaillé en entreprise :
                développement d’applications web internes lors d’un stage dans
                un opérateur télécom au Cameroun, puis conception d’une
                plateforme de gestion de notes de frais chez KARAYES GROUP, sur
                Dynamics 365, Azure et .NET. Ces expériences m’ont appris à
                livrer des solutions concrètes, dans des contraintes réelles de
                délais et d’usage.
              </p>
              <p>
                Je suis convaincu que les marchés africains en pleine
                transformation numérique, comme la fintech, le mobile money et
                la logistique, ont besoin de produits sécurisés dès leur
                conception. C’est dans cette direction que je veux faire grandir
                mes compétences.
              </p>
              <p>
                Je recherche aujourd’hui une alternance en cybersécurité,
                partout en France, et je suis disponible immédiatement. Si mon
                profil vous intéresse, n’hésitez pas à{" "}
                <a href="#projets" className={linkClass}>
                  parcourir mes projets
                </a>{" "}
                ou à{" "}
                <a href="#contact" className={linkClass}>
                  me contacter directement
                </a>
                .
              </p>
            </div>
            <dl className="mt-8 grid max-w-[62ch] gap-x-8 gap-y-4 border-t border-white/10 pt-6 sm:grid-cols-3">
              {languages.map((language) => (
                <div key={language.name}>
                  <dt className="text-sm text-zinc-500">{language.name}</dt>
                  <dd className="mt-1 text-sm font-medium text-zinc-100">
                    {language.level}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal variant="flip" delay={0.2} className="lg:sticky lg:top-24">
            <AboutTerminal />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14">
          <ul className="grid gap-8 sm:grid-cols-3">
            {approach.map((item) => (
              <li key={item.title} className="relative border-t border-white/10 pt-5">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[-1px] h-px w-12 bg-gradient-to-r from-sky-400 to-violet-500"
                />
                <h3 className="font-display text-base font-semibold text-zinc-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
