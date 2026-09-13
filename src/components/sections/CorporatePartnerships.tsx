import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionEyebrow } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { programmes, partnership } from "@/content";
import { icons, type IconName } from "@/assets/icons";

export function CorporatePartnerships() {
  const corporate = programmes.programmes.find(p => p.id === "corporate-projects");
  const { corporateLanding } = partnership;

  if (!corporate) return null;

  return (
    <Section variant="lg" background="none">
      <Container>
        <SectionHeader>
          <SectionEyebrow>For Organisations</SectionEyebrow>
          <SectionTitle>From Corporate Partnership to Community Opportunity</SectionTitle>
          <SectionSubtitle>
            {corporate.description}
          </SectionSubtitle>
        </SectionHeader>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <div className="space-y-4">
              {corporate.possibleActivities.slice(0, 8).map((activity, index) => (
                <div key={index} className="flex gap-4 p-4 bg-white rounded-xl border border-neutral-100 hover:border-primary-200 transition-colors">
                  <IconWrapper variant="primary" size="sm" className="flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </IconWrapper>
                  <p className="text-neutral-700 font-medium">{activity}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-primary-50 rounded-xl border border-primary-100">
              <p className="text-sm text-primary-800 font-medium">
                <strong>Important:</strong> {corporate.importantNote}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-100 p-8 lg:p-10 shadow-soft">
            <h3 className="text-2xl font-semibold text-neutral-950 mb-4">Our Partnership Process</h3>
            <div className="space-y-4 mb-8">
              {corporateLanding.process.split(" → ").map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 text-sm font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-neutral-700 font-medium">{step}</span>
                </div>
              ))}
            </div>

            <h4 className="text-lg font-semibold text-neutral-950 mb-4">Possible Deliverables</h4>
            <ul className="space-y-2 mb-8">
              {corporateLanding.deliverables.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-neutral-600">
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link to="/get-involved/partner">Start a Partnership Conversation</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}