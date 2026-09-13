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
import { SEO } from "@/components/seo/SEO";

export function ProgrammeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const programme = programmes.programmes.find(p => p.slug === slug);

  if (!programme) {
    return (
      <Section variant="xl" background="sky">
        <Container>
          <div className="text-center py-20">
            <h1 className="text-3xl font-semibold text-neutral-950 mb-4">Programme Not Found</h1>
            <p className="text-neutral-600 mb-8">The programme you're looking for doesn't exist.</p>
            <Link to="/what-we-do">
              <Button>Back to All Programmes</Button>
            </Link>
          </div>
        </Container>
      </Section>
    );
  }

  const programmeKeywords = [
    `${programme.title} NGO Maharashtra`,
    `${programme.title} Pune`,
    "Vortexsoft Vikasdhara Foundation",
    "NGO in Pune",
    "NGO in Nanded",
    "CSR Programmes Maharashtra",
    "Community Development India"
  ];

  const programmeFaqs = [
    {
      question: `What is the objective of the ${programme.title} initiative?`,
      answer: programme.description
    },
    {
      question: `How can organizations or volunteers support the ${programme.title} initiative?`,
      answer: `Individuals can volunteer as trainers or field coordinators, while corporations can support this initiative through CSR sponsorship under Schedule VII. Contact partnerships@vikasdharafoundation.org.`
    }
  ];

  return (
    <>
      <SEO
        title={`${programme.title} | VORTEXSOFT VIKASDHARA FOUNDATION (Pune & Maharashtra)`}
        description={`${programme.description} Learn how VORTEXSOFT VIKASDHARA FOUNDATION implements ${programme.title} across communities in Pune, Nanded, and Maharashtra.`}
        keywords={programmeKeywords}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "What We Do", item: "/what-we-do" },
          { name: programme.title, item: `/what-we-do/${programme.slug}` }
        ]}
        faqs={programmeFaqs}
      />

      <Section variant="xl" background="sky">
        <Container>
          <SectionHeader>
            <SectionEyebrow>Community Initiative</SectionEyebrow>
            <SectionTitle>{programme.title}</SectionTitle>
            <SectionSubtitle className="max-w-3xl mx-auto">{programme.description}</SectionSubtitle>
          </SectionHeader>
        </Container>
      </Section>

      <Section variant="lg" background="none">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-8">
              <Card variant="bordered" padding="lg" className="shadow-soft">
                <CardHeader>
                  <CardTitle>Possible Activities & Scope</CardTitle>
                  <CardDescription>Programmes may include, but are not limited to:</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {programme.possibleActivities.map((activity, index) => (
                      <li key={index} className="flex items-start gap-3 text-neutral-700">
                        <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {programme.importantNote && (
                <Card variant="bordered" padding="lg" className="bg-primary-50/70 border-primary-200">
                  <CardHeader>
                    <CardTitle className="text-primary-950 text-lg">Institutional Note</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary-900 text-sm leading-relaxed">{programme.importantNote}</p>
                  </CardContent>
                </Card>
              )}

              {programme.visualDirection && (
                <Card variant="bordered" padding="lg" className="bg-emerald-50/70 border-emerald-200">
                  <CardHeader>
                    <CardTitle className="text-emerald-950 text-lg">Implementation Context</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-emerald-900 text-sm leading-relaxed">{programme.visualDirection}</p>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="space-y-6">
              <Card variant="bordered" padding="lg" className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-base">Programme Overview</CardTitle>
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
                    <p className="text-neutral-600 text-sm">{programme.shortDescription}</p>
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered" padding="lg" className="space-y-3 shadow-soft">
                <Link to="/get-involved/partner" className="block">
                  <Button size="lg" className="w-full">
                    Partner on This Programme
                  </Button>
                </Link>
                <Link to="/get-involved/volunteer" className="block">
                  <Button variant="outline" size="lg" className="w-full">
                    Volunteer for This
                  </Button>
                </Link>
                <Link to="/contact" className="block">
                  <Button variant="ghost" size="lg" className="w-full">
                    Enquire Now
                  </Button>
                </Link>
              </Card>

              <Card variant="bordered" padding="lg" className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-base">Related Initiatives</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {programmes.programmes
                      .filter(p => p.id !== programme.id)
                      .slice(0, 4)
                      .map((related) => (
                        <li key={related.id}>
                          <Link to={`/what-we-do/${related.slug}`} className="text-xs sm:text-sm text-neutral-700 hover:text-primary-700 transition-colors flex items-center gap-2 py-1">
                            <span className="text-primary-600 shrink-0">→</span>
                            <span className="font-medium">{related.title}</span>
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