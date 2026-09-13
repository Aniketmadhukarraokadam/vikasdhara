import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionEyebrow } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { Link } from "react-router-dom";
import { volunteer } from "@/content";
import { icons, type IconName } from "@/assets/icons";

export function VolunteerPage() {
  const { volunteer: vol } = volunteer;

  return (
    <>
      <Section variant="xl" background="primary">
        <Container>
          <SectionHeader>
            <SectionEyebrow>Get Involved</SectionEyebrow>
            <SectionTitle>{vol.heading}</SectionTitle>
            <SectionSubtitle className="max-w-3xl mx-auto">{vol.intro}</SectionSubtitle>
          </SectionHeader>
        </Container>
      </Section>

      <Section variant="lg" background="none">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {vol.areas.map((area, index) => (
              <Card key={index} variant="hover-lift" padding="lg">
                <CardContent>
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-primary-700">{index + 1}</span>
                  </div>
                  <CardTitle>{area.title}</CardTitle>
                  <p className="text-neutral-600 text-sm mt-2">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary-50 rounded-2xl p-8 lg:p-12 border border-primary-100 mb-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-primary-900 mb-4">How to Volunteer</h3>
                <div className="space-y-4">
                  {vol.process.map((step, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-700 text-lg font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                      <span className="text-primary-800 font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary-900 mb-4">Why Volunteer With Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-primary-800">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Direct impact on communities in need
                  </li>
                  <li className="flex items-center gap-3 text-primary-800">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Flexible opportunities matching your skills
                  </li>
                  <li className="flex items-center gap-3 text-primary-800">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Professional development and networking
                  </li>
                  <li className="flex items-center gap-3 text-primary-800">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Certificate of contribution provided
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link to="/contact">{vol.cta.text}</Link>
            </Button>
            <p className="mt-4 text-neutral-600 text-sm">{vol.cta.description}</p>
          </div>
        </Container>
      </Section>

      <Section variant="lg" background="neutral">
        <Container>
          <SectionHeader className="text-left max-w-none mx-auto mb-12">
            <SectionEyebrow>Current Opportunities</SectionEyebrow>
            <SectionTitle>Featured Volunteer Roles</SectionTitle>
            <SectionSubtitle>
              Explore specific roles where your skills can make the most difference
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Digital Skills Trainer", location: "Remote / Hybrid", commitment: "4-6 hrs/week", type: "Skill Training" },
              { title: "Community Outreach Coordinator", location: "Nanded, Maharashtra", commitment: "8-10 hrs/week", type: "Field Outreach" },
              { title: "Content & Storytelling Volunteer", location: "Remote", commitment: "3-5 hrs/week", type: "Documentation" },
              { title: "Event Support Volunteer", location: "Multiple Locations", commitment: "Event-based", type: "Event Coordination" },
              { title: "Mentorship Programme Guide", location: "Remote / In-person", commitment: "2-4 hrs/month", type: "Career Guidance" },
              { title: "Environmental Activity Lead", location: "Maharashtra", commitment: "Weekend-based", type: "Environmental Activities" },
            ].map((role, index) => (
              <Card key={index} variant="hover-lift" padding="lg">
                <CardContent>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <CardTitle className="text-lg">{role.title}</CardTitle>
                      <Badge variant="primary" className="mt-2">{role.type}</Badge>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-neutral-600 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      <span>{role.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span>{role.commitment}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link to="/contact">Apply Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}