import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { brand } from "@/content";

export function RegisteredOffice() {
  const { registeredOffice } = brand;

  return (
    <Section variant="sm" background="primary">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold text-neutral-950 mb-4">
              Our Registered Office
            </h3>
            <address className="not-italic text-neutral-600 leading-relaxed space-y-2">
              <p className="font-semibold text-neutral-900">{registeredOffice.name}</p>
              <p>{registeredOffice.address}</p>
            </address>
          </div>
          <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden border border-neutral-200 relative">
            <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm">
              <p className="text-center px-8">Map Placeholder<br /><span className="text-xs">Google Maps embed for registered office</span></p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/90 to-transparent pointer-events-none" aria-hidden="true" />
          </div>
        </div>
      </Container>
    </Section>
  );
}