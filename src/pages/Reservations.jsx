import { useState } from "react";
import { rooms as initialRooms } from "../data/rooms";

function Reservations() {
  const [rooms, setRooms] = useState(initialRooms);

  const [reservations, setReservations] = useState([
    {
      id: 1,
      bookingId: "SVR-1001",
      guest: "Rahul Sharma",
      phone: "+91 98765 43210",
      room: "102",
      roomType: "Deluxe Room",
      checkIn: "2026-08-12",
      checkOut: "2026-08-14",
      guests: 2,
      status: "Checked In",
      amount: 7000,
    },
    {
      id: 2,
      bookingId: "SVR-1002",
      guest: "Priya Mehta",
      phone: "+91 98200 12345",
      room: "104",
      roomType: "Suite",
      checkIn: "2026-08-12",
      checkOut: "2026-08-16",
      guests: 3,
      status: "Checked In",
      amount: 26000,
    },
    {
      id: 3,
      bookingId: "SVR-1003",
      guest: "Amit Patel",
      phone: "+91 97654 32109",
      room: "201",
      roomType: "Deluxe Room",
      checkIn: "2026-08-13",
      checkOut: "2026-08-15",
      guests: 2,
      status: "Confirmed",
      amount: 7000,
    },
    {
      id: 4,
      bookingId: "SVR-1004",
      guest: "Sneha Joshi",
      phone: "+91 98980 45678",
      room: "205",
      roomType: "Deluxe Room",
      checkIn: "2026-08-14",
      checkOut: "2026-08-17",
      guests: 2,
      status: "Confirmed",
      amount: 10500,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedReservation, setSelectedReservation] = useState(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    room: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    specialRequest: "",
  });

  const availableRooms = rooms.filter(
    (room) =>
      room.status === "Available" ||
      room.status === "Reserved"
  );

  const filteredReservations = reservations.filter((reservation) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      reservation.guest.toLowerCase().includes(searchText) ||
      reservation.bookingId.toLowerCase().includes(searchText) ||
      reservation.room.toLowerCase().includes(searchText);

    const matchesStatus =
      statusFilter === "All" ||
      reservation.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getNights = () => {
    if (!form.checkIn || !form.checkOut) {
      return 0;
    }

    const checkIn = new Date(form.checkIn);
    const checkOut = new Date(form.checkOut);

    const difference =
      checkOut.getTime() - checkIn.getTime();

    const nights = Math.ceil(
      difference / (1000 * 60 * 60 * 24)
    );

    return nights > 0 ? nights : 0;
  };

  const selectedRoom = rooms.find(
    (room) => room.number === form.room
  );

  const nights = getNights();

  const roomAmount =
    selectedRoom && nights
      ? selectedRoom.price * nights
      : 0;

  const tax = Math.round(roomAmount * 0.12);
  const totalAmount = roomAmount + tax;

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleCreateReservation = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.phone ||
      !form.room ||
      !form.checkIn ||
      !form.checkOut
    ) {
      alert("Please fill all required fields.");
      return;
    }

    if (!selectedRoom) {
      alert("Please select a valid room.");
      return;
    }

    if (nights <= 0) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    const roomAlreadyReserved = reservations.some(
      (reservation) =>
        reservation.room === form.room &&
        reservation.status !== "Cancelled" &&
        reservation.checkIn < form.checkOut &&
        reservation.checkOut > form.checkIn
    );

    if (roomAlreadyReserved) {
      alert(
        "This room is already reserved for the selected dates."
      );
      return;
    }

    const newBookingNumber =
      1000 + reservations.length + 1;

    const newReservation = {
      id: Date.now(),
      bookingId: `SVR-${newBookingNumber}`,
      guest: form.name,
      phone: form.phone,
      room: form.room,
      roomType: selectedRoom.type,
      checkIn: form.checkIn,
      checkOut: form.checkOut,
      guests: Number(form.guests),
      status: "Confirmed",
      amount: totalAmount,
    };

    setReservations((current) => [
      newReservation,
      ...current,
    ]);

    setRooms((currentRooms) =>
      currentRooms.map((room) =>
        room.number === form.room
          ? {
              ...room,
              status: "Reserved",
              guest: form.name,
            }
          : room
      )
    );

    setForm({
      name: "",
      phone: "",
      email: "",
      room: "",
      checkIn: "",
      checkOut: "",
      guests: 1,
      specialRequest: "",
    });

    setShowForm(false);
  };

  const updateReservationStatus = (
    reservationId,
    newStatus
  ) => {
    const reservation = reservations.find(
      (item) => item.id === reservationId
    );

    if (!reservation) {
      return;
    }

    setReservations((current) =>
      current.map((item) =>
        item.id === reservationId
          ? {
              ...item,
              status: newStatus,
            }
          : item
      )
    );

    if (newStatus === "Checked In") {
      setRooms((currentRooms) =>
        currentRooms.map((room) =>
          room.number === reservation.room
            ? {
                ...room,
                status: "Occupied",
                guest: reservation.guest,
              }
            : room
        )
      );
    }

    if (
      newStatus === "Cancelled" ||
      newStatus === "Checked Out"
    ) {
      setRooms((currentRooms) =>
        currentRooms.map((room) =>
          room.number === reservation.room
            ? {
                ...room,
                status: "Available",
                guest: null,
              }
            : room
        )
      );
    }

    setSelectedReservation(null);
  };

  return (
    <div className="reservations-page">

      {/* HEADER */}

      <div className="module-header">
        <div>
          <p className="module-label">
            GUEST SERVICES
          </p>

          <h2>Reservations</h2>

          <p>
            Manage bookings, check-ins and guest stays.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={() => setShowForm(true)}
        >
          + New Reservation
        </button>
      </div>

      {/* SUMMARY */}

      <div className="reservation-summary">

        <div className="reservation-summary-card">
          <span>Today's Bookings</span>
          <strong>{reservations.length}</strong>
        </div>

        <div className="reservation-summary-card">
          <span>Confirmed</span>

          <strong>
            {
              reservations.filter(
                (item) => item.status === "Confirmed"
              ).length
            }
          </strong>
        </div>

        <div className="reservation-summary-card">
          <span>Checked In</span>

          <strong>
            {
              reservations.filter(
                (item) => item.status === "Checked In"
              ).length
            }
          </strong>
        </div>

        <div className="reservation-summary-card">
          <span>Revenue</span>

          <strong>
            ₹
            {reservations
              .reduce(
                (sum, item) => sum + item.amount,
                0
              )
              .toLocaleString()}
          </strong>
        </div>

      </div>

      {/* FILTERS */}

      <div className="reservation-controls">

        <div className="reservation-filters">

          {[
            "All",
            "Confirmed",
            "Checked In",
            "Checked Out",
            "Cancelled",
          ].map((status) => (
            <button
              key={status}
              className={
                statusFilter === status
                  ? "reservation-filter active"
                  : "reservation-filter"
              }
              onClick={() =>
                setStatusFilter(status)
              }
            >
              {status}
            </button>
          ))}

        </div>

        <div className="reservation-search">

          <span>⌕</span>

          <input
            type="text"
            placeholder="Search guest, booking or room..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

      </div>

      {/* TABLE */}

      <div className="reservation-table-panel">

        <div className="table-wrapper">

          <table>

            <thead>
              <tr>
                <th>BOOKING</th>
                <th>GUEST</th>
                <th>ROOM</th>
                <th>CHECK-IN</th>
                <th>CHECK-OUT</th>
                <th>GUESTS</th>
                <th>STATUS</th>
                <th>AMOUNT</th>
              </tr>
            </thead>

            <tbody>

              {filteredReservations.map(
                (reservation) => (
                  <tr
                    key={reservation.id}
                    onClick={() =>
                      setSelectedReservation(
                        reservation
                      )
                    }
                    className="reservation-row"
                  >

                    <td>
                      <strong className="booking-id">
                        {reservation.bookingId}
                      </strong>
                    </td>

                    <td>
                      <div className="guest-cell">

                        <div className="guest-avatar">
                          {reservation.guest.charAt(0)}
                        </div>

                        <div>
                          <strong>
                            {reservation.guest}
                          </strong>

                          <small>
                            {reservation.phone}
                          </small>
                        </div>

                      </div>
                    </td>

                    <td>
                      <strong>
                        {reservation.room}
                      </strong>

                      <small className="table-subtext">
                        {reservation.roomType}
                      </small>
                    </td>

                    <td>
                      {reservation.checkIn}
                    </td>

                    <td>
                      {reservation.checkOut}
                    </td>

                    <td>
                      {reservation.guests}
                    </td>

                    <td>
                      <span
                        className={`reservation-status ${reservation.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {reservation.status}
                      </span>
                    </td>

                    <td>
                      <strong>
                        ₹
                        {reservation.amount.toLocaleString()}
                      </strong>
                    </td>

                  </tr>
                )
              )}

            </tbody>

          </table>

        </div>

        {filteredReservations.length === 0 && (
          <div className="reservation-empty">
            <div>⌕</div>

            <h3>No reservations found</h3>

            <p>
              Try changing your search or filter.
            </p>
          </div>
        )}

      </div>

      {/* NEW RESERVATION MODAL */}

      {showForm && (
        <div
          className="modal-overlay"
          onClick={() => setShowForm(false)}
        >

          <div
            className="reservation-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="modal-header">

              <div>
                <p>GUEST SERVICES</p>

                <h2>
                  New Reservation
                </h2>
              </div>

              <button
                className="modal-close"
                onClick={() =>
                  setShowForm(false)
                }
              >
                ×
              </button>

            </div>

            <form
              onSubmit={handleCreateReservation}
              className="reservation-form"
            >

              {/* GUEST */}

              <div className="form-section-title">
                Guest Information
              </div>

              <div className="form-grid">

                <div className="form-group">
                  <label>
                    Guest Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter full name"
                    value={form.name}
                    onChange={handleFormChange}
                  />
                </div>

                <div className="form-group">
                  <label>
                    Mobile Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={handleFormChange}
                  />
                </div>

                <div className="form-group">
                  <label>
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="guest@email.com"
                    value={form.email}
                    onChange={handleFormChange}
                  />
                </div>

                <div className="form-group">
                  <label>
                    Number of Guests
                  </label>

                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleFormChange}
                  >
                    <option value="1">
                      1 Guest
                    </option>

                    <option value="2">
                      2 Guests
                    </option>

                    <option value="3">
                      3 Guests
                    </option>

                    <option value="4">
                      4 Guests
                    </option>
                  </select>
                </div>

              </div>

              {/* STAY */}

              <div className="form-section-title">
                Stay Details
              </div>

              <div className="form-grid">

                <div className="form-group">
                  <label>
                    Check-in *
                  </label>

                  <input
                    type="date"
                    name="checkIn"
                    value={form.checkIn}
                    onChange={handleFormChange}
                  />
                </div>

                <div className="form-group">
                  <label>
                    Check-out *
                  </label>

                  <input
                    type="date"
                    name="checkOut"
                    value={form.checkOut}
                    onChange={handleFormChange}
                  />
                </div>

                <div className="form-group form-full">
                  <label>
                    Select Room *
                  </label>

                  <select
                    name="room"
                    value={form.room}
                    onChange={handleFormChange}
                  >

                    <option value="">
                      Select available room
                    </option>

                    {availableRooms.map(
                      (room) => (
                        <option
                          key={room.id}
                          value={room.number}
                        >
                          Room {room.number} —{" "}
                          {room.type} — ₹
                          {room.price.toLocaleString()}
                          /night
                        </option>
                      )
                    )}

                  </select>
                </div>

              </div>

              {/* SPECIAL REQUEST */}

              <div className="form-group form-full">

                <label>
                  Special Request
                </label>

                <textarea
                  name="specialRequest"
                  placeholder="Any special requirements..."
                  value={form.specialRequest}
                  onChange={handleFormChange}
                  rows="3"
                />

              </div>

              {/* BILL */}

              <div className="booking-estimate">

                <div className="estimate-heading">
                  <span>
                    Booking Estimate
                  </span>

                  {nights > 0 && (
                    <span>
                      {nights} night
                      {nights > 1 ? "s" : ""}
                    </span>
                  )}
                </div>

                <div className="estimate-row">

                  <span>
                    Room charges
                  </span>

                  <strong>
                    ₹
                    {roomAmount.toLocaleString()}
                  </strong>

                </div>

                <div className="estimate-row">

                  <span>
                    GST & taxes (12%)
                  </span>

                  <strong>
                    ₹{tax.toLocaleString()}
                  </strong>

                </div>

                <div className="estimate-total">

                  <span>
                    Estimated Total
                  </span>

                  <strong>
                    ₹
                    {totalAmount.toLocaleString()}
                  </strong>

                </div>

              </div>

              <div className="form-actions">

                <button
                  type="button"
                  className="secondary-button"
                  onClick={() =>
                    setShowForm(false)
                  }
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="primary-button"
                >
                  Create Reservation
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

      {/* RESERVATION DETAILS MODAL */}

      {selectedReservation && (
        <div
          className="modal-overlay"
          onClick={() =>
            setSelectedReservation(null)
          }
        >

          <div
            className="reservation-modal details-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="modal-header">

              <div>
                <p>BOOKING DETAILS</p>

                <h2>
                  {selectedReservation.bookingId}
                </h2>
              </div>

              <button
                className="modal-close"
                onClick={() =>
                  setSelectedReservation(null)
                }
              >
                ×
              </button>

            </div>

            <div className="booking-detail-guest">

              <div className="large-guest-avatar">
                {selectedReservation.guest.charAt(0)}
              </div>

              <div>

                <h3>
                  {selectedReservation.guest}
                </h3>

                <p>
                  {selectedReservation.phone}
                </p>

              </div>

            </div>

            <div className="booking-detail-grid">

              <div>
                <span>Room</span>

                <strong>
                  {selectedReservation.room}
                </strong>
              </div>

              <div>
                <span>Room Type</span>

                <strong>
                  {selectedReservation.roomType}
                </strong>
              </div>

              <div>
                <span>Check-in</span>

                <strong>
                  {selectedReservation.checkIn}
                </strong>
              </div>

              <div>
                <span>Check-out</span>

                <strong>
                  {selectedReservation.checkOut}
                </strong>
              </div>

              <div>
                <span>Guests</span>

                <strong>
                  {selectedReservation.guests}
                </strong>
              </div>

              <div>
                <span>Total Amount</span>

                <strong>
                  ₹
                  {selectedReservation.amount.toLocaleString()}
                </strong>
              </div>

            </div>

            <div className="booking-actions">

              <p>
                Update Booking Status
              </p>

              <div>

                <button
                  onClick={() =>
                    updateReservationStatus(
                      selectedReservation.id,
                      "Checked In"
                    )
                  }
                >
                  Check In
                </button>

                <button
                  onClick={() =>
                    updateReservationStatus(
                      selectedReservation.id,
                      "Checked Out"
                    )
                  }
                >
                  Check Out
                </button>

                <button
                  className="danger-action"
                  onClick={() =>
                    updateReservationStatus(
                      selectedReservation.id,
                      "Cancelled"
                    )
                  }
                >
                  Cancel
                </button>

              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Reservations;