import { useLanguage } from "@/context/LanguageContext";

export function ImpactStrip() {
  const { t } = useLanguage();

  const qualitativePillars = [
    {
      category: t("Education", "शिक्षण"),
      statement: t("Creating learning opportunities", "अध्ययन व प्रगतीच्या संधींची निर्मिती"),
      icon: "📚",
      color: "border-[#2F6B45]/20 bg-[#EAF4EC]/60",
    },
    {
      category: t("Skills", "कौशल्य"),
      statement: t("Building employability", "रोजगारक्षमता व स्वावलंबन वृद्धी"),
      icon: "🛠️",
      color: "border-[#F39A3F]/30 bg-[#FFF9F0]",
    },
    {
      category: t("Care", "कल्याण"),
      statement: t("Supporting vulnerable communities", "दुर्बल घटकांना मायेचा व सन्मानाचा आधार"),
      icon: "🤝",
      color: "border-[#7667B8]/20 bg-[#F6F0E7]",
    },
    {
      category: t("Community", "समुदाय"),
      statement: t("Strengthening local development", "स्थानिक सर्वांगीण शाश्वत विकास"),
      icon: "🌱",
      color: "border-[#2F6B45]/20 bg-[#EAF4EC]/60",
    },
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-label="Core Impact Focus">
      <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-warm-card border border-[#2F6B45]/15">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {qualitativePillars.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 sm:p-5 rounded-2xl border ${item.color} flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-warm-sm`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl shrink-0 border border-black/5">
                {item.icon}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2F6B45] block font-sans">
                  {item.category}
                </span>
                <p className="text-sm sm:text-base font-semibold text-[#17251D] mt-0.5 leading-snug">
                  {item.statement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
