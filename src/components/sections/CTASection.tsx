import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

export function CTASection() {
  const ctas = [
    { text: "Volunteer With Us", href: "/get-involved/volunteer", variant: "outline" as const, description: "Give your time and skills to create opportunities" },
    { text: "Partner With Us", href: "/get-involved/partner", variant: "primary" as const, description: "Collaborate on projects that create measurable impact" },
    { text: "Support the Mission", href: "/get-involved/support", variant: "secondary" as const, description: "Contribute resources to strengthen our programmes" },
  ];

  return (
    <Section variant="lg" background="neutral">
      <Container>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 text-center">
          {ctas.map((cta) => (
            <div key={cta.href} className="p-6 lg:p-8 bg-white rounded-2xl border border-neutral-100 shadow-soft hover:shadow-card hover:border-neutral-200 transition-all">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-950 mb-2">{cta.text}</h3>
              <p className="text-neutral-600 text-sm mb-6">{cta.description}</p>
              <Button variant={cta.variant} size="md" asChild className="w-full">
                <Link to={cta.href}>Get Started</Link>
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}