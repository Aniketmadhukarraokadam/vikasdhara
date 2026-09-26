import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "./Container";
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
      name: t("About Us", "आमच्याविषयी"),
      href: "/about",
      children: [
        { name: t("About the Foundation", "संस्थेचा परिचय"), desc: "Core identity, objectives & philosophy", href: "/about" },
        { name: t("Vision & Mission", "ध्येय व उद्दिष्टे"), desc: "Building lives, creating opportunities", href: "/about#vision-mission" },
        { name: t("Our Values", "मूल्ये"), desc: "Dignity, opportunity & community care", href: "/about#values" },
        { name: t("Governance & Transparency", "प्रशासन व पारदर्शकता"), desc: "Statutory disclosures & ethical stewardship", href: "/transparency" },
      ],
    },
    {
      name: t("Our Work", "आमचे कार्य"),
      href: "/what-we-do",
      children: [
        { name: t("Education & Learning", "शिक्षण व अध्ययन"), desc: "Equal learning opportunities for children", href: "/what-we-do/education" },
        { name: t("Skill Development", "कौशल्य विकास"), desc: "Vocational & livelihood skilling", href: "/what-we-do/skills" },
        { name: t("Women Empowerment", "महिला सक्षमीकरण"), desc: "Self-reliance & education for women", href: "/what-we-do/womens-education" },
        { name: t("Employment & Livelihoods", "रोजगार व उपजीविका"), desc: "Sustainable employment pathways", href: "/what-we-do/employment" },
        { name: t("Community Care & Senior Support", "समुदाय व ज्येष्ठ नागरिक काळजी"), desc: "Compassionate shelter, food & elder care", href: "/what-we-do/rural" },
        { name: t("Animal Welfare & Gaushala", "गोशाळा व पशुकल्याण"), desc: "Humane shelter & indigenous animal protection", href: "/what-we-do/gau-shala" },
      ],
    },
    {
      name: t("Programs", "प्रकल्प"),
      href: "/what-we-do",
    },
    {
      name: t("Get Involved", "सहभागी व्हा"),
      href: "/get-involved/volunteer",
      children: [
        { name: t("Become a Volunteer", "स्वयंसेवक बना"), desc: "Give your time & talent on the ground", href: "/get-involved/volunteer" },
        { name: t("Partner (CSR)", "सीएसआर भागीदारी"), desc: "Collaborate on high-impact projects", href: "/get-involved/partner" },
        { name: t("Support Our Mission", "साहाय्य करा"), desc: "Support grassroots community development", href: "/get-involved/support" },
      ],
    },
    { name: t("Impact", "प्रभाव"), href: "/impact" },
    { name: t("Contact", "संपर्क"), href: "/contact" },
  ];

  const isActive = (href: string) =>
    location.pathname === href || (href !== "/" && location.pathname.startsWith(href));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Trust Utility Strip */}
      <div className="bg-[#1F4D34] text-[#EAF4EC] text-[11px] sm:text-xs py-1.5 px-4 hidden md:block border-b border-[#2F6B45]/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#F39A3F] animate-pulse" />
            <span className="font-medium text-emerald-100">
              VIKASDHARA FOUNDATION • <span className="text-white font-semibold">Registered Public Charitable Trust</span> • Maharashtra, India
            </span>
            <span className="text-emerald-300/40 hidden lg:inline">|</span>
            <span className="text-emerald-200/90 text-[11px] hidden lg:inline italic font-serif">
              Building Lives • Creating Opportunities • Growing Communities
            </span>
          </div>

          <div className="flex items-center gap-4 text-emerald-100">
            <a
              href="mailto:info@vikasdharafoundation.org"
              className="hover:text-white transition-colors flex items-center gap-1.5 text-[11.5px]"
            >
              <span>✉</span>
              <span>info@vikasdharafoundation.org</span>
            </a>
            <span className="text-emerald-400/40">•</span>
            <a
              href="tel:+919172003414"
              className="hover:text-white transition-colors flex items-center gap-1 text-[11.5px]"
            >
              <span>📞</span>
              <span>+91 91720 03414</span>
            </a>
            {/* Language Switcher */}
            <div className="flex items-center bg-[#173a27] rounded-full p-0.5 border border-[#2F6B45] text-[11px] ml-2 font-medium">
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "px-2.5 py-0.5 rounded-full transition-all",
                  language === "en" ? "bg-[#2F6B45] text-white font-bold" : "text-emerald-300 hover:text-white"
                )}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("mr")}
                className={cn(
                  "px-2.5 py-0.5 rounded-full transition-all",
                  language === "mr" ? "bg-[#2F6B45] text-white font-bold" : "text-emerald-300 hover:text-white"
                )}
              >
                मराठी
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Light & Elegant Capsule Navbar */}
      <div className={cn("px-4 transition-all duration-300", isScrolled ? "py-1.5" : "py-2.5 sm:py-3")}>
        <div className="max-w-7xl mx-auto">
          <nav
            className={cn(
              "transition-all duration-300 rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between border shadow-warm-card",
              isScrolled
                ? "bg-[rgba(255,255,255,0.92)] backdrop-blur-xl border-[#2F6B45]/20 shadow-md"
                : "bg-[rgba(255,255,255,0.85)] backdrop-blur-md border-[#2F6B45]/15"
            )}
            style={{ backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)" }}
            aria-label="Main navigation"
          >
            {/* LEFT: Vikasdhara Foundation Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group" aria-label="Vikasdhara Foundation Home">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#EAF4EC] border border-[#2F6B45]/25 p-1 flex items-center justify-center shadow-warm-sm group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/logo-icon.png"
                  alt="Vikasdhara Foundation Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-base sm:text-lg text-[#17251D] tracking-tight font-sans group-hover:text-[#2F6B45] transition-colors">
                  VIKASDHARA
                </span>
                <span className="text-[9.5px] sm:text-[10px] font-bold tracking-[0.22em] text-[#2F6B45] uppercase">
                  FOUNDATION
                </span>
              </div>
            </Link>

            {/* CENTER: Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navigation.map((item) => (
                <NavItem key={item.name} item={item} isActive={isActive(item.href)} />
              ))}
            </div>

            {/* RIGHT: Highly Visible Warm Saffron/Green CTA: Donate Now */}
            <div className="hidden sm:flex items-center gap-2.5">
              <Link
                to="/get-involved/support"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#F39A3F] to-[#F7B267] hover:from-[#e28b30] hover:to-[#f3a44f] text-[#17251D] font-bold text-xs sm:text-sm tracking-wide shadow-warm-sm hover:shadow-warm-card hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-[#F39A3F]/50"
              >
                <span>❤️</span>
                <span>{t("Donate Now", "दान करा")}</span>
                <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                to="/get-involved/support"
                className="px-3.5 py-1.5 rounded-full bg-[#F39A3F] text-[#17251D] font-bold text-xs shadow-sm"
              >
                {t("Donate", "दान")}
              </Link>

              <button
                className="p-2 rounded-full text-[#17251D] hover:bg-[#EAF4EC] border border-[#2F6B45]/20 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-[#2F6B45]/20 shadow-2xl animate-calm-fade">
          <Container className="py-5 space-y-4">
            <div className="p-3.5 bg-[#EAF4EC] rounded-2xl border border-[#2F6B45]/20 text-xs text-[#17251D] flex items-center justify-between">
              <div>
                <span className="font-bold text-[#1F4D34] block">VIKASDHARA FOUNDATION</span>
                <span className="text-[11px] text-[#68736C]">Public Charitable Trust • Maharashtra</span>
              </div>
              <span className="text-lg">🌿</span>
            </div>

            <div className="space-y-1">
              {navigation.map((item) => (
                <MobileNavItem
                  key={item.name}
                  item={item}
                  isActive={isActive(item.href)}
                  onNavigate={() => setMobileMenuOpen(false)}
                />
              ))}
            </div>

            <div className="pt-3 border-t border-[#EAF4EC] grid grid-cols-2 gap-2.5">
              <Link
                to="/what-we-do"
                className="p-3 text-center rounded-xl bg-[#EAF4EC] hover:bg-[#d8edd9] text-[#1F4D34] font-bold text-xs transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("Our Work", "आमचे उपक्रम")}
              </Link>
              <Link
                to="/contact"
                className="p-3 text-center rounded-xl bg-[#F6F0E7] hover:bg-[#ebd9c7] text-[#17251D] font-bold text-xs transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("Contact", "संपर्क")}
              </Link>
            </div>

            <Link
              to="/get-involved/support"
              className="block w-full p-3.5 text-center rounded-xl bg-gradient-to-r from-[#F39A3F] to-[#F7B267] text-[#17251D] font-bold text-sm shadow-md transition-transform active:scale-95"
              onClick={() => setMobileMenuOpen(false)}
            >
              ❤️ {t("Donate Now", "आताच दान करा")} →
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}

function NavItem({
  item,
  isActive,
}: {
  item: { name: string; href: string; children?: { name: string; desc?: string; href: string }[] };
  isActive: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        to={item.href}
        className={cn(
          "px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200",
          isActive
            ? "text-[#1F4D34] bg-[#EAF4EC] font-bold"
            : "text-[#17251D] hover:text-[#2F6B45] hover:bg-[#EAF4EC]/60"
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
      <Link
        to={item.href}
        className={cn(
          "inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200",
          isActive
            ? "text-[#1F4D34] bg-[#EAF4EC] font-bold"
            : "text-[#17251D] hover:text-[#2F6B45] hover:bg-[#EAF4EC]/60"
        )}
      >
        <span>{item.name}</span>
        <svg
          className={cn("w-3.5 h-3.5 opacity-60 transition-transform duration-200", isOpen && "rotate-180 opacity-100")}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      {isOpen && (
        <div className="absolute left-0 top-full pt-2 w-80 animate-calm-fade z-50">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-warm-elevated border border-[#2F6B45]/15 p-2.5 space-y-1">
            {item.children.map((child) => (
              <Link
                key={child.name}
                to={child.href}
                className="block p-2.5 rounded-xl hover:bg-[#EAF4EC] transition-colors group"
              >
                <span className="block text-xs font-bold text-[#17251D] group-hover:text-[#1F4D34] transition-colors">
                  {child.name}
                </span>
                {child.desc && (
                  <span className="block text-[11px] text-[#68736C] group-hover:text-[#2F6B45] mt-0.5 line-clamp-1">
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

function MobileNavItem({
  item,
  isActive,
  onNavigate,
}: {
  item: { name: string; href: string; children?: { name: string; desc?: string; href: string }[] };
  isActive: boolean;
  onNavigate: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        to={item.href}
        onClick={onNavigate}
        className={cn(
          "block px-3.5 py-2.5 text-sm font-medium rounded-xl transition-colors",
          isActive ? "text-[#1F4D34] bg-[#EAF4EC] font-bold" : "text-[#17251D] hover:bg-[#F6F0E7]"
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
          isActive ? "text-[#1F4D34] bg-[#EAF4EC] font-bold" : "text-[#17251D] hover:bg-[#F6F0E7]"
        )}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{item.name}</span>
        <svg
          className={cn("w-4 h-4 text-[#68736C] transition-transform duration-200", isOpen && "rotate-180")}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="ml-4 mt-1 space-y-1 pl-3 border-l-2 border-[#2F6B45]/30">
          {item.children.map((child) => (
            <Link
              key={child.name}
              to={child.href}
              onClick={onNavigate}
              className="block px-3 py-2 text-xs text-[#17251D] hover:text-[#1F4D34] hover:bg-[#EAF4EC] rounded-lg transition-colors"
            >
              <span className="font-bold block">{child.name}</span>
              {child.desc && <span className="text-[10px] text-[#68736C]">{child.desc}</span>}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}