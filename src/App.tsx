import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ApplicationsProvider } from "@/context/ApplicationsContext";
import { ContentProvider } from "@/context/ContentContext";

// Public Layout & Pages
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

// Admin Layout & Pages
import { AdminLayout } from "@/components/admin/AdminLayout";
import { AdminDashboard } from "@/pages/admin/AdminDashboard";
import { AdminApplications } from "@/pages/admin/AdminApplications";
import { AdminContent } from "@/pages/admin/AdminContent";
import { AdminSettings } from "@/pages/admin/AdminSettings";
import { AdminLogin } from "@/pages/admin/AdminLogin";

export function App() {
  return (
    <ApplicationsProvider>
      <ContentProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Website Routes */}
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
            </Route>

            {/* Admin Authentication */}
            <Route path="/admin/login" element={<AdminLogin />} />

            {/* Admin Portal Protected Section */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="applications" element={<AdminApplications />} />
              <Route path="content" element={<AdminContent />} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>

            {/* 404 Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ContentProvider>
    </ApplicationsProvider>
  );
}