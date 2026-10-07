"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

// Portrait en parallaxe 3D : le cadre pivote vers le pointeur, le halo et les
// étiquettes flottent sur des plans de profondeur différents.
export default function HeroPortrait() {
  const reduceMotion = useReducedMotion();
  const [flipped, setFlipped] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 80, damping: 18 });
  const springY = useSpring(pointerY, { stiffness: 80, damping: 18 });

  const rotateY = useTransform(springX, [-0.5, 0.5], [-14, 14]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const glowX = useTransform(springX, [-0.5, 0.5], [28, -28]);
  const glowY = useTransform(springY, [-0.5, 0.5], [28, -28]);

  const { scrollY } = useScroll();
  const scrollShift = useTransform(scrollY, [0, 700], [0, 40]);

  useEffect(() => {
    if (reduceMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    function handlePointerMove(event: PointerEvent) {
      pointerX.set(event.clientX / window.innerWidth - 0.5);
      pointerY.set(event.clientY / window.innerHeight - 0.5);
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [reduceMotion, pointerX, pointerY]);

  return (
    <motion.div
      style={{ y: reduceMotion ? 0 : scrollShift }}
      className="relative mx-auto w-full max-w-xs [perspective:1200px] md:w-80"
    >
      <motion.div
        aria-hidden="true"
        style={{ x: glowX, y: glowY }}
        className="absolute -inset-10 bg-[radial-gradient(closest-side,rgb(99_102_241/0.5),transparent)]"
      />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative"
      >
        <div
          aria-hidden="true"
          className="absolute -inset-3 rounded-[2rem] border border-indigo-400/25 [transform:translateZ(-50px)]"
        />

        {/* Carte recto verso : le clic la retourne sur son axe vertical. */}
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative aspect-[3/4] rounded-3xl shadow-[0_40px_80px_-30px_rgb(79_70_229/0.7)]"
        >
          <div
            aria-hidden={flipped}
            className="absolute inset-0 overflow-hidden rounded-3xl border border-white/15 [backface-visibility:hidden]"
          >
            <Image
              src="/romuald-portrait.webp"
              alt="Portrait de Romuald Mbe Signe"
              fill
              priority
              sizes="(min-width: 768px) 320px, 100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05060f]/70 via-transparent to-transparent" />
          </div>

          <div
            aria-hidden={!flipped}
            className="absolute inset-0 overflow-hidden rounded-3xl border border-white/15 [backface-visibility:hidden] [transform:rotateY(180deg)]"
          >
            <Image
              src="/romuald-ordinateur.webp"
              alt="Romuald Mbe Signe travaillant sur son ordinateur portable"
              fill
              sizes="(min-width: 768px) 320px, 100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05060f]/70 via-transparent to-transparent" />
          </div>
        </motion.div>

        <button
          type="button"
          onClick={() => setFlipped((value) => !value)}
          aria-pressed={flipped}
          aria-label="Retourner la photo"
          className="absolute inset-0 cursor-pointer rounded-3xl [transform:translateZ(1px)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400"
        />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/15 bg-[#0b0d1f]/80 px-3 py-1.5 text-[11px] font-medium text-zinc-200 [transform:translateZ(40px)]"
        >
          ↻ Cliquer pour retourner
        </span>

        <span className="pointer-events-none absolute -left-2 top-10 animate-float rounded-full border border-white/15 bg-[#0b0d1f]/80 px-4 py-2 text-xs font-medium text-sky-200 shadow-lg [transform:translateZ(60px)] md:-left-8">
          Pentest
        </span>
        <span className="pointer-events-none absolute -right-1 bottom-16 animate-float rounded-full border border-white/15 bg-[#0b0d1f]/80 px-4 py-2 text-xs font-medium text-violet-200 shadow-lg [animation-delay:-3s] [transform:translateZ(80px)]">
          DevSecOps
        </span>
      </motion.div>
    </motion.div>
  );
}
