import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SkiperSpotlightCard } from "@/components/ui/SkiperSpotlightCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

export function CTASection() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";

  const ctas = [
    {
      titleEn: "Partner With Us (CSR)",
      titleMr: "संस्थागत CSR भागीदारी",
      href: "/get-involved/partner",
      btnTextEn: "Submit CSR Inquiry →",
      btnTextMr: "प्रकल्प प्रस्ताव पाठवा →",
      variant: "primary" as const,
      icon: "🏢",
      spotlight: "rgba(2, 132, 199, 0.15)",
      border: "rgba(56, 189, 248, 0.4)",
      descriptionEn: "Collaborate on Schedule VII compliant education, skill development, and water projects.",
      descriptionMr: "शिक्षण, कौशल्यविकास, महिला उद्योग आणि जलसंधारण प्रकल्पांसाठी संस्थागत भागीदारी."
    },
    {
      titleEn: "Support Gau Shala & Missions",
      titleMr: "गोशाळा व सामाजिक साहाय्य",
      href: "/get-involved/support",
      btnTextEn: "Support the Mission →",
      btnTextMr: "उपक्रमात योगदान द्या →",
      variant: "emerald" as const,
      icon: "🐄",
      spotlight: "rgba(16, 185, 129, 0.15)",
      border: "rgba(52, 211, 153, 0.4)",
      descriptionEn: "Contribute resources for indigenous cow care, green fodder, and digital classroom kits.",
      descriptionMr: "देशी गोवंश संगोपन, चारा व्यवस्था आणि ग्रामीण मुलांच्या शिक्षणासाठी साहाय्य करा."
    },
    {
      titleEn: "Volunteer & Field Action",
      titleMr: "स्वयंसेवक म्हणून जुळा",
      href: "/get-involved/volunteer",
      btnTextEn: "Apply as Volunteer →",
      btnTextMr: "स्वयंसेवक अर्ज करा →",
      variant: "secondary" as const,
      icon: "🤝",
      spotlight: "rgba(245, 158, 11, 0.15)",
      border: "rgba(251, 191, 36, 0.4)",
      descriptionEn: "Give your time, skills, and energy to ground-level initiatives in Nanded and Pune.",
      descriptionMr: "आपले ज्ञान, वेळ आणि कौशल्ये देऊन महाराष्ट्रातील ग्रामीण विकासात सक्रिय योगदान द्या."
    },
  ];

  return (
    <Section variant="lg" background="neutral">
      <Container>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {ctas.map((cta) => (
            <SkiperSpotlightCard
              key={cta.href}
              className="flex flex-col justify-between text-center"
              spotlightColor={cta.spotlight}
              borderColor={cta.border}
            >
              <div>
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary-50 border border-primary-200 flex items-center justify-center text-3xl shadow-xs">
                  {cta.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-950 mb-2.5 font-heading">
                  {isMarathi ? cta.titleMr : cta.titleEn}
                </h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {isMarathi ? cta.descriptionMr : cta.descriptionEn}
                </p>
              </div>

              <div>
                <MagneticButton strength={0.2} className="w-full">
                  <Link to={cta.href} className="block w-full">
                    <Button variant={cta.variant} size="md" className="w-full font-bold shadow-md">
                      {isMarathi ? cta.btnTextMr : cta.btnTextEn}
                    </Button>
                  </Link>
                </MagneticButton>
              </div>
            </SkiperSpotlightCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}