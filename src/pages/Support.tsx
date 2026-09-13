import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionEyebrow } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { support } from "@/content";
import { SEO } from "@/components/seo/SEO";

export function SupportPage() {
  const { support: sup } = support;

  return (
    <>
      <SEO
        title="Support the Mission & Transparent Contributions | VORTEXSOFT VIKASDHARA FOUNDATION"
        description="Support VORTEXSOFT VIKASDHARA FOUNDATION's social development initiatives across Pune and Maharashtra. Transparent financial accounting, ethical compliance, and direct impact for communities."
        keywords={[
          "Support NGO Maharashtra",
          "Donate to NGO Pune",
          "Public charitable trust donations",
          "Non profit contribution Maharashtra",
          "Transparent NGO Pune",
          "Vikasdhara Foundation support"
        ]}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Get Involved", item: "/get-involved/support" },
          { name: "Support the Mission", item: "/get-involved/support" }
        ]}
        faqs={[
          {
            question: "How are funds and donations utilized by Vikasdhara Foundation?",
            answer: "All funds are deployed strictly according to statutory public charitable objectives: educational scholarships, skill development training kits, rural village development, community health camps, and gaushala cattle care."
          },
          {
            question: "Does the Foundation issue receipts and audit disclosures?",
            answer: "Yes, every contribution is documented with an official stamped receipt, unique transaction tracking number, and audited in the foundation's annual financial accounts."
          }
        ]}
      />

      <Section variant="xl" background="sky">
        <Container>
          <SectionHeader>
            <SectionEyebrow>Get Involved</SectionEyebrow>
            <SectionTitle>{sup.heading}</SectionTitle>
            <SectionSubtitle className="max-w-3xl mx-auto whitespace-pre-line">{sup.copy}</SectionSubtitle>
          </SectionHeader>
        </Container>
      </Section>

      <Section variant="lg" background="none">
        <Container>
          <SectionHeader className="text-left max-w-none mx-auto mb-12">
            <SectionEyebrow>Compliance & Governance</SectionEyebrow>
            <SectionTitle>Important Compliance Notice</SectionTitle>
          </SectionHeader>

          <Card variant="bordered" padding="lg" className="bg-amber-50 border-amber-200 max-w-3xl mx-auto mb-16">
            <CardContent>
              <p className="text-amber-900 whitespace-pre-line leading-relaxed text-sm sm:text-base font-medium">
                {sup.complianceNote}
              </p>
            </CardContent>
          </Card>
        </Container>
      </Section>

      <Section variant="lg" background="neutral">
        <Container>
          <SectionHeader className="text-left max-w-none mx-auto mb-12">
            <SectionEyebrow>Ways to Support</SectionEyebrow>
            <SectionTitle>How You Can Contribute</SectionTitle>
            <SectionSubtitle>
              Multiple pathways to support our mission in Pune and Maharashtra
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {sup.waysToSupport.map((way, index) => (
              <Card key={index} variant="hover-lift" padding="lg">
                <CardContent>
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-primary-700">{index + 1}</span>
                  </div>
                  <CardTitle>{way.title}</CardTitle>
                  <p className="text-neutral-600 text-sm mt-2">{way.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary-50 rounded-2xl p-8 lg:p-12 border border-primary-100 mb-16">
            <h3 className="text-2xl font-semibold text-primary-900 mb-4 text-center">Transparency Commitment</h3>
            <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {sup.transparency.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-primary-800">
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg">
                {sup.cta.text}
              </Button>
            </Link>
            <p className="mt-4 text-neutral-600 text-sm">{sup.cta.description}</p>
          </div>
        </Container>
      </Section>
    </>
  );
}