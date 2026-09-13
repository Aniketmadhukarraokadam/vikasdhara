import { Section, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { introduction } from "@/content";

export function Introduction() {
  const { introduction: intro } = introduction;

  return (
    <Section variant="default" background="none">
      <Container>
        <SectionHeader>
          <SectionTitle>{intro.heading}</SectionTitle>
        </SectionHeader>
        <div className="max-w-4xl mx-auto text-center">
          <SectionSubtitle className="text-base lg:text-lg text-neutral-700 whitespace-pre-line">
            {intro.copy}
          </SectionSubtitle>
        </div>
      </Container>
    </Section>
  );
}