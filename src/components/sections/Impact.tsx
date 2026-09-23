import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionEyebrow } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { Button } from "@/components/ui/Button";
import { SkiperSpotlightCard } from "@/components/ui/SkiperSpotlightCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Link } from "react-router-dom";
import { icons, type IconName } from "@/assets/icons";
import { useLanguage } from "@/context/LanguageContext";

const verifiedMetrics = [
  { valueNum: 1250, suffix: "+", labelEn: "Youth & Adults Trained", labelMr: "प्रशिक्षित युवक व नागरिक", icon: "graduation-cap", desc: "Vocational & digital skills certification" },
  { valueNum: 4500, suffix: "+", labelEn: "Students Supported", labelMr: "शिक्षण साहाय्य मिळालेली मुले", icon: "book", desc: "Smart classroom e-learning & study kits" },
  { valueNum: 680, suffix: "+", labelEn: "Jobs & Livelihoods Facilitated", labelMr: "रोजगार व उपजीविका जोडणी", icon: "briefcase", desc: "Placements, micro-enterprises & apprenticeship" },
  { valueNum: 850, suffix: "+", labelEn: "Women Reached in SHGs", labelMr: "सक्षम महिला बचत गट सदस्य", icon: "users", desc: "Self-help group agro-processing & micro-credit" },
  { valueNum: 15000, suffix: "+", labelEn: "Community Meals & Care", labelMr: "पोषण व मानवतावादी सेवा", icon: "heart", desc: "Nutrition support for elderly & vulnerable" },
  { valueNum: 150, suffix: "+", labelEn: "Cows & Cattle in Gau Shala", labelMr: "गोशाळा संरक्षित देशी गोवंश", icon: "cow", desc: "Lifetime shelter, nutrition & veterinary care" },
  { valueNum: 42, suffix: "+", labelEn: "Villages & Wards Reached", labelMr: "पोहोचलेली गावे व वस्त्या", icon: "map-pin", desc: "Field footprint across Nanded & Pune" },
  { valueNum: 5000, suffix: "+", labelEn: "Trees & Water Watersheds", labelMr: "वृक्ष लागवड व जलसंधारण", icon: "tree-pine", desc: "Community check dams & green corridors" }
];

const featuredStories = [
  {
    id: "story-1",
    titleEn: "Empowering Rural Classrooms with Digital Tablets in Marathwada",
    titleMr: "मराठवाड्यातील ग्रामीण शाळांमध्ये डिजिटल टॅबलेट्सद्वारे आधुनिक शिक्षण",
    category: "Education 4.0",
    location: "Dharmabad, Nanded",
    readTime: "4 min read",
    image: "/images/rural_smart_classroom.jpg",
    excerptEn: "How smart digital screens and educational tablets enabled 450+ village schoolchildren to master STEM mathematics and English."
  },
  {
    id: "story-2",
    titleEn: "Nurturing Indigenous Gir Cows at Vikasdhara Gau Shala Sanctuary",
    titleMr: "विकासधारा गोशाळेत देशी गीर गोवंशाचे प्रेमाने संगोपन व आरोग्य सेवा",
    category: "Animal Welfare",
    location: "Chondi, Nanded",
    readTime: "5 min read",
    image: "/images/gaushala_animals.jpg",
    excerptEn: "Providing 100% cruelty-free lifetime sanctuary, organic green fodder, and veterinary hospital care for abandoned and aging rural cattle."
  },
  {
    id: "story-3",
    titleEn: "Women's Bachat Gat Agro-Processing & Spice Packaging Micro-Enterprise",
    titleMr: "महिला बचत गटांचा सेंद्रिय मसाला व डाळ प्रक्रिया उद्योग",
    category: "Women Empowerment",
    location: "Pune & Nanded Corridor",
    readTime: "4 min read",
    image: "/images/women_shg_enterprise.jpg",
    excerptEn: "Over 60 rural women achieving monthly household dignity through cooperative food packaging, barcode labeling, and direct market linkage."
  }
];

export function Impact() {
  const { language, t } = useLanguage();
  const isMarathi = language === "mr";

  return (
    <Section variant="xl" background="neutral" className="relative overflow-hidden" id="impact">
      <Container size="full">
        <SectionHeader>
          <SectionEyebrow>{t("Audited Field Metrics", "पारदर्शक प्रगती अहवाल")}</SectionEyebrow>
          <SectionTitle>
            {t("Verified Social Impact Across Maharashtra", "प्रत्यक्ष जमिनीवरील बदल • संख्यात्मक आकडेवारी")}
          </SectionTitle>
          <SectionSubtitle className="max-w-3xl mx-auto">
            {t(
              "Every number represents a verified community record — students in digital classrooms, women running micro-enterprises, protected cows, and solar irrigated farms.",
              "प्रत्येक आकडेवारीमागे एक खरी जीवनगाथा आहे — शिक्षण घेणारी मुले, स्वावलंबी महिला, संरक्षित गोवंश आणि समृद्ध शेतकरी."
            )}
          </SectionSubtitle>
        </SectionHeader>

        {/* 8 Skiper UI Spotlight Impact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {verifiedMetrics.map((metric, index) => (
            <SkiperSpotlightCard
              key={index}
              className="text-center flex flex-col justify-between"
              spotlightColor="rgba(2, 132, 199, 0.12)"
              borderColor="rgba(56, 189, 248, 0.35)"
            >
              <div>
                <IconWrapper variant="primary" size="lg" className="mx-auto mb-4 group-hover:scale-110 shadow-sm transition-transform duration-300">
                  {icons[metric.icon as IconName] || icons.book}
                </IconWrapper>
                <div className="text-3xl sm:text-4xl font-extrabold text-primary-900 mb-1.5 font-heading">
                  <AnimatedCounter value={metric.valueNum} suffix={metric.suffix} />
                </div>
                <h4 className="text-sm font-bold text-neutral-900 leading-snug">
                  {isMarathi ? metric.labelMr : metric.labelEn}
                </h4>
              </div>
              <p className="text-xs text-neutral-500 mt-3 pt-3 border-t border-neutral-100">
                {metric.desc}
              </p>
            </SkiperSpotlightCard>
          ))}
        </div>

        {/* Stories from the Field */}
        <div className="mb-10 text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
            {t("Ground Level Narratives", "मैदानी वास्तव व यशोगाथा")}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 mt-2 font-heading">
            {t("Real People. Real Dignity. Real Change.", "खरे लोक • खरी प्रगती • खरा बदल")}
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featuredStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-soft card-3d-hover flex flex-col justify-between group"
            >
              <div className="aspect-[16/10] bg-neutral-900 relative overflow-hidden">
                <img
                  src={story.image}
                  alt={story.titleEn}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[10px] font-extrabold bg-primary-950/90 text-white border border-primary-400/40 uppercase tracking-wider backdrop-blur-md">
                  {story.category}
                </span>
                <span className="absolute bottom-3 left-4 text-xs font-semibold text-neutral-200 flex items-center gap-1">
                  📍 {story.location}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-neutral-950 group-hover:text-primary-800 transition-colors leading-snug font-heading">
                    {isMarathi ? story.titleMr : story.titleEn}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-2.5 leading-relaxed line-clamp-3">
                    {story.excerptEn}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-primary-800">
                  <span>{isMarathi ? "सविस्तर वाचा" : "Read Insight"}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Animmaster Lib Magnetic Action Button */}
        <div className="text-center pt-4">
          <MagneticButton strength={0.3}>
            <Link to="/impact">
              <Button size="lg" className="px-8 py-3.5 shadow-lg bg-gradient-to-r from-primary-700 to-sky-700 hover:from-primary-800 hover:to-sky-800 text-white font-bold rounded-xl">
                {t("Explore Comprehensive Impact Framework →", "सर्व सामाजिक परिणाम व अहवाल पहा →")}
              </Button>
            </Link>
          </MagneticButton>
        </div>
      </Container>
    </Section>
  );
}