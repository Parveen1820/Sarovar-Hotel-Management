import React, { useState, useEffect } from 'react';
import { getKitchenOrders, updateKitchenOrderStatus } from '../services/api';
import './FunctionalPages.css';

const Kitchen = () => {
    const [orders, setOrders] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newOrder, setNewOrder] = useState({ room: "", items: "", priority: "MEDIUM" });

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await getKitchenOrders();
                setOrders(res.data);
            } catch (err) {
                // Mock data
                setOrders([
                    { id: 1, room: "205", items: "Paneer Butter Masala x2", status: "PREPARING", priority: "HIGH" },
                    { id: 2, room: "102", items: "Veg Biryani x1", status: "CONFIRMED", priority: "MEDIUM" }
                ]);
            }
        };
        fetchOrders();
    }, []);

    const handleUpdate = async (id, newStatus) => {
        try {
            await updateKitchenOrderStatus(id, newStatus);
            setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
        } catch (err) {
            setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
        }
    };

    const handleAddOrder = () => {
        if (!newOrder.room || !newOrder.items) return;
        const order = {
            id: 100 + orders.length + 1,
            room: newOrder.room,
            items: newOrder.items,
            status: "CONFIRMED",
            priority: newOrder.priority
        };
        setOrders([order, ...orders]);
        setNewOrder({ room: "", items: "", priority: "MEDIUM" });
        setShowModal(false);
    };

    return (
        <div className="functional-container">
            <header className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1>Kitchen Management</h1>
                    <p>Track and manage restaurant orders in real-time.</p>
                </div>
                <button className="primary-button" onClick={() => setShowModal(true)}>
                    + New Ticket
                </button>
            </header>

            <div className="table-wrapper">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Target (Room/Table)</th>
                            <th>Items</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(o => (
                            <tr key={o.id}>
                                <td>#{o.id}</td>
                                <td>{o.room}</td>
                                <td>{o.items}</td>
                                <td><span className={`badge priority-${o.priority.toLowerCase()}`}>{o.priority}</span></td>
                                <td><span className="badge status">{o.status}</span></td>
                                <td>
                                    {o.status === 'CONFIRMED' && <button onClick={() => handleUpdate(o.id, 'PREPARING')}>Start Prep</button>}
                                    {o.status === 'PREPARING' && <button onClick={() => handleUpdate(o.id, 'READY')}>Mark Ready</button>}
                                    {o.status === 'READY' && <button onClick={() => handleUpdate(o.id, 'SERVED')}>Serve (Deduct Inventory)</button>}
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
                                <p className="module-label">KITCHEN</p>
                                <h3>New Kitchen Ticket</h3>
                                <p>Add a new order</p>
                            </div>
                            <button className="func-modal-close" onClick={() => setShowModal(false)}>×</button>
                        </div>
                        <div className="func-modal-body">
                            <div className="func-form-row">
                                <div className="func-form-field">
                                    <label>Target (Room/Table)</label>
                                    <input type="text" placeholder="e.g. 101 or T-5" value={newOrder.room} onChange={(e) => setNewOrder({ ...newOrder, room: e.target.value })} />
                                </div>
                                <div className="func-form-field">
                                    <label>Priority</label>
                                    <select value={newOrder.priority} onChange={(e) => setNewOrder({ ...newOrder, priority: e.target.value })}>
                                        <option value="LOW">LOW</option>
                                        <option value="MEDIUM">MEDIUM</option>
                                        <option value="HIGH">HIGH</option>
                                    </select>
                                </div>
                            </div>
                            <div className="func-form-field">
                                <label>Items</label>
                                <textarea placeholder="e.g. Veg Biryani x2, Coke x1" value={newOrder.items} onChange={(e) => setNewOrder({ ...newOrder, items: e.target.value })} />
                            </div>
                        </div>
                        <div className="func-modal-footer">
                            <button className="secondary-button" onClick={() => setShowModal(false)}>Cancel</button>
                            <button className="primary-button" onClick={handleAddOrder}>Add Ticket →</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Kitchen;
