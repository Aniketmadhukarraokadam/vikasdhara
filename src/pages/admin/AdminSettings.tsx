import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function AdminSettings() {
  const [settings, setSettings] = useState({
    foundationName: "VORTEXSOFT VIKASDHARA FOUNDATION",
    regNumber: "MAH/NDD/TRUST/2026/0121",
    csrNumber: "CSR00098765 (Ministry of Corporate Affairs)",
    panNumber: "AAATV1234F",
    headquartersAddress: "Near Chhatrapati Shivaji Putla, Chondi, Post Jarikot, Taluka Dharmabad, District Nanded – 431808, Maharashtra",
    puneOfficeAddress: "Pune Regional Coordination & CSR Liaison Centre, Pune, Maharashtra",
    puneCoordinates: "18.5204, 73.8567",
    nandedCoordinates: "18.8977, 77.8504",
    primaryEmail: "info@vikasdharafoundation.org",
    csrEmail: "partnerships@vikasdharafoundation.org",
    notificationEmail: "alerts@vikasdharafoundation.org",
    autoAssignPune: true,
  });

  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="bg-white p-6 rounded-2xl border border-neutral-200/90 shadow-soft">
        <h1 className="text-2xl font-extrabold text-neutral-900 tracking-tight font-heading">
          Institutional & Statutory Settings
        </h1>
        <p className="text-neutral-600 text-xs sm:text-sm mt-1">
          Configure statutory registration credentials, dual-hub coordinates, and system routing policies.
        </p>
      </div>

      {saved && (
        <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-900 text-sm font-semibold flex items-center gap-2 animate-fade-in">
          <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>System settings updated successfully!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* Statutory Identity */}
        <div className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-soft space-y-4">
          <h2 className="text-base font-bold text-neutral-900 border-b border-neutral-100 pb-3 font-heading">
            1. Legal & Statutory Identity
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">Registered Entity Name</label>
              <input
                type="text"
                value={settings.foundationName}
                onChange={(e) => setSettings({ ...settings, foundationName: e.target.value })}
                className="w-full text-xs sm:text-sm border border-neutral-300 rounded-lg p-2.5 bg-neutral-50"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">Public Trust Reg. Number</label>
              <input
                type="text"
                value={settings.regNumber}
                onChange={(e) => setSettings({ ...settings, regNumber: e.target.value })}
                className="w-full text-xs sm:text-sm border border-neutral-300 rounded-lg p-2.5 bg-white font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">MCA CSR-1 Registration</label>
              <input
                type="text"
                value={settings.csrNumber}
                onChange={(e) => setSettings({ ...settings, csrNumber: e.target.value })}
                className="w-full text-xs sm:text-sm border border-neutral-300 rounded-lg p-2.5 bg-white font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">PAN / Tax Identifier</label>
              <input
                type="text"
                value={settings.panNumber}
                onChange={(e) => setSettings({ ...settings, panNumber: e.target.value })}
                className="w-full text-xs sm:text-sm border border-neutral-300 rounded-lg p-2.5 bg-white font-mono"
              />
            </div>
          </div>
        </div>

        {/* Dual Hub Coordinates */}
        <div className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-soft space-y-4">
          <h2 className="text-base font-bold text-neutral-900 border-b border-neutral-100 pb-3 font-heading">
            2. Geolocation & Hub Coordinates (Pune & Nanded)
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-emerald-800 mb-1">📍 Pune Hub Coordinates (Lat, Lng)</label>
              <input
                type="text"
                value={settings.puneCoordinates}
                onChange={(e) => setSettings({ ...settings, puneCoordinates: e.target.value })}
                className="w-full text-xs sm:text-sm border border-neutral-300 rounded-lg p-2.5 bg-white font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-primary-800 mb-1">📍 Nanded HQ Coordinates (Lat, Lng)</label>
              <input
                type="text"
                value={settings.nandedCoordinates}
                onChange={(e) => setSettings({ ...settings, nandedCoordinates: e.target.value })}
                className="w-full text-xs sm:text-sm border border-neutral-300 rounded-lg p-2.5 bg-white font-mono"
              />
            </div>
          </div>
        </div>

        {/* Inbound Routing & Alerts */}
        <div className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-soft space-y-4">
          <h2 className="text-base font-bold text-neutral-900 border-b border-neutral-100 pb-3 font-heading">
            3. Automated Submission Routing
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">Primary Email Desk</label>
              <input
                type="email"
                value={settings.primaryEmail}
                onChange={(e) => setSettings({ ...settings, primaryEmail: e.target.value })}
                className="w-full text-xs sm:text-sm border border-neutral-300 rounded-lg p-2.5 bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">CSR Lead Routing Email</label>
              <input
                type="email"
                value={settings.csrEmail}
                onChange={(e) => setSettings({ ...settings, csrEmail: e.target.value })}
                className="w-full text-xs sm:text-sm border border-neutral-300 rounded-lg p-2.5 bg-white"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <input
              type="checkbox"
              id="autoAssign"
              checked={settings.autoAssignPune}
              onChange={(e) => setSettings({ ...settings, autoAssignPune: e.target.checked })}
              className="w-4 h-4 text-primary-700 rounded border-neutral-300"
            />
            <label htmlFor="autoAssign" className="text-xs text-neutral-700 font-medium cursor-pointer">
              Automatically route all Pune, Hinjewadi, and PCMC submissions directly to the Pune Regional Liaison Desk.
            </label>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Button type="submit" size="lg">
            Save System Settings
          </Button>
        </div>
      </form>
    </div>
  );
}
