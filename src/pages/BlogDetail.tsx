import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { useDynamicContent } from "@/context/ContentContext";

export function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const { content } = useDynamicContent();
  const [copied, setCopied] = useState(false);

  const blog = content.blogs.find((b) => b.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
        <span className="text-5xl">📄</span>
        <h1 className="text-2xl font-extrabold text-neutral-900">Article Not Found</h1>
        <p className="text-neutral-500 text-sm max-w-md">
          The requested blog article could not be located or may have been updated.
        </p>
        <Link to="/blogs">
          <Button size="sm">← Return to All Articles</Button>
        </Link>
      </div>
    );
  }

  const relatedBlogs = content.blogs
    .filter((b) => b.id !== blog.id && (b.category === blog.category || b.published))
    .slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(`${blog.title} - Read on Vortexsoft Vikasdhara Foundation:\n${window.location.href}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  const handleShareLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
  };

  // Convert raw markdown-like newlines and headers to clean structured elements
  const renderFormattedContent = (rawText: string) => {
    const paragraphs = rawText.split("\n\n");
    return paragraphs.map((p, idx) => {
      if (p.startsWith("### ")) {
        return (
          <h3 key={idx} className="text-xl sm:text-2xl font-bold text-neutral-900 font-heading mt-8 mb-3">
            {p.replace("### ", "")}
          </h3>
        );
      }
      if (p.startsWith("> ")) {
        return (
          <blockquote key={idx} className="p-5 my-6 bg-primary-50 border-l-4 border-primary-600 rounded-r-2xl italic text-neutral-800 text-sm sm:text-base font-medium">
            {p.replace("> ", "")}
          </blockquote>
        );
      }
      if (p.startsWith("1. ") || p.startsWith("- ")) {
        const items = p.split("\n");
        return (
          <ul key={idx} className="space-y-2 my-4 pl-5 list-disc text-neutral-700 text-sm sm:text-base leading-relaxed">
            {items.map((it, itemIdx) => (
              <li key={itemIdx} dangerouslySetInnerHTML={{ __html: it.replace(/^[0-9]+\.\s+|^-\s+/, "").replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            ))}
          </ul>
        );
      }
      return (
        <p key={idx} className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
      );
    });
  };

  const activeTitle = language === "mr" ? blog.titleMr : blog.title;
  const activeExcerpt = language === "mr" ? blog.excerptMr : blog.excerpt;
  const activeContent = language === "mr" ? blog.contentMr : blog.content;
  const activeCategory = language === "mr" ? blog.categoryMr : blog.category;

  return (
    <div className="bg-neutral-50 min-h-screen text-neutral-900">
      
      {/* Breadcrumb Navigation Bar */}
      <div className="bg-white border-b border-neutral-200 py-3 text-xs">
        <Container size="full">
          <div className="flex items-center gap-2 text-neutral-500 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-primary-700">Home</Link>
            <span>/</span>
            <Link to="/blogs" className="hover:text-primary-700">Blogs & Insights</Link>
            <span>/</span>
            <span className="text-neutral-900 font-bold truncate max-w-xs">{activeTitle}</span>
          </div>
        </Container>
      </div>

      {/* Article Hero Header */}
      <section className="bg-neutral-950 text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent -z-10" />
        <Container size="full">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-primary-600 text-white text-xs font-black uppercase tracking-wider">
                {activeCategory}
              </span>
              <span className="text-xs text-neutral-400">⏱ {blog.readTime}</span>
              <span className="text-xs text-neutral-500">•</span>
              <span className="text-xs text-neutral-400">📅 {blog.publishDate}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-tight">
              {activeTitle}
            </h1>

            <p className="text-base sm:text-xl text-neutral-300 leading-relaxed font-normal">
              {activeExcerpt}
            </p>

            {/* Author Profile Strip */}
            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-primary-700 text-white font-bold flex items-center justify-center text-lg shadow-md border border-white/20">
                  {blog.author.charAt(0)}
                </div>
                <div>
                  <span className="block font-bold text-white text-sm sm:text-base">{blog.author}</span>
                  <span className="block text-xs text-primary-300">{blog.authorRole}</span>
                </div>
              </div>

              {/* Share Tools */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShareWhatsApp}
                  className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors flex items-center gap-1.5"
                  title="Share on WhatsApp"
                >
                  <span>💬 WhatsApp</span>
                </button>
                <button
                  onClick={handleShareLinkedIn}
                  className="px-3 py-1.5 rounded-xl bg-sky-700 hover:bg-sky-600 text-white text-xs font-bold transition-colors flex items-center gap-1.5"
                  title="Share on LinkedIn"
                >
                  <span>in Share</span>
                </button>
                <button
                  onClick={handleCopyLink}
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
                >
                  {copied ? "✓ Copied!" : "🔗 Copy Link"}
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Article Body & Sidebar */}
      <Section variant="lg">
        <Container size="full">
          <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
            
            {/* Main Article Content (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              {/* Featured Cover Image */}
              <div className="rounded-3xl overflow-hidden border border-neutral-200 shadow-xl bg-neutral-900 aspect-[16/9]">
                <img
                  src={blog.coverImage}
                  alt={activeTitle}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Formatted Article Body */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-soft prose prose-neutral max-w-none">
                {renderFormattedContent(activeContent)}
              </div>

              {/* Tags Strip */}
              <div className="bg-white rounded-2xl p-5 border border-neutral-200 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-neutral-500 mr-2">Tags:</span>
                {blog.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-semibold text-primary-800 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Author Bio Box */}
              <div className="bg-neutral-900 text-white rounded-3xl p-6 sm:p-8 border border-neutral-800 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-primary-600 text-white font-black flex items-center justify-center text-2xl shrink-0">
                  {blog.author.charAt(0)}
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <h4 className="text-lg font-bold text-white font-heading">{blog.author}</h4>
                    <span className="text-xs text-primary-400 bg-primary-950 px-2.5 py-0.5 rounded-full border border-primary-800">
                      {blog.authorRole}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Contributing insights on statutory governance, grassroots empowerment, and social transformation at <strong>VORTEXSOFT VIKASDHARA FOUNDATION</strong>.
                  </p>
                  <Link to="/contact" className="inline-block text-xs font-bold text-primary-300 hover:text-white pt-1 underline">
                    Connect with our research team →
                  </Link>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar (4 cols) */}
            <aside className="lg:col-span-4 space-y-8">
              
              {/* Institutional Callout */}
              <div className="bg-gradient-to-br from-primary-900 to-neutral-950 text-white rounded-3xl p-6 sm:p-7 border border-primary-500/30 shadow-xl space-y-4">
                <span className="text-2xl">🤝</span>
                <h4 className="text-lg font-bold font-heading">
                  {t("Partner with Our Mission", "आमच्या कार्यात सहभागी व्हा")}
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {t(
                    "Collaborate with VORTEXSOFT VIKASDHARA FOUNDATION under CSR Schedule VII for impactful education and skill initiatives.",
                    "शिक्षण, कौशल्यविकास आणि सामाजिक विकासासाठी आमच्याशी सीएसआर भागीदारी करा."
                  )}
                </p>
                <Link to="/get-involved/partner" className="block">
                  <Button size="sm" className="w-full bg-primary-600 hover:bg-primary-500 text-white font-bold">
                    {t("CSR Partnership Form", "सीएसआर चौकशी अर्ज")} →
                  </Button>
                </Link>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-3xl p-6 border border-neutral-200 shadow-soft space-y-5">
                <h4 className="text-base font-bold text-neutral-900 font-heading border-b border-neutral-100 pb-3">
                  {t("Related Articles", "संबंधित लेख")}
                </h4>
                <div className="space-y-4">
                  {relatedBlogs.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/blogs/${rel.slug}`}
                      className="group flex items-start gap-3 hover:bg-neutral-50 p-2 rounded-xl transition-colors"
                    >
                      <img
                        src={rel.coverImage}
                        alt={rel.title}
                        className="w-16 h-14 rounded-lg object-cover shrink-0 bg-neutral-900"
                      />
                      <div className="space-y-1 min-w-0">
                        <span className="text-[10px] font-bold text-primary-700 uppercase tracking-wider block truncate">
                          {rel.category}
                        </span>
                        <h5 className="text-xs font-bold text-neutral-900 leading-snug group-hover:text-primary-700 line-clamp-2">
                          {language === "mr" ? rel.titleMr : rel.title}
                        </h5>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Back to Hub */}
              <div className="text-center">
                <Link to="/blogs" className="text-xs font-bold text-neutral-600 hover:text-primary-700">
                  ← {t("Back to All Articles & Insights", "सर्व लेखांच्या पानावर परत जा")}
                </Link>
              </div>

            </aside>

          </div>
        </Container>
      </Section>
    </div>
  );
}
