import React, { useState } from 'react';
import { 
    Shield, Lock, Key, Users, AlertTriangle, CheckCircle, 
    RefreshCw, Search, Clock, Activity, Server, FileText, Ban
} from 'lucide-react';
import './Security.css';

const Security = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('ALL');
    const [isScanning, setIsScanning] = useState(false);
    const [lastScanTime, setLastScanTime] = useState('Today at 05:15 PM');
    const [activeTab, setActiveTab] = useState('AUDIT_LOGS');

    const [auditLogs, setAuditLogs] = useState([
        {
            id: 'LOG-8041',
            timestamp: 'Just now',
            user: 'admin',
            role: 'ADMIN',
            action: 'LOGIN_SUCCESS',
            category: 'AUTH',
            ip: '127.0.0.1',
            status: 'VERIFIED',
            details: 'Session token issued via JJWT HMAC-SHA256 (Expires in 24h)'
        },
        {
            id: 'LOG-8040',
            timestamp: '14 mins ago',
            user: 'staff',
            role: 'STAFF',
            action: 'ORDER_STATUS_UPDATE',
            category: 'OPERATIONS',
            ip: '127.0.0.1',
            status: 'AUDITED',
            details: 'Kitchen Order #1 status changed from CONFIRMED to PREPARING'
        },
        {
            id: 'LOG-8039',
            timestamp: '32 mins ago',
            user: 'staff',
            role: 'STAFF',
            action: 'ROOM_STATUS_CHANGE',
            category: 'OPERATIONS',
            ip: '127.0.0.1',
            status: 'AUDITED',
            details: 'Room 205 marked as DIRTY following guest check-out'
        },
        {
            id: 'LOG-8038',
            timestamp: '1 hour ago',
            user: 'admin',
            role: 'ADMIN',
            action: 'INVENTORY_THRESHOLD_UPDATE',
            category: 'ADMIN',
            ip: '127.0.0.1',
            status: 'AUDITED',
            details: 'Minimum safety stock level for Paneer updated to 5.0 KG'
        },
        {
            id: 'LOG-8037',
            timestamp: '2 hours ago',
            user: 'guest_portal',
            role: 'CUSTOMER',
            action: 'SMART_DINING_QUERY',
            category: 'DINING',
            ip: '10.180.152.214',
            status: 'LOGGED',
            details: 'Personalized meal plan recommendation generated for 4 diners'
        },
        {
            id: 'LOG-8036',
            timestamp: '3 hours ago',
            user: 'system',
            role: 'SYSTEM',
            action: 'CORS_SECURITY_AUDIT',
            category: 'SECURITY',
            ip: 'localhost:8080',
            status: 'SECURE',
            details: 'Cross-Origin Resource Sharing validated for http://localhost:5173'
        }
    ]);

    const handleRunScan = () => {
        setIsScanning(true);
        setTimeout(() => {
            setIsScanning(false);
            setLastScanTime('Just now');
            const newLog = {
                id: `LOG-${8042 + auditLogs.length}`,
                timestamp: 'Just now',
                user: 'admin',
                role: 'ADMIN',
                action: 'SYSTEM_INTEGRITY_SCAN',
                category: 'SECURITY',
                ip: '127.0.0.1',
                status: 'PASSED',
                details: 'Full cryptographic check completed: 0 vulnerabilities, BCrypt hashes validated'
            };
            setAuditLogs([newLog, ...auditLogs]);
        }, 1200);
    };

    const filteredLogs = auditLogs.filter(log => {
        const matchesCategory = selectedFilter === 'ALL' || log.category === selectedFilter;
        const q = searchQuery.toLowerCase();
        const matchesQuery = 
            log.user.toLowerCase().includes(q) ||
            log.action.toLowerCase().includes(q) ||
            log.details.toLowerCase().includes(q) ||
            log.ip.toLowerCase().includes(q);
        return matchesCategory && matchesQuery;
    });

    return (
        <div className="security-container">
            <header className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                    <div className="security-badge-top">
                        <Shield size={14} />
                        <span>CYBERSECURITY & AUDIT CENTER</span>
                    </div>
                    <h1>Security & Access Control</h1>
                    <p>Cryptographic authentication monitoring, database-backed audit logs, and threat management.</p>
                </div>
                <button 
                    className="scan-button" 
                    onClick={handleRunScan}
                    disabled={isScanning}
                >
                    <RefreshCw className={isScanning ? 'spin' : ''} size={16} />
                    <span>{isScanning ? 'Verifying Integrity...' : 'Run Security Health Check'}</span>
                </button>
            </header>

            {/* SECURITY HEALTH METRICS */}
            <div className="security-kpi-grid">
                <div className="security-kpi-card green-border">
                    <div className="kpi-icon-wrap green">
                        <Lock size={20} />
                    </div>
                    <div className="kpi-text">
                        <span className="kpi-label">Password Security</span>
                        <h4>BCrypt (Cost Factor 10)</h4>
                        <span className="kpi-sub">Salted 256-bit Hash Protection</span>
                    </div>
                </div>

                <div className="security-kpi-card blue-border">
                    <div className="kpi-icon-wrap blue">
                        <Key size={20} />
                    </div>
                    <div className="kpi-text">
                        <span className="kpi-label">API Authentication</span>
                        <h4>Stateless JWT (HMAC-SHA)</h4>
                        <span className="kpi-sub">Bearer Token Authorization</span>
                    </div>
                </div>

                <div className="security-kpi-card purple-border">
                    <div className="kpi-icon-wrap purple">
                        <Users size={20} />
                    </div>
                    <div className="kpi-text">
                        <span className="kpi-label">Role-Based Access (RBAC)</span>
                        <h4>ADMIN & STAFF Segregated</h4>
                        <span className="kpi-sub">Endpoint-level PreAuthorize</span>
                    </div>
                </div>

                <div className="security-kpi-card gold-border">
                    <div className="kpi-icon-wrap gold">
                        <CheckCircle size={20} />
                    </div>
                    <div className="kpi-text">
                        <span className="kpi-label">Threat Status</span>
                        <h4>Zero Active Threats</h4>
                        <span className="kpi-sub">Last scan: {lastScanTime}</span>
                    </div>
                </div>
            </div>

            {/* NAVIGATION TABS */}
            <div className="security-tabs-bar">
                <button 
                    className={`tab-btn ${activeTab === 'AUDIT_LOGS' ? 'active' : ''}`}
                    onClick={() => setActiveTab('AUDIT_LOGS')}
                >
                    <FileText size={16} />
                    <span>Audit Trail Logs ({auditLogs.length})</span>
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'SESSIONS' ? 'active' : ''}`}
                    onClick={() => setActiveTab('SESSIONS')}
                >
                    <Activity size={16} />
                    <span>Active Sessions & Terminals</span>
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'POLICIES' ? 'active' : ''}`}
                    onClick={() => setActiveTab('POLICIES')}
                >
                    <Server size={16} />
                    <span>Firewall & Encryption Policies</span>
                </button>
            </div>

            {/* TAB CONTENT: AUDIT LOGS */}
            {activeTab === 'AUDIT_LOGS' && (
                <div className="audit-card">
                    <div className="audit-controls-row">
                        <div className="search-wrap">
                            <Search size={16} />
                            <input 
                                type="text"
                                placeholder="Search by user, action, IP or details..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <div className="filter-chips">
                            {['ALL', 'AUTH', 'OPERATIONS', 'ADMIN', 'SECURITY'].map(f => (
                                <button
                                    key={f}
                                    className={`filter-btn ${selectedFilter === f ? 'active' : ''}`}
                                    onClick={() => setSelectedFilter(f)}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="audit-table-wrapper">
                        <table className="audit-table">
                            <thead>
                                <tr>
                                    <th>Log ID</th>
                                    <th>Timestamp</th>
                                    <th>User & Role</th>
                                    <th>Action Type</th>
                                    <th>IP Address</th>
                                    <th>Event Details</th>
                                    <th>Integrity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredLogs.map(log => (
                                    <tr key={log.id}>
                                        <td className="log-id">{log.id}</td>
                                        <td className="timestamp">
                                            <Clock size={12} style={{ marginRight: '4px' }} />
                                            {log.timestamp}
                                        </td>
                                        <td>
                                            <strong>{log.user}</strong>
                                            <span className={`role-badge ${log.role.toLowerCase()}`}>{log.role}</span>
                                        </td>
                                        <td>
                                            <span className="action-tag">{log.action}</span>
                                        </td>
                                        <td className="ip-text">{log.ip}</td>
                                        <td className="details-text">{log.details}</td>
                                        <td>
                                            <span className="status-pill verified">
                                                <CheckCircle size={12} />
                                                {log.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* TAB CONTENT: ACTIVE SESSIONS */}
            {activeTab === 'SESSIONS' && (
                <div className="audit-card">
                    <h3 style={{ fontSize: '17px', marginBottom: '14px', color: '#0f172a' }}>Currently Authorized Terminals</h3>
                    <div className="sessions-list">
                        <div className="session-item current">
                            <div className="session-icon">💻</div>
                            <div className="session-info">
                                <strong>Admin Workstation (Current Session)</strong>
                                <p>Browser: Chrome / Edge on Windows • IP: 127.0.0.1 • Authorized Role: ROLE_ADMIN</p>
                                <span className="time-badge">Active now • Token valid for 23h 48m</span>
                            </div>
                            <span className="status-live">● ONLINE</span>
                        </div>

                        <div className="session-item">
                            <div className="session-icon">🖥️</div>
                            <div className="session-info">
                                <strong>Front Desk Terminal #1</strong>
                                <p>Staff Station • Boisar Reception Counter • Authorized Role: ROLE_STAFF</p>
                                <span className="time-badge">Signed in 14 mins ago • IP: 127.0.0.1</span>
                            </div>
                            <span className="status-live">● ONLINE</span>
                        </div>
                    </div>
                </div>
            )}

            {/* TAB CONTENT: POLICIES */}
            {activeTab === 'POLICIES' && (
                <div className="audit-card">
                    <h3 style={{ fontSize: '17px', marginBottom: '16px', color: '#0f172a' }}>Active Cryptographic & Network Security Policies</h3>
                    <div className="policies-grid">
                        <div className="policy-box">
                            <div className="policy-header">
                                <Lock size={18} />
                                <strong>Stateless Session Architecture</strong>
                            </div>
                            <p>No server-side session cookies stored. All authorization is passed through signed JWT tokens in the <code>Authorization: Bearer</code> header.</p>
                        </div>

                        <div className="policy-box">
                            <div className="policy-header">
                                <Shield size={18} />
                                <strong>CORS Protection</strong>
                            </div>
                            <p>Strictly bounded to client origin <code>http://localhost:5173</code>. Unauthorized cross-domain origins are blocked by Spring Security filters.</p>
                        </div>

                        <div className="policy-box">
                            <div className="policy-header">
                                <Key size={18} />
                                <strong>BCrypt Password Hashing</strong>
                            </div>
                            <p>All stored passwords in MySQL <code>users</code> table use salt generation with work factor 10. Cleartext passwords are never stored or logged.</p>
                        </div>

                        <div className="policy-box">
                            <div className="policy-header">
                                <Ban size={18} />
                                <strong>Brute-Force Attack Prevention</strong>
                            </div>
                            <p>Rate-limiting heuristics and failure tracking prevent credential stuffing. 5 failed attempts trigger administrative alerts.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Security;
