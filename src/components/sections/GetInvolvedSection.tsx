import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

export function GetInvolvedSection() {
  const { t, language } = useLanguage();
  const isMr = language === "mr";

  const options = [
    {
      title: "Volunteer",
      titleMr: "स्वयंसेवक बना",
      desc: "Give your time and skills.",
      descMr: "आपला वेळ, कौशल्य आणि ऊर्जा ग्रामीण समाजकार्यासाठी द्या.",
      icon: "🙌",
      badge: "Community Force",
      btnText: "Become a Volunteer",
      btnTextMr: "स्वयंसेवक म्हणून नोंदणी करा",
      href: "/get-involved/volunteer",
      bgClass: "bg-white",
      btnClass: "bg-[#2F6B45] hover:bg-[#1F4D34] text-white",
      highlight: false,
    },
    {
      title: "Donate",
      titleMr: "साहाय्य व दान",
      desc: "Support meaningful community initiatives.",
      descMr: "शिक्षण, अन्न, गोशाळा व आरोग्य उपक्रमांना आर्थिक बळ द्या.",
      icon: "❤️",
      badge: "Grassroots Support",
      btnText: "Support Our Mission",
      btnTextMr: "आमच्या कार्यास मदत करा",
      href: "/get-involved/support",
      bgClass: "bg-gradient-to-b from-[#FFF9F0] to-white border-[#F39A3F]/30",
      btnClass: "bg-gradient-to-r from-[#F39A3F] to-[#F7B267] hover:from-[#e28b30] hover:to-[#f3a44f] text-[#17251D]",
      highlight: true,
    },
    {
      title: "Partner",
      titleMr: "संस्थागत भागीदारी (CSR)",
      desc: "Work with the Foundation through CSR or community partnerships.",
      descMr: "कंपन्या आणि सामाजिक संस्थांसोबत संयुक्त विकास प्रकल्प.",
      icon: "🤝",
      badge: "Institutional Scale",
      btnText: "Partner With Us",
      btnTextMr: "भागीदारीसाठी संपर्क साधा",
      href: "/get-involved/partner",
      bgClass: "bg-white",
      btnClass: "bg-[#1F4D34] hover:bg-[#173a27] text-white",
      highlight: false,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F6F0E7]/60" aria-labelledby="get-involved-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#2F6B45]/20 text-[#1F4D34] mb-4 shadow-warm-sm">
            <span className="text-xs font-extrabold uppercase tracking-widest">
              JOIN THE MISSION
            </span>
          </div>

          <h2
            id="get-involved-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251D] tracking-tight leading-tight font-sans"
          >
            You can be{" "}
            <span className="font-serif italic font-normal text-[#2F6B45]">
              part of the change.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#68736C] leading-relaxed">
            {t(
              "Every contribution of time, knowledge, resources or corporate partnership helps bring education, dignity and care to those in need.",
              "प्रत्येक व्यक्तीचा छोटा सहभाग समाजातील गरजू बांधवांसाठी एका मोठ्या परिवर्तनाची सुरुवात ठरू शकतो."
            )}
          </p>
        </div>

        {/* 3 Large Rounded Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((opt, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 sm:p-10 border shadow-warm-card hover:shadow-warm-elevated transition-all duration-400 hover:-translate-y-2 flex flex-col justify-between ${opt.bgClass} ${
                opt.highlight ? "ring-2 ring-[#F39A3F]/30" : "border-[#2F6B45]/15"
              }`}
              style={{ transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-14 h-14 rounded-2xl bg-[#EAF4EC] flex items-center justify-center text-3xl shadow-warm-sm">
                    {opt.icon}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white text-[11px] font-bold text-[#1F4D34] border border-[#2F6B45]/15">
                    {opt.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17251D] font-sans">
                  {isMr ? opt.titleMr : opt.title}
                </h3>

                <p className="mt-3 text-base text-[#68736C] leading-relaxed">
                  {isMr ? opt.descMr : opt.desc}
                </p>
              </div>

              <div className="pt-8">
                <Link
                  to={opt.href}
                  className={`w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full font-bold text-sm sm:text-base tracking-wide shadow-warm-sm hover:shadow-warm-card transition-all duration-300 ${opt.btnClass}`}
                >
                  <span>{isMr ? opt.btnTextMr : opt.btnText}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
