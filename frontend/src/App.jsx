import { useState } from "react";

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
import "./Mobile.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [activePage, setActivePage] =
    useState("Dashboard");

  if (!isLoggedIn) {
    return (
      <Login
        onLogin={() => setIsLoggedIn(true)}
      />
    );
  }

  return (
    <div className="app-layout">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        onLogout={() => setIsLoggedIn(false)}
      />

      <main className="main-content">

        <Topbar
          activePage={activePage}
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
            activePage !== "Inventory" && (
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