import AboutTerminal from "@/components/ui/AboutTerminal";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const approach = [
  {
    title: "Construire des produits complets",
    text: "React, Next.js, Node.js, .NET, Flutter : du modèle de données à l’interface, avec tests et déploiement continu.",
  },
  {
    title: "Automatiser avec l’IA et le Cloud",
    text: "Agents IA, RAG, MCP, n8n, Dynamics 365 et Power Platform pour supprimer les tâches répétitives des équipes.",
  },
  {
    title: "Sécuriser dès la conception",
    text: "RBAC, moindre privilège, audits Defender for Cloud, pentest : la sécurité fait partie du code, pas d’une étape finale.",
  },
];

const languages = [
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "Professionnel courant" },
  { name: "Certifications", level: "TOEIC 735 / 990, EF SET C1" },
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
              Je conçois des applications, j’automatise les processus, je sécurise le tout.
            </p>
            <p className="mt-4 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-1.5 text-sm font-medium text-emerald-200">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-400" />
              Disponible pour une alternance ou un stage
            </p>
            <div className="mt-6 max-w-[62ch] space-y-4 text-base leading-relaxed text-zinc-300">
              <p>
                Je m’appelle Romuald MBE SIGNE, étudiant en MSc Pro Ingénierie
                Informatique &amp; Cybersécurité (Bac +5) à Epitech Paris.
                Originaire du Cameroun, j’ai suivi un cycle préparatoire
                d’ingénieur à l’IUC, puis un Bachelor Informatique &amp;
                Cybersécurité à l’ESAIP Angers, avec un semestre d’échange
                Erasmus à la Budapest University of Technology and Economics.
                Cette trajectoire internationale m’a appris à m’adapter vite et
                à travailler en anglais.
              </p>
              <p>
                Mon profil est volontairement polyvalent : développement
                full-stack et mobile (React, Next.js, Node.js, .NET, Flutter),
                IA générative et automatisation (agents, RAG, MCP, n8n),
                architectures Cloud/CRM sur Microsoft Azure et Dynamics 365, et
                cybersécurité. Pour bien sécuriser un système, il faut savoir le
                construire ; pour bien le construire, il faut savoir comment on
                l’attaque.
              </p>
              <p>
                Côté terrain, cinq stages en entreprise : plateforme de gestion
                des dépenses sur Dynamics 365 et Azure chez KARAYES GROUP,
                développement full-stack et Android chez Ejara, agents IA et
                pipelines RAG chez ActivSpaces, interfaces web chez Sigalix et
                infrastructure télécoms chez CAMTEL.
              </p>
              <p>
                Je recherche une alternance ou un stage en Île-de-France, avec
                une mobilité sur toute la France. Si mon profil vous intéresse,
                n’hésitez pas à{" "}
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
            <a
              href="/toeic-romuald-mbe-signe.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 text-sm font-semibold text-zinc-100 transition-colors duration-300 hover:border-indigo-400/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              <span aria-hidden="true">↗</span>
              Voir mon attestation TOEIC (PDF)
            </a>
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
