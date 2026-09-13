import { Link } from "react-router-dom";
import { Container } from "./Container";

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
    title: "Careers & Opportunities",
    email: "careers@vikasdharafoundation.org",
    description: "For employment, internships and organisational opportunities.",
    icon: (
      <svg className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Volunteers",
    email: "volunteer@vikasdharafoundation.org",
    description: "For volunteering, community participation and field activities.",
    icon: (
      <svg className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const navigationLinks = {
  about: {
    title: "About Us",
    links: [
      { name: "About the Foundation", href: "/about" },
      { name: "Vision & Mission", href: "/about#vision-mission" },
      { name: "Our Values", href: "/about#values" },
      { name: "Founder & Trustees", href: "/about#leadership" },
      { name: "Governance", href: "/about#governance" },
    ],
  },
  work: {
    title: "Our Work",
    links: [
      { name: "Education", href: "/what-we-do/education" },
      { name: "Women Empowerment", href: "/what-we-do/womens-education" },
      { name: "Skill Development", href: "/what-we-do/skills" },
      { name: "Employment & Placement", href: "/what-we-do/employment" },
      { name: "Corporate Projects", href: "/what-we-do/corporate-projects" },
      { name: "Rural Development", href: "/what-we-do/rural" },
      { name: "Health Awareness", href: "/what-we-do/health" },
      { name: "Food & Humanitarian Support", href: "/what-we-do/humanitarian" },
      { name: "Elderly Care", href: "/what-we-do/elderly-care" },
      { name: "Environment", href: "/what-we-do/environment" },
      { name: "Animal Welfare", href: "/what-we-do/animal-welfare" },
      { name: "Gau Seva", href: "/what-we-do/gau-shala" },
    ],
  },
  getInvolved: {
    title: "Get Involved",
    links: [
      { name: "Volunteer", href: "/get-involved/volunteer" },
      { name: "Partner With Us", href: "/get-involved/partner" },
      { name: "Corporate / CSR Partnership", href: "/what-we-do/corporate-projects" },
      { name: "Support Our Work", href: "/get-involved/support" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  transparency: {
    title: "Transparency",
    links: [
      { name: "Annual Reports", href: "/transparency#reports" },
      { name: "Financial Information", href: "/transparency#financials" },
      { name: "Trust Documents", href: "/transparency#trust-docs" },
      { name: "Policies", href: "/transparency#policies" },
      { name: "Governance", href: "/about#governance" },
    ],
  },
};

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { name: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { name: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { name: "YouTube", href: "https://youtube.com", icon: "youtube" },
];

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 font-sans border-t border-neutral-800" role="contentinfo">
      <Container className="pt-16 pb-12 lg:pt-20 lg:pb-16">
        {/* Top Section: Brand & Key Department Inquiries */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-800">
          {/* Brand & Address Column */}
          <div className="lg:col-span-6 space-y-6">
            <Link to="/" className="inline-block group" aria-label="Vortexsoft Vikasdhara Foundation Home">
              <div className="bg-white px-5 py-3 rounded-2xl inline-flex items-center shadow-lg transition-transform group-hover:scale-[1.02]">
                <img src="/logo.png" alt="Vortexsoft Vikasdhara Foundation" className="h-14 sm:h-16 w-auto object-contain" />
              </div>
            </Link>

            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                VORTEXSOFT VIKASDHARA FOUNDATION
              </h2>
              <p className="text-primary-400 font-medium text-sm sm:text-base mt-1.5">
                Empowering People. Strengthening Communities. Building a Better India.
              </p>
            </div>

            <div className="space-y-3 pt-2 text-sm text-neutral-400">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <span className="text-neutral-200 font-medium block">Registered Office:</span>
                  Near Chhatrapati Shivaji Putla, Chondi, Post Jarikot,<br />
                  Taluka Dharmabad, District Nanded – 431808,<br />
                  Maharashtra, India.
                </div>
              </div>

              <div className="flex items-start gap-3 pt-1">
                <svg className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <span className="text-neutral-200 font-medium block">General Contact & Inquiries:</span>
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

              <div className="flex items-center gap-3 pt-1">
                <svg className="w-5 h-5 text-neutral-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <div>
                  <span className="text-neutral-200 font-medium mr-1.5">Website:</span>
                  <a href="https://www.vikasdharafoundation.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                    www.vikasdharafoundation.org
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold block mb-3">Connect With Us</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 hover:bg-neutral-850 transition-all"
                    aria-label={social.name}
                  >
                    <SocialIcon name={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Department Contact Cards Column */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
              Department Contact & Collaborations
            </h3>

            <div className="grid grid-cols-1 gap-3.5">
              {departmentContacts.map((dept) => (
                <div
                  key={dept.title}
                  className="bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 rounded-xl p-4 transition-all duration-200 hover:bg-neutral-900"
                >
                  <div className="flex items-start gap-3">
                    {dept.icon}
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-sm sm:text-base">
                        {dept.title}
                      </h4>
                      <a
                        href={`mailto:${dept.email}`}
                        className="text-primary-400 hover:text-primary-300 font-medium text-xs sm:text-sm block mt-0.5 transition-colors"
                      >
                        {dept.email}
                      </a>
                      <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                        {dept.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Section: 4-Column Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 py-12 border-b border-neutral-800">
          {/* About Us */}
          <nav aria-label="About Us">
            <h3 className="font-semibold text-white text-sm sm:text-base tracking-wide uppercase text-neutral-200 mb-4 border-l-2 border-primary-500 pl-2.5">
              {navigationLinks.about.title}
            </h3>
            <ul className="space-y-2.5">
              {navigationLinks.about.links.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors block py-0.5">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Our Work */}
          <nav aria-label="Our Work">
            <h3 className="font-semibold text-white text-sm sm:text-base tracking-wide uppercase text-neutral-200 mb-4 border-l-2 border-emerald-500 pl-2.5">
              {navigationLinks.work.title}
            </h3>
            <ul className="space-y-2.5">
              {navigationLinks.work.links.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors block py-0.5">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Get Involved */}
          <nav aria-label="Get Involved">
            <h3 className="font-semibold text-white text-sm sm:text-base tracking-wide uppercase text-neutral-200 mb-4 border-l-2 border-amber-500 pl-2.5">
              {navigationLinks.getInvolved.title}
            </h3>
            <ul className="space-y-2.5">
              {navigationLinks.getInvolved.links.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors block py-0.5">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Transparency */}
          <nav aria-label="Transparency">
            <h3 className="font-semibold text-white text-sm sm:text-base tracking-wide uppercase text-neutral-200 mb-4 border-l-2 border-sky-500 pl-2.5">
              {navigationLinks.transparency.title}
            </h3>
            <ul className="space-y-2.5">
              {navigationLinks.transparency.links.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors block py-0.5">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-neutral-300">
                © 2026 VORTEXSOFT VIKASDHARA FOUNDATION. All Rights Reserved.
              </p>
              <p className="text-xs text-neutral-500 mt-1">
                Public Charitable Trust | Maharashtra, India
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-400">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-neutral-700">·</span>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
              <span className="text-neutral-700">·</span>
              <Link to="/disclaimer" className="hover:text-white transition-colors">
                Disclaimer
              </Link>
              <span className="text-neutral-700">·</span>
              <Link to="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* Trust Notice Bar */}
      <div className="bg-neutral-900/60 border-t border-neutral-800/80 py-3.5" aria-hidden="true">
        <Container className="text-center">
          <p className="text-xs text-neutral-500 leading-relaxed max-w-5xl mx-auto">
            VORTEXSOFT VIKASDHARA FOUNDATION is registered as a Public Charitable Trust under applicable laws in Maharashtra, India.
            All programmes, donations, volunteer engagements, and corporate partnerships operate in compliance with statutory guidelines and institutional governance standards.
          </p>
        </Container>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, JSX.Element> = {
    twitter: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
    linkedin: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
      </svg>
    ),
    facebook: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.772-3.89 1.074 0 2.234.195 2.234.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
    instagram: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 1.75C17.658 1.75 22.25 6.342 22.25 12S17.658 22.25 12 22.25 1.75 17.658 1.75 12 6.342 1.75 12 1.75zm0 1.5C9.01 3.25 5.75 6.51 5.75 10s3.26 6.75 7.25 6.75 7.25-3.26 7.25-7.25S14.99 3.25 12 3.25zm7.081 1.31c-.127-.756-.65-1.36-1.27-1.49-.5-.11-3.407-.126-4.561-.126-1.153 0-4.06.016-4.561.126-.62.13-1.143.734-1.27 1.49-.088.555-.1.3.935-.11 3.87-.13 4.705-.107 5.447.02.782.16.802.717.935 1.31zm-7.081 3.75c0-2.384 1.932-4.315 4.315-4.315 2.383 0 4.315 1.932 4.315 4.315S15.766 18.5 13.383 18.5 9.068 16.567 9.068 14.184zM16.25 7.232c-1.27 0-2.3 1.03-2.3 2.3s1.03 2.3 2.3 2.3 2.3-1.03 2.3-2.3-1.03-2.3-2.3-2.3z" clipRule="evenodd" />
      </svg>
    ),
    youtube: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M23.11 8.38c-.31-1.14-1.44-1.98-2.64-1.72-1.58.34-7.74.87-11.47.87-3.73 0-9.89-.53-11.47-.87-1.2-.26-2.33.58-2.64 1.72C.31 9.42 0 10.57 0 12s.31 2.58.82 3.62c.31 1.14 1.44 1.98 2.64 1.72 1.58-.34 7.74-.87 11.47-.87 3.73 0 9.89.53 11.47.87 1.2.26 2.33-.58 2.64-1.72.5-1.04.81-2.19.81-3.62s-.31-2.58-.81-3.62zm-12.11 4.12v-5.5l4.77 2.75-4.77 2.75z" clipRule="evenodd" />
      </svg>
    ),
  };
  return icons[name] || null;
}