import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionEyebrow } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { Link } from "react-router-dom";
import { partnership } from "@/content";
import { icons, type IconName } from "@/assets/icons";

export function PartnerPage() {
  const { partnership: partner } = partnership;

  return (
    <>
      <Section variant="xl" background="primary">
        <Container>
          <SectionHeader>
            <SectionEyebrow>For Organisations</SectionEyebrow>
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
              We welcome conversations with organisations that want to support lawful charitable and socially beneficial initiatives
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
            <Button size="lg" asChild>
              <Link to="/contact">{partner.cta.text}</Link>
            </Button>
            <p className="mt-4 text-neutral-600 text-sm">{partner.cta.description}</p>
          </div>
        </Container>
      </Section>

      <Section variant="lg" background="neutral">
        <Container>
          <SectionHeader className="text-left max-w-none mx-auto mb-12">
            <SectionEyebrow>Corporate Projects</SectionEyebrow>
            <SectionTitle>Build Impact Through Meaningful Projects</SectionTitle>
            <SectionSubtitle>
              From skill development to employment generation, organisations can work with the Foundation on structured projects designed to create measurable social value.
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