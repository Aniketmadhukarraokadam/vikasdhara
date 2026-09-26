import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t, language } = useLanguage();
  const isMr = language === "mr";

  const navigation = [
    { name: t("About Us", "संस्थेविषयी"), href: "/about" },
    { name: t("Our Work", "आमचे कार्य"), href: "/what-we-do" },
    { name: t("Programs", "प्रकल्प"), href: "/what-we-do" },
    { name: t("Impact", "प्रभाव"), href: "/impact" },
    { name: t("Get Involved", "सहभागी व्हा"), href: "/get-involved/volunteer" },
    { name: t("Contact", "संपर्क"), href: "/contact" },
  ];

  const focusAreas = [
    { name: t("Education", "शिक्षण"), href: "/what-we-do/education" },
    { name: t("Skills", "कौशल्य विकास"), href: "/what-we-do/skills" },
    { name: t("Women Empowerment", "महिला सक्षमीकरण"), href: "/what-we-do/womens-education" },
    { name: t("Employment", "रोजगार"), href: "/what-we-do/employment" },
    { name: t("Community Care", "समुदाय साहाय्य"), href: "/what-we-do/rural" },
    { name: t("Senior Care", "ज्येष्ठ नागरिक सेवा"), href: "/what-we-do/rural" },
    { name: t("Animal Welfare", "गोशाळा व पशुकल्याण"), href: "/what-we-do/gau-shala" },
    { name: t("CSR Partnerships", "सीएसआर भागीदारी"), href: "/get-involved/partner" },
  ];

  return (
    <footer className="bg-[#17251D] text-[#EAF4EC] font-sans pt-16 pb-12 border-t border-[#2F6B45]/30" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#2F6B45]/20">
          
          {/* Brand & Mission Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group" aria-label="Vikasdhara Foundation Home">
              <div className="w-12 h-12 rounded-full bg-[#EAF4EC] p-1 flex items-center justify-center border border-[#2F6B45]/30 shadow-sm shrink-0">
                <img src="/logo-icon.png" alt="Vikasdhara Foundation Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-black text-lg tracking-tight text-white block">
                  VIKASDHARA FOUNDATION
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#F39A3F] uppercase block">
                  Public Charitable Trust
                </span>
              </div>
            </Link>

            <p className="text-sm font-semibold text-white/90 font-serif italic pt-1">
              Building Lives. Creating Opportunities. Growing Communities.
            </p>

            <p className="text-xs text-[#EAF4EC]/70 leading-relaxed max-w-sm">
              {t(
                "Working towards stronger communities through education, skill development, livelihoods, social awareness, care and sustainable community initiatives.",
                "शिक्षण, कौशल्यविकास, उपजीविका, समाजकल्याण आणि समुदाय विकासाच्या माध्यमातून शाश्वत संधींची निर्मिती करणारा नोंदणीकृत सार्वजनिक धर्मादाय न्यास."
              )}
            </p>

            <div className="pt-2">
              <Link
                to="/get-involved/support"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#F39A3F] to-[#F7B267] text-[#17251D] font-bold text-xs tracking-wide shadow-warm-sm hover:scale-105 transition-all duration-300"
              >
                <span>❤️</span>
                <span>{t("Donate Now", "दान करा")}</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Quick Navigation Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F39A3F] block">
              {t("Navigation", "मुख्य दुवे")}
            </span>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-[#EAF4EC]/80 hover:text-white hover:underline transition-colors block py-0.5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Areas Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F39A3F] block">
              {t("Focus Areas", "प्रमुख कार्यक्षेत्रे")}
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 text-xs sm:text-sm">
              {focusAreas.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-[#EAF4EC]/80 hover:text-white hover:underline transition-colors block py-0.5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Official Contact Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F39A3F] block">
              {t("Official Contact", "अधिकृत संपर्क")}
            </span>

            <div className="space-y-3 text-xs text-[#EAF4EC]/85 leading-relaxed">
              <div>
                <span className="font-bold text-white block">Registered Headquarters:</span>
                <address className="not-italic text-[11.5px] text-[#EAF4EC]/70 mt-0.5">
                  Near Chhatrapati Shivaji Putla, Chondi, Post Jarikot,<br />
                  Taluka Dharmabad, District Nanded – 431808,<br />
                  Maharashtra, India.
                </address>
              </div>

              <div>
                <span className="font-bold text-white block">Regional Hub:</span>
                <p className="text-[11.5px] text-[#EAF4EC]/70 mt-0.5">
                  Pune, Maharashtra, India.
                </p>
              </div>

              <div className="space-y-1 pt-1">
                <div>
                  <span className="text-white/60">Email: </span>
                  <a
                    href="mailto:info@vikasdharafoundation.org"
                    className="text-[#F7B267] hover:underline font-semibold"
                  >
                    info@vikasdharafoundation.org
                  </a>
                </div>
                <div>
                  <span className="text-white/60">Phone: </span>
                  <a href="tel:+919172003414" className="text-white hover:underline font-semibold">
                    +91 91720 03414
                  </a>
                </div>
                <div>
                  <span className="text-white/60">Website: </span>
                  <a
                    href="https://www.vikasdharafoundation.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline font-semibold"
                  >
                    www.vikasdharafoundation.org
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights & Attribution Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EAF4EC]/60">
          <p>© {new Date().getFullYear()} Vikasdhara Foundation. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/transparency" className="hover:text-white transition-colors">
              Governance & Disclosures
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}