import Image from "next/image";
import {
  GooglePlayLogo,
  GithubLogo,
  CheckCircle,
  Fingerprint,
  CloudCheck,
} from "@phosphor-icons/react/dist/ssr";

export default function Hero({
  downloadUrl,
  version,
}: {
  downloadUrl: string;
  version: string;
}) {
  return (
    <header className="min-h-[100vh] flex items-center pt-[100px] pb-[60px]">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">
        <div className="hero-text">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#4a8cff]/10 border border-[#4a8cff]/20 rounded-full text-[13px] font-medium text-[#a3c4ff] mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-1.5 h-1.5 bg-primary-main rounded-full shadow-[0_0_8px_var(--color-primary-main)]"></span>{" "}
            Military-Grade AES-256 Encryption
          </div>
          <h1
            className="text-[40px] md:text-[56px] font-extrabold tracking-[-1.5px] mb-6 animate-fade-in-up leading-[1.1]"
            style={{ animationDelay: "0.2s" }}
          >
            Your secrets, <span className="text-gradient">encrypted.</span>
            <br />
            Your data, <span className="text-gradient">yours.</span>
          </h1>
          <p
            className="text-[18px] text-text-muted mb-10 max-w-[90%] animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            A zero-knowledge vault for passwords and private notes. Decrypted
            only on your device, never on our servers.
          </p>
          <div
            className="flex flex-wrap gap-4 mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
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
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-[15px] transition-all duration-300 bg-secondary-main text-white border border-border-light hover:bg-[#2d3750]/80 hover:border-border-highlight hover:-translate-y-0.5"
            >
              <GithubLogo weight="fill" className="text-xl" /> View Source
            </a>
          </div>
          <div
            className="flex gap-6 text-[14px] text-text-muted animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <p className="flex items-center gap-1.5">
              <CheckCircle className="text-success-main text-[16px]" /> No
              master password transmitted
            </p>
            <p className="flex items-center gap-1.5">
              <CheckCircle className="text-success-main text-[16px]" /> Works
              100% offline
            </p>
          </div>
        </div>

        <div
          className="relative flex justify-center animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="w-[320px] h-[650px] rounded-[24px] p-3 bg-gradient-to-br from-white/10 to-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] relative z-10 [transform:perspective(1000px)_rotateY(-15deg)_rotateX(5deg)] transition-transform duration-500 hover:[transform:perspective(1000px)_rotateY(-5deg)_rotateX(2deg)]">
            <div className="bg-bg-dark h-full w-full rounded-2xl overflow-hidden border border-white/5 relative">
              <Image
                src="/app_images/home_dark.jpeg"
                alt="Silo Vault UI"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="absolute top-[15%] -left-[60px] p-4 flex items-center gap-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-20 animate-float glass-panel">
            <Fingerprint
              weight="fill"
              className="text-success-main text-[28px]"
            />
            <div className="flex flex-col">
              <strong className="text-[14px] font-semibold font-heading text-white">
                Biometric Locked
              </strong>
              <span className="text-[11px] text-text-muted">
                Authentication required
              </span>
            </div>
          </div>

          <div className="absolute bottom-[25%] -right-[40px] p-4 flex items-center gap-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-20 animate-float-slow glass-panel">
            <CloudCheck
              weight="fill"
              className="text-primary-main text-[28px]"
            />
            <div className="flex flex-col">
              <strong className="text-[14px] font-semibold font-heading text-white">
                E2E Encrypted
              </strong>
              <span className="text-[11px] text-text-muted">
                Synced to cloud
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
