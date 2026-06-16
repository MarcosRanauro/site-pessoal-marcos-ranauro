import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Sobre } from "@/components/sections/Sobre";
import { Stack } from "@/components/sections/Stack";
import { Projetos } from "@/components/sections/Projetos";
import { Servicos } from "@/components/sections/Servicos";
import { Processo } from "@/components/sections/Processo";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { Contato } from "@/components/sections/Contato";

export default function Home() {
  return (
    <>
      <Header />

      <main id="conteudo" className="flex flex-1 flex-col">
        <Hero />
        <Sobre />
        <Stack />
        <Projetos />
        <Servicos />
        <Processo />
        <Diferenciais />
        <Contato />
      </main>

      <Footer />
    </>
  );
}
