import { useState } from "react";
import { Link } from "react-router-dom";
import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionEyebrow } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SEO } from "@/components/seo/SEO";
import { useLanguage } from "@/context/LanguageContext";

interface FAQItem {
  q: string;
  qMr?: string;
  a: string;
  aMr?: string;
  category: string;
}

const masterFaqs: FAQItem[] = [
  // Organisation
  {
    category: "Organisation",
    q: "What is VIKASDHARA FOUNDATION?",
    qMr: "विकासधारा फाउंडेशन काय आहे?",
    a: "VIKASDHARA FOUNDATION is a public charitable trust based in Nanded, Maharashtra, working across India in charitable and social-development areas.",
    aMr: "विकासधारा फाउंडेशन हा नांदेड, महाराष्ट्र येथे आधारित सार्वजनिक धर्मादाय न्यास असून शिक्षण, कौशल्यविकास, रोजगार, उपजीविका, महिला शिक्षण व सक्षमीकरण, मानवतावादी मदत, समुदाय विकास, पर्यावरण आणि प्राणी कल्याण या क्षेत्रांत संपूर्ण भारतात कार्य करण्याचा उद्देश आहे."
  },
  {
    category: "Organisation",
    q: "Where is Vikasdhara Foundation based?",
    qMr: "विकासधारा फाउंडेशनचे मुख्यालय कुठे आहे?",
    a: "The Foundation’s registered office is in Chondi, Dharmabad Taluka, Nanded District, Maharashtra, India (Near Chhatrapati Shivaji Putla, Post Jarikot – 431808).",
    aMr: "संस्थेचे नोंदणीकृत कार्यालय छत्रपती शिवाजी पुतळ्याजवळ,चोंडी, पोस्ट जारीकोट, तालुका धर्माबाद, जिल्हा नांदेड – ४३१८०८, महाराष्ट्र, भारत येथे आहे."
  },
  {
    category: "Organisation",
    q: "What does Vikasdhara Foundation work on?",
    qMr: "विकासधारा फाउंडेशन कोणत्या क्षेत्रांत कार्य करते?",
    a: "Its focus includes education, women’s empowerment, skill development, employment, livelihood, humanitarian support, community development, health awareness, environment and animal welfare.",
    aMr: "संस्थेचे मुख्य कार्यक्षेत्र शिक्षण, महिला सक्षमीकरण, कौशल्यविकास, रोजगार व उपजीविका, मानवतावादी मदत, समुदाय विकास, आरोग्य जनजागृती, पर्यावरण आणि गोशाळा / प्राणी कल्याण आहे."
  },

  // Programmes & Skills
  {
    category: "Programmes & Skills",
    q: "What does Vikasdhara Foundation do in education?",
    qMr: "शिक्षणाच्या क्षेत्रात संस्था काय उपक्रम राबवते?",
    a: "The Foundation’s education focus includes learning support, educational awareness, digital learning, educational resources and related community initiatives.",
    aMr: "संस्थेचा शिक्षणातील भर अध्ययन साहाय्य, शैक्षणिक जनजागृती, डिजिटल साक्षरता, शैक्षणिक संसाधने आणि संबंधित समुदाय उपक्रमांवर आहे."
  },
  {
    category: "Programmes & Skills",
    q: "What skill-development programmes are supported?",
    qMr: "कोणत्या प्रकारच्या कौशल्यविकास उपक्रमांना साहाय्य केले जाते?",
    a: "Practical skill-development initiatives designed to improve employability, confidence and livelihood opportunities, including digital literacy, vocational skills and workplace readiness.",
    aMr: "रोजगारक्षमता, आत्मविश्वास आणि उपजीविकेच्या संधी सुधारण्यासाठी व्यावहारिक कौशल्यविकास, डिजिटल कौशल्ये आणि व्यावसायिक प्रशिक्षण."
  },
  {
    category: "Programmes & Skills",
    q: "What women’s programmes does the Foundation support?",
    qMr: "महिलांसाठी कोणते उपक्रम राबवले जातात?",
    a: "The Foundation aims to support women’s education, digital literacy, practical vocational skills, career awareness, livelihood development and community leadership.",
    aMr: "महिला शिक्षण, डिजिटल साक्षरता, व्यावसायिक कौशल्ये, करिअर मार्गदर्शन, उपजीविका विकास आणि सामाजिक नेतृत्व."
  },

  // Employment & Livelihood
  {
    category: "Employment & Livelihood",
    q: "How does the Foundation support employment?",
    qMr: "संस्था रोजगारासाठी कशी मदत करते?",
    a: "The Foundation connects skill development with career guidance, employability preparation, placement facilitation, employer linkages and livelihood pathways.",
    aMr: "संस्था कौशल्यविकासाला करिअर मार्गदर्शन, रोजगारक्षमता पूर्वतयारी, प्लेसमेंट सुविधा आणि उद्योगांशी जोडण्याचा प्रयत्न करते."
  },
  {
    category: "Employment & Livelihood",
    q: "Does the Foundation provide guaranteed jobs?",
    qMr: "संस्था नोकरीची हमी (Guaranteed Job) देते का?",
    a: "No general guarantee is implied. Employment outcomes depend on programme scope, candidate eligibility, employer requirements and available opportunities.",
    aMr: "कोणत्याही प्रकारची नोकरीची हमी दिली जात नाही. रोजगाराचे परिणाम उमेदवाराची पात्रता, प्रशिक्षण आणि उपलब्ध संधींवर अवलंबून असतात."
  },

  // Partnerships & CSR
  {
    category: "Partnerships & CSR",
    q: "Does the Foundation work with companies and institutions?",
    qMr: "संस्था कंपन्या आणि संस्थांसोबत काम करू शकते का?",
    a: "Yes. The Foundation can engage in socially beneficial project partnerships with companies and institutions, subject to applicable law, organisational capacity and appropriate agreements.",
    aMr: "होय. संस्था कंपन्या, उद्योग आणि संस्थांसोबत कायद्याच्या चौकटीत राहून सामाजिक प्रकल्पांवर भागीदारी करू शकते."
  },
  {
    category: "Partnerships & CSR",
    q: "Can companies implement employment and skill projects with the Foundation?",
    qMr: "कंपन्या कौशल्य आणि रोजगार निर्मिती प्रकल्प संस्थेसोबत करू शकतात का?",
    a: "Yes. Companies may approach the Foundation regarding lawful employment-generation, skill-development, vocational-training, livelihood or related community-development projects.",
    aMr: "होय. कंपन्या कौशल्यविकास, व्यावसायिक प्रशिक्षण आणि समुदाय विकासासाठी प्रकल्प भागीदारी करू शकतात."
  },

  // Volunteers & Community
  {
    category: "Volunteers & Community",
    q: "Can people volunteer with Vikasdhara Foundation?",
    qMr: "नागरिक स्वयंसेवक (Volunteer) म्हणून सहभागी होऊ शकतात का?",
    a: "Volunteer opportunities may be offered as programmes become operational and according to programme needs, safeguarding requirements and Foundation policies.",
    aMr: "उपक्रम कार्यरत होताच स्वयंसेवकांना अध्यापन, तंत्रज्ञान साहाय्य, क्षेत्र समन्वय आणि पर्यावरण उपक्रमांमध्ये सहभागी होण्याची संधी मिळते."
  },
  {
    category: "Volunteers & Community",
    q: "Does the Foundation operate animal welfare and Gau Shala initiatives?",
    qMr: "संस्थेचे प्राणी कल्याण आणि गोशाळा उपक्रम काय आहेत?",
    a: "The Foundation may support humane animal welfare, animal-care awareness, shelter, veterinary coordination and responsible cattle care (Gau Shala).",
    aMr: "संस्था गोशाळा साहाय्य, जनावरांची निगा, चारा-पाणी व्यवस्था आणि प्राणी कल्याणासाठी जबाबदार उपक्रम राबवते."
  },

  // Legal & Transparency
  {
    category: "Governance & Transparency",
    q: "What is the Foundation's approach to transparency?",
    qMr: "पारदर्शकता आणि प्रशासनाबाबत संस्थेचे धोरण काय आहे?",
    a: "The Foundation adheres to statutory public charitable trust standards in Maharashtra, maintains verified records, and publishes information accurately without exaggerated claims.",
    aMr: "संस्था धर्मादाय न्यास कायद्यांचे काटेकोर पालन करते, अचूक नोंदी ठेवते आणि कोणत्याही अतिशयोक्तीविना पारदर्शक माहिती प्रकाशित करते."
  }
];

export function FAQPage() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Organisation", "Programmes & Skills", "Employment & Livelihood", "Partnerships & CSR", "Volunteers & Community", "Governance & Transparency"];

  const filteredFaqs = masterFaqs.filter(faq => {
    const matchesCat = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <>
      <SEO
        title="Frequently Asked Questions (FAQ) | VIKASDHARA FOUNDATION"
        description="Verified answers about VIKASDHARA FOUNDATION, our public charitable mission in Nanded, Maharashtra, education, skill development, employment facilitation, and partnership guidelines."
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Frequently Asked Questions", item: "/frequently-asked-questions" }
        ]}
        faqs={masterFaqs.map(f => ({ question: f.q, answer: f.a }))}
      />

      <Section variant="xl" background="sky">
        <Container>
          <SectionHeader>
            <SectionEyebrow>{t("Knowledge Hub", "माहिती केंद्र")}</SectionEyebrow>
            <SectionTitle>
              {t("Frequently Asked Questions", "वारंवार विचारले जाणारे प्रश्न")}
            </SectionTitle>
            <SectionSubtitle className="max-w-3xl mx-auto">
              {t(
                "Clear, verified answers about VIKASDHARA FOUNDATION, our charitable objectives, programmes, partnerships, and governance.",
                "विकासधारा फाउंडेशन, आमची उद्दिष्टे, उपक्रम, भागीदारी आणि प्रशासनाविषयी अधिकृत आणि अचूक माहिती."
              )}
            </SectionSubtitle>
          </SectionHeader>
        </Container>
      </Section>

      <Section variant="lg" background="none">
        <Container>
          {/* Search & Category Filter */}
          <div className="max-w-4xl mx-auto mb-10 space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder={t("Search questions (e.g., employment, skills, partnerships, Nanded)...", "प्रश्न शोधा (उदा. रोजगार, कौशल्ये, भागीदारी, नांदेड)...")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 text-sm border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 shadow-soft"
              />
              <svg className="w-5 h-5 absolute left-4 top-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? "bg-primary-900 text-white shadow-xs"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Q&A Accordion/Cards */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12 text-neutral-500 text-sm">
                No matching questions found. Please try another search term.
              </div>
            ) : (
              filteredFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-soft hover:shadow-card transition-all space-y-2.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-2.5 py-0.5 rounded-full">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 font-heading">
                    {language === "mr" && faq.qMr ? faq.qMr : faq.q}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                    {language === "mr" && faq.aMr ? faq.aMr : faq.a}
                  </p>
                </div>
              ))
            )}
          </div>

          {/* Direct CTA */}
          <div className="max-w-2xl mx-auto text-center mt-14 p-8 bg-primary-50/60 rounded-3xl border border-primary-200 space-y-3">
            <h3 className="text-lg font-bold text-primary-950">
              {t("Have a Specific Question?", "काही विशेष प्रश्न किंवा चौकशी आहे का?")}
            </h3>
            <p className="text-sm text-neutral-600">
              {t(
                "Our team is available to discuss partnerships, volunteer inquiries, and community initiatives.",
                "भागीदारी, स्वयंसेवक सहभाग किंवा सामाजिक उपक्रमांसाठी आमच्याशी संपर्क साधा."
              )}
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <Link to="/contact">
                <Button size="sm">{t("Contact Us", "संपर्क साधा")}</Button>
              </Link>
              <Link to="/what-we-do">
                <Button variant="outline" size="sm">{t("Explore Programmes", "उपक्रम पहा")}</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
