import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionEyebrow } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { Link } from "react-router-dom";
import { support } from "@/content";
import { icons, type IconName } from "@/assets/icons";

export function SupportPage() {
  const { support: sup } = support;

  return (
    <>
      <Section variant="xl" background="primary">
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
            <SectionEyebrow>Compliance</SectionEyebrow>
            <SectionTitle>Important Compliance Notice</SectionTitle>
          </SectionHeader>

          <Card variant="bordered" padding="lg" className="bg-warm-50 border-warm-100 max-w-3xl mx-auto mb-16">
            <CardContent>
              <p className="text-warm-800 whitespace-pre-line">{sup.complianceNote}</p>
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
              Multiple ways to support our mission, each making a meaningful difference
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
            <Button size="lg" asChild>
              <Link to="/contact">{sup.cta.text}</Link>
            </Button>
            <p className="mt-4 text-neutral-600 text-sm">{sup.cta.description}</p>
          </div>
        </Container>
      </Section>
    </>
  );
}