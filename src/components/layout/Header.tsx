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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: t("Home", "मुख्यपृष्ठ"), href: "/" },
    {
      name: t("About", "संस्थेविषयी"),
      href: "/about",
      children: [
        { name: t("About the Foundation", "संस्थेचा परिचय"), href: "/about" },
        { name: t("Vision & Mission", "ध्येय व उद्दिष्टे"), href: "/about#vision-mission" },
        { name: t("Our Values", "मूल्ये"), href: "/about#values" },
        { name: t("Board of Trustees", "विश्वस्त मंडळ"), href: "/about#leadership" },
        { name: t("Governance & Transparency", "प्रशासन व पारदर्शकता"), href: "/transparency" },
      ],
    },
    {
      name: t("What We Do", "आमचे उपक्रम"),
      href: "/what-we-do",
      children: [
        { name: t("Education & Learning", "शिक्षण व अध्ययन"), href: "/what-we-do/education" },
        { name: t("Women's Education & Empowerment", "महिला शिक्षण व सक्षमीकरण"), href: "/what-we-do/womens-education" },
        { name: t("Skill Development", "कौशल्यविकास व प्रशिक्षण"), href: "/what-we-do/skills" },
        { name: t("Employment & Placement Support", "रोजगार व प्लेसमेंट साहाय्य"), href: "/what-we-do/employment" },
        { name: t("Corporate & Institutional Projects", "कॉर्पोरेट व संस्थात्मक प्रकल्प"), href: "/what-we-do/corporate-projects" },
        { name: t("Food & Humanitarian Support", "अन्न व मानवतावादी मदत"), href: "/what-we-do/humanitarian" },
        { name: t("Elderly Care", "ज्येष्ठ नागरिकांची काळजी"), href: "/what-we-do/elderly-care" },
        { name: t("Health Awareness", "आरोग्य जनजागृती"), href: "/what-we-do/health" },
        { name: t("Rural & Community Development", "ग्रामीण व समुदाय विकास"), href: "/what-we-do/rural" },
        { name: t("Environment & Sustainability", "पर्यावरण व संवर्धन"), href: "/what-we-do/environment" },
        { name: t("Animal Welfare & Gau Shala", "प्राणी कल्याण व गोशाळा"), href: "/what-we-do/gau-shala" },
      ],
    },
    { name: t("Impact", "प्रभाव व अहवाल"), href: "/impact" },
    { name: t("FAQs", "प्रश्नोत्तरे"), href: "/frequently-asked-questions" },
    {
      name: t("Get Involved", "सहभागी व्हा"),
      href: "/get-involved/partner",
      children: [
        { name: t("Partner With Us", "प्रकल्प भागीदारी (CSR)"), href: "/get-involved/partner" },
        { name: t("Volunteer Opportunities", "स्वयंसेवक बना"), href: "/get-involved/volunteer" },
        { name: t("Support the Mission", "साहाय्य करा"), href: "/get-involved/support" },
      ],
    },
    { name: t("Contact", "संपर्क"), href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href || (href !== "/" && location.pathname.startsWith(href));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Institutional Banner */}
      <div className="bg-primary-950 text-neutral-300 text-[11px] sm:text-xs py-1.5 border-b border-primary-900/60 hidden md:block">
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-neutral-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Public Charitable Trust • <strong>Nanded, Maharashtra</strong></span>
              </span>
              <span className="text-primary-700">•</span>
              <span className="text-neutral-300 hidden lg:inline">
                {language === "mr" ? "समर्थ लोक • सक्षम समाज • समृद्ध भारत" : "Empowering People. Strengthening Communities. Building a Better India."}
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="mailto:info@vikasdharafoundation.org" className="hover:text-white transition-colors">
                ✉️ info@vikasdharafoundation.org
              </a>

              {/* Language Switcher */}
              <div className="flex items-center bg-primary-900/80 rounded-md p-0.5 border border-primary-800 text-[11px] font-bold">
                <button
                  onClick={() => setLanguage("en")}
                  className={cn("px-2 py-0.5 rounded transition-colors", language === "en" ? "bg-white text-primary-950 shadow-xs" : "text-neutral-300 hover:text-white")}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("mr")}
                  className={cn("px-2 py-0.5 rounded transition-colors", language === "mr" ? "bg-white text-primary-950 shadow-xs" : "text-neutral-300 hover:text-white")}
                >
                  मराठी
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <nav
        className={cn(
          "transition-all duration-300",
          isScrolled ? "bg-white/98 backdrop-blur-sm shadow-soft border-b border-neutral-100" : "bg-white/95 backdrop-blur-xs border-b border-neutral-100/60"
        )}
        aria-label="Main navigation"
      >
        <Container>
          <div className="flex h-16 lg:h-18 items-center justify-between">
            {/* Brand Logo & Name */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 group" aria-label="Vortexsoft Vikasdhara Foundation Home">
              <img
                src="/logo-icon.png"
                alt="Vortexsoft Vikasdhara Foundation Emblem"
                className="h-11 w-11 sm:h-12 sm:w-12 object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <div className="flex flex-col justify-center leading-none">
                <span className="font-extrabold text-base sm:text-lg tracking-wide text-primary-950 font-heading">
                  VORTEXSOFT
                </span>
                <span className="text-[10px] sm:text-[11.5px] font-bold tracking-widest text-primary-700 uppercase mt-0.5">
                  VIKASDHARA FOUNDATION
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-0.5">
              {navigation.map((item) => (
                <DropdownItem key={item.name} item={item} isActive={isActive(item.href)} />
              ))}
            </div>

            {/* Desktop CTA & Lang Toggle */}
            <div className="hidden lg:flex lg:items-center lg:gap-3">
              <Link to="/get-involved/partner">
                <Button size="sm" className="px-4 py-2">
                  {t("Partner With Us", "प्रकल्प भागीदारी")}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button + Lang Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setLanguage(language === "en" ? "mr" : "en")}
                className="px-2.5 py-1 text-xs font-bold rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-800"
              >
                {language === "en" ? "मराठी" : "EN"}
              </button>

              <button
                className="p-2 rounded-lg text-neutral-700 hover:bg-neutral-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-100 animate-slide-down max-h-[85vh] overflow-y-auto">
            <Container className="py-6 space-y-4">
              <div className="p-3 bg-primary-50 rounded-xl border border-primary-100 text-xs text-primary-950 font-medium">
                📍 {t("Regd. Office: Chondi, Dharmabad, Nanded, Maharashtra", "नोंदणीकृत कार्यालय: चोंडी, धर्माबाद, नांदेड, महाराष्ट्र")}
              </div>
              <div className="space-y-1">
                {navigation.map((item) => (
                  <MobileDropdownItem key={item.name} item={item} isActive={isActive(item.href)} onNavigate={() => setMobileMenuOpen(false)} />
                ))}
              </div>
              <div className="pt-4 border-t border-neutral-100 flex flex-col gap-2.5">
                <Link
                  to="/get-involved/volunteer"
                  className="btn btn-outline w-full justify-center text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("Volunteer Opportunities", "स्वयंसेवक बना")}
                </Link>
                <Link
                  to="/get-involved/partner"
                  className="btn btn-primary w-full justify-center text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("Partner With Us", "प्रकल्प भागीदारी")}
                </Link>
              </div>
            </Container>
          </div>
        )}
      </nav>
    </header>
  );
}

function DropdownItem({ item, isActive }: { item: { name: string; href: string; children?: { name: string; href: string }[] }; isActive: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        to={item.href}
        className={cn(
          "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
          isActive ? "text-primary-700 bg-primary-50 font-bold" : "text-neutral-700 hover:text-primary-700 hover:bg-primary-50"
        )}
      >
        {item.name}
      </Link>
    );
  }

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button
        className={cn(
          "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
          isActive ? "text-primary-700 bg-primary-50 font-bold" : "text-neutral-700 hover:text-primary-700 hover:bg-primary-50"
        )}
        aria-expanded={isOpen}
      >
        {item.name}
        <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1.5 w-64 bg-white rounded-xl shadow-elevated border border-neutral-100 py-2 animate-fade-in z-50">
          {item.children.map((child) => (
            <Link
              key={child.name}
              to={child.href}
              className="block px-4 py-2 text-xs sm:text-sm text-neutral-700 hover:text-primary-700 hover:bg-primary-50 transition-colors"
            >
              {child.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileDropdownItem({ item, isActive, onNavigate }: { item: { name: string; href: string; children?: { name: string; href: string }[] }; isActive: boolean; onNavigate: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        to={item.href}
        onClick={onNavigate}
        className={cn(
          "block px-3 py-2 text-sm font-medium rounded-lg transition-colors",
          isActive ? "text-primary-700 bg-primary-50 font-bold" : "text-neutral-700"
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
          "flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-lg transition-colors",
          isActive ? "text-primary-700 bg-primary-50 font-bold" : "text-neutral-700"
        )}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {item.name}
        <svg className={cn("w-4 h-4 text-neutral-400 transition-transform", isOpen && "rotate-180")} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="ml-3 mt-1 space-y-1 pl-2 border-l border-neutral-200">
          {item.children.map((child) => (
            <Link
              key={child.name}
              to={child.href}
              onClick={onNavigate}
              className="block px-2 py-1.5 text-xs text-neutral-600 hover:text-primary-700 transition-colors"
            >
              {child.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}