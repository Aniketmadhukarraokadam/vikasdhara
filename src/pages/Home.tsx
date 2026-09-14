import {
  Hero,
  Introduction,
  WhatWeDo,
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

import { SEO } from "@/components/seo/SEO";

export function Home() {
  return (
    <>
      <SEO
        title="VORTEXSOFT VIKASDHARA FOUNDATION | Education, Skills, Employment & Community Development"
        description="VORTEXSOFT VIKASDHARA FOUNDATION is a public charitable trust based in Nanded, Maharashtra, working across India in education, skill development, employment, women’s empowerment, livelihood, humanitarian support, community development, environment and animal welfare."
        keywords={[
          "VORTEXSOFT VIKASDHARA FOUNDATION",
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
      <Introduction />
      <WhatWeDo />
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