import { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useApplications } from "@/context/ApplicationsContext";
import { useDynamicContent } from "@/context/ContentContext";
import { cn } from "@/utils/cn";

export function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { applications } = useApplications();
  const { content } = useDynamicContent();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ email: string; role: string } | null>(null);

  // Authentication Guard Check
  useEffect(() => {
    try {
      const authRaw = sessionStorage.getItem("vvf_admin_auth");
      if (!authRaw) {
        navigate("/admin/login", { replace: true });
        return;
      }
      const parsed = JSON.parse(authRaw);
      if (!parsed?.email || !parsed?.email.endsWith("@vikasdharafoundation.org")) {
        sessionStorage.removeItem("vvf_admin_auth");
        navigate("/admin/login", { replace: true });
        return;
      }
      setCurrentUser(parsed);
    } catch {
      navigate("/admin/login", { replace: true });
    }
  }, [navigate]);

  const pendingCount = applications.filter(a => a.status === "new" || a.status === "in_review").length;

  const navItems = [
    {
      name: "Dashboard Overview",
      href: "/admin",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      name: "Application Tracking (ATS)",
      href: "/admin/applications",
      badge: pendingCount > 0 ? pendingCount : undefined,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      name: "Blogs & Articles (CMS)",
      href: "/admin/blogs",
      badge: `${content.blogs.length}`,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      )
    },
    {
      name: "Page Content (CMS)",
      href: "/admin/content",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      name: "Institutional Settings",
      href: "/admin/settings",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const handleLogout = () => {
    sessionStorage.removeItem("vvf_admin_auth");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="bg-neutral-950 text-white h-16 border-b border-neutral-800 flex items-center justify-between px-4 sm:px-6 z-30 sticky top-0">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800"
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="bg-white p-1 rounded-lg">
              <img src="/logo-icon.png" alt="VVF" className="h-7 w-7 object-contain" />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-extrabold text-sm tracking-wide text-white font-heading">
                VIKASDHARA FOUNDATION
              </span>
              <span className="text-[10px] font-bold tracking-widest text-primary-400 uppercase">
                ADMINISTRATION & ATS PORTAL
              </span>
            </div>
          </Link>
        </div>

        {/* Right Topbar actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-neutral-300 hover:text-white px-3 py-1.5 rounded-lg border border-neutral-700 hover:border-neutral-500 transition-colors flex items-center gap-1.5"
          >
            <span>Live Website</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>

          {/* User Profile Badge */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full border border-neutral-800 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold text-neutral-200">
              {currentUser?.email || "admin@vikasdharafoundation.org"}
            </span>
            <span className="text-neutral-500">|</span>
            <span className="text-emerald-400 font-bold">
              {currentUser?.role || "Administrator"}
            </span>
          </div>

          <button
            onClick={handleLogout}
            className="text-xs font-semibold text-rose-300 hover:text-white bg-rose-950/40 hover:bg-rose-900/60 border border-rose-900 px-3 py-1.5 rounded-lg transition-colors"
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* Main Container with Sidebar + Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={cn(
            "fixed inset-y-0 left-0 top-16 z-20 w-64 bg-neutral-900 text-neutral-300 border-r border-neutral-800 transition-transform duration-200 lg:static lg:translate-x-0 flex flex-col justify-between",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="p-4 space-y-6">
            {/* Quick Status Pill */}
            <div className="bg-neutral-950/80 rounded-xl p-3 border border-neutral-800 space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                Security Session
              </div>
              <div className="text-xs text-neutral-200 flex items-center justify-between">
                <span>Domain Auth:</span>
                <span className="text-emerald-400 font-semibold">@vikasdharafoundation.org</span>
              </div>
              <div className="text-xs text-neutral-200 flex items-center justify-between">
                <span>Inbound Submissions:</span>
                <span className="text-amber-400 font-semibold">{applications.length} total</span>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-1.5">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-500 px-3 py-1">
                Management Console
              </div>
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary-900/80 text-white font-semibold border border-primary-700 shadow-soft"
                        : "text-neutral-400 hover:text-white hover:bg-neutral-800"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className={isActive ? "text-primary-400" : "text-neutral-400"}>
                        {item.icon}
                      </span>
                      <span>{item.name}</span>
                    </div>
                    {item.badge !== undefined && (
                      <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-neutral-800 text-xs text-neutral-500">
            <p className="font-semibold text-neutral-400">Vikasdhara Admin v2.0</p>
            <p className="text-[11px] mt-0.5">Domain OTP Verified Session</p>
          </div>
        </aside>

        {/* Content Outlet */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-neutral-100 min-h-[calc(100vh-4rem)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
