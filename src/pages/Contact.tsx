import { useState } from "react";
import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionEyebrow } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input, Textarea, Label } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { contact } from "@/content";
import { SEO } from "@/components/seo/SEO";

import { useApplications } from "@/context/ApplicationsContext";

export function ContactPage() {
  const { addApplication } = useApplications();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    organisation: "",
    subject: "",
    locationPref: "pune",
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Determine ATS category
    let appType: "contact" | "csr_partner" | "volunteer" | "beneficiary_skilling" = "contact";
    const sub = formData.subject.toLowerCase();
    if (sub.includes("partner") || sub.includes("corporate") || sub.includes("csr")) {
      appType = "csr_partner";
    } else if (sub.includes("volunteer")) {
      appType = "volunteer";
    } else if (sub.includes("skill") || sub.includes("train") || sub.includes("education")) {
      appType = "beneficiary_skilling";
    }

    addApplication({
      type: appType,
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      organization: formData.organisation,
      location: formData.locationPref,
      subject: formData.subject,
      message: formData.message,
      status: "new",
      priority: appType === "csr_partner" ? "high" : "medium",
    });

    await new Promise(resolve => setTimeout(resolve, 600));
    setStatus("success");
    setFormData({ name: "", email: "", mobile: "", organisation: "", subject: "", locationPref: "pune", message: "", consent: false });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const { contact: cont } = contact;

  return (
    <>
      <SEO
        title="Contact Us | VORTEXSOFT VIKASDHARA FOUNDATION (Pune & Nanded)"
        description="Connect with VORTEXSOFT VIKASDHARA FOUNDATION in Pune and Nanded, Maharashtra. Inquiries for CSR partnerships, volunteer opportunities, training, and community initiatives."
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Contact", item: "/contact" }
        ]}
      />

      <Section variant="lg" background="sky">
        <Container>
          <SectionHeader>
            <SectionEyebrow>Connect With Us</SectionEyebrow>
            <SectionTitle>{cont.heading}</SectionTitle>
            <SectionSubtitle className="max-w-3xl mx-auto">{cont.subheading}</SectionSubtitle>
          </SectionHeader>
        </Container>
      </Section>

      <Section variant="lg" background="none">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form Column */}
            <div className="lg:col-span-2">
              <Card variant="bordered" padding="lg" className="shadow-soft">
                <CardHeader>
                  <CardTitle>Send Us an Official Message</CardTitle>
                  <p className="text-neutral-600 text-sm mt-1">Our coordination team in Pune & Nanded will respond within 24–48 business hours.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="mobile">Mobile / WhatsApp Number *</Label>
                        <Input
                          id="mobile"
                          name="mobile"
                          type="tel"
                          value={formData.mobile}
                          onChange={handleChange}
                          required
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <Label htmlFor="organisation">Organisation / Company Name</Label>
                        <Input
                          id="organisation"
                          name="organisation"
                          value={formData.organisation}
                          onChange={handleChange}
                          placeholder="Company, NGO, Institution or Self"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="subject">Subject / Purpose *</Label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-800 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                        >
                          <option value="">Select purpose</option>
                          {cont.categories.map((cat) => (
                            <option key={cat} value={cat.toLowerCase().replace(/\s+/g, "")}>{cat}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="locationPref">Preferred Coordination Hub</Label>
                        <select
                          id="locationPref"
                          name="locationPref"
                          value={formData.locationPref}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-800 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                        >
                          <option value="pune">Pune Coordination Office (CSR & State)</option>
                          <option value="nanded">Nanded Registered Office (Headquarters)</option>
                          <option value="general">General / All Maharashtra</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us how we can collaborate, or what you would like to discuss..."
                        rows={5}
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        required
                        className="mt-1 w-4 h-4 text-primary-700 border-neutral-300 rounded focus:ring-primary-500"
                      />
                      <Label htmlFor="consent" className="text-xs sm:text-sm text-neutral-600 mb-0 cursor-pointer">
                        I consent to VORTEXSOFT VIKASDHARA FOUNDATION contacting me regarding this enquiry in accordance with its Privacy Policy.
                      </Label>
                    </div>

                    {status === "success" && (
                      <div className="p-4 bg-accent-50 border border-accent-200 rounded-xl text-accent-900 flex items-center gap-3">
                        <svg className="w-5 h-5 text-accent-700 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Thank you! Your message has been received. Our team will get back to you shortly.</span>
                      </div>
                    )}

                    <Button type="submit" size="lg" isLoading={status === "submitting"} className="w-full sm:w-auto">
                      {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Location & Contact Info Cards */}
            <div className="space-y-6">
              {/* Pune Office Card */}
              <Card variant="bordered" padding="lg" className="border-emerald-200/80 bg-emerald-50/30">
                <CardHeader>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
                    Regional Hub
                  </div>
                  <CardTitle className="text-lg text-emerald-950">
                    Pune Coordination & CSR Liaison
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-neutral-600">
                  <p className="font-semibold text-neutral-900">VORTEXSOFT VIKASDHARA FOUNDATION — Pune</p>
                  <p>Pune, Maharashtra, India.</p>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Statewide CSR Partnerships, Corporate Alliances, Technical Education & Urban Outreach.
                  </p>
                  <div className="pt-3 border-t border-emerald-100 space-y-2">
                    <a href="mailto:partnerships@vikasdharafoundation.org" className="flex items-center gap-2 text-emerald-800 font-semibold hover:underline">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      partnerships@vikasdharafoundation.org
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Registered Headquarters (Nanded) */}
              <Card variant="bordered" padding="lg" className="border-primary-200/80 bg-primary-50/30">
                <CardHeader>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-primary-100 text-primary-800 text-xs font-bold uppercase tracking-wider mb-2">
                    Headquarters
                  </div>
                  <CardTitle className="text-lg text-primary-950">
                    Registered Office (Nanded)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-neutral-600">
                  <address className="not-italic leading-relaxed">
                    <p className="font-semibold text-neutral-900">VORTEXSOFT VIKASDHARA FOUNDATION</p>
                    <p>Near Chhatrapati Shivaji Putla, Chondi, Post Jarikot,</p>
                    <p>Taluka Dharmabad, District Nanded – 431808,</p>
                    <p>Maharashtra, India.</p>
                  </address>
                  <div className="pt-3 border-t border-primary-100 space-y-2">
                    <a href="mailto:info@vikasdharafoundation.org" className="flex items-center gap-2 text-primary-800 font-semibold hover:underline">
                      <svg className="w-4 h-4 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      info@vikasdharafoundation.org
                    </a>
                    <a href="mailto:contact@vikasdharafoundation.org" className="flex items-center gap-2 text-primary-800 font-semibold hover:underline">
                      <svg className="w-4 h-4 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      contact@vikasdharafoundation.org
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Department Direct Inquiries */}
              <Card variant="bordered" padding="lg">
                <CardHeader>
                  <CardTitle className="text-base">Specialised Channels</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <span className="font-semibold text-neutral-800 block">Careers & Opportunities:</span>
                    <a href="mailto:careers@vikasdharafoundation.org" className="text-primary-700 hover:underline">careers@vikasdharafoundation.org</a>
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-800 block">Volunteers:</span>
                    <a href="mailto:volunteer@vikasdharafoundation.org" className="text-primary-700 hover:underline">volunteer@vikasdharafoundation.org</a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}