import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const title = "Romuald MBE SIGNE | Ingénieur Full-Stack, Cloud & Cybersécurité";
const description =
  "Portfolio de Romuald MBE SIGNE, étudiant MSc Pro à Epitech Paris : développement full-stack et mobile, IA et automatisation, Cloud/CRM et cybersécurité. Disponible pour une alternance ou un stage en Île-de-France.";

// Le logo (favicon, icône Apple) et l'image d'aperçu de lien sont les fichiers
// icon.png, apple-icon.png et opengraph-image.png de ce dossier.
export const metadata: Metadata = {
  metadataBase: new URL("https://romuald-mbe-signe.pages.dev"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Romuald Mbe Signe",
    locale: "fr_FR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {/* Sans JavaScript, les blocs animés à l'apparition restent visibles. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
