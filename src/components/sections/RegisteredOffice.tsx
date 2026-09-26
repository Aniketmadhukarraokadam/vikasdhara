import { Container } from "@/components/layout/Container";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

export function RegisteredOffice() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-24 bg-[#FFF9F0]" id="office" aria-labelledby="office-heading">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold text-[#1F4D34] uppercase tracking-widest bg-[#EAF4EC] border border-[#2F6B45]/20 px-3.5 py-1.5 rounded-full mb-3 shadow-warm-sm">
            {t("Geographic Roots & Governance", "स्थानिक मुळे व प्रशासन")}
          </span>
          <h2 id="office-heading" className="text-3xl lg:text-4xl font-extrabold text-[#17251D] tracking-tight font-sans">
            {t("Our Base in Maharashtra", "महाराष्ट्रातील मुख्य केंद्र")}
          </h2>
          <p className="text-[#68736C] mt-3 text-base sm:text-lg leading-relaxed">
            {t(
              "VIKASDHARA FOUNDATION is based in Chondi, Dharmabad Taluka, Nanded District, Maharashtra, with statewide coordination and institutional CSR liaisons in Pune.",
              "विकासधारा फाउंडेशन चोंडी, तालुका धर्माबाद, जिल्हा नांदेड, महाराष्ट्र येथे स्थित असून पुणे येथून राज्यस्तरीय समन्वय साधला जातो."
            )}
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Nanded Registered Office Card */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#2F6B45]/15 shadow-warm-card relative overflow-hidden flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF4EC] text-[#1F4D34] font-bold text-xs uppercase tracking-wider">
                <span>📍</span>
                <span>Registered Headquarters</span>
              </div>

              <h3 className="text-xl font-bold text-[#17251D] font-sans">
                Chondi, Dharmabad, Nanded
              </h3>

              <address className="not-italic text-xs sm:text-sm text-[#68736C] leading-relaxed bg-[#F6F0E7]/60 p-4 rounded-2xl border border-[#2F6B45]/10 space-y-1">
                <p className="font-bold text-[#17251D]">VIKASDHARA FOUNDATION</p>
                <p>Near Chhatrapati Shivaji Putla, Chondi, Post Jarikot,</p>
                <p>Taluka Dharmabad, District Nanded – 431808,</p>
                <p>Maharashtra, India.</p>
              </address>
            </div>

            <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
              <span className="text-[#68736C]">Public Charitable Trust</span>
              <a
                href="mailto:info@vikasdharafoundation.org"
                className="font-bold text-[#2F6B45] hover:underline"
              >
                info@vikasdharafoundation.org
              </a>
            </div>
          </div>

          {/* Pune Coordination Hub Card */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#F39A3F]/25 shadow-warm-card relative overflow-hidden flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF9F0] text-[#F39A3F] font-bold text-xs uppercase tracking-wider">
                <span>🏢</span>
                <span>Regional Coordination & CSR Hub</span>
              </div>

              <h3 className="text-xl font-bold text-[#17251D] font-sans">
                Pune Operations & CSR Desk
              </h3>

              <div className="text-xs sm:text-sm text-[#68736C] leading-relaxed bg-[#FFF9F0] p-4 rounded-2xl border border-[#F39A3F]/20 space-y-1">
                <p className="font-bold text-[#17251D]">Pune Coordination Office</p>
                <p>Pune, Maharashtra, India.</p>
                <p className="text-[11px] text-[#68736C] pt-1">
                  Institutional CSR partnerships, corporate grants, state-level youth skilling and donor relations.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
              <a
                href="mailto:partnerships@vikasdharafoundation.org"
                className="font-bold text-[#2F6B45] hover:underline"
              >
                partnerships@vikasdharafoundation.org
              </a>
              <Link
                to="/contact"
                className="font-bold text-[#1F4D34] hover:text-[#2F6B45] flex items-center gap-1"
              >
                <span>{t("Contact Us", "संपर्क")}</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}