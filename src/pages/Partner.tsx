import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionEyebrow } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { Link } from "react-router-dom";
import { partnership } from "@/content";
import { SEO } from "@/components/seo/SEO";

export function PartnerPage() {
  const { partnership: partner } = partnership;

  return (
    <>
      <SEO
        title="Corporate CSR & Institutional Partnerships (Pune & Maharashtra) | VORTEXSOFT VIKASDHARA FOUNDATION"
        description="Partner with VORTEXSOFT VIKASDHARA FOUNDATION for certified CSR projects in Pune and Maharashtra. Transparent project execution in youth skills, women empowerment, digital education, and rural development."
        keywords={[
          "Corporate CSR Partner Pune",
          "CSR implementation agency Pune",
          "Schedule VII CSR Maharashtra",
          "NGO for CSR in Hinjewadi",
          "Corporate social responsibility partner Maharashtra",
          "Skill development CSR projects Pune",
          "Women empowerment CSR Pune",
          "Vikasdhara Foundation partnerships"
        ]}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Get Involved", item: "/get-involved/partner" },
          { name: "Partner With Us", item: "/get-involved/partner" }
        ]}
        faqs={[
          {
            question: "What makes Vortexsoft Vikasdhara Foundation a preferred CSR partner in Pune?",
            answer: "We offer complete end-to-end statutory CSR compliance, transparent bank escrow utilization, real-time photo-documented project updates, and independent third-party impact assessments."
          },
          {
            question: "How can corporations initiate a partnership?",
            answer: "Send a project brief or Schedule VII requirement to partnerships@vikasdharafoundation.org or call our Pune liaison office to schedule an exploratory discussion."
          }
        ]}
      />

      <Section variant="xl" background="sky">
        <Container>
          <SectionHeader>
            <SectionEyebrow>For Organisations & Enterprises</SectionEyebrow>
            <SectionTitle>{partner.heading}</SectionTitle>
            <SectionSubtitle className="max-w-3xl mx-auto whitespace-pre-line">{partner.intro}</SectionSubtitle>
          </SectionHeader>
        </Container>
      </Section>

      <Section variant="lg" background="none">
        <Container>
          <SectionHeader className="text-left max-w-none mx-auto mb-12">
            <SectionEyebrow>Partnership Categories</SectionEyebrow>
            <SectionTitle>Ways to Partner With Us</SectionTitle>
            <SectionSubtitle>
              We welcome collaborations with corporations, foundations, government bodies, and social enterprises
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {partner.categories.map((category, index) => (
              <Card key={index} variant="hover-lift" padding="lg">
                <CardContent>
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-primary-700">{index + 1}</span>
                  </div>
                  <CardTitle>{category.title}</CardTitle>
                  <p className="text-neutral-600 text-sm mt-2">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary-50 rounded-2xl p-8 lg:p-12 border border-primary-100 mb-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-primary-900 mb-4">Our Partnership Process</h3>
                <div className="space-y-4">
                  {partner.process.steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-700 text-lg font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                      <span className="text-primary-800 font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary-900 mb-4">Possible Deliverables</h3>
                <ul className="space-y-3">
                  {partner.deliverables.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-primary-800">
                      <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg">
                {partner.cta.text}
              </Button>
            </Link>
            <p className="mt-4 text-neutral-600 text-sm">{partner.cta.description}</p>
          </div>
        </Container>
      </Section>

      <Section variant="lg" background="neutral">
        <Container>
          <SectionHeader className="text-left max-w-none mx-auto mb-12">
            <SectionEyebrow>Corporate Projects</SectionEyebrow>
            <SectionTitle>Build Impact Through Structured Projects</SectionTitle>
            <SectionSubtitle>
              From technical skill centers in Pune to rural education in Nanded, partner with us on high-return social investments.
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h3 className="text-xl font-semibold text-neutral-950 mb-6">Project Areas</h3>
              <div className="space-y-3">
                {partnership.corporateLanding.deliverables.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-neutral-100 hover:border-primary-200 transition-colors">
                    <IconWrapper variant="primary" size="sm" className="flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </IconWrapper>
                    <p className="text-neutral-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-100 p-8 lg:p-10 shadow-soft">
              <h3 className="text-2xl font-semibold text-neutral-950 mb-4">Our Process</h3>
              <div className="space-y-4 mb-8">
                {partnership.corporateLanding.process.split(" → ").map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 text-sm font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span className="text-neutral-700 font-medium">{step}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-neutral-500 italic">
                {partnership.corporateLanding.note}
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}