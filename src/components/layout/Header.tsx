import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    children: [
      { name: "About Us", href: "/about" },
      { name: "Vision & Mission", href: "/about#vision-mission" },
      { name: "Leadership", href: "/about#leadership" },
      { name: "Values", href: "/about#values" },
      { name: "Governance", href: "/about#governance" },
    ],
  },
  {
    name: "What We Do",
    href: "/what-we-do",
    children: [
      { name: "Education & Learning", href: "/what-we-do/education" },
      { name: "Women's Education & Empowerment", href: "/what-we-do/womens-education" },
      { name: "Skills for the Future", href: "/what-we-do/skills" },
      { name: "Employment & Livelihood", href: "/what-we-do/employment" },
      { name: "Corporate Projects", href: "/what-we-do/corporate-projects" },
      { name: "Food & Humanitarian Support", href: "/what-we-do/humanitarian" },
      { name: "Shelter & Dharamshala", href: "/what-we-do/shelter" },
      { name: "Elderly Care", href: "/what-we-do/elderly-care" },
      { name: "Health Awareness", href: "/what-we-do/health" },
      { name: "Rural Development", href: "/what-we-do/rural" },
      { name: "Disaster Relief", href: "/what-we-do/disaster-relief" },
      { name: "Environment", href: "/what-we-do/environment" },
      { name: "Animal Welfare", href: "/what-we-do/animal-welfare" },
      { name: "Gau Shala", href: "/what-we-do/gau-shala" },
    ],
  },
  { name: "Pune NGO Hub", href: "/pune-ngo" },
  {
    name: "Impact",
    href: "/impact",
    children: [
      { name: "Our Impact", href: "/impact" },
      { name: "Projects", href: "/impact/projects" },
      { name: "Stories", href: "/impact/stories" },
      { name: "Reports", href: "/impact/reports" },
    ],
  },
  {
    name: "Get Involved",
    href: "/get-involved",
    children: [
      { name: "Partner With Us (CSR)", href: "/get-involved/partner" },
      { name: "Volunteer in Pune & Nanded", href: "/get-involved/volunteer" },
      { name: "Support the Mission", href: "/get-involved/support" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href || (href !== "/" && location.pathname.startsWith(href));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Institutional & Geo Banner */}
      <div className="bg-primary-950 text-neutral-300 text-[11px] sm:text-xs py-1.5 border-b border-primary-900/60 hidden md:block">
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-neutral-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Regd. HQ: <strong>Dharmabad, Nanded</strong></span>
              </span>
              <span className="text-primary-600">•</span>
              <Link to="/pune-ngo" className="flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 transition-colors font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-400"></span>
                <span>Regional Hub: <strong>Pune, Maharashtra</strong> (CSR & Skills)</span>
              </Link>
            </div>
            <div className="flex items-center gap-5 text-neutral-300">
              <a href="mailto:info@vikasdharafoundation.org" className="hover:text-white transition-colors flex items-center gap-1">
                <span>✉️ info@vikasdharafoundation.org</span>
              </a>
              <Link to="/transparency" className="hover:text-white transition-colors">
                Public Charitable Trust (Govt. Regd.)
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <nav
        className={cn(
          "transition-all duration-300",
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-soft border-b border-neutral-100" : "bg-white/90 backdrop-blur-xs border-b border-neutral-100/60"
        )}
        aria-label="Main navigation"
      >
        <Container>
          <div className="flex h-16 lg:h-18 items-center justify-between">
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

            <div className="hidden lg:flex lg:items-center lg:gap-1">
              {navigation.map((item) => (
                <DropdownItem key={item.href} item={item} isActive={isActive(item.href)} />
              ))}
            </div>

            <div className="hidden lg:flex lg:items-center lg:gap-3">
              <Link to="/pune-ngo" className="text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 hover:bg-emerald-100 transition-colors">
                📍 Pune Hub
              </Link>
              <Link to="/get-involved/partner">
                <Button size="sm" className="px-5 py-2">
                  Partner With Us
                </Button>
              </Link>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
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
        </Container>

        {mobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden bg-white border-t border-neutral-100 animate-slide-down">
            <Container className="py-6">
              <div className="space-y-4">
                <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100 text-xs text-emerald-900 flex items-center justify-between">
                  <span>📍 Pune Coordination & CSR Hub</span>
                  <Link to="/pune-ngo" className="font-bold underline" onClick={() => setMobileMenuOpen(false)}>
                    View Hub →
                  </Link>
                </div>
                {navigation.map((item) => (
                  <MobileDropdownItem key={item.href} item={item} isActive={isActive(item.href)} onNavigate={() => setMobileMenuOpen(false)} />
                ))}
                <div className="pt-4 border-t border-neutral-100 flex flex-col gap-3">
                  <Link
                    to="/get-involved/volunteer"
                    className="btn btn-outline w-full justify-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Volunteer
                  </Link>
                  <Link
                    to="/get-involved/partner"
                    className="btn btn-primary w-full justify-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Partner With Us
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        )}
      </nav>
    </header>
  );
}

function DropdownItem({ item, isActive }: { item: typeof navigation[0]; isActive: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        to={item.href}
        className={cn(
          "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
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
          "flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
          isActive ? "text-primary-700 bg-primary-50 font-bold" : "text-neutral-700 hover:text-primary-700 hover:bg-primary-50"
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.name}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1.5 w-64 bg-white rounded-xl shadow-elevated border border-neutral-100 py-2 animate-fade-in">
          {item.children.map((child) => (
            <Link
              key={child.href}
              to={child.href}
              className="block px-4 py-2.5 text-sm text-neutral-700 hover:text-primary-700 hover:bg-primary-50 transition-colors"
            >
              {child.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileDropdownItem({ item, isActive, onNavigate }: { item: typeof navigation[0]; isActive: boolean; onNavigate: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        to={item.href}
        onClick={onNavigate}
        className={cn(
          "block px-2 py-2.5 text-base font-medium rounded-lg transition-colors",
          isActive ? "text-primary-700 bg-primary-50" : "text-neutral-700"
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
          "flex items-center justify-between w-full px-2 py-2.5 text-base font-medium rounded-lg transition-colors",
          isActive ? "text-primary-700 bg-primary-50" : "text-neutral-700"
        )}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {item.name}
        <svg className={cn("w-5 h-5 text-neutral-400 transition-transform", isOpen && "rotate-180")} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="ml-4 mt-2 space-y-1 animate-slide-down">
          {item.children.map((child) => (
            <Link
              key={child.href}
              to={child.href}
              onClick={onNavigate}
              className="block px-2 py-2 text-sm text-neutral-600 hover:text-primary-700 transition-colors"
            >
              {child.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}