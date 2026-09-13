import { Link } from "react-router-dom";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function NotFound() {
  return (
    <Section variant="xl" background="primary" className="flex items-center justify-center min-h-[60vh]">
      <Container>
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary-700 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-neutral-950 mb-4">Page Not Found</h2>
          <p className="text-neutral-600 text-lg mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/">Go Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}