import { useState } from "react";
import { rooms as initialRooms } from "../data/rooms";

function Rooms() {
  const [rooms, setRooms] = useState(initialRooms);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(null);

  const filteredRooms = rooms.filter((room) => {
    const matchesFilter =
      filter === "All" ||
      room.status === filter;

    const searchText = search.toLowerCase();

    const matchesSearch =
      room.number
        .toLowerCase()
        .includes(searchText) ||
      room.type
        .toLowerCase()
        .includes(searchText) ||
      (room.guest &&
        room.guest
          .toLowerCase()
          .includes(searchText));

    return matchesFilter && matchesSearch;
  });

  const counts = {
    All: rooms.length,

    Available: rooms.filter(
      (room) => room.status === "Available"
    ).length,

    Occupied: rooms.filter(
      (room) => room.status === "Occupied"
    ).length,

    Reserved: rooms.filter(
      (room) => room.status === "Reserved"
    ).length,

    Cleaning: rooms.filter(
      (room) => room.status === "Cleaning"
    ).length,
  };

  const changeStatus = (id, status) => {
    setRooms((currentRooms) =>
      currentRooms.map((room) =>
        room.id === id
          ? {
              ...room,
              status,
              guest:
                status === "Available"
                  ? null
                  : room.guest,
            }
          : room
      )
    );

    setSelectedRoom(null);
  };

  return (
    <div className="rooms-page">

      {/* HEADER */}

      <div className="module-header">

        <div>
          <p className="module-label">
            HOTEL OPERATIONS
          </p>

          <h2>Room Management</h2>

          <p>
            Monitor and manage all 35 hotel rooms.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={() =>
            alert(
              "Room creation module will be available soon."
            )
          }
        >
          + Add Room
        </button>

      </div>

      {/* SUMMARY */}

      <div className="room-summary">

        <div className="room-summary-card">
          <span className="summary-number">
            {counts.All}
          </span>

          <span>Total Rooms</span>
        </div>

        <div className="room-summary-card available-summary">
          <span className="summary-number">
            {counts.Available}
          </span>

          <span>Available</span>
        </div>

        <div className="room-summary-card occupied-summary">
          <span className="summary-number">
            {counts.Occupied}
          </span>

          <span>Occupied</span>
        </div>

        <div className="room-summary-card reserved-summary">
          <span className="summary-number">
            {counts.Reserved}
          </span>

          <span>Reserved</span>
        </div>

        <div className="room-summary-card cleaning-summary">
          <span className="summary-number">
            {counts.Cleaning}
          </span>

          <span>Cleaning</span>
        </div>

      </div>

      {/* CONTROLS */}

      <div className="rooms-controls">

        <div className="room-filters">

          {[
            "All",
            "Available",
            "Occupied",
            "Reserved",
            "Cleaning",
          ].map((item) => (

            <button
              key={item}
              className={
                filter === item
                  ? "room-filter active"
                  : "room-filter"
              }
              onClick={() => setFilter(item)}
            >

              {item}

              <span>
                {counts[item]}
              </span>

            </button>

          ))}

        </div>

        <div className="room-search">

          <span>⌕</span>

          <input
            type="text"
            placeholder="Search room or guest..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

      </div>

      {/* ROOMS */}

      <div className="rooms-grid">

        {filteredRooms.map((room) => (

          <div
            className={`room-card ${room.status
              .toLowerCase()
              .replace(" ", "-")}`}
            key={room.id}
            onClick={() =>
              setSelectedRoom(room)
            }
          >

            <div className="room-card-top">

              <div className="room-card-number">
                {room.number}
              </div>

              <span
                className={`room-card-status ${room.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {room.status}
              </span>

            </div>

            <div className="room-card-type">
              {room.type}
            </div>

            <div className="room-card-info">

              <div>
                <span>Floor</span>
                <strong>
                  {room.floor}
                </strong>
              </div>

              <div>
                <span>Guests</span>
                <strong>
                  {room.capacity}
                </strong>
              </div>

              <div>
                <span>Rate</span>
                <strong>
                  ₹{room.price.toLocaleString()}
                </strong>
              </div>

            </div>

            <div className="room-card-bottom">

              {room.guest ? (

                <div className="room-current-guest">

                  <div className="mini-avatar">
                    {room.guest.charAt(0)}
                  </div>

                  <span>
                    {room.guest}
                  </span>

                </div>

              ) : (

                <span className="no-guest">
                  No current guest
                </span>

              )}

              <span className="room-arrow">
                →
              </span>

            </div>

          </div>

        ))}

      </div>

      {/* EMPTY STATE */}

      {filteredRooms.length === 0 && (

        <div className="empty-state">

          <div>⌕</div>

          <h3>No rooms found</h3>

          <p>
            Try changing your search or filter.
          </p>

        </div>

      )}

      {/* ROOM MODAL */}

      {selectedRoom && (

        <div
          className="modal-overlay"
          onClick={() =>
            setSelectedRoom(null)
          }
        >

          <div
            className="room-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="modal-header">

              <div>

                <p>ROOM DETAILS</p>

                <h2>
                  Room {selectedRoom.number}
                </h2>

              </div>

              <button
                className="modal-close"
                onClick={() =>
                  setSelectedRoom(null)
                }
              >
                ×
              </button>

            </div>

            <div className="modal-room-status">

              <span
                className={`room-card-status ${selectedRoom.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {selectedRoom.status}
              </span>

              <strong>
                {selectedRoom.type}
              </strong>

            </div>

            <div className="room-detail-grid">

              <div>
                <span>Floor</span>

                <strong>
                  Floor {selectedRoom.floor}
                </strong>
              </div>

              <div>
                <span>Capacity</span>

                <strong>
                  {selectedRoom.capacity} Guests
                </strong>
              </div>

              <div>
                <span>Room Rate</span>

                <strong>
                  ₹{selectedRoom.price.toLocaleString()}
                </strong>
              </div>

              <div>
                <span>Current Guest</span>

                <strong>
                  {selectedRoom.guest || "None"}
                </strong>
              </div>

            </div>

            <div className="modal-actions">

              <p>
                Change Room Status
              </p>

              <div>

                <button
                  onClick={() =>
                    changeStatus(
                      selectedRoom.id,
                      "Available"
                    )
                  }
                >
                  Available
                </button>

                <button
                  onClick={() =>
                    changeStatus(
                      selectedRoom.id,
                      "Occupied"
                    )
                  }
                >
                  Occupied
                </button>

                <button
                  onClick={() =>
                    changeStatus(
                      selectedRoom.id,
                      "Reserved"
                    )
                  }
                >
                  Reserved
                </button>

                <button
                  onClick={() =>
                    changeStatus(
                      selectedRoom.id,
                      "Cleaning"
                    )
                  }
                >
                  Cleaning
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Rooms;