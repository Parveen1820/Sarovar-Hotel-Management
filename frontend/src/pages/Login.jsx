import { useState } from "react";
import { login as apiLogin } from "../services/api";

function Login({ onLogin }) {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const performLogin = (userData) => {
    setError("");
    onLogin(userData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const identifier = usernameOrEmail.trim().toLowerCase();
    const pwd = password.trim();

    // 1. Try calling the Spring Boot backend auth API
    try {
      const res = await apiLogin(identifier, pwd);
      if (res.data && res.data.token) {
        localStorage.setItem("token", res.data.token);
        const role = res.data.role ? res.data.role.replace("ROLE_", "") : "ADMIN";
        performLogin({
          username: res.data.username || identifier,
          name: role === "ADMIN" ? "Admin User" : "Staff Member",
          role: role,
          email: `${identifier}@sarovarhotel.com`
        });
        setLoading(false);
        return;
      }
    } catch (apiErr) {
      console.warn("Backend server not responding, verifying via local authentication.");
    }

    // 2. Local verified credentials
    if (
      (identifier === "admin" || identifier === "admin@sarovarhotel.com") &&
      (pwd === "password123" || pwd === "admin123")
    ) {
      performLogin({
        username: "admin",
        name: "Admin User",
        role: "ADMIN",
        email: "admin@sarovarhotel.com"
      });
    } else if (
      (identifier === "staff" || identifier === "staff@sarovarhotel.com") &&
      (pwd === "password123" || pwd === "staff123")
    ) {
      performLogin({
        username: "staff",
        name: "Staff Member",
        role: "STAFF",
        email: "staff@sarovarhotel.com"
      });
    } else {
      setError("Invalid username/email or password. Please use the credentials shown below.");
    }
    setLoading(false);
  };

  const quickLogin = (role) => {
    if (role === "ADMIN") {
      performLogin({
        username: "admin",
        name: "Admin User",
        role: "ADMIN",
        email: "admin@sarovarhotel.com"
      });
    } else {
      performLogin({
        username: "staff",
        name: "Staff Member",
        role: "STAFF",
        email: "staff@sarovarhotel.com"
      });
    }
  };

  return (
    <div className="login-page">

      <div className="login-left">
        <div className="hotel-brand">
          <div className="hotel-logo">S</div>

          <div>
            <h1>SAROVAR</h1>
            <p>HOTEL • BOISAR</p>
          </div>
        </div>

        <div className="login-welcome">
          <p className="small-label">HOTEL MANAGEMENT SYSTEM</p>

          <h2>
            Manage your hotel
            <br />
            <span>smarter.</span>
          </h2>

          <p className="welcome-text">
            A centralized platform for managing rooms,
            reservations, staff, restaurant operations,
            inventory, Smart Dining, and AI hotel intelligence.
          </p>
        </div>

        <div className="login-features">
          <div>
            <span>✓</span>
            Smart Room & Reservation Management
          </div>

          <div>
            <span>✓</span>
            AI-powered Predictions & Forecasting
          </div>

          <div>
            <span>✓</span>
            Smart Dining Personalized Recommendations
          </div>

          <div>
            <span>✓</span>
            Role-Based Access Control (Admin & Staff)
          </div>
        </div>
      </div>

      <div className="login-right">

        <div className="login-box">

          <div className="mobile-logo">
            <div className="hotel-logo">S</div>
            <div>
              <h1>SAROVAR</h1>
              <p>HOTEL • BOISAR</p>
            </div>
          </div>

          <p className="login-label">WELCOME BACK</p>

          <h2>Sign in to your account</h2>

          <p className="login-description">
            Choose a demo profile or enter your credentials below.
          </p>

          {/* QUICK DEMO LOGIN BUTTONS */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            <button
              type="button"
              onClick={() => quickLogin("ADMIN")}
              style={{
                flex: 1,
                padding: "10px 12px",
                background: "#eff6ff",
                border: "1.5px solid #3b82f6",
                borderRadius: "8px",
                color: "#1d4ed8",
                fontWeight: "600",
                fontSize: "13px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "3px"
              }}
            >
              <span>👑 Login as Admin</span>
              <small style={{ fontSize: "11px", color: "#64748b", fontWeight: "normal" }}>Full Access</small>
            </button>

            <button
              type="button"
              onClick={() => quickLogin("STAFF")}
              style={{
                flex: 1,
                padding: "10px 12px",
                background: "#f0fdf4",
                border: "1.5px solid #22c55e",
                borderRadius: "8px",
                color: "#15803d",
                fontWeight: "600",
                fontSize: "13px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "3px"
              }}
            >
              <span>👔 Login as Staff</span>
              <small style={{ fontSize: "11px", color: "#64748b", fontWeight: "normal" }}>Operations</small>
            </button>
          </div>

          <div style={{ textAlign: "center", margin: "14px 0", color: "#94a3b8", fontSize: "12px", fontWeight: "500" }}>
            — OR USE CREDENTIALS —
          </div>

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <label>Username or Email Address</label>

              <input
                type="text"
                placeholder="admin or staff"
                value={usernameOrEmail}
                onChange={(e) => setUsernameOrEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <div className="password-label">
                <label>Password</label>
              </div>

              <input
                type="password"
                placeholder="password123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <div className="login-error" style={{ color: "#ef4444", fontSize: "13px", marginBottom: "12px", padding: "8px", background: "#fef2f2", borderRadius: "6px" }}>
                {error}
              </div>
            )}

            <button type="submit" className="login-button" disabled={loading}>
              {loading ? "Signing In..." : "Sign In"}
              <span>→</span>
            </button>

          </form>

          <div className="demo-login" style={{ marginTop: "20px", padding: "12px", background: "#f8fafc", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
            <strong style={{ display: "block", marginBottom: "6px", color: "#334155" }}>Supported Demo Credentials</strong>
            <div style={{ fontSize: "12px", color: "#475569", lineHeight: "1.6" }}>
              <div>• <strong>Admin:</strong> <code>admin</code> / <code>password123</code></div>
              <div>• <strong>Staff:</strong> <code>staff</code> / <code>password123</code></div>
            </div>
          </div>

          <p className="login-footer">
            © 2026 Sarovar Hotel, Boisar
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;
