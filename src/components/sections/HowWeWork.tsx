import { useLanguage } from "@/context/LanguageContext";

export function HowWeWork() {
  const { t, language } = useLanguage();
  const isMr = language === "mr";

  const steps = [
    {
      number: "01",
      title: "Understand",
      titleMr: "गरज समजून घेणे",
      subtitle: "Listen to community needs.",
      subtitleMr: "स्थानिक समस्या व गरजांचा सखोल अभ्यास.",
      icon: "👂",
    },
    {
      number: "02",
      title: "Educate",
      titleMr: "जागृती व शिक्षण",
      subtitle: "Create awareness and learning opportunities.",
      subtitleMr: "अध्ययन व बौद्धिक प्रगतीस पोषक वातावरण.",
      icon: "💡",
    },
    {
      number: "03",
      title: "Empower",
      titleMr: "सक्षमीकरण",
      subtitle: "Build skills and opportunities.",
      subtitleMr: "कौशल्याधारित प्रशिक्षण व स्वावलंबन.",
      icon: "🌱",
    },
    {
      number: "04",
      title: "Support",
      titleMr: "थेट साहाय्य",
      subtitle: "Provide practical assistance and care.",
      subtitleMr: "साधने, मार्गदर्शन आणि प्रत्यक्ष मदत.",
      icon: "🤝",
    },
    {
      number: "05",
      title: "Grow",
      titleMr: "शाश्वत विकास",
      subtitle: "Help communities move towards sustainable development.",
      subtitleMr: "स्वावलंबी व सशक्त ग्राम समुदाय.",
      icon: "🌳",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden" aria-labelledby="how-we-work-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF4EC] border border-[#2F6B45]/20 text-[#1F4D34] mb-4">
            <span className="text-xs font-extrabold uppercase tracking-widest">
              OUR METHODOLOGY
            </span>
          </div>

          <h2
            id="how-we-work-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251D] tracking-tight leading-tight font-sans"
          >
            How We{" "}
            <span className="font-serif italic font-normal text-[#2F6B45]">
              Work.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#68736C] leading-relaxed">
            {t(
              "A structured, human-centered development model that transforms genuine grassroots needs into lasting, self-sustaining opportunities.",
              "स्थानिक सहभाग आणि पारदर्शकतेवर आधारित आमची कार्यपद्धती गरजांचे रूपांतर कायमस्वरूपी संधींमध्ये करते."
            )}
          </p>
        </div>

        {/* Process Flow: Desktop Horizontal with Animated Flowing Green Line */}
        <div className="relative">
          
          {/* Flowing Green Line for Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[8%] right-[8%] h-1 z-0">
            <svg className="w-full h-8 -top-3.5 absolute overflow-visible" preserveAspectRatio="none">
              <path
                d="M 0,16 Q 150,0 300,16 T 600,16 T 900,16 T 1200,16"
                fill="none"
                stroke="#2F6B45"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className="opacity-40 animate-pulse"
              />
            </svg>
          </div>

          {/* 5 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#FFF9F0] rounded-3xl p-6 border border-[#2F6B45]/15 shadow-warm-sm hover:shadow-warm-card transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center group"
              >
                {/* Step Circle with Number Badge */}
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#2F6B45] flex items-center justify-center text-2xl shadow-warm-sm group-hover:scale-110 group-hover:border-[#F39A3F] transition-all duration-300">
                    <span>{step.icon}</span>
                  </div>
                  <span className="absolute -top-1 -right-1 px-2 py-0.5 rounded-full bg-[#2F6B45] text-white text-[10px] font-black tracking-widest shadow-sm">
                    {step.number}
                  </span>
                </div>

                {/* Step Content */}
                <h3 className="text-xl font-bold text-[#17251D] font-sans group-hover:text-[#2F6B45] transition-colors">
                  {isMr ? step.titleMr : step.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#68736C] leading-relaxed">
                  {isMr ? step.subtitleMr : step.subtitle}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
