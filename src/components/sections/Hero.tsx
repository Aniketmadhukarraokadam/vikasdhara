import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#FFF9F0] via-[#FFFFFF] to-[#F6F0E7]"
      aria-label="Vikasdhara Foundation Introduction"
    >
      {/* Subtle organic background elements - River / Dhara flowing curve */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg
          className="absolute -top-10 -right-20 w-[600px] h-[600px] lg:w-[900px] lg:h-[900px] opacity-[0.07] text-[#2F6B45]"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
        >
          <path d="M0,50 Q25,20 50,50 T100,50" />
          <path d="M0,60 Q25,30 50,60 T100,60" />
          <path d="M0,40 Q25,10 50,40 T100,40" />
        </svg>

        {/* Soft Warm Ambient Diffusions */}
        <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-[#EAF4EC]/80 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-[#FFF9F0] blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Core Brand Headline, Eyebrow & Actions (7 cols on lg) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 animate-calm-fade">
            
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF4EC] border border-[#2F6B45]/20 text-[#1F4D34]">
              <span className="w-2 h-2 rounded-full bg-[#2F6B45] animate-pulse" />
              <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest">
                VIKASDHARA FOUNDATION
              </span>
            </div>

            {/* Large Headline */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#17251D] tracking-tight leading-[1.08] font-sans">
                Building Lives.
              </h1>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#2F6B45] tracking-tight leading-[1.08] font-serif italic">
                Creating Opportunities.
              </h2>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#17251D] tracking-tight leading-[1.08] font-sans">
                Growing Communities.
              </h2>
            </div>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg lg:text-xl text-[#68736C] leading-relaxed max-w-xl font-normal">
              {t(
                "We work to create meaningful opportunities through education, skills, livelihoods, care and community development.",
                "शिक्षण, कौशल्यविकास, उपजीविका, समाजकल्याण आणि समुदाय विकासाच्या माध्यमातून शाश्वत संधींची निर्मिती."
              )}
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/get-involved/support"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#2F6B45] hover:bg-[#1F4D34] text-white font-bold text-sm sm:text-base tracking-wide shadow-warm-card hover:shadow-warm-elevated transition-all duration-300 group"
              >
                <span>{t("Support Our Mission", "आमच्या कार्यात सहभागी व्हा")}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>

              <Link
                to="/what-we-do"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#EAF4EC] text-[#1F4D34] font-bold text-sm sm:text-base tracking-wide border-2 border-[#2F6B45]/25 hover:border-[#2F6B45] shadow-warm-sm transition-all duration-300"
              >
                <span>{t("Explore Our Work", "आमचे उपक्रम पहा")}</span>
              </Link>
            </div>

            {/* Small Trust Line */}
            <div className="pt-4 border-t border-[#17251D]/10 flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-[#1F4D34]">
              <span className="text-[#F39A3F]">✦</span>
              <span>Education</span>
              <span className="text-neutral-300">•</span>
              <span>Skills</span>
              <span className="text-neutral-300">•</span>
              <span>Livelihoods</span>
              <span className="text-neutral-300">•</span>
              <span>Community Care</span>
            </div>
          </div>

          {/* RIGHT: Beautiful Editorial Collage of Real Human Life (6 cols on lg) */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center">
            
            {/* Collage Canvas with Organic Balanced Arrangement */}
            <div className="relative w-full max-w-[540px] aspect-[4/4] sm:aspect-[5/4] lg:aspect-square flex items-center justify-center">
              
              {/* Card 1: Top-Left - Child Studying (Education) */}
              <div 
                className="absolute top-2 left-2 sm:left-4 w-44 sm:w-56 aspect-[4/3] rounded-3xl overflow-hidden shadow-warm-card border-4 border-white transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 z-20 group"
                style={{ transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
              >
                <img
                  src="/images/rural_smart_classroom.jpg"
                  alt="Rural children studying with digital education tools in classroom"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-bold drop-shadow">Education & Learning</span>
                </div>
              </div>

              {/* Card 2: Top-Right - Young Woman Participating in Skills Training */}
              <div 
                className="absolute top-6 right-2 sm:right-4 w-40 sm:w-52 aspect-square rounded-3xl overflow-hidden shadow-warm-card border-4 border-white transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 z-10 group"
                style={{ transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
              >
                <img
                  src="/images/womens_skills.jpg"
                  alt="Women participating in livelihood and skill training program"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-bold drop-shadow">Skills & Dignity</span>
                </div>
              </div>

              {/* Card 3: Bottom-Left - Elderly Person Receiving Care & Community Care */}
              <div 
                className="absolute bottom-4 left-4 sm:left-8 w-44 sm:w-52 aspect-square rounded-3xl overflow-hidden shadow-warm-card border-4 border-white transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 z-20 group"
                style={{ transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
              >
                <img
                  src="/images/humanitarian_care.jpg"
                  alt="Elderly community member receiving compassionate support and care"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-bold drop-shadow">Compassionate Care</span>
                </div>
              </div>

              {/* Card 4: Bottom-Right - Gaushala & Animal Welfare Care */}
              <div 
                className="absolute bottom-6 right-2 sm:right-6 w-40 sm:w-52 aspect-[4/3] rounded-3xl overflow-hidden shadow-warm-card border-4 border-white transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 z-10 group"
                style={{ transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
              >
                <img
                  src="/images/gaushala.jpg"
                  alt="Indigenous cow care and humane gaushala animal sanctuary"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-bold drop-shadow">Animal Welfare</span>
                </div>
              </div>

              {/* Central Circular Element: VIKASDHARA with a subtle flowing line around it */}
              <div className="relative z-30 flex items-center justify-center p-3">
                
                {/* Flowing SVG Line Ring (Dhara metaphor) */}
                <div className="absolute -inset-4 sm:-inset-6 pointer-events-none animate-spin" style={{ animationDuration: "35s" }}>
                  <svg className="w-full h-full text-[#2F6B45]" viewBox="0 0 100 100" fill="none">
                    <circle
                      cx="50"
                      cy="50"
                      r="46"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="8 6 18 4"
                      className="opacity-40"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#F39A3F"
                      strokeWidth="1.2"
                      strokeDasharray="14 10"
                      className="opacity-60"
                    />
                  </svg>
                </div>

                {/* Central Emblem Badge */}
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white/95 backdrop-blur-md border-2 border-[#2F6B45]/30 shadow-warm-elevated flex flex-col items-center justify-center text-center p-2 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#EAF4EC] p-1 flex items-center justify-center mb-1">
                    <img src="/logo-icon.png" alt="Emblem" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-[#1F4D34] uppercase font-sans">
                    VIKASDHARA
                  </span>
                  <span className="text-[8px] sm:text-[9px] font-bold text-[#F39A3F] tracking-wider uppercase mt-0.5">
                    FOUNDATION
                  </span>
                  <span className="text-[7.5px] text-[#68736C] font-serif italic mt-0.5">
                    Flow of Impact
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}