import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionEyebrow } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { transparency } from "@/content";
import { SEO } from "@/components/seo/SEO";

export function TransparencyPage() {
  const { transparency: trans } = transparency;

  return (
    <>
      <SEO
        title="Transparency, Compliance & Disclosures | VIKASDHARA FOUNDATION"
        description="Public disclosures, annual reports, statutory trust compliance, financial statements, and institutional governance policies of VIKASDHARA FOUNDATION."
        keywords={[
          "NGO Transparency Maharashtra",
          "Public trust compliance Maharashtra",
          "Annual reports Vikasdhara Foundation",
          "Statutory audit NGO India",
          "Trust deed disclosures Dharmabad",
          "Governance policies Pune NGO"
        ]}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Transparency", item: "/transparency" }
        ]}
        faqs={[
          {
            question: "Where can public annual audit reports be accessed?",
            answer: "Statutory annual returns, audited balance sheets, and activity reports are uploaded to this Transparency portal upon completion of each financial year's audit."
          },
          {
            question: "How can stakeholders request specific compliance documentation?",
            answer: "Legitimate institutional partners and stakeholders can request documentation by emailing info@vikasdharafoundation.org."
          }
        ]}
      />

      <Section variant="xl" background="sky">
        <Container>
          <SectionHeader>
            <SectionEyebrow>Accountability & Governance</SectionEyebrow>
            <SectionTitle>{trans.heading}</SectionTitle>
            <SectionSubtitle className="max-w-3xl mx-auto">{trans.intro}</SectionSubtitle>
          </SectionHeader>
        </Container>
      </Section>

      <Section variant="lg" background="none">
        <Container>
          <div className="space-y-12">
            {trans.sections.map((section) => (
              <div key={section.id}>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <SectionEyebrow className="mb-2">{section.title}</SectionEyebrow>
                    <p className="text-neutral-600">{section.description}</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.items.map((item, index) => (
                    <Card key={index} variant="bordered" padding="md">
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <p className="text-neutral-700 font-medium">{item.label || item}</p>
                          {item.status && (
                            <Badge variant="neutral">{item.status}</Badge>
                          )}
                          {item.value && (
                            <span className="text-neutral-500 text-sm">{item.value}</span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="lg" background="primary">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-primary-900 mb-4">{trans.contactInfo.title}</h3>
            <p className="text-primary-800 mb-6">{trans.contactInfo.description}</p>
            <a href={`mailto:${trans.contactInfo.email}`} className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              {trans.contactInfo.email}
            </a>
          </div>

          <div className="mt-12 p-6 bg-primary-100/50 rounded-2xl border border-primary-200">
            <p className="text-sm text-primary-800 italic text-center">
              {trans.note}
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}