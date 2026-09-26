import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

export function CommunityCareSection() {
  const { t, language } = useLanguage();
  const isMr = language === "mr";

  const careCards = [
    {
      title: "Food Support",
      titleMr: "पोषण व अन्न साहाय्य",
      subtitle: "Essential support for people and communities.",
      subtitleMr: "गरजू घटकांसाठी पौष्टिक अन्न व आपत्कालीन मदत.",
      description: "Ensuring timely nutrition, grains distribution and community kitchen support for underprivileged families and migrant workers.",
      image: "/stories/community-kitchen.jpg",
      icon: "🍲",
      tag: "Nutrition & Relief",
    },
    {
      title: "Senior Care",
      titleMr: "ज्येष्ठ नागरिक सन्मान व सेवा",
      subtitle: "Compassionate support and dignity for older people.",
      subtitleMr: "वृद्धांसाठी आदरपूर्वक जीवन, आरोग्य व निवारा.",
      description: "Free medical health checkup camps, assisted living guidance, medicine distribution, and emotional solidarity for senior citizens.",
      image: "/images/humanitarian_care.jpg",
      icon: "🧓",
      tag: "Dignity & Health",
    },
    {
      title: "Shelter & Community Spaces",
      titleMr: "सुरक्षित निवारा व समाज मंदिरे",
      subtitle: "Supporting safe and supportive environments.",
      subtitleMr: "समुदायाच्या एकत्रिकरणासाठी सुरक्षित व सर्वसमावेशक जागा.",
      description: "Developing safe community spaces, drinking water infrastructure, sanitation facilities, and clean shelter environments in rural areas.",
      image: "/images/rural_environment.jpg",
      icon: "🏡",
      tag: "Infrastructure & Dignity",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFF9F0]" aria-labelledby="care-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#2F6B45]/20 text-[#1F4D34] mb-4 shadow-warm-sm">
            <span className="text-xs font-extrabold uppercase tracking-widest">
              HUMANITARIAN COMPASSION
            </span>
          </div>

          <h2
            id="care-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251D] tracking-tight leading-tight font-sans"
          >
            Care is at the{" "}
            <span className="font-serif italic font-normal text-[#2F6B45]">
              heart of community.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#68736C] leading-relaxed">
            {t(
              "We believe meaningful progress leaves no one behind. Our compassionate care initiatives bring nourishment, dignity and protection to those who need it most.",
              "खऱ्या विकासाचा प्रारंभ तेव्हा होतो जेव्हा समाजातील प्रत्येक घटकाला सन्मान, आधार आणि सुरक्षेची हमी मिळते."
            )}
          </p>
        </div>

        {/* 3 Large Human Photography Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {careCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-[#2F6B45]/15 shadow-warm-card hover:shadow-warm-elevated transition-all duration-400 hover:-translate-y-2 flex flex-col justify-between group"
              style={{ transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
            >
              <div>
                <div className="relative aspect-[16/11] overflow-hidden bg-neutral-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#1F4D34] shadow-sm">
                    {card.tag}
                  </span>

                  <div className="absolute bottom-3 right-4 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-xl shadow-sm">
                    <span>{card.icon}</span>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="text-2xl font-bold text-[#17251D] font-sans group-hover:text-[#2F6B45] transition-colors">
                    {isMr ? card.titleMr : card.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[#F39A3F]">
                    {isMr ? card.subtitleMr : card.subtitle}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-[#68736C] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/what-we-do"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2F6B45] hover:text-[#1F4D34] transition-colors group-hover:underline"
                >
                  <span>{t("Discover community care", "उपक्रमांविषयी जाणून घ्या")}</span>
                  <span className="transform transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
