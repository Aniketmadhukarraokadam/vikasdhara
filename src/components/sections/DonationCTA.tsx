import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

export function DonationCTA() {
  const { t } = useLanguage();

  return (
    <section
      className="relative py-24 lg:py-32 bg-[#1F4D34] text-white overflow-hidden"
      aria-labelledby="donation-cta-heading"
    >
      {/* Subtle Organic Pattern & Flowing Rivers SVG Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none" stroke="#FFFFFF" strokeWidth="1.2">
          <path d="M-100,100 C200,300 400,0 800,200 C1000,300 1100,100 1200,400" />
          <path d="M-100,200 C300,400 500,100 900,300 C1100,400 1200,200 1300,500" />
          <path d="M-100,300 C400,500 600,200 1000,400 C1200,500 1300,300 1400,600" />
        </svg>
      </div>

      {/* Subtle Floating Light Points (No aggressive flashing, calm gentle sway) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/4 left-1/6 w-2 h-2 rounded-full bg-[#F7B267] blur-[1px] animate-particle-sway"
          style={{ animationDuration: "7s" }}
        />
        <div
          className="absolute top-1/3 right-1/5 w-2.5 h-2.5 rounded-full bg-[#FFF9F0] blur-[1px] animate-particle-sway"
          style={{ animationDuration: "9s", animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-[#F39A3F] blur-[1px] animate-particle-sway"
          style={{ animationDuration: "8s", animationDelay: "4s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-[#EAF4EC] blur-[1.5px] animate-particle-sway"
          style={{ animationDuration: "10s", animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#EAF4EC] mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#F39A3F] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest">
            BE THE LIGHT IN SOMEONE'S JOURNEY
          </span>
        </div>

        {/* Headline */}
        <h2
          id="donation-cta-heading"
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] font-sans"
        >
          Together, we can create a{" "}
          <span className="font-serif italic font-normal text-[#F7B267]">
            stronger tomorrow.
          </span>
        </h2>

        {/* Text */}
        <p className="mt-6 text-base sm:text-xl text-[#EAF4EC]/90 max-w-2xl mx-auto leading-relaxed">
          {t(
            "Every contribution of time, knowledge, resources or support can help create opportunities for people and communities.",
            "वेळ, ज्ञान, साधनसामग्री अथवा आर्थिक साहाय्याच्या रूपातील तुमचे प्रत्येक योगदान लोकांच्या जीवनात नवी आशा फुलवू शकते."
          )}
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link
            to="/get-involved/support"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#F39A3F] to-[#F7B267] hover:from-[#e28b30] hover:to-[#f3a44f] text-[#17251D] font-extrabold text-base sm:text-lg tracking-wide shadow-warm-elevated hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>❤️</span>
            <span>{t("Donate Now", "आताच दान करा")}</span>
            <span>→</span>
          </Link>

          <Link
            to="/get-involved/volunteer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent hover:bg-white/10 text-white font-bold text-base sm:text-lg tracking-wide border-2 border-white/40 hover:border-white transition-all duration-300"
          >
            <span>{t("Get Involved", "सहभागी व्हा")}</span>
          </Link>
        </div>

        {/* Trust Note */}
        <div className="mt-8 text-xs text-[#EAF4EC]/70">
          <span>Registered Public Charitable Trust • Nanded & Pune, Maharashtra</span>
        </div>

      </div>
    </section>
  );
}
