import { useState, useRef } from "react";
import { useDynamicContent, BlogPost } from "@/context/ContentContext";
import { Button } from "@/components/ui/Button";

export function AdminBlogs() {
  const { content, addBlog, updateBlog, deleteBlog, togglePublishBlog } = useDynamicContent();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [previewBlog, setPreviewBlog] = useState<BlogPost | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form State
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: "",
    titleMr: "",
    slug: "",
    category: "Education & Skills",
    categoryMr: "शिक्षण व कौशल्ये",
    excerpt: "",
    excerptMr: "",
    content: "",
    contentMr: "",
    author: "Anirudh Kadam",
    authorRole: "Trustee & Managing Director",
    publishDate: new Date().toISOString().slice(0, 10),
    readTime: "4 min read",
    coverImage: "/images/youth_skills.jpg",
    featured: false,
    published: true,
    tags: ["Education", "Maharashtra"]
  });

  const categories = ["Education & Skills", "Women's Empowerment", "Corporate CSR", "Rural Ecology", "Community Service"];

  const filteredBlogs = content.blogs.filter(blog => {
    const matchesCat = selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleOpenCreateModal = () => {
    setEditingBlog(null);
    setFormData({
      title: "",
      titleMr: "",
      slug: "",
      category: "Education & Skills",
      categoryMr: "शिक्षण व कौशल्ये",
      excerpt: "",
      excerptMr: "",
      content: "",
      contentMr: "",
      author: "Anirudh Kadam",
      authorRole: "Trustee & Managing Director",
      publishDate: new Date().toISOString().slice(0, 10),
      readTime: "3 min read",
      coverImage: "/images/youth_skills.jpg",
      featured: false,
      published: true,
      tags: ["Development", "Maharashtra"]
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (blog: BlogPost) => {
    setEditingBlog(blog);
    setFormData({ ...blog });
    setIsModalOpen(true);
  };

  const handleTitleChange = (val: string) => {
    const generatedSlug = val
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
    setFormData(prev => ({
      ...prev,
      title: val,
      slug: editingBlog ? prev.slug : generatedSlug
    }));
  };

  // Image Upload Handler
  const handleImageFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);

    try {
      // First try sending to server upload API
      const body = new FormData();
      body.append("image", file);

      const res = await fetch("/api/upload.php", {
        method: "POST",
        body
      });

      if (res.ok) {
        const data = await res.json();
        if (data.url) {
          setFormData(prev => ({ ...prev, coverImage: data.url }));
          showToast("✓ Image uploaded successfully to server!");
          setUploadingImage(false);
          return;
        }
      }
    } catch (err) {
      console.log("Server upload fallback:", err);
    }

    // Fallback: Read as Local Base64 Data URL
    const reader = new FileReader();
    reader.onload = () => {
      setFormData(prev => ({ ...prev, coverImage: reader.result as string }));
      showToast("✓ Image converted & loaded successfully!");
      setUploadingImage(false);
    };
    reader.readAsDataURL(file);
  };

  const handleSaveBlog = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.content) {
      alert("Please provide at least a title and article content.");
      return;
    }

    const blogPayload: BlogPost = {
      id: editingBlog ? editingBlog.id : `blog-${Date.now()}`,
      slug: formData.slug || `article-${Date.now()}`,
      title: formData.title || "Untitled Article",
      titleMr: formData.titleMr || formData.title || "",
      excerpt: formData.excerpt || "",
      excerptMr: formData.excerptMr || formData.excerpt || "",
      content: formData.content || "",
      contentMr: formData.contentMr || formData.content || "",
      category: formData.category || "Education & Skills",
      categoryMr: formData.categoryMr || "शिक्षण व कौशल्ये",
      author: formData.author || "Administrator",
      authorRole: formData.authorRole || "VVF Editorial Team",
      publishDate: formData.publishDate || new Date().toISOString().slice(0, 10),
      readTime: formData.readTime || "3 min read",
      coverImage: formData.coverImage || "/images/youth_skills.jpg",
      featured: !!formData.featured,
      published: formData.published ?? true,
      tags: typeof formData.tags === "string" 
        ? (formData.tags as string).split(",").map(t => t.trim()).filter(Boolean)
        : (formData.tags || ["Vikasdhara"])
    };

    if (editingBlog) {
      updateBlog(editingBlog.id, blogPayload);
      showToast("✓ Article updated successfully!");
    } else {
      addBlog(blogPayload);
      showToast("✓ New article published successfully!");
    }

    setIsModalOpen(false);
  };

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`Are you sure you want to delete article:\n"${title}"?`)) {
      deleteBlog(id);
      showToast("🗑 Article deleted.");
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-20 right-6 z-50 p-4 rounded-2xl bg-neutral-900 text-white border border-emerald-500/40 shadow-2xl flex items-center gap-3 animate-slide-in-right">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-bold">{notification}</span>
        </div>
      )}

      {/* Top Banner & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-neutral-200 shadow-soft">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full">
            Content Management (CMS)
          </span>
          <h1 className="text-2xl font-extrabold text-neutral-900 mt-1 font-heading">
            Blogs, News & Field Insights
          </h1>
          <p className="text-xs text-neutral-500 mt-0.5">
            Create, edit, upload images, and publish bilingual editorial articles.
          </p>
        </div>

        <Button onClick={handleOpenCreateModal} className="flex items-center gap-2 font-bold shadow-md">
          <span>✍ Write New Article</span>
        </Button>
      </div>

      {/* Stats Counter Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-soft">
          <span className="text-[11px] font-bold text-neutral-500 uppercase">Total Articles</span>
          <span className="block text-2xl font-black text-neutral-900 mt-1">{content.blogs.length}</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-soft">
          <span className="text-[11px] font-bold text-emerald-600 uppercase">Live Published</span>
          <span className="block text-2xl font-black text-emerald-700 mt-1">
            {content.blogs.filter(b => b.published).length}
          </span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-soft">
          <span className="text-[11px] font-bold text-amber-600 uppercase">Draft Articles</span>
          <span className="block text-2xl font-black text-amber-700 mt-1">
            {content.blogs.filter(b => !b.published).length}
          </span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-soft">
          <span className="text-[11px] font-bold text-primary-600 uppercase">Featured Posts</span>
          <span className="block text-2xl font-black text-primary-700 mt-1">
            {content.blogs.filter(b => b.featured).length}
          </span>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-neutral-200 shadow-soft flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-1 min-w-[240px]">
          <span className="text-neutral-400">🔍</span>
          <input
            type="text"
            placeholder="Search articles by title, author, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs font-medium focus:outline-none bg-transparent"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery("")} className="text-xs text-neutral-400 hover:text-neutral-800">
              ✕
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-neutral-500 font-bold">Category:</span>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="text-xs border border-neutral-200 rounded-xl p-2 bg-neutral-50 font-semibold focus:outline-none"
          >
            <option value="All">All Categories ({content.blogs.length})</option>
            {categories.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Articles Management Table */}
      <div className="bg-white rounded-3xl border border-neutral-200 shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-neutral-50 border-b border-neutral-200 text-neutral-500 uppercase tracking-wider font-extrabold text-[10px]">
              <tr>
                <th className="p-4">Article</th>
                <th className="p-4">Category</th>
                <th className="p-4">Author</th>
                <th className="p-4">Publish Date</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 font-medium">
              {filteredBlogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-neutral-50/80 transition-colors">
                  
                  {/* Article Thumbnail + Title */}
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="w-14 h-10 rounded-lg object-cover bg-neutral-900 shrink-0 border border-neutral-200"
                      />
                      <div className="space-y-0.5 max-w-sm">
                        <div className="flex items-center gap-1.5">
                          {blog.featured && (
                            <span className="text-[9px] font-black text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">
                              FEATURED
                            </span>
                          )}
                          <span className="font-bold text-neutral-900 text-xs truncate block">
                            {blog.title}
                          </span>
                        </div>
                        <span className="text-[11px] text-neutral-400 block truncate">
                          /{blog.slug}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="p-4">
                    <span className="px-2.5 py-1 rounded-full bg-primary-50 text-primary-800 text-[10px] font-bold border border-primary-100">
                      {blog.category}
                    </span>
                  </td>

                  {/* Author */}
                  <td className="p-4">
                    <div>
                      <span className="font-bold text-neutral-900 block">{blog.author}</span>
                      <span className="text-[10px] text-neutral-500">{blog.readTime}</span>
                    </div>
                  </td>

                  {/* Date */}
                  <td className="p-4 text-neutral-600">
                    {blog.publishDate}
                  </td>

                  {/* Status Toggle */}
                  <td className="p-4">
                    <button
                      onClick={() => togglePublishBlog(blog.id)}
                      className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider transition-all ${
                        blog.published
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-300 hover:bg-emerald-200"
                          : "bg-neutral-200 text-neutral-700 border border-neutral-300 hover:bg-neutral-300"
                      }`}
                    >
                      {blog.published ? "● Published" : "○ Draft"}
                    </button>
                  </td>

                  {/* Actions */}
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => setPreviewBlog(blog)}
                        className="p-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-semibold"
                        title="Quick Preview"
                      >
                        👁 View
                      </button>
                      <button
                        onClick={() => handleOpenEditModal(blog)}
                        className="p-1.5 rounded-lg bg-primary-50 hover:bg-primary-100 text-primary-800 text-xs font-semibold"
                        title="Edit Article"
                      >
                        ✏ Edit
                      </button>
                      <button
                        onClick={() => handleDelete(blog.id, blog.title)}
                        className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold"
                        title="Delete Article"
                      >
                        🗑
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CREATE / EDIT ARTICLE MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl my-8">
            
            {/* Modal Header */}
            <div className="p-6 bg-neutral-950 text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-primary-400 uppercase tracking-widest">
                  Editorial CMS Editor
                </span>
                <h3 className="text-lg font-bold font-heading">
                  {editingBlog ? "Edit Article" : "Create New Article"}
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Modal Body Form */}
            <form onSubmit={handleSaveBlog} className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-xs sm:text-sm">
              
              {/* Image Upload Zone */}
              <div className="space-y-3 p-4 bg-neutral-50 rounded-2xl border border-neutral-200">
                <label className="block font-bold text-neutral-900">
                  Featured Cover Image
                </label>
                
                <div className="grid sm:grid-cols-12 gap-4 items-center">
                  <div className="sm:col-span-4 relative aspect-[16/10] bg-neutral-900 rounded-xl overflow-hidden border border-neutral-300">
                    <img
                      src={formData.coverImage || "/images/youth_skills.jpg"}
                      alt="Cover Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="sm:col-span-8 space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <input
                        type="file"
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={handleImageFileChange}
                        className="hidden"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        disabled={uploadingImage}
                        onClick={() => fileInputRef.current?.click()}
                        className="text-xs"
                      >
                        {uploadingImage ? "Uploading..." : "📁 Upload New Image"}
                      </Button>

                      <span className="text-xs text-neutral-400">or enter image path:</span>
                    </div>

                    <input
                      type="text"
                      value={formData.coverImage || ""}
                      onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                      placeholder="/images/hero_campus.jpg or https://..."
                      className="w-full border border-neutral-300 rounded-xl p-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />

                    {/* Quick Image Pickers */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="text-[10px] text-neutral-400">Quick Pick:</span>
                      {["/images/hero_campus.jpg", "/images/youth_skills.jpg", "/images/womens_skills.jpg", "/images/gaushala.jpg"].map((img) => (
                        <button
                          key={img}
                          type="button"
                          onClick={() => setFormData({ ...formData, coverImage: img })}
                          className="text-[10px] bg-white border border-neutral-200 px-2 py-0.5 rounded hover:bg-primary-50"
                        >
                          {img.split("/").pop()}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Title & Slug */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-neutral-900 mb-1">
                    Article Title (English) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title || ""}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="e.g. Transforming Rural Classrooms with Digital Tools"
                    className="w-full border border-neutral-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-neutral-900 mb-1">
                    Article Title (मराठी)
                  </label>
                  <input
                    type="text"
                    value={formData.titleMr || ""}
                    onChange={(e) => setFormData({ ...formData, titleMr: e.target.value })}
                    placeholder="उदा. ग्रामीण शिक्षणात डिजिटल वर्गांची क्रांती"
                    className="w-full border border-neutral-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              {/* URL Slug & Category */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-bold text-neutral-900 mb-1">
                    URL Slug
                  </label>
                  <input
                    type="text"
                    value={formData.slug || ""}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="w-full border border-neutral-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-neutral-900 mb-1">
                    Category (English)
                  </label>
                  <select
                    value={formData.category || "Education & Skills"}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full border border-neutral-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                  >
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-neutral-900 mb-1">
                    Category (मराठी)
                  </label>
                  <input
                    type="text"
                    value={formData.categoryMr || ""}
                    onChange={(e) => setFormData({ ...formData, categoryMr: e.target.value })}
                    placeholder="उदा. शिक्षण व कौशल्ये"
                    className="w-full border border-neutral-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              {/* Author, Role & Read Time */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-bold text-neutral-900 mb-1">Author Name</label>
                  <input
                    type="text"
                    value={formData.author || ""}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full border border-neutral-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-neutral-900 mb-1">Author Role</label>
                  <input
                    type="text"
                    value={formData.authorRole || ""}
                    onChange={(e) => setFormData({ ...formData, authorRole: e.target.value })}
                    className="w-full border border-neutral-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-neutral-900 mb-1">Read Time / Date</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={formData.readTime || "4 min read"}
                      onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                      className="w-full border border-neutral-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <input
                      type="date"
                      value={formData.publishDate || ""}
                      onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
                      className="w-full border border-neutral-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
              </div>

              {/* Excerpt */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-neutral-900 mb-1">Summary / Excerpt (English)</label>
                  <textarea
                    rows={3}
                    value={formData.excerpt || ""}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    className="w-full border border-neutral-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Brief 2-3 sentence overview of the article..."
                  />
                </div>

                <div>
                  <label className="block font-bold text-neutral-900 mb-1">Summary / Excerpt (मराठी)</label>
                  <textarea
                    rows={3}
                    value={formData.excerptMr || ""}
                    onChange={(e) => setFormData({ ...formData, excerptMr: e.target.value })}
                    className="w-full border border-neutral-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="लेखाचा थोडक्यात सारांश..."
                  />
                </div>
              </div>

              {/* Full Article Content */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="font-bold text-neutral-900">
                      Full Article Body (English) *
                    </label>
                    <span className="text-[11px] text-neutral-400">Supports markdown (### headings, &gt; quotes, **bold**)</span>
                  </div>
                  <textarea
                    rows={8}
                    required
                    value={formData.content || ""}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full font-mono text-xs border border-neutral-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary-500 leading-relaxed"
                    placeholder="Write article content here..."
                  />
                </div>

                <div>
                  <label className="block font-bold text-neutral-900 mb-1">
                    Full Article Body (मराठी)
                  </label>
                  <textarea
                    rows={6}
                    value={formData.contentMr || ""}
                    onChange={(e) => setFormData({ ...formData, contentMr: e.target.value })}
                    className="w-full font-mono text-xs border border-neutral-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary-500 leading-relaxed"
                    placeholder="मराठीत पूर्ण मजकूर येथे लिहा..."
                  />
                </div>
              </div>

              {/* Tags & Options */}
              <div className="grid sm:grid-cols-2 gap-4 items-center pt-2 border-t border-neutral-100">
                <div>
                  <label className="block font-bold text-neutral-900 mb-1">Tags (Comma-separated)</label>
                  <input
                    type="text"
                    value={Array.isArray(formData.tags) ? formData.tags.join(", ") : formData.tags || ""}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(",").map(s => s.trim()) })}
                    placeholder="Education, Maharashtra, Skill Development"
                    className="w-full border border-neutral-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div className="flex items-center gap-6 pt-5">
                  <label className="flex items-center gap-2 cursor-pointer font-bold text-xs">
                    <input
                      type="checkbox"
                      checked={!!formData.featured}
                      onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                      className="w-4 h-4 rounded text-primary-600 focus:ring-primary-500"
                    />
                    <span>★ Feature on Homepage/Top</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer font-bold text-xs">
                    <input
                      type="checkbox"
                      checked={formData.published ?? true}
                      onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                      className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
                    />
                    <span>Publish Immediately</span>
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-neutral-200 flex items-center justify-end gap-3">
                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" size="lg" className="px-8 font-bold">
                  {editingBlog ? "Save Changes" : "Publish Article"}
                </Button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* QUICK PREVIEW DRAWER */}
      {previewBlog && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="p-5 bg-neutral-950 text-white flex items-center justify-between">
              <span className="text-xs font-bold text-primary-300">Live Article Preview</span>
              <button onClick={() => setPreviewBlog(null)} className="text-white p-1 hover:bg-white/10 rounded-lg">✕</button>
            </div>
            <div className="p-6 space-y-4">
              <img src={previewBlog.coverImage} alt={previewBlog.title} className="w-full h-56 object-cover rounded-2xl" />
              <div className="flex items-center gap-2 text-xs font-bold text-primary-700 uppercase">
                <span>{previewBlog.category}</span>
                <span>•</span>
                <span>{previewBlog.readTime}</span>
              </div>
              <h2 className="text-2xl font-extrabold text-neutral-900 font-heading">{previewBlog.title}</h2>
              <p className="text-sm font-semibold text-neutral-700">{previewBlog.excerpt}</p>
              <div className="pt-4 border-t border-neutral-200 text-xs text-neutral-600 whitespace-pre-line leading-relaxed">
                {previewBlog.content}
              </div>
            </div>
            <div className="p-4 bg-neutral-50 border-t border-neutral-200 text-right">
              <Button size="sm" onClick={() => setPreviewBlog(null)}>Close Preview</Button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
