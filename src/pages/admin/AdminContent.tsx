import { useState } from "react";
import { useDynamicContent } from "@/context/ContentContext";
import { Button } from "@/components/ui/Button";

type CMSTab = "programmes" | "impact" | "trustees" | "contact" | "raw_json";

export function AdminContent() {
  const { content, updateSection, resetToDefaults, exportBackup, importBackup } = useDynamicContent();
  const [activeTab, setActiveTab] = useState<CMSTab>("programmes");
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  // Local draft states
  const [programmesDraft, setProgrammesDraft] = useState(content.programmes);
  const [impactDraft, setImpactDraft] = useState(content.impact);
  const [aboutDraft, setAboutDraft] = useState(content.about);
  const [contactDraft, setContactDraft] = useState(content.contact);
  const [rawJsonText, setRawJsonText] = useState(JSON.stringify(content, null, 2));

  const showNotification = (msg: string) => {
    setSaveMessage(msg);
    setTimeout(() => setSaveMessage(null), 3000);
  };

  const handleSaveProgrammes = () => {
    updateSection("programmes", programmesDraft);
    showNotification("Programmes updated successfully across the website!");
  };

  const handleSaveImpact = () => {
    updateSection("impact", impactDraft);
    showNotification("Impact metrics saved successfully!");
  };

  const handleSaveAbout = () => {
    updateSection("about", aboutDraft);
    showNotification("Trustees and governance saved successfully!");
  };

  const handleSaveContact = () => {
    updateSection("contact", contactDraft);
    showNotification("Contact and office information updated!");
  };

  const handleSaveRawJson = () => {
    const success = importBackup(rawJsonText);
    if (success) {
      showNotification("Raw JSON backup loaded and synced successfully!");
    } else {
      alert("Invalid JSON format. Please verify syntax.");
    }
  };

  const handleResetAll = () => {
    if (confirm("Reset all content back to factory default? Any unsaved edits will be discarded.")) {
      resetToDefaults();
      setProgrammesDraft(content.programmes);
      setImpactDraft(content.impact);
      setAboutDraft(content.about);
      setContactDraft(content.contact);
      setRawJsonText(JSON.stringify(content, null, 2));
      showNotification("Content reset to defaults.");
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl border border-neutral-200/90 shadow-soft">
        <div>
          <h1 className="text-2xl font-extrabold text-neutral-900 tracking-tight font-heading">
            Content Management System (CMS)
          </h1>
          <p className="text-neutral-600 text-xs sm:text-sm mt-1">
            Edit live copy, programmes, impact metrics, leadership trustees, and Pune/Nanded office details in real-time.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={exportBackup}
            className="btn btn-outline text-xs sm:text-sm px-3 py-2 flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export Backup
          </button>
          <button
            onClick={handleResetAll}
            className="text-xs text-rose-600 hover:text-rose-800 px-3 py-2 rounded-lg border border-rose-200 hover:bg-rose-50 font-semibold"
          >
            Reset Defaults
          </button>
        </div>
      </div>

      {saveMessage && (
        <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-900 text-sm font-semibold flex items-center gap-2 animate-fade-in">
          <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>{saveMessage}</span>
        </div>
      )}

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 border-b border-neutral-200 pb-2">
        {[
          { id: "programmes", label: `Programmes (${programmesDraft.programmes.length})` },
          { id: "impact", label: "Impact & Reporting" },
          { id: "trustees", label: "Trustees & Leadership" },
          { id: "contact", label: "Locations & Contacts" },
          { id: "raw_json", label: "Raw JSON Editor" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as CMSTab)}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === tab.id
                ? "bg-primary-900 text-white shadow-soft"
                : "bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB 1: PROGRAMMES EDITOR */}
      {activeTab === "programmes" && (
        <div className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-soft space-y-6">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
            <div>
              <h2 className="text-lg font-bold text-neutral-900 font-heading">
                All Active Programmes ({programmesDraft.programmes.length})
              </h2>
              <p className="text-xs text-neutral-500">Edit titles, summaries, and activity lists.</p>
            </div>
            <Button onClick={handleSaveProgrammes} size="sm">
              Save All Programmes
            </Button>
          </div>

          <div className="space-y-6">
            {programmesDraft.programmes.map((prog, index) => (
              <div key={prog.id} className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-primary-700 bg-primary-100 px-2 py-0.5 rounded">
                    #{index + 1} • {prog.slug}
                  </span>
                  <span className="text-xs text-neutral-400">ID: {prog.id}</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">Programme Title</label>
                    <input
                      type="text"
                      value={prog.title}
                      onChange={(e) => {
                        const updated = [...programmesDraft.programmes];
                        updated[index].title = e.target.value;
                        setProgrammesDraft({ ...programmesDraft, programmes: updated });
                      }}
                      className="w-full text-sm border border-neutral-300 rounded-lg p-2 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">Short Tagline</label>
                    <input
                      type="text"
                      value={prog.shortDescription}
                      onChange={(e) => {
                        const updated = [...programmesDraft.programmes];
                        updated[index].shortDescription = e.target.value;
                        setProgrammesDraft({ ...programmesDraft, programmes: updated });
                      }}
                      className="w-full text-sm border border-neutral-300 rounded-lg p-2 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Full Description</label>
                  <textarea
                    rows={2}
                    value={prog.description}
                    onChange={(e) => {
                      const updated = [...programmesDraft.programmes];
                      updated[index].description = e.target.value;
                      setProgrammesDraft({ ...programmesDraft, programmes: updated });
                    }}
                    className="w-full text-sm border border-neutral-300 rounded-lg p-2 bg-white"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-neutral-100 flex justify-end">
            <Button onClick={handleSaveProgrammes} size="lg">
              Save All Programmes
            </Button>
          </div>
        </div>
      )}

      {/* TAB 2: IMPACT & REPORTING */}
      {activeTab === "impact" && (
        <div className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-soft space-y-6">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
            <div>
              <h2 className="text-lg font-bold text-neutral-900 font-heading">
                Impact Numbers & Reporting Standards
              </h2>
              <p className="text-xs text-neutral-500">Update verified output metrics shown on the website.</p>
            </div>
            <Button onClick={handleSaveImpact} size="sm">
              Save Impact Metrics
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {impactDraft.impact.metrics.map((m, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                <label className="block text-xs font-bold text-neutral-700">Metric Label</label>
                <input
                  type="text"
                  value={m.label}
                  onChange={(e) => {
                    const updated = [...impactDraft.impact.metrics];
                    updated[idx].label = e.target.value;
                    setImpactDraft({
                      ...impactDraft,
                      impact: { ...impactDraft.impact, metrics: updated }
                    });
                  }}
                  className="w-full text-sm border border-neutral-300 rounded-lg p-2 bg-white"
                />

                <label className="block text-xs font-bold text-neutral-700">Description</label>
                <input
                  type="text"
                  value={m.description}
                  onChange={(e) => {
                    const updated = [...impactDraft.impact.metrics];
                    updated[idx].description = e.target.value;
                    setImpactDraft({
                      ...impactDraft,
                      impact: { ...impactDraft.impact, metrics: updated }
                    });
                  }}
                  className="w-full text-xs border border-neutral-300 rounded-lg p-2 bg-white"
                />
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-neutral-100 flex justify-end">
            <Button onClick={handleSaveImpact} size="lg">
              Save Impact Metrics
            </Button>
          </div>
        </div>
      )}

      {/* TAB 3: TRUSTEES & LEADERSHIP */}
      {activeTab === "trustees" && (
        <div className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-soft space-y-6">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
            <div>
              <h2 className="text-lg font-bold text-neutral-900 font-heading">
                Board of Trustees & Leadership
              </h2>
              <p className="text-xs text-neutral-500">Update trustee designations and areas of responsibility.</p>
            </div>
            <Button onClick={handleSaveAbout} size="sm">
              Save Leadership Details
            </Button>
          </div>

          <div className="space-y-4">
            {aboutDraft.leadership.map((leader, idx) => (
              <div key={idx} className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      value={leader.name}
                      onChange={(e) => {
                        const updated = [...aboutDraft.leadership];
                        updated[idx].name = e.target.value;
                        setAboutDraft({ ...aboutDraft, leadership: updated });
                      }}
                      className="w-full text-sm border border-neutral-300 rounded-lg p-2 bg-white font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">Designation</label>
                    <input
                      type="text"
                      value={leader.designation}
                      onChange={(e) => {
                        const updated = [...aboutDraft.leadership];
                        updated[idx].designation = e.target.value;
                        setAboutDraft({ ...aboutDraft, leadership: updated });
                      }}
                      className="w-full text-sm border border-neutral-300 rounded-lg p-2 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Biography</label>
                  <textarea
                    rows={2}
                    value={leader.bio}
                    onChange={(e) => {
                      const updated = [...aboutDraft.leadership];
                      updated[idx].bio = e.target.value;
                      setAboutDraft({ ...aboutDraft, leadership: updated });
                    }}
                    className="w-full text-xs sm:text-sm border border-neutral-300 rounded-lg p-2 bg-white"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-neutral-100 flex justify-end">
            <Button onClick={handleSaveAbout} size="lg">
              Save Leadership Details
            </Button>
          </div>
        </div>
      )}

      {/* TAB 4: LOCATIONS & CONTACTS */}
      {activeTab === "contact" && (
        <div className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-soft space-y-6">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
            <div>
              <h2 className="text-lg font-bold text-neutral-900 font-heading">
                Offices & Department Inquiries
              </h2>
              <p className="text-xs text-neutral-500">Configure Pune & Nanded addresses and direct emails.</p>
            </div>
            <Button onClick={handleSaveContact} size="sm">
              Save Contact Details
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-5 bg-primary-50/50 rounded-xl border border-primary-200 space-y-3">
              <h3 className="font-bold text-primary-950 text-sm">📍 Registered HQ (Dharmabad, Nanded)</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Near Chhatrapati Shivaji Putla, Chondi, Post Jarikot, Taluka Dharmabad, District Nanded – 431808, Maharashtra.
              </p>
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">HQ Inquiries Email</label>
                <input
                  type="text"
                  value={contactDraft.contact.methods[0]?.details || "info@vikasdharafoundation.org"}
                  onChange={(e) => {
                    const updated = [...contactDraft.contact.methods];
                    if (updated[0]) updated[0].details = e.target.value;
                    setContactDraft({ ...contactDraft, contact: { ...contactDraft.contact, methods: updated } });
                  }}
                  className="w-full text-xs border border-neutral-300 rounded-lg p-2 bg-white"
                />
              </div>
            </div>

            <div className="p-5 bg-emerald-50/50 rounded-xl border border-emerald-200 space-y-3">
              <h3 className="font-bold text-emerald-950 text-sm">📍 Regional Coordination Hub (Pune)</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Corporate CSR Collaborations, Skill Development & Institutional Partnerships across Pune & Western Maharashtra.
              </p>
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">Pune CSR Email</label>
                <input
                  type="text"
                  defaultValue="partnerships@vikasdharafoundation.org"
                  className="w-full text-xs border border-neutral-300 rounded-lg p-2 bg-white"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-100 flex justify-end">
            <Button onClick={handleSaveContact} size="lg">
              Save Contact Details
            </Button>
          </div>
        </div>
      )}

      {/* TAB 5: RAW JSON BACKUP */}
      {activeTab === "raw_json" && (
        <div className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-soft space-y-4">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
            <div>
              <h2 className="text-lg font-bold text-neutral-900 font-heading">
                Raw JSON Configuration & Backup Restore
              </h2>
              <p className="text-xs text-neutral-500">Directly inspect or restore all structured content across the foundation.</p>
            </div>
            <Button onClick={handleSaveRawJson} size="sm">
              Save Raw JSON
            </Button>
          </div>

          <textarea
            rows={18}
            value={rawJsonText}
            onChange={(e) => setRawJsonText(e.target.value)}
            className="w-full font-mono text-xs p-4 bg-neutral-900 text-emerald-400 rounded-xl border border-neutral-800 focus:outline-none"
          />

          <div className="flex justify-end gap-3">
            <Button onClick={handleSaveRawJson} size="lg">
              Apply Raw JSON Changes
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
