import { useParams, Link } from "react-router-dom";
import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionEyebrow } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { programmes } from "@/content";
import { icons, type IconName } from "@/assets/icons";
import { SEO } from "@/components/seo/SEO";
import { useLanguage } from "@/context/LanguageContext";
import { ApplicationInquiryForm } from "@/components/common/ApplicationInquiryForm";

export function ProgrammeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  
  // Find matching programme (support both exact slug and aliases)
  const programme = programmes.programmes.find(
    p => p.slug === slug || 
    (slug === "women-empowerment" && p.slug === "womens-education") ||
    (slug === "skill-development" && p.slug === "skills") ||
    (slug === "livelihood-development" && p.slug === "employment") ||
    (slug === "humanitarian-support" && p.slug === "humanitarian") ||
    (slug === "rural-development" && p.slug === "rural") ||
    (slug === "health-awareness" && p.slug === "health")
  );

  if (!programme) {
    return (
      <Section variant="xl" background="sky">
        <Container>
          <div className="text-center py-20">
            <h1 className="text-3xl font-semibold text-neutral-950 mb-4">
              {t("Programme Not Found", "उपक्रम सापडला नाही")}
            </h1>
            <p className="text-neutral-600 mb-8">
              {t("The programme you're looking for doesn't exist.", "तुम्ही शोधत असलेला उपक्रम उपलब्ध नाही.")}
            </p>
            <Link to="/what-we-do">
              <Button>{t("Back to All Programmes", "सर्व उपक्रम पहा")}</Button>
            </Link>
          </div>
        </Container>
      </Section>
    );
  }

  const programmeKeywords = [
    `${programme.title} NGO Maharashtra`,
    `${programme.title} Nanded`,
    `${programme.title} Pune`,
    "VORTEXSOFT VIKASDHARA FOUNDATION",
    "Public Charitable Trust Maharashtra",
    "CSR Programmes India",
    "Community Development India"
  ];

  const programmeFaqs = [
    {
      question: `What is the objective of the ${programme.title} initiative?`,
      answer: programme.description
    },
    {
      question: `Who can benefit from the ${programme.title} programme?`,
      answer: `Depending on specific programme criteria, activities support youth, women, students, job seekers, and underserved community members across Maharashtra and India.`
    },
    {
      question: `How can organizations or volunteers support the ${programme.title} initiative?`,
      answer: `Individuals can participate as volunteers, while companies and institutions can collaborate on lawful CSR and social impact projects. Contact partnerships@vikasdharafoundation.org.`
    }
  ];

  const statusColors: Record<string, { bg: string; text: string; border: string }> = {
    ACTIVE: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
    CONTINUING: { bg: "bg-primary-50", text: "text-primary-700", border: "border-primary-200" },
    PILOT: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
    PLANNED: { bg: "bg-sky-50", text: "text-sky-700", border: "border-sky-200" }
  };

  const currentStatus = programme.status || "ACTIVE";
  const statusStyle = statusColors[currentStatus] || statusColors.ACTIVE;

  const isCorporate = programme.slug === "corporate-projects";

  return (
    <>
      <SEO
        title={`${programme.title} | VORTEXSOFT VIKASDHARA FOUNDATION`}
        description={`${programme.description} Verified information on VORTEXSOFT VIKASDHARA FOUNDATION's ${programme.title} initiatives across Maharashtra and India.`}
        keywords={programmeKeywords}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "What We Do", item: "/what-we-do" },
          { name: programme.title, item: `/what-we-do/${programme.slug}` }
        ]}
        faqs={programmeFaqs}
      />

      <Section variant="xl" background="sky">
        <Container>
          <SectionHeader>
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border} uppercase tracking-wider`}>
                {t(`Status: ${currentStatus}`, `स्थिती: ${currentStatus}`)}
              </span>
            </div>
            <SectionEyebrow>{t("Programme Area", "कार्यक्षेत्र")}</SectionEyebrow>
            <SectionTitle>{programme.title}</SectionTitle>
            <SectionSubtitle className="max-w-3xl mx-auto font-medium text-neutral-800">
              {programme.description}
            </SectionSubtitle>
          </SectionHeader>
        </Container>
      </Section>

      <Section variant="lg" background="none">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-8">
              
              {/* Answer-First Core Summary (§8 & §33) */}
              <div className="bg-primary-50/50 rounded-2xl p-6 border border-primary-100">
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary-800 mb-2">
                  {t("Answer-First Executive Summary", "थेट मुख्य सारांश")}
                </h2>
                <p className="text-base font-semibold text-neutral-900 leading-relaxed">
                  {programme.shortDescription}
                </p>
                <p className="text-sm text-neutral-700 mt-2 leading-relaxed">
                  {t(
                    "VORTEXSOFT VIKASDHARA FOUNDATION designs and delivers structured community initiatives grounded in genuine needs, lawful governance, and verifiable social outcomes.",
                    "वॉर्टेक्ससॉफ्ट विकासधारा फाउंडेशन वास्तविक गरजा, कायदेशीर प्रशासन आणि मोजता येण्याजोग्या सामाजिक परिणामांवर आधारित उपक्रम राबवते."
                  )}
                </p>
              </div>

              {/* Corporate 5-Stage Pathway (§14) */}
              {isCorporate && (
                <Card variant="bordered" padding="lg" className="border-primary-300 bg-white shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-primary-950 flex items-center gap-2 text-xl font-bold">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary-600"></span>
                      {t("Corporate Project Pathway", "कॉर्पोरेट प्रकल्प अंमलबजावणी टप्पे")}
                    </CardTitle>
                    <CardDescription>
                      {t(
                        "Structured 5-stage framework for CSR and institutional partnerships:",
                        "सीएसआर आणि संस्थात्मक भागीदारीसाठी ५ टप्प्यांचे सुव्यवस्थित मॉडेल:"
                      )}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
                      {[
                        { step: "01", name: "DISCOVER", desc: "Community needs assessment & scope alignment" },
                        { step: "02", name: "DESIGN", desc: "Programme blueprint, syllabus & milestones" },
                        { step: "03", name: "IMPLEMENT", desc: "Field rollout with qualified trainers" },
                        { step: "04", name: "MEASURE", desc: "Verifiable attendance & output tracking" },
                        { step: "05", name: "REPORT", desc: "Statutory documentation & audited outcomes" }
                      ].map((p, idx) => (
                        <div key={idx} className="bg-neutral-50 rounded-xl p-3.5 border border-neutral-200 text-center space-y-1">
                          <span className="text-[10px] font-extrabold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                            {p.step}
                          </span>
                          <h4 className="font-bold text-xs text-neutral-900 mt-1">{p.name}</h4>
                          <p className="text-[11px] text-neutral-600 leading-tight">{p.desc}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Possible Activities & Scope */}
              <Card variant="bordered" padding="lg" className="shadow-soft bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-neutral-950">
                    {t("Potential Activities & Scope", "संभाव्य उपक्रम आणि व्याप्ती")}
                  </CardTitle>
                  <CardDescription>
                    {t("Programmes may include, but are not limited to:", "उपक्रमांमध्ये खालील घटकांचा समावेश असू शकतो:")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid sm:grid-cols-2 gap-3.5">
                    {programme.possibleActivities.map((activity, index) => (
                      <li key={index} className="flex items-start gap-3 text-neutral-700 bg-neutral-50/70 p-3 rounded-xl border border-neutral-100">
                        <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm font-medium leading-snug">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Measurement & Success Framework (§8 & §45) */}
              <Card variant="bordered" padding="lg" className="bg-white shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-neutral-950">
                    {t("Measurement & Accountability Framework", "मोजमाप आणि उत्तरदायित्व आराखडा")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-neutral-700">
                  <p>
                    {t(
                      "In accordance with our core governance principles, all programme activities are documented through verifiable records:",
                      "आमच्या प्रशासकीय तत्त्वांनुसार, सर्व उपक्रम अचूक नोंदींद्वारे दस्तऐवजीकरण केले जातात:"
                    )}
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3 pt-1">
                    <div className="bg-sky-50/60 p-3 rounded-xl border border-sky-100 text-center">
                      <div className="font-bold text-sky-950 text-xs uppercase">{t("Outputs", "उत्पादने / आउटपुट")}</div>
                      <div className="text-xs text-neutral-600 mt-1">{t("Training hours, kits delivered, sessions conducted", "प्रशिक्षण तास, वाटप केलेले साहित्य")}</div>
                    </div>
                    <div className="bg-emerald-50/60 p-3 rounded-xl border border-emerald-100 text-center">
                      <div className="font-bold text-emerald-950 text-xs uppercase">{t("Outcomes", "परिणाम / आउटकम")}</div>
                      <div className="text-xs text-neutral-600 mt-1">{t("Skills acquired, opportunities facilitated", "कौशल्य संपादन, रोजगाराच्या संधी")}</div>
                    </div>
                    <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-100 text-center">
                      <div className="font-bold text-amber-950 text-xs uppercase">{t("Evidence", "पुरावा / पडताळणी")}</div>
                      <div className="text-xs text-neutral-600 mt-1">{t("Attendance logs, certificates, project reports", "उपस्थिती नोंदी, प्रमाणपत्रे, अहवाल")}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Statutory Note */}
              {programme.importantNote && (
                <Card variant="bordered" padding="lg" className="bg-primary-50/70 border-primary-200">
                  <CardHeader>
                    <CardTitle className="text-primary-950 text-base font-bold flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {t("Institutional & Statutory Note", "वैधानिक आणि संस्थात्मक नोंद")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary-900 text-sm leading-relaxed">{programme.importantNote}</p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar Overview & Actions */}
            <div className="space-y-6">
              <Card variant="bordered" padding="lg" className="shadow-soft bg-white">
                <CardHeader>
                  <CardTitle className="text-base font-bold">{t("Programme Overview", "उपक्रम संक्षिप्त माहिती")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center py-2">
                    <IconWrapper
                      variant={(programme.iconVariant as "primary" | "accent" | "warm" | "neutral") || "primary"}
                      size="xl"
                    >
                      {icons[(programme.icon as IconName) || "book"] || icons.book}
                    </IconWrapper>
                  </div>
                  <div className="text-center space-y-2">
                    <span className={`inline-block text-[11px] font-bold px-3 py-1 rounded-full border ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border}`}>
                      {t(`Status: ${currentStatus}`, `स्थिती: ${currentStatus}`)}
                    </span>
                    <h3 className="font-bold text-neutral-900 text-base">{programme.title}</h3>
                    <p className="text-neutral-600 text-xs leading-relaxed">{programme.shortDescription}</p>
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered" padding="lg" className="space-y-3 shadow-soft bg-white">
                <a href="#programme-inquiry-form" className="block">
                  <Button size="lg" className="w-full">
                    {t("Enroll / Apply for This", "या उपक्रमासाठी अर्ज करा")}
                  </Button>
                </a>
                <Link to="/get-involved/partner" className="block">
                  <Button variant="outline" size="lg" className="w-full">
                    {t("Partner on This Programme", "संस्थात्मक CSR भागीदारी")}
                  </Button>
                </Link>
                <Link to="/get-involved/volunteer" className="block">
                  <Button variant="ghost" size="lg" className="w-full">
                    {t("Volunteer for This", "स्वयंसेवक म्हणून सहभागी व्हा")}
                  </Button>
                </Link>
              </Card>

              {/* Semantic Topic Clusters (§41 & §42) */}
              <Card variant="bordered" padding="lg" className="shadow-soft bg-white">
                <CardHeader>
                  <CardTitle className="text-base font-bold">{t("Related Initiatives", "संबंधित उपक्रम")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {programmes.programmes
                      .filter(p => p.id !== programme.id)
                      .slice(0, 5)
                      .map((related) => (
                        <li key={related.id}>
                          <Link to={`/what-we-do/${related.slug}`} className="text-xs sm:text-sm text-neutral-700 hover:text-primary-700 transition-colors flex items-center gap-2 py-1">
                            <span className="text-primary-600 shrink-0 font-bold">→</span>
                            <span className="font-medium">{related.title}</span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Direct In-page Application & Inquiry Section */}
          <div id="programme-inquiry-form" className="mt-20 max-w-3xl mx-auto scroll-mt-28">
            <ApplicationInquiryForm
              defaultType="beneficiary_skilling"
              programmeTitle={programme.title}
              defaultSubject={`Enrollment & Inquiry: ${programme.title}`}
              title={t(`Apply / Inquire for ${programme.title}`, `${programme.title} उपक्रमासाठी अर्ज व चौकशी`)}
              subtitle={t(
                "Submit your application details below. Applications are tracked in our ATS and you can also send direct WhatsApp confirmation.",
                "खालील फॉर्ममध्ये आपले तपशील भरा. आपला अर्ज थेट आमच्या प्रणालीत नोंदवला जाईल."
              )}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}