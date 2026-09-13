import {
  Hero,
  Introduction,
  WhatWeDo,
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

const homeFaqs = [
  {
    question: "What is Vortexsoft Vikasdhara Foundation and where is it located?",
    answer: "VORTEXSOFT VIKASDHARA FOUNDATION is a registered Indian Public Charitable Trust in Maharashtra. It operates its Registered Headquarters in Dharmabad, Nanded, and a Regional Coordination and CSR Partnerships Hub in Pune, Maharashtra."
  },
  {
    question: "What key programmes does Vortexsoft Vikasdhara Foundation operate in Maharashtra & Pune?",
    answer: "The Foundation delivers 14+ integrated community programmes including Youth Digital & Vocational Skills, Women Empowerment & Career Mentorship, Employment Placement, Corporate CSR Execution, Rural Infrastructure, Health Awareness, Humanitarian Nutrition, and Animal Welfare (Gau Shala)."
  },
  {
    question: "How can corporate organizations in Pune and Maharashtra partner for CSR projects?",
    answer: "Corporations can partner with the Foundation under Section 135 (Schedule VII) of the Companies Act. We offer 100% compliant, transparent end-to-end CSR implementation: baseline assessment, project deployment, digital monitoring, and comprehensive impact audits. Inquiries can be sent to partnerships@vikasdharafoundation.org."
  },
  {
    question: "Is Vortexsoft Vikasdhara Foundation an 80G/12A registered public trust?",
    answer: "Yes, Vortexsoft Vikasdhara Foundation is established as a statutory Public Charitable Trust in Maharashtra, maintaining institutional financial audits, strict governance, and statutory trust disclosures."
  }
];

export function Home() {
  return (
    <>
      <SEO
        title="VORTEXSOFT VIKASDHARA FOUNDATION | Top NGO in Pune & Maharashtra | Education, Skills & CSR"
        description="VORTEXSOFT VIKASDHARA FOUNDATION is a leading registered public charitable trust and NGO in Maharashtra with hubs in Pune & Nanded. Delivering transformative programmes in youth skills, women empowerment, education, rural development, CSR partnerships, and animal welfare."
        keywords={[
          "Vortexsoft Vikasdhara Foundation",
          "NGO in Pune",
          "Top NGO in Pune Maharashtra",
          "NGO in Nanded Maharashtra",
          "Public Charitable Trust Maharashtra",
          "Pune NGO CSR Partnership",
          "CSR implementation agency Pune",
          "Skill development NGO Pune",
          "Women education NGO Maharashtra",
          "Youth employment NGO Pune",
          "Rural development charity India",
          "Animal welfare NGO Pune Nanded",
          "Gau Shala trust Maharashtra",
          "Registered NGO in Pune",
          "Dharmabad public trust"
        ]}
        faqs={homeFaqs}
        geoCity="All"
      />
      <Hero />
      <Introduction />
      <WhatWeDo />
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