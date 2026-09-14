import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/utils/cn";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: t("Home", "मुख्यपृष्ठ"), href: "/" },
    {
      name: t("About", "संस्थेविषयी"),
      href: "/about",
      children: [
        { name: t("About the Foundation", "संस्थेचा परिचय"), desc: "Core identity, objectives & philosophy", href: "/about" },
        { name: t("Vision & Mission", "ध्येय व उद्दिष्टे"), desc: "Empowering communities across India", href: "/about#vision-mission" },
        { name: t("Our Values", "मूल्ये"), desc: "Dignity, opportunity & transparency", href: "/about#values" },
        { name: t("Board of Trustees", "विश्वस्त मंडळ"), desc: "Leadership and governance stewards", href: "/about#leadership" },
        { name: t("Governance & Disclosures", "प्रशासन व पारदर्शकता"), desc: "Statutory compliances and policies", href: "/transparency" },
      ],
    },
    {
      name: t("What We Do", "आमचे उपक्रम"),
      href: "/what-we-do",
      children: [
        { name: t("Education & Learning", "शिक्षण व अध्ययन"), desc: "Digital classrooms & rural schooling", href: "/what-we-do/education" },
        { name: t("Women's Education & Empowerment", "महिला सक्षमीकरण"), desc: "Vocational skills & micro-enterprise", href: "/what-we-do/womens-education" },
        { name: t("Skill Development", "कौशल्यविकास व प्रशिक्षण"), desc: "Youth IT, vocational & trades", href: "/what-we-do/skills" },
        { name: t("Employment & Placement", "रोजगार साहाय्य"), desc: "Job linkages and career mentoring", href: "/what-we-do/employment" },
        { name: t("Corporate CSR Projects", "कॉर्पोरेट सीएसआर प्रकल्प"), desc: "Schedule VII high-governance delivery", href: "/what-we-do/corporate-projects" },
        { name: t("Rural & Community Growth", "ग्रामीण व समुदाय विकास"), desc: "Integrated village infrastructure", href: "/what-we-do/rural" },
        { name: t("Animal Welfare & Gau Shala", "गोशाळा व प्राणी कल्याण"), desc: "Humane shelter & indigenous care", href: "/what-we-do/gau-shala" },
        { name: t("Environment & Ecology", "पर्यावरण संवर्धन"), desc: "Afforestation & clean energy", href: "/what-we-do/environment" },
      ],
    },
    { name: t("Impact", "प्रभाव"), href: "/impact" },
    { name: t("Blogs & Stories", "लेख व अनुभव"), href: "/blogs" },
    { name: t("FAQs", "प्रश्नोत्तरे"), href: "/frequently-asked-questions" },
    {
      name: t("Get Involved", "सहभागी व्हा"),
      href: "/get-involved/partner",
      children: [
        { name: t("Partner With Us (CSR)", "प्रकल्प भागीदारी (CSR)"), desc: "Collaborate on Schedule VII initiatives", href: "/get-involved/partner" },
        { name: t("Volunteer Opportunities", "स्वयंसेवक बना"), desc: "Join our field action teams", href: "/get-involved/volunteer" },
        { name: t("Support the Mission", "साहाय्य करा"), desc: "Contribute resources and dignity", href: "/get-involved/support" },
      ],
    },
    { name: t("Contact", "संपर्क"), href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href || (href !== "/" && location.pathname.startsWith(href));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Utility & Institutional Authority Bar */}
      <div className="bg-neutral-950 text-neutral-300 text-[11px] sm:text-xs py-1.5 border-b border-neutral-800/80 hidden md:block">
        <Container size="full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-neutral-200 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Public Charitable Trust • <strong>Nanded HQ & Pune Hub, Maharashtra</strong></span>
              </span>
              <span className="text-neutral-700">|</span>
              <span className="text-neutral-400 text-[11px] hidden lg:inline">
                {language === "mr" ? "समर्थ लोक • सक्षम समाज • समृद्ध भारत" : "From Need to Opportunity — Empowering People & Communities"}
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="mailto:info@vikasdharafoundation.org" 
                className="text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 text-[11.5px]"
              >
                <span>✉</span>
                <span>info@vikasdharafoundation.org</span>
              </a>

              {/* Language Switcher Button Group */}
              <div className="flex items-center bg-neutral-900 rounded-lg p-0.5 border border-neutral-700 text-[11px] font-bold">
                <button
                  onClick={() => setLanguage("en")}
                  className={cn(
                    "px-2.5 py-0.5 rounded-md transition-all",
                    language === "en" 
                      ? "bg-primary-600 text-white shadow-sm font-extrabold" 
                      : "text-neutral-400 hover:text-white"
                  )}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage("mr")}
                  className={cn(
                    "px-2.5 py-0.5 rounded-md transition-all",
                    language === "mr" 
                      ? "bg-primary-600 text-white shadow-sm font-extrabold" 
                      : "text-neutral-400 hover:text-white"
                  )}
                >
                  मराठी
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <nav
        className={cn(
          "transition-all duration-300",
          isScrolled 
            ? "bg-white/95 backdrop-blur-xl shadow-md shadow-neutral-900/5 border-b border-neutral-200/90 py-2.5" 
            : "bg-white/90 backdrop-blur-lg border-b border-neutral-200/70 py-3.5"
        )}
        aria-label="Main navigation"
      >
        <Container size="full">
          <div className="flex items-center justify-between gap-4">
            
            {/* Redesigned Brand Logo & Company Identity */}
            <Link 
              to="/" 
              className="flex items-center gap-3 sm:gap-3.5 flex-shrink-0 group" 
              aria-label="VORTEXSOFT VIKASDHARA FOUNDATION Home"
            >
              {/* Emblem Container with Glass Highlight */}
              <div className="relative p-1.5 sm:p-2 rounded-2xl bg-gradient-to-br from-white via-primary-50/50 to-primary-100/40 border border-primary-200/80 shadow-soft group-hover:shadow-md group-hover:border-primary-400 transition-all duration-300 flex items-center justify-center shrink-0">
                <img
                  src="/logo-icon.png"
                  alt="Vortexsoft Vikasdhara Foundation Emblem"
                  className="h-10 w-10 sm:h-12 sm:w-12 object-contain transition-transform duration-300 group-hover:scale-108"
                />
              </div>

              {/* Company Title Typography */}
              <div className="flex flex-col justify-center leading-none">
                <div className="flex items-center gap-1.5">
                  <span className="font-black text-[17px] sm:text-[20px] tracking-[0.04em] text-neutral-950 font-heading group-hover:text-primary-800 transition-colors">
                    VORTEXSOFT
                  </span>
                  <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-[10px] sm:text-[11.5px] font-extrabold tracking-[0.16em] text-primary-700 uppercase">
                    VIKASDHARA FOUNDATION
                  </span>
                </div>
                <span className="hidden lg:block text-[9px] font-bold tracking-wider text-neutral-500 uppercase mt-0.5">
                  Public Charitable Trust • Maharashtra
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center gap-1">
              {navigation.map((item) => (
                <DropdownItem key={item.name} item={item} isActive={isActive(item.href)} />
              ))}
            </div>

            {/* Desktop CTA & Quick Portal Buttons */}
            <div className="hidden lg:flex items-center gap-2.5">
              <Link to="/get-involved/partner">
                <Button 
                  size="sm" 
                  className="px-4.5 py-2.5 bg-gradient-to-r from-primary-700 via-primary-800 to-sky-700 hover:from-primary-800 hover:to-sky-800 text-white font-bold text-xs rounded-xl shadow-md shadow-primary-950/20 card-3d-hover flex items-center gap-1.5 border border-primary-500/30"
                >
                  <span>{t("Partner With Us", "प्रकल्प भागीदारी")}</span>
                  <span>→</span>
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button + Language Switcher */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                onClick={() => setLanguage(language === "en" ? "mr" : "en")}
                className="px-2.5 py-1 text-xs font-bold rounded-xl border border-neutral-300 bg-neutral-100 text-neutral-800 hover:bg-neutral-200 transition-colors"
              >
                {language === "en" ? "मराठी" : "EN"}
              </button>

              <button
                className="p-2 rounded-xl text-neutral-800 hover:bg-neutral-100 border border-neutral-200 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </Container>

        {/* Mobile Fullscreen Slide-Down Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-neutral-200/90 shadow-2xl animate-slide-down max-h-[85vh] overflow-y-auto">
            <Container className="py-6 space-y-5">
              <div className="p-3.5 bg-gradient-to-r from-primary-50 to-sky-50 rounded-2xl border border-primary-200/70 text-xs text-primary-950 flex items-center justify-between">
                <div>
                  <span className="font-bold block">VORTEXSOFT VIKASDHARA</span>
                  <span className="text-[11px] text-neutral-600">Regd. Office: Chondi, Nanded, Maharashtra</span>
                </div>
                <span className="text-base">📍</span>
              </div>

              <div className="space-y-1">
                {navigation.map((item) => (
                  <MobileDropdownItem 
                    key={item.name} 
                    item={item} 
                    isActive={isActive(item.href)} 
                    onNavigate={() => setMobileMenuOpen(false)} 
                  />
                ))}
              </div>

              <div className="pt-4 border-t border-neutral-200 grid grid-cols-2 gap-3">
                <Link
                  to="/get-involved/volunteer"
                  className="p-3 text-center rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-bold text-xs transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("Volunteer", "स्वयंसेवक बना")}
                </Link>
                <Link
                  to="/get-involved/partner"
                  className="p-3 text-center rounded-xl bg-primary-700 hover:bg-primary-800 text-white font-bold text-xs transition-colors shadow-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("Partner (CSR)", "प्रकल्प भागीदारी")}
                </Link>
              </div>
            </Container>
          </div>
        )}
      </nav>
    </header>
  );
}

function DropdownItem({ 
  item, 
  isActive 
}: { 
  item: { name: string; href: string; children?: { name: string; desc?: string; href: string }[] }; 
  isActive: boolean 
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        to={item.href}
        className={cn(
          "px-3.5 py-2 text-[13.5px] font-semibold rounded-xl transition-all duration-200",
          isActive 
            ? "text-primary-800 bg-primary-50 font-bold shadow-xs border border-primary-200/50" 
            : "text-neutral-700 hover:text-primary-800 hover:bg-neutral-100/80"
        )}
      >
        {item.name}
      </Link>
    );
  }

  return (
    <div 
      className="relative" 
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={cn(
          "flex items-center gap-1.5 px-3.5 py-2 text-[13.5px] font-semibold rounded-xl transition-all duration-200",
          isActive 
            ? "text-primary-800 bg-primary-50 font-bold shadow-xs border border-primary-200/50" 
            : "text-neutral-700 hover:text-primary-800 hover:bg-neutral-100/80"
        )}
        aria-expanded={isOpen}
      >
        <span>{item.name}</span>
        <svg 
          className={cn("w-3.5 h-3.5 opacity-60 transition-transform duration-200", isOpen && "rotate-180 opacity-100")} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full pt-2 w-80 animate-fade-in z-50">
          <div className="bg-white/98 backdrop-blur-2xl rounded-2xl shadow-2xl border border-neutral-200/80 p-2.5 space-y-1">
            {item.children.map((child) => (
              <Link
                key={child.name}
                to={child.href}
                className="block p-2.5 rounded-xl hover:bg-primary-50/80 transition-colors group"
              >
                <span className="block text-xs font-bold text-neutral-900 group-hover:text-primary-800 transition-colors">
                  {child.name}
                </span>
                {child.desc && (
                  <span className="block text-[11px] text-neutral-500 group-hover:text-neutral-600 mt-0.5 line-clamp-1">
                    {child.desc}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileDropdownItem({ 
  item, 
  isActive, 
  onNavigate 
}: { 
  item: { name: string; href: string; children?: { name: string; desc?: string; href: string }[] }; 
  isActive: boolean; 
  onNavigate: () => void 
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        to={item.href}
        onClick={onNavigate}
        className={cn(
          "block px-3.5 py-2.5 text-sm font-medium rounded-xl transition-colors",
          isActive ? "text-primary-800 bg-primary-50 font-bold" : "text-neutral-700 hover:bg-neutral-100"
        )}
      >
        {item.name}
      </Link>
    );
  }

  return (
    <div>
      <button
        className={cn(
          "flex items-center justify-between w-full px-3.5 py-2.5 text-sm font-medium rounded-xl transition-colors",
          isActive ? "text-primary-800 bg-primary-50 font-bold" : "text-neutral-700 hover:bg-neutral-100"
        )}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{item.name}</span>
        <svg className={cn("w-4 h-4 text-neutral-400 transition-transform duration-200", isOpen && "rotate-180")} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="ml-4 mt-1 space-y-1 pl-3 border-l-2 border-primary-200">
          {item.children.map((child) => (
            <Link
              key={child.name}
              to={child.href}
              onClick={onNavigate}
              className="block px-3 py-2 text-xs text-neutral-600 hover:text-primary-800 hover:bg-neutral-50 rounded-lg transition-colors"
            >
              <span className="font-bold block text-neutral-800">{child.name}</span>
              {child.desc && <span className="text-[10px] text-neutral-500">{child.desc}</span>}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}