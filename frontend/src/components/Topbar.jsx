function Topbar({ activePage, user }) {
  const role = user?.role || "ADMIN";
  const isStaff = role === "STAFF";
  const displayName = user?.name || (isStaff ? "Staff Member" : "Admin User");
  const displayRole = isStaff ? "Operations Staff" : "Administrator";
  const avatarLetter = isStaff ? "S" : "A";
  const avatarBg = isStaff ? "#16a34a" : "#2563eb";

  return (
    <header className="topbar">

      <div className="topbar-left">

        <div>
          <p className="breadcrumb">
            Hotel Management {isStaff ? "• Staff Mode" : "• Administrator"}
          </p>

          <h1>
            {activePage}
          </h1>
        </div>

      </div>


      <div className="topbar-right">

        <button className="notification-button">
          ♢
          <span></span>
        </button>

        <div className="topbar-divider"></div>

        <div className="user-profile">

          <div 
            className="user-avatar" 
            style={{ 
              backgroundColor: avatarBg, 
              color: '#ffffff', 
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {avatarLetter}
          </div>

          <div className="user-info">
            <strong>{displayName}</strong>
            <span style={{ color: isStaff ? '#16a34a' : '#2563eb', fontWeight: 600, fontSize: '11px' }}>
              {displayRole}
            </span>
          </div>

          <span className="profile-arrow">
            ▾
          </span>

        </div>

      </div>

    </header>
  );
}

export default Topbar;
