"use client";

import { domains, type DomainId } from "@/data/portfolio";

export type DomainFilter = DomainId | null;

// Barre de filtres partagée par les sections Projets et Compétences.
export default function FilterBar({
  label,
  value,
  onChange,
  counts,
}: {
  label: string;
  value: DomainFilter;
  onChange: (value: DomainFilter) => void;
  counts: Record<"all" | DomainId, number>;
}) {
  const items: { label: string; value: DomainFilter; count: number }[] = [
    { label: "Tout", value: null, count: counts.all },
    ...domains.map((domain) => ({
      label: domain.label,
      value: domain.id as DomainFilter,
      count: counts[domain.id],
    })),
  ];

  return (
    <ul aria-label={label} className="flex flex-wrap gap-2.5">
      {items.map((item) => {
        const active = value === item.value;

        return (
          <li key={item.label}>
            <button
              type="button"
              onClick={() => onChange(item.value)}
              aria-pressed={active}
              className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 ${
                active
                  ? "border-sky-400/60 bg-sky-400/15 text-zinc-50"
                  : "border-white/10 bg-white/5 text-zinc-400 hover:border-white/25 hover:text-zinc-100"
              }`}
            >
              {item.label}
              <span className={active ? "text-sky-200" : "text-zinc-500"}>
                {item.count}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
