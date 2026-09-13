import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionEyebrow } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { future } from "@/content";
import { icons, type IconName } from "@/assets/icons";

export function FutureVision() {
  const { futureVision, programmeFamilies } = future;

  return (
    <Section variant="lg" background="primary">
      <Container>
        <SectionHeader>
          <SectionEyebrow>Looking Ahead</SectionEyebrow>
          <SectionTitle>{futureVision.heading}</SectionTitle>
          <SectionSubtitle className="whitespace-pre-line">{futureVision.copy}</SectionSubtitle>
        </SectionHeader>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {futureVision.futureAreas.map((area, index) => (
            <Card key={index} variant="hover-lift" padding="md" className="group">
              <CardContent className="flex items-start gap-4">
                <IconWrapper variant="primary" size="md" className="flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                </IconWrapper>
                <p className="text-neutral-700 font-medium">{area}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-sm text-neutral-500 text-center italic max-w-2xl mx-auto mb-16">
          {futureVision.disclaimer}
        </p>

        <SectionHeader className="mb-8">
          <SectionEyebrow>Future Programme Architecture</SectionEyebrow>
          <SectionTitle>Programme Families in Development</SectionTitle>
          <SectionSubtitle>As the Foundation grows, we envision dedicated programme families for deeper impact</SectionSubtitle>
        </SectionHeader>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programmeFamilies.map((family, index) => (
            <Card key={family.name} variant="hover-lift" padding="lg" className="text-center group">
              <CardContent>
                <IconWrapper variant="primary" size="xl" className="mx-auto mb-4">
                  {icons[family.icon as IconName] || icons.book}
                </IconWrapper>
                <h3 className="text-lg font-semibold text-neutral-950 mb-1">{family.name}</h3>
                <p className="text-neutral-600 text-sm">{family.focus}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-sm text-neutral-500 text-center mt-8 italic">
          {future.note}
        </p>
      </Container>
    </Section>
  );
}