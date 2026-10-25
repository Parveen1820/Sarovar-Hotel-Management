function Sidebar({ activePage, setActivePage, onLogout, user }) {
  const isStaff = user?.role === "STAFF";

  const menuItems = [
    { name: "Dashboard", icon: "⌂" },
    { name: "Rooms", icon: "▣" },
    { name: "Reservations", icon: "▤" },
    { name: "Restaurant", icon: "♨" },
    { name: "Smart Dining", icon: "🍽️" },
    { name: "Kitchen", icon: "🔪" },
    { name: "Housekeeping", icon: "🧹" },
    { name: "Maintenance", icon: "🔧" },
    { name: "Staff", icon: "♙" },
    { name: "Inventory", icon: "▦" },
  ];

  const smartItems = [
    { name: "AI Insights", icon: "✦" },
    { name: "AI Chatbot", icon: "💬" },
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <p style={{ margin: 0 }}>HOTEL • BOISAR</p>
            <span 
              style={{
                fontSize: '10px',
                padding: '1px 6px',
                borderRadius: '4px',
                fontWeight: '700',
                background: isStaff ? '#dcfce7' : '#dbeafe',
                color: isStaff ? '#15803d' : '#1e40af',
                letterSpacing: '0.04em'
              }}
            >
              {isStaff ? 'STAFF' : 'ADMIN'}
            </span>
          </div>
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

              {item.name === "Smart Dining" && (
                <span className="ai-badge" style={{ background: '#f0fdf4', color: '#16a34a', borderColor: '#bbf7d0' }}>
                  NEW
                </span>
              )}

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

              {item.name === "Security" && isStaff && (
                <span style={{ fontSize: '10px', color: '#94a3b8', marginLeft: 'auto' }}>
                  🔒 Admin
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
            <strong>{isStaff ? "Staff Session" : "Admin Session"}</strong>
            <small>{isStaff ? "Operations Mode" : "Full Access Mode"}</small>
          </div>

        </div>

        <button
          className="logout-button"
          onClick={onLogout}
        >
          <span>↪</span>
          Sign Out ({user?.role || "ADMIN"})
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;
