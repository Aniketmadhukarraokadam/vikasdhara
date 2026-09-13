import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionEyebrow } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { Badge } from "@/components/ui/Badge";
import { SEO } from "@/components/seo/SEO";
import { useLanguage } from "@/context/LanguageContext";

const valuesList = [
  {
    title: "Human Dignity",
    titleMr: "मानवी प्रतिष्ठा",
    desc: "Every person deserves respect, empathy and fair treatment."
  },
  {
    title: "Inclusion",
    titleMr: "समावेशकता",
    desc: "We aim to serve communities inclusively, lawfully and without discrimination."
  },
  {
    title: "Integrity",
    titleMr: "सचोटी व नैतिकता",
    desc: "We seek to act honestly, responsibly and with moral uprightness."
  },
  {
    title: "Accountability",
    titleMr: "जबाबदारी व पारदर्शकता",
    desc: "We support appropriate documentation, oversight and responsible stewardship."
  },
  {
    title: "Opportunity",
    titleMr: "संधी निर्मिती",
    desc: "We focus on practical pathways to learning, employability and livelihood."
  },
  {
    title: "Community Partnership",
    titleMr: "समुदाय सहभाग",
    desc: "We believe sustainable development is built with and for communities."
  },
  {
    title: "Transparency",
    titleMr: "पारदर्शक प्रशासन",
    desc: "Public information should be accurate, verifiable and straightforward."
  },
  {
    title: "Sustainability",
    titleMr: "दीर्घकालीन शाश्वतता",
    desc: "We consider long-term social, economic and environmental outcomes."
  }
];

const trustees = [
  {
    name: "Mr. Anirudh Madhukarrao Kadam",
    nameMr: "श्री. अनिरुद्ध मधुकरराव कदम",
    designation: "Settlor / Founder & Managing Trustee",
    designationMr: "संस्थापक व मुख्य व्यवस्थापकीय विश्वस्त",
    responsibility: "Executive Leadership, Programme Strategy & Institutional Development",
    bio: "Guiding the vision, founding principles and long-term socio-economic roadmap of VORTEXSOFT VIKASDHARA FOUNDATION."
  },
  {
    name: "Mr. Dnyaneshvar Taterao Ballod",
    nameMr: "श्री. ज्ञानेश्वर तातेराव बल्लोड",
    designation: "Trustee",
    designationMr: "विश्वस्त",
    responsibility: "Community Outreach & Field Implementation",
    bio: "Focusing on grassroots community engagement, rural coordination and field operational execution across Maharashtra."
  },
  {
    name: "Mr. Sumit Balaji Jadhav",
    nameMr: "श्री. सुमित बालाजी जाधव",
    designation: "Trustee",
    designationMr: "विश्वस्त",
    responsibility: "Youth Development, Skills & Project Coordination",
    bio: "Guiding youth training initiatives, educational awareness campaigns and volunteer engagement programmes."
  }
];

export function About() {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title="About VORTEXSOFT VIKASDHARA FOUNDATION | Public Charitable Trust in India"
        description="VORTEXSOFT VIKASDHARA FOUNDATION is a public charitable trust based in Nanded, Maharashtra, with an intended area of operation throughout India. Focused on education, skill development, employment, women empowerment, and community development."
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "About Us", item: "/about" }
        ]}
      />

      {/* Hero Section (§24) */}
      <Section variant="xl" background="sky">
        <Container>
          <SectionHeader>
            <SectionEyebrow>{t("About Us", "संस्थेचा परिचय")}</SectionEyebrow>
            <SectionTitle>About VORTEXSOFT VIKASDHARA FOUNDATION</SectionTitle>
          </SectionHeader>
          <div className="max-w-4xl mx-auto text-center mt-6 space-y-4">
            <p className="text-base sm:text-lg lg:text-xl text-neutral-800 leading-relaxed font-medium">
              {t(
                "VORTEXSOFT VIKASDHARA FOUNDATION is a public charitable trust based in Nanded, Maharashtra, with an intended area of operation throughout India.",
                "वॉर्टेक्ससॉफ्ट विकासधारा फाउंडेशन हा नांदेड, महाराष्ट्र येथे आधारित सार्वजनिक धर्मादाय न्यास असून संपूर्ण भारतात सामाजिक कार्य करण्याचा उद्देश आहे."
              )}
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              {t(
                "The Foundation is focused on creating meaningful opportunities through education, skill development, employment, livelihood, women’s empowerment, humanitarian support, rural and community development, health awareness, environment and animal welfare.",
                "संस्था शिक्षण, कौशल्यविकास, रोजगार, उपजीविका, महिला सक्षमीकरण, मानवतावादी मदत, ग्रामीण व समुदाय विकास, आरोग्य जनजागृती, पर्यावरण आणि गोशाळा / प्राणी कल्याणाच्या माध्यमातून अर्थपूर्ण संधी निर्माण करण्यासाठी समर्पित आहे."
              )}
            </p>
            <p className="text-xs sm:text-sm text-neutral-500 italic max-w-2xl mx-auto pt-2">
              {t(
                "Our approach is to understand genuine needs, build practical programmes, develop responsible partnerships, implement activities carefully and strengthen our work through documentation, learning and accountability.",
                "आमचा दृष्टिकोन वास्तविक गरजा समजून घेणे, व्यावहारिक उपक्रम राबवणे, जबाबदार भागीदारी विकसित करणे आणि पारदर्शकतेने कार्य करणे हा आहे."
              )}
            </p>
          </div>
        </Container>
      </Section>

      {/* Vision & Mission (§25, §26) */}
      <Section variant="lg" background="none" id="vision-mission">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200/90 shadow-soft flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full mb-4 inline-block">
                  {t("Our Vision", "आमचे ध्येय (Vision)")}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-heading mb-4">
                  {t("A Stronger, Inclusive & Self-Reliant India", "सक्षम, समावेशक आणि आत्मनिर्भर भारत")}
                </h2>
                <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
                  {t(
                    "To contribute to a stronger, more inclusive and self-reliant India where people have fair opportunities to learn, develop skills, earn with dignity, live safely and contribute to the wellbeing of their communities.",
                    "एका सक्षम, सर्वसमावेशक आणि आत्मनिर्भर भारताच्या उभारणीत योगदान देणे, जिथे प्रत्येक व्यक्तीला शिकण्याची, कौशल्ये विकसित करण्याची, सन्मानाने उपजीविका मिळवण्याची आणि समाजाच्या विकासात सहभागी होण्याची समान संधी मिळेल."
                  )}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-100 text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                समर्थ लोक • सक्षम समाज • समृद्ध भारत
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200/90 shadow-soft flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full mb-4 inline-block">
                  {t("Our Mission", "आमचे उद्दिष्ट (Mission)")}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-heading mb-4">
                  {t("Practical Pathways from Need to Opportunity", "गरजेकडून संधीकडे नेणारे व्यावहारिक मार्ग")}
                </h2>
                <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
                  {t(
                    "To develop and support practical charitable programmes that create education, skill, employment, livelihood, humanitarian, environmental, animal-welfare and community-development opportunities for people and communities in need.",
                    "गरजू व्यक्ती आणि समुदायांसाठी शिक्षण, कौशल्य, रोजगार, उपजीविका, मानवतावादी मदत, पर्यावरण, प्राणी कल्याण आणि समुदाय विकासाच्या संधी निर्माण करणारे व्यावहारिक धर्मादाय उपक्रम विकसित करणे आणि राबवणे."
                  )}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-100 text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                From Need to Opportunity
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Values (§27) */}
      <Section variant="lg" background="neutral" id="values">
        <Container>
          <SectionHeader>
            <SectionEyebrow>{t("Guiding Principles", "मार्गदर्शक तत्त्वे")}</SectionEyebrow>
            <SectionTitle>{t("Our Core Values", "आमची मूलभूत मूल्ये")}</SectionTitle>
            <SectionSubtitle>
              {t(
                "Eight foundational values guide our decisions, programmes, and institutional interactions",
                "आठ मूलभूत मूल्ये आमचे निर्णय, उपक्रम आणि संस्थात्मक कार्यपद्धतीचे मार्गदर्शन करतात"
              )}
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuesList.map((val, idx) => (
              <Card key={idx} variant="hover-lift" padding="lg" className="text-center">
                <CardContent className="space-y-2">
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-primary-100 flex items-center justify-center text-primary-800 font-bold text-lg mb-3">
                    {idx + 1}
                  </div>
                  <CardTitle className="text-base font-bold text-neutral-900">
                    {t(val.title, val.titleMr)}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {val.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Board of Trustees (§28) */}
      <Section variant="lg" background="none" id="leadership">
        <Container>
          <SectionHeader>
            <SectionEyebrow>{t("Leadership & Governance", "नेतृत्व व प्रशासन")}</SectionEyebrow>
            <SectionTitle>{t("Board of Trustees", "विश्वस्त मंडळ")}</SectionTitle>
            <SectionSubtitle className="max-w-2xl mx-auto">
              {t(
                "Our trustees provide lawful stewardship, community commitment, and organisational accountability.",
                "विश्वस्त मंडळ संस्थेच्या कार्यावर कायदेशीर देखरेख, सामाजिक बांधिलकी आणि पारदर्शक प्रशासन सुनिश्चित करते."
              )}
            </SectionSubtitle>
          </SectionHeader>

          <div className="grid md:grid-cols-3 gap-8">
            {trustees.map((leader, idx) => (
              <Card key={idx} variant="bordered" padding="lg" className="bg-white shadow-soft text-center space-y-4">
                <CardContent className="space-y-3 pt-2">
                  <div className="w-20 h-20 mx-auto rounded-full bg-primary-100/80 border-2 border-primary-200 flex items-center justify-center text-primary-800 font-bold text-xl font-heading">
                    {leader.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 font-heading">
                      {t(leader.name, leader.nameMr)}
                    </h3>
                    <Badge variant="primary" className="mt-1 text-xs">
                      {t(leader.designation, leader.designationMr)}
                    </Badge>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {leader.bio}
                  </p>
                  <div className="pt-3 border-t border-neutral-100 text-[11px] text-neutral-500 font-medium">
                    <strong className="text-neutral-700">Area:</strong> {leader.responsibility}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Governance & Responsible Stewardship (§29) */}
      <Section variant="lg" background="primary" id="governance">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-200 bg-primary-950/60 px-3.5 py-1.5 rounded-full inline-block">
              {t("Statutory Commitment", "कायदेशीर बांधिलकी")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              {t("Governance & Responsible Stewardship", "प्रशासन आणि जबाबदार व्यवस्थापन")}
            </h2>
            <p className="text-neutral-200 text-sm sm:text-base leading-relaxed">
              {t(
                "VORTEXSOFT VIKASDHARA FOUNDATION is governed under its registered Trust Deed in Maharashtra, India. We are committed to ethical oversight, meticulous recordkeeping, lawful utilization of charitable funds, programme documentation, and full compliance with applicable statutory regulations.",
                "वॉर्टेक्ससॉफ्ट विकासधारा फाउंडेशन महाराष्ट्र धर्मादाय न्यास कायद्यानुसार चालवले जाते. संस्था नैतिक प्रशासन, पारदर्शक हिशोब, धर्मादाय निधीचा योग्य वापर आणि कायदेशीर नियमांचे काटेकोर पालन करण्यासाठी कटिबद्ध आहे."
              )}
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}