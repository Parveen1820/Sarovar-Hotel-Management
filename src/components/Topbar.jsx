function Topbar({ activePage }) {
  return (
    <header className="topbar">

      <div className="topbar-left">

        <div>
          <p className="breadcrumb">
            Hotel Management
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

          <div className="user-avatar">
            A
          </div>

          <div className="user-info">
            <strong>Admin</strong>
            <span>Administrator</span>
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