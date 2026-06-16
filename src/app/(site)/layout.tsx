import { CursorGlow } from "@/components/ui/CursorGlow";
import { SocialSidebar } from "@/components/layout/SocialSidebar";
import { cn, focusRing } from "@/lib/utils";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
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
      <div className="flex min-h-full flex-1 flex-col lg:pr-44">{children}</div>
    </>
  );
}
