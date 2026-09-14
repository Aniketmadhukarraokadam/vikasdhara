import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { useDynamicContent } from "@/context/ContentContext";

export function BlogList() {
  const { language, t } = useLanguage();
  const { content } = useDynamicContent();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const publishedBlogs = content.blogs.filter(b => b.published);

  const categories = ["All", "Education & Skills", "Women's Empowerment", "Corporate CSR", "Rural Ecology"];

  const filteredBlogs = publishedBlogs.filter(blog => {
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.titleMr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredBlog = publishedBlogs.find(b => b.featured) || publishedBlogs[0];

  return (
    <div className="bg-neutral-50 min-h-screen text-neutral-900">
      
      {/* Blog Hero Section */}
      <section className="relative py-20 bg-neutral-950 text-white overflow-hidden">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-[140px] pointer-events-none -z-10" />

        <Container size="full">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-950/80 border border-primary-500/40 text-primary-300 text-xs font-extrabold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t("Knowledge, Insights & Field Stories", "माहिती, विचार व प्रत्यक्ष अनुभव")}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight">
              {t(
                "Stories of Dignity, Learning & Grassroots Change",
                "बदलाची गाथा • प्रत्यक्ष समाजकार्य व अनुभव"
              )}
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              {t(
                "Read in-depth articles, impact case studies, and policy perspectives on rural education, women's self-reliance, CSR compliance, and environmental stewardship across Maharashtra.",
                "महाराष्ट्रातील ग्रामीण शिक्षण, कौशल्यविकास, महिला सक्षमीकरण आणि सीएसआर सहकार्यावरील माहितीपूर्ण लेख व अनुभव."
              )}
            </p>

            {/* Search Input Bar */}
            <div className="pt-4 max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("Search by topic, keyword, or tag...", "विषय, शब्द किंवा टॅगनुसार शोधा...")}
                  className="w-full px-5 py-3.5 pl-12 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white/15 text-sm backdrop-blur-md transition-all shadow-xl"
                />
                <span className="absolute left-4 top-3.5 text-neutral-400 text-lg">🔍</span>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-3.5 text-neutral-400 hover:text-white text-xs font-bold"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <Section variant="lg">
        <Container size="full">
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-primary-700 text-white shadow-md shadow-primary-900/20 scale-105"
                    : "bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Article Card (When No Search is Active) */}
          {!searchQuery && selectedCategory === "All" && featuredBlog && (
            <div className="mb-14">
              <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-xl grid lg:grid-cols-12 gap-0 card-3d-hover group">
                <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-neutral-950">
                  <img
                    src={featuredBlog.coverImage}
                    alt={featuredBlog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary-700 text-white text-[11px] font-black uppercase tracking-wider shadow-md">
                      ★ {t("Featured Story", "विशेष लेख")}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-primary-700 uppercase tracking-widest">
                      <span>{language === "mr" ? featuredBlog.categoryMr : featuredBlog.category}</span>
                      <span>•</span>
                      <span>{featuredBlog.readTime}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-heading leading-tight group-hover:text-primary-700 transition-colors">
                      <Link to={`/blogs/${featuredBlog.slug}`}>
                        {language === "mr" ? featuredBlog.titleMr : featuredBlog.title}
                      </Link>
                    </h2>

                    <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3">
                      {language === "mr" ? featuredBlog.excerptMr : featuredBlog.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-800 font-bold flex items-center justify-center text-sm">
                        {featuredBlog.author.charAt(0)}
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-neutral-900">{featuredBlog.author}</span>
                        <span className="block text-[11px] text-neutral-500">{featuredBlog.publishDate}</span>
                      </div>
                    </div>

                    <Link to={`/blogs/${featuredBlog.slug}`}>
                      <Button size="sm" className="rounded-xl font-bold">
                        {t("Read Article", "पूर्ण लेख वाचा")} →
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Article Grid */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-extrabold text-neutral-900 font-heading">
                {searchQuery ? t(`Search Results (${filteredBlogs.length})`, `शोध निकाल (${filteredBlogs.length})`) : t("Latest Articles & Case Studies", "नवीनतम लेख व यशोगाथा")}
              </h3>
              <span className="text-xs text-neutral-500 font-medium">
                {filteredBlogs.length} {t("articles published", "लेख उपलब्ध")}
              </span>
            </div>

            {filteredBlogs.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-neutral-200 p-8 space-y-4">
                <span className="text-4xl">🔍</span>
                <h4 className="text-lg font-bold text-neutral-800">
                  {t("No articles found matching your criteria.", "कोणताही लेख सापडला नाही.")}
                </h4>
                <p className="text-xs text-neutral-500">
                  {t("Try adjusting your search terms or select another category.", "कृपया वेगळा शब्द शोधून पहा.")}
                </p>
                <Button variant="outline" size="sm" onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}>
                  {t("Clear Filters", "सर्व फिल्टर हटवा")}
                </Button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map((blog) => (
                  <article
                    key={blog.id}
                    className="bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-soft hover:shadow-xl transition-all duration-300 card-3d-hover flex flex-col justify-between group"
                  >
                    <Link to={`/blogs/${blog.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-neutral-900">
                      <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider border border-white/20">
                          {language === "mr" ? blog.categoryMr : blog.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <span className="px-2.5 py-0.5 rounded-md bg-white/90 backdrop-blur-md text-neutral-900 text-[10px] font-bold">
                          ⏱ {blog.readTime}
                        </span>
                      </div>
                    </Link>

                    <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <span className="text-[11px] font-semibold text-neutral-400 block">
                          {blog.publishDate}
                        </span>

                        <h4 className="text-lg font-bold text-neutral-900 font-heading leading-snug group-hover:text-primary-700 transition-colors">
                          <Link to={`/blogs/${blog.slug}`}>
                            {language === "mr" ? blog.titleMr : blog.title}
                          </Link>
                        </h4>

                        <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                          {language === "mr" ? blog.excerptMr : blog.excerpt}
                        </p>
                      </div>

                      {/* Tag pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {blog.tags.slice(0, 3).map((tag, i) => (
                          <span key={i} className="text-[10px] font-semibold text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-md">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                        <span className="font-bold text-neutral-700">By {blog.author}</span>
                        <Link to={`/blogs/${blog.slug}`} className="font-bold text-primary-700 group-hover:underline flex items-center gap-1">
                          <span>{t("Read", "वाचा")}</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

        </Container>
      </Section>
    </div>
  );
}
