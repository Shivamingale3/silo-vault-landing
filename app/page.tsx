import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Security from "@/components/Security";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Ambient Background Elements */}
      <div className="ambient-glow top-glow"></div>
      <div className="ambient-glow bottom-glow"></div>

      <Navbar />
      <Hero />
      <Features />
      <Security />
      <CtaSection />
      <Footer />
    </main>
  );
}
