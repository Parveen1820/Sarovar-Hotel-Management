// API service using native fetch — no external dependencies needed
const API_BASE_URL = import.meta.env.VITE_API_URL 
    ? (import.meta.env.VITE_API_URL.endsWith('/api') ? import.meta.env.VITE_API_URL : `${import.meta.env.VITE_API_URL}/api`)
    : 'http://localhost:8080/api';

function getHeaders() {
    const token = localStorage.getItem('token');
    return {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    };
}

async function apiGet(path) {
    const res = await fetch(`${API_BASE_URL}${path}`, { headers: getHeaders() });
    if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
    return { data: await res.json() };
}

async function apiPost(path, body) {
    const res = await fetch(`${API_BASE_URL}${path}`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`POST ${path} failed: ${res.status}`);
    return { data: await res.json() };
}

async function apiPut(path, body) {
    const res = await fetch(`${API_BASE_URL}${path}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`PUT ${path} failed: ${res.status}`);
    return { data: await res.json() };
}

// Auth
export const login = (username, password) => apiPost('/auth/login', { username, password });

// AI Intelligence
export const getOccupancyForecast = () => apiGet('/ai/occupancy-forecast');
export const getFoodDemand = (item) => apiGet(`/ai/food-demand?item=${encodeURIComponent(item)}`);
export const getInventoryForecast = (item) => apiGet(`/ai/inventory-forecast?item=${encodeURIComponent(item)}`);
export const getStaffingInsights = () => apiGet('/ai/staffing-insights');
export const analyzeReview = (reviewText) => apiPost('/ai/review-insights', { review: reviewText });

// Chatbot
export const sendChatbotMessage = (message) => apiPost('/chatbot/message', { message });

// Kitchen
export const getKitchenOrders = () => apiGet('/kitchen/orders');
export const updateKitchenOrderStatus = (id, status) => apiPut(`/kitchen/orders/${id}/status`, { status });

// Housekeeping
export const getHousekeepingRooms = () => apiGet('/housekeeping/rooms');
export const updateHousekeepingRoomStatus = (room, status) => apiPut(`/housekeeping/rooms/${room}/status`, { status });

// Maintenance
export const getMaintenanceRequests = () => apiGet('/maintenance/requests');
export const updateMaintenanceRequestStatus = (id, status) => apiPut(`/maintenance/requests/${id}/status`, { status });

// Smart Dining
export const getSmartDiningRecommendations = (criteria) => apiPost('/dining/recommend', criteria);
export const getDiningMenuItems = () => apiGet('/dining/menu');

