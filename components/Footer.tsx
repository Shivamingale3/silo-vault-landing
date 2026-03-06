import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border-light pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex justify-between flex-wrap gap-10 mb-16">
          <div className="max-w-[300px]">
            <div className="flex items-center gap-2.5 font-heading font-bold text-[20px] tracking-[-0.5px] mb-4 text-white">
              <Image
                src="/app_images/app_logo.png"
                alt="Silo Vault Logo"
                width={28}
                height={28}
                className="rounded-[6px]"
              />
              <span>Silo Vault</span>
            </div>
            <p className="text-text-muted text-[14px]">
              Open-source, zero-knowledge encrypted vault for Android and iOS.
            </p>
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col">
              <h4 className="font-heading font-semibold text-[15px] mb-5 text-white">
                Project
              </h4>
              <a
                href="https://github.com/Shivamingale3/silo-vault"
                className="block text-text-muted text-[14px] mb-3 transition-colors duration-200 hover:text-primary-main"
              >
                Source Code
              </a>
              <a
                href="https://github.com/Shivamingale3/silo-vault/releases"
                className="block text-text-muted text-[14px] mb-3 transition-colors duration-200 hover:text-primary-main"
              >
                Releases
              </a>
              <a
                href="#"
                className="block text-text-muted text-[14px] mb-3 transition-colors duration-200 hover:text-primary-main"
              >
                Report Issue
              </a>
            </div>
            <div className="flex flex-col">
              <h4 className="font-heading font-semibold text-[15px] mb-5 text-white">
                Legal
              </h4>
              <a
                href="#"
                className="block text-text-muted text-[14px] mb-3 transition-colors duration-200 hover:text-primary-main"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-text-muted text-[14px] mb-3 transition-colors duration-200 hover:text-primary-main"
              >
                MIT License
              </a>
            </div>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-white/5 text-text-muted text-[14px]">
          <p>
            &copy; {new Date().getFullYear()} Shivam Ingale. Built with Flutter.
          </p>
        </div>
      </div>
    </footer>
  );
}
