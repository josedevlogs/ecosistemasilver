import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { QuienesSomos } from "@/components/landing/QuienesSomos";
import { Ecosistema } from "@/components/landing/Ecosistema";
import { ParaQuien } from "@/components/landing/ParaQuien";
import { ComoTrabajamos } from "@/components/landing/ComoTrabajamos";
import { Presencia } from "@/components/landing/Presencia";
import { CTAFinal } from "@/components/landing/CTAFinal";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <QuienesSomos />
      <Ecosistema />
      <ParaQuien />
      <ComoTrabajamos />
      <Presencia />
      <CTAFinal />
      <Footer />
    </main>
  );
}
