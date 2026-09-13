import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionEyebrow } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { impact, stories } from "@/content";
import { icons, type IconName } from "@/assets/icons";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

export function Impact() {
  return (
    <Section variant="lg" background="neutral">
      <Container>
        <SectionHeader>
          <SectionEyebrow>Results</SectionEyebrow>
          <SectionTitle>Our Impact</SectionTitle>
          <SectionSubtitle>{impact.impact.subheading}</SectionSubtitle>
        </SectionHeader>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {impact.impact.metrics.slice(0, 8).map((metric, index) => (
            <Card key={metric.label} variant="hover-lift" padding="lg" className="text-center">
              <CardContent className="pt-2">
                <IconWrapper variant="primary" size="lg" className="mx-auto mb-4">
                  {icons[metric.icon as IconName] || icons.book}
                </IconWrapper>
                <div className="text-3xl lg:text-4xl font-bold text-primary-700 mb-1" data-count="0">
                  —
                </div>
                <p className="text-neutral-600 text-sm font-medium">{metric.label}</p>
                <p className="text-neutral-500 text-xs mt-1 line-clamp-2">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-16">
          <Button variant="outline" size="lg" asChild>
            <Link to="/impact">View Full Impact Dashboard</Link>
          </Button>
        </div>

        <SectionHeader className="mb-8">
          <SectionEyebrow>From the Field</SectionEyebrow>
          <SectionTitle>Stories from the Field</SectionTitle>
          <SectionSubtitle>Real people. Real change. Real impact.</SectionSubtitle>
        </SectionHeader>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stories.stories.map((story) => (
            <Link key={story.id} to={`/impact/stories/${story.id}`} className="group">
              <Card variant="hover-lift" padding="none" className="h-full overflow-hidden">
                <div className="aspect-video bg-neutral-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 to-accent-100/50" aria-hidden="true" />
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm">
                    {story.image}
                  </div>
                  <Badge variant="primary" className="absolute top-4 left-4 z-10">
                    {story.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
                    <span>{story.location}</span>
                    <span>•</span>
                    <span>{story.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-950 mb-2 line-clamp-2 group-hover:text-primary-700 transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed line-clamp-2">
                    {story.excerpt}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button variant="ghost" size="lg" asChild>
            <Link to="/impact/stories">{stories.cta.text}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}