import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

export function AnimalWelfareSection() {
  const { t } = useLanguage();

  return (
    <section
      className="py-20 lg:py-28 bg-[#EAF4EC] relative overflow-hidden"
      aria-labelledby="animal-welfare-heading"
    >
      {/* Subtle Floating Leaves (Extremely slow motion) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Leaf 1 */}
        <div
          className="absolute top-12 left-10 text-[#2F6B45]/20 animate-leaf-float"
          style={{ animationDuration: "14s" }}
        >
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25V8.25C12,7.25 16,7 17,8Z" />
          </svg>
        </div>

        {/* Leaf 2 */}
        <div
          className="absolute bottom-16 right-16 text-[#2F6B45]/20 animate-leaf-float"
          style={{ animationDuration: "18s", animationDelay: "3s" }}
        >
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25V8.25C12,7.25 16,7 17,8Z" />
          </svg>
        </div>

        {/* Leaf 3 */}
        <div
          className="absolute top-1/2 right-1/4 text-[#2F6B45]/15 animate-leaf-float"
          style={{ animationDuration: "16s", animationDelay: "6s" }}
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25V8.25C12,7.25 16,7 17,8Z" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Large Image - Indian cow / gaushala / volunteers caring */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-warm-elevated border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="/images/gaushala.jpg"
                alt="Volunteers tending gently to indigenous cattle in humane gaushala sanctuary"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold px-4 py-2.5 rounded-2xl bg-black/40 backdrop-blur-md">
                <span>Sanctuary • Dharmabad & Nanded</span>
                <span className="text-[#F7B267] font-bold">100% Non-Profit Trust</span>
              </div>
            </div>

            {/* Inset Second Image Accent */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-48 aspect-video rounded-2xl overflow-hidden border-4 border-white shadow-warm-card z-20">
              <img
                src="/images/animal_welfare_vet.jpg"
                alt="Veterinary medical checkup camp for cattle"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT: Content with Animated Cow Line Art */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow & Animated Line-Art Cow Icon */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white border border-[#2F6B45]/30 flex items-center justify-center p-2 shadow-warm-sm">
                {/* Clean Animated Line-Art Cow Icon */}
                <svg
                  className="w-full h-full text-[#2F6B45] animate-pulse"
                  style={{ animationDuration: "3s" }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 8l2-4h12l2 4" />
                  <rect x="5" y="8" width="14" height="12" rx="4" />
                  <path d="M8 14h.01M16 14h.01" />
                  <path d="M10 17c.5.5 3.5.5 4 0" />
                  <path d="M2 10s1.5 1 2 0M22 10s-1.5 1-2 0" />
                </svg>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#2F6B45]/20 text-[#1F4D34]">
                <span className="text-xs font-extrabold uppercase tracking-widest">
                  ANIMAL WELFARE & GAUSHALA
                </span>
              </div>
            </div>

            <h2
              id="animal-welfare-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251D] tracking-tight leading-tight font-sans"
            >
              Compassion has{" "}
              <span className="font-serif italic font-normal text-[#2F6B45]">
                no boundaries.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#68736C] leading-relaxed">
              {t(
                "Our vision includes care and protection for animals through initiatives such as animal shelters and gaushala-related activities.",
                "आमच्या सामाजिक दृष्टिकोनात मुक्या प्राण्यांची काळजी, संरक्षण आणि देशी गोवंशाचे संवर्धन यांचा समावेश असून गोशाळा व पशुवैद्यकीय शिबिरांचे नियमित आयोजन केले जाते."
              )}
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white/80 border border-[#2F6B45]/15 flex items-center gap-3">
                <span className="text-xl">🌿</span>
                <div>
                  <h3 className="font-bold text-sm text-[#17251D]">Indigenous Gau Shala Sanctuary</h3>
                  <p className="text-xs text-[#68736C]">Nutritious organic fodder, spacious sheds, and humane shelter for retired and rescued cattle.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/80 border border-[#2F6B45]/15 flex items-center gap-3">
                <span className="text-xl">🩺</span>
                <div>
                  <h3 className="font-bold text-sm text-[#17251D]">Free Rural Veterinary Camps</h3>
                  <p className="text-xs text-[#68736C]">Preventative vaccinations, deworming, and emergency treatment for village cattle and community animals.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/what-we-do/gau-shala"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#2F6B45] hover:bg-[#1F4D34] text-white font-bold text-sm sm:text-base tracking-wide shadow-warm-card hover:shadow-warm-elevated transition-all duration-300 group"
              >
                <span>{t("Learn About Gaushala & Animal Care", "गोशाळा व पशुकल्याण उपक्रम पहा")}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
