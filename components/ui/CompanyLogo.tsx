import Image from "next/image";

type Logo = { src: string; alt: string; width: number; height: number; dark?: boolean };

function initials(name: string) {
  return name
    .replace(/\(.*?\)/g, "")
    .split(/\s+/)
    .filter((word) => /^[A-Za-zÀ-ÿ]/.test(word))
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

// Logo de l'entreprise, ou pastille avec ses initiales quand le fichier
// n'existe pas encore dans /public/logos.
export default function CompanyLogo({ name, logo }: { name: string; logo?: Logo }) {
  if (logo) {
    return (
      <div
        className={`mb-4 inline-block max-w-full overflow-hidden rounded-lg ${
          logo.dark ? "bg-black" : "bg-white px-3 py-2"
        }`}
      >
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className="h-auto max-h-12 w-auto max-w-full"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Logo de ${name} (placeholder)`}
      className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-white/15 bg-gradient-to-br from-sky-600 via-indigo-600 to-violet-700 font-display text-base font-bold text-white"
    >
      {initials(name)}
    </div>
  );
}
