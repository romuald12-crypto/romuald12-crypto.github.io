"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

// Carte en verre qui s'incline en 3D vers le pointeur. Le fond flouté est un
// calque séparé : backdrop-filter sur l'élément incliné aplatirait la 3D.
export default function TiltCard({
  children,
  className = "",
  max = 9,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springX = useSpring(x, { stiffness: 180, damping: 18 });
  const springY = useSpring(y, { stiffness: 180, damping: 18 });

  const rotateY = useTransform(springX, [0, 1], [-max, max]);
  const rotateX = useTransform(springY, [0, 1], [max, -max]);
  const glareX = useTransform(springX, (value) => `${value * 100}%`);
  const glareY = useTransform(springY, (value) => `${value * 100}%`);
  const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX} ${glareY}, rgb(129 140 248 / 0.22), transparent 60%)`;

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width);
    y.set((event.clientY - rect.top) / rect.height);
  }

  function handlePointerLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <div className="h-full [perspective:1100px]">
      <motion.div
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="group relative h-full rounded-2xl shadow-[0_20px_50px_-25px_rgb(0_0_0/0.9)] transition-shadow duration-300 hover:shadow-[0_30px_70px_-25px_rgb(99_102_241/0.55)]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] transition-colors duration-300 group-hover:border-indigo-400/40"
        />
        <motion.div
          aria-hidden="true"
          style={{ background: glare }}
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        <div
          className={`relative h-full [transform:translateZ(28px)] ${className}`}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
