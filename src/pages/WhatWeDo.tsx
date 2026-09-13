import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionEyebrow } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { Badge } from "@/components/ui/Badge";
import { Link } from "react-router-dom";
import { programmes } from "@/content";
import { icons, type IconName } from "@/assets/icons";

const categories = [
  { id: "education", title: "Education & Learning", slug: "education", description: "Supporting access to education and learning opportunities for all." },
  { id: "womens-education", title: "Women's Education & Empowerment", slug: "womens-education", description: "Creating pathways for women and girls to access learning and opportunities." },
  { id: "skills", title: "Skills for the Future", slug: "skills", description: "Helping people build practical skills for employability and livelihood." },
  { id: "employment", title: "Employment & Livelihood", slug: "employment", description: "Connecting training and opportunity through employability and placement support." },
  { id: "corporate-projects", title: "Corporate & Institutional Partnerships", slug: "corporate-projects", description: "Partnering with companies and institutions for socially beneficial projects." },
  { id: "humanitarian", title: "Food, Care & Human Dignity", slug: "humanitarian", description: "Supporting people facing difficult circumstances with dignity." },
  { id: "shelter", title: "Shelter, Rest & Community Support", slug: "shelter", description: "Supporting safe, dignified spaces for people in need." },
  { id: "elderly-care", title: "Care With Dignity", slug: "elderly-care", description: "Supporting elderly people with dignity, companionship and care." },
  { id: "health", title: "Health Awareness & Community Wellbeing", slug: "health", description: "Promoting health awareness and preventive community wellbeing." },
  { id: "rural", title: "Stronger Villages, Stronger Communities", slug: "rural", description: "Strengthening communities through practical development initiatives." },
  { id: "disaster-relief", title: "Responding When Communities Need Support", slug: "disaster-relief", description: "Supporting relief and rehabilitation during disasters and emergencies." },
  { id: "environment", title: "Protecting the Environment Around Us", slug: "environment", description: "Encouraging environmental responsibility through community participation." },
  { id: "animal-welfare", title: "Compassion Beyond People", slug: "animal-welfare", description: "Supporting responsible animal welfare and community initiatives." },
  { id: "gau-shala", title: "Gau Seva & Animal Care", slug: "gau-shala", description: "Supporting responsible cattle-care and Gau Shala initiatives." },
];

export function WhatWeDoPage() {
  return (
    <>
      <Section variant="xl" background="primary">
        <Container>
          <SectionHeader>
            <SectionEyebrow>Our Programmes</SectionEyebrow>
            <SectionTitle>What We Do</SectionTitle>
            <SectionSubtitle>
              Our work is designed around real community needs. Programmes may be implemented directly by the Foundation or through lawful partnerships, projects, institutions, companies, government bodies, NGOs, professionals and community organisations, subject to applicable requirements.
            </SectionSubtitle>
          </SectionHeader>
        </Container>
      </Section>

      <Section variant="lg" background="none">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => {
              const programme = programmes.programmes.find(p => p.id === category.id);
              return (
                <Link key={category.id} to={`/what-we-do/${category.slug}`} className="group">
                  <Card variant="hover-lift" padding="lg" className="h-full">
                    <IconWrapper
                      variant={(programme?.iconVariant as "primary" | "accent" | "warm" | "neutral") || "primary"}
                      size="lg"
                      className="mb-4 group-hover:scale-110 transition-transform duration-300"
                    >
                      {icons[(programme?.icon as IconName) || "book"] || icons.book}
                    </IconWrapper>
                    <h3 className="text-xl font-semibold text-neutral-950 mb-2 group-hover:text-primary-700 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-neutral-600 mb-4 leading-relaxed line-clamp-2">
                      {category.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-700 group-hover:gap-3 transition-all">
                      Explore
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section variant="lg" background="neutral">
        <Container>
          <SectionHeader className="text-left max-w-none mx-auto mb-12">
            <SectionEyebrow>How We Work</SectionEyebrow>
            <SectionTitle>From Need to Opportunity</SectionTitle>
            <SectionSubtitle>
              A systematic approach to turning community needs into sustainable opportunities
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid lg:grid-cols-5 gap-6">
            {programmes.approach.steps.map((step, index) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-700">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-950 mb-2">{step.title}</h3>
                <p className="text-neutral-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}