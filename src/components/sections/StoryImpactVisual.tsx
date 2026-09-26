import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface Stage {
  id: string;
  name: string;
  nameMr: string;
  tagline: string;
  description: string;
  image: string;
  metric: string;
}

export function StoryImpactVisual() {
  const { t, language } = useLanguage();
  const isMr = language === "mr";
  const [activeStage, setActiveStage] = useState(0);

  const stages: Stage[] = [
    {
      id: "need",
      name: "Need",
      nameMr: "गरज",
      tagline: "Listening to Grassroots Vulnerabilities",
      description: "Direct village field visits identify deep-rooted gaps in education, nutrition, livelihoods and elder care.",
      image: "/images/humanitarian_care.jpg",
      metric: "Direct field immersion",
    },
    {
      id: "awareness",
      name: "Awareness",
      nameMr: "जागृती",
      tagline: "Inspiring Hope & Participation",
      description: "Community counseling and family workshops break hesitations and introduce transformative opportunities.",
      image: "/images/rural_environment.jpg",
      metric: "Community trust building",
    },
    {
      id: "education",
      name: "Education",
      nameMr: "शिक्षण",
      tagline: "Foundations for Young Minds",
      description: "Establishing smart classrooms, distributing learning materials and supporting regular school attendance.",
      image: "/images/rural_smart_classroom.jpg",
      metric: "Digital literacy access",
    },
    {
      id: "skills",
      name: "Skills",
      nameMr: "कौशल्य",
      tagline: "Building Practical Employability",
      description: "Hands-on vocational courses in sewing, computers, electrical and agro-allied skills empower women and youth.",
      image: "/images/womens_skills.jpg",
      metric: "Practical trade certification",
    },
    {
      id: "opportunity",
      name: "Opportunity",
      nameMr: "संधी",
      tagline: "Dignified Livelihoods & Enterprise",
      description: "Connecting skilled candidates with industry jobs, self-employment capital and micro-enterprise cooperatives.",
      image: "/images/women_shg_enterprise.jpg",
      metric: "Sustainable income generation",
    },
    {
      id: "growth",
      name: "Community Growth",
      nameMr: "सामूहिक प्रगती",
      tagline: "Self-Sustaining, Resilient Villages",
      description: "Empowered individuals reinvest in their local ecology, health, gaushala shelters and village progress.",
      image: "/images/village_transformation.jpg",
      metric: "Holistic village self-reliance",
    },
  ];

  const current = stages[activeStage];

  return (
    <section className="py-20 lg:py-28 bg-[#FFF9F0]" aria-labelledby="story-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#2F6B45]/20 text-[#1F4D34] mb-4 shadow-warm-sm">
            <span className="text-xs font-extrabold uppercase tracking-widest">
              THE DEVELOPMENT LIFECYCLE
            </span>
          </div>

          <h2
            id="story-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251D] tracking-tight leading-tight font-sans"
          >
            From Support to{" "}
            <span className="font-serif italic font-normal text-[#2F6B45]">
              Opportunity.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#68736C] leading-relaxed">
            {t(
              "How we guide individuals and families step-by-step from vulnerable beginnings to lasting independence and community leadership.",
              "गरज आणि असहाय्यतेकडून शिक्षण, कौशल्य आणि स्वावलंबनापर्यंतचा विकासप्रवास."
            )}
          </p>
        </div>

        {/* Interactive Visual Journey Stepper */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#2F6B45]/15 shadow-warm-elevated">
          
          {/* Timeline Nodes Bar */}
          <div className="relative mb-10 pb-4 overflow-x-auto scrollbar-none">
            {/* Background connecting bar */}
            <div className="absolute top-5 left-8 right-8 h-1 bg-neutral-200 hidden md:block" />
            
            {/* Active Progress Line */}
            <div
              className="absolute top-5 left-8 h-1 bg-[#2F6B45] transition-all duration-500 hidden md:block"
              style={{ width: `${(activeStage / (stages.length - 1)) * 88}%` }}
            />

            <div className="flex items-center justify-between min-w-[620px] md:min-w-0 relative z-10 px-2">
              {stages.map((stg, idx) => {
                const isPassed = idx <= activeStage;
                const isCurrent = idx === activeStage;

                return (
                  <button
                    key={stg.id}
                    onClick={() => setActiveStage(idx)}
                    className="flex flex-col items-center group cursor-pointer focus:outline-none"
                    aria-label={`Step ${idx + 1}: ${stg.name}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                        isCurrent
                          ? "bg-[#2F6B45] text-white scale-125 shadow-warm-card ring-4 ring-[#EAF4EC]"
                          : isPassed
                          ? "bg-[#1F4D34] text-white"
                          : "bg-neutral-100 text-neutral-500 border border-neutral-300 group-hover:bg-[#EAF4EC]"
                      }`}
                    >
                      {idx + 1}
                    </div>

                    <span
                      className={`mt-2 text-xs font-bold tracking-tight transition-colors ${
                        isCurrent ? "text-[#2F6B45]" : "text-[#68736C] group-hover:text-[#17251D]"
                      }`}
                    >
                      {isMr ? stg.nameMr : stg.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Spotlight Display */}
          <div className="grid lg:grid-cols-12 gap-8 items-center pt-2">
            
            {/* Image Spotlight */}
            <div className="lg:col-span-7 relative">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-warm-card border-2 border-white relative bg-neutral-100">
                <img
                  key={current.image}
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover transition-opacity duration-500 animate-calm-fade"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md">
                    Phase {activeStage + 1} of 6
                  </span>
                  <span className="text-[#F7B267] font-bold">
                    {current.metric}
                  </span>
                </div>
              </div>
            </div>

            {/* Description Spotlight */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4EC] text-[#1F4D34] text-xs font-bold">
                <span>✦</span>
                <span>Stage {activeStage + 1}: {isMr ? current.nameMr : current.name}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#17251D] font-sans">
                {current.tagline}
              </h3>

              <p className="text-sm sm:text-base text-[#68736C] leading-relaxed">
                {current.description}
              </p>

              {/* Navigation Controls */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  onClick={() => setActiveStage((prev) => Math.max(0, prev - 1))}
                  disabled={activeStage === 0}
                  className="px-4 py-2 rounded-full border border-neutral-300 text-xs font-bold text-[#17251D] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-100 transition-colors"
                >
                  ← Previous
                </button>
                <button
                  onClick={() => setActiveStage((prev) => Math.min(stages.length - 1, prev + 1))}
                  disabled={activeStage === stages.length - 1}
                  className="px-5 py-2 rounded-full bg-[#2F6B45] text-white text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#1F4D34] transition-colors shadow-sm"
                >
                  Next Stage →
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
