import {
  LockKey,
  Notebook,
  Fingerprint,
  CloudArrowUp,
} from "@phosphor-icons/react/dist/ssr";

export default function Features() {
  return (
    <section id="features" className="py-[100px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <h2 className="text-[40px] mb-4 tracking-[-1px] font-heading font-bold text-white">
            Everything you need, <br />
            nothing you don't.
          </h2>
          <p className="text-text-muted text-[18px]">
            Designed for absolute security without compromising on user
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="glass-panel p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-[#1c2438]/80 hover:border-border-highlight">
            <div className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center text-[28px] text-white mb-6 bg-gradient-to-br from-[#4a8cff] to-[#1e50ff]">
              <LockKey weight="fill" />
            </div>
            <h3 className="text-[20px] mb-3 font-heading font-semibold text-white">
              Password Manager
            </h3>
            <p className="text-text-muted text-[15px] leading-[1.6]">
              Store unlimited passwords securely. Generate strong, random
              passwords with one tap and copy them instantly.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="glass-panel p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-[#1c2438]/80 hover:border-border-highlight">
            <div className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center text-[28px] text-white mb-6 bg-gradient-to-br from-[#9d4aff] to-[#501eff]">
              <Notebook weight="fill" />
            </div>
            <h3 className="text-[20px] mb-3 font-heading font-semibold text-white">
              Secure Notes
            </h3>
            <p className="text-text-muted text-[15px] leading-[1.6]">
              Categorize and tag your private rich-text notes. Search instantly
              across your entire encrypted vault.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="glass-panel p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-[#1c2438]/80 hover:border-border-highlight">
            <div className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center text-[28px] text-white mb-6 bg-gradient-to-br from-[#ff4a82] to-[#ff1e4a]">
              <Fingerprint weight="fill" />
            </div>
            <h3 className="text-[20px] mb-3 font-heading font-semibold text-white">
              Biometric App Lock
            </h3>
            <p className="text-text-muted text-[15px] leading-[1.6]">
              Secure the app with a 4-digit PIN or device biometrics. Features
              brute-force lockout and auto-lock timers.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="glass-panel p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-[#1c2438]/80 hover:border-border-highlight">
            <div className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center text-[28px] text-white mb-6 bg-gradient-to-br from-[#00e676] to-[#00b259]">
              <CloudArrowUp weight="fill" />
            </div>
            <h3 className="text-[20px] mb-3 font-heading font-semibold text-white">
              End-to-End Sync
            </h3>
            <p className="text-text-muted text-[15px] leading-[1.6]">
              Optional cloud sync via Firebase. Data is encrypted locally before
              upload, using a unique sync password.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
