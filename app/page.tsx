import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Security from "@/components/Security";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { getLatestRelease } from "@/lib/github";

export default async function Home() {
  const { downloadUrl, version } = await getLatestRelease();

  return (
    <main className="relative min-h-screen">
      {/* Ambient Background Elements */}
      <div className="ambient-glow top-glow"></div>
      <div className="ambient-glow bottom-glow"></div>

      <Navbar downloadUrl={downloadUrl} version={version} />
      <Hero downloadUrl={downloadUrl} version={version} />
      <Features />
      <Security />
      <CtaSection downloadUrl={downloadUrl} />
      <Footer />
    </main>
  );
}
