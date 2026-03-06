import { ShieldCheck, CheckCircle } from "@phosphor-icons/react/dist/ssr";

export default function Security() {
  return (
    <section id="security" className="py-[100px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] flex items-center justify-center">
            <div className="relative w-[120px] h-[120px] flex items-center justify-center">
              <div className="absolute w-full h-full rounded-full border border-primary-main/50 animate-pulse-slow"></div>
              <div
                className="absolute w-full h-full rounded-full border border-primary-main/50 animate-pulse-slow"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute w-full h-full rounded-full border border-primary-main/50 animate-pulse-slow"
                style={{ animationDelay: "2s" }}
              ></div>
              <ShieldCheck
                weight="fill"
                className="text-[100px] text-primary-main relative z-10 drop-shadow-[0_0_20px_rgba(74,140,255,0.4)]"
              />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary-main/10 border border-primary-main/20 rounded-full text-[13px] font-medium text-[#a3c4ff] mb-6">
              Zero-Knowledge Architecture
            </div>
            <h2 className="text-[40px] mb-6 tracking-[-1px] font-heading font-bold text-white">
              AES-256-CBC Encryption
            </h2>
            <p className="text-text-muted text-[18px] mb-10">
              Most password managers ask you to trust their servers. Silo Vault
              doesn't. Everything is encrypted on your device before it ever
              touches the cloud.
            </p>

            <ul className="flex flex-col gap-6">
              <li className="flex gap-4 items-start">
                <CheckCircle
                  weight="fill"
                  className="text-[24px] text-success-main shrink-0 mt-[-2px]"
                />
                <div className="flex flex-col gap-1">
                  <strong className="font-heading text-[16px] text-white font-semibold">
                    No Master Password Transmitted
                  </strong>
                  <span className="text-[15px] text-text-muted">
                    Keys are derived locally via PBKDF2
                  </span>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <CheckCircle
                  weight="fill"
                  className="text-[24px] text-success-main shrink-0 mt-[-2px]"
                />
                <div className="flex flex-col gap-1">
                  <strong className="font-heading text-[16px] text-white font-semibold">
                    Device Keystore
                  </strong>
                  <span className="text-[15px] text-text-muted">
                    Cryptographic keys stored in hardware-backed secure enclaves
                  </span>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <CheckCircle
                  weight="fill"
                  className="text-[24px] text-success-main shrink-0 mt-[-2px]"
                />
                <div className="flex flex-col gap-1">
                  <strong className="font-heading text-[16px] text-white font-semibold">
                    Ciphertext Only
                  </strong>
                  <span className="text-[15px] text-text-muted">
                    Even a database breach yields zero readable user data
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
