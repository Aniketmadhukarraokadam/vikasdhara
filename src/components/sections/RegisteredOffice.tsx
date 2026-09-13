import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Link } from "react-router-dom";

export function RegisteredOffice() {
  return (
    <Section variant="default" background="sky" id="offices">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold text-primary-800 uppercase tracking-widest bg-primary-100/80 px-3.5 py-1.5 rounded-full mb-3">
            Presence & Locations
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight font-heading">
            Our Locations in Maharashtra
          </h2>
          <p className="text-neutral-600 mt-3 text-base sm:text-lg">
            Serving communities through our registered headquarters in Nanded and our regional coordination hub in Pune.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {/* Registered Office (Nanded) */}
          <div className="bg-white rounded-2xl p-8 border border-neutral-200/80 shadow-soft hover:shadow-card transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-28 h-28 bg-primary-50 rounded-bl-full -z-0 opacity-60" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary-100 text-primary-800 font-bold text-xs uppercase tracking-wider mb-4">
                <svg className="w-4 h-4 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Registered Trust Office
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Dharmabad, District Nanded
              </h3>
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
                Headquarters & Rural Implementation Hub
              </p>
              <address className="not-italic text-sm text-neutral-600 leading-relaxed space-y-1.5 mb-6">
                <p className="font-semibold text-neutral-800">VORTEXSOFT VIKASDHARA FOUNDATION</p>
                <p>Near Chhatrapati Shivaji Putla, Chondi, Post Jarikot,</p>
                <p>Taluka Dharmabad, District Nanded – 431808,</p>
                <p>Maharashtra, India.</p>
              </address>
            </div>
            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
              <a
                href="mailto:info@vikasdharafoundation.org"
                className="text-xs sm:text-sm font-semibold text-primary-800 hover:text-primary-600 flex items-center gap-1.5"
              >
                <svg className="w-4 h-4 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@vikasdharafoundation.org
              </a>
              <Link to="/contact" className="text-xs font-bold text-neutral-500 hover:text-primary-700">
                Directions →
              </Link>
            </div>
          </div>

          {/* Regional Coordination & Liaison (Pune) */}
          <div className="bg-white rounded-2xl p-8 border border-neutral-200/80 shadow-soft hover:shadow-card transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-50 rounded-bl-full -z-0 opacity-60" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-4">
                <svg className="w-4 h-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Regional Coordination & CSR Liaison
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Pune, Maharashtra
              </h3>
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
                State Outreach, CSR Partnerships & Tech Alliances
              </p>
              <address className="not-italic text-sm text-neutral-600 leading-relaxed space-y-1.5 mb-6">
                <p className="font-semibold text-neutral-800">VORTEXSOFT VIKASDHARA FOUNDATION — Pune</p>
                <p>Corporate CSR Collaborations, Skill Development Centres</p>
                <p>& Institutional Partnerships across Pune & Western Maharashtra,</p>
                <p>Maharashtra, India.</p>
              </address>
            </div>
            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
              <a
                href="mailto:partnerships@vikasdharafoundation.org"
                className="text-xs sm:text-sm font-semibold text-primary-800 hover:text-primary-600 flex items-center gap-1.5"
              >
                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2H-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                partnerships@vikasdharafoundation.org
              </a>
              <Link to="/pune-ngo" className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1">
                Explore Pune Hub →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}