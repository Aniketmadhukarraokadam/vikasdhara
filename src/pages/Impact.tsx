import { useState } from "react";
import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionEyebrow } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { impact } from "@/content";
import { icons, type IconName } from "@/assets/icons";
import { SEO } from "@/components/seo/SEO";
import { useLanguage } from "@/context/LanguageContext";

const sdgColors: Record<string, { bg: string; text: string; border: string }> = {
  "1": { bg: "bg-red-50 text-red-700", text: "text-red-700", border: "border-red-200" },
  "3": { bg: "bg-emerald-50 text-emerald-700", text: "text-emerald-700", border: "border-emerald-200" },
  "4": { bg: "bg-rose-50 text-rose-700", text: "text-rose-700", border: "border-rose-200" },
  "5": { bg: "bg-orange-50 text-orange-700", text: "text-orange-700", border: "border-orange-200" },
  "8": { bg: "bg-amber-50 text-amber-800", text: "text-amber-800", border: "border-amber-200" },
  "10": { bg: "bg-pink-50 text-pink-700", text: "text-pink-700", border: "border-pink-200" },
  "11": { bg: "bg-yellow-50 text-yellow-800", text: "text-yellow-800", border: "border-yellow-200" },
  "13": { bg: "bg-green-50 text-green-700", text: "text-green-700", border: "border-green-200" },
  "15": { bg: "bg-lime-50 text-lime-800", text: "text-lime-800", border: "border-lime-200" }
};

const regionalFootprints = [
  {
    region: "Nanded & Dharmabad Cluster",
    regionMr: "नांदेड व धर्माबाद विभाग",
    badge: "Rural Headquarters & Sanctuary",
    stats: "150+ Cattle Sheltered • 28 Rural Schools",
    focus: "Home to the Vikasdhara Gau Shala Sanctuary, smart classroom tablet installations, check dam watershed recharge, and elderly care programmes."
  },
  {
    region: "Pune & Western Maharashtra Hub",
    regionMr: "पुणे व पश्चिम महाराष्ट्र केंद्र",
    badge: "Skill & Corporate Placement Hub",
    stats: "1,250+ Youth Certified • 8+ CSR Projects",
    focus: "Youth coding bootcamps, vocational trades certification, corporate CSR liaison, and organized employment placement drives."
  },
  {
    region: "Marathwada Peri-Urban Corridor",
    regionMr: "मराठवाडा ग्रामीण विस्तार",
    badge: "Women SHG & Health Outreach",
    stats: "850+ SHG Women • 42+ Villages",
    focus: "Spice and agro-processing micro-enterprises, mobile preventive health camps, anemia screening, and community meal distribution."
  }
];

export function ImpactPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const metrics = impact.impact.metrics || [];
  const filteredMetrics = activeCategory === "all"
    ? metrics
    : metrics.filter(m => m.category === activeCategory);

  return (
    <>
      <SEO
        title="Social Impact & Verified Outcomes | VIKASDHARA FOUNDATION"
        description="Explore the measurable social impact of VIKASDHARA FOUNDATION across Maharashtra and Pune. Transparent reporting, community case studies, and verified beneficiary outcomes."
        keywords={[
          "NGO Impact Report Maharashtra",
          "Vikasdhara Foundation Outcomes",
          "CSR Impact Assessment Pune",
          "Beneficiary Metrics NGO India",
          "Social Return on Investment Maharashtra",
          "Verified NGO Projects Pune"
        ]}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Impact", item: "/impact" }
        ]}
      />

      {/* Hero Section */}
      <Section variant="xl" background="sky">
        <Container>
          <SectionHeader>
            <SectionEyebrow>{t("Results & Accountability", "पारदर्शकता व परिणाम")}</SectionEyebrow>
            <SectionTitle>{t("Verified Social Impact Dashboard", "प्रमाणित सामाजिक परिणाम व अहवाल")}</SectionTitle>
            <SectionSubtitle>
              {t(
                impact.impact.subheading,
                impact.impact.subheadingMr
              )}
            </SectionSubtitle>
          </SectionHeader>
        </Container>
      </Section>

      <Section variant="lg" background="none">
        <Container>
          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {impact.impact.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-primary-900 text-white shadow-md scale-105"
                    : "bg-white text-neutral-600 border border-neutral-200 hover:border-primary-400 hover:text-neutral-900"
                }`}
              >
                {t(cat.label, cat.labelMr)}
              </button>
            ))}
          </div>

          {/* Metrics Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
            {filteredMetrics.map((metric, idx) => (
              <Card key={idx} variant="hover-lift" padding="lg" className="text-center flex flex-col justify-between group">
                <CardContent className="pt-2">
                  <IconWrapper variant="primary" size="lg" className="mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {icons[metric.icon as IconName] || icons.book}
                  </IconWrapper>
                  <div className="text-3xl lg:text-4xl font-black text-primary-900 mb-1 font-heading">
                    {metric.value}
                  </div>
                  <p className="text-neutral-900 text-sm font-bold">
                    {t(metric.label, metric.labelMr)}
                  </p>
                  <p className="text-neutral-500 text-xs mt-1.5 leading-relaxed">
                    {metric.description}
                  </p>
                </CardContent>
                {metric.outcome && (
                  <div className="mt-4 pt-3 border-t border-neutral-100 text-[11px] font-semibold text-emerald-700 bg-emerald-50/60 rounded-lg p-1.5">
                    ✓ {metric.outcome}
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Sector-by-Sector Deep Dive */}
          <div className="mb-20">
            <SectionHeader className="text-center max-w-3xl mx-auto mb-12">
              <SectionEyebrow>{t("Thematic Deep Dive", "सखोल प्रभाव विश्लेषण")}</SectionEyebrow>
              <SectionTitle>{t("Impact Across Operational Verticals", "प्रमुख कार्यक्षेत्रांमधील बदल")}</SectionTitle>
              <SectionSubtitle>
                {t(
                  "Tangible transformations created through structured interventions in classrooms, women cooperatives, farmlands, and animal shelters",
                  "शाळा, महिला बचत गट, शेती आणि गोशाळांमध्ये घडवून आणलेले दृश्यमान बदल"
                )}
              </SectionSubtitle>
            </SectionHeader>

            <div className="grid md:grid-cols-2 gap-8">
              {impact.impact.sectorBreakdowns.map((sector, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-soft hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
                        {sector.sdg}
                      </span>
                      <span className="text-xs font-semibold text-neutral-500">
                        {sector.stats}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 font-heading mb-2">
                      {t(sector.sector, sector.sectorMr)}
                    </h3>
                    <p className="text-sm font-semibold text-primary-800 mb-4">
                      {sector.headline}
                    </p>
                    <ul className="space-y-2 mb-6 text-xs sm:text-sm text-neutral-600">
                      {sector.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-emerald-600 font-bold mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400 font-medium">
                    <span>Field Verified Outcome</span>
                    <span className="text-primary-700 font-bold">100% Audited</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regional Footprint Section */}
          <div className="mb-20">
            <SectionHeader className="text-center max-w-3xl mx-auto mb-10">
              <SectionEyebrow>{t("Geographic Presence", "भौगोलिक विस्तार")}</SectionEyebrow>
              <SectionTitle>{t("Regional Footprint Across Maharashtra", "महाराष्ट्रातील क्षेत्रीय कार्यकक्षा")}</SectionTitle>
              <SectionSubtitle>
                {t(
                  "Deep-rooted grassroots presence bridging agrarian rural Marathwada and the industrial hub of Pune",
                  "नांदेड, धर्माबाद ते पुणे औद्योगिक पट्ट्यापर्यंत सर्वसमावेशक पोहोच"
                )}
              </SectionSubtitle>
            </SectionHeader>

            <div className="grid md:grid-cols-3 gap-6">
              {regionalFootprints.map((rf, idx) => (
                <div key={idx} className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-6 border border-neutral-200/90 shadow-soft flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary-700 bg-primary-100/70 px-2.5 py-1 rounded-md inline-block mb-3">
                      {rf.badge}
                    </span>
                    <h4 className="text-lg font-bold text-neutral-900 font-heading mb-1">
                      {t(rf.region, rf.regionMr)}
                    </h4>
                    <p className="text-xs font-bold text-neutral-700 mb-3">
                      {rf.stats}
                    </p>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {rf.focus}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* UN Sustainable Development Goals (SDG) Alignment Matrix */}
          <div className="mb-20 bg-neutral-900 text-white rounded-3xl p-8 lg:p-12 border border-neutral-800 shadow-2xl">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-500/30">
                Global Standards Alignment
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 font-heading">
                United Nations SDGs (Sustainable Development Goals)
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2">
                Every Vikasdhara Foundation programme is structurally mapped to UN 2030 targets and Schedule VII CSR focus areas.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {impact.impact.sdgAlignment.map((sdg) => {
                const color = sdgColors[sdg.number] || { bg: "bg-white/10 text-white", text: "text-white", border: "border-white/20" };
                return (
                  <div key={sdg.number} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`w-8 h-8 rounded-lg font-black text-sm flex items-center justify-center font-heading ${color.bg}`}>
                        {sdg.number}
                      </span>
                      <h4 className="text-sm font-bold text-white leading-tight font-heading">
                        SDG {sdg.number}: {t(sdg.name, sdg.nameMr)}
                      </h4>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed mt-1">
                      {sdg.action}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ethical Reporting Standard */}
          <div className="bg-primary-950 text-white rounded-3xl p-8 lg:p-12 border border-primary-800 shadow-2xl mb-16">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
                Ethical Reporting Standard
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3 font-heading">
                Zero-Fabrication Data Protocol
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2">
                We adhere strictly to statutory auditing and empirical field documentation.
              </p>
            </div>
            
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {impact.impact.reportingStandards.map((standard, index) => (
                <li key={index} className="flex items-center gap-3 text-xs sm:text-sm text-neutral-200 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                  <span>{standard}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <Link to="/get-involved/partner">
              <Button variant="warm" size="lg" className="px-8 py-3.5 shadow-xl font-extrabold">
                Initiate CSR Grant & Partnership Dialogue →
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}