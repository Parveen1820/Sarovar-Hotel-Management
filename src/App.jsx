import { useState } from "react";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Rooms from "./pages/Rooms";
import Reservations from "./pages/Reservations";
import Restaurant from "./pages/Restaurant";
import Tables from "./pages/Tables";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

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

          {activePage !== "Dashboard" &&
            activePage !== "Rooms" &&
            activePage !== "Reservations" &&
            activePage !== "Restaurant" && (
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