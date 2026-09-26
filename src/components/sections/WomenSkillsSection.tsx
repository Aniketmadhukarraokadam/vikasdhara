import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

export function WomenSkillsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-[#F6F0E7]/60 overflow-hidden" aria-labelledby="skills-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Text & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF4EC] border border-[#2F6B45]/20 text-[#1F4D34]">
              <span className="text-xs font-extrabold uppercase tracking-widest">
                WOMEN & SKILLS DEVELOPMENT
              </span>
            </div>

            <h2
              id="skills-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251D] tracking-tight leading-tight font-sans"
            >
              Skills create{" "}
              <span className="font-serif italic font-normal text-[#2F6B45]">
                independence.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#68736C] leading-relaxed">
              {t(
                "Skill development and women's education can help individuals build confidence, participate in the workforce and create better opportunities for their families.",
                "कौशल्य विकास आणि महिला शिक्षणामुळे व्यक्तींमध्ये आत्मविश्वास निर्माण होतो, कार्यबळात सन्मानपूर्वक सहभाग वाढतो आणि कुटुंबासाठी शाश्वत उत्पन्नाचे मार्ग खुले होतात."
              )}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-2xl border border-[#2F6B45]/15 shadow-warm-sm">
                <span className="text-xl block mb-1">🧵</span>
                <h3 className="font-bold text-sm text-[#17251D]">Vocational Training</h3>
                <p className="text-xs text-[#68736C] mt-1">Tailoring, handicrafts, micro-enterprise & trade skills.</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#2F6B45]/15 shadow-warm-sm">
                <span className="text-xl block mb-1">💻</span>
                <h3 className="font-bold text-sm text-[#17251D]">Digital & IT Skilling</h3>
                <p className="text-xs text-[#68736C] mt-1">Computer literacy, basic accounting & office applications.</p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/what-we-do/womens-education"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#2F6B45] hover:bg-[#1F4D34] text-white font-bold text-sm sm:text-base tracking-wide shadow-warm-card hover:shadow-warm-elevated transition-all duration-300 group"
              >
                <span>{t("Explore Women's Initiatives", "महिला उपक्रम पहा")}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>

              <Link
                to="/what-we-do/skills"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#EAF4EC] text-[#1F4D34] font-bold text-sm sm:text-base tracking-wide border-2 border-[#2F6B45]/20 hover:border-[#2F6B45] transition-all duration-300"
              >
                <span>{t("All Skill Programs", "सर्व प्रशिक्षण प्रकल्प")}</span>
              </Link>
            </div>
          </div>

          {/* RIGHT: Large Rounded Photography with Overlay Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-warm-elevated border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="/images/womens_skills.jpg"
                alt="Women learning vocational skills together"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Overlay Card: LEARN → BUILD → GROW with organic animated connecting line */}
            <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:left-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-warm-elevated border border-[#2F6B45]/20 max-w-sm sm:max-w-md w-full">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#2F6B45]">
                  {t("Growth Journey", "प्रगतीची साखळी")}
                </span>
                <span className="text-[10px] text-[#F39A3F] font-bold uppercase tracking-wider">
                  Self-Reliance
                </span>
              </div>

              {/* 3 Step Connected Row */}
              <div className="relative flex items-center justify-between pt-2">
                {/* SVG Organic Animated Connecting Line */}
                <svg
                  className="absolute top-1/2 left-8 right-8 -translate-y-1/2 w-[calc(100%-4rem)] h-4 text-[#2F6B45]/30 pointer-events-none"
                  viewBox="0 0 200 20"
                  fill="none"
                >
                  <path
                    d="M 10 10 Q 50 0, 100 10 T 190 10"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                    className="animate-pulse"
                  />
                </svg>

                {/* LEARN */}
                <div className="relative z-10 flex flex-col items-center">
                  <span className="w-8 h-8 rounded-full bg-[#EAF4EC] border-2 border-[#2F6B45] text-[#1F4D34] flex items-center justify-center text-xs font-black shadow-sm">
                    1
                  </span>
                  <span className="mt-1 text-xs font-black tracking-wider text-[#17251D]">
                    LEARN
                  </span>
                  <span className="text-[9.5px] text-[#68736C]">Knowledge</span>
                </div>

                {/* BUILD */}
                <div className="relative z-10 flex flex-col items-center">
                  <span className="w-8 h-8 rounded-full bg-[#FFF9F0] border-2 border-[#F39A3F] text-[#F39A3F] flex items-center justify-center text-xs font-black shadow-sm">
                    2
                  </span>
                  <span className="mt-1 text-xs font-black tracking-wider text-[#17251D]">
                    BUILD
                  </span>
                  <span className="text-[9.5px] text-[#68736C]">Confidence</span>
                </div>

                {/* GROW */}
                <div className="relative z-10 flex flex-col items-center">
                  <span className="w-8 h-8 rounded-full bg-[#EAF4EC] border-2 border-[#2F6B45] text-[#2F6B45] flex items-center justify-center text-xs font-black shadow-sm">
                    3
                  </span>
                  <span className="mt-1 text-xs font-black tracking-wider text-[#17251D]">
                    GROW
                  </span>
                  <span className="text-[9.5px] text-[#68736C]">Independence</span>
                </div>
              </div>
            </div>

            {/* Decorative Soft Backdrop Glow */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-[#FFF9F0] -z-10 blur-2xl" />
          </div>

        </div>
      </div>
    </section>
  );
}
