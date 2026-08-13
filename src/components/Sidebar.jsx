function Sidebar({ activePage, setActivePage, onLogout }) {
  const menuItems = [
    { name: "Dashboard", icon: "⌂" },
    { name: "Rooms", icon: "▣" },
    { name: "Reservations", icon: "▤" },
    { name: "Restaurant", icon: "♨" },
    { name: "Staff", icon: "♙" },
    { name: "Inventory", icon: "▦" },
  ];

  const smartItems = [
    { name: "AI Insights", icon: "✦" },
    { name: "Security", icon: "◈" },
  ];

  return (
    <aside className="sidebar">

      {/* BRAND */}

      <div className="sidebar-brand">

        <div className="sidebar-logo">
          S
        </div>

        <div>
          <h2>SAROVAR</h2>
          <p>HOTEL • BOISAR</p>
        </div>

      </div>


      {/* MAIN MENU */}

      <div className="sidebar-section">

        <p className="sidebar-heading">
          MAIN MENU
        </p>

        <nav>

          {menuItems.map((item) => (

            <button
              key={item.name}
              className={
                activePage === item.name
                  ? "sidebar-item active"
                  : "sidebar-item"
              }
              onClick={() => setActivePage(item.name)}
            >

              <span className="sidebar-icon">
                {item.icon}
              </span>

              <span>
                {item.name}
              </span>

            </button>

          ))}

        </nav>

      </div>


      {/* SMART MANAGEMENT */}

      <div className="sidebar-section">

        <p className="sidebar-heading">
          SMART MANAGEMENT
        </p>

        <nav>

          {smartItems.map((item) => (

            <button
              key={item.name}
              className={
                activePage === item.name
                  ? "sidebar-item active"
                  : "sidebar-item"
              }
              onClick={() => setActivePage(item.name)}
            >

              <span className="sidebar-icon">
                {item.icon}
              </span>

              <span>
                {item.name}
              </span>

              {item.name === "AI Insights" && (
                <span className="ai-badge">
                  AI
                </span>
              )}

            </button>

          ))}

        </nav>

      </div>


      {/* BOTTOM */}

      <div className="sidebar-bottom">

        <div className="hotel-status">

          <span className="status-dot"></span>

          <div>
            <strong>System Online</strong>
            <small>All services operational</small>
          </div>

        </div>

        <button
          className="logout-button"
          onClick={onLogout}
        >
          <span>↪</span>
          Sign Out
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;