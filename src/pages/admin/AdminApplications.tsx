import { useState } from "react";
import { useApplications } from "@/context/ApplicationsContext";
import { Application, ApplicationStatus, ApplicationPriority, ApplicationType } from "@/types/admin";
import { Button } from "@/components/ui/Button";

const statusColumns: { key: ApplicationStatus; label: string; color: string }[] = [
  { key: "new", label: "New Inbound", color: "border-amber-400 bg-amber-50/50" },
  { key: "in_review", label: "Under Review", color: "border-sky-400 bg-sky-50/50" },
  { key: "shortlisted", label: "Shortlisted", color: "border-indigo-400 bg-indigo-50/50" },
  { key: "approved", label: "Approved / Active", color: "border-emerald-400 bg-emerald-50/50" },
  { key: "completed", label: "Completed / Closed", color: "border-neutral-400 bg-neutral-50/50" },
];

export function AdminApplications() {
  const {
    applications,
    updateStatus,
    updatePriority,
    assignTo,
    addNote,
    deleteApplication,
    exportCSV,
    resetToSampleData,
    addApplication
  } = useApplications();

  const [viewMode, setViewMode] = useState<"table" | "kanban">("table");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [activeApp, setActiveApp] = useState<Application | null>(null);
  const [noteInput, setNoteInput] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  // New Application Form State
  const [newAppForm, setNewAppForm] = useState({
    name: "",
    email: "",
    mobile: "",
    organization: "",
    location: "pune",
    type: "volunteer" as ApplicationType,
    subject: "",
    message: "",
    priority: "medium" as ApplicationPriority,
    assignedTo: "Pune CSR Desk",
  });

  // Filter logic
  const filteredApps = applications.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (app.organization && app.organization.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (app.subject && app.subject.toLowerCase().includes(searchQuery.toLowerCase())) ||
      app.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = selectedType === "all" || app.type === selectedType;
    const matchesLocation = selectedLocation === "all" || app.location === selectedLocation;
    const matchesStatus = selectedStatus === "all" || app.status === selectedStatus;

    return matchesSearch && matchesType && matchesLocation && matchesStatus;
  });

  const handleCreateApplication = (e: React.FormEvent) => {
    e.preventDefault();
    const created = addApplication({
      type: newAppForm.type,
      name: newAppForm.name,
      email: newAppForm.email,
      mobile: newAppForm.mobile,
      organization: newAppForm.organization,
      location: newAppForm.location,
      subject: newAppForm.subject,
      message: newAppForm.message,
      priority: newAppForm.priority,
      status: "new",
      assignedTo: newAppForm.assignedTo,
    });
    setShowAddModal(false);
    setActiveApp(created);
    setNewAppForm({
      name: "",
      email: "",
      mobile: "",
      organization: "",
      location: "pune",
      type: "volunteer",
      subject: "",
      message: "",
      priority: "medium",
      assignedTo: "Pune CSR Desk",
    });
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeApp || !noteInput.trim()) return;
    addNote(activeApp.id, "Admin (Trustee)", noteInput.trim());
    setNoteInput("");
    // update current activeApp in view
    const updated = applications.find(a => a.id === activeApp.id);
    if (updated) setActiveApp(updated);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header & Main Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl border border-neutral-200/90 shadow-soft">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-extrabold text-neutral-900 tracking-tight font-heading">
              Application Tracking System (ATS)
            </h1>
            <span className="px-2.5 py-0.5 rounded-full bg-primary-100 text-primary-800 text-xs font-bold">
              {filteredApps.length} records
            </span>
          </div>
          <p className="text-neutral-600 text-xs sm:text-sm mt-1">
            Track, filter, and manage inbound Volunteer, Corporate CSR, Beneficiary, and Contact inquiries.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => setShowAddModal(true)}
            className="btn btn-primary text-xs sm:text-sm px-4 py-2"
          >
            + Add Submission
          </button>
          <button
            onClick={exportCSV}
            className="btn btn-outline text-xs sm:text-sm px-3.5 py-2 flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export CSV
          </button>
          <button
            onClick={resetToSampleData}
            className="text-xs text-neutral-500 hover:text-neutral-800 px-2 py-1"
            title="Reset to sample applications"
          >
            Reset Demo Data
          </button>
        </div>
      </div>

      {/* Filter & View Switcher Bar */}
      <div className="bg-white p-4 rounded-xl border border-neutral-200/90 shadow-soft flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3 flex-1">
          {/* Search Box */}
          <div className="relative min-w-[220px] flex-1 max-w-xs">
            <svg className="w-4 h-4 absolute left-3 top-3 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search applicant, org, email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            />
          </div>

          {/* Type Filter */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="text-xs sm:text-sm border border-neutral-300 rounded-lg px-3 py-2 bg-white focus:outline-none"
          >
            <option value="all">All Submission Types</option>
            <option value="csr_partner">Corporate CSR Leads</option>
            <option value="volunteer">Volunteer Applicants</option>
            <option value="beneficiary_skilling">Beneficiary / Students</option>
            <option value="gaushala_support">Gau Shala Support</option>
            <option value="contact">General Contact</option>
          </select>

          {/* Location Filter */}
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="text-xs sm:text-sm border border-neutral-300 rounded-lg px-3 py-2 bg-white focus:outline-none"
          >
            <option value="all">All Locations (Maharashtra)</option>
            <option value="pune">Pune Regional Hub</option>
            <option value="nanded">Nanded HQ</option>
            <option value="general">General / Other</option>
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="text-xs sm:text-sm border border-neutral-300 rounded-lg px-3 py-2 bg-white focus:outline-none"
          >
            <option value="all">All Statuses</option>
            <option value="new">New</option>
            <option value="in_review">In Review</option>
            <option value="shortlisted">Shortlisted</option>
            <option value="approved">Approved</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* View Switcher Button Group */}
        <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-lg self-start lg:self-auto">
          <button
            onClick={() => setViewMode("table")}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              viewMode === "table" ? "bg-white text-neutral-900 shadow-sm" : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Table View
          </button>
          <button
            onClick={() => setViewMode("kanban")}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              viewMode === "kanban" ? "bg-white text-neutral-900 shadow-sm" : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Kanban Board
          </button>
        </div>
      </div>

      {/* Main View: Table or Kanban */}
      {viewMode === "table" ? (
        /* TABLE VIEW */
        <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-neutral-50 text-neutral-600 font-bold border-b border-neutral-200 uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="px-4 py-3.5">ID / Date</th>
                  <th className="px-4 py-3.5">Applicant & Org</th>
                  <th className="px-4 py-3.5">Type & Location</th>
                  <th className="px-4 py-3.5">Subject / Message</th>
                  <th className="px-4 py-3.5">Priority</th>
                  <th className="px-4 py-3.5">Status</th>
                  <th className="px-4 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {filteredApps.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-12 text-neutral-500">
                      No applications found matching the selected filters.
                    </td>
                  </tr>
                ) : (
                  filteredApps.map((app) => (
                    <tr
                      key={app.id}
                      onClick={() => setActiveApp(app)}
                      className="hover:bg-neutral-50/80 cursor-pointer transition-colors"
                    >
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <span className="font-mono font-bold text-primary-900 block">{app.id}</span>
                        <span className="text-[11px] text-neutral-400">{app.createdAt}</span>
                      </td>

                      <td className="px-4 py-3.5">
                        <div className="font-bold text-neutral-900">{app.name}</div>
                        <div className="text-xs text-neutral-500">{app.email}</div>
                        {app.organization && (
                          <div className="text-[11px] text-neutral-400 italic line-clamp-1">
                            {app.organization}
                          </div>
                        )}
                      </td>

                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase mb-1 ${
                          app.type === "csr_partner" ? "bg-emerald-100 text-emerald-800" :
                          app.type === "volunteer" ? "bg-sky-100 text-sky-800" :
                          app.type === "beneficiary_skilling" ? "bg-purple-100 text-purple-800" :
                          "bg-neutral-100 text-neutral-700"
                        }`}>
                          {app.type.replace("_", " ")}
                        </span>
                        <div className="text-xs text-neutral-600 font-medium">
                          📍 {app.location.toUpperCase()}
                        </div>
                      </td>

                      <td className="px-4 py-3.5 max-w-xs">
                        <div className="font-semibold text-neutral-800 line-clamp-1">{app.subject || "General Inquiry"}</div>
                        <div className="text-neutral-500 text-xs line-clamp-1">{app.message}</div>
                      </td>

                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase ${
                          app.priority === "urgent" ? "bg-rose-100 text-rose-800" :
                          app.priority === "high" ? "bg-amber-100 text-amber-800" :
                          "bg-neutral-100 text-neutral-600"
                        }`}>
                          {app.priority}
                        </span>
                      </td>

                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                          app.status === "new" ? "bg-amber-100 text-amber-800" :
                          app.status === "shortlisted" ? "bg-indigo-100 text-indigo-800" :
                          app.status === "approved" ? "bg-emerald-100 text-emerald-800" :
                          app.status === "in_review" ? "bg-sky-100 text-sky-800" :
                          "bg-neutral-100 text-neutral-700"
                        }`}>
                          {app.status.replace("_", " ")}
                        </span>
                      </td>

                      <td className="px-4 py-3.5 text-right whitespace-nowrap">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveApp(app);
                          }}
                          className="text-xs font-bold text-primary-700 hover:text-primary-900 px-2 py-1 bg-primary-50 rounded hover:bg-primary-100"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* KANBAN BOARD VIEW */
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto pb-4">
          {statusColumns.map((col) => {
            const colApps = filteredApps.filter((a) => a.status === col.key);
            return (
              <div
                key={col.key}
                className={`rounded-2xl border ${col.color} p-3.5 flex flex-col h-[650px] shadow-soft`}
              >
                <div className="flex items-center justify-between pb-3 border-b border-neutral-200/80 mb-3">
                  <span className="font-bold text-xs uppercase tracking-wide text-neutral-800 font-heading">
                    {col.label}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-white text-neutral-800 text-xs font-extrabold shadow-xs">
                    {colApps.length}
                  </span>
                </div>

                <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                  {colApps.map((app) => (
                    <div
                      key={app.id}
                      onClick={() => setActiveApp(app)}
                      className="bg-white rounded-xl p-3.5 border border-neutral-200/80 shadow-xs hover:shadow-soft transition-all cursor-pointer space-y-2"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-[10px] font-mono font-bold text-neutral-400">{app.id}</span>
                        <span className={`px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase ${
                          app.priority === "urgent" ? "bg-rose-100 text-rose-800" :
                          app.priority === "high" ? "bg-amber-100 text-amber-800" :
                          "bg-neutral-100 text-neutral-600"
                        }`}>
                          {app.priority}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-bold text-neutral-900 text-xs sm:text-sm line-clamp-1">{app.name}</h4>
                        {app.organization && (
                          <p className="text-[11px] text-neutral-500 line-clamp-1">{app.organization}</p>
                        )}
                      </div>

                      <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                        {app.subject || app.message}
                      </p>

                      <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
                        <span className="font-semibold text-neutral-600">📍 {app.location.toUpperCase()}</span>
                        <span>{app.notes.length} notes</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* APPLICANT DETAIL DRAWER / MODAL */}
      {activeApp && (
        <div className="fixed inset-0 bg-neutral-950/60 backdrop-blur-xs z-50 flex justify-end">
          <div className="w-full max-w-xl bg-white h-full shadow-2xl p-6 overflow-y-auto flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Drawer Top */}
              <div className="flex items-start justify-between border-b border-neutral-100 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-primary-700 bg-primary-50 px-2 py-0.5 rounded">
                      {activeApp.id}
                    </span>
                    <span className="text-xs text-neutral-400">{activeApp.createdAt}</span>
                  </div>
                  <h2 className="text-xl font-bold text-neutral-900 mt-1 font-heading">
                    {activeApp.name}
                  </h2>
                  {activeApp.organization && (
                    <p className="text-sm text-neutral-500 font-medium">{activeApp.organization}</p>
                  )}
                </div>

                <button
                  onClick={() => setActiveApp(null)}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-800 hover:bg-neutral-100"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Status and Assignment Control Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3 bg-neutral-50 rounded-xl border border-neutral-200 text-xs">
                <div>
                  <span className="block font-bold text-neutral-500 mb-1 uppercase text-[10px]">Status</span>
                  <select
                    value={activeApp.status}
                    onChange={(e) => {
                      updateStatus(activeApp.id, e.target.value as ApplicationStatus);
                      setActiveApp({ ...activeApp, status: e.target.value as ApplicationStatus });
                    }}
                    className="w-full border border-neutral-300 rounded-md p-1.5 bg-white font-semibold text-neutral-800"
                  >
                    <option value="new">New Inbound</option>
                    <option value="in_review">Under Review</option>
                    <option value="shortlisted">Shortlisted</option>
                    <option value="approved">Approved / Active</option>
                    <option value="completed">Completed / Closed</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>

                <div>
                  <span className="block font-bold text-neutral-500 mb-1 uppercase text-[10px]">Priority</span>
                  <select
                    value={activeApp.priority}
                    onChange={(e) => {
                      updatePriority(activeApp.id, e.target.value as ApplicationPriority);
                      setActiveApp({ ...activeApp, priority: e.target.value as ApplicationPriority });
                    }}
                    className="w-full border border-neutral-300 rounded-md p-1.5 bg-white font-semibold text-neutral-800"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>

                <div>
                  <span className="block font-bold text-neutral-500 mb-1 uppercase text-[10px]">Assigned Desk</span>
                  <select
                    value={activeApp.assignedTo || "Pune CSR Desk"}
                    onChange={(e) => {
                      assignTo(activeApp.id, e.target.value);
                      setActiveApp({ ...activeApp, assignedTo: e.target.value });
                    }}
                    className="w-full border border-neutral-300 rounded-md p-1.5 bg-white font-semibold text-neutral-800"
                  >
                    <option value="Pune CSR Desk">Pune CSR Desk</option>
                    <option value="Volunteer Lead (Pune)">Volunteer Lead (Pune)</option>
                    <option value="Dharmabad HQ">Dharmabad HQ</option>
                    <option value="Trustee Desk">Trustee Desk</option>
                  </select>
                </div>
              </div>

              {/* Applicant Details */}
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-xl border border-neutral-200">
                  <div>
                    <span className="text-xs text-neutral-400 block">Email Address</span>
                    <a href={`mailto:${activeApp.email}`} className="font-semibold text-primary-700 hover:underline">
                      {activeApp.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 block">Mobile Phone</span>
                    <a href={`tel:${activeApp.mobile}`} className="font-semibold text-primary-700 hover:underline">
                      {activeApp.mobile}
                    </a>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-2">
                  <span className="text-xs text-neutral-400 block uppercase font-bold tracking-wider">Subject & Inbound Message</span>
                  {activeApp.subject && (
                    <h3 className="font-bold text-neutral-900">{activeApp.subject}</h3>
                  )}
                  <p className="text-neutral-700 leading-relaxed whitespace-pre-line text-xs sm:text-sm">
                    {activeApp.message}
                  </p>
                </div>
              </div>

              {/* Internal Notes Timeline */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Internal Notes & Communication Log ({activeApp.notes.length})
                </h3>

                <form onSubmit={handleAddNote} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add an internal trustee or coordinator note..."
                    value={noteInput}
                    onChange={(e) => setNoteInput(e.target.value)}
                    className="flex-1 text-xs border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  />
                  <Button type="submit" size="sm" className="text-xs px-3">
                    Add Note
                  </Button>
                </form>

                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {activeApp.notes.length === 0 ? (
                    <p className="text-xs text-neutral-400 italic">No notes added yet.</p>
                  ) : (
                    activeApp.notes.map((note) => (
                      <div key={note.id} className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 text-xs space-y-1">
                        <div className="flex items-center justify-between text-neutral-500 text-[10px]">
                          <span className="font-bold text-neutral-700">{note.author}</span>
                          <span>{note.createdAt}</span>
                        </div>
                        <p className="text-neutral-800">{note.text}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
              <button
                onClick={() => {
                  if (confirm("Are you sure you want to remove this submission record?")) {
                    deleteApplication(activeApp.id);
                    setActiveApp(null);
                  }
                }}
                className="text-xs font-bold text-rose-600 hover:text-rose-800 hover:underline"
              >
                Delete Application
              </button>
              
              <Button onClick={() => setActiveApp(null)} size="sm">
                Done & Save
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* MANUAL APPLICATION MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 bg-neutral-950/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <h2 className="text-lg font-bold text-neutral-900 font-heading">
                Record New Inbound Application
              </h2>
              <button onClick={() => setShowAddModal(false)} className="text-neutral-400 hover:text-neutral-800">
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateApplication} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-neutral-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={newAppForm.name}
                    onChange={(e) => setNewAppForm({ ...newAppForm, name: e.target.value })}
                    className="w-full border border-neutral-300 rounded-lg p-2"
                  />
                </div>
                <div>
                  <label className="block font-bold text-neutral-700 mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={newAppForm.email}
                    onChange={(e) => setNewAppForm({ ...newAppForm, email: e.target.value })}
                    className="w-full border border-neutral-300 rounded-lg p-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-neutral-700 mb-1">Mobile *</label>
                  <input
                    type="tel"
                    required
                    value={newAppForm.mobile}
                    onChange={(e) => setNewAppForm({ ...newAppForm, mobile: e.target.value })}
                    className="w-full border border-neutral-300 rounded-lg p-2"
                  />
                </div>
                <div>
                  <label className="block font-bold text-neutral-700 mb-1">Organisation</label>
                  <input
                    type="text"
                    value={newAppForm.organization}
                    onChange={(e) => setNewAppForm({ ...newAppForm, organization: e.target.value })}
                    className="w-full border border-neutral-300 rounded-lg p-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-neutral-700 mb-1">Submission Type</label>
                  <select
                    value={newAppForm.type}
                    onChange={(e) => setNewAppForm({ ...newAppForm, type: e.target.value as ApplicationType })}
                    className="w-full border border-neutral-300 rounded-lg p-2 bg-white"
                  >
                    <option value="csr_partner">CSR / Corporate Partner</option>
                    <option value="volunteer">Volunteer / Mentor</option>
                    <option value="beneficiary_skilling">Beneficiary / Student</option>
                    <option value="gaushala_support">Gau Shala Support</option>
                    <option value="contact">General Contact</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-neutral-700 mb-1">Location Hub</label>
                  <select
                    value={newAppForm.location}
                    onChange={(e) => setNewAppForm({ ...newAppForm, location: e.target.value })}
                    className="w-full border border-neutral-300 rounded-lg p-2 bg-white"
                  >
                    <option value="pune">Pune Regional Hub</option>
                    <option value="nanded">Nanded HQ</option>
                    <option value="general">General / Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-neutral-700 mb-1">Subject / Opportunity</label>
                <input
                  type="text"
                  value={newAppForm.subject}
                  onChange={(e) => setNewAppForm({ ...newAppForm, subject: e.target.value })}
                  placeholder="e.g. Pune Weekend Mentorship"
                  className="w-full border border-neutral-300 rounded-lg p-2"
                />
              </div>

              <div>
                <label className="block font-bold text-neutral-700 mb-1">Details / Inquiry *</label>
                <textarea
                  required
                  rows={3}
                  value={newAppForm.message}
                  onChange={(e) => setNewAppForm({ ...newAppForm, message: e.target.value })}
                  className="w-full border border-neutral-300 rounded-lg p-2"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="btn btn-outline text-xs px-4 py-2"
                >
                  Cancel
                </button>
                <Button type="submit" size="sm" className="text-xs px-5">
                  Save to ATS
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
