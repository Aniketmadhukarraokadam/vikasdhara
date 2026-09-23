import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionEyebrow } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { programmes } from "@/content";
import { useLanguage } from "@/context/LanguageContext";

export function CorporatePartnerships() {
  const { t } = useLanguage();
  const corporate = programmes.programmes.find(p => p.id === "corporate-projects");

  if (!corporate) return null;

  const pathway = [
    { step: "01", name: "DISCOVER", nameMr: "गरज शोध", desc: "Community needs assessment & corporate CSR mandate alignment." },
    { step: "02", name: "DESIGN", nameMr: "प्रकल्प रचना", desc: "Customized syllabus, operational milestones & KPI framework." },
    { step: "03", name: "IMPLEMENT", nameMr: "अंमलबजावणी", desc: "Grassroots field rollout with certified trainers & facilities." },
    { step: "04", name: "MEASURE", nameMr: "मोजमाप", desc: "Real-time attendance logs, skill assessments & verified data." },
    { step: "05", name: "REPORT", nameMr: "अहवाल", desc: "Comprehensive statutory impact documentation & audit trails." }
  ];

  return (
    <Section variant="xl" background="none" className="relative overflow-hidden">
      <Container size="full">
        <SectionHeader>
          <SectionEyebrow>{t("CSR & Institutional Collaboration", "सीएसआर व संस्थात्मक भागीदारी")}</SectionEyebrow>
          <SectionTitle>
            {t("Corporate Projects That Create Community Opportunity", "कॉर्पोरेट प्रकल्प • सामाजिक परिवर्तनाची संधी")}
          </SectionTitle>
          <SectionSubtitle className="max-w-3xl mx-auto">
            {t(
              "VIKASDHARA FOUNDATION collaborates with corporations, industries, institutions, and government bodies on lawful skill development, employment generation, and social impact initiatives.",
              "संस्था उद्योग आणि कंपन्यांसोबत कौशल्यविकास, रोजगार निर्मिती आणि शाश्वत ग्रामीण विकासासाठी प्रकल्प भागीदारी करते."
            )}
          </SectionSubtitle>
        </SectionHeader>

        {/* 5-Stage 3D Interactive Pathway Grid */}
        <div className="mb-14">
          <div className="text-center mb-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary-700 bg-primary-50 px-4 py-1.5 rounded-full border border-primary-200">
              {t("The 5-Stage Project Pathway", "५ टप्प्यांचे प्रकल्प मॉडेल")}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {pathway.map((p, idx) => (
              <div
                key={idx}
                className="glass-card-3d rounded-3xl p-6 border border-neutral-200/90 shadow-soft card-3d-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black text-white bg-primary-900 px-3 py-1 rounded-xl shadow-xs">
                      {p.step}
                    </span>
                    <span className="text-xs text-primary-500 font-bold">STAGE</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-neutral-950 font-heading mb-1.5">
                    {t(p.name, p.nameMr)}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                  <span>✓</span>
                  <span>{t("Verifiable Step", "पडताळणीयोग्य टप्पा")}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dual Details Section */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-primary-950 text-white rounded-3xl p-8 lg:p-14 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/15 rounded-full blur-3xl" />

          <div className="lg:col-span-7 space-y-6 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-warm-400 bg-warm-950/60 px-3.5 py-1 rounded-full border border-warm-500/30">
              {t("Custom Programme Scope", "कस्टमाईज्ड प्रकल्प")}
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white leading-tight">
              {t(
                "Tailored Social Initiatives Designed for Measurable Community Impact",
                "मोजता येण्याजोग्या परिणामांसाठी दर्जेदार सामाजिक उपक्रम"
              )}
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl">
              {t(
                "Whether implementing workforce readiness cohorts, rural digital hubs, or women's livelihood clusters, our operational stewardship ensures strict compliance with Schedule VII and statutory reporting standards.",
                "युवक प्रशिक्षण, महिला उपजीविका किंवा ग्रामीण विकास — प्रत्येक प्रकल्प शेड्यूल VII नियमांनुसार आणि पारदर्शक अहवालांसह राबवला जातो."
              )}
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {[
                "Vocational & Technical Training",
                "Digital Literacy Hubs",
                "Women's Livelihood Projects",
                "Workplace Readiness & Soft Skills",
                "Rural Community Infrastructure",
                "Statutory Audited Impact Reports"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-neutral-200">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative z-10">
            <div className="glass-dark-3d rounded-2xl p-7 border border-white/20 space-y-5 shadow-2xl card-3d-hover">
              <div className="text-center space-y-2">
                <span className="text-2xl">🤝</span>
                <h4 className="text-lg font-bold text-white">
                  {t("Start a CSR Partnership Conversation", "सीएसआर भागीदारी सुरू करा")}
                </h4>
                <p className="text-xs text-neutral-300">
                  {t(
                    "Connect directly with our programme leadership to discuss requirements, feasibility, and timelines.",
                    "प्रकल्प तपशील आणि आराखड्यासाठी आमच्या प्रतिनिधींशी थेट संपर्क साधा."
                  )}
                </p>
              </div>

              <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs text-neutral-300 space-y-1">
                <div>✉️ <strong>Email:</strong> partnerships@vikasdharafoundation.org</div>
                <div>📍 <strong>HQ:</strong> Nanded & Pune, Maharashtra</div>
              </div>

              <Link to="/get-involved/partner" className="block">
                <Button size="lg" className="w-full bg-gradient-to-r from-warm-500 to-warm-600 hover:from-warm-400 hover:to-warm-500 text-neutral-950 font-extrabold shadow-lg">
                  {t("Submit Partnership Inquiry →", "भागीदारी प्रस्ताव पाठवा →")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}