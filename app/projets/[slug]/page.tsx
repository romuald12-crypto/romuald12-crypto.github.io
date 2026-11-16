import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Background from "@/components/ui/Background";
import { projects } from "@/data/portfolio";

const detailed = projects.filter((project) => project.detail);

export function generateStaticParams() {
  return detailed.map((project) => ({ slug: project.detail!.slug }));
}

function find(slug: string) {
  return detailed.find((project) => project.detail!.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const project = find((await params).slug);
  if (!project) return {};
  return {
    title: `${project.title} | Romuald MBE SIGNE`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project = find((await params).slug);
  if (!project?.detail) notFound();
  const { detail } = project;

  return (
    <div className="relative isolate min-h-screen text-zinc-100">
      <Background />
      <header className="border-b border-white/10 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center px-4 py-3 sm:px-6">
          <Link
            href="/#projets"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-sky-200 transition-colors hover:text-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400"
          >
            <span aria-hidden="true">←</span>
            Retour aux projets
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        {project.status && (
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-200">
            {project.status}
          </p>
        )}
        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-zinc-50 md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-3 text-lg text-sky-200">{detail.tagline}</p>
        <p className="mt-5 max-w-[65ch] leading-relaxed text-zinc-300">
          {project.description}
        </p>

        <ul aria-label="Technologies" className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-4">
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient rounded-xl px-6 py-3.5 text-sm font-semibold text-[#fff]"
            >
              <span className="relative z-10">Voir le projet</span>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-zinc-100 transition-colors hover:border-indigo-400/60 hover:bg-white/10"
            >
              Code source
            </a>
          )}
        </div>

        <section aria-labelledby="captures" className="mt-14">
          <h2 id="captures" className="font-display text-2xl font-semibold text-zinc-50">
            Captures d’écran
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {detail.screenshots.map((shot, index) => (
              <li
                key={shot.src}
                className={`overflow-hidden rounded-xl border border-white/10 ${index === 0 ? "sm:col-span-2" : ""}`}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={1280}
                  height={800}
                  className="h-auto w-full"
                  unoptimized
                />
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {detail.sections.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6"
            >
              <h2 className="font-display text-lg font-semibold text-zinc-50">
                {section.title}
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-400">
                {section.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-sky-400 to-violet-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
