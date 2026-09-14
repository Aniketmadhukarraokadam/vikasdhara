import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ApplicationsProvider } from "@/context/ApplicationsContext";
import { ContentProvider } from "@/context/ContentContext";
import { LanguageProvider } from "@/context/LanguageContext";

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
import { FAQPage } from "@/pages/FAQPage";
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
    <LanguageProvider>
      <ApplicationsProvider>
        <ContentProvider>
          <BrowserRouter>
            <Routes>
              {/* Public Website Routes */}
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="vision-mission" element={<Navigate to="/about" replace />} />
                <Route path="what-we-do" element={<WhatWeDoPage />} />
                <Route path="what-we-do/:slug" element={<ProgrammeDetail />} />
                <Route path="impact" element={<ImpactPage />} />
                <Route path="pune-ngo" element={<PuneNGO />} />
                <Route path="get-involved/partner" element={<PartnerPage />} />
                <Route path="partners" element={<Navigate to="/get-involved/partner" replace />} />
                <Route path="get-involved/volunteer" element={<VolunteerPage />} />
                <Route path="volunteer" element={<Navigate to="/get-involved/volunteer" replace />} />
                <Route path="get-involved/support" element={<SupportPage />} />
                <Route path="support" element={<Navigate to="/get-involved/support" replace />} />
                <Route path="donate" element={<Navigate to="/get-involved/support" replace />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="transparency" element={<TransparencyPage />} />
                <Route path="governance" element={<Navigate to="/transparency" replace />} />
                <Route path="frequently-asked-questions" element={<FAQPage />} />
                <Route path="faq" element={<Navigate to="/frequently-asked-questions" replace />} />

                {/* Blueprint Top-Level Programme Alias Redirects */}
                <Route path="education" element={<Navigate to="/what-we-do/education" replace />} />
                <Route path="women-empowerment" element={<Navigate to="/what-we-do/women-empowerment" replace />} />
                <Route path="skill-development" element={<Navigate to="/what-we-do/skill-development" replace />} />
                <Route path="employment" element={<Navigate to="/what-we-do/employment" replace />} />
                <Route path="livelihood-development" element={<Navigate to="/what-we-do/livelihood-development" replace />} />
                <Route path="corporate-projects" element={<Navigate to="/what-we-do/corporate-projects" replace />} />
                <Route path="community-development" element={<Navigate to="/what-we-do/community-development" replace />} />
                <Route path="rural-development" element={<Navigate to="/what-we-do/rural-development" replace />} />
                <Route path="humanitarian-support" element={<Navigate to="/what-we-do/humanitarian-support" replace />} />
                <Route path="elderly-care" element={<Navigate to="/what-we-do/elderly-care" replace />} />
                <Route path="health-awareness" element={<Navigate to="/what-we-do/health-awareness" replace />} />
                <Route path="environment" element={<Navigate to="/what-we-do/environment" replace />} />
                <Route path="animal-welfare" element={<Navigate to="/what-we-do/animal-welfare" replace />} />
                <Route path="gau-shala" element={<Navigate to="/what-we-do/gau-shala" replace />} />
                <Route path="disaster-relief" element={<Navigate to="/what-we-do/disaster-relief" replace />} />
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
    </LanguageProvider>
  );
}