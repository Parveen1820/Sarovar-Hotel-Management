import { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      email === "admin@sarovarhotel.com" &&
      password === "admin123"
    ) {
      setError("");
      onLogin();
    } else {
      setError("Invalid email or password");
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
            inventory and intelligent hotel insights.
          </p>
        </div>

        <div className="login-features">
          <div>
            <span>✓</span>
            Smart Room Management
          </div>

          <div>
            <span>✓</span>
            AI-powered Predictions
          </div>

          <div>
            <span>✓</span>
            Secure Staff Access
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
            Enter your credentials to access the hotel
            management dashboard.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <div className="password-label">
                <label>Password</label>
                <span>Forgot password?</span>
              </div>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            <button type="submit" className="login-button">
              Sign In
              <span>→</span>
            </button>

          </form>

          <div className="demo-login">
            <strong>Demo Account</strong>

            <p>
              admin@sarovarhotel.com
            </p>

            <p>
              Password: admin123
            </p>
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