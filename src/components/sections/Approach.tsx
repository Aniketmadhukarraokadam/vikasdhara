import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionEyebrow } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { programmes } from "@/content";
import { icons, type IconName } from "@/assets/icons";

export function Approach() {
  const { approach } = programmes;

  return (
    <Section variant="lg" background="primary">
      <Container>
        <SectionHeader>
          <SectionEyebrow>Our Methodology</SectionEyebrow>
          <SectionTitle>{approach.title}</SectionTitle>
          <SectionSubtitle>
            A systematic approach to turning community needs into sustainable opportunities
          </SectionSubtitle>
        </SectionHeader>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-primary-200 -translate-x-1/2" aria-hidden="true" />

          <div className="grid lg:grid-cols-5 gap-8 relative z-10">
            {approach.steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <IconWrapper
                      variant="primary"
                      size="xl"
                      className="relative z-10 bg-white shadow-soft ring-4 ring-white"
                    >
                      {icons[step.number as IconName] || (
                        <span className="text-3xl font-bold text-primary-700">{step.number}</span>
                      )}
                    </IconWrapper>
                    <span className="absolute -top-2 -right-2 text-4xl lg:text-5xl font-bold text-primary-100 font-heading">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-950 mb-2">{step.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{step.description}</p>
                </div>

                {index < approach.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[80px] left-full w-full h-px bg-primary-200" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}