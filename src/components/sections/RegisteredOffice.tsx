import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

export function RegisteredOffice() {
  const { t } = useLanguage();

  return (
    <Section variant="default" background="sky" id="office">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs font-bold text-primary-800 uppercase tracking-widest bg-primary-100/80 px-3.5 py-1.5 rounded-full mb-3">
            {t("Registered Office", "नोंदणीकृत कार्यालय")}
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight font-heading">
            {t("Our Base in Maharashtra", "महाराष्ट्रातील मुख्य केंद्र")}
          </h2>
          <p className="text-neutral-600 mt-3 text-base sm:text-lg">
            {t(
              "VORTEXSOFT VIKASDHARA FOUNDATION is based in Chondi, Dharmabad Taluka, Nanded District, Maharashtra, India. The Foundation aims to develop local initiatives while building programmes and partnerships that can grow across India.",
              "वॉर्टेक्ससॉफ्ट विकासधारा फाउंडेशन चोंडी, तालुका धर्माबाद, जिल्हा नांदेड, महाराष्ट्र येथे स्थित असून स्थानिक उपक्रमांसोबत संपूर्ण भारतात सामाजिक कार्य विस्तारण्याचे उद्दिष्ट ठेवते."
            )}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Registered Office Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200/90 shadow-soft relative overflow-hidden flex flex-col justify-between space-y-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full -z-0 opacity-70" />
            
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary-100 text-primary-800 font-bold text-xs uppercase tracking-wider">
                <svg className="w-4 h-4 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {t("Registered Public Charitable Trust Office", "नोंदणीकृत धर्मादाय न्यास कार्यालय")}
              </div>

              <div>
                <h3 className="text-2xl font-bold text-neutral-900 font-heading">
                  Chondi, Dharmabad Taluka, Nanded District
                </h3>
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mt-1">
                  Maharashtra, India • PIN: 431808
                </p>
              </div>

              <address className="not-italic text-sm sm:text-base text-neutral-700 leading-relaxed bg-neutral-50 p-5 rounded-2xl border border-neutral-200/80 space-y-1">
                <p className="font-bold text-neutral-900">VORTEXSOFT VIKASDHARA FOUNDATION</p>
                <p>Near Chhatrapati Shivaji Putla, Chondi, Post Jarikot,</p>
                <p>Taluka Dharmabad, District Nanded – 431808,</p>
                <p>Maharashtra, India.</p>
              </address>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <span className="font-semibold text-neutral-800">Email:</span>
                <a
                  href="mailto:info@vikasdharafoundation.org"
                  className="font-bold text-primary-700 hover:text-primary-900 hover:underline"
                >
                  info@vikasdharafoundation.org
                </a>
              </div>

              <Link to="/contact" className="btn btn-primary text-xs sm:text-sm px-4 py-2">
                {t("Contact the Foundation →", "संस्थेशी संपर्क साधा →")}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}