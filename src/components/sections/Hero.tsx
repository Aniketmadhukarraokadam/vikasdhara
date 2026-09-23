import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { MotionCanvas } from "@/components/ui/MotionCanvas";
import { VideoPlayerModal } from "@/components/ui/VideoPlayerModal";
import { HaikeiWave, HaikeiBlobBackdrop } from "@/components/ui/HaikeiBackgrounds";
import { VengeanceBadge } from "@/components/ui/VengeanceBadge";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BorderBeam } from "@/components/ui/BorderBeam";
import { ConfettiButton } from "@/components/ui/ConfettiButton";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { language, t } = useLanguage();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section 
      className="relative min-h-[96vh] lg:min-h-screen flex items-center pt-24 pb-20 lg:py-24 overflow-hidden bg-neutral-950 text-white" 
      aria-labelledby="hero-heading"
    >
      {/* Interactive 3D Luminous Particle Motion Canvas */}
      <MotionCanvas />

      {/* Haikei Generative Organic Ambient Blob Backdrop */}
      <HaikeiBlobBackdrop />

      {/* Background 4K Hero Media with Cinematic Ambient Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/hero_campus.jpg"
          alt="Vikasdhara Foundation Community Development in Maharashtra India"
          className="w-full h-full object-cover object-center lg:object-right opacity-85 scale-105 transition-transform duration-[10000ms] hover:scale-100"
        />
        {/* Layered Cinematic Contrast & Mesh Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/60 z-10" />
        
        {/* 3D Glowing Ambient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px] animate-pulse-glow z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/20 rounded-full blur-[100px] animate-float-slow z-10" />
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-warm-500/15 rounded-full blur-[90px] animate-float-reverse z-10" />
      </div>

      <Container size="full" className="relative z-20 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Core Entity Headline & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-7 animate-slide-in-left">
            
            {/* Vengeance UI Glowing Cyber-Beam Trust Badge */}
            <VengeanceBadge glowColor="emerald" pulsing={true}>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-emerald-300">
                {t("Public Charitable Trust • Nanded HQ & Pune Hub, Maharashtra", "सार्वजनिक धर्मादाय न्यास • नांदेड मुख्यालय व पुणे केंद्र, महाराष्ट्र")}
              </span>
            </VengeanceBadge>

            {/* Main H1 Title */}
            <h1 id="hero-heading" className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.08] font-heading text-balance">
              {language === "mr" ? (
                <>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-400 via-white to-primary-300">
                    समर्थ लोक • सक्षम समाज
                  </span>
                  <br />
                  <span className="text-emerald-400">समृद्ध भारत</span>
                </>
              ) : (
                <>
                  Empowering People.{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-primary-200 to-warm-400">
                    Strengthening Communities.
                  </span>{" "}
                  <span className="text-emerald-400">Building a Better India.</span>
                </>
              )}
            </h1>

            {/* Core Entity Description & Supporting Line */}
            <div className="space-y-3 max-w-2xl">
              <p className="text-base sm:text-lg lg:text-xl text-neutral-200 leading-relaxed font-normal text-balance">
                {t(
                  "VIKASDHARA FOUNDATION works to create meaningful opportunities through education, skill development, employment, livelihood support, humanitarian service and community development.",
                  "विकासधारा फाउंडेशन शिक्षण, कौशल्यविकास, रोजगार, उपजीविका साहाय्य, मानवतावादी सेवा आणि समुदाय विकासाच्या माध्यमातून अर्थपूर्ण संधी निर्माण करण्याचे कार्य करते."
                )}
              </p>
              <div className="flex items-center gap-2 text-sm sm:text-base text-warm-400 font-bold tracking-wide">
                <span className="w-6 h-0.5 bg-warm-400 rounded-full inline-block" />
                <span>{t("From Need to Opportunity.", "गरजेकडून संधीकडे.")}</span>
              </div>
            </div>

            {/* Animmaster Lib Magnetic & Confetti Interactive Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <ConfettiButton strength={0.25}>
                <Link to="/what-we-do">
                  <Button size="lg" className="px-6 py-3.5 bg-gradient-to-r from-primary-600 via-sky-600 to-primary-700 hover:from-primary-500 hover:to-sky-500 text-white font-bold text-sm sm:text-base rounded-xl shadow-xl shadow-primary-950/60 card-3d-hover border border-primary-400/30">
                    {t("Explore Our Work", "आमचे उपक्रम पहा")} ↗
                  </Button>
                </Link>
              </ConfettiButton>

              <MagneticButton strength={0.25}>
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base rounded-xl border border-white/30 backdrop-blur-md card-3d-hover transition-all"
                >
                  <span className="w-6 h-6 rounded-full bg-warm-500 text-neutral-950 flex items-center justify-center text-xs">▶</span>
                  <span>{t("Watch Film (3 Min)", "व्हिडिओ पहा (३ मिनिटे)")}</span>
                </button>
              </MagneticButton>

              <Link
                to="/frequently-asked-questions"
                className="text-sm font-bold text-neutral-300 hover:text-white transition-colors underline-offset-8 hover:underline py-2"
              >
                {t("Master FAQ Hub 💡", "माहिती व प्रश्नोत्तरे 💡")}
              </Link>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm font-semibold text-neutral-300">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  ✓
                </div>
                <span>{t("Registered Trust", "नोंदणीकृत न्यास")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 shrink-0">
                  🎯
                </div>
                <span>{t("14 Active Domains", "१४ कार्यक्षेत्रे")}</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <div className="w-7 h-7 rounded-lg bg-warm-500/20 border border-warm-500/40 flex items-center justify-center text-warm-400 shrink-0">
                  🤝
                </div>
                <span>{t("CSR / Partner Ready", "सीएसआर भागीदारी")}</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Glassmorphic Floating Showcase (5 cols) */}
          <div className="lg:col-span-5 relative perspective-1000 preserve-3d animate-slide-in-right hidden md:block">
            
            {/* Top Floating 3D Badge */}
            <div className="absolute -top-6 -left-6 z-30 animate-float-slow">
              <div className="glass-dark-3d p-3.5 rounded-2xl flex items-center gap-3 border border-primary-400/40 shadow-2xl">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-primary-600 flex items-center justify-center text-lg shadow-md">
                  🎓
                </div>
                <div>
                  <div className="text-[10px] font-bold text-sky-300 uppercase tracking-widest">
                    {t("Education & Skills", "शिक्षण व कौशल्ये")}
                  </div>
                  <div className="text-xs font-extrabold text-white">
                    {t("Practical Opportunities", "व्यावहारिक संधी")}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Floating 3D Badge */}
            <div className="absolute -bottom-6 -right-4 z-30 animate-float-reverse">
              <div className="glass-dark-3d p-3.5 rounded-2xl flex items-center gap-3 border border-emerald-400/40 shadow-2xl">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-accent-600 flex items-center justify-center text-lg shadow-md">
                  🏢
                </div>
                <div>
                  <div className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest">
                    {t("Corporate CSR Pathway", "सीएसआर प्रकल्प मॉडेल")}
                  </div>
                  <div className="text-xs font-extrabold text-white">
                    {t("5-Stage Implementation", "५ टप्प्यांचे नियोजन")}
                  </div>
                </div>
              </div>
            </div>

            {/* Central 3D Glassmorphic Card with Vengeance Border Beam */}
            <div className="relative glass-dark-3d rounded-3xl p-7 border border-white/20 shadow-2xl space-y-6 card-3d-hover overflow-hidden">
              <BorderBeam size={280} duration={8} colorFrom="#38bdf8" colorTo="#10b981" borderWidth={2} />
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    {t("Mission Ecosystem", "कार्यप्रणाली")}
                  </span>
                </div>
                <span className="text-[11px] font-bold text-primary-300 bg-primary-900/60 px-2.5 py-1 rounded-full border border-primary-700">
                  {t("Maharashtra & India", "महाराष्ट्र व भारत")}
                </span>
              </div>

              {/* Ecosystem Interactive Progress Items */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-neutral-200">📚 {t("Education & Digital Learning", "शिक्षण व डिजिटल साक्षरता")}</span>
                    <span className="text-sky-400">ACTIVE</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-sky-400 to-primary-500 h-full rounded-full w-[90%] animate-pulse" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-neutral-200">⚡ {t("Skill Development & Vocational", "कौशल्यविकास व प्रशिक्षण")}</span>
                    <span className="text-emerald-400">ACTIVE</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-400 to-accent-500 h-full rounded-full w-[85%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-neutral-200">💼 {t("Employment Facilitation", "रोजगार व प्लेसमेंट साहाय्य")}</span>
                    <span className="text-warm-400">ACTIVE</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-warm-400 to-warm-600 h-full rounded-full w-[80%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-neutral-200">🌿 {t("Community & Animal Welfare", "समुदाय विकास व गोशाळा")}</span>
                    <span className="text-primary-300">CONTINUING</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-primary-400 to-emerald-400 h-full rounded-full w-[95%]" />
                  </div>
                </div>
              </div>

              {/* Trust Deed Verification Callout */}
              <div className="p-3.5 bg-primary-950/60 rounded-2xl border border-primary-500/30 text-xs text-neutral-300 flex items-center gap-3">
                <span className="text-xl">📜</span>
                <div className="leading-snug">
                  <span className="font-bold text-white block">
                    {t("Statutory Public Trust Standards", "धर्मादाय न्यास वैधानिक मानके")}
                  </span>
                  <span className="text-[11px] text-neutral-400">
                    {t("Near Chhatrapati Shivaji Putla, Chondi, Nanded", "छत्रपती शिवाजी पुतळ्याजवळ, चोंडी, नांदेड")}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>

      {/* Haikei Bottom Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <HaikeiWave fillColor="#f8fafc" />
      </div>

      {/* Hero Foundation Film Video Modal */}
      <VideoPlayerModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        title="VIKASDHARA FOUNDATION — The Journey of Opportunity"
        titleMr="विकासधारा फाउंडेशन — गरजेकडून संधीकडे प्रवास"
        category="Foundation Film"
        categoryMr="संस्था परिचय"
        duration="3:20 MIN"
        tag="CINEMATIC HD"
        description="An overview of our public charitable trust in Maharashtra, combining education, skill development, employment facilitation, and community dignity."
        descriptionMr="महाराष्ट्र आणि भारतातील शिक्षण, कौशल्यविकास, रोजगार आणि ग्रामीण सक्षमीकरणाचा सर्वसमावेशक परिचय."
        videoUrl="https://www.youtube-nocookie.com/embed/jfKfPfyJRdk?autoplay=1"
        mp4Url="/videos/foundation_journey.mp4"
        thumbnail="/images/hero_campus.jpg"
      />
    </section>
  );
}