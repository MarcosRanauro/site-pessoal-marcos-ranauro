import type { Metadata } from "next";
import { Space_Grotesk, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { SocialSidebar } from "@/components/layout/SocialSidebar";
import { AccentProvider } from "@/lib/AccentContext";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marcosranauro.com.br"),
  title: "Marcos Ranauro — Fullstack Developer",
  description:
    "Desenvolvedor fullstack criando experiências digitais modernas, performáticas e bem estruturadas — do planejamento ao deploy.",
  keywords: [
    "Marcos Ranauro",
    "Fullstack Developer",
    "Desenvolvedor Web",
    "Next.js",
    "React",
    "TypeScript",
    "Desenvolvedor Rio de Janeiro",
  ],
  authors: [{ name: "Marcos Ranauro" }],
  creator: "Marcos Ranauro",
  alternates: {
    canonical: "https://marcosranauro.com.br",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://marcosranauro.com.br",
    siteName: "Marcos Ranauro",
    title: "Marcos Ranauro — Fullstack Developer",
    description:
      "Desenvolvedor fullstack criando experiências digitais modernas, performáticas e bem estruturadas — do planejamento ao deploy.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Marcos Ranauro — Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcos Ranauro — Fullstack Developer",
    description:
      "Desenvolvedor fullstack criando experiências digitais modernas, performáticas e bem estruturadas — do planejamento ao deploy.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans xl:pr-44">
        <AccentProvider>
          <CursorGlow />
          <SocialSidebar />
          {children}
        </AccentProvider>
      </body>
    </html>
  );
}
