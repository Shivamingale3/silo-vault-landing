"use client";
import { GooglePlayLogo } from "@phosphor-icons/react";

export default function CtaSection({
  downloadUrl,
  version,
}: {
  downloadUrl: string;
  version: string;
}) {
  return (
    <section className="py-[100px]">
      <div className="max-w-[1200px] mx-auto px-6 relative">
        <div className="text-center p-8 md:p-16 bg-linear-to-b from-[#141a28]/60 to-bg-dark/80 glass-panel">
          <h2 className="text-[32px] md:text-[48px] tracking-[-1.5px] mb-4 font-heading font-bold text-white">
            Ready to secure your digital life?
          </h2>
          <p className="text-text-muted text-[18px] md:text-[20px] mb-10">
            Join the open-source privacy revolution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={downloadUrl}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-[15px] transition-all duration-300 bg-primary-main text-white border border-transparent shadow-[0_4px_20px_var(--color-primary-glow)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(74,140,255,0.6)] hover:bg-[#3a75e0]"
            >
              <GooglePlayLogo weight="fill" className="text-xl" /> Download{" "}
              {version}
            </a>
            <a
              href="https://github.com/Shivamingale3/silo-vault"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-[16px] transition-all duration-300 bg-transparent text-white border border-border-light hover:bg-white/5 hover:border-white hover:-translate-y-0.5"
            >
              Star on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
