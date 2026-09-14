import { useState } from "react";
import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionEyebrow } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";

interface PillarCard {
  id: string;
  badgeEn: string;
  badgeMr: string;
  titleEn: string;
  titleMr: string;
  descEn: string;
  descMr: string;
  image: string;
  metrics: { value: string; labelEn: string; labelMr: string }[];
  highlightsEn: string[];
  highlightsMr: string[];
  inquiryMsg: string;
}

const PILLARS: PillarCard[] = [
  {
    id: "gaushala",
    badgeEn: "ANIMAL WELFARE & SANCTUARY",
    badgeMr: "गोशाळा व पशुकल्याण",
    titleEn: "Gau Shala Sanctuary & Indigenous Cow Protection",
    titleMr: "गोशाळा संवर्धन, देशी गोवंश संगोपन व पशुकल्याण",
    descEn: "Providing lifetime shelter, organic green fodder, pure drinking water, and dedicated veterinary medical care for indigenous Gir and Desi cows in Nanded, Maharashtra.",
    descMr: "नांदेड येथील विकासधारा गोशाळेत देशी गोवंशाचे रक्षण, मोफत पौष्टिक चारा, शुद्ध पाणी आणि पशुवैद्यकीय आरोग्य सेवेचे अविरत कार्य.",
    image: "/images/gaushala_animals.jpg",
    metrics: [
      { value: "150+", labelEn: "Cows & Calves Protected", labelMr: "देशी गोवंश संरक्षित" },
      { value: "100%", labelEn: "Cruelty-Free Sanctuary", labelMr: "१००% अहिंसक गोशाळा" },
      { value: "24/7", labelEn: "Veterinary Care & Nutrition", labelMr: "अविरत वैद्यकीय सेवा" }
    ],
    highlightsEn: [
      "Spacious open-air shelters with hygienic stone-paved flooring",
      "Regular health checkup camps with qualified veterinarians",
      "Nutritious hydroponic & organic green fodder supply",
      "Sanctuary for retired, sick, and abandoned rural livestock"
    ],
    highlightsMr: [
      "स्वच्छ व हवेशीर गोशाळा निवारा",
      "तज्ज्ञ डॉक्टरांकडून नियमित आरोग्य तपासणी व लसीकरण",
      "पौष्टिक हिरवा चारा व खनिजयुक्त पूरक आहार",
      "अशक्त व वृद्ध जनावरांचे आयुष्यभर संगोपन"
    ],
    inquiryMsg: "Hello, I want to support / sponsor the Gau Shala Animal Sanctuary in Nanded."
  },
  {
    id: "village-transformation",
    badgeEn: "RURAL REJUVENATION",
    badgeMr: "ग्राम विकास व जलसंधारण",
    titleEn: "Smart Village Infrastructure & Water Stewardship",
    titleMr: "आधुनिक ग्रामविकास, सौर सिंचन व जलसंधारण",
    descEn: "Revitalizing agrarian rural communities in Marathwada through community pond restoration, check dams, solar micro-irrigation, and sustainable organic farming clusters.",
    descMr: "तळे खोलीकरण, जलसंधारण बंधारे, सौर ऊर्जा आणि सेंद्रिय शेती पद्धतींद्वारे ग्रामीण महाराष्ट्राचा सर्वांगीण कायापालट.",
    image: "/images/village_transformation.jpg",
    metrics: [
      { value: "12+", labelEn: "Ponds & Check Dams Recharged", labelMr: "तळे व बंधारे पुनरुज्जीवित" },
      { value: "350+", labelEn: "Acres with Solar Irrigation", labelMr: "एकर शेतीला सौर पाणी" },
      { value: "2,400+", labelEn: "Farmer Families Impacted", labelMr: "शेतकरी कुटुंबांना लाभ" }
    ],
    highlightsEn: [
      "Check dam desilting & watershed rainwater harvesting",
      "Zero-carbon solar water pumps for smallholder farmers",
      "All-weather paved village link roads and street solar lighting",
      "Farmer field schools on soil health & organic cultivation"
    ],
    highlightsMr: [
      "गाळ उपसा व पावसाचे पाणी अडवणारे बंधारे",
      "लहान शेतकऱ्यांसाठी सौर ऊर्जेवर चालणारे सिंचन पंप",
      "गावातील पक्के रस्ते व सौर पथदिवे",
      "सेंद्रिय शेती व माती आरोग्य प्रशिक्षण"
    ],
    inquiryMsg: "Hello, I want to partner with Vikasdhara Foundation for Village Water & Agro Projects."
  },
  {
    id: "smart-classroom",
    badgeEn: "CHILDREN & DIGITAL EDUCATION",
    badgeMr: "ग्रामीण डिजिटल शाळा",
    titleEn: "Rural Smart Classrooms & Child STEM Labs",
    titleMr: "ग्रामीण डिजिटल वर्गखोल्या व बालशिक्षण",
    descEn: "Equipping remote village schools with interactive digital displays, educational tablets, foundational literacy kits, and modern STEM science learning tools.",
    descMr: "ग्रामीण विद्यार्थ्यांना दर्जेदार डिजिटल शिक्षण देण्यासाठी स्मार्ट बोर्ड, ई-लर्निंग टॅबलेट्स आणि प्रयोगशाळा साहित्याची सुविधा.",
    image: "/images/rural_smart_classroom.jpg",
    metrics: [
      { value: "25+", labelEn: "Village Schools Upgraded", labelMr: "शाळांचे डिजिटायझेशन" },
      { value: "4,500+", labelEn: "Rural Students Learning", labelMr: "ग्रामीण मुले शिकत आहेत" },
      { value: "100%", labelEn: "Marathi & English Content", labelMr: "मराठी व इंग्रजी ई-लर्निंग" }
    ],
    highlightsEn: [
      "Interactive 65-inch 4K smart educational touch panels",
      "Personalized learning tablets loaded with bilingual syllabus",
      "Teacher digital training & pedagogical mentorship",
      "STEM robotics and basic computer coding workshops"
    ],
    highlightsMr: [
      "६५ इंच ४K इंटरअॅक्टिव्ह स्मार्ट डिजिटल बोर्ड",
      "मराठी व इंग्रजी अभ्यासक्रम असलेले ई-लर्निंग टॅबलेट्स",
      "शिक्षकांना आधुनिक डिजिटल अध्यापन प्रशिक्षण",
      "सायन्स व संगणकीय साक्षरता कार्यशाळा"
    ],
    inquiryMsg: "Hello, I want to sponsor Smart Digital Classrooms for rural village schools."
  },
  {
    id: "women-shg",
    badgeEn: "WOMEN EMPOWERMENT & SHG",
    badgeMr: "महिला बचत गट उद्योग",
    titleEn: "Women Self-Help Groups & Micro-Enterprises",
    titleMr: "महिला बचत गट, प्रक्रिया उद्योग व स्वावलंबन",
    descEn: "Establishing village-level agro-processing, spice-making, and textile micro-units managed entirely by empowered rural women in self-help groups (Bachat Gat).",
    descMr: "ग्रामीण महिलांच्या बचत गटांना प्रक्रिया यंत्रसामग्री, आधुनिक पॅकेजिंग आणि थेट बाजारपेठ उपलब्ध करून देत आर्थिक स्वावलंबन.",
    image: "/images/women_shg_enterprise.jpg",
    metrics: [
      { value: "60+", labelEn: "Women SHGs Empowered", labelMr: "सक्रिय महिला बचत गट" },
      { value: "850+", labelEn: "Women Micro-Entrepreneurs", labelMr: "महिला उद्योजिका" },
      { value: "₹18,000", labelEn: "Avg Monthly Family Uplift", labelMr: "सरासरी मासिक उत्पन्न वाढ" }
    ],
    highlightsEn: [
      "Certified organic pulses, spices & flour processing units",
      "Digital accounting, weighing & barcode labeling machines",
      "Financial literacy, micro-credit & government scheme links",
      "Direct market linkage with urban consumer cooperatives in Pune"
    ],
    highlightsMr: [
      "प्रमाणित सेंद्रिय डाळी, मसाले व धान्य प्रक्रिया केंद्र",
      "डिजिटल वजन काटे, सीलिंग व लेबलिंग प्रशिक्षण",
      "बँक व्यवहार, मायक्रो-क्रेडिट व सरकारी योजनांचे लाभ",
      "पुणे व शहरी बाजारात थेट विक्री व्यवस्था"
    ],
    inquiryMsg: "Hello, I want to collaborate on Women SHG Micro-Enterprise initiatives."
  }
];

export function VillageSanctuaryShowcase() {
  const { language, t } = useLanguage();
  const isMarathi = language === "mr";
  const [activePillar, setActivePillar] = useState<string>("gaushala");

  const current = PILLARS.find(p => p.id === activePillar) || PILLARS[0];

  return (
    <Section variant="xl" background="white" className="relative overflow-hidden" id="village-sanctuary">
      <Container size="full">
        <SectionHeader>
          <SectionEyebrow>
            {t("Ground Interventions & Field Realities", "प्रत्यक्ष कार्य • जमिनीवरील बदल")}
          </SectionEyebrow>
          <SectionTitle>
            {t("Animal Sanctuary, Village Life & Rural Prosperity", "पशुकल्याण, निसर्ग संवर्धन व समृद्ध ग्रामजीवन")}
          </SectionTitle>
          <SectionSubtitle className="max-w-3xl mx-auto">
            {t(
              "Explore our core field programmes creating measurable, sustainable dignity across rural Maharashtra — from sacred Gau Shala care to solar-powered villages and women-led enterprises.",
              "नांदेड व महाराष्ट्रातील खेड्यापाड्यांत गोशाळा संवर्धन, सौर सिंचन, डिजिटल शिक्षण आणि महिला बचत गटांच्या माध्यमातून घडणारे शाश्वत परिवर्तन पहा."
            )}
          </SectionSubtitle>
        </SectionHeader>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {PILLARS.map((p) => {
            const isSelected = activePillar === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActivePillar(p.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center gap-2.5 shadow-xs ${
                  isSelected
                    ? "bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-xl shadow-emerald-900/30 scale-105 border border-emerald-400/40"
                    : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700 border border-neutral-200"
                }`}
              >
                <span className="text-base">{p.id === "gaushala" ? "🐄" : p.id === "village-transformation" ? "🌾" : p.id === "smart-classroom" ? "🎓" : "👩‍🌾"}</span>
                <span>{isMarathi ? p.titleMr.split("•")[0].split(",")[0] : p.titleEn.split("&")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Featured Display Card */}
        <div className="bg-neutral-900 text-white rounded-3xl sm:rounded-[36px] overflow-hidden border border-neutral-800 shadow-2xl grid lg:grid-cols-12 gap-0">
          
          {/* Left: High-Res Image with Live Badges */}
          <div className="lg:col-span-6 relative aspect-[16/11] lg:aspect-auto overflow-hidden bg-neutral-950">
            <img
              src={current.image}
              alt={isMarathi ? current.titleMr : current.titleEn}
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
            
            {/* Top Pill */}
            <div className="absolute top-4 left-4 z-10">
              <span className="text-[10px] sm:text-xs font-black tracking-widest text-emerald-300 bg-emerald-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-emerald-500/40 uppercase">
                {isMarathi ? current.badgeMr : current.badgeEn}
              </span>
            </div>

            {/* Bottom Live Metrics Overlay on Mobile / Desktop */}
            <div className="absolute bottom-4 left-4 right-4 z-10 grid grid-cols-3 gap-2 bg-black/75 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
              {current.metrics.map((m, idx) => (
                <div key={idx} className="text-center">
                  <span className="text-base sm:text-xl font-black text-emerald-400 font-heading block">
                    {m.value}
                  </span>
                  <span className="text-[10px] text-neutral-300 font-medium block leading-tight mt-0.5">
                    {isMarathi ? m.labelMr : m.labelEn}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content & Action Details */}
          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{isMarathi ? "सक्रिय मैदानी उपक्रम • महाराष्ट्र" : "Active Field Programme • Maharashtra"}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white font-heading leading-tight">
                {isMarathi ? current.titleMr : current.titleEn}
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {isMarathi ? current.descMr : current.descEn}
              </p>

              {/* Key Highlights List */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  {isMarathi ? "प्रमुख वैशिष्ट्ये व फायदे:" : "Key Execution Highlights:"}
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                  {(isMarathi ? current.highlightsMr : current.highlightsEn).map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border border-emerald-500/30">
                        ✓
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-neutral-800 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/919172003414?text=${encodeURIComponent(current.inquiryMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-extrabold text-xs tracking-wide shadow-lg shadow-emerald-950/60 transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>{isMarathi ? "व्हॉट्सॲपवर सहकार्य करा" : "WhatsApp Inquiry"}</span>
              </a>

              <Link
                to={current.id === "gaushala" ? "/what-we-do/gau-shala" : current.id === "village-transformation" ? "/what-we-do/rural" : current.id === "smart-classroom" ? "/what-we-do/education" : "/what-we-do/womens-education"}
                className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs tracking-wide border border-white/20 transition-all hover:border-white/40"
              >
                <span>{isMarathi ? "सविस्तर माहिती वाचा →" : "Read Full Programme Details →"}</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
