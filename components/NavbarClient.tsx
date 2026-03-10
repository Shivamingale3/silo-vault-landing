"use client";

import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import Link from "next/link";

type NavbarClientProps = {
  downloadUrl: string;
  version: string;
};

export default function NavbarClient({ downloadUrl, version }: NavbarClientProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <Link
          href="#features"
          className="text-text-muted font-medium text-[15px] hover:text-white transition-colors"
        >
          Features
        </Link>
        <Link
          href="#screenshots"
          className="text-text-muted font-medium text-[15px] hover:text-white transition-colors"
        >
          Screenshots
        </Link>
        <Link
          href="#security"
          className="text-text-muted font-medium text-[15px] hover:text-white transition-colors"
        >
          Security
        </Link>
        <a
          href={downloadUrl}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-[15px] transition-all duration-300 bg-transparent text-white border border-white/10 hover:bg-white/5 hover:border-white"
        >
          Download {version}
        </a>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-white text-[24px]"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X /> : <List />}
      </button>

      {/* Mobile Menu Content */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-bg-dark/95 backdrop-blur-md border-b border-white/10 p-5 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <Link
            href="#features"
            className="text-text-muted font-medium text-[16px] py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="#screenshots"
            className="text-text-muted font-medium text-[16px] py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Screenshots
          </Link>
          <Link
            href="#security"
            className="text-text-muted font-medium text-[16px] py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Security
          </Link>
          <a
            href={downloadUrl}
            className="inline-flex items-center justify-center w-full px-6 py-3 mt-2 rounded-xl font-semibold text-[15px] transition-all bg-transparent text-white border border-white/10"
            onClick={() => setMobileMenuOpen(false)}
          >
            Download {version}
          </a>
        </div>
      )}

      {/* Scrolled State CSS Helper - We use a hidden element to pass the state to the parent if needed, 
          but better to just use a global class or handle it via a parent client wrapper if we really need it on the nav tag.
          Since the nav tag itself changes class based on 'scrolled', the parent MUST be a client component or we use a clever CSS trick.
      */}
      <style jsx global>{`
        nav.main-nav {
          transition: all 0.3s ease;
        }
        nav.main-nav.scrolled {
          background-color: rgba(10, 15, 24, 0.85);
          backdrop-filter: blur(20px);
          padding-top: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        nav.main-nav:not(.scrolled) {
          padding-top: 1.25rem;
          padding-bottom: 1.25rem;
        }
      `}</style>
      
      {/* Script to toggle scrolled class on parent nav */}
      <script dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const nav = document.querySelector('nav.main-nav');
            if (!nav) return;
            window.addEventListener('scroll', () => {
              if (window.scrollY > 50) {
                nav.classList.add('scrolled');
              } else {
                nav.classList.remove('scrolled');
              }
            });
            // Initial check
            if (window.scrollY > 50) nav.classList.add('scrolled');
          })();
        `
      }} />
    </>
  );
}
