import { Link } from "react-router-dom";
import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionEyebrow } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { SEO } from "@/components/seo/SEO";

const puneFocusAreas = [
  {
    icon: (
      <svg className="w-6 h-6 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Youth Tech & Vocational Skills",
    desc: "Empowering college students, underprivileged youth, and job seekers in Pune with digital literacy, programming foundations, AI tools, and employment interview readiness."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Women Empowerment & Micro-Enterprise",
    desc: "Supporting women from peri-urban and rural Pune with self-help group mentorship, digital financial inclusion, artisanal training, and entrepreneurship bootcamps."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2H-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Corporate CSR Implementation",
    desc: "Partnering with Pune's premier IT, automotive, and manufacturing hubs (Hinjewadi, Magarpatta, Chakan, Talegaon, Kharadi) for measurable Schedule VII CSR impact."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Pune-to-Rural Bridge",
    desc: "Connecting urban corporate resources, volunteers, and technical expertise from Pune to transformative grassroots development across rural Maharashtra."
  }
];

const puneFaqs = [
  {
    question: "Why is Vortexsoft Vikasdhara Foundation recognized as a top NGO in Pune?",
    answer: "Vortexsoft Vikasdhara Foundation stands out in Pune due to its transparent governance, institutional CSR partnerships with major tech corridors (Hinjewadi, Kharadi, Magarpatta), and outcome-driven programs in youth employment, digital skilling, women's empowerment, and animal welfare."
  },
  {
    question: "What corporate CSR services does the Foundation provide in Pune?",
    answer: "For corporate partners in Pune, the Foundation offers end-to-end CSR implementation under Companies Act 2013: baseline needs assessments, project design, compliant fund allocation, milestone-based execution, and third-party impact reporting."
  },
  {
    question: "How can students and professionals in Pune volunteer with the Foundation?",
    answer: "Professionals and college students in Pune can join our active volunteer network as tech mentors, career counselors, weekend tutors, event leads, or environmental sustainability champions."
  },
  {
    question: "Where is the Pune coordination office located?",
    answer: "Our Regional Coordination & CSR Liaison Centre operates in Pune, Maharashtra. To schedule an institutional meeting or project discussion, write to partnerships@vikasdharafoundation.org or call our liaison desk."
  }
];

export function PuneNGO() {
  return (
    <>
      <SEO
        title="Top NGO in Pune | VORTEXSOFT VIKASDHARA FOUNDATION | CSR & Skill Development Hub"
        description="VORTEXSOFT VIKASDHARA FOUNDATION is a premier registered public charitable trust and NGO in Pune, Maharashtra. Partnering with Pune corporates for CSR, youth digital skills, women empowerment, and community development across Western Maharashtra."
        keywords={[
          "NGO in Pune",
          "Top NGO in Pune",
          "Best NGO in Pune",
          "Skill Development NGO Pune",
          "Women Empowerment NGO Pune",
          "CSR implementation agency Pune",
          "Registered Charity Pune",
          "Pune NGO list",
          "NGO in Hinjewadi",
          "NGO in Pune Maharashtra",
          "Vortexsoft Vikasdhara Foundation Pune",
          "80G 12A NGO Pune",
          "Corporate CSR Partner Pune",
          "Volunteer NGO Pune"
        ]}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Pune NGO Hub", item: "/pune-ngo" }
        ]}
        faqs={puneFaqs}
        geoCity="Pune"
      />

      {/* Hero Section */}
      <Section variant="xl" background="sky" className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 via-emerald-500/5 to-transparent pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 text-emerald-800 text-xs sm:text-sm font-bold tracking-wide uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              Pune Regional Coordination & CSR Hub
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight font-heading leading-tight">
              Leading Public Charitable NGO in <span className="text-primary-700">Pune, Maharashtra</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              <strong>VORTEXSOFT VIKASDHARA FOUNDATION</strong> drives scalable social impact by bridging Pune’s thriving technology and corporate ecosystem with grassroots community transformation across Maharashtra.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link to="/get-involved/partner">
                <Button size="lg" className="shadow-elevated px-8">
                  Partner With Us in Pune
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="bg-white">
                  Contact Pune Liaison
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Trust Badges */}
      <section className="bg-white border-y border-neutral-200 py-6">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl lg:text-3xl font-extrabold text-primary-800 font-heading">Regd. Trust</div>
              <p className="text-xs sm:text-sm font-medium text-neutral-600 mt-1">Maharashtra Public Trust Act</p>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-extrabold text-emerald-700 font-heading">Schedule VII</div>
              <p className="text-xs sm:text-sm font-medium text-neutral-600 mt-1">CSR Compliant Execution</p>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-extrabold text-accent-700 font-heading">14+</div>
              <p className="text-xs sm:text-sm font-medium text-neutral-600 mt-1">Socio-Economic Programmes</p>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-extrabold text-primary-900 font-heading">Dual Hubs</div>
              <p className="text-xs sm:text-sm font-medium text-neutral-600 mt-1">Pune & Nanded Presence</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Pune Strategic Focus Areas */}
      <Section variant="lg" background="none">
        <Container>
          <SectionHeader>
            <SectionEyebrow>Strategic Impact in Pune</SectionEyebrow>
            <SectionTitle>Our Key Initiatives in the Pune Region</SectionTitle>
            <SectionSubtitle className="max-w-3xl mx-auto">
              How our Pune coordination hub delivers sustainable change for youth, women, corporations, and communities.
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {puneFocusAreas.map((area, idx) => (
              <Card key={idx} variant="bordered" padding="lg" className="hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <IconWrapper size="md" variant={idx % 2 === 0 ? "primary" : "emerald"}>
                      {area.icon}
                    </IconWrapper>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">{area.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Corporate CSR in Pune Showcase */}
      <Section variant="lg" background="emerald">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100 px-3.5 py-1.5 rounded-full">
                Corporate CSR Solutions
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight font-heading">
                The Preferred CSR Partner for Pune’s Enterprise & Tech Hubs
              </h2>
              <p className="text-neutral-700 leading-relaxed text-base">
                Pune is Maharashtra’s powerhouse for information technology, automobile engineering, and innovation. We work directly with CSR heads, ESG directors, and foundation trustees across <strong>Hinjewadi Phase 1-3, Magarpatta City, EON Kharadi, Pimpri-Chinchwad, and Talegaon</strong>.
              </p>
              
              <ul className="space-y-3 text-sm text-neutral-700">
                <li className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>100% Transparent Utilization:</strong> Real-time project tracking, photo documentation, and itemized expenditure reports.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Turnkey CSR Lifecycle:</strong> From baseline village surveys to final independent impact audits.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Employee Volunteering Days:</strong> Structured corporate volunteering camps in education, skilling, and tree plantation.</span>
                </li>
              </ul>

              <div className="pt-2">
                <Link to="/get-involved/partner">
                  <Button variant="emerald" size="lg">
                    Explore CSR Collaboration Framework
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-emerald-200/80 shadow-soft space-y-6">
              <h3 className="text-xl font-bold text-neutral-900 border-b border-neutral-100 pb-3">
                Pune Regional Coordination Desk
              </h3>
              
              <div className="space-y-4 text-sm text-neutral-600">
                <div>
                  <span className="font-semibold text-neutral-800 block text-xs uppercase tracking-wider text-primary-700">Operational Scope</span>
                  <p>Pune Metropolitan Region (PMRDA), Pimpri-Chinchwad, Hinjewadi, Kharadi, and Western Maharashtra Outreach.</p>
                </div>
                <div>
                  <span className="font-semibold text-neutral-800 block text-xs uppercase tracking-wider text-primary-700">CSR Direct Email</span>
                  <a href="mailto:partnerships@vikasdharafoundation.org" className="text-primary-700 font-bold hover:underline">
                    partnerships@vikasdharafoundation.org
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-neutral-800 block text-xs uppercase tracking-wider text-primary-700">General Inquiries</span>
                  <a href="mailto:info@vikasdharafoundation.org" className="text-primary-700 hover:underline">
                    info@vikasdharafoundation.org
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-neutral-800 block text-xs uppercase tracking-wider text-primary-700">Registered Headquarters</span>
                  <p>Dharmabad, District Nanded – 431808, Maharashtra.</p>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100">
                <Link to="/contact">
                  <Button variant="primary" className="w-full">
                    Schedule a Consultation in Pune
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* AEO / Answer Engine Q&A Section */}
      <Section variant="lg" background="none">
        <Container>
          <SectionHeader>
            <SectionEyebrow>Frequently Answered Questions</SectionEyebrow>
            <SectionTitle>About Our Pune Operations & Non-Profit Mission</SectionTitle>
            <SectionSubtitle className="max-w-3xl mx-auto">
              Direct, verified factual answers about Vortexsoft Vikasdhara Foundation's work in Pune and Maharashtra.
            </SectionSubtitle>
          </SectionHeader>

          <div className="max-w-3xl mx-auto space-y-4">
            {puneFaqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-neutral-200/80 shadow-soft">
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Strip */}
      <Section variant="default" background="dark">
        <Container className="text-center text-white py-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-4">
            Join the Movement for an Empowered Maharashtra
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto text-sm sm:text-base mb-6">
            Whether you are a Pune-based corporate partner, university student, or civic volunteer, there is a meaningful place for you in our mission.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/get-involved/volunteer">
              <Button variant="saffron" size="lg">
                Volunteer in Pune
              </Button>
            </Link>
            <Link to="/get-involved/partner">
              <Button variant="outline" size="lg" className="text-white border-white/40 hover:bg-white/10">
                Corporate CSR Inquiry
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
