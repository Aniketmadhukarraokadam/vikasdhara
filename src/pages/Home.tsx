import {
  Hero,
  Introduction,
  WhatWeDo,
  VillageSanctuaryShowcase,
  VideoShowcase,
  Approach,
  Ecosystem,
  CorporatePartnerships,
  Impact,
  FutureVision,
  CTASection,
  TransparencySection,
  RegisteredOffice,
  IndiaIdentity,
} from "@/components/sections";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";
import { SEO } from "@/components/seo/SEO";

const marqueeItems = [
  { icon: "🏛️", title: "Public Charitable Trust", sub: "Govt. of Maharashtra Regd." },
  { icon: "📜", title: "MCA CSR-1 Certified", sub: "Schedule VII Compliant" },
  { icon: "🎓", title: "1,250+ Youth Certified", sub: "IT & Digital Skills" },
  { icon: "📍", title: "Nanded HQ & Pune Hub", sub: "Western Maharashtra Footprint" },
  { icon: "🐄", title: "Gau Shala Sanctuary", sub: "Indigenous Cow Care" },
  { icon: "🤝", title: "Corporate Partnerships", sub: "Outcome-Driven Impact" },
  { icon: "🌿", title: "Rural Village Infrastructure", sub: "Solar & Watersheds" },
  { icon: "✨", title: "100% Transparent Audits", sub: "Public Disclosures" },
];

export function Home() {
  return (
    <>
      <SEO
        title="VIKASDHARA FOUNDATION | Education, Skills, Employment & Community Development"
        description="VIKASDHARA FOUNDATION is a public charitable trust based in Nanded, Maharashtra, working across India in education, skill development, employment, women’s empowerment, livelihood, humanitarian support, community development, environment and animal welfare."
        keywords={[
          "VIKASDHARA FOUNDATION",
          "Vikasdhara Foundation",
          "Public Charitable Trust Maharashtra",
          "NGO in Nanded",
          "NGO in Maharashtra",
          "Education NGO India",
          "Skill development NGO Maharashtra",
          "Women education and empowerment",
          "Youth employment support",
          "Livelihood development",
          "Rural development Maharashtra",
          "Community development trust",
          "Gau Shala charitable trust Nanded",
          "Dharmabad public trust"
        ]}
      />
      <Hero />

      {/* Skiper UI Infinite Interactive Marquee Ticker */}
      <div className="bg-gradient-to-r from-neutral-900 via-primary-950 to-neutral-900 py-4.5 border-y border-neutral-800 text-white shadow-inner relative z-20">
        <InfiniteMarquee speed={28} pauseOnHover={true}>
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-400/50 hover:bg-white/10 transition-all duration-300"
            >
              <span className="text-xl">{item.icon}</span>
              <div className="leading-tight">
                <span className="text-xs sm:text-sm font-extrabold text-white block">
                  {item.title}
                </span>
                <span className="text-[10px] text-neutral-400 font-medium">
                  {item.sub}
                </span>
              </div>
            </div>
          ))}
        </InfiniteMarquee>
      </div>

      <Introduction />
      <WhatWeDo />
      <VillageSanctuaryShowcase />
      <VideoShowcase />
      <Approach />
      <Ecosystem />
      <CorporatePartnerships />
      <Impact />
      <FutureVision />
      <CTASection />
      <TransparencySection />
      <RegisteredOffice />
      <IndiaIdentity />
    </>
  );
}