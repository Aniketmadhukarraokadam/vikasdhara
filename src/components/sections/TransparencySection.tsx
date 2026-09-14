import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionEyebrow } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { transparency } from "@/content";

export function TransparencySection() {
  const { transparency: trans } = transparency;

  return (
    <Section variant="lg" background="none">
      <Container>
        <SectionHeader>
          <SectionEyebrow>Accountability</SectionEyebrow>
          <SectionTitle>Transparency & Accountability</SectionTitle>
          <SectionSubtitle>
            We believe trust is earned through openness. Access our key documents, reports, and governance information.
          </SectionSubtitle>
        </SectionHeader>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {trans.sections.slice(0, 6).map((section) => (
            <Link key={section.id} to="/transparency" className="group">
              <Card variant="hover-lift" padding="lg" className="h-full">
                <CardContent>
                  <h3 className="text-lg font-semibold text-neutral-950 mb-2 group-hover:text-primary-700 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4">{section.description}</p>
                  <div className="space-y-2">
                    {section.items.slice(0, 3).map((item, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <span className="text-neutral-700">{item.label || item}</span>
                        <span className="text-neutral-400">
                          {item.status || item.href ? "Available" : "Coming soon"}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/transparency">
            <Button variant="primary" size="lg" className="font-bold shadow-md">
              View Full Transparency Page →
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}