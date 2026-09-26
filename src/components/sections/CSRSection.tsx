import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

export function CSRSection() {
  const { t } = useLanguage();

  const compliancePillars = [
    {
      title: "Schedule VII Compliant",
      desc: "Eligible projects across education, vocational training, women empowerment, rural development & animal welfare.",
      icon: "📜",
    },
    {
      title: "End-to-End Reporting",
      desc: "Real-time field monitoring, transparent audits, milestone verification, and comprehensive utilization certificates.",
      icon: "📊",
    },
    {
      title: "Ground Field Presence",
      desc: "Dedicated project coordinators in Nanded and Pune ensuring disciplined on-ground program execution.",
      icon: "📍",
    },
    {
      title: "Direct Beneficiary Link",
      desc: "Measurable, human-centered outcomes directly reaching rural families and underrepresented youth.",
      icon: "🎯",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-y border-[#2F6B45]/10" aria-labelledby="csr-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#EAF4EC]/80 via-white to-[#FFF9F0] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#2F6B45]/20 shadow-warm-elevated relative overflow-hidden">
          
          {/* Subtle Institutional Watermark */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-bl-full bg-[#2F6B45]/5 -z-0 pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#2F6B45]/20 text-[#1F4D34] shadow-warm-sm">
                <span className="w-2 h-2 rounded-full bg-[#2F6B45]" />
                <span className="text-xs font-extrabold uppercase tracking-widest">
                  CORPORATE SOCIAL RESPONSIBILITY
                </span>
              </div>

              <h2
                id="csr-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251D] tracking-tight leading-tight font-sans"
              >
                Turn CSR commitments into{" "}
                <span className="font-serif italic font-normal text-[#2F6B45]">
                  community impact.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#68736C] leading-relaxed">
                {t(
                  "Partner with Vikasdhara Foundation on initiatives aligned with education, skills, livelihoods, community development and social welfare.",
                  "शिक्षण, कौशल्यविकास, उपजीविका, ग्रामविकास आणि समाजकल्याण क्षेत्रातील अर्थपूर्ण व पारदर्शक सीएसआर प्रकल्पांसाठी विकासधारा फाउंडेशनशी जोडा."
                )}
              </p>

              <div className="pt-2">
                <Link
                  to="/get-involved/partner"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1F4D34] hover:bg-[#173a27] text-white font-bold text-sm sm:text-base tracking-wide shadow-warm-card hover:shadow-warm-elevated transition-all duration-300 group"
                >
                  <span>{t("Discuss a CSR Partnership", "सीएसआर भागीदारीवर चर्चा करा")}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>

            {/* Right Pillars Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {compliancePillars.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[#2F6B45]/15 shadow-warm-sm hover:border-[#2F6B45]/30 transition-all duration-300"
                >
                  <span className="text-2xl block mb-2">{item.icon}</span>
                  <h3 className="font-bold text-sm text-[#17251D] mb-1 font-sans">{item.title}</h3>
                  <p className="text-xs text-[#68736C] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
