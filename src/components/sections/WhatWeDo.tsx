import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionEyebrow } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { programmes } from "@/content";
import { icons, type IconName } from "@/assets/icons";

const mainProgrammes = programmes.programmes.filter(p =>
  ["education", "womens-education", "skills", "employment"].includes(p.id)
);

export function WhatWeDo() {
  return (
    <Section variant="lg" background="neutral">
      <Container>
        <SectionHeader>
          <SectionEyebrow>Our Work</SectionEyebrow>
          <SectionTitle>What We Do</SectionTitle>
          <SectionSubtitle>
            Our work is designed around real community needs. Programmes may be implemented directly by the Foundation or through lawful partnerships, projects, institutions, companies, government bodies, NGOs, professionals and community organisations, subject to applicable requirements.
          </SectionSubtitle>
        </SectionHeader>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainProgrammes.map((programme) => (
            <Link key={programme.id} to={`/what-we-do/${programme.slug}`} className="group">
              <Card variant="hover-lift" padding="lg" className="h-full">
                <IconWrapper
                  variant={programme.iconVariant as "primary" | "accent" | "warm" | "neutral"}
                  size="lg"
                  className="mb-4 group-hover:scale-110 transition-transform duration-300"
                >
                  {icons[programme.icon as IconName] || icons.book}
                </IconWrapper>
                <h3 className="text-xl font-semibold text-neutral-950 mb-2 group-hover:text-primary-700 transition-colors">
                  {programme.title}
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed line-clamp-3">
                  {programme.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-700 group-hover:gap-3 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/what-we-do">View All Programmes</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}