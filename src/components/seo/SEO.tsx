import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article" | "profile";
  articlePublishedTime?: string;
  breadcrumbs?: Array<{ name: string; item: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  geoCity?: "Pune" | "Nanded" | "All";
}

const defaultKeywords = [
  "Vortexsoft Vikasdhara Foundation",
  "NGO in Pune",
  "Top NGO in Pune",
  "Best NGO in Pune Maharashtra",
  "NGO in Nanded",
  "Public Charitable Trust Maharashtra",
  "Pune NGO CSR Partnership",
  "CSR implementation agency Pune",
  "Skill development NGO Pune",
  "Women empowerment NGO Pune",
  "Education charitable trust India",
  "Rural development Maharashtra",
  "Animal welfare NGO Pune",
  "Gau Shala charitable trust Nanded",
  "Dharmabad public trust",
  "80G 12A registered NGO Maharashtra",
  "Pune non-profit organization",
  "Indian charitable foundation"
];

const defaultFaqs = [
  {
    question: "What is Vortexsoft Vikasdhara Foundation?",
    answer: "VORTEXSOFT VIKASDHARA FOUNDATION is a registered Indian Public Charitable Trust operating in Maharashtra with headquarters in Nanded and a regional coordination hub in Pune. The foundation focuses on education, youth skill development, employment facilitation, women's empowerment, rural upliftment, healthcare awareness, and animal welfare."
  },
  {
    question: "Does Vortexsoft Vikasdhara Foundation operate in Pune, Maharashtra?",
    answer: "Yes, Vortexsoft Vikasdhara Foundation maintains a dedicated Regional Coordination and CSR Partnership Hub in Pune, Maharashtra. The Pune centre drives corporate CSR collaborations, digital literacy initiatives, youth career mentoring, and state-wide institutional alliances."
  },
  {
    question: "Where are the official offices of Vortexsoft Vikasdhara Foundation located?",
    answer: "The Registered Headquarters is at Near Chhatrapati Shivaji Putla, Chondi, Post Jarikot, Taluka Dharmabad, District Nanded – 431808, Maharashtra. The Foundation also operates its Regional Coordination & CSR Liaison Hub in Pune, Maharashtra."
  },
  {
    question: "How can corporations in Pune and across India partner for CSR projects?",
    answer: "Corporations can partner with Vortexsoft Vikasdhara Foundation under their CSR mandate (Schedule VII, Companies Act 2013). The Foundation follows a transparent 5-stage CSR delivery model: Discover, Design, Implement, Measure, and Report. Contact partnerships@vikasdharafoundation.org or call the Pune liaison desk."
  },
  {
    question: "How can I volunteer or support Vikasdhara Foundation in Pune?",
    answer: "Individuals can join as mentors, tutors, event coordinators, tree plantation volunteers, or animal welfare assistants in Pune and across Maharashtra. Apply through the online Volunteer portal or email volunteer@vikasdharafoundation.org."
  }
];

export function SEO({
  title = "VORTEXSOFT VIKASDHARA FOUNDATION | Top NGO in Pune & Maharashtra",
  description = "VORTEXSOFT VIKASDHARA FOUNDATION is a registered public charitable trust in Maharashtra (Pune Regional Hub & Nanded HQ). Delivering high-impact programmes in education, youth skill training, women empowerment, CSR execution, and community development.",
  keywords = defaultKeywords,
  image = "https://www.vikasdharafoundation.org/logo.png",
  type = "website",
  breadcrumbs,
  faqs = defaultFaqs,
  geoCity = "All"
}: SEOProps) {
  const location = useLocation();
  const canonicalUrl = `https://www.vikasdharafoundation.org${location.pathname === "/" ? "" : location.pathname}`;

  useEffect(() => {
    // 1. Update Title
    const formattedTitle = title.includes("VORTEXSOFT")
      ? title
      : `${title} | VORTEXSOFT VIKASDHARA FOUNDATION`;
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
    setMeta("property", "og:site_name", "VORTEXSOFT VIKASDHARA FOUNDATION");
    setMeta("property", "og:locale", "en_IN");

    // Twitter Card
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:site", "@vvf_india");
    setMeta("name", "twitter:title", formattedTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    // GEO Meta (Maharashtra, Pune, Nanded)
    setMeta("name", "geo.region", "IN-MH");
    setMeta("name", "geo.placename", geoCity === "Pune" ? "Pune, Maharashtra, India" : geoCity === "Nanded" ? "Nanded, Maharashtra, India" : "Pune, Nanded, Maharashtra, India");
    setMeta("name", "geo.position", geoCity === "Nanded" ? "18.8977;77.8504" : "18.5204;73.8567");
    setMeta("name", "ICBM", geoCity === "Nanded" ? "18.8977, 77.8504" : "18.5204, 73.8567");
    setMeta("name", "author", "VORTEXSOFT VIKASDHARA FOUNDATION");

    // Dublin Core Metadata
    setMeta("name", "DC.title", formattedTitle);
    setMeta("name", "DC.creator", "VORTEXSOFT VIKASDHARA FOUNDATION");
    setMeta("name", "DC.subject", "NGO, Public Charitable Trust, Education, Skill Development, Pune, Maharashtra");
    setMeta("name", "DC.description", description);
    setMeta("name", "DC.coverage", "Pune, Nanded, Maharashtra, India");

    // 4. Inject Unified JSON-LD Structured Data
    const existingScript = document.getElementById("json-ld-structured-data");
    if (existingScript) {
      existingScript.remove();
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        // Organization & NGO Schema
        {
          "@type": ["NonProfitOrganization", "NGO"],
          "@id": "https://www.vikasdharafoundation.org/#organization",
          "name": "VORTEXSOFT VIKASDHARA FOUNDATION",
          "alternateName": [
            "Vikasdhara Foundation",
            "VVF Pune",
            "Vikasdhara Foundation Pune",
            "व्हॉर्टेक्ससॉफ्ट विकासधारा फाउंडेशन"
          ],
          "url": "https://www.vikasdharafoundation.org",
          "logo": "https://www.vikasdharafoundation.org/logo.png",
          "image": "https://www.vikasdharafoundation.org/images/hero_campus.jpg",
          "description": description,
          "slogan": "Empowering People. Strengthening Communities. Building a Better India.",
          "email": "info@vikasdharafoundation.org",
          "telephone": "+91-XXXXXXXXXX",
          "foundingDate": "2026",
          "founder": {
            "@type": "Person",
            "name": "Anirudh Madhukarrao Kadam",
            "jobTitle": "Settlor / Founder & Managing Trustee"
          },
          "trustee": [
            { "@type": "Person", "name": "Anirudh Madhukarrao Kadam" },
            { "@type": "Person", "name": "Dnyaneshvar Taterao Ballod" },
            { "@type": "Person", "name": "Sumit Balaji Jadhav" }
          ],
          "location": [
            {
              "@type": "Place",
              "@id": "https://www.vikasdharafoundation.org/#pune-hub",
              "name": "VORTEXSOFT VIKASDHARA FOUNDATION — Pune Regional Coordination & CSR Hub",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Regional Coordination & CSR Liaison Centre",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 18.5204,
                "longitude": 73.8567
              }
            },
            {
              "@type": "Place",
              "@id": "https://www.vikasdharafoundation.org/#nanded-hq",
              "name": "VORTEXSOFT VIKASDHARA FOUNDATION — Registered Headquarters",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Near Chhatrapati Shivaji Putla, Chondi, Post Jarikot",
                "addressLocality": "Dharmabad, District Nanded",
                "addressRegion": "Maharashtra",
                "postalCode": "431808",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 18.8977,
                "longitude": 77.8504
              }
            }
          ],
          "areaServed": [
            { "@type": "City", "name": "Pune" },
            { "@type": "City", "name": "Pimpri-Chinchwad" },
            { "@type": "City", "name": "Nanded" },
            { "@type": "AdministrativeArea", "name": "Maharashtra" },
            { "@type": "Country", "name": "India" }
          ],
          "knowsAbout": [
            "NGO in Pune",
            "Corporate Social Responsibility (CSR) in Maharashtra",
            "Skill Development and Employability Training",
            "Women Career Mentorship and Empowerment",
            "Digital Literacy and Community Education",
            "Rural Community Infrastructure",
            "Humanitarian Nutrition & Dharamshala Support",
            "Elderly Care and Vruddhashram",
            "Tree Plantation and Eco-Sustainability",
            "Gau Shala and Animal Welfare"
          ],
          "sameAs": [
            "https://twitter.com",
            "https://linkedin.com",
            "https://facebook.com",
            "https://instagram.com",
            "https://youtube.com"
          ]
        },
        // Local Business / Place Schema for Pune Location
        {
          "@type": ["LocalBusiness", "NGO"],
          "@id": "https://www.vikasdharafoundation.org/#pune-office",
          "name": "VORTEXSOFT VIKASDHARA FOUNDATION — Pune Office",
          "url": "https://www.vikasdharafoundation.org/pune-ngo",
          "image": "https://www.vikasdharafoundation.org/logo.png",
          "priceRange": "₹0 - Non-Profit",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Pune Coordination Hub & CSR Centre",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "postalCode": "411001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.5204,
            "longitude": 73.8567
          },
          "telephone": "+91-XXXXXXXXXX",
          "email": "partnerships@vikasdharafoundation.org",
          "openingHours": "Mo-Sa 09:30-18:30"
        },
        // WebSite Schema
        {
          "@type": "WebSite",
          "@id": "https://www.vikasdharafoundation.org/#website",
          "url": "https://www.vikasdharafoundation.org",
          "name": "VORTEXSOFT VIKASDHARA FOUNDATION",
          "publisher": { "@id": "https://www.vikasdharafoundation.org/#organization" },
          "inLanguage": ["en-IN", "mr-IN"]
        },
        // BreadcrumbList Schema (if provided)
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
        // FAQ Schema for AEO (Answer Engine Optimization)
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
  }, [title, description, keywords, image, type, canonicalUrl, breadcrumbs, faqs, geoCity]);

  return null;
}
