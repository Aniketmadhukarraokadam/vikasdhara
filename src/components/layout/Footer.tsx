import { Link } from "react-router-dom";
import { Container } from "./Container";
import { useLanguage } from "@/context/LanguageContext";

const departmentContacts = [
  {
    title: "Partnerships & Projects",
    email: "partnerships@vikasdharafoundation.org",
    description: "For companies, CSR organisations, institutions and project collaborations.",
    icon: (
      <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Volunteers & Community",
    email: "volunteer@vikasdharafoundation.org",
    description: "For volunteering, field participation and community action.",
    icon: (
      <svg className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "General Inquiries",
    email: "info@vikasdharafoundation.org",
    description: "For general questions, information requests and statutory communications.",
    icon: (
      <svg className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-neutral-950 text-neutral-300 font-sans border-t border-neutral-800" role="contentinfo">
      <Container className="pt-16 pb-12 lg:pt-20 lg:pb-16">
        {/* Top Section: Brand & Entity Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-neutral-800">
          {/* Brand & Address Column */}
          <div className="lg:col-span-7 space-y-6">
            <Link to="/" className="inline-block group" aria-label="Vortexsoft Vikasdhara Foundation Home">
              <div className="bg-white px-5 py-3 rounded-2xl inline-flex items-center shadow-lg transition-transform group-hover:scale-[1.02]">
                <img src="/logo.png" alt="Vortexsoft Vikasdhara Foundation" className="h-14 sm:h-16 w-auto object-contain" />
              </div>
            </Link>

            <div>
              <h2 className="text-xl font-bold text-white tracking-tight font-heading">
                VORTEXSOFT VIKASDHARA FOUNDATION
              </h2>
              <p className="text-primary-400 font-medium text-sm sm:text-base mt-1.5">
                Empowering People. Strengthening Communities. Building a Better India.
              </p>
              <p className="text-neutral-400 text-xs mt-1">
                समर्थ लोक • सक्षम समाज • समृद्ध भारत
              </p>
            </div>

            {/* Primary Entity Statement (§3) */}
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed bg-neutral-900/80 p-4 rounded-xl border border-neutral-800/80">
              VORTEXSOFT VIKASDHARA FOUNDATION is a public charitable trust based in Nanded, Maharashtra, India, working across India in education, skill development, employment, livelihood, women’s education and empowerment, humanitarian support, community development, environmental initiatives and animal welfare.
            </p>

            <div className="space-y-3 pt-1 text-xs sm:text-sm text-neutral-400">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <span className="text-neutral-200 font-medium block">Registered Office:</span>
                  Near Chhatrapati Shivaji Putla, Chondi, Post Jarikot,<br />
                  Taluka Dharmabad, District Nanded – 431808, Maharashtra, India.
                </div>
              </div>

              <div className="flex items-start gap-3 pt-1">
                <svg className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <span className="text-neutral-200 font-medium block">Official Communications:</span>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mt-0.5">
                    <a href="mailto:info@vikasdharafoundation.org" className="hover:text-primary-400 transition-colors">
                      info@vikasdharafoundation.org
                    </a>
                    <span className="text-neutral-600">·</span>
                    <a href="mailto:contact@vikasdharafoundation.org" className="hover:text-primary-400 transition-colors">
                      contact@vikasdharafoundation.org
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Department Contact Cards Column */}
          <div className="lg:col-span-5 space-y-3.5">
            <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
              Official Contact Channels
            </h3>

            <div className="space-y-3">
              {departmentContacts.map((dept) => (
                <div
                  key={dept.title}
                  className="bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 rounded-xl p-4 transition-all"
                >
                  <div className="flex items-start gap-3">
                    {dept.icon}
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-xs sm:text-sm">
                        {dept.title}
                      </h4>
                      <a
                        href={`mailto:${dept.email}`}
                        className="text-primary-400 hover:text-primary-300 font-medium text-xs block mt-0.5 transition-colors"
                      >
                        {dept.email}
                      </a>
                      <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                        {dept.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Section: Navigation Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 py-10 border-b border-neutral-800 text-xs sm:text-sm">
          {/* About */}
          <div>
            <h3 className="font-semibold text-white uppercase mb-3 border-l-2 border-primary-500 pl-2">
              About
            </h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-neutral-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blogs" className="text-neutral-400 hover:text-white transition-colors">Blogs & Field Insights</Link></li>
              <li><Link to="/about#vision-mission" className="text-neutral-400 hover:text-white transition-colors">Vision & Mission</Link></li>
              <li><Link to="/about#leadership" className="text-neutral-400 hover:text-white transition-colors">Board of Trustees</Link></li>
              <li><Link to="/transparency" className="text-neutral-400 hover:text-white transition-colors">Governance & Reports</Link></li>
              <li><Link to="/frequently-asked-questions" className="text-neutral-400 hover:text-white transition-colors">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h3 className="font-semibold text-white uppercase mb-3 border-l-2 border-emerald-500 pl-2">
              Programmes
            </h3>
            <ul className="space-y-2">
              <li><Link to="/what-we-do/education" className="text-neutral-400 hover:text-white transition-colors">Education & Learning</Link></li>
              <li><Link to="/what-we-do/womens-education" className="text-neutral-400 hover:text-white transition-colors">Women's Education</Link></li>
              <li><Link to="/what-we-do/skills" className="text-neutral-400 hover:text-white transition-colors">Skill Development</Link></li>
              <li><Link to="/what-we-do/employment" className="text-neutral-400 hover:text-white transition-colors">Employment Support</Link></li>
              <li><Link to="/what-we-do/rural" className="text-neutral-400 hover:text-white transition-colors">Rural & Community</Link></li>
              <li><Link to="/what-we-do/gau-shala" className="text-neutral-400 hover:text-white transition-colors">Gau Shala & Animal Care</Link></li>
            </ul>
          </div>

          {/* Partnerships & Get Involved */}
          <div>
            <h3 className="font-semibold text-white uppercase mb-3 border-l-2 border-amber-500 pl-2">
              Get Involved
            </h3>
            <ul className="space-y-2">
              <li><Link to="/get-involved/partner" className="text-neutral-400 hover:text-white transition-colors">Partner With Us (CSR)</Link></li>
              <li><Link to="/what-we-do/corporate-projects" className="text-neutral-400 hover:text-white transition-colors">Corporate Projects</Link></li>
              <li><Link to="/get-involved/volunteer" className="text-neutral-400 hover:text-white transition-colors">Volunteer Opportunities</Link></li>
              <li><Link to="/get-involved/support" className="text-neutral-400 hover:text-white transition-colors">Support the Mission</Link></li>
              <li><Link to="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Transparency & Legal */}
          <div>
            <h3 className="font-semibold text-white uppercase mb-3 border-l-2 border-sky-500 pl-2">
              Transparency
            </h3>
            <ul className="space-y-2">
              <li><Link to="/transparency" className="text-neutral-400 hover:text-white transition-colors">Annual Disclosures</Link></li>
              <li><Link to="/transparency#policies" className="text-neutral-400 hover:text-white transition-colors">Trust Deed & Policies</Link></li>
              <li><Link to="/impact" className="text-neutral-400 hover:text-white transition-colors">Impact & Methodology</Link></li>
              <li><Link to="/admin" className="text-primary-400 hover:text-primary-300 font-semibold transition-colors">🔒 Admin Console</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-neutral-400">
          <div>
            <p className="font-semibold text-neutral-300">
              © 2026 VORTEXSOFT VIKASDHARA FOUNDATION. All Rights Reserved.
            </p>
            <p className="text-neutral-500 mt-0.5">
              Public Charitable Trust • Established 11 September 2026 • Nanded, Maharashtra, India
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link to="/transparency" className="hover:text-white transition-colors">
              Trustee Disclosures
            </Link>
            <span>•</span>
            <Link to="/frequently-asked-questions" className="hover:text-white transition-colors">
              FAQs
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}