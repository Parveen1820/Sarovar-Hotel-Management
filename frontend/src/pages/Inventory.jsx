import React, { useState } from 'react';
import './FunctionalPages.css';

const Inventory = () => {
    const [items, setItems] = useState([
        { id: "INV-101", name: "Paneer", category: "Food Items", stock: "6 kg", reorderLevel: "5 kg", status: "In Stock" },
        { id: "INV-102", name: "Butter", category: "Food Items", stock: "2 kg", reorderLevel: "3 kg", status: "Low Stock" },
        { id: "INV-103", name: "Towels", category: "Linens", stock: "150 units", reorderLevel: "50 units", status: "In Stock" },
        { id: "INV-104", name: "Soap", category: "Toiletries", stock: "20 units", reorderLevel: "100 units", status: "Out of Stock" }
    ]);
    const [showModal, setShowModal] = useState(false);
    const [newItem, setNewItem] = useState({ name: "", category: "Food Items", stock: "", status: "In Stock" });

    const handleAddItem = () => {
        if (!newItem.name || !newItem.stock) return;
        const item = {
            id: `INV-${100 + items.length + 1}`,
            name: newItem.name,
            category: newItem.category,
            stock: newItem.stock,
            reorderLevel: "N/A",
            status: newItem.status
        };
        setItems([item, ...items]);
        setNewItem({ name: "", category: "Food Items", stock: "", status: "In Stock" });
        setShowModal(false);
    };

    return (
        <div className="functional-container">
            <header className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1>Inventory Management</h1>
                    <p>Track supplies, food items, and other hotel inventory.</p>
                </div>
                <button className="primary-button" onClick={() => setShowModal(true)}>
                    + Add Item
                </button>
            </header>

            <div className="table-wrapper">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Item ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Current Stock</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(i => (
                            <tr key={i.id}>
                                <td>{i.id}</td>
                                <td>{i.name}</td>
                                <td>{i.category}</td>
                                <td>{i.stock}</td>
                                <td>
                                    <span className={`badge ${i.status === 'In Stock' ? 'badge-green' : i.status === 'Low Stock' ? 'badge-orange' : 'badge-red'}`}>
                                        {i.status}
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
                                <p className="module-label">INVENTORY</p>
                                <h3>New Inventory Item</h3>
                                <p>Add a new item to stock</p>
                            </div>
                            <button className="func-modal-close" onClick={() => setShowModal(false)}>×</button>
                        </div>
                        <div className="func-modal-body">
                            <div className="func-form-row">
                                <div className="func-form-field">
                                    <label>Item Name</label>
                                    <input type="text" placeholder="e.g. Milk" value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} />
                                </div>
                                <div className="func-form-field">
                                    <label>Category</label>
                                    <select value={newItem.category} onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}>
                                        <option value="Food Items">Food Items</option>
                                        <option value="Linens">Linens</option>
                                        <option value="Toiletries">Toiletries</option>
                                        <option value="Cleaning Supplies">Cleaning Supplies</option>
                                    </select>
                                </div>
                            </div>
                            <div className="func-form-row">
                                <div className="func-form-field">
                                    <label>Current Stock</label>
                                    <input type="text" placeholder="e.g. 10 kg" value={newItem.stock} onChange={(e) => setNewItem({ ...newItem, stock: e.target.value })} />
                                </div>
                                <div className="func-form-field">
                                    <label>Status</label>
                                    <select value={newItem.status} onChange={(e) => setNewItem({ ...newItem, status: e.target.value })}>
                                        <option value="In Stock">In Stock</option>
                                        <option value="Low Stock">Low Stock</option>
                                        <option value="Out of Stock">Out of Stock</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="func-modal-footer">
                            <button className="secondary-button" onClick={() => setShowModal(false)}>Cancel</button>
                            <button className="primary-button" onClick={handleAddItem}>Add Item →</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Inventory;
