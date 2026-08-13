import { useState } from "react";
import StatCard from "../components/StatCard";

function Dashboard() {
  const [showInsight, setShowInsight] = useState(false);

  const rooms = [
    {
      number: "101",
      type: "Deluxe Room",
      guest: "Available",
      status: "available",
    },
    {
      number: "102",
      type: "Deluxe Room",
      guest: "Rahul Sharma",
      status: "occupied",
    },
    {
      number: "103",
      type: "Premium Room",
      guest: "Available",
      status: "available",
    },
    {
      number: "104",
      type: "Suite",
      guest: "Priya Mehta",
      status: "occupied",
    },
    {
      number: "105",
      type: "Deluxe Room",
      guest: "Cleaning",
      status: "cleaning",
    },
    {
      number: "106",
      type: "Premium Room",
      guest: "Available",
      status: "available",
    },
  ];

  const reservations = [
    {
      guest: "Rahul Sharma",
      room: "102",
      checkIn: "12 Aug",
      checkOut: "14 Aug",
      status: "Checked In",
    },
    {
      guest: "Priya Mehta",
      room: "104",
      checkIn: "12 Aug",
      checkOut: "16 Aug",
      status: "Checked In",
    },
    {
      guest: "Amit Patel",
      room: "201",
      checkIn: "13 Aug",
      checkOut: "15 Aug",
      status: "Confirmed",
    },
    {
      guest: "Sneha Joshi",
      room: "205",
      checkIn: "14 Aug",
      checkOut: "17 Aug",
      status: "Confirmed",
    },
  ];

  const handleNewReservation = () => {
    alert(
      "Please open Reservations from the sidebar to create a new reservation."
    );
  };

  const handleViewRooms = () => {
    alert(
      "Please open Room Management from the sidebar to view all rooms."
    );
  };

  return (
    <div className="dashboard-page">

      {/* WELCOME */}

      <div className="dashboard-welcome">

        <div>

          <p className="dashboard-date">
            Thursday, 13 August 2026
          </p>

          <h2>
            Good evening, Admin
          </h2>

          <p>
            Here's what's happening at Sarovar Hotel today.
          </p>

        </div>

        <button
          className="primary-button"
          onClick={handleNewReservation}
        >
          + New Reservation
        </button>

      </div>

      {/* STATISTICS */}

      <div className="stats-grid">

        <StatCard
          title="Total Rooms"
          value="35"
          subtitle="Hotel capacity"
          icon="▣"
        />

        <StatCard
          title="Occupied Rooms"
          value="24"
          subtitle="68.6% occupancy"
          icon="⌂"
          trend="+8.2%"
        />

        <StatCard
          title="Today's Check-ins"
          value="08"
          subtitle="3 pending arrival"
          icon="→"
          trend="+12%"
        />

        <StatCard
          title="Today's Revenue"
          value="₹48,650"
          subtitle="Room + restaurant"
          icon="₹"
          trend="+14.5%"
        />

      </div>

      {/* MAIN GRID */}

      <div className="dashboard-grid">

        {/* ROOM STATUS */}

        <section className="dashboard-panel room-panel">

          <div className="panel-header">

            <div>
              <h3>Room Status</h3>

              <p>
                Live room availability
              </p>
            </div>

            <button
              className="text-button"
              onClick={handleViewRooms}
            >
              View all →
            </button>

          </div>

          <div className="room-status-grid">

            {rooms.map((room) => (

              <div
                className={`room-status-card ${room.status}`}
                key={room.number}
              >

                <div className="room-number">
                  {room.number}
                </div>

                <div className="room-type">
                  {room.type}
                </div>

                <div className="room-guest">
                  {room.guest}
                </div>

                <div className="room-status-label">

                  <span></span>

                  {room.status === "available"
                    ? "Available"
                    : room.status === "occupied"
                    ? "Occupied"
                    : "Cleaning"}

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* AI CARD */}

        <section className="dashboard-panel ai-dashboard-card">

          <div className="ai-card-heading">

            <div className="ai-icon">
              ✦
            </div>

            <div>

              <p>
                SMART HOTEL AI
              </p>

              <h3>
                Today's Insight
              </h3>

            </div>

          </div>

          <div className="ai-insight-number">
            74%
          </div>

          <p className="ai-insight-title">
            Predicted occupancy for tomorrow
          </p>

          <div className="prediction-bar">

            <div></div>

          </div>

          <div className="prediction-info">

            <span>
              Current: 68.6%
            </span>

            <span>
              Forecast: 74%
            </span>

          </div>

          <div className="ai-recommendation">

            <span>
              ✦
            </span>

            <p>
              Based on current bookings, demand is
              expected to increase tomorrow.
              Consider preparing additional housekeeping
              capacity.
            </p>

          </div>

          <button
            className="ai-button"
            onClick={() =>
              setShowInsight(!showInsight)
            }
          >
            {showInsight
              ? "Hide AI Insights ↑"
              : "View AI Insights →"}
          </button>

          {showInsight && (

            <div className="ai-expanded-insight">

              <strong>
                Operational Recommendation
              </strong>

              <p>
                Expected occupancy is trending upward.
                Prioritize housekeeping for currently
                occupied rooms and prepare available
                rooms for upcoming arrivals.
              </p>

              <div className="ai-insight-stats">

                <div>
                  <span>
                    Current Occupancy
                  </span>

                  <strong>
                    68.6%
                  </strong>
                </div>

                <div>
                  <span>
                    Predicted
                  </span>

                  <strong>
                    74%
                  </strong>
                </div>

                <div>
                  <span>
                    Expected Increase
                  </span>

                  <strong>
                    +5.4%
                  </strong>
                </div>

              </div>

            </div>

          )}

        </section>

      </div>

      {/* RESERVATIONS */}

      <section className="dashboard-panel reservations-panel">

        <div className="panel-header">

          <div>

            <h3>
              Today's Reservations
            </h3>

            <p>
              Recent and upcoming guest bookings
            </p>

          </div>

          <button
            className="text-button"
            onClick={() =>
              alert(
                "Please open Reservations from the sidebar to view all bookings."
              )
            }
          >
            View all →
          </button>

        </div>

        <div className="table-wrapper">

          <table>

            <thead>

              <tr>

                <th>
                  GUEST
                </th>

                <th>
                  ROOM
                </th>

                <th>
                  CHECK-IN
                </th>

                <th>
                  CHECK-OUT
                </th>

                <th>
                  STATUS
                </th>

              </tr>

            </thead>

            <tbody>

              {reservations.map(
                (reservation) => (

                  <tr
                    key={`${reservation.guest}-${reservation.room}`}
                  >

                    <td>

                      <div className="guest-cell">

                        <div className="guest-avatar">
                          {reservation.guest.charAt(0)}
                        </div>

                        <strong>
                          {reservation.guest}
                        </strong>

                      </div>

                    </td>

                    <td>
                      Room {reservation.room}
                    </td>

                    <td>
                      {reservation.checkIn}
                    </td>

                    <td>
                      {reservation.checkOut}
                    </td>

                    <td>

                      <span
                        className={
                          reservation.status ===
                          "Checked In"
                            ? "status-pill checked"
                            : "status-pill confirmed"
                        }
                      >
                        {reservation.status}
                      </span>

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;