import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

export function EducationFeature() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] overflow-hidden" aria-labelledby="education-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Large Image of Students / Children Learning */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-warm-elevated border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="/images/rural_smart_classroom.jpg"
                alt="Rural students participating eagerly in learning activity"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Subtle Floating Card: Learning • Opportunity • Future */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-warm-elevated border border-[#2F6B45]/20 animate-float-gentle max-w-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-[#F39A3F] uppercase tracking-wider mb-2">
                <span>✦</span>
                <span>{t("Core Pathway", "मूलभूत दिशा")}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#17251D]">
                <span className="px-2.5 py-1 rounded-full bg-[#EAF4EC] text-[#1F4D34] transition-all hover:bg-[#2F6B45] hover:text-white">
                  Learning
                </span>
                <span className="text-[#68736C]">→</span>
                <span className="px-2.5 py-1 rounded-full bg-[#FFF9F0] text-[#F39A3F] transition-all hover:bg-[#F39A3F] hover:text-white">
                  Opportunity
                </span>
                <span className="text-[#68736C]">→</span>
                <span className="px-2.5 py-1 rounded-full bg-[#F6F0E7] text-[#7667B8] transition-all hover:bg-[#7667B8] hover:text-white">
                  Future
                </span>
              </div>
            </div>

            {/* Decorative Soft Backdrop Glow */}
            <div className="absolute -top-6 -left-6 w-48 h-48 rounded-full bg-[#EAF4EC] -z-10 blur-2xl" />
          </div>

          {/* RIGHT: Editorial Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF4EC] border border-[#2F6B45]/20 text-[#1F4D34]">
              <span className="text-xs font-extrabold uppercase tracking-widest">
                EDUCATION
              </span>
            </div>

            <h2
              id="education-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251D] tracking-tight leading-tight font-sans"
            >
              Every opportunity to learn{" "}
              <span className="font-serif italic font-normal text-[#2F6B45]">
                can change a life.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#68736C] leading-relaxed">
              {t(
                "Create access to learning, awareness and educational opportunities that help individuals build confidence and a stronger future.",
                "शिक्षणाची समान संधी, बौद्धिक जागृती आणि पूरक शैक्षणिक उपक्रमांमुळे मुलांमध्ये आत्मविश्वास निर्माण होतो आणि उज्वल भविष्याची पायाभरणी होते."
              )}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#EAF4EC] text-[#2F6B45] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span className="text-sm sm:text-base text-[#17251D] font-medium">Digital Smart Classrooms and science learning tools in rural schools.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#EAF4EC] text-[#2F6B45] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span className="text-sm sm:text-base text-[#17251D] font-medium">Student scholarships, learning kits, and foundational literacy support.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#EAF4EC] text-[#2F6B45] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span className="text-sm sm:text-base text-[#17251D] font-medium">Career counseling and mentorship for underprivileged students.</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/what-we-do/education"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#2F6B45] hover:bg-[#1F4D34] text-white font-bold text-sm sm:text-base tracking-wide shadow-warm-card hover:shadow-warm-elevated transition-all duration-300 group"
              >
                <span>{t("Explore Education Initiatives", "शैक्षणिक उपक्रम पहा")}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
