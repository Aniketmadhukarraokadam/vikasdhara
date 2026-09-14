import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionEyebrow } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { programmes } from "@/content";
import { icons, type IconName } from "@/assets/icons";
import { useLanguage } from "@/context/LanguageContext";

const mainProgrammes = programmes.programmes.slice(0, 8);

export function WhatWeDo() {
  const { t } = useLanguage();

  return (
    <Section variant="xl" background="neutral" className="relative overflow-hidden">
      {/* 3D Background Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl -z-10 animate-float-slow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-100/50 rounded-full blur-3xl -z-10 animate-float-reverse" />

      <Container size="full">
        <SectionHeader>
          <SectionEyebrow>{t("Core Focus Areas", "मुख्य कार्यक्षेत्रे")}</SectionEyebrow>
          <SectionTitle>
            {t("One Mission. Many Pathways.", "समर्थ भारत • अनेक मार्ग")}
          </SectionTitle>
          <SectionSubtitle className="max-w-3xl mx-auto">
            {t(
              "Our programme areas respond to different stages of community need — from learning and skill development to livelihood, care, humanitarian support, environmental responsibility and animal welfare.",
              "गरजेपासून संधीपर्यंतचा प्रवास — शिक्षण, कौशल्यविकास, रोजगार, महिला सक्षमीकरण, मानवतावादी साहाय्य आणि गोशाळा संवर्धनाचे उपक्रम."
            )}
          </SectionSubtitle>
        </SectionHeader>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-4">
          {mainProgrammes.map((programme) => (
            <Link key={programme.id} to={`/what-we-do/${programme.slug}`} className="group block">
              <div className="glass-card-3d rounded-3xl p-7 h-full flex flex-col justify-between border border-neutral-200/80 shadow-soft card-3d-hover">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <IconWrapper
                      variant={programme.iconVariant as "primary" | "accent" | "warm" | "neutral"}
                      size="lg"
                      className="group-hover:scale-115 transition-transform duration-300 shadow-sm"
                    >
                      {icons[programme.icon as IconName] || icons.book}
                    </IconWrapper>
                    <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-primary-50 text-primary-700 border border-primary-200 uppercase tracking-wider">
                      {programme.status || "ACTIVE"}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-neutral-950 mb-2.5 group-hover:text-primary-700 transition-colors font-heading">
                    {programme.title}
                  </h3>
                  
                  <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3">
                    {programme.shortDescription}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-primary-800 group-hover:text-primary-600">
                  <span>{t("Explore Programme", "उपक्रम माहिती")}</span>
                  <span className="w-7 h-7 rounded-full bg-primary-50 group-hover:bg-primary-600 group-hover:text-white flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link to="/what-we-do">
            <Button size="lg" className="px-8 py-3.5 shadow-lg card-3d-hover">
              {t("View All 14 Programme Areas →", "सर्व १४ उपक्रम पहा →")}
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}