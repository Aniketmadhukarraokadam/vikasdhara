import { useParams } from "react-router-dom";
import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionEyebrow } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { programmes } from "@/content";
import { icons, type IconName } from "@/assets/icons";

export function ProgrammeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const programme = programmes.programmes.find(p => p.slug === slug);

  if (!programme) {
    return (
      <Section variant="xl" background="primary">
        <Container>
          <div className="text-center py-20">
            <h1 className="text-3xl font-semibold text-neutral-950 mb-4">Programme Not Found</h1>
            <p className="text-neutral-600 mb-8">The programme you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/what-we-do">Back to All Programmes</Link>
            </Button>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <>
      <Section variant="xl" background="primary">
        <Container>
          <SectionHeader>
            <SectionEyebrow>Our Programmes</SectionEyebrow>
            <SectionTitle>{programme.title}</SectionTitle>
            <SectionSubtitle className="max-w-3xl mx-auto">{programme.description}</SectionSubtitle>
          </SectionHeader>
        </Container>
      </Section>

      <Section variant="lg" background="none">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-8">
              <Card variant="bordered" padding="lg">
                <CardHeader>
                  <CardTitle>Possible Activities</CardTitle>
                  <CardDescription>Programmes may include, but are not limited to:</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {programme.possibleActivities.map((activity, index) => (
                      <li key={index} className="flex items-start gap-3 text-neutral-700">
                        <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {programme.importantNote && (
                <Card variant="bordered" padding="lg" className="bg-primary-50 border-primary-100">
                  <CardHeader>
                    <CardTitle className="text-primary-900">Important Note</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary-800">{programme.importantNote}</p>
                  </CardContent>
                </Card>
              )}

              {programme.visualDirection && (
                <Card variant="bordered" padding="lg" className="bg-warm-50 border-warm-100">
                  <CardHeader>
                    <CardTitle className="text-warm-900">Visual Direction</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-warm-800">{programme.visualDirection}</p>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="space-y-6">
              <Card variant="bordered" padding="lg">
                <CardHeader>
                  <CardTitle>Programme Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center">
                    <IconWrapper
                      variant={(programme.iconVariant as "primary" | "accent" | "warm" | "neutral") || "primary"}
                      size="xl"
                    >
                      {icons[(programme.icon as IconName) || "book"] || icons.book}
                    </IconWrapper>
                  </div>
                  <div className="text-center space-y-2">
                    <Badge variant={(programme.iconVariant as "primary" | "accent" | "warm" | "neutral") || "primary"}>
                      {programme.title}
                    </Badge>
                    <p className="text-neutral-600">{programme.shortDescription}</p>
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered" padding="lg">
                <CardContent className="space-y-4">
                  <Button size="lg" asChild className="w-full">
                    <Link to="/get-involved/partner">Partner on This Programme</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="w-full">
                    <Link to="/get-involved/volunteer">Volunteer for This Programme</Link>
                  </Button>
                  <Button variant="ghost" size="lg" asChild className="w-full">
                    <Link to="/contact">Enquire About This Programme</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card variant="bordered" padding="lg">
                <CardHeader>
                  <CardTitle>Related Programmes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {programmes.programmes
                      .filter(p => p.id !== programme.id)
                      .slice(0, 4)
                      .map((related) => (
                        <li key={related.id}>
                          <Link to={`/what-we-do/${related.slug}`} className="text-sm text-neutral-700 hover:text-primary-700 transition-colors flex items-center gap-2">
                            {icons[(related.icon as IconName) || "book"] || icons.book}
                            <span>{related.title}</span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}