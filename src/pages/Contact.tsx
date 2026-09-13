import { useState } from "react";
import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionEyebrow } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input, Textarea, Label } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { contact } from "@/content";
import { icons, type IconName } from "@/assets/icons";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    organisation: "",
    subject: "",
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
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus("success");
    setFormData({ name: "", email: "", mobile: "", organisation: "", subject: "", message: "", consent: false });
    setTimeout(() => setStatus("idle"), 3000);
  };

  const { contact: cont } = contact;

  return (
    <>
      <Section variant="xl" background="primary">
        <Container>
          <SectionHeader>
            <SectionEyebrow>Get in Touch</SectionEyebrow>
            <SectionTitle>{cont.heading}</SectionTitle>
            <SectionSubtitle className="max-w-3xl mx-auto">{cont.subheading}</SectionSubtitle>
          </SectionHeader>
        </Container>
      </Section>

      <Section variant="lg" background="none">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <Card variant="bordered" padding="lg">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <p className="text-neutral-600 text-sm mt-1">We'll respond within 2-3 business days</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Name *</Label>
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
                        <Label htmlFor="email">Email *</Label>
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
                        <Label htmlFor="mobile">Mobile *</Label>
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
                        <Label htmlFor="organisation">Organisation</Label>
                        <Input
                          id="organisation"
                          name="organisation"
                          value={formData.organisation}
                          onChange={handleChange}
                          placeholder="Your organisation (if applicable)"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="input"
                      >
                        <option value="">Select a subject</option>
                        {cont.categories.map((cat) => (
                          <option key={cat} value={cat.toLowerCase().replace(/\s+/g, "")}>{cat}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us how we can help or how you'd like to get involved..."
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
                      <Label htmlFor="consent" className="text-sm text-neutral-700 mb-0 cursor-pointer">
                        I consent to being contacted by VORTEXSOFT VIKASDHARA FOUNDATION regarding my enquiry.
                      </Label>
                    </div>

                    {status === "success" && (
                      <div className="p-4 bg-accent-50 border border-accent-200 rounded-lg text-accent-800">
                        Thank you! Your message has been sent successfully. We'll get back to you soon.
                      </div>
                    )}

                    {status === "error" && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                        Something went wrong. Please try again or email us directly.
                      </div>
                    )}

                    <Button type="submit" size="lg" isLoading={status === "submitting"} className="w-full sm:w-auto">
                      {status === "submitting" ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card variant="bordered" padding="lg">
                <CardHeader>
                  <CardTitle>{cont.office.heading}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <address className="not-italic text-neutral-600 leading-relaxed">
                    <p className="font-semibold text-neutral-900">{cont.office.name}</p>
                    <p>{cont.office.address}</p>
                  </address>
                  <div className="space-y-3 pt-4 border-t border-neutral-100">
                    <a href={`mailto:${cont.office.email}`} className="flex items-center gap-3 text-neutral-700 hover:text-primary-700 transition-colors">
                      <IconWrapper variant="primary" size="sm">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </IconWrapper>
                      <span>{cont.office.email}</span>
                    </a>
                    <a href={`tel:${cont.office.phone}`} className="flex items-center gap-3 text-neutral-700 hover:text-primary-700 transition-colors">
                      <IconWrapper variant="primary" size="sm">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      </IconWrapper>
                      <span>{cont.office.phone}</span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered" padding="lg">
                <CardHeader>
                  <CardTitle>Enquiry Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {cont.categories.map((cat) => (
                      <li key={cat}>
                        <label className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-neutral-50 transition-colors">
                          <input type="radio" name="category" className="text-primary-700 focus:ring-primary-500" />
                          <span className="text-neutral-700">{cat}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="lg" background="neutral" id="office">
        <Container>
          <SectionHeader>
            <SectionTitle>Visit Us</SectionTitle>
            <SectionSubtitle>Our registered office is open for scheduled meetings</SectionSubtitle>
          </SectionHeader>

          <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden border border-neutral-200">
            <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm">
              <p className="text-center px-8">Google Maps Embed<br /><span className="text-xs">{cont.office.address}</span></p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}