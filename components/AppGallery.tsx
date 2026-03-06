import Image from "next/image";

export default function AppGallery() {
  const screenshots = [
    { src: "/app_images/home_dark.jpeg", alt: "Home Screen" },
    { src: "/app_images/vault_dark.jpeg", alt: "Secure Vault" },
    { src: "/app_images/pass_generator_Dark.jpeg", alt: "Password Generator" },
    { src: "/app_images/settings_Dark.jpeg", alt: "Settings Panel" },
  ];

  return (
    <section id="screenshots" className="py-[100px] bg-[#05080f]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <h2 className="text-[40px] mb-4 tracking-[-1px] font-heading font-bold text-white">
            Beautifully Private.
          </h2>
          <p className="text-text-muted text-[18px]">
            A clean, intuitive interface designed to keep your focus on what
            matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {screenshots.map((shot, index) => (
            <div key={index} className="relative group perspective-1000">
              <div className="w-[260px] h-[550px] mx-auto rounded-[24px] p-2 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-2xl transition-all duration-500 ease-out group-hover:-translate-y-4 group-hover:scale-105 group-hover:shadow-[0_20px_40px_rgba(74,140,255,0.2)]">
                <div className="bg-bg-dark h-[100%] w-[100%] rounded-2xl overflow-hidden relative">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
