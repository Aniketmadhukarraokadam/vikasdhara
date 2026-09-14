import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./Container";
import { useLanguage } from "@/context/LanguageContext";

const departmentContacts = [
  {
    titleEn: "Corporate CSR & Partnerships",
    titleMr: "कॉर्पोरेट CSR व संस्थागत भागीदारी",
    email: "partnerships@vikasdharafoundation.org",
    phone: "+91 91720 03414",
    descriptionEn: "For CSR grants, Schedule VII MCA project collaboration, and institutional proposals.",
    descriptionMr: "CSR अनुदान, कंपनी भागीदारी आणि संस्थागत विकास प्रकल्पांसाठी.",
    icon: (
      <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    titleEn: "Gau Shala & Animal Welfare Desk",
    titleMr: "गोशाळा व पशुकल्याण विभाग",
    email: "gaushala@vikasdharafoundation.org",
    phone: "+91 91720 03414",
    descriptionEn: "For indigenous cow sanctuary, fodder donation, veterinary medical camps, and animal care.",
    descriptionMr: "देशी गोवंश संगोपन, चारा दान, मोफत पशुवैद्यकीय शिबिरे आणि पशुकल्याण सेवा.",
    icon: (
      <span className="text-lg shrink-0 mt-0.5">🐄</span>
    ),
  },
  {
    titleEn: "Rural Education & Skills Hub",
    titleMr: "ग्रामीण शिक्षण व कौशल्य विकास",
    email: "education@vikasdharafoundation.org",
    phone: "+91 91720 03414",
    descriptionEn: "For digital smart classrooms, rural learning kits, vocational training, and student fellowships.",
    descriptionMr: "डिजिटल वर्गखोल्या, शैक्षणिक साहित्याचे वाटप, व्यावसायिक प्रशिक्षण व शिष्यवृत्ती.",
    icon: (
      <svg className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    titleEn: "Volunteer & Community Action",
    titleMr: "स्वयंसेवक व समाजकार्य समन्वय",
    email: "volunteer@vikasdharafoundation.org",
    phone: "+91 91720 03414",
    descriptionEn: "For field volunteers, community organizers, youth internships, and ground execution.",
    descriptionMr: "फील्ड स्वयंसेवक, युवा इंटर्नशिप आणि ग्रामीण सामाजिक उपक्रम.",
    icon: (
      <svg className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  }
];

export function Footer() {
  const { language, t } = useLanguage();
  const isMarathi = language === "mr";
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes("@")) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail("");
      setNewsletterSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-neutral-950 text-neutral-300 font-sans border-t border-neutral-800 relative overflow-hidden" role="contentinfo">
      {/* Background Decorative Mesh */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION 1: STATUTORY & QUICK CONNECT BANNER */}
      <div className="bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-950 border-b border-neutral-800/80 py-6">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* Statutory Numbers Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="bg-black/40 p-3 rounded-2xl border border-neutral-800">
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 block font-bold">
                  {isMarathi ? "नोंदणीकृत न्यास क्र." : "Trust Registration"}
                </span>
                <span className="font-extrabold text-white font-mono text-[11px] block mt-0.5">
                  MAH/NDD/TRUST/2026/0121
                </span>
                <span className="text-[9px] text-emerald-400 font-bold">Public Trust Act 1950</span>
              </div>

              <div className="bg-black/40 p-3 rounded-2xl border border-neutral-800">
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 block font-bold">
                  {isMarathi ? "MCA CSR-1 नोंदणी" : "MCA CSR-1 Registered"}
                </span>
                <span className="font-extrabold text-emerald-400 font-mono text-[11px] block mt-0.5">
                  CSR00098765
                </span>
                <span className="text-[9px] text-neutral-400 font-medium">Govt. of India (MCA)</span>
              </div>

              <div className="bg-black/40 p-3 rounded-2xl border border-neutral-800">
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 block font-bold">
                  {isMarathi ? "कर सवलत प्रमाणपत्र" : "Tax Exemption"}
                </span>
                <span className="font-extrabold text-sky-400 font-mono text-[11px] block mt-0.5">
                  Sec 12A & 80G Compliant
                </span>
                <span className="text-[9px] text-neutral-400 font-medium">Income Tax Act</span>
              </div>

              <div className="bg-black/40 p-3 rounded-2xl border border-neutral-800">
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 block font-bold">
                  {isMarathi ? "नीती आयोग NGO दर्पण" : "NITI Aayog Darpan"}
                </span>
                <span className="font-extrabold text-amber-400 font-mono text-[11px] block mt-0.5">
                  MH/2026/048912
                </span>
                <span className="text-[9px] text-neutral-400 font-medium">Verified NGO Portal</span>
              </div>
            </div>

            {/* Direct Connect Pills */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://wa.me/919172003414?text=Hello%20Vikasdhara%20Foundation%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20initiatives."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs tracking-wide shadow-lg shadow-emerald-950/50 transition-transform hover:scale-105 active:scale-95"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>{isMarathi ? "व्हॉट्सॲप थेट संपर्क" : "WhatsApp Inquiry"}</span>
              </a>

              <Link
                to="/get-involved/partner"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs tracking-wide border border-white/20 transition-all hover:border-white/40"
              >
                <span>{isMarathi ? "CSR भागीदारी प्रस्ताव" : "Submit CSR RFP"}</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <Container className="pt-16 pb-12 lg:pt-20 lg:pb-16">
        
        {/* SECTION 2: BRAND, DUAL OFFICES & DEPARTMENT CONTACTS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-neutral-800">
          
          {/* Brand & Address Column */}
          <div className="lg:col-span-6 space-y-6">
            <Link to="/" className="inline-block group" aria-label="Vortexsoft Vikasdhara Foundation Home">
              <div className="bg-white px-5 py-3 rounded-2xl inline-flex items-center shadow-lg transition-transform group-hover:scale-[1.02]">
                <img src="/logo.png" alt="Vortexsoft Vikasdhara Foundation" className="h-14 sm:h-16 w-auto object-contain" />
              </div>
            </Link>

            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight font-heading">
                VORTEXSOFT VIKASDHARA FOUNDATION
              </h2>
              <p className="text-emerald-400 font-bold text-sm sm:text-base mt-1.5">
                Empowering People. Strengthening Communities. Building a Better India.
              </p>
              <p className="text-neutral-400 text-xs mt-1 font-semibold">
                समर्थ लोक • सक्षम समाज • समृद्ध भारत • सार्वजनिक चॅरिटेबल ट्रस्ट
              </p>
            </div>

            {/* Primary Entity Statement */}
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed bg-neutral-900/90 p-4 rounded-2xl border border-neutral-800">
              VORTEXSOFT VIKASDHARA FOUNDATION is an authorized public charitable trust headquartered in Nanded with regional liaison operations in Pune, Maharashtra. We drive grassroots interventions in Gau Shala animal protection, smart rural education, women self-help micro-enterprises, solar village infrastructure, and youth employment facilitation.
            </p>

            {/* Dual Campus & Regional Office Locations */}
            <div className="grid sm:grid-cols-2 gap-4 pt-1 text-xs">
              {/* Registered HQ (Nanded) */}
              <div className="bg-neutral-900/80 p-3.5 rounded-2xl border border-neutral-800/90 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <span className="font-bold text-white text-xs">Registered Trust HQ & Rural Campus</span>
                </div>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  Near Chhatrapati Shivaji Putla, Chondi, Post Jarikot, Taluka Dharmabad, District Nanded – 431808, Maharashtra, India.
                </p>
                <div className="pt-1 flex items-center justify-between text-[10px]">
                  <span className="text-neutral-500 font-mono">GPS: 18.8977° N, 77.8504° E</span>
                  <a
                    href="https://maps.google.com/?q=Dharmabad+Nanded+Maharashtra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline font-bold"
                  >
                    View Map ↗
                  </a>
                </div>
              </div>

              {/* Regional Liaison Centre (Pune) */}
              <div className="bg-neutral-900/80 p-3.5 rounded-2xl border border-neutral-800/90 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0" />
                  <span className="font-bold text-white text-xs">Pune Regional & CSR Office</span>
                </div>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  Pune Regional Coordination & CSR Liaison Centre, Shivaji Nagar / Hinjewadi Corridor, Pune – 411001, Maharashtra, India.
                </p>
                <div className="pt-1 flex items-center justify-between text-[10px]">
                  <span className="text-neutral-500 font-mono">GPS: 18.5204° N, 73.8567° E</span>
                  <a
                    href="https://maps.google.com/?q=Pune+Maharashtra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:underline font-bold"
                  >
                    View Map ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Department Contact Cards Column */}
          <div className="lg:col-span-6 space-y-3.5">
            <div className="flex items-center justify-between">
              <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-bold">
                {isMarathi ? "अधिकृत संपर्क व विभाग प्रमुख" : "Departmental Desk & Direct Helplines"}
              </h3>
              <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                Helpline: +91 91720 03414
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {departmentContacts.map((dept, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-900/80 border border-neutral-800 hover:border-emerald-500/40 rounded-2xl p-3.5 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      {dept.icon}
                      <h4 className="font-bold text-white text-xs">
                        {isMarathi ? dept.titleMr : dept.titleEn}
                      </h4>
                    </div>
                    <a
                      href={`mailto:${dept.email}`}
                      className="text-emerald-400 hover:text-emerald-300 font-semibold text-[11px] block transition-colors truncate"
                    >
                      {dept.email}
                    </a>
                    <p className="text-[11px] text-neutral-400 leading-relaxed line-clamp-2">
                      {isMarathi ? dept.descriptionMr : dept.descriptionEn}
                    </p>
                  </div>
                  <div className="pt-2 mt-2 border-t border-neutral-800/80 flex items-center justify-between text-[10px]">
                    <a href={`tel:${dept.phone}`} className="text-neutral-300 hover:text-white font-mono">
                      📞 {dept.phone}
                    </a>
                    <a
                      href={`https://wa.me/919172003414?text=Hello%20${encodeURIComponent(dept.titleEn)}%20Desk%2C%20I%20have%20an%20inquiry.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline font-bold"
                    >
                      Chat ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter / CSR Bulletin Subscription */}
            <div className="bg-gradient-to-r from-neutral-900 to-neutral-850 p-4 rounded-2xl border border-neutral-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>📰</span>
                  <span>{isMarathi ? "मासिक प्रगती अहवाल व CSR बुलेटिन" : "Quarterly Impact & CSR Bulletin"}</span>
                </span>
                <span className="text-[10px] text-neutral-400">Zero spam guarantee</span>
              </div>
              <p className="text-[11px] text-neutral-400">
                Receive ground-level audits, village transformation photos, and audited transparency updates directly in your mailbox.
              </p>
              {newsletterSubscribed ? (
                <div className="p-2 bg-emerald-900/40 border border-emerald-500/40 rounded-xl text-xs text-emerald-300 font-bold text-center">
                  ✓ Thank you! You are subscribed to the Vikasdhara Impact Dispatch.
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2 pt-1">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your official email address..."
                    className="flex-1 px-3 py-2 text-xs rounded-xl bg-black/50 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-colors shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* SECTION 3: NAVIGATION PILLARS & IMPACT HUBS */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-8 py-10 border-b border-neutral-800 text-xs sm:text-sm">
          
          {/* Pillar 1: Focus Programmes */}
          <div>
            <h3 className="font-extrabold text-white uppercase text-xs mb-3 border-l-2 border-emerald-500 pl-2">
              Core Focus Areas
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/what-we-do/gau-shala" className="text-neutral-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"><span>🐄</span><span>Gau Shala Sanctuary</span></Link></li>
              <li><Link to="/what-we-do/rural" className="text-neutral-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"><span>🌾</span><span>Village Transformation</span></Link></li>
              <li><Link to="/what-we-do/education" className="text-neutral-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"><span>🎓</span><span>Smart Digital Schools</span></Link></li>
              <li><Link to="/what-we-do/womens-education" className="text-neutral-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"><span>👩‍🌾</span><span>Women SHGs & Micro-Biz</span></Link></li>
              <li><Link to="/what-we-do/skills" className="text-neutral-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"><span>💻</span><span>IT & Vocational Labs</span></Link></li>
              <li><Link to="/what-we-do/employment" className="text-neutral-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"><span>💼</span><span>Youth ATS Employment</span></Link></li>
            </ul>
          </div>

          {/* Pillar 2: About & Trust */}
          <div>
            <h3 className="font-extrabold text-white uppercase text-xs mb-3 border-l-2 border-primary-500 pl-2">
              About The Trust
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/about" className="text-neutral-400 hover:text-white transition-colors">About Vikasdhara</Link></li>
              <li><Link to="/about#vision-mission" className="text-neutral-400 hover:text-white transition-colors">Vision & Core Creed</Link></li>
              <li><Link to="/about#leadership" className="text-neutral-400 hover:text-white transition-colors">Board of Trustees</Link></li>
              <li><Link to="/pune-ngo" className="text-neutral-400 hover:text-white transition-colors">Pune Regional Office</Link></li>
              <li><Link to="/transparency" className="text-neutral-400 hover:text-white transition-colors">Trust Deed & Registration</Link></li>
              <li><Link to="/frequently-asked-questions" className="text-neutral-400 hover:text-white transition-colors">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          {/* Pillar 3: Corporate CSR & Grants */}
          <div>
            <h3 className="font-extrabold text-white uppercase text-xs mb-3 border-l-2 border-amber-500 pl-2">
              Corporate CSR
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/get-involved/partner" className="text-neutral-400 hover:text-amber-400 transition-colors">CSR Grant Partnership</Link></li>
              <li><Link to="/what-we-do/corporate-projects" className="text-neutral-400 hover:text-amber-400 transition-colors">MCA Schedule VII Projects</Link></li>
              <li><Link to="/impact" className="text-neutral-400 hover:text-amber-400 transition-colors">5-Stage Impact Metrics</Link></li>
              <li><Link to="/transparency#policies" className="text-neutral-400 hover:text-amber-400 transition-colors">Statutory Audit Reports</Link></li>
              <li><Link to="/contact" className="text-neutral-400 hover:text-amber-400 transition-colors">Schedule CSR Field Visit</Link></li>
            </ul>
          </div>

          {/* Pillar 4: Media & Stories */}
          <div>
            <h3 className="font-extrabold text-white uppercase text-xs mb-3 border-l-2 border-sky-500 pl-2">
              Stories & Media
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/blogs" className="text-neutral-400 hover:text-sky-400 transition-colors font-bold text-sky-400">Field Insights & Blogs ↗</Link></li>
              <li><a href="#videos" className="text-neutral-400 hover:text-white transition-colors">Cinematic Video Showcase</a></li>
              <li><Link to="/get-involved/volunteer" className="text-neutral-400 hover:text-white transition-colors">Volunteer & Fellowship</Link></li>
              <li><Link to="/get-involved/support" className="text-neutral-400 hover:text-white transition-colors">Support & 80G Tax Benefits</Link></li>
              <li><Link to="/contact" className="text-neutral-400 hover:text-white transition-colors">Official Contact Desk</Link></li>
            </ul>
          </div>

          {/* Pillar 5: Governance & Admin */}
          <div>
            <h3 className="font-extrabold text-white uppercase text-xs mb-3 border-l-2 border-purple-500 pl-2">
              Governance & Admin
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/transparency" className="text-neutral-400 hover:text-white transition-colors">Annual Disclosures</Link></li>
              <li><Link to="/transparency#policies" className="text-neutral-400 hover:text-white transition-colors">POSH & Child Safety</Link></li>
              <li><Link to="/transparency#policies" className="text-neutral-400 hover:text-white transition-colors">Whistleblower Policy</Link></li>
              <li>
                <Link
                  to="/admin"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-emerald-400 font-extrabold border border-neutral-700 transition-all text-xs"
                >
                  <span>🔒</span>
                  <span>Admin Console</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION 4: STATUTORY DISCLAIMERS & COPYRIGHT */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-xs text-neutral-400">
          <div className="space-y-1">
            <p className="font-extrabold text-neutral-200">
              © 2026 VORTEXSOFT VIKASDHARA FOUNDATION. All Rights Reserved.
            </p>
            <p className="text-neutral-500 text-[11px]">
              Registered Public Charitable Trust under Maharashtra Public Trusts Act, 1950 • Established 11 September 2026 • Headquarters: Dharmabad, Nanded | Regional Office: Pune, Maharashtra, India.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px]">
            <Link to="/transparency" className="hover:text-white transition-colors">
              Statutory Disclosures
            </Link>
            <span className="text-neutral-700">•</span>
            <Link to="/transparency#policies" className="hover:text-white transition-colors">
              Privacy & Data Policy
            </Link>
            <span className="text-neutral-700">•</span>
            <Link to="/frequently-asked-questions" className="hover:text-white transition-colors">
              FAQs
            </Link>
            <span className="text-neutral-700">•</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Office Locations
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}