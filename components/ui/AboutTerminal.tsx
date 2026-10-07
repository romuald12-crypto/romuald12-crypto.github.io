"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Command = { cmd: string; output: string[] };
type Entry = Command & { id: number };

const commands: Command[] = [
  {
    cmd: "whoami",
    output: [
      "Romuald Mbe Signe",
      "Étudiant en Bachelor 3 Cybersécurité, ESAIP Angers",
    ],
  },
  {
    cmd: "cat parcours.txt",
    output: [
      "2023-2025  IUC, Cameroun",
      "2025-2026  ESAIP Angers, France",
      "2026       Erasmus à BME Budapest, Hongrie",
    ],
  },
  {
    cmd: "cat objectif.txt",
    output: [
      "Alternance en cybersécurité",
      "Rythme : 2 semaines en entreprise, 2 semaines à l’école",
      "Disponible immédiatement, mobile en France",
    ],
  },
  {
    cmd: "ls outils/",
    output: ["kali  metasploit  nmap  wireshark", "sqlmap  john  docker  git"],
  },
  {
    cmd: "ls langues/",
    output: [
      "français  courant",
      "anglais   TOEIC 735 (mai 2025), EF SET C1",
      "allemand  notions",
    ],
  },
];

// Terminal interactif : chaque bouton « exécute » une commande et ajoute sa
// sortie à l'historique, comme dans un vrai shell.
export default function AboutTerminal() {
  const [history, setHistory] = useState<Entry[]>([{ id: 0, ...commands[0] }]);
  const logRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(1);

  useEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [history]);

  function run(command: Command) {
    const id = nextId.current++;
    setHistory((entries) => [...entries, { id, ...command }]);
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080a18]/90 shadow-[0_30px_60px_-30px_rgb(0_0_0/0.9)]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 font-mono text-xs text-zinc-500">
        <span>romuald@portfolio: ~</span>
        <button
          type="button"
          onClick={() => setHistory([])}
          className="rounded px-2 py-1 text-zinc-400 transition-colors hover:text-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
        >
          clear
        </button>
      </div>

      <div
        ref={logRef}
        role="log"
        aria-live="polite"
        aria-label="Sortie du terminal"
        tabIndex={0}
        className="h-64 overflow-y-auto px-4 py-4 font-mono text-[13px] leading-relaxed focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-400"
      >
        {history.map((entry) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="mb-3"
          >
            <p className="text-zinc-100">
              <span className="text-sky-300">~$</span> {entry.cmd}
            </p>
            {entry.output.map((line) => (
              <p key={line} className="whitespace-pre-wrap text-zinc-400">
                {line}
              </p>
            ))}
          </motion.div>
        ))}
        <p className="text-zinc-100">
          <span className="text-sky-300">~$</span>{" "}
          <span
            aria-hidden="true"
            className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-sky-300"
          />
        </p>
      </div>

      <div className="border-t border-white/10 px-4 py-4">
        <p className="text-xs text-zinc-500">Lancez une commande :</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {commands.map((command) => (
            <li key={command.cmd}>
              <button
                type="button"
                onClick={() => run(command)}
                className="rounded-md border border-white/10 bg-white/5 px-3 py-2 font-mono text-xs text-zinc-300 transition-colors duration-300 hover:border-sky-400/50 hover:text-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                {command.cmd}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
