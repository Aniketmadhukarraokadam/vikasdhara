import { useState } from "react";
import { useApplications, type ApplicationType } from "@/context/ApplicationsContext";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

interface ApplicationInquiryFormProps {
  defaultType?: ApplicationType;
  defaultSubject?: string;
  programmeTitle?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export function ApplicationInquiryForm({
  defaultType = "contact",
  defaultSubject = "",
  programmeTitle = "",
  title,
  subtitle,
  className = ""
}: ApplicationInquiryFormProps) {
  const { addApplication } = useApplications();
  const { language, t } = useLanguage();
  const isMarathi = language === "mr";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    organisation: "",
    location: "pune",
    subject: defaultSubject || (programmeTitle ? `Inquiry regarding ${programmeTitle}` : "General Inquiry"),
    message: "",
    consent: true,
  });

  const [type, setType] = useState<ApplicationType>(defaultType);
  const [submitting, setSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.mobile.trim()) {
      alert("Please enter your name and contact phone number.");
      return;
    }

    setSubmitting(true);

    try {
      const created = addApplication({
        type: type,
        name: formData.name.trim(),
        email: formData.email.trim() || "not-provided@vikasdharafoundation.org",
        mobile: formData.mobile.trim(),
        organization: formData.organisation.trim() || "Individual / Community Member",
        location: formData.location,
        subject: formData.subject.trim() || (programmeTitle ? `Enrollment: ${programmeTitle}` : "General Inquiry"),
        message: formData.message.trim() || "Submitted via online portal application form.",
        status: "new",
        priority: type === "csr_partner" ? "high" : "medium",
      });

      setSubmittedId(created.id);
    } catch (err) {
      console.error(err);
      setSubmittedId(`APP-${Date.now().toString().slice(-4)}`);
    } finally {
      setSubmitting(false);
    }
  };

  const handleWhatsAppSend = () => {
    const formatted = 
`*🇮🇳 ONLINE APPLICATION: VIKASDHARA FOUNDATION*
----------------------------------------
📌 *Application ID:* ${submittedId || "NEW-PORTAL-APP"}
📋 *Type:* ${type.toUpperCase()}
👤 *Applicant Name:* ${formData.name || "Not specified"}
🏢 *Organization / Institute:* ${formData.organisation || "Individual"}
📞 *Contact Phone:* ${formData.mobile || "Not specified"}
✉️ *Email:* ${formData.email || "Not specified"}
📍 *Location:* ${formData.location.toUpperCase()}
🎯 *Subject:* ${formData.subject || programmeTitle || "General Inquiry"}
----------------------------------------
📝 *Message / Notes:*
${formData.message || "I am interested in participating / partnering."}
----------------------------------------
_Registered via Official Portal (vikasdharafoundation.org)_`;

    window.open(`https://wa.me/919172003414?text=${encodeURIComponent(formatted)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/90 shadow-soft ${className}`}>
      {submittedId ? (
        <div className="text-center py-8 space-y-5 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 text-3xl flex items-center justify-center mx-auto shadow-sm">
            ✓
          </div>
          <div>
            <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-200">
              {isMarathi ? "अर्ज नोंदणी यशस्वी!" : "Application Registered Successfully"}
            </span>
            <h3 className="text-2xl font-extrabold text-neutral-900 font-heading mt-2">
              {isMarathi ? "आपला अर्ज फाउंडेशन डेस्ककडे नोंदवला गेला आहे" : "Thank You! Your Request Has Been Submitted"}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto mt-2">
              {isMarathi
                ? "आमचे प्रकल्प समन्वयक २४ ते ४८ तासांच्या आत आपल्याशी संपर्क करतील."
                : "Our programme coordination team will review your details and connect with you within 24–48 business hours."}
            </p>
            <div className="mt-3 font-mono text-xs text-neutral-500 font-bold">
              Tracking ID: <span className="text-primary-800">{submittedId}</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <button
              onClick={handleWhatsAppSend}
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>{isMarathi ? "व्हॉट्सॲपवर पाठवा (WhatsApp Backup)" : "Send on WhatsApp Backup"}</span>
            </button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSubmittedId(null);
                setFormData({ name: "", email: "", mobile: "", organisation: "", location: "pune", subject: "", message: "", consent: true });
              }}
            >
              Submit Another Inquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-800 text-xs font-bold border border-primary-200 mb-2">
              <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse" />
              <span>{isMarathi ? "थेट अर्ज व चौकशी फॉर्म" : "Official Online Application Form"}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 font-heading">
              {title || (isMarathi ? "सहभागासाठी अर्ज / माहिती विचारणा" : "Apply / Submit Official Inquiry")}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              {subtitle || (isMarathi ? "आपली माहिती भरा, आमची संस्था लवकरच संपर्क करेल." : "Fill in your details below to register with our institutional desk.")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                {isMarathi ? "पूर्ण नाव *" : "Full Name *"}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Ramesh Deshmukh / Dr. Kulkarni"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                {isMarathi ? "मोबाईल / व्हॉट्सॲप नंबर *" : "WhatsApp / Mobile Number *"}
              </label>
              <input
                type="tel"
                required
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                placeholder="+91 98XXXXXXXX"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                {isMarathi ? "ईमेल पत्ता" : "Email Address"}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@company.com"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                {isMarathi ? "संस्था / कंपनी / कॉलेजचे नाव" : "Organization / CSR Entity / Institute"}
              </label>
              <input
                type="text"
                value={formData.organisation}
                onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                placeholder="e.g. CSR Foundation / Self"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                {isMarathi ? "अर्जाचा प्रकार / उद्देश" : "Inquiry / Application Category"}
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as ApplicationType)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white font-bold text-neutral-800"
              >
                <option value="csr_partner">🏢 Corporate CSR / Institutional Partner</option>
                <option value="volunteer">🤝 Volunteer / Fellowship Application</option>
                <option value="beneficiary_skilling">🎓 Student / Training Enrollment</option>
                <option value="contact">📋 General Inquiry / Field Visit Request</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                {isMarathi ? "स्थान / जिल्हा पसंती" : "Location Preference"}
              </label>
              <select
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white font-medium text-neutral-800"
              >
                <option value="pune">Pune Regional Hub</option>
                <option value="nanded">Nanded & Dharmabad Rural Campus</option>
                <option value="both">Both Hubs / Entire Maharashtra</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              {isMarathi ? "अपेक्षित प्रकल्प / गरजांचे वर्णन (Specific Requirements)" : "Specific Project Details / Requirements"}
            </label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={programmeTitle ? `Mention your requirements for ${programmeTitle}...` : "Briefly describe your proposal, timeline, or requirements..."}
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="flex-1 py-3.5 bg-gradient-to-r from-primary-700 to-sky-700 hover:from-primary-600 hover:to-sky-600 text-white font-extrabold text-xs sm:text-sm shadow-lg"
            >
              {submitting ? "Registering Application..." : (isMarathi ? "अर्ज सबमिट करा (Submit Application)" : "Submit Official Application →")}
            </Button>
            
            <button
              type="button"
              onClick={handleWhatsAppSend}
              className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-transform active:scale-95 flex items-center justify-center gap-2 shrink-0"
            >
              <span>💬 WhatsApp Fast-Track</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
