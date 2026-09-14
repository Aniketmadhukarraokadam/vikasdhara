import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface InquiryTypeOption {
  id: string;
  icon: string;
  labelEn: string;
  labelMr: string;
  defaultMsgEn: string;
  defaultMsgMr: string;
}

const INQUIRY_TYPES: InquiryTypeOption[] = [
  {
    id: "csr_partnership",
    icon: "🏢",
    labelEn: "Corporate CSR / Institutional Grant",
    labelMr: "कॉर्पोरेट CSR / संस्थागत अनुदान",
    defaultMsgEn: "Hello, our organisation is interested in exploring a CSR partnership / grant with Vortexsoft Vikasdhara Foundation for projects in Maharashtra.",
    defaultMsgMr: "नमस्कार, आमच्या संस्थेला महाराष्ट्रात व्हॉर्टेक्ससॉफ्ट विकासधारा फाउंडेशनसोबत CSR भागीदारी करण्यास उत्सुकता आहे."
  },
  {
    id: "gaushala_animal",
    icon: "🐄",
    labelEn: "Gau Shala Sanctuary & Animal Care",
    labelMr: "गोशाळा व पशुकल्याण सहकार्य",
    defaultMsgEn: "Hello, I would like to support / contribute towards the Gau Shala animal sanctuary, indigenous cow care, and veterinary camp initiatives.",
    defaultMsgMr: "नमस्कार, मला विकासधारा गोशाळा, देशी गोवंश संगोपन व पशुवैद्यकीय सेवा कार्यात सहकार्य करायचे आहे."
  },
  {
    id: "rural_education",
    icon: "🎓",
    labelEn: "Rural Smart Classrooms & Education",
    labelMr: "ग्रामीण डिजिटल शाळा व शिक्षण",
    defaultMsgEn: "Hello, I am interested in supporting / sponsoring smart digital classrooms and educational kits for village schools in Maharashtra.",
    defaultMsgMr: "नमस्कार, मला ग्रामीण शाळांमध्ये डिजिटल वर्गखोल्या व शैक्षणिक साधनांच्या उपक्रमात सहकार्य करायचे आहे."
  },
  {
    id: "village_water_agro",
    icon: "🌾",
    labelEn: "Village Transformation & Water Projects",
    labelMr: "ग्राम विकास व जलसंधारण प्रकल्प",
    defaultMsgEn: "Hello, I would like more information on your rural village development, solar irrigation, and check dam water projects.",
    defaultMsgMr: "नमस्कार, मला आपल्या ग्रामविकास, सौर सिंचन आणि जलसंधारण प्रकल्पांबद्दल अधिक माहिती हवी आहे."
  },
  {
    id: "volunteer_internship",
    icon: "🤝",
    labelEn: "Volunteer / Field Fellowship",
    labelMr: "स्वयंसेवक / फेलोशिप सहभाग",
    defaultMsgEn: "Hello, I want to apply as a volunteer / fellow to contribute directly to your ground-level programmes in Nanded and Pune.",
    defaultMsgMr: "नमस्कार, मला नांदेड व पुणे येथील विकासधारा फाउंडेशनच्या उपक्रमांमध्ये स्वयंसेवक म्हणून काम करायचे आहे."
  },
  {
    id: "general_visit",
    icon: "📋",
    labelEn: "General Inquiry / Field Visit Request",
    labelMr: "सामान्य विचारणा / प्रत्यक्ष भेट",
    defaultMsgEn: "Hello, I have a general query regarding Vortexsoft Vikasdhara Foundation's initiatives and would like to schedule a field visit / call.",
    defaultMsgMr: "नमस्कार, मला विकासधारा फाउंडेशनच्या उपक्रमांबद्दल माहिती हवी आहे आणि प्रत्यक्ष भेटीचे नियोजन करायचे आहे."
  }
];

export function WhatsAppInquiryWidget() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";

  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string>("csr_partnership");
  const [fullName, setFullName] = useState("");
  const [organization, setOrganization] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [customMsg, setCustomMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const officialWhatsAppNumber = "919172003414"; // Official trust contact

  const activeOption = INQUIRY_TYPES.find(t => t.id === selectedType) || INQUIRY_TYPES[0];

  const handleOpenWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const categoryTitle = isMarathi ? activeOption.labelMr : activeOption.labelEn;
    const baseRequirement = isMarathi ? activeOption.defaultMsgMr : activeOption.defaultMsgEn;
    const finalDetail = customMsg.trim() ? customMsg.trim() : baseRequirement;

    const formattedMessage = 
`*🇮🇳 OFFICIAL INQUIRY: VORTEXSOFT VIKASDHARA FOUNDATION*
----------------------------------------
📌 *Category:* ${categoryTitle}
👤 *Name:* ${fullName.trim() || "Not specified"}
🏢 *Organization:* ${organization.trim() || "Individual / Not specified"}
📞 *Contact Phone:* ${phone.trim() || "Not specified"}
📍 *City / Region:* ${city.trim() || "Maharashtra, India"}
----------------------------------------
📝 *Inquiry Details / Requirement:*
${finalDetail}
----------------------------------------
_Sent via Official Vikasdhara Foundation Portal (vikasdharafoundation.org)_`;

    const encoded = encodeURIComponent(formattedMessage);
    const waUrl = `https://wa.me/${officialWhatsAppNumber}?text=${encoded}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
    }, 4000);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
        {/* Tooltip on hover (desktop) */}
        <div className="hidden sm:flex items-center gap-2 bg-neutral-900/95 text-white text-xs font-semibold py-1.5 px-3.5 rounded-full shadow-2xl border border-emerald-500/30 backdrop-blur-md transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{isMarathi ? "व्हॉट्सॲपवर त्वरित संपर्क करा" : "Instant WhatsApp Inquiry"}</span>
        </div>

        {/* WhatsApp Pill Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl border border-emerald-400/40 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
          aria-label="Open WhatsApp Inquiry Assistant"
          title="WhatsApp Inquiry"
        >
          {/* Animated WhatsApp Icon */}
          <div className="relative">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
            </span>
          </div>
          <span className="hidden sm:inline font-extrabold text-xs tracking-wide">
            {isMarathi ? "व्हॉट्सॲप चौकशी" : "WhatsApp Inquiry"}
          </span>
        </button>
      </div>

      {/* Inquiry Dialog Modal / Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-neutral-950/70 backdrop-blur-md animate-fade-in">
          <div 
            className="bg-white text-neutral-900 w-full sm:max-w-xl max-h-[92vh] rounded-t-3xl sm:rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col animate-slide-up"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-800 via-teal-900 to-neutral-950 text-white p-5 sm:p-6 relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-neutral-300 hover:text-white p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Close dialog"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl shadow-inner shrink-0">
                  💬
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    {isMarathi ? "अधिकृत संपर्क व विचारणा केंद्र" : "Official WhatsApp Inquiry Desk"}
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-white mt-1 font-heading">
                    VORTEXSOFT VIKASDHARA FOUNDATION
                  </h3>
                  <p className="text-xs text-neutral-300 mt-0.5">
                    {isMarathi ? "थेट विश्वस्त व प्रकल्प समन्वयकांशी संवाद साधा" : "Connect directly with Trustees & Project Coordinators"}
                  </p>
                </div>
              </div>
            </div>

            {/* Form Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-700 text-3xl rounded-full flex items-center justify-center mx-auto animate-bounce">
                    ✓
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900">
                    {isMarathi ? "व्हॉट्सॲप संवाद सुरू केला आहे!" : "WhatsApp Chat Initiated!"}
                  </h4>
                  <p className="text-xs text-neutral-600 max-w-sm mx-auto">
                    {isMarathi
                      ? "आपला चौकशी संदेश व्हॉट्सॲपवर तयार करण्यात आला आहे. आमची टीम लवकरच आपल्याशी संपर्क करेल."
                      : "Your structured inquiry message has been loaded onto WhatsApp. Our coordination team will respond promptly."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleOpenWhatsApp} className="space-y-4">
                  {/* Category Selection */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-2 uppercase tracking-wider">
                      {isMarathi ? "१. चौकशीचा प्रकार निवडा (Select Requirement)" : "1. Select Inquiry Requirement"}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {INQUIRY_TYPES.map((type) => {
                        const isSelected = selectedType === type.id;
                        return (
                          <button
                            type="button"
                            key={type.id}
                            onClick={() => setSelectedType(type.id)}
                            className={`p-2.5 rounded-xl border text-left flex items-center gap-2.5 transition-all text-xs font-semibold ${
                              isSelected
                                ? "border-emerald-600 bg-emerald-50/80 text-emerald-950 ring-2 ring-emerald-500/30 font-bold"
                                : "border-neutral-200 hover:border-neutral-300 bg-neutral-50/60 text-neutral-700"
                            }`}
                          >
                            <span className="text-lg shrink-0">{type.icon}</span>
                            <span className="line-clamp-2 leading-snug">
                              {isMarathi ? type.labelMr : type.labelEn}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Personal & Organization Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-600 mb-1">
                        {isMarathi ? "आपले नाव *" : "Your Full Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Rahul Patil / Dr. Sharma"
                        className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-600 mb-1">
                        {isMarathi ? "संस्था / कंपनीचे नाव" : "Organization / CSR Entity"}
                      </label>
                      <input
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="e.g. Tata Motors / Self"
                        className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-600 mb-1">
                        {isMarathi ? "मोबाईल / व्हॉट्सॲप नंबर *" : "WhatsApp Phone Number *"}
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98XXXXXXXX"
                        className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-600 mb-1">
                        {isMarathi ? "शहर / जिल्हा" : "City / Location"}
                      </label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g. Pune / Nanded / Mumbai"
                        className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                      />
                    </div>
                  </div>

                  {/* Custom Message / Specific Requirement */}
                  <div>
                    <label className="block text-[11px] font-bold text-neutral-600 mb-1">
                      {isMarathi ? "विशिष्ट गरजा / माहिती (Optional Message)" : "Specific Requirements / Query Details"}
                    </label>
                    <textarea
                      rows={3}
                      value={customMsg}
                      onChange={(e) => setCustomMsg(e.target.value)}
                      placeholder={isMarathi ? activeOption.defaultMsgMr : activeOption.defaultMsgEn}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white placeholder-neutral-400"
                    />
                  </div>

                  {/* Trust Guarantee Note */}
                  <div className="flex items-center gap-2 text-[10px] text-neutral-500 bg-neutral-50 p-2.5 rounded-xl border border-neutral-100">
                    <span className="text-emerald-600 font-bold">🔒 Secure & Official:</span>
                    <span>Direct encrypted routing to Vikasdhara Foundation Trust Desk (+91 91720 03414).</span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-extrabold text-xs tracking-wide shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    <span>
                      {isMarathi ? "व्हॉट्सॲपवर त्वरित पाठवा (Send on WhatsApp)" : "Launch Official WhatsApp Chat"}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
