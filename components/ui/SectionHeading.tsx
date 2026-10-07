import Reveal from "@/components/ui/Reveal";

export default function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-indigo-300/80">
        {index}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-zinc-50 md:text-4xl">
        <span className="text-gradient">{title}</span>
      </h2>
      <div className="mt-4 h-px w-24 bg-gradient-to-r from-sky-400 via-indigo-400 to-transparent" />
      {subtitle && <p className="mt-4 max-w-2xl text-zinc-400">{subtitle}</p>}
    </Reveal>
  );
}
