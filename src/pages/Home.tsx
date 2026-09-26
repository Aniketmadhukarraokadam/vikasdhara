import {
  Hero,
  ImpactStrip,
  FocusAreas,
  EducationFeature,
  WomenSkillsSection,
  CommunityCareSection,
  AnimalWelfareSection,
  HowWeWork,
  GetInvolvedSection,
  CSRSection,
  StoryImpactVisual,
  DonationCTA,
  RegisteredOffice,
} from "@/components/sections";
import { SEO } from "@/components/seo/SEO";

export function Home() {
  return (
    <>
      <SEO
        title="Vikasdhara Foundation | Education, Skills & Community Development"
        description="Vikasdhara Foundation works to create opportunities through education, skill development, livelihoods, social awareness, community care, women empowerment and animal welfare initiatives."
        keywords={[
          "Vikasdhara Foundation",
          "VIKASDHARA FOUNDATION",
          "Education NGO India",
          "Skill development NGO Maharashtra",
          "Women education and empowerment",
          "Youth employment support",
          "Community care Maharashtra",
          "Senior citizen care",
          "Animal welfare NGO",
          "Gaushala charitable trust Nanded",
          "Dharmabad public trust",
          "CSR partner Maharashtra",
          "Pune NGO",
          "Nanded NGO"
        ]}
      />

      {/* 1. Full Viewport Hero with Human-Centered Collage */}
      <Hero />

      {/* 2. Qualitative Impact Strip */}
      <ImpactStrip />

      {/* 3. Where We Create Impact: 8 Interactive Focus Cards */}
      <FocusAreas />

      {/* 4. Editorial Education Feature Section */}
      <EducationFeature />

      {/* 5. Women & Skills Section (LEARN -> BUILD -> GROW) */}
      <WomenSkillsSection />

      {/* 6. Community Care Section (Warmer Cream Theme) */}
      <CommunityCareSection />

      {/* 7. Animal Welfare & Gaushala Section (Soft Natural Green) */}
      <AnimalWelfareSection />

      {/* 8. How We Work: 5-Step Process with Flowing Green Line */}
      <HowWeWork />

      {/* 9. Interactive Visual Storytelling: From Support to Opportunity */}
      <StoryImpactVisual />

      {/* 10. CSR Partnership: Enterprise-Facing & Schedule VII Aligned */}
      <CSRSection />

      {/* 11. Volunteer / Get Involved: You Can Be Part of the Change */}
      <GetInvolvedSection />

      {/* 12. Registered Office & Geographic Roots (Nanded & Pune) */}
      <RegisteredOffice />

      {/* 13. Large Final Donation CTA (Deep Green with Ambient Light Points) */}
      <DonationCTA />
    </>
  );
}