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
    id: "film-overview",
    title: "VORTEXSOFT VIKASDHARA FOUNDATION — The Journey of Opportunity",
    titleMr: "वॉर्टेक्ससॉफ्ट विकासधारा फाउंडेशन — गरजेकडून संधीकडे प्रवास",
    category: "Foundation Film",
    categoryMr: "संस्था परिचय",
    duration: "3:20 MIN",
    thumbnail: "/images/hero_campus.jpg",
    description: "An overview of our public charitable trust in Maharashtra, combining education, skill development, employment facilitation, and community dignity.",
    descriptionMr: "महाराष्ट्र आणि भारतातील शिक्षण, कौशल्यविकास, रोजगार आणि ग्रामीण सक्षमीकरणाचा सर्वसमावेशक परिचय.",
    tag: "CINEMATIC HD",
    videoUrl: "https://www.youtube-nocookie.com/embed/jfKfPfyJRdk?autoplay=1",
    mp4Url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  {
    id: "film-education",
    title: "Education & Digital Classrooms in Maharashtra",
    titleMr: "ग्रामीण शिक्षण व डिजिटल साक्षरता वर्ग",
    category: "Education & Learning",
    categoryMr: "शिक्षण व अध्ययन",
    duration: "2:45 MIN",
    thumbnail: "/images/youth_skills.jpg",
    description: "How practical digital learning and educational resources create transformative learning pathways for youth and children in rural communities.",
    descriptionMr: "डिजिटल साक्षरता आणि अभ्यास साहित्याच्या माध्यमातून मुलांसाठी व युवकांसाठी शिक्षणाची नवी दालने.",
    tag: "DOCUMENTARY",
    videoUrl: "https://www.youtube-nocookie.com/embed/5qap5aO4i9A?autoplay=1",
    mp4Url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
  },
  {
    id: "film-women",
    title: "Women's Empowerment & Vocational Self-Reliance",
    titleMr: "महिला सक्षमीकरण व व्यावसायिक स्वावलंबन",
    category: "Women's Empowerment",
    categoryMr: "महिला सक्षमीकरण",
    duration: "2:15 MIN",
    thumbnail: "/images/womens_skills.jpg",
    description: "Creating practical vocational training, digital skills, and livelihood clusters for women to foster economic and social self-reliance.",
    descriptionMr: "महिलांसाठी व्यावसायिक प्रशिक्षण आणि उपजीविका संधींच्या माध्यमातून स्वावलंबनाचा मार्ग.",
    tag: "FEATURE",
    videoUrl: "https://www.youtube-nocookie.com/embed/y881t8ilMyc?autoplay=1",
    mp4Url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
  },
  {
    id: "film-rural-cattle",
    title: "Rural Development & Responsible Cattle Care (Gau Seva)",
    titleMr: "ग्रामीण पर्यावरण संवर्धन व गोशाळा सेवा",
    category: "Rural & Environment",
    categoryMr: "ग्रामीण व पर्यावरण",
    duration: "2:50 MIN",
    thumbnail: "/images/gaushala.jpg",
    description: "Humane animal welfare, environmental tree plantation, and clean sustainable community practices in Nanded, Maharashtra.",
    descriptionMr: "नांदेड व परिसरात गोशाळा साहाय्य, जनावरांची निगा आणि वृक्षारोपण संवर्धनाचे उपक्रम.",
    tag: "COMMUNITY",
    videoUrl: "https://www.youtube-nocookie.com/embed/kJQP7kiw5Fk?autoplay=1",
    mp4Url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  }
];

export function VideoShowcase() {
  const { language, t } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const categories = ["All", "Education & Learning", "Women's Empowerment", "Rural & Environment"];

  const filteredVideos = videos.filter(
    v => selectedFilter === "All" || v.category === selectedFilter
  );

  return (
    <Section variant="xl" background="none" className="relative overflow-hidden bg-neutral-950 text-white" id="videos">
      {/* Background Animated Gradient Mesh */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary-600/15 rounded-full blur-[140px] animate-float-slow -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-500/15 rounded-full blur-[140px] animate-float-reverse -z-10" />

      <Container size="full">
        <SectionHeader>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-warm-500/20 border border-warm-500/40 text-warm-400 text-xs font-extrabold uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-warm-400 animate-ping" />
            <span>{t("Cinematic Motion & Video Showcase", "व्हिडिओ व मोशन माहितीपट")}</span>
          </div>
          <SectionTitle className="text-white">
            {t("Stories of Dignity, Learning & Community Action", "बदलाची गाथा • प्रत्यक्ष उपक्रमांचे व्हिडिओ")}
          </SectionTitle>
          <SectionSubtitle className="text-neutral-300 max-w-3xl mx-auto">
            {t(
              "Watch our documentary reels showcasing practical initiatives in education, vocational training, women's empowerment, rural care, and animal welfare across Maharashtra and India.",
              "नांदेड, पुणे आणि महाराष्ट्रातील शिक्षण, कौशल्यविकास, महिला सक्षमीकरण आणि गोशाळा संवर्धनाच्या प्रत्यक्ष कार्याची चलचित्रे पहा."
            )}
          </SectionSubtitle>
        </SectionHeader>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedFilter === cat
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-900/50 scale-105 border border-primary-400/40"
                  : "bg-white/10 text-neutral-300 hover:bg-white/20 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Video Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                
                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/30" />

                {/* Duration & Tag Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="text-[10px] font-black tracking-widest text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                    {video.tag}
                  </span>
                  <span className="text-[11px] font-bold text-neutral-200 bg-primary-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-primary-500/40">
                    ⏱ {video.duration}
                  </span>
                </div>

                {/* Pulsing Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-14 h-14 rounded-full bg-primary-600/90 group-hover:bg-primary-500 text-white flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-115 border border-white/30 backdrop-blur-sm">
                    <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Animated Equalizer Waveform Indicator */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 z-10">
                  <div className="w-1 h-3 bg-emerald-400 rounded-full animate-pulse" />
                  <div className="w-1 h-5 bg-sky-400 rounded-full animate-pulse delay-100" />
                  <div className="w-1 h-2 bg-warm-400 rounded-full animate-pulse delay-200" />
                  <span className="text-[10px] font-extrabold text-neutral-300 ml-1.5 uppercase tracking-wider">
                    {t("WATCH FILM", "पहा")}
                  </span>
                </div>
              </div>

              {/* Video Info Content */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary-400 block mb-1">
                    {language === "mr" ? video.categoryMr : video.category}
                  </span>
                  <h3 className="text-base font-bold text-white font-heading leading-snug group-hover:text-primary-300 transition-colors">
                    {language === "mr" ? video.titleMr : video.title}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-2 leading-relaxed line-clamp-2">
                    {language === "mr" ? video.descriptionMr : video.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-primary-300 group-hover:text-white">
                  <span>{t("Click to Play Film", "व्हिडिओ पाहण्यासाठी क्लिक करा")}</span>
                  <span className="text-sm">▶</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Real Functional Video Player Modal */}
      {activeVideo && (
        <VideoPlayerModal
          isOpen={!!activeVideo}
          onClose={() => setActiveVideo(null)}
          title={activeVideo.title}
          titleMr={activeVideo.titleMr}
          category={activeVideo.category}
          categoryMr={activeVideo.categoryMr}
          description={activeVideo.description}
          descriptionMr={activeVideo.descriptionMr}
          duration={activeVideo.duration}
          tag={activeVideo.tag}
          videoUrl={activeVideo.videoUrl}
          mp4Url={activeVideo.mp4Url}
          thumbnail={activeVideo.thumbnail}
        />
      )}
    </Section>
  );
}
