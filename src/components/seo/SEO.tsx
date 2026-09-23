import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article" | "profile";
  breadcrumbs?: Array<{ name: string; item: string }>;
  faqs?: Array<{ question: string; answer: string }>;
}

const defaultKeywords = [
  "VIKASDHARA FOUNDATION",
  "Vikasdhara Foundation",
  "Public Charitable Trust Maharashtra",
  "NGO in Nanded",
  "NGO in Pune",
  "NGO in Maharashtra",
  "Dharmabad public trust",
  "Education charitable trust India",
  "Skill development NGO Maharashtra",
  "Women empowerment NGO India",
  "Youth employability support",
  "Livelihood development India",
  "Rural development Maharashtra",
  "Community development NGO",
  "Gau Shala charitable trust",
  "Environmental sustainability India"
];

const defaultFaqs = [
  {
    question: "What is VIKASDHARA FOUNDATION?",
    answer: "VIKASDHARA FOUNDATION is a public charitable trust based in Nanded, Maharashtra, working across India in charitable and social-development areas including education, skill development, employment, livelihood, women’s empowerment, humanitarian support, community development, environment and animal welfare."
  },
  {
    question: "Where is Vikasdhara Foundation based?",
    answer: "The Foundation’s registered office is located at Near Chhatrapati Shivaji Putla, Chondi, Post Jarikot, Taluka Dharmabad, District Nanded – 431808, Maharashtra, India."
  },
  {
    question: "What does Vikasdhara Foundation work on?",
    answer: "Its focus includes education, women’s empowerment, skill development, employment, livelihood, humanitarian support, community development, health awareness, environment and animal welfare."
  },
  {
    question: "Does the Foundation work with companies on CSR projects?",
    answer: "Yes. The Foundation can work with companies, institutions and government bodies on socially beneficial projects involving skill development, vocational training, livelihood development, and community initiatives, subject to applicable law and appropriate agreements."
  },
  {
    question: "Does the Foundation provide guaranteed jobs?",
    answer: "No general guarantee is implied. The Foundation connects skill training with employability preparation, career guidance and placement facilitation. Outcomes depend on candidate eligibility and employer requirements."
  },
  {
    question: "Can people volunteer with the Foundation?",
    answer: "Volunteer opportunities are offered according to operational programme needs, safeguarding requirements and Foundation policies in education, skills, community outreach, and environment."
  }
];

export function SEO({
  title = "VIKASDHARA FOUNDATION | Education, Skills, Employment & Community Development",
  description = "VIKASDHARA FOUNDATION is a public charitable trust based in Nanded, Maharashtra, working across India in education, skill development, employment, women’s empowerment, livelihood, humanitarian support, community development, environment and animal welfare.",
  keywords = defaultKeywords,
  image = "https://www.vikasdharafoundation.org/logo.png",
  type = "website",
  breadcrumbs,
  faqs = defaultFaqs,
}: SEOProps) {
  const location = useLocation();
  const canonicalUrl = `https://www.vikasdharafoundation.org${location.pathname === "/" ? "" : location.pathname}`;

  useEffect(() => {
    // 1. Update Title
    const formattedTitle = title.includes("Vikasdhara")
      ? title
      : `${title} | VIKASDHARA FOUNDATION`;
    document.title = formattedTitle;

    // 2. Helper to set/update meta tag
    const setMeta = (attr: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 3. Helper to set/update link tag
    const setLink = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // Standard SEO Meta
    setMeta("name", "description", description);
    setMeta("name", "keywords", keywords.join(", "));
    setMeta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setLink("canonical", canonicalUrl);

    // OpenGraph
    setMeta("property", "og:title", formattedTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:type", type);
    setMeta("property", "og:image", image);
    setMeta("property", "og:site_name", "VIKASDHARA FOUNDATION");
    setMeta("property", "og:locale", "en_IN");

    // Twitter Card
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", formattedTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    // GEO Meta (Nanded, Maharashtra, India)
    setMeta("name", "geo.region", "IN-MH");
    setMeta("name", "geo.placename", "Dharmabad, Nanded, Maharashtra, India");
    setMeta("name", "geo.position", "18.8977;77.8504");
    setMeta("name", "ICBM", "18.8977, 77.8504");
    setMeta("name", "author", "VIKASDHARA FOUNDATION");

    // 4. Inject Unified JSON-LD Structured Data
    const existingScript = document.getElementById("json-ld-structured-data");
    if (existingScript) {
      existingScript.remove();
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        // Organization Schema
        {
          "@type": ["Organization", "NGO"],
          "@id": "https://www.vikasdharafoundation.org/#organization",
          "name": "VIKASDHARA FOUNDATION",
          "alternateName": [
            "Vikasdhara Foundation",
            "विकासधारा फाउंडेशन"
          ],
          "url": "https://www.vikasdharafoundation.org/",
          "logo": "https://www.vikasdharafoundation.org/logo.png",
          "image": "https://www.vikasdharafoundation.org/images/hero_campus.jpg",
          "description": "VIKASDHARA FOUNDATION is a public charitable trust based in Nanded, Maharashtra, India, working across India in education, skill development, employment, livelihood, women’s empowerment, humanitarian support, community development, environment and animal welfare.",
          "slogan": "Empowering People. Strengthening Communities. Building a Better India.",
          "email": "info@vikasdharafoundation.org",
          "foundingDate": "2026-09-11",
          "founder": {
            "@type": "Person",
            "name": "Anirudh Madhukarrao Kadam",
            "jobTitle": "Settlor / Founder & Managing Trustee"
          },
          "trustee": [
            { "@type": "Person", "name": "Anirudh Madhukarrao Kadam", "jobTitle": "Founder & Managing Trustee" },
            { "@type": "Person", "name": "Dnyaneshvar Taterao Ballod", "jobTitle": "Trustee" },
            { "@type": "Person", "name": "Sumit Balaji Jadhav", "jobTitle": "Trustee" }
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Near Chhatrapati Shivaji Putla, Chondi, Post Jarikot",
            "addressLocality": "Dharmabad",
            "addressRegion": "Maharashtra",
            "postalCode": "431808",
            "addressCountry": "IN"
          },
          "areaServed": [
            { "@type": "AdministrativeArea", "name": "Maharashtra" },
            { "@type": "Country", "name": "India" }
          ],
          "knowsAbout": [
            "Education and Learning Support",
            "Women's Education and Empowerment",
            "Skill Development and Vocational Training",
            "Employment and Livelihood Pathways",
            "Corporate and Institutional Social Projects",
            "Community and Rural Development",
            "Food and Humanitarian Support",
            "Elderly Care",
            "Health Awareness",
            "Environmental Sustainability",
            "Animal Welfare and Gau Shala"
          ],
          "sameAs": []
        },
        // WebSite Schema
        {
          "@type": "WebSite",
          "@id": "https://www.vikasdharafoundation.org/#website",
          "url": "https://www.vikasdharafoundation.org/",
          "name": "VIKASDHARA FOUNDATION",
          "publisher": { "@id": "https://www.vikasdharafoundation.org/#organization" },
          "inLanguage": ["en-IN", "mr-IN"]
        },
        // BreadcrumbList Schema
        breadcrumbs && breadcrumbs.length > 0 && {
          "@type": "BreadcrumbList",
          "@id": `${canonicalUrl}#breadcrumb`,
          "itemListElement": breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": `https://www.vikasdharafoundation.org${crumb.item}`
          }))
        },
        // FAQPage Schema
        faqs && faqs.length > 0 && {
          "@type": "FAQPage",
          "@id": `${canonicalUrl}#faq`,
          "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }
      ].filter(Boolean)
    };

    const script = document.createElement("script");
    script.id = "json-ld-structured-data";
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("json-ld-structured-data");
      if (el) el.remove();
    };
  }, [title, description, keywords, image, type, canonicalUrl, breadcrumbs, faqs]);

  return null;
}
