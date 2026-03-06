"use client";

import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({
  downloadUrl,
  version,
}: {
  downloadUrl: string;
  version: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0e17]/85 backdrop-blur-[20px] py-4 border-b border-white/10"
          : "py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-heading font-bold text-[20px] tracking-[-0.5px]"
        >
          <Image
            src="/app_images/app_logo.png"
            alt="Silo Vault Logo"
            width={28}
            height={28}
            className="rounded-[6px]"
          />
          <span>Silo Vault</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-text-muted font-medium text-[15px] hover:text-white transition-colors"
          >
            Features
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
      </div>

      {/* Mobile Menu Content */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0e17]/95 backdrop-blur-md border-b border-white/10 p-5 flex flex-col gap-4">
          <Link
            href="#features"
            className="text-text-muted font-medium text-[16px] py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
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
    </nav>
  );
}
