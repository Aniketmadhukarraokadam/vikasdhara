import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import programmesData from "@/content/programmes.json";
import impactData from "@/content/impact.json";
import aboutData from "@/content/about.json";
import contactData from "@/content/contact.json";
import partnershipData from "@/content/partnership.json";
import transparencyData from "@/content/transparency.json";
import blogsData from "@/content/blogs.json";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleMr: string;
  excerpt: string;
  excerptMr: string;
  content: string;
  contentMr: string;
  category: string;
  categoryMr: string;
  author: string;
  authorRole: string;
  publishDate: string;
  readTime: string;
  coverImage: string;
  featured: boolean;
  published: boolean;
  tags: string[];
}

export interface DynamicContentState {
  programmes: typeof programmesData;
  impact: typeof impactData;
  about: typeof aboutData;
  contact: typeof contactData;
  partnership: typeof partnershipData;
  transparency: typeof transparencyData;
  blogs: BlogPost[];
  lastUpdated: string;
}

const defaultContent: DynamicContentState = {
  programmes: programmesData,
  impact: impactData,
  about: aboutData,
  contact: contactData,
  partnership: partnershipData,
  transparency: transparencyData,
  blogs: blogsData as BlogPost[],
  lastUpdated: new Date().toISOString(),
};

const STORAGE_KEY = "vvf_cms_content_v2";

interface ContentContextType {
  content: DynamicContentState;
  updateSection: <K extends keyof DynamicContentState>(section: K, data: DynamicContentState[K]) => void;
  addBlog: (post: BlogPost) => void;
  updateBlog: (id: string, updated: Partial<BlogPost>) => void;
  deleteBlog: (id: string) => void;
  togglePublishBlog: (id: string) => void;
  resetToDefaults: () => void;
  exportBackup: () => void;
  importBackup: (jsonStr: string) => boolean;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<DynamicContentState>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return {
          ...defaultContent,
          ...parsed,
          blogs: parsed.blogs && parsed.blogs.length > 0 ? parsed.blogs : defaultContent.blogs,
        };
      }
    } catch (e) {
      console.error("Error loading CMS content from localStorage", e);
    }
    return defaultContent;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    } catch (e) {
      console.error("Error persisting CMS content to localStorage", e);
    }
  }, [content]);

  const updateSection = <K extends keyof DynamicContentState>(section: K, data: DynamicContentState[K]) => {
    setContent(prev => ({
      ...prev,
      [section]: data,
      lastUpdated: new Date().toISOString(),
    }));
  };

  const addBlog = (post: BlogPost) => {
    setContent(prev => ({
      ...prev,
      blogs: [post, ...prev.blogs],
      lastUpdated: new Date().toISOString()
    }));
  };

  const updateBlog = (id: string, updated: Partial<BlogPost>) => {
    setContent(prev => ({
      ...prev,
      blogs: prev.blogs.map(b => b.id === id ? { ...b, ...updated } : b),
      lastUpdated: new Date().toISOString()
    }));
  };

  const deleteBlog = (id: string) => {
    setContent(prev => ({
      ...prev,
      blogs: prev.blogs.filter(b => b.id !== id),
      lastUpdated: new Date().toISOString()
    }));
  };

  const togglePublishBlog = (id: string) => {
    setContent(prev => ({
      ...prev,
      blogs: prev.blogs.map(b => b.id === id ? { ...b, published: !b.published } : b),
      lastUpdated: new Date().toISOString()
    }));
  };

  const resetToDefaults = () => {
    setContent({
      ...defaultContent,
      lastUpdated: new Date().toISOString(),
    });
  };

  const exportBackup = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(content, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Vikasdhara_CMS_Backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importBackup = (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed.programmes && parsed.about) {
        setContent({
          ...defaultContent,
          ...parsed,
          blogs: parsed.blogs || defaultContent.blogs,
          lastUpdated: new Date().toISOString(),
        });
        return true;
      }
    } catch (e) {
      console.error("Invalid JSON format for CMS backup", e);
    }
    return false;
  };

  return (
    <ContentContext.Provider
      value={{
        content,
        updateSection,
        addBlog,
        updateBlog,
        deleteBlog,
        togglePublishBlog,
        resetToDefaults,
        exportBackup,
        importBackup,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useDynamicContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useDynamicContent must be used within a ContentProvider");
  }
  return context;
}
