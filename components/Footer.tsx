const navigation = [
  { href: "#accueil", label: "Accueil" },
  { href: "#a-propos", label: "À propos" },
  { href: "#projets", label: "Projets" },
  { href: "#competences", label: "Compétences" },
  { href: "#parcours", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

const contacts = [
  { href: "mailto:mberomuald66@gmail.com", label: "mberomuald66@gmail.com" },
  { href: "tel:+33758406104", label: "+33 7 58 40 61 04" },
  { href: "https://www.linkedin.com/in/mbe-romuald", label: "LinkedIn" },
  { href: "https://github.com/romuald12-crypto", label: "GitHub" },
  { href: "https://tryhackme.com/p/romualddior86", label: "TryHackMe" },
];

const linkClass =
  "inline-flex min-h-9 items-center text-sm text-zinc-400 transition-colors duration-300 hover:text-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 pb-8 pt-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-semibold text-zinc-50">
              Romuald Mbe Signe
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-400">
              Étudiant en Bachelor 3 Cybersécurité à l’ESAIP Angers. Pentest,
              DevSecOps et développement sécurisé.
            </p>
            <p className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-1.5 text-sm font-medium text-emerald-200">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-400" />
              À la recherche d’une alternance en cybersécurité
            </p>
            <p className="mt-3 text-sm text-zinc-500">
              Disponible immédiatement, mobile dans toute la France.
            </p>
          </div>

          <nav aria-label="Pied de page">
            <p className="text-sm font-medium text-zinc-100">Navigation</p>
            <ul className="mt-3">
              {navigation.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-medium text-zinc-100">Me joindre</p>
            <ul className="mt-3">
              {contacts.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`${linkClass} break-all`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/cv-romuald-mbe-signe.pdf"
              download="CV-Romuald-Mbe-Signe.pdf"
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-zinc-100 transition-colors duration-300 hover:border-indigo-400/60 hover:bg-white/10"
            >
              <span aria-hidden="true">↓</span>
              Télécharger mon CV
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Romuald Mbe Signe. Tous droits réservés.</p>
          <a href="#accueil" className={linkClass}>
            Retour en haut
            <span aria-hidden="true" className="ml-2">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
