"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#a-propos", label: "À propos" },
  { href: "#projets", label: "Projets" },
  { href: "#competences", label: "Compétences" },
  { href: "#parcours", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const reduceMotion = useReducedMotion();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05060f]/60 backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6">
        <a
          href="#accueil"
          className="flex items-center gap-3 font-display text-lg font-semibold tracking-tight text-zinc-100"
        >
          {/* Image agrandie à 300 % et décalée pour centrer le visage dans le rond. */}
          <span className="relative block h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/20 shadow-[0_0_14px_1px_rgb(99_102_241/0.6)]">
            <Image
              src="/romuald-avatar.webp"
              alt=""
              width={240}
              height={319}
              className="absolute left-[-86%] top-[-41%] h-auto w-[300%] max-w-none"
            />
          </span>
          <span>
            RMS<span className="text-gradient">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative inline-flex min-h-11 items-center text-sm text-zinc-400 transition-colors duration-300 hover:text-zinc-50"
              >
                {link.label}
                <span className="absolute inset-x-0 bottom-2 h-px origin-left scale-x-0 bg-gradient-to-r from-sky-400 to-violet-400 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden min-h-11 items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 text-sm font-medium text-emerald-200 transition-colors duration-300 hover:border-emerald-400/50 hover:text-emerald-100 xl:inline-flex"
        >
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-400" />
          À la recherche d’une alternance
        </a>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
          className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-zinc-200 transition-colors hover:bg-white/10 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <motion.ul
          id="menu-mobile"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="border-t border-white/10 px-4 py-3 md:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm text-zinc-300 transition-colors hover:bg-white/10 hover:text-zinc-50"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2 border-t border-white/10 pt-3">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 rounded-lg px-3 py-3 text-sm font-medium text-emerald-200 transition-colors hover:bg-white/10"
            >
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-400" />
              À la recherche d’une alternance
            </a>
          </li>
        </motion.ul>
      )}

      <motion.div
        aria-hidden="true"
        style={{ scaleX: reduceMotion ? scrollYProgress : progress }}
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-500"
      />
    </header>
  );
}
