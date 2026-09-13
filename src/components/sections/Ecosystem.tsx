import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionEyebrow } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { programmes } from "@/content";
import { icons, type IconName } from "@/assets/icons";

export function Ecosystem() {
  const { ecosystem } = programmes;

  return (
    <Section variant="lg" background="warm">
      <Container>
        <SectionHeader>
          <SectionEyebrow>Our Ecosystem</SectionEyebrow>
          <SectionTitle>{ecosystem.title}</SectionTitle>
          <SectionSubtitle>
            A connected pathway from education to sustainable development
          </SectionSubtitle>
        </SectionHeader>

        <div className="space-y-12">
          <div className="relative">
            <div className="hidden lg:flex items-center justify-between">
              {ecosystem.steps.map((step, index) => (
                <div key={step} className="flex flex-col items-center text-center relative z-10 flex-1">
                  <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mb-3 shadow-soft">
                    <span className="text-2xl font-bold text-primary-700">{index + 1}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-950 leading-snug text-balance">{step}</h3>
                  {index < ecosystem.steps.length - 1 && (
                    <div className="absolute top-8 left-1/2 right-1/2 h-px bg-primary-200" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
            <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4">
              <div className="flex gap-4 min-w-max">
                {ecosystem.steps.map((step, index) => (
                  <div key={step} className="flex flex-col items-center text-center w-40 flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-3 shadow-soft">
                      <span className="text-xl font-bold text-primary-700">{index + 1}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-neutral-950 leading-snug">{step}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-center text-lg font-medium text-neutral-700 mb-8">Surrounding the ecosystem</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ecosystem.pillars.map((pillar, index) => (
                <Card key={pillar} variant="hover-lift" padding="md" className="text-center group">
                  <CardContent className="flex flex-col items-center">
                    <IconWrapper variant="primary" size="lg" className="mb-3 group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </IconWrapper>
                    <p className="text-neutral-700 font-medium">{pillar}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}