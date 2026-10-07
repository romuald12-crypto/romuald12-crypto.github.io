"use client";

import { motion } from "framer-motion";

type Variant = "up" | "flip" | "left" | "right";

const hidden: Record<Variant, Record<string, number>> = {
  up: { opacity: 0, y: 32 },
  flip: { opacity: 0, y: 40, rotateX: -35 },
  left: { opacity: 0, x: -48, rotateY: 28 },
  right: { opacity: 0, x: 48, rotateY: -28 },
};

export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      data-reveal=""
      className={className}
      initial={hidden[variant]}
      whileInView={{ opacity: 1, x: 0, y: 0, rotateX: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformPerspective: 1000 }}
    >
      {children}
    </motion.div>
  );
}
