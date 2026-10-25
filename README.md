# Sarovar SmartStay hotel

**Intelligent Hotel Management System**
*Hotel: Sarovar Hotel, Boisar, Maharashtra, India*
*Subtitle: AI-Powered Hotel Management, Analytics & Security Platform*

## Current Implementation 
The Sarovar SmartStay system has been upgraded from a static prototype to a full-stack platform.
The following modules are functional:
- **Core Operations:** Dashboard, Rooms, Reservations, Restaurant
- **Kitchen & Dining:** Dedicated kitchen workflow for order tracking and inventory deduction.
- **Housekeeping:** Room status lifecycle (Dirty -> Cleaning -> Inspection -> Clean) with prioritization.
- **Maintenance:** Ticket creation, tracking, and resolution.
- **AI Intelligence Center:** Predictive analytics and explainable recommendations.
- **AI Chatbot:** Intent-based AI assistant for querying data (occupancy, food demand, room availability).

## AI Techniques Implemented
**Implemented (Backend Rule-Based/Statistical & Heuristics):**
- **Occupancy Prediction:** Explainable prediction logic based on current bookings and historical weekend spikes.
- **Food Demand:** Statistical forecasting based on historical orders.
- **Inventory Forecast:** Moving average consumption and safety stock calculation.
- **Staffing Intelligence:** Rule-based heuristic matching occupancy to required workforce.
- **Sentiment Analysis:** Lightweight Natural Language Processing using keyword extraction and topic categorization.
- **AI Chatbot:** NLP intent mapping combined with dynamic database queries.

**Future Scope:**
- Integration of trained Deep Learning ML models.
- LLM integration for dynamic Chatbot context (e.g., Gemini/OpenAI).
- Advanced anomaly detection for cybersecurity.

## Cybersecurity
- **Password Security:** BCrypt password hashing.
- **Authentication:** Stateless JWT Token-based authentication via Spring Security.
- **Authorization:** Role-Based Access Control (RBAC).
- **Audit Logging:** Database-backed tracking of sensitive actions.
- **Future Scope:** Account lockouts based on failed attempts, rate limiting, and risk scores.

## Architecture & Technology Stack
- **Frontend:** React.js, Vite, Axios, Lucide React (Running on Port `5173`)
- **Backend:** Java 17, Spring Boot, Spring Security (Running on Port `8080`)
- **Database:** MySQL

## How to Run

### 1. Database Setup
Ensure MySQL is running on `localhost:3306`.
Execute the SQL scripts in the `database/` folder in order:
1. `01_schema.sql`
2. `02_initial_data.sql`

*(Configure credentials in `backend/src/main/resources/application.properties`)*

### 2. Run Backend (Spring Boot)
Open a terminal in the `backend/` directory:
```bash
mvn clean install
mvn spring-boot:run
```

### 3. Run Frontend (React/Vite)
Open a terminal in the `frontend/` directory:
```bash
npm install
npm run dev
```

### 4. Demo Credentials
- **Admin User:** `admin` / `password123`
- **Staff User:** `staff` / `password123`
