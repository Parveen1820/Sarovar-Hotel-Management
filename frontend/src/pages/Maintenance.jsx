import "./FunctionalPages.css";
import { useState } from "react";

function Maintenance() {
  const [activeSection, setActiveSection] = useState("tickets");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTicket, setNewTicket] = useState({ location: "", issue: "", assignee: "", priority: "Normal" });

  const [maintenanceTickets, setMaintenanceTickets] = useState([
    { id: "MT-401", location: "Room 401", issue: "AC not cooling", assignee: "Rajesh T.", reported: "9:00 AM", status: "In Progress", priority: "High" },
    { id: "MT-205", location: "Lobby", issue: "Light fixture flickering", assignee: "Suresh P.", reported: "9:30 AM", status: "Completed", priority: "Normal" },
    { id: "MT-312", location: "Room 312", issue: "Leaking faucet", assignee: "Manoj K.", reported: "10:15 AM", status: "Pending", priority: "Urgent" },
    { id: "MT-108", location: "Pool Area", issue: "Broken tile", assignee: "Vikram S.", reported: "11:00 AM", status: "In Progress", priority: "Normal" },
    { id: "MT-503", location: "Room 503", issue: "TV remote not working", assignee: "Anil D.", reported: "11:30 AM", status: "Pending", priority: "Low" },
  ]);

  const stats = {
    open: maintenanceTickets.filter(t => t.status !== "Completed").length,
    resolved: maintenanceTickets.filter(t => t.status === "Completed").length,
    urgent: maintenanceTickets.filter(t => t.priority === "Urgent").length,
    inProgress: maintenanceTickets.filter(t => t.status === "In Progress").length,
  };

  const addTicket = () => {
    if (!newTicket.location || !newTicket.issue) return;
    const now = new Date();
    const timeStr = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
    const ticket = {
      id: `MT-${600 + maintenanceTickets.length}`,
      location: newTicket.location,
      issue: newTicket.issue,
      assignee: newTicket.assignee || "Unassigned",
      reported: timeStr,
      status: "Pending",
      priority: newTicket.priority,
    };
    setMaintenanceTickets([ticket, ...maintenanceTickets]);
    setNewTicket({ location: "", issue: "", assignee: "", priority: "Normal" });
    setShowAddForm(false);
  };

  const updateStatus = (id, newStatus) => {
    setMaintenanceTickets(maintenanceTickets.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  const getNextStatus = (status) => {
    if (status === "Pending") return "In Progress";
    if (status === "In Progress") return "Completed";
    return null;
  };

  const displayTickets = activeSection === "tickets"
    ? maintenanceTickets.filter(t => t.status !== "Completed")
    : maintenanceTickets.filter(t => t.status === "Completed");

  return (
    <div className="functional-page">
      <div className="func-page-header">
        <div>
          <p className="module-label">MAINTENANCE</p>
          <h2>Maintenance Tickets</h2>
          <p>Track and resolve maintenance issues across the property</p>
        </div>
        <div className="func-header-actions">
          <button className={`func-tab ${activeSection === "tickets" ? "active" : ""}`} onClick={() => setActiveSection("tickets")}>Active Tickets</button>
          <button className={`func-tab ${activeSection === "resolved" ? "active" : ""}`} onClick={() => setActiveSection("resolved")}>Resolved</button>
          <button className="func-add-btn" onClick={() => setShowAddForm(true)}>+ New Ticket</button>
        </div>
      </div>

      <div className="func-stats-row">
        <div className="func-stat-card"><span className="func-stat-icon">🔧</span><div><strong>{stats.open}</strong><small>Open Tickets</small></div></div>
        <div className="func-stat-card"><span className="func-stat-icon">✅</span><div><strong>{stats.resolved}</strong><small>Resolved Today</small></div></div>
        <div className="func-stat-card"><span className="func-stat-icon">⚠️</span><div><strong>{stats.urgent}</strong><small>Urgent</small></div></div>
        <div className="func-stat-card"><span className="func-stat-icon">🔄</span><div><strong>{stats.inProgress}</strong><small>In Progress</small></div></div>
      </div>

      <div className="func-table-wrapper">
        <table>
          <thead>
            <tr>
              <th>TICKET ID</th>
              <th>LOCATION</th>
              <th>ISSUE</th>
              <th>ASSIGNED TO</th>
              <th>REPORTED</th>
              <th>PRIORITY</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {displayTickets.length > 0 ? displayTickets.map((ticket) => (
              <tr key={ticket.id}>
                <td><strong>{ticket.id}</strong></td>
                <td>{ticket.location}</td>
                <td>{ticket.issue}</td>
                <td>{ticket.assignee}</td>
                <td>{ticket.reported}</td>
                <td><span className={`func-badge ${ticket.priority === "Urgent" ? "badge-red" : ticket.priority === "High" ? "badge-orange" : ticket.priority === "Low" ? "badge-gray" : "badge-blue"}`}>{ticket.priority}</span></td>
                <td><span className={`func-badge ${ticket.status === "Completed" ? "badge-green" : ticket.status === "In Progress" ? "badge-orange" : "badge-blue"}`}>{ticket.status}</span></td>
                <td>
                  {getNextStatus(ticket.status) ? (
                    <button className="func-action-btn" onClick={() => updateStatus(ticket.id, getNextStatus(ticket.status))}>
                      {ticket.status === "Pending" ? "Start Work" : "Mark Resolved"}
                    </button>
                  ) : (
                    <span className="func-badge badge-green">Resolved ✓</span>
                  )}
                </td>
              </tr>
            )) : (
              <tr><td colSpan="8" style={{ textAlign: "center", padding: "40px", color: "#94a3b8" }}>No tickets found</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {showAddForm && (
        <div className="func-modal-overlay" onClick={() => setShowAddForm(false)}>
          <div className="func-modal" onClick={(e) => e.stopPropagation()}>
            <div className="func-modal-header">
              <div>
                <p className="module-label">MAINTENANCE</p>
                <h3>New Maintenance Ticket</h3>
                <p>Report a new maintenance issue</p>
              </div>
              <button className="func-modal-close" onClick={() => setShowAddForm(false)}>×</button>
            </div>
            <div className="func-modal-body">
              <div className="func-form-row">
                <div className="func-form-field">
                  <label>Location</label>
                  <input type="text" placeholder="e.g. Room 401 or Lobby" value={newTicket.location} onChange={(e) => setNewTicket({ ...newTicket, location: e.target.value })} />
                </div>
                <div className="func-form-field">
                  <label>Priority</label>
                  <select value={newTicket.priority} onChange={(e) => setNewTicket({ ...newTicket, priority: e.target.value })}>
                    <option value="Low">Low</option>
                    <option value="Normal">Normal</option>
                    <option value="High">High</option>
                    <option value="Urgent">Urgent</option>
                  </select>
                </div>
              </div>
              <div className="func-form-field">
                <label>Issue Description</label>
                <textarea placeholder="Describe the maintenance issue..." value={newTicket.issue} onChange={(e) => setNewTicket({ ...newTicket, issue: e.target.value })} />
              </div>
              <div className="func-form-field">
                <label>Assign To (Optional)</label>
                <input type="text" placeholder="Staff member name" value={newTicket.assignee} onChange={(e) => setNewTicket({ ...newTicket, assignee: e.target.value })} />
              </div>
            </div>
            <div className="func-modal-footer">
              <button className="secondary-button" onClick={() => setShowAddForm(false)}>Cancel</button>
              <button className="primary-button" onClick={addTicket}>Submit Ticket →</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Maintenance;
