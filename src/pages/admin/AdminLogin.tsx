import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

export function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@vikasdharafoundation.org");
  const [password, setPassword] = useState("Vortex@121");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      sessionStorage.setItem("vvf_admin_auth", JSON.stringify({ email, time: Date.now() }));
      navigate("/admin");
    } else {
      setError("Please enter valid administrator credentials.");
    }
  };

  const handleQuickLogin = () => {
    sessionStorage.setItem("vvf_admin_auth", JSON.stringify({ email: "trustee@vikasdharafoundation.org", time: Date.now() }));
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-primary-950 to-neutral-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 sm:p-10 max-w-md w-full shadow-2xl space-y-6 border border-white/20 relative overflow-hidden">
        <div className="text-center space-y-3">
          <div className="w-16 h-16 mx-auto bg-white rounded-2xl p-2 border border-neutral-200 shadow-soft flex items-center justify-center">
            <img src="/logo-icon.png" alt="VVF Emblem" className="w-12 h-12 object-contain" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full">
              Trustee & Administration
            </span>
            <h1 className="text-2xl font-extrabold text-neutral-900 mt-2 font-heading">
              Admin & ATS Console
            </h1>
            <p className="text-xs text-neutral-500 mt-1">
              VORTEXSOFT VIKASDHARA FOUNDATION
            </p>
          </div>
        </div>

        {error && (
          <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-xl text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4 text-xs sm:text-sm">
          <div>
            <label className="block font-bold text-neutral-700 mb-1">Admin Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-neutral-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              placeholder="admin@vikasdharafoundation.org"
            />
          </div>

          <div>
            <label className="block font-bold text-neutral-700 mb-1">Access Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-neutral-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              placeholder="••••••••••••"
            />
          </div>

          <Button type="submit" size="lg" className="w-full mt-2">
            Sign In to Console
          </Button>

          <button
            type="button"
            onClick={handleQuickLogin}
            className="w-full py-2.5 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs rounded-xl border border-emerald-200 transition-colors flex items-center justify-center gap-2"
          >
            <span>⚡ 1-Click Trustee Quick Access</span>
          </button>
        </form>

        <div className="pt-4 border-t border-neutral-100 text-center">
          <Link to="/" className="text-xs font-semibold text-neutral-500 hover:text-primary-700">
            ← Return to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}
