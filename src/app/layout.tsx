import type { Metadata } from "next";
import { Space_Grotesk, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { SocialSidebar } from "@/components/layout/SocialSidebar";
import { AccentProvider } from "@/lib/AccentContext";
import { JsonLd } from "@/components/ui/JsonLd";
import { Analytics } from "@vercel/analytics/next";
import { cn, focusRing } from "@/lib/utils";

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

const SITE_DESCRIPTION =
  "Desenvolvedor fullstack freelance. Sites e produtos digitais sob medida — design, código e deploy. Do zero ao no ar, entregue pronto pro cliente usar.";

export const metadata: Metadata = {
  metadataBase: new URL("https://marcosranauro.com.br"),
  title: "Marcos Ranauro — Fullstack Developer",
  description: SITE_DESCRIPTION,
  keywords: [
    "Marcos Ranauro",
    "Fullstack Developer",
    "Desenvolvedor Freelance",
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
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcos Ranauro — Fullstack Developer",
    description: SITE_DESCRIPTION,
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
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans lg:pr-44">
        <JsonLd />
        <AccentProvider>
          <a
            href="#conteudo"
            className={cn(
              "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]",
              "rounded-sm border border-border bg-background px-4 py-2.5",
              "text-sm font-medium text-foreground",
              focusRing,
            )}
          >
            Pular para conteúdo
          </a>
          <CursorGlow />
          <SocialSidebar />
          {children}
          <Analytics />
        </AccentProvider>
      </body>
    </html>
  );
}
