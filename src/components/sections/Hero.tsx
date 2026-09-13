import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-24 pb-16 lg:py-28 overflow-hidden bg-neutral-950 text-white" aria-labelledby="hero-heading">
      {/* Background 4K Hero Photograph with Cinematic Legibility Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_campus.jpg"
          alt="Vortexsoft Vikasdhara Foundation Community Development in India"
          className="w-full h-full object-cover object-center lg:object-right opacity-90 scale-[1.01]"
        />
        {/* Dark Contrast Gradient for Guaranteed Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-transparent/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/40 z-10" />
      </div>

      <Container className="relative z-20">
        <div className="max-w-2xl lg:max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-950/80 border border-primary-500/40 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-primary-200 uppercase tracking-wider">
              {t("Public Charitable Trust • Nanded, Maharashtra", "सार्वजनिक धर्मादाय न्यास • नांदेड, महाराष्ट्र")}
            </span>
          </div>

          <h1 id="hero-heading" className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] text-balance font-heading">
            {t(
              "Empowering People. Strengthening Communities. Building a Better India.",
              "समर्थ लोक • सक्षम समाज • समृद्ध भारत"
            )}
          </h1>

          <div className="space-y-2">
            <p className="text-base sm:text-xl text-neutral-200 leading-relaxed font-normal max-w-2xl text-balance">
              {t(
                "VORTEXSOFT VIKASDHARA FOUNDATION works to create meaningful opportunities through education, skill development, employment, livelihood support, humanitarian service and community development.",
                "वॉर्टेक्ससॉफ्ट विकासधारा फाउंडेशन शिक्षण, कौशल्यविकास, रोजगार, उपजीविका साहाय्य, मानवतावादी सेवा आणि समुदाय विकासाच्या माध्यमातून अर्थपूर्ण संधी निर्माण करण्याचे कार्य करते."
              )}
            </p>
            <p className="text-xs sm:text-sm text-primary-300 font-semibold tracking-wide">
              {t("From Need to Opportunity.", "गरजेकडून संधीकडे.")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link to="/what-we-do">
              <Button size="lg" className="w-full sm:w-auto bg-primary-600 hover:bg-primary-500 text-white font-semibold shadow-lg shadow-primary-950/50">
                {t("Explore Our Work", "आमचे उपक्रम पहा")}
              </Button>
            </Link>
            <Link to="/get-involved/partner">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm">
                {t("Partner With Us", "प्रकल्प भागीदारी")}
              </Button>
            </Link>
            <Link
              to="/about"
              className="text-sm font-semibold text-neutral-200 hover:text-white transition-colors underline-offset-4 hover:underline py-2 text-center sm:text-left"
            >
              {t("About the Foundation →", "संस्थेविषयी अधिक जाणून घ्या →")}
            </Link>
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-neutral-300 font-medium">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {t("Registered Public Charitable Trust", "नोंदणीकृत धर्मादाय न्यास")}
            </span>
            <span className="text-neutral-500">•</span>
            <span>Education • Skills • Employment • Opportunity • Dignity • Service</span>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-neutral-400 animate-bounce" aria-hidden="true">
        <span className="text-[10px] uppercase tracking-widest text-neutral-300 font-semibold">Scroll</span>
        <svg className="w-5 h-5 text-neutral-300" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  );
}