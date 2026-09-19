import React, { useState } from 'react';
import './FunctionalPages.css';

const Staff = () => {
    const [staffList, setStaffList] = useState([
        { id: "ST-001", name: "Rahul Sharma", role: "Manager", department: "Administration", status: "Active" },
        { id: "ST-002", name: "Priya Patel", role: "Receptionist", department: "Front Desk", status: "Active" },
        { id: "ST-003", name: "Amit Kumar", role: "Chef", department: "Kitchen", status: "On Leave" },
        { id: "ST-004", name: "Sneha Desai", role: "Housekeeper", department: "Housekeeping", status: "Active" }
    ]);
    const [showModal, setShowModal] = useState(false);
    const [newStaff, setNewStaff] = useState({ name: "", role: "", department: "Administration", status: "Active" });

    const handleAddStaff = () => {
        if (!newStaff.name || !newStaff.role) return;
        const staff = {
            id: `ST-00${staffList.length + 1}`,
            name: newStaff.name,
            role: newStaff.role,
            department: newStaff.department,
            status: newStaff.status
        };
        setStaffList([staff, ...staffList]);
        setNewStaff({ name: "", role: "", department: "Administration", status: "Active" });
        setShowModal(false);
    };

    return (
        <div className="functional-container">
            <header className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1>Staff Management</h1>
                    <p>Manage hotel staff, roles, and attendance.</p>
                </div>
                <button className="primary-button" onClick={() => setShowModal(true)}>
                    + Add Staff
                </button>
            </header>

            <div className="table-wrapper">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Staff ID</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Department</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {staffList.map(s => (
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.name}</td>
                                <td>{s.role}</td>
                                <td>{s.department}</td>
                                <td>
                                    <span className={`badge ${s.status === 'Active' ? 'badge-green' : 'badge-orange'}`}>
                                        {s.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className="func-modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="func-modal" onClick={e => e.stopPropagation()}>
                        <div className="func-modal-header">
                            <div>
                                <p className="module-label">STAFF</p>
                                <h3>New Staff Member</h3>
                                <p>Add a new employee</p>
                            </div>
                            <button className="func-modal-close" onClick={() => setShowModal(false)}>×</button>
                        </div>
                        <div className="func-modal-body">
                            <div className="func-form-row">
                                <div className="func-form-field">
                                    <label>Staff Name</label>
                                    <input type="text" placeholder="e.g. John Doe" value={newStaff.name} onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })} />
                                </div>
                                <div className="func-form-field">
                                    <label>Role</label>
                                    <input type="text" placeholder="e.g. Receptionist" value={newStaff.role} onChange={(e) => setNewStaff({ ...newStaff, role: e.target.value })} />
                                </div>
                            </div>
                            <div className="func-form-row">
                                <div className="func-form-field">
                                    <label>Department</label>
                                    <select value={newStaff.department} onChange={(e) => setNewStaff({ ...newStaff, department: e.target.value })}>
                                        <option value="Administration">Administration</option>
                                        <option value="Front Desk">Front Desk</option>
                                        <option value="Kitchen">Kitchen</option>
                                        <option value="Housekeeping">Housekeeping</option>
                                        <option value="Maintenance">Maintenance</option>
                                    </select>
                                </div>
                                <div className="func-form-field">
                                    <label>Status</label>
                                    <select value={newStaff.status} onChange={(e) => setNewStaff({ ...newStaff, status: e.target.value })}>
                                        <option value="Active">Active</option>
                                        <option value="On Leave">On Leave</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="func-modal-footer">
                            <button className="secondary-button" onClick={() => setShowModal(false)}>Cancel</button>
                            <button className="primary-button" onClick={handleAddStaff}>Add Staff →</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Staff;
