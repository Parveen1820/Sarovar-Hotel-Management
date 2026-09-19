import { useState } from "react";

function Tables() {
  const [filter, setFilter] = useState("All");

  const tables = [
    {
      id: 1,
      name: "Table 01",
      capacity: 2,
      status: "Available",
      guest: "-",
      amount: 0,
    },
    {
      id: 2,
      name: "Table 02",
      capacity: 2,
      status: "Occupied",
      guest: "Amit Patel",
      amount: 1240,
    },
    {
      id: 3,
      name: "Table 03",
      capacity: 4,
      status: "Reserved",
      guest: "Rahul Sharma",
      amount: 0,
    },
    {
      id: 4,
      name: "Table 04",
      capacity: 4,
      status: "Available",
      guest: "-",
      amount: 0,
    },
    {
      id: 5,
      name: "Table 05",
      capacity: 6,
      status: "Occupied",
      guest: "Neha Patil",
      amount: 2180,
    },
    {
      id: 6,
      name: "Table 06",
      capacity: 4,
      status: "Occupied",
      guest: "Vikram Shah",
      amount: 1560,
    },
    {
      id: 7,
      name: "Table 07",
      capacity: 2,
      status: "Cleaning",
      guest: "-",
      amount: 0,
    },
    {
      id: 8,
      name: "Table 08",
      capacity: 4,
      status: "Available",
      guest: "-",
      amount: 0,
    },
    {
      id: 9,
      name: "Table 09",
      capacity: 6,
      status: "Reserved",
      guest: "Priya Mehta",
      amount: 0,
    },
    {
      id: 10,
      name: "Table 10",
      capacity: 2,
      status: "Available",
      guest: "-",
      amount: 0,
    },
    {
      id: 11,
      name: "Table 11",
      capacity: 4,
      status: "Occupied",
      guest: "Sneha Joshi",
      amount: 860,
    },
    {
      id: 12,
      name: "Table 12",
      capacity: 6,
      status: "Occupied",
      guest: "Karan Mehta",
      amount: 2940,
    },
    {
      id: 13,
      name: "Table 13",
      capacity: 4,
      status: "Available",
      guest: "-",
      amount: 0,
    },
    {
      id: 14,
      name: "Table 14",
      capacity: 2,
      status: "Cleaning",
      guest: "-",
      amount: 0,
    },
    {
      id: 15,
      name: "Table 15",
      capacity: 4,
      status: "Available",
      guest: "-",
      amount: 0,
    },
    {
      id: 16,
      name: "Table 16",
      capacity: 6,
      status: "Reserved",
      guest: "Rohan Desai",
      amount: 0,
    },
    {
      id: 17,
      name: "Table 17",
      capacity: 2,
      status: "Occupied",
      guest: "Anjali Shah",
      amount: 1320,
    },
    {
      id: 18,
      name: "Table 18",
      capacity: 4,
      status: "Available",
      guest: "-",
      amount: 0,
    },
  ];

  const filteredTables =
    filter === "All"
      ? tables
      : tables.filter(
          (table) => table.status === filter
        );

  const availableCount = tables.filter(
    (table) => table.status === "Available"
  ).length;

  const occupiedCount = tables.filter(
    (table) => table.status === "Occupied"
  ).length;

  const reservedCount = tables.filter(
    (table) => table.status === "Reserved"
  ).length;

  const cleaningCount = tables.filter(
    (table) => table.status === "Cleaning"
  ).length;

  const handleTableAction = (table) => {
    alert(
      `${table.name} selected.\nStatus: ${table.status}`
    );
  };

  return (
    <div className="restaurant-tables-page">

      {/* HEADER */}

      <div className="module-header">

        <div>
          <p className="module-label">
            FOOD & BEVERAGE
          </p>

          <h2>
            Table Management
          </h2>

          <p>
            Monitor restaurant tables,
            occupancy and guest seating.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={() =>
            alert(
              "Table reservation feature will be built next."
            )
          }
        >
          + Reserve Table
        </button>

      </div>

      {/* SUMMARY */}

      <div className="restaurant-table-stats">

        <div className="restaurant-table-stat-card">

          <div className="restaurant-table-stat-icon">
            ▦
          </div>

          <div>
            <span>Total Tables</span>
            <strong>{tables.length}</strong>
            <small>Restaurant capacity</small>
          </div>

        </div>

        <div className="restaurant-table-stat-card">

          <div className="restaurant-table-stat-icon">
            ✓
          </div>

          <div>
            <span>Available</span>
            <strong>{availableCount}</strong>
            <small>Ready for guests</small>
          </div>

        </div>

        <div className="restaurant-table-stat-card">

          <div className="restaurant-table-stat-icon">
            ◉
          </div>

          <div>
            <span>Occupied</span>
            <strong>{occupiedCount}</strong>
            <small>Currently serving</small>
          </div>

        </div>

        <div className="restaurant-table-stat-card">

          <div className="restaurant-table-stat-icon">
            ◷
          </div>

          <div>
            <span>Reserved</span>
            <strong>{reservedCount}</strong>
            <small>Upcoming guests</small>
          </div>

        </div>

      </div>

      {/* TABLE PANEL */}

      <section className="dashboard-panel restaurant-tables-panel">

        <div className="panel-header">

          <div>
            <h3>
              Restaurant Tables
            </h3>

            <p>
              Current status of all restaurant tables
            </p>
          </div>

          <div className="table-filter-buttons">

            {[
              "All",
              "Available",
              "Occupied",
              "Reserved",
              "Cleaning",
            ].map((status) => (

              <button
                key={status}
                className={
                  filter === status
                    ? "table-filter active"
                    : "table-filter"
                }
                onClick={() =>
                  setFilter(status)
                }
              >
                {status}
              </button>

            ))}

          </div>

        </div>

        {/* TABLE GRID */}

        <div className="restaurant-table-grid">

          {filteredTables.map((table) => (

            <div
              className={`restaurant-table-card ${table.status
                .toLowerCase()
                .replace(" ", "-")}`}
              key={table.id}
              onClick={() =>
                handleTableAction(table)
              }
            >

              <div className="restaurant-table-card-top">

                <strong>
                  {table.name}
                </strong>

                <span
                  className={`table-status ${table.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {table.status}
                </span>

              </div>

              <div className="restaurant-table-visual">

                <div className="table-circle">

                  <strong>
                    {table.id}
                  </strong>

                </div>

              </div>

              <div className="restaurant-table-details">

                <div>
                  <span>Capacity</span>
                  <strong>
                    {table.capacity} Guests
                  </strong>
                </div>

                <div>
                  <span>Guest</span>
                  <strong>
                    {table.guest}
                  </strong>
                </div>

              </div>

              {table.amount > 0 && (

                <div className="restaurant-table-amount">

                  <span>
                    Current Order
                  </span>

                  <strong>
                    ₹{table.amount.toLocaleString()}
                  </strong>

                </div>

              )}

              <button
                className="table-action-button"
                onClick={(event) => {
                  event.stopPropagation();
                  handleTableAction(table);
                }}
              >
                {table.status === "Available"
                  ? "Seat Guest"
                  : table.status === "Occupied"
                  ? "View Order"
                  : table.status === "Reserved"
                  ? "View Reservation"
                  : "Mark Available"}
              </button>

            </div>

          ))}

        </div>

        {filteredTables.length === 0 && (

          <div className="empty-table-state">

            <div>
              ▦
            </div>

            <h3>
              No tables found
            </h3>

            <p>
              There are no tables with this status.
            </p>

          </div>

        )}

      </section>

      {/* LEGEND */}

      <section className="dashboard-panel restaurant-table-legend-panel">

        <div className="panel-header">

          <div>
            <h3>
              Table Status
            </h3>

            <p>
              Quick reference for restaurant operations
            </p>
          </div>

        </div>

        <div className="table-status-legend">

          <div>
            <span className="legend-dot available"></span>
            Available
          </div>

          <div>
            <span className="legend-dot occupied"></span>
            Occupied
          </div>

          <div>
            <span className="legend-dot reserved"></span>
            Reserved
          </div>

          <div>
            <span className="legend-dot cleaning"></span>
            Cleaning
          </div>

        </div>

      </section>

    </div>
  );
}

export default Tables;