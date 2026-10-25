import { useState, useEffect } from "react";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Rooms from "./pages/Rooms";
import Reservations from "./pages/Reservations";
import Restaurant from "./pages/Restaurant";
import Tables from "./pages/Tables";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import AiIntelligence from "./pages/AiIntelligence";
import AiChatbot from "./pages/AiChatbot";
import Kitchen from "./pages/Kitchen";
import Housekeeping from "./pages/Housekeeping";
import Maintenance from "./pages/Maintenance";
import Staff from "./pages/Staff";
import Inventory from "./pages/Inventory";
import SmartDining from "./pages/SmartDining";
import Security from "./pages/Security";
import "./Mobile.css";

function App() {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("sarovar_user");
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("sarovar_isLoggedIn") === "true";
  });

  const [activePage, setActivePage] = useState("Dashboard");

  const handleLogin = (userData) => {
    const activeUser = userData || {
      username: "admin",
      name: "Admin User",
      role: "ADMIN",
      email: "admin@sarovarhotel.com"
    };
    setUser(activeUser);
    setIsLoggedIn(true);
    localStorage.setItem("sarovar_user", JSON.stringify(activeUser));
    localStorage.setItem("sarovar_isLoggedIn", "true");
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("sarovar_user");
    localStorage.removeItem("sarovar_isLoggedIn");
    localStorage.removeItem("token");
  };

  if (!isLoggedIn) {
    return (
      <Login
        onLogin={handleLogin}
      />
    );
  }

  const isStaff = user?.role === "STAFF";

  return (
    <div className="app-layout">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        onLogout={handleLogout}
        user={user}
      />

      <main className="main-content">

        <Topbar
          activePage={activePage}
          user={user}
        />

        <div className="page-content">

          {activePage === "Dashboard" && (
            <Dashboard />
          )}

          {activePage === "Rooms" && (
            <Rooms />
          )}

          {activePage === "Reservations" && (
            <Reservations />
          )}

          {activePage === "Restaurant" && (
            <Restaurant />
          )}

          {activePage === "AI Insights" && (
            <AiIntelligence />
          )}

          {activePage === "AI Chatbot" && (
            <AiChatbot />
          )}

          {activePage === "Kitchen" && (
            <Kitchen />
          )}

          {activePage === "Housekeeping" && (
            <Housekeeping />
          )}

          {activePage === "Maintenance" && (
            <Maintenance />
          )}

          {activePage === "Staff" && (
            <Staff />
          )}

          {activePage === "Inventory" && (
            <Inventory />
          )}

          {activePage === "Smart Dining" && (
            <SmartDining />
          )}

          {activePage === "Security" && !isStaff && (
            <Security />
          )}

          {activePage === "Security" && isStaff && (
            <div className="coming-soon" style={{ padding: "40px", textAlign: "center" }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>🔒</div>
              <h2>Administrator Privileges Required</h2>
              <p style={{ maxWidth: "450px", margin: "10px auto", color: "#64748b" }}>
                System cybersecurity audit logs, authentication policies, and encryption keys are restricted to Administrator accounts.
              </p>
              <button 
                className="secondary-button" 
                style={{ marginTop: "16px" }}
                onClick={() => setActivePage("Dashboard")}
              >
                ← Return to Dashboard
              </button>
            </div>
          )}

          {activePage !== "Dashboard" &&
            activePage !== "Rooms" &&
            activePage !== "Reservations" &&
            activePage !== "Restaurant" &&
            activePage !== "AI Insights" &&
            activePage !== "AI Chatbot" &&
            activePage !== "Kitchen" &&
            activePage !== "Housekeeping" &&
            activePage !== "Maintenance" &&
            activePage !== "Staff" &&
            activePage !== "Inventory" &&
            activePage !== "Smart Dining" &&
            activePage !== "Security" && (
              <div className="coming-soon">

                <h2>
                  {activePage}
                </h2>

                <p>
                  This module is being developed.
                </p>

              </div>
            )}

        </div>

      </main>

    </div>
  );
}

export default App;
