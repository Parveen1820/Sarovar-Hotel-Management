import React, { useState, useEffect } from 'react';
import { getHousekeepingRooms, updateHousekeepingRoomStatus } from '../services/api';
import './FunctionalPages.css';

const Housekeeping = () => {
    const [rooms, setRooms] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newTask, setNewTask] = useState({ room: "", priority: "MEDIUM", notes: "" });

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const res = await getHousekeepingRooms();
                setRooms(res.data);
            } catch (err) {
                // Mock data
                setRooms([
                    { room: "205", status: "DIRTY", priority: "HIGH", notes: "Checkout completed, new guest arriving today" },
                    { room: "102", status: "CLEANING", priority: "MEDIUM", notes: "" }
                ]);
            }
        };
        fetchRooms();
    }, []);

    const handleUpdate = async (room, newStatus) => {
        try {
            await updateHousekeepingRoomStatus(room, newStatus);
            setRooms(rooms.map(r => r.room === room ? { ...r, status: newStatus } : r));
        } catch (err) {
            setRooms(rooms.map(r => r.room === room ? { ...r, status: newStatus } : r));
        }
    };

    const handleAddTask = () => {
        if (!newTask.room) return;
        const task = {
            room: newTask.room,
            status: "DIRTY",
            priority: newTask.priority,
            notes: newTask.notes
        };
        setRooms([task, ...rooms]);
        setNewTask({ room: "", priority: "MEDIUM", notes: "" });
        setShowModal(false);
    };

    return (
        <div className="functional-container">
            <header className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1>Housekeeping Management</h1>
                    <p>Track room cleaning status and prioritize turnarounds.</p>
                </div>
                <button className="primary-button" onClick={() => setShowModal(true)}>
                    + New Task
                </button>
            </header>

            <div className="table-wrapper">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Room</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Notes</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms.map(r => (
                            <tr key={r.room}>
                                <td>{r.room}</td>
                                <td><span className={`badge priority-${r.priority.toLowerCase()}`}>{r.priority}</span></td>
                                <td><span className="badge status">{r.status}</span></td>
                                <td>{r.notes}</td>
                                <td>
                                    {r.status === 'DIRTY' && <button onClick={() => handleUpdate(r.room, 'CLEANING')}>Start Cleaning</button>}
                                    {r.status === 'CLEANING' && <button onClick={() => handleUpdate(r.room, 'INSPECTION')}>Mark for Inspection</button>}
                                    {r.status === 'INSPECTION' && <button onClick={() => handleUpdate(r.room, 'CLEAN')}>Approve Clean</button>}
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
                                <p className="module-label">HOUSEKEEPING</p>
                                <h3>New Housekeeping Task</h3>
                                <p>Add a new room to clean</p>
                            </div>
                            <button className="func-modal-close" onClick={() => setShowModal(false)}>×</button>
                        </div>
                        <div className="func-modal-body">
                            <div className="func-form-row">
                                <div className="func-form-field">
                                    <label>Room Number</label>
                                    <input type="text" placeholder="e.g. 101" value={newTask.room} onChange={(e) => setNewTask({ ...newTask, room: e.target.value })} />
                                </div>
                                <div className="func-form-field">
                                    <label>Priority</label>
                                    <select value={newTask.priority} onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}>
                                        <option value="LOW">LOW</option>
                                        <option value="MEDIUM">MEDIUM</option>
                                        <option value="HIGH">HIGH</option>
                                    </select>
                                </div>
                            </div>
                            <div className="func-form-field">
                                <label>Notes</label>
                                <textarea placeholder="Add any specific cleaning instructions..." value={newTask.notes} onChange={(e) => setNewTask({ ...newTask, notes: e.target.value })} />
                            </div>
                        </div>
                        <div className="func-modal-footer">
                            <button className="secondary-button" onClick={() => setShowModal(false)}>Cancel</button>
                            <button className="primary-button" onClick={handleAddTask}>Add Task →</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Housekeeping;
