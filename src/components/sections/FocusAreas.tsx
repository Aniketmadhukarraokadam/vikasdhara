import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

interface FocusCardData {
  number: string;
  title: string;
  titleMr: string;
  description: string;
  descriptionMr: string;
  image: string;
  icon: string;
  href: string;
}

export function FocusAreas() {
  const { t, language } = useLanguage();
  const isMr = language === "mr";

  const cards: FocusCardData[] = [
    {
      number: "01",
      title: "Education",
      titleMr: "शिक्षण व अध्ययन",
      description: "Supporting access to education and learning opportunities.",
      descriptionMr: "प्रत्येक मुलाला दर्जेदार शिक्षण व अध्ययनाच्या संधी उपलब्ध करून देणे.",
      image: "/images/rural_smart_classroom.jpg",
      icon: "📖",
      href: "/what-we-do/education",
    },
    {
      number: "02",
      title: "Skill Development",
      titleMr: "कौशल्य विकास",
      description: "Training people with practical skills that can improve employability and livelihoods.",
      descriptionMr: "युवा वर्गाला रोजगाराभिमुख आणि व्यावहारिक कौशल्य प्रशिक्षण देणे.",
      image: "/images/youth_skills.jpg",
      icon: "⚙️",
      href: "/what-we-do/skills",
    },
    {
      number: "03",
      title: "Women Empowerment",
      titleMr: "महिला सक्षमीकरण",
      description: "Supporting women's education, awareness and opportunities.",
      descriptionMr: "महिलांचे शिक्षण, आर्थिक साक्षरता आणि स्वावलंबनाला बळकट करणे.",
      image: "/images/womens_skills.jpg",
      icon: "🌸",
      href: "/what-we-do/womens-education",
    },
    {
      number: "04",
      title: "Employment & Livelihoods",
      titleMr: "रोजगार व उपजीविका",
      description: "Helping individuals build pathways toward employment and sustainable livelihoods.",
      descriptionMr: "शाश्वत उपजीविका व स्वयंरोजगारासाठी थेट सहकार्य आणि मार्गदर्शन.",
      image: "/images/women_shg_enterprise.jpg",
      icon: "💼",
      href: "/what-we-do/employment",
    },
    {
      number: "05",
      title: "Food & Community Support",
      titleMr: "अन्न व समुदाय साहाय्य",
      description: "Supporting people and communities with essential care and assistance.",
      descriptionMr: "गरजूंना पोषण आहार, आपत्कालीन मदत आणि मूलभूत गरजांची पूर्तता.",
      image: "/stories/community-kitchen.jpg",
      icon: "🍲",
      href: "/what-we-do/rural",
    },
    {
      number: "06",
      title: "Senior Care",
      titleMr: "ज्येष्ठ नागरिक सेवा",
      description: "Creating compassionate spaces and support for elderly people.",
      descriptionMr: "ज्येष्ठ नागरिकांसाठी सन्मानपूर्वक जीवन, आरोग्य तपासणी आणि निवारा केंद्र.",
      image: "/images/humanitarian_care.jpg",
      icon: "🧓",
      href: "/what-we-do/rural",
    },
    {
      number: "07",
      title: "Animal Welfare",
      titleMr: "गोशाळा व पशुकल्याण",
      description: "Supporting animal welfare initiatives, including animal shelters and gaushala-related activities.",
      descriptionMr: "देशी गोवंश संवर्धन, पशू निवारा आणि मोफत पशुवैद्यकीय उपचार शिबिरे.",
      image: "/images/gaushala_animals.jpg",
      icon: "🐄",
      href: "/what-we-do/gau-shala",
    },
    {
      number: "08",
      title: "Community Development",
      titleMr: "सर्वसमावेशक ग्रामविकास",
      description: "Supporting initiatives that contribute to stronger, healthier and more resilient communities.",
      descriptionMr: "गाव पातळीवर जलसंधारण, स्वच्छता, आरोग्य आणि पायाभूत सुविधांची उभारणी.",
      image: "/images/village_transformation.jpg",
      icon: "🏡",
      href: "/what-we-do/rural",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFF9F0]" id="focus-areas" aria-labelledby="focus-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF4EC] border border-[#2F6B45]/20 text-[#1F4D34] mb-4">
            <span className="text-xs font-bold uppercase tracking-widest">
              {t("Our Pillars of Action", "आमच्या कार्याची दिशा")}
            </span>
          </div>
          
          <h2
            id="focus-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251D] tracking-tight font-sans"
          >
            {t("Where We Create Impact", "आम्ही घडवून आणत असलेला बदल")}
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-[#68736C] leading-relaxed">
            {t(
              "Our work focuses on creating opportunities, dignity and support across different stages of community life.",
              "आमचे कार्य सामाजिक जीवनाच्या विविध टप्प्यांवर संधी, सन्मान आणि सर्वांगीण आधार निर्माण करण्यावर केंद्रित आहे."
            )}
          </p>
        </div>

        {/* 8 Interactive Focus Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {cards.map((card) => (
            <Link
              key={card.number}
              to={card.href}
              className="group block bg-white rounded-3xl overflow-hidden border border-[#2F6B45]/15 shadow-warm-card hover:shadow-warm-elevated transition-all duration-400 hover:-translate-y-2 flex flex-col justify-between"
              style={{ transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
            >
              <div>
                {/* Image Container with 1.04 Zoom on Hover */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  
                  {/* Number Badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-extrabold text-[#1F4D34] shadow-sm">
                    {card.number}
                  </span>

                  {/* Icon Indicator */}
                  <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-lg shadow-sm group-hover:bg-[#F39A3F] group-hover:text-white transition-colors duration-300">
                    <span>{card.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-bold text-[#17251D] group-hover:text-[#2F6B45] transition-colors font-sans">
                    {isMr ? card.titleMr : card.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#68736C] leading-relaxed line-clamp-3">
                    {isMr ? card.descriptionMr : card.description}
                  </p>
                </div>
              </div>

              {/* Bottom Interactive CTA Link */}
              <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#2F6B45]">
                <span>{t("Learn More", "अधिक माहिती")}</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-1.5 text-base">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
