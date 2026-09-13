import { Link } from "react-router-dom";
import { useApplications } from "@/context/ApplicationsContext";
import { useDynamicContent } from "@/context/ContentContext";

export function AdminDashboard() {
  const { applications } = useApplications();
  const { content } = useDynamicContent();

  const totalApps = applications.length;
  const newApps = applications.filter(a => a.status === "new").length;
  const csrLeads = applications.filter(a => a.type === "csr_partner").length;
  const volunteers = applications.filter(a => a.type === "volunteer").length;
  const beneficiaries = applications.filter(a => a.type === "beneficiary_skilling").length;
  
  const puneCount = applications.filter(a => a.location === "pune").length;
  const nandedCount = applications.filter(a => a.location === "nanded").length;
  const generalCount = applications.filter(a => a.location !== "pune" && a.location !== "nanded").length;

  const recentApplications = applications.slice(0, 5);

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight font-heading">
            Executive Admin Dashboard
          </h1>
          <p className="text-neutral-600 text-sm mt-1">
            Real-time management for VORTEXSOFT VIKASDHARA FOUNDATION (Pune & Nanded Hubs).
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/admin/applications"
            className="btn btn-primary text-xs sm:text-sm px-4 py-2 flex items-center gap-2"
          >
            <span>View All Applications</span>
            <span className="px-1.5 py-0.5 rounded-full bg-white/20 text-white text-xs font-bold">
              {totalApps}
            </span>
          </Link>
          <Link
            to="/admin/content"
            className="btn btn-outline text-xs sm:text-sm px-4 py-2 bg-white"
          >
            Edit Site Content (CMS)
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Total Inquiries */}
        <div className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-soft hover:shadow-card transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Total Inbound</span>
            <span className="p-2 rounded-xl bg-primary-50 text-primary-700">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
              </svg>
            </span>
          </div>
          <div className="mt-3">
            <div className="text-3xl font-extrabold text-neutral-900 font-heading">{totalApps}</div>
            <div className="flex items-center gap-1.5 mt-1 text-xs text-amber-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>{newApps} new requiring review</span>
            </div>
          </div>
        </div>

        {/* CSR Pipeline */}
        <div className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-soft hover:shadow-card transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">CSR Proposals</span>
            <span className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </span>
          </div>
          <div className="mt-3">
            <div className="text-3xl font-extrabold text-emerald-950 font-heading">{csrLeads}</div>
            <p className="text-xs text-emerald-700 mt-1 font-medium">Corporate Schedule VII inquiries</p>
          </div>
        </div>

        {/* Volunteer Network */}
        <div className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-soft hover:shadow-card transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-sky-800 uppercase tracking-wider">Volunteers & Mentors</span>
            <span className="p-2 rounded-xl bg-sky-50 text-sky-700">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </span>
          </div>
          <div className="mt-3">
            <div className="text-3xl font-extrabold text-sky-950 font-heading">{volunteers}</div>
            <p className="text-xs text-sky-700 mt-1 font-medium">Pune & Maharashtra registered</p>
          </div>
        </div>

        {/* Active Programmes */}
        <div className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-soft hover:shadow-card transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-primary-800 uppercase tracking-wider">Active Programmes</span>
            <span className="p-2 rounded-xl bg-primary-50 text-primary-700">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </span>
          </div>
          <div className="mt-3">
            <div className="text-3xl font-extrabold text-primary-950 font-heading">
              {content.programmes.programmes.length}
            </div>
            <p className="text-xs text-primary-700 mt-1 font-medium">{beneficiaries} enrolled applicants</p>
          </div>
        </div>
      </div>

      {/* Regional Hub Breakdown & Quick Stats */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Geo Distribution Card */}
        <div className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-soft space-y-4">
          <h2 className="text-base font-bold text-neutral-900 border-b border-neutral-100 pb-3 flex items-center justify-between">
            <span>Regional Inbound Distribution</span>
            <span className="text-xs font-semibold text-neutral-400">Maharashtra</span>
          </h2>
          
          <div className="space-y-3.5">
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-emerald-800">📍 Pune Regional Hub (CSR & Tech)</span>
                <span>{puneCount} ({totalApps > 0 ? Math.round((puneCount/totalApps)*100) : 0}%)</span>
              </div>
              <div className="w-full bg-neutral-100 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-600 h-full rounded-full transition-all"
                  style={{ width: `${totalApps > 0 ? (puneCount/totalApps)*100 : 0}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-primary-800">📍 Nanded HQ (Rural & Operations)</span>
                <span>{nandedCount} ({totalApps > 0 ? Math.round((nandedCount/totalApps)*100) : 0}%)</span>
              </div>
              <div className="w-full bg-neutral-100 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-primary-600 h-full rounded-full transition-all"
                  style={{ width: `${totalApps > 0 ? (nandedCount/totalApps)*100 : 0}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-neutral-700">📍 Other Maharashtra & State</span>
                <span>{generalCount} ({totalApps > 0 ? Math.round((generalCount/totalApps)*100) : 0}%)</span>
              </div>
              <div className="w-full bg-neutral-100 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-neutral-500 h-full rounded-full transition-all"
                  style={{ width: `${totalApps > 0 ? (generalCount/totalApps)*100 : 0}%` }}
                />
              </div>
            </div>
          </div>

          <div className="p-3 bg-neutral-50 rounded-xl text-xs text-neutral-600 border border-neutral-100 leading-relaxed">
            Inbound inquiries from Hinjewadi, Kharadi, and PCMC tech parks are automatically assigned to the Pune CSR desk.
          </div>
        </div>

        {/* Recent Applications Feed */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-soft flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3 mb-4">
              <h2 className="text-base font-bold text-neutral-900">
                Recent Inbound Applications & Inquiries
              </h2>
              <Link to="/admin/applications" className="text-xs font-bold text-primary-700 hover:underline">
                Open Full ATS →
              </Link>
            </div>

            <div className="divide-y divide-neutral-100">
              {recentApplications.map((app) => (
                <div key={app.id} className="py-3.5 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-neutral-900">{app.name}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                        app.type === "csr_partner" ? "bg-emerald-100 text-emerald-800" :
                        app.type === "volunteer" ? "bg-sky-100 text-sky-800" :
                        "bg-primary-100 text-primary-800"
                      }`}>
                        {app.type.replace("_", " ")}
                      </span>
                      <span className="text-xs text-neutral-400">
                        📍 {app.location.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 line-clamp-1 font-medium">
                      {app.subject || app.message}
                    </p>
                    <div className="text-[11px] text-neutral-400">
                      {app.organization && <span>{app.organization} • </span>}
                      <span>{app.createdAt}</span>
                    </div>
                  </div>

                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold shrink-0 ${
                    app.status === "new" ? "bg-amber-100 text-amber-800" :
                    app.status === "shortlisted" ? "bg-indigo-100 text-indigo-800" :
                    app.status === "approved" ? "bg-emerald-100 text-emerald-800" :
                    "bg-neutral-100 text-neutral-700"
                  }`}>
                    {app.status.replace("_", " ")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
            <span>Showing {recentApplications.length} of {totalApps} entries</span>
            <Link to="/admin/applications" className="font-semibold text-primary-700 hover:text-primary-800">
              Manage in Kanban Board →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
