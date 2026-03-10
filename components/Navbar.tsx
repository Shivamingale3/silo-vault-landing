import Link from "next/link";
import Image from "next/image";
import NavbarClient from "./NavbarClient";

export default function Navbar({
  downloadUrl,
  version,
}: {
  downloadUrl: string;
  version: string;
}) {
  return (
    <nav className="fixed top-0 w-full z-50 main-nav">
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

        <NavbarClient downloadUrl={downloadUrl} version={version} />
      </div>
    </nav>
  );
}
