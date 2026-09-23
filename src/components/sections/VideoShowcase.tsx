import { useState } from "react";
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";
import { VideoPlayerModal } from "@/components/ui/VideoPlayerModal";

interface VideoItem {
  id: string;
  title: string;
  titleMr: string;
  category: string;
  categoryMr: string;
  duration: string;
  thumbnail: string;
  description: string;
  descriptionMr: string;
  tag: string;
  videoUrl: string;
  mp4Url?: string;
}

const videos: VideoItem[] = [
  {
    id: "film-gaushala-care",
    title: "Gau Shala Sanctuary & Indigenous Cow Protection",
    titleMr: "गोशाळा संवर्धन, देशी गोवंश संगोपन व पशुकल्याण",
    category: "Animal Welfare & Gau Shala",
    categoryMr: "गोशाळा व पशुकल्याण",
    duration: "3:45 MIN",
    thumbnail: "/images/gaushala_animals.jpg",
    description: "Witness our dedicated Gau Shala sanctuary in Nanded, providing lifetime shelter, nutritious green fodder, and veterinary healthcare for indigenous Gir cows and abandoned livestock.",
    descriptionMr: "नांदेड येथील विकासधारा गोशाळेत देशी गोवंशाचे रक्षण, मोफत चारा, शुद्ध पाणी आणि पशुवैद्यकीय आरोग्य सेवेचे थेट दर्शन.",
    tag: "GAU SHALA HD",
    videoUrl: "/videos/gaushala_animal_care.mp4",
    mp4Url: "/videos/gaushala_animal_care.mp4"
  },
  {
    id: "film-village-transformation",
    title: "Village Transformation, Solar Irrigation & Water Stewardship",
    titleMr: "ग्राम विकास, सौर सिंचन व जलसंधारण क्रांती",
    category: "Rural & Village Life",
    categoryMr: "ग्राम विकास व शेती",
    duration: "4:10 MIN",
    thumbnail: "/images/village_transformation.jpg",
    description: "Holistic village rejuvenation across Maharashtra: check dam water bodies, solar drip irrigation, clean community roads, and sustainable organic farming.",
    descriptionMr: "महाराष्ट्रातील खेड्यांमध्ये सौर ऊर्जा, जलसंधारण बंधारे, आधुनिक शेती आणि समृद्ध ग्रामविकासाची यशोगाथा.",
    tag: "RURAL IMPACT",
    videoUrl: "/videos/village_transformation.mp4",
    mp4Url: "/videos/village_transformation.mp4"
  },
  {
    id: "film-smart-classroom",
    title: "Rural Digital Smart Classrooms & Child Education",
    titleMr: "ग्रामीण डिजिटल शाळा, ई-लर्निंग व मुलांचे शिक्षण",
    category: "Education & Learning",
    categoryMr: "शिक्षण व अभ्यास",
    duration: "3:15 MIN",
    thumbnail: "/images/rural_smart_classroom.jpg",
    description: "Bridging the urban-rural divide by deploying interactive smart boards, tablets, STEM kits, and high-quality bilingual education for village schoolchildren.",
    descriptionMr: "ग्रामीण शाळांमध्ये डिजिटल फलक, शैक्षणिक टॅबलेट्स आणि आधुनिक साधनांद्वारे बालशिक्षणाचा नवा अध्याय.",
    tag: "EDUCATION 4.0",
    videoUrl: "/videos/rural_smart_classroom.mp4",
    mp4Url: "/videos/rural_smart_classroom.mp4"
  },
  {
    id: "film-women-enterprise",
    title: "Women Self-Help Groups (Bachat Gat) & Micro-Enterprises",
    titleMr: "महिला बचत गट, प्रक्रिया उद्योग व स्वावलंबन",
    category: "Women Empowerment",
    categoryMr: "महिला सक्षमीकरण",
    duration: "2:50 MIN",
    thumbnail: "/images/women_shg_enterprise.jpg",
    description: "Training rural women in agro-processing, spices manufacturing, eco-friendly packaging, and direct market access for sustained household prosperity.",
    descriptionMr: "कृषी प्रक्रिया, पारंपरिक उत्पादने व आधुनिक पॅकेजिंगद्वारे ग्रामीण महिलांचे आर्थिक स्वावलंबन.",
    tag: "LIVELIHOOD",
    videoUrl: "/videos/women_shg_enterprise.mp4",
    mp4Url: "/videos/women_shg_enterprise.mp4"
  },
  {
    id: "film-vet-camp",
    title: "Rural Veterinary Care Camps & Livestock Protection",
    titleMr: "मोफत पशुवैद्यकीय शिबिर व आरोग्य तपासणी",
    category: "Animal Welfare & Gau Shala",
    categoryMr: "गोशाळा व पशुकल्याण",
    duration: "2:30 MIN",
    thumbnail: "/images/animal_welfare_vet.jpg",
    description: "Providing free on-ground medical camps, vaccinations, mineral supplements, and emergency care for rural cattle and farm animals.",
    descriptionMr: "गावागावांत फिरते पशुवैद्यकीय शिबिर, लसीकरण आणि जनावरांच्या आरोग्याची मोफत काळजी.",
    tag: "VET SEVA",
    videoUrl: "/videos/gaushala_animal_care.mp4",
    mp4Url: "/videos/gaushala_animal_care.mp4"
  },
  {
    id: "film-journey",
    title: "VIKASDHARA FOUNDATION — The Institutional Mission",
    titleMr: "विकासधारा फाउंडेशन — संस्थात्मक ध्येय व कार्य",
    category: "Rural & Village Life",
    categoryMr: "ग्राम विकास व शेती",
    duration: "3:30 MIN",
    thumbnail: "/images/hero_campus.jpg",
    description: "An overview of our registered public charitable trust in Maharashtra, combining education, skill development, employment facilitation, and community dignity.",
    descriptionMr: "महाराष्ट्र आणि भारतातील शिक्षण, कौशल्यविकास, रोजगार आणि ग्रामीण सक्षमीकरणाचा सर्वसमावेशक परिचय.",
    tag: "CINEMATIC HD",
    videoUrl: "/videos/foundation_journey.mp4",
    mp4Url: "/videos/foundation_journey.mp4"
  }
];

export function VideoShowcase() {
  const { language, t } = useLanguage();
  const isMarathi = language === "mr";
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const categories = isMarathi
    ? [
        { key: "All", label: "सर्व व्हिडिओ (All)" },
        { key: "Animal Welfare & Gau Shala", label: "गोशाळा व पशुकल्याण" },
        { key: "Rural & Village Life", label: "ग्राम विकास व शेती" },
        { key: "Education & Learning", label: "शिक्षण व ई-लर्निंग" },
        { key: "Women Empowerment", label: "महिला सक्षमीकरण" }
      ]
    : [
        { key: "All", label: "All Videos (6)" },
        { key: "Animal Welfare & Gau Shala", label: "Gau Shala & Animals" },
        { key: "Rural & Village Life", label: "Village Transformation" },
        { key: "Education & Learning", label: "Education & Learning" },
        { key: "Women Empowerment", label: "Women Empowerment" }
      ];

  const filteredVideos = videos.filter(
    v => selectedFilter === "All" || v.category === selectedFilter
  );

  return (
    <Section variant="xl" background="none" className="relative overflow-hidden bg-neutral-950 text-white" id="videos">
      {/* Background Animated Gradient Mesh */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary-600/15 rounded-full blur-[140px] animate-float-slow -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-[140px] animate-float-reverse -z-10" />

      <Container size="full">
        <SectionHeader>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-extrabold uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{t("Cinematic Motion & Video Showcase", "व्हिडिओ व मोशन माहितीपट")}</span>
          </div>
          <SectionTitle className="text-white">
            {t("Stories of Dignity, Animal Welfare & Village Transformation", "पशुकल्याण, ग्रामविकास व परिवर्तनाची गाथा • प्रत्यक्ष व्हिडिओ")}
          </SectionTitle>
          <SectionSubtitle className="text-neutral-300 max-w-3xl mx-auto">
            {t(
              "Experience the ground reality of our Gau Shala animal sanctuary, smart village classrooms, solar water initiatives, and women self-help enterprises across Maharashtra.",
              "नांदेड, पुणे आणि महाराष्ट्रातील गोशाळा संवर्धन, डिजिटल वर्गखोल्या, सौर सिंचन आणि महिला बचत गटांच्या प्रत्यक्ष उपक्रमांची चित्रे व व्हिडिओ पहा."
            )}
          </SectionSubtitle>
        </SectionHeader>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedFilter(cat.key)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${selectedFilter === cat.key
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/50 scale-105 border border-emerald-400/40"
                  : "bg-white/10 text-neutral-300 hover:bg-white/20 border border-white/10"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 3D Video Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="glass-dark-3d rounded-3xl overflow-hidden border border-white/15 group cursor-pointer card-3d-hover flex flex-col justify-between"
            >
              {/* Thumbnail Container with Play Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={video.thumbnail}
                  alt={isMarathi ? video.titleMr : video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />

                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/30" />

                {/* Duration & Tag Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="text-[10px] font-black tracking-widest text-emerald-300 bg-emerald-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-emerald-500/30">
                    {video.tag}
                  </span>
                  <span className="text-[11px] font-bold text-neutral-200 bg-neutral-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                    ⏱ {video.duration}
                  </span>
                </div>

                {/* Pulsing Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-emerald-600/90 group-hover:bg-emerald-500 flex items-center justify-center text-white shadow-2xl transition-all duration-300 group-hover:scale-115 border border-emerald-300/40">
                      <svg className="w-6 h-6 ml-1 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 rounded-full border-2 border-emerald-400 animate-ping opacity-60 pointer-events-none" />
                  </div>
                </div>

                {/* Bottom Video Category Banner */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-bold text-neutral-300">
                  <span className="bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-emerald-400">
                    {isMarathi ? video.categoryMr : video.category}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Click to Play
                  </span>
                </div>
              </div>

              {/* Video Info Section */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-extrabold text-white text-base sm:text-lg group-hover:text-emerald-400 transition-colors leading-snug line-clamp-2">
                    {isMarathi ? video.titleMr : video.title}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm mt-2 leading-relaxed line-clamp-3">
                    {isMarathi ? video.descriptionMr : video.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-400 group-hover:underline flex items-center gap-1.5">
                    <span>{isMarathi ? "व्हिडिओ पहा" : "Watch Full Video"}</span>
                    <span>→</span>
                  </span>
                  <span className="text-[10px] text-neutral-500 font-mono">
                    1080p Full HD
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Video Modal Player with MP4 and streaming fallback */}
      {activeVideo && (
        <VideoPlayerModal
          isOpen={!!activeVideo}
          onClose={() => setActiveVideo(null)}
          title={isMarathi ? activeVideo.titleMr : activeVideo.title}
          videoUrl={activeVideo.videoUrl}
          mp4Url={activeVideo.mp4Url}
        />
      )}
    </Section>
  );
}
