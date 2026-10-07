"use client";

import { useEffect, useState } from "react";

const glyphs = "abcdefghijklmnopqrstuvwxyz01#$%&";

// Texte « déchiffré » au chargement : les lettres défilent puis se fixent une à
// une. Le vrai texte reste dans la page (invisible) pour réserver la place et
// pour les lecteurs d'écran ; seule la copie animée est affichée.
export default function ScrambleText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const timer = window.setInterval(() => {
      frame += 1;
      const resolved = Math.floor(frame / 2);
      setDisplay(
        text
          .split("")
          .map((char, index) =>
            index < resolved || char === " "
              ? char
              : glyphs[Math.floor(Math.random() * glyphs.length)],
          )
          .join(""),
      );
      if (resolved >= text.length) window.clearInterval(timer);
    }, 45);

    return () => window.clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-grid">
      <span className="col-start-1 row-start-1 opacity-0">{text}</span>
      <span aria-hidden="true" className={`col-start-1 row-start-1 ${className}`}>
        {display}
      </span>
    </span>
  );
}
