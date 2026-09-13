import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionEyebrow } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { Badge } from "@/components/ui/Badge";
import { about } from "@/content";
import { icons, type IconName } from "@/assets/icons";

import { SEO } from "@/components/seo/SEO";

export function About() {
  return (
    <>
      <SEO
        title="About Us | Vision, Trustees & Governance | VORTEXSOFT VIKASDHARA FOUNDATION"
        description="Learn about VORTEXSOFT VIKASDHARA FOUNDATION, a registered public charitable trust operating across Pune and Nanded, Maharashtra. Discover our founding vision, board of trustees, core values, and transparent institutional governance."
        keywords={[
          "About Vikasdhara Foundation",
          "Vortexsoft Vikasdhara Foundation Trustees",
          "Founder Anirudh Madhukarrao Kadam",
          "NGO in Pune",
          "NGO in Nanded Maharashtra",
          "Registered Public Charitable Trust Maharashtra",
          "Non-Profit Governance India",
          "CSR Partner NGO Pune",
          "Maharashtra NGO leadership"
        ]}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "About Us", item: "/about" }
        ]}
        faqs={[
          {
            question: "Who founded Vortexsoft Vikasdhara Foundation?",
            answer: "Vortexsoft Vikasdhara Foundation was founded and settled by Anirudh Madhukarrao Kadam along with co-trustees Dnyaneshvar Taterao Ballod and Sumit Balaji Jadhav, with a mandate to uplift underserved communities across Maharashtra."
          },
          {
            question: "What governance standards does the Foundation adhere to?",
            answer: "The Foundation is governed as a public charitable trust in Maharashtra with zero tolerance for corruption, statutory financial audits, published annual reports, and transparent fund allocation for both rural Marathwada and urban Pune programmes."
          }
        ]}
      />
      <Section variant="xl" background="sky">
        <Container>
          <SectionHeader>
            <SectionEyebrow>About Us</SectionEyebrow>
            <SectionTitle>{about.about.heading}</SectionTitle>
          </SectionHeader>
          <div className="max-w-4xl mx-auto text-center mt-8">
            <SectionSubtitle className="whitespace-pre-line text-base lg:text-lg">
              {about.about.copy}
            </SectionSubtitle>
          </div>
        </Container>
      </Section>

      <Section variant="lg" background="none">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <SectionHeader className="text-left mb-8">
                <SectionEyebrow>Our Vision</SectionEyebrow>
                <SectionTitle>{about.vision.heading}</SectionTitle>
              </SectionHeader>
              <p className="text-neutral-700 text-lg leading-relaxed whitespace-pre-line">
                {about.vision.statement}
              </p>
            </div>
            <div>
              <SectionHeader className="text-left mb-8">
                <SectionEyebrow>Our Mission</SectionEyebrow>
                <SectionTitle>{about.mission.heading}</SectionTitle>
              </SectionHeader>
              <p className="text-neutral-700 text-lg leading-relaxed whitespace-pre-line">
                {about.mission.statement}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="lg" background="neutral">
        <Container>
          <SectionHeader>
            <SectionEyebrow>Our Values</SectionEyebrow>
            <SectionTitle>What We Stand For</SectionTitle>
            <SectionSubtitle>
              Six core values guide everything we do
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {about.values.map((value, index) => (
              <Card key={value.title} variant="hover-lift" padding="lg" className="text-center group">
                <CardContent>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-primary-700">{index + 1}</span>
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="lg" background="none" id="leadership">
        <Container>
          <SectionHeader>
            <SectionEyebrow>Leadership</SectionEyebrow>
            <SectionTitle>Board of Trustees</SectionTitle>
            <SectionSubtitle>
              Our trustees bring diverse experience in community development, governance, and organisational leadership
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {about.leadership.map((leader) => (
              <Card key={leader.name} variant="hover-lift" padding="lg">
                <CardContent className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary-700">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{leader.name}</CardTitle>
                  <Badge variant="primary" className="mb-4">{leader.designation}</Badge>
                  <p className="text-neutral-600 text-sm mb-4">{leader.bio}</p>
                  <p className="text-neutral-500 text-xs">
                    <strong>Focus:</strong> {leader.areaOfResponsibility}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="lg" background="primary" id="governance">
        <Container>
          <SectionHeader>
            <SectionEyebrow>Governance</SectionEyebrow>
            <SectionTitle>Governance & Accountability</SectionTitle>
            <SectionSubtitle>
              We are committed to transparent, ethical, and effective governance
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {about.governance.principles.map((principle, index) => (
              <Card key={index} variant="hover-lift" padding="lg" className="group">
                <CardContent className="flex items-start gap-4">
                  <IconWrapper variant="primary" size="md" className="flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </IconWrapper>
                  <p className="text-neutral-700 font-medium">{principle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}