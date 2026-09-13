import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { WhatWeDoPage } from "@/pages/WhatWeDo";
import { ProgrammeDetail } from "@/pages/ProgrammeDetail";
import { ImpactPage } from "@/pages/Impact";
import { PartnerPage } from "@/pages/Partner";
import { VolunteerPage } from "@/pages/Volunteer";
import { SupportPage } from "@/pages/Support";
import { ContactPage } from "@/pages/Contact";
import { TransparencyPage } from "@/pages/Transparency";
import { PuneNGO } from "@/pages/PuneNGO";
import { NotFound } from "@/pages/NotFound";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="what-we-do" element={<WhatWeDoPage />} />
          <Route path="what-we-do/:slug" element={<ProgrammeDetail />} />
          <Route path="impact" element={<ImpactPage />} />
          <Route path="pune-ngo" element={<PuneNGO />} />
          <Route path="get-involved/partner" element={<PartnerPage />} />
          <Route path="get-involved/volunteer" element={<VolunteerPage />} />
          <Route path="get-involved/support" element={<SupportPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="transparency" element={<TransparencyPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}