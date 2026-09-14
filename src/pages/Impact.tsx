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

const fullMetrics = [
  { value: "1,250+", label: "Youth & Adults Trained", icon: "graduation-cap", description: "Completed certified vocational, digital and technical training programmes" },
  { value: "4,500+", label: "Students Supported", icon: "book", description: "Children provided with smart classroom access, books and learning kits" },
  { value: "680+", label: "Jobs & Livelihoods Facilitated", icon: "briefcase", description: "Direct job placements, apprenticeship links and micro-business setups" },
  { value: "850+", label: "Women in SHG Cooperatives", icon: "users", description: "Rural women participating in micro-enterprises and agro-processing" },
  { value: "15,000+", label: "Nutrition & Care Services", icon: "heart", description: "Nutritious community meals and humanitarian relief delivered" },
  { value: "14", label: "Active Focus Programmes", icon: "home", description: "Sustained community domains across Maharashtra" },
  { value: "42+", label: "Villages & Clusters Reached", icon: "map-pin", description: "Footprint in Dharmabad, Nanded, and Pune rural periphery" },
  { value: "5,000+", label: "Trees & Saplings Planted", icon: "tree-pine", description: "Community greening, watershed afforestation and soil conservation" },
  { value: "150+", label: "Cows & Cattle in Gau Shala", icon: "cow", description: "Protected indigenous cattle receiving round-the-clock sanctuary care" },
  { value: "120+", label: "Registered Volunteers", icon: "hand-heart", description: "Passionate citizens and students giving time and skills" },
  { value: "8+", label: "Corporate CSR Projects", icon: "building", description: "Schedule VII compliant projects with industrial partners" }
];

export function ImpactPage() {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title="Social Impact & Verified Outcomes | VORTEXSOFT VIKASDHARA FOUNDATION"
        description="Explore the measurable social impact of VORTEXSOFT VIKASDHARA FOUNDATION across Maharashtra and Pune. Transparent reporting, community case studies, and verified beneficiary outcomes."
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

      <Section variant="xl" background="sky">
        <Container>
          <SectionHeader>
            <SectionEyebrow>{t("Results & Accountability", "पारदर्शकता व परिणाम")}</SectionEyebrow>
            <SectionTitle>{t("Verified Social Impact Dashboard", "प्रमाणित सामाजिक परिणाम व अहवाल")}</SectionTitle>
            <SectionSubtitle>
              {t(
                "Transparent, auditable data reflecting our ground presence in education, cattle welfare, women empowerment, and village transformation across Maharashtra.",
                "नांदेड, पुणे आणि महाराष्ट्रातील शिक्षण, गोशाळा, महिला सक्षमीकरण आणि ग्रामविकासाची पडताळणीयोग्य माहिती."
              )}
            </SectionSubtitle>
          </SectionHeader>
        </Container>
      </Section>

      <Section variant="lg" background="none">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {fullMetrics.map((metric) => (
              <Card key={metric.label} variant="hover-lift" padding="lg" className="text-center">
                <CardContent className="pt-2">
                  <IconWrapper variant="primary" size="lg" className="mx-auto mb-4">
                    {icons[metric.icon as IconName] || icons.book}
                  </IconWrapper>
                  <div className="text-3xl lg:text-4xl font-black text-primary-800 mb-1 font-heading">
                    {metric.value}
                  </div>
                  <p className="text-neutral-900 text-sm font-bold">{metric.label}</p>
                  <p className="text-neutral-500 text-xs mt-1.5 leading-relaxed">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

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