import { Section, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/Card";

export function IndiaIdentity() {
  return (
    <Section variant="lg" background="none">
      <Container>
        <SectionHeader>
          <SectionTitle>Serving Communities Across India</SectionTitle>
          <SectionSubtitle className="max-w-3xl mx-auto text-center">
            India is a country of extraordinary diversity. Our work is grounded in the idea that service can bring people together across language, region, culture, community and background. The Foundation's programmes should remain inclusive, respectful and focused on public benefit.
          </SectionSubtitle>
        </SectionHeader>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card variant="bordered" padding="lg">
            <CardContent className="text-center">
              <h3 className="text-lg font-semibold text-neutral-950 mb-3">Inclusive Representation</h3>
              <ul className="space-y-2 text-sm text-neutral-600 text-left">
                <li className="flex items-center gap-2">✓ Maharashtra as visual starting point</li>
                <li className="flex items-center gap-2">✓ Rural and urban India</li>
                <li className="flex items-center gap-2">✓ Different Indian languages</li>
                <li className="flex items-center gap-2">✓ Diverse Indian people</li>
                <li className="flex items-center gap-2">✓ Different age groups</li>
                <li className="flex items-center gap-2">✓ Community participation</li>
              </ul>
            </CardContent>
          </Card>

          <Card variant="bordered" padding="lg">
            <CardContent className="text-center">
              <h3 className="text-lg font-semibold text-neutral-950 mb-3">What We Avoid</h3>
              <ul className="space-y-2 text-sm text-neutral-600 text-left">
                <li className="flex items-center gap-2">✗ Political maps or slogans</li>
                <li className="flex items-center gap-2">✗ Communal messaging</li>
                <li className="flex items-center gap-2">✗ Religious superiority</li>
                <li className="flex items-center gap-2">✗ Stereotypes</li>
                <li className="flex items-center gap-2">✗ Poverty exploitation</li>
                <li className="flex items-center gap-2">✗ Foreign-looking environments</li>
              </ul>
            </CardContent>
          </Card>

          <Card variant="bordered" padding="lg">
            <CardContent className="text-center">
              <h3 className="text-lg font-semibold text-neutral-950 mb-3">Core Principle</h3>
              <p className="text-neutral-700 text-base leading-relaxed font-medium">
                "Service before identity. People from different Indian backgrounds can be shown together in classrooms, training centres, community meals, employment programmes, environmental work, volunteer activities, and rural development."
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}