import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

const SUPER_ADMIN_EMAIL = "admin@vikasdharafoundation.org";

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "Super Administrator" | "Trustee" | "Managing Director" | "CSR Liaison" | "Content Editor" | "Field Coordinator";
  status: "Active" | "Inactive";
  permissions: {
    canManageUsers: boolean;
    canManageATS: boolean;
    canManageCMS: boolean;
    canManageSettings: boolean;
  };
  lastLogin: string;
}

const DEFAULT_USERS: AdminUser[] = [
  {
    id: "usr-1",
    name: "Master Super Administrator",
    email: "admin@vikasdharafoundation.org",
    role: "Super Administrator",
    status: "Active",
    permissions: {
      canManageUsers: true,
      canManageATS: true,
      canManageCMS: true,
      canManageSettings: true
    },
    lastLogin: "Active Now"
  },
  {
    id: "usr-2",
    name: "Board of Trustees Desk",
    email: "trustee@vikasdharafoundation.org",
    role: "Trustee",
    status: "Active",
    permissions: {
      canManageUsers: false,
      canManageATS: true,
      canManageCMS: true,
      canManageSettings: false
    },
    lastLogin: "2026-09-14 07:45"
  },
  {
    id: "usr-3",
    name: "Executive Director",
    email: "director@vikasdharafoundation.org",
    role: "Managing Director",
    status: "Active",
    permissions: {
      canManageUsers: false,
      canManageATS: true,
      canManageCMS: true,
      canManageSettings: false
    },
    lastLogin: "2026-09-13 18:20"
  },
  {
    id: "usr-4",
    name: "Corporate CSR Desk",
    email: "csr@vikasdharafoundation.org",
    role: "CSR Liaison",
    status: "Active",
    permissions: {
      canManageUsers: false,
      canManageATS: true,
      canManageCMS: false,
      canManageSettings: false
    },
    lastLogin: "2026-09-12 11:30"
  }
];

const STORAGE_USERS_KEY = "vvf_admin_team_users_v1";

export function AdminSettings() {
  const [currentUserEmail, setCurrentUserEmail] = useState<string>("");
  const isSuperAdmin = currentUserEmail.toLowerCase() === SUPER_ADMIN_EMAIL.toLowerCase();

  const [users, setUsers] = useState<AdminUser[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_USERS_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error("Error loading team users:", e);
    }
    return DEFAULT_USERS;
  });

  const [settings, setSettings] = useState({
    foundationName: "VIKASDHARA FOUNDATION",
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

  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "Trustee" as AdminUser["role"]
  });

  const [toastMsg, setToastMsg] = useState<string | null>(null);

  useEffect(() => {
    try {
      const authRaw = sessionStorage.getItem("vvf_admin_auth");
      if (authRaw) {
        const parsed = JSON.parse(authRaw);
        setCurrentUserEmail(parsed?.email || "");
      }
    } catch {}
  }, []);

  const saveUsers = (updated: AdminUser[]) => {
    setUsers(updated);
    try {
      localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error("Failed saving users", e);
    }
  };

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  const handleRoleChange = (userId: string, newRole: AdminUser["role"]) => {
    if (!isSuperAdmin) {
      alert("Permission Denied: Only Super Admin (admin@vikasdharafoundation.org) can assign user types.");
      return;
    }

    const updated = users.map(u => {
      if (u.id === userId) {
        return {
          ...u,
          role: newRole,
          permissions: {
            canManageUsers: newRole === "Super Administrator",
            canManageATS: true,
            canManageCMS: newRole !== "CSR Liaison",
            canManageSettings: newRole === "Super Administrator"
          }
        };
      }
      return u;
    });

    saveUsers(updated);
    showToast(`✓ User role updated to "${newRole}"`);
  };

  const handleToggleUserStatus = (userId: string) => {
    if (!isSuperAdmin) {
      alert("Permission Denied: Only Super Admin (admin@vikasdharafoundation.org) can change user status.");
      return;
    }

    const target = users.find(u => u.id === userId);
    if (target?.email === SUPER_ADMIN_EMAIL) {
      alert("Super Admin account cannot be deactivated.");
      return;
    }

    const updated = users.map(u => {
      if (u.id === userId) {
        return { ...u, status: u.status === "Active" ? "Inactive" as const : "Active" as const };
      }
      return u;
    });

    saveUsers(updated);
    showToast("✓ User status updated.");
  };

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isSuperAdmin) {
      alert("Permission Denied: Only Super Admin (admin@vikasdharafoundation.org) can add users.");
      return;
    }

    const cleanEmail = newUser.email.trim().toLowerCase();

    if (!cleanEmail.endsWith("@vikasdharafoundation.org")) {
      alert("Access Denied: Only official @vikasdharafoundation.org domain emails can be added.");
      return;
    }

    if (users.some(u => u.email.toLowerCase() === cleanEmail)) {
      alert("A user with this email already exists.");
      return;
    }

    const created: AdminUser = {
      id: `usr-${Date.now()}`,
      name: newUser.name.trim() || "Institutional Member",
      email: cleanEmail,
      role: newUser.role,
      status: "Active",
      permissions: {
        canManageUsers: newUser.role === "Super Administrator",
        canManageATS: true,
        canManageCMS: newUser.role !== "CSR Liaison",
        canManageSettings: newUser.role === "Super Administrator"
      },
      lastLogin: "Never"
    };

    saveUsers([...users, created]);
    setIsAddUserModalOpen(false);
    setNewUser({ name: "", email: "", role: "Trustee" });
    showToast(`✓ Added ${cleanEmail} with role "${newUser.role}"`);
  };

  const handleDeleteUser = (userId: string, email: string) => {
    if (!isSuperAdmin) {
      alert("Permission Denied: Only Super Admin can delete users.");
      return;
    }

    if (email === SUPER_ADMIN_EMAIL) {
      alert("Cannot delete primary Super Administrator account.");
      return;
    }

    if (window.confirm(`Are you sure you want to remove user access for:\n${email}?`)) {
      const updated = users.filter(u => u.id !== userId);
      saveUsers(updated);
      showToast("🗑 User removed.");
    }
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("✓ System settings updated successfully!");
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      
      {/* Toast */}
      {toastMsg && (
        <div className="fixed top-20 right-6 z-50 p-4 rounded-2xl bg-neutral-900 text-white border border-emerald-500/40 shadow-2xl flex items-center gap-3 animate-slide-in-right">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-bold">{toastMsg}</span>
        </div>
      )}

      {/* Top Banner */}
      <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full">
            Security & Governance Console
          </span>
          <h1 className="text-2xl font-extrabold text-neutral-900 mt-1 font-heading">
            Institutional Settings & Access Control
          </h1>
          <p className="text-xs text-neutral-500 mt-0.5">
            Role-Based Access Control (RBAC) & statutory trust configuration.
          </p>
        </div>

        {/* Super Admin Status Tag */}
        <div className="flex items-center gap-3 bg-neutral-900 text-white p-3 rounded-2xl border border-neutral-800">
          <div className="w-9 h-9 rounded-xl bg-primary-600 flex items-center justify-center text-base font-black">
            👑
          </div>
          <div>
            <span className="text-[10px] font-bold text-primary-300 uppercase tracking-wider block">
              Active Security Principal:
            </span>
            <span className="text-xs font-bold block truncate max-w-[200px]">
              {currentUserEmail || "admin@vikasdharafoundation.org"}
            </span>
          </div>
          {isSuperAdmin ? (
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-black border border-emerald-500/40">
              SUPER ADMIN
            </span>
          ) : (
            <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/30">
              STANDARD USER
            </span>
          )}
        </div>
      </div>

      {/* SECTION 1: ROLE-BASED ACCESS CONTROL (RBAC) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-soft space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-100 pb-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🔐</span>
              <h2 className="text-lg font-extrabold text-neutral-900 font-heading">
                User Roles & Privilege Management
              </h2>
            </div>
            <p className="text-xs text-neutral-500 mt-1">
              {isSuperAdmin ? (
                <span className="text-emerald-700 font-bold">
                  ✓ You are logged in as Master Super Admin ({SUPER_ADMIN_EMAIL}). You have full authority to assign roles and manage accounts.
                </span>
              ) : (
                <span className="text-amber-700 font-medium">
                  🔒 Restricted: Only the Master Super Admin (<strong>{SUPER_ADMIN_EMAIL}</strong>) can assign user types and modify team privileges.
                </span>
              )}
            </p>
          </div>

          {isSuperAdmin && (
            <Button onClick={() => setIsAddUserModalOpen(true)} size="sm" className="font-bold shrink-0">
              + Add Authorized User
            </Button>
          )}
        </div>

        {/* User Accounts Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-neutral-50 border-b border-neutral-200 text-neutral-500 uppercase tracking-wider font-extrabold text-[10px]">
              <tr>
                <th className="p-3.5">User Identity</th>
                <th className="p-3.5">Assigned User Type / Role</th>
                <th className="p-3.5">Modules Authorized</th>
                <th className="p-3.5">Status</th>
                <th className="p-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 font-medium">
              {users.map((usr) => {
                const isMaster = usr.email === SUPER_ADMIN_EMAIL;
                return (
                  <tr key={usr.id} className="hover:bg-neutral-50/80 transition-colors">
                    
                    {/* User Info */}
                    <td className="p-3.5">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                          isMaster ? "bg-primary-900 text-white" : "bg-neutral-100 text-neutral-800"
                        }`}>
                          {isMaster ? "👑" : usr.name.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-neutral-900 text-xs">{usr.name}</span>
                            {isMaster && (
                              <span className="text-[9px] font-black text-primary-800 bg-primary-100 px-1.5 py-0.5 rounded">
                                MASTER ID
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-neutral-500 font-mono block">{usr.email}</span>
                        </div>
                      </div>
                    </td>

                    {/* Role Dropdown / Selector */}
                    <td className="p-3.5">
                      {isSuperAdmin && !isMaster ? (
                        <select
                          value={usr.role}
                          onChange={(e) => handleRoleChange(usr.id, e.target.value as AdminUser["role"])}
                          className="px-3 py-1.5 rounded-xl border border-neutral-300 bg-white text-xs font-bold text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-xs"
                        >
                          <option value="Trustee">Trustee</option>
                          <option value="Managing Director">Managing Director</option>
                          <option value="CSR Liaison">CSR Liaison</option>
                          <option value="Content Editor">Content Editor</option>
                          <option value="Field Coordinator">Field Coordinator</option>
                          <option value="Super Administrator">Super Administrator</option>
                        </select>
                      ) : (
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider inline-block ${
                          isMaster
                            ? "bg-primary-950 text-white border border-primary-700"
                            : "bg-neutral-100 text-neutral-800 border border-neutral-200"
                        }`}>
                          {usr.role}
                        </span>
                      )}
                    </td>

                    {/* Permissions Badges */}
                    <td className="p-3.5">
                      <div className="flex flex-wrap gap-1">
                        {usr.permissions.canManageUsers && (
                          <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 text-[10px] font-bold">
                            User Types
                          </span>
                        )}
                        {usr.permissions.canManageATS && (
                          <span className="px-2 py-0.5 rounded bg-sky-100 text-sky-800 text-[10px] font-bold">
                            ATS Portal
                          </span>
                        )}
                        {usr.permissions.canManageCMS && (
                          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                            Blogs & CMS
                          </span>
                        )}
                        {usr.permissions.canManageSettings && (
                          <span className="px-2 py-0.5 rounded bg-neutral-200 text-neutral-800 text-[10px] font-bold">
                            Settings
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Status Toggle */}
                    <td className="p-3.5">
                      <button
                        onClick={() => handleToggleUserStatus(usr.id)}
                        disabled={!isSuperAdmin || isMaster}
                        className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase transition-colors ${
                          usr.status === "Active"
                            ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                            : "bg-rose-100 text-rose-800 hover:bg-rose-200"
                        } ${(!isSuperAdmin || isMaster) ? "cursor-default opacity-90" : "cursor-pointer"}`}
                      >
                        {usr.status === "Active" ? "● Active" : "○ Inactive"}
                      </button>
                    </td>

                    {/* Actions */}
                    <td className="p-3.5 text-right">
                      {isSuperAdmin && !isMaster ? (
                        <button
                          onClick={() => handleDeleteUser(usr.id, usr.email)}
                          className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold"
                          title="Remove user"
                        >
                          🗑 Remove
                        </button>
                      ) : (
                        <span className="text-[10px] text-neutral-400 font-bold">
                          {isMaster ? "Protected" : "Read-Only"}
                        </span>
                      )}
                    </td>

                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 2: STATUTORY TRUST CONFIGURATION */}
      <form onSubmit={handleSaveSettings} className="space-y-6">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-soft space-y-5">
          <div className="border-b border-neutral-100 pb-3">
            <h2 className="text-base font-bold text-neutral-900 font-heading">
              Statutory Trust Identification & MCA Numbers
            </h2>
            <p className="text-xs text-neutral-500 mt-0.5">
              Government registration credentials, PAN, and CSR-1 identifiers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">Registered Trust Name</label>
              <input
                type="text"
                disabled={!isSuperAdmin}
                value={settings.foundationName}
                onChange={(e) => setSettings({ ...settings, foundationName: e.target.value })}
                className="w-full text-xs sm:text-sm border border-neutral-300 rounded-xl p-3 bg-neutral-50 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">Public Trust Reg. Number</label>
              <input
                type="text"
                disabled={!isSuperAdmin}
                value={settings.regNumber}
                onChange={(e) => setSettings({ ...settings, regNumber: e.target.value })}
                className="w-full text-xs sm:text-sm border border-neutral-300 rounded-xl p-3 bg-white font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">MCA CSR-1 Registration</label>
              <input
                type="text"
                disabled={!isSuperAdmin}
                value={settings.csrNumber}
                onChange={(e) => setSettings({ ...settings, csrNumber: e.target.value })}
                className="w-full text-xs sm:text-sm border border-neutral-300 rounded-xl p-3 bg-white font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">PAN / Tax Identifier</label>
              <input
                type="text"
                disabled={!isSuperAdmin}
                value={settings.panNumber}
                onChange={(e) => setSettings({ ...settings, panNumber: e.target.value })}
                className="w-full text-xs sm:text-sm border border-neutral-300 rounded-xl p-3 bg-white font-mono"
              />
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <Button type="submit" disabled={!isSuperAdmin} size="lg" className="font-bold">
              Save Statutory Settings
            </Button>
          </div>
        </div>
      </form>

      {/* ADD USER MODAL */}
      {isAddUserModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-primary-700 uppercase tracking-widest">
                  Super Admin Console
                </span>
                <h3 className="text-lg font-bold text-neutral-900 font-heading">
                  Add Authorized Team User
                </h3>
              </div>
              <button onClick={() => setIsAddUserModalOpen(false)} className="p-1 rounded-lg text-neutral-400 hover:text-neutral-900">
                ✕
              </button>
            </div>

            <form onSubmit={handleAddUser} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-bold text-neutral-700 mb-1">Member Full Name</label>
                <input
                  type="text"
                  required
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  placeholder="e.g. Ramesh Deshmukh"
                  className="w-full border border-neutral-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block font-bold text-neutral-700 mb-1">Domain Email Address (@vikasdharafoundation.org)</label>
                <input
                  type="email"
                  required
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  placeholder="name@vikasdharafoundation.org"
                  className="w-full border border-neutral-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block font-bold text-neutral-700 mb-1">Assigned User Type / Role</label>
                <select
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value as AdminUser["role"] })}
                  className="w-full border border-neutral-300 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 font-semibold"
                >
                  <option value="Trustee">Trustee</option>
                  <option value="Managing Director">Managing Director</option>
                  <option value="CSR Liaison">CSR Liaison</option>
                  <option value="Content Editor">Content Editor</option>
                  <option value="Field Coordinator">Field Coordinator</option>
                  <option value="Super Administrator">Super Administrator</option>
                </select>
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <Button type="button" variant="outline" onClick={() => setIsAddUserModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="font-bold">
                  Assign Role & Save
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
