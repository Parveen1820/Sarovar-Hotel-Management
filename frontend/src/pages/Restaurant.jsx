import { useState } from "react";
import Menu from "./Menu";

function Restaurant() {
  const [activeTab, setActiveTab] = useState("Overview");

  const [orderSearch, setOrderSearch] = useState("");
  const [orderFilter, setOrderFilter] = useState("All");

  const [showOrderForm, setShowOrderForm] = useState(false);

  const [newOrderType, setNewOrderType] = useState("Restaurant");
  const [newOrderGuest, setNewOrderGuest] = useState("");
  const [newOrderLocation, setNewOrderLocation] = useState("");
  const [newOrderItems, setNewOrderItems] = useState([]);
  const [selectedMenuItem, setSelectedMenuItem] = useState("");

  const stats = [
    {
      title: "Today's Sales",
      value: "₹18,450",
      subtitle: "+12.5% from yesterday",
      icon: "₹",
    },
    {
      title: "Orders Today",
      value: "47",
      subtitle: "8 orders in progress",
      icon: "◉",
    },
    {
      title: "Tables Occupied",
      value: "12 / 18",
      subtitle: "66.7% occupancy",
      icon: "▦",
    },
    {
      title: "Room Service",
      value: "09",
      subtitle: "3 pending delivery",
      icon: "⌂",
    },
  ];

  const recentOrders = [
    {
      id: "ORD-2048",
      type: "Restaurant",
      table: "Table 06",
      guest: "Amit Patel",
      amount: 1240,
      status: "Preparing",
    },
    {
      id: "ORD-2047",
      type: "Room Service",
      table: "Room 205",
      guest: "Sneha Joshi",
      amount: 860,
      status: "Ready",
    },
    {
      id: "ORD-2046",
      type: "Restaurant",
      table: "Table 12",
      guest: "Vikram Shah",
      amount: 2180,
      status: "Served",
    },
    {
      id: "ORD-2045",
      type: "Room Service",
      table: "Room 104",
      guest: "Priya Mehta",
      amount: 1540,
      status: "Preparing",
    },
    {
      id: "ORD-2044",
      type: "Restaurant",
      table: "Table 03",
      guest: "Rahul Sharma",
      amount: 920,
      status: "Completed",
    },
  ];

  const [orders, setOrders] = useState([
    {
      id: "ORD-2048",
      type: "Restaurant",
      location: "Table 06",
      guest: "Amit Patel",
      items: "Paneer Butter Masala, Butter Naan",
      amount: 1240,
      time: "12:42 PM",
      status: "Preparing",
    },
    {
      id: "ORD-2047",
      type: "Room Service",
      location: "Room 205",
      guest: "Sneha Joshi",
      items: "Chicken Biryani, Coke",
      amount: 860,
      time: "12:35 PM",
      status: "Ready",
    },
    {
      id: "ORD-2046",
      type: "Restaurant",
      location: "Table 12",
      guest: "Vikram Shah",
      items: "Veg Thali, Gulab Jamun",
      amount: 2180,
      time: "12:18 PM",
      status: "Served",
    },
    {
      id: "ORD-2045",
      type: "Room Service",
      location: "Room 104",
      guest: "Priya Mehta",
      items: "Masala Dosa, Tea",
      amount: 1540,
      time: "11:56 AM",
      status: "Preparing",
    },
    {
      id: "ORD-2044",
      type: "Restaurant",
      location: "Table 03",
      guest: "Rahul Sharma",
      items: "Veg Hakka Noodles, Manchurian",
      amount: 920,
      time: "11:42 AM",
      status: "Completed",
    },
    {
      id: "ORD-2043",
      type: "Restaurant",
      location: "Table 08",
      guest: "Karan Mehta",
      items: "Chicken Tikka, Naan",
      amount: 1620,
      time: "11:30 AM",
      status: "Completed",
    },
    {
      id: "ORD-2042",
      type: "Room Service",
      location: "Room 312",
      guest: "Rohan Desai",
      items: "Pasta Alfredo, Fresh Juice",
      amount: 1180,
      time: "11:15 AM",
      status: "Ready",
    },
    {
      id: "ORD-2041",
      type: "Restaurant",
      location: "Table 14",
      guest: "Pooja Mehta",
      items: "Paneer Tikka, Biryani",
      amount: 1940,
      time: "10:48 AM",
      status: "Completed",
    },
  ]);

  const popularItems = [
    {
      name: "Paneer Butter Masala",
      category: "Main Course",
      orders: 28,
      price: 320,
    },
    {
      name: "Chicken Biryani",
      category: "Rice & Biryani",
      orders: 24,
      price: 380,
    },
    {
      name: "Masala Dosa",
      category: "South Indian",
      orders: 21,
      price: 180,
    },
    {
      name: "Veg Hakka Noodles",
      category: "Chinese",
      orders: 18,
      price: 260,
    },
  ];

  const menuItems = [
    {
      name: "Paneer Butter Masala",
      category: "Main Course",
      price: 320,
    },
    {
      name: "Chicken Biryani",
      category: "Rice & Biryani",
      price: 380,
    },
    {
      name: "Masala Dosa",
      category: "South Indian",
      price: 180,
    },
    {
      name: "Veg Hakka Noodles",
      category: "Chinese",
      price: 260,
    },
    {
      name: "Butter Naan",
      category: "Indian Bread",
      price: 80,
    },
    {
      name: "Chicken Tikka",
      category: "Starters",
      price: 420,
    },
    {
      name: "Paneer Tikka",
      category: "Starters",
      price: 350,
    },
    {
      name: "Veg Thali",
      category: "Main Course",
      price: 450,
    },
    {
      name: "Gulab Jamun",
      category: "Dessert",
      price: 120,
    },
    {
      name: "Pasta Alfredo",
      category: "Italian",
      price: 340,
    },
    {
      name: "Fresh Juice",
      category: "Beverages",
      price: 140,
    },
    {
      name: "Coke",
      category: "Beverages",
      price: 90,
    },
    {
      name: "Manchurian",
      category: "Chinese",
      price: 280,
    },
    {
      name: "Tea",
      category: "Beverages",
      price: 70,
    },
  ];

  const tables = [
    {
      number: "01",
      capacity: 2,
      status: "Available",
      guest: "",
      amount: 0,
    },
    {
      number: "02",
      capacity: 4,
      status: "Occupied",
      guest: "Rahul Sharma",
      amount: 1850,
    },
    {
      number: "03",
      capacity: 4,
      status: "Reserved",
      guest: "Neha Patil",
      amount: 0,
    },
    {
      number: "04",
      capacity: 6,
      status: "Occupied",
      guest: "Vikram Shah",
      amount: 2180,
    },
    {
      number: "05",
      capacity: 2,
      status: "Available",
      guest: "",
      amount: 0,
    },
    {
      number: "06",
      capacity: 4,
      status: "Occupied",
      guest: "Amit Patel",
      amount: 1240,
    },
    {
      number: "07",
      capacity: 6,
      status: "Cleaning",
      guest: "",
      amount: 0,
    },
    {
      number: "08",
      capacity: 2,
      status: "Available",
      guest: "",
      amount: 0,
    },
    {
      number: "09",
      capacity: 4,
      status: "Occupied",
      guest: "Karan Mehta",
      amount: 1620,
    },
    {
      number: "10",
      capacity: 4,
      status: "Reserved",
      guest: "Priya Joshi",
      amount: 0,
    },
    {
      number: "11",
      capacity: 2,
      status: "Available",
      guest: "",
      amount: 0,
    },
    {
      number: "12",
      capacity: 6,
      status: "Occupied",
      guest: "Sneha Joshi",
      amount: 2940,
    },
    {
      number: "13",
      capacity: 4,
      status: "Occupied",
      guest: "Aditya Shah",
      amount: 980,
    },
    {
      number: "14",
      capacity: 2,
      status: "Available",
      guest: "",
      amount: 0,
    },
    {
      number: "15",
      capacity: 4,
      status: "Cleaning",
      guest: "",
      amount: 0,
    },
    {
      number: "16",
      capacity: 6,
      status: "Occupied",
      guest: "Rohan Desai",
      amount: 2360,
    },
    {
      number: "17",
      capacity: 4,
      status: "Reserved",
      guest: "Pooja Mehta",
      amount: 0,
    },
    {
      number: "18",
      capacity: 2,
      status: "Available",
      guest: "",
      amount: 0,
    },
  ];

  const availableTables = tables.filter(
    (table) => table.status === "Available"
  ).length;

  const occupiedTables = tables.filter(
    (table) => table.status === "Occupied"
  ).length;

  const reservedTables = tables.filter(
    (table) => table.status === "Reserved"
  ).length;

  const cleaningTables = tables.filter(
    (table) => table.status === "Cleaning"
  ).length;

  const getStatusClass = (status) => {
    return `restaurant-table-status ${status
      .toLowerCase()
      .replace(" ", "-")}`;
  };

  const getOrderStatusClass = (status) => {
    return `restaurant-order-status ${status
      .toLowerCase()
      .replace(" ", "-")}`;
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(orderSearch.toLowerCase()) ||
      order.guest.toLowerCase().includes(orderSearch.toLowerCase()) ||
      order.location.toLowerCase().includes(orderSearch.toLowerCase()) ||
      order.items.toLowerCase().includes(orderSearch.toLowerCase());

    const matchesFilter =
      orderFilter === "All" || order.status === orderFilter;

    return matchesSearch && matchesFilter;
  });

  const updateOrderStatus = (id, newStatus) => {
    setOrders((currentOrders) =>
      currentOrders.map((order) =>
        order.id === id
          ? { ...order, status: newStatus }
          : order
      )
    );
  };

  const orderCounts = {
    all: orders.length,
    preparing: orders.filter(
      (order) => order.status === "Preparing"
    ).length,
    ready: orders.filter(
      (order) => order.status === "Ready"
    ).length,
    served: orders.filter(
      (order) => order.status === "Served"
    ).length,
    completed: orders.filter(
      (order) => order.status === "Completed"
    ).length,
  };

  /* =========================
     NEW ORDER FUNCTIONS
  ========================= */

  const openNewOrder = () => {
    setNewOrderType("Restaurant");
    setNewOrderGuest("");
    setNewOrderLocation("");
    setNewOrderItems([]);
    setSelectedMenuItem("");
    setShowOrderForm(true);
  };

  const closeNewOrder = () => {
    setShowOrderForm(false);
  };

  const addMenuItem = () => {
    if (!selectedMenuItem) {
      return;
    }

    const item = menuItems.find(
      (menuItem) => menuItem.name === selectedMenuItem
    );

    if (!item) {
      return;
    }

    setNewOrderItems((currentItems) => {
      const existingItem = currentItems.find(
        (orderItem) => orderItem.name === item.name
      );

      if (existingItem) {
        return currentItems.map((orderItem) =>
          orderItem.name === item.name
            ? {
                ...orderItem,
                quantity: orderItem.quantity + 1,
              }
            : orderItem
        );
      }

      return [
        ...currentItems,
        {
          name: item.name,
          price: item.price,
          quantity: 1,
        },
      ];
    });

    setSelectedMenuItem("");
  };

  const increaseItemQuantity = (itemName) => {
    setNewOrderItems((currentItems) =>
      currentItems.map((item) =>
        item.name === itemName
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseItemQuantity = (itemName) => {
    setNewOrderItems((currentItems) =>
      currentItems
        .map((item) =>
          item.name === itemName
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (itemName) => {
    setNewOrderItems((currentItems) =>
      currentItems.filter(
        (item) => item.name !== itemName
      )
    );
  };

  const orderSubtotal = newOrderItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const orderTax = Math.round(
    orderSubtotal * 0.05
  );

  const orderTotal = orderSubtotal + orderTax;

  const createNewOrder = () => {
    if (!newOrderGuest.trim()) {
      alert("Please enter guest name.");
      return;
    }

    if (!newOrderLocation.trim()) {
      alert(
        newOrderType === "Restaurant"
          ? "Please enter table number."
          : "Please enter room number."
      );
      return;
    }

    if (newOrderItems.length === 0) {
      alert("Please add at least one menu item.");
      return;
    }

    const nextOrderNumber =
      2049 + orders.length - 8;

    const newOrder = {
      id: `ORD-${nextOrderNumber}`,
      type: newOrderType,
      location: newOrderLocation,
      guest: newOrderGuest,
      items: newOrderItems
        .map(
          (item) =>
            `${item.name} x${item.quantity}`
        )
        .join(", "),
      amount: orderTotal,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      status: "Preparing",
    };

    setOrders((currentOrders) => [
      newOrder,
      ...currentOrders,
    ]);

    setShowOrderForm(false);
    setActiveTab("Orders");

    setNewOrderGuest("");
    setNewOrderLocation("");
    setNewOrderItems([]);
    setSelectedMenuItem("");
  };

  return (
    <div className="restaurant-page">

      {/* HEADER */}

      <div className="module-header">

        <div>
          <p className="module-label">
            FOOD & BEVERAGE
          </p>

          <h2>
            Restaurant Management
          </h2>

          <p>
            Manage restaurant operations,
            orders, tables and room service.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={openNewOrder}
        >
          + New Order
        </button>

      </div>

      {/* TABS */}

      <div className="restaurant-tabs">

        {[
          "Overview",
          "Menu",
          "Tables",
          "Orders",
          "Room Service",
        ].map((tab) => (

          <button
            key={tab}
            className={
              activeTab === tab
                ? "restaurant-tab active"
                : "restaurant-tab"
            }
            onClick={() =>
              setActiveTab(tab)
            }
          >
            {tab}
          </button>

        ))}

      </div>

      {/* MENU */}

      {activeTab === "Menu" && (

        <div className="restaurant-menu-container">
          <Menu />
        </div>

      )}

      {/* OVERVIEW */}

      {activeTab === "Overview" && (

        <>

          <div className="restaurant-stats">

            {stats.map((stat) => (

              <div
                className="restaurant-stat-card"
                key={stat.title}
              >

                <div className="restaurant-stat-icon">
                  {stat.icon}
                </div>

                <div>

                  <span>
                    {stat.title}
                  </span>

                  <strong>
                    {stat.value}
                  </strong>

                  <small>
                    {stat.subtitle}
                  </small>

                </div>

              </div>

            ))}

          </div>

          <div className="restaurant-dashboard-grid">

            {/* RECENT ORDERS */}

            <section className="dashboard-panel restaurant-orders-panel">

              <div className="panel-header">

                <div>
                  <h3>
                    Recent Orders
                  </h3>

                  <p>
                    Latest restaurant and room service orders
                  </p>
                </div>

                <button
                  className="text-button"
                  onClick={() =>
                    setActiveTab("Orders")
                  }
                >
                  View all →
                </button>

              </div>

              <div className="table-wrapper">

                <table>

                  <thead>

                    <tr>
                      <th>ORDER</th>
                      <th>TYPE</th>
                      <th>GUEST</th>
                      <th>LOCATION</th>
                      <th>AMOUNT</th>
                      <th>STATUS</th>
                    </tr>

                  </thead>

                  <tbody>

                    {recentOrders.map(
                      (order) => (

                        <tr key={order.id}>

                          <td>
                            <strong className="booking-id">
                              {order.id}
                            </strong>
                          </td>

                          <td>
                            {order.type}
                          </td>

                          <td>
                            <strong>
                              {order.guest}
                            </strong>
                          </td>

                          <td>
                            {order.table}
                          </td>

                          <td>
                            <strong>
                              ₹
                              {order.amount.toLocaleString()}
                            </strong>
                          </td>

                          <td>

                            <span
                              className={getOrderStatusClass(
                                order.status
                              )}
                            >
                              {order.status}
                            </span>

                          </td>

                        </tr>

                      )
                    )}

                  </tbody>

                </table>

              </div>

            </section>

            {/* POPULAR ITEMS */}

            <section className="dashboard-panel popular-items-panel">

              <div className="panel-header">

                <div>
                  <h3>
                    Popular Items
                  </h3>

                  <p>
                    Best-selling dishes today
                  </p>
                </div>

                <button
                  className="text-button"
                  onClick={() =>
                    setActiveTab("Menu")
                  }
                >
                  Manage menu →
                </button>

              </div>

              <div className="popular-items-list">

                {popularItems.map(
                  (item, index) => (

                    <div
                      className="popular-item"
                      key={item.name}
                    >

                      <div className="popular-item-number">
                        {String(
                          index + 1
                        ).padStart(2, "0")}
                      </div>

                      <div className="popular-item-info">

                        <strong>
                          {item.name}
                        </strong>

                        <span>
                          {item.category}
                        </span>

                      </div>

                      <div className="popular-item-orders">

                        <strong>
                          {item.orders}
                        </strong>

                        <span>
                          orders
                        </span>

                      </div>

                      <div className="popular-item-price">
                        ₹{item.price}
                      </div>

                    </div>

                  )
                )}

              </div>

            </section>

          </div>

          <section className="dashboard-panel restaurant-quick-panel">

            <div className="panel-header">

              <div>
                <h3>
                  Quick Actions
                </h3>

                <p>
                  Frequently used restaurant operations
                </p>
              </div>

            </div>

            <div className="restaurant-quick-actions">

              <button
                onClick={openNewOrder}
              >
                <span>＋</span>

                <strong>
                  New Order
                </strong>

                <small>
                  Create food order
                </small>
              </button>

              <button
                onClick={() =>
                  setActiveTab("Menu")
                }
              >
                <span>☷</span>

                <strong>
                  Manage Menu
                </strong>

                <small>
                  Add or edit dishes
                </small>
              </button>

              <button
                onClick={() =>
                  setActiveTab("Tables")
                }
              >
                <span>▦</span>

                <strong>
                  Table Management
                </strong>

                <small>
                  View table status
                </small>
              </button>

              <button
                onClick={() =>
                  setActiveTab("Room Service")
                }
              >
                <span>⌂</span>

                <strong>
                  Room Service
                </strong>

                <small>
                  Manage room orders
                </small>
              </button>

            </div>

          </section>

        </>

      )}

      {/* TABLE MANAGEMENT */}

      {activeTab === "Tables" && (

        <div className="restaurant-tables-section">

          <div className="restaurant-tables-header">

            <div>
              <p className="module-label">
                RESTAURANT FLOOR
              </p>

              <h3>
                Table Management
              </h3>

              <p>
                Monitor table occupancy and current guest activity.
              </p>
            </div>

            <button
              className="primary-button"
              onClick={() =>
                alert(
                  "Table reservation management will be built next."
                )
              }
            >
              + Reserve Table
            </button>

          </div>

          <div className="restaurant-table-summary">

            <div className="table-summary-card">
              <span className="summary-dot available-dot"></span>

              <div>
                <strong>{availableTables}</strong>
                <small>Available</small>
              </div>
            </div>

            <div className="table-summary-card">
              <span className="summary-dot occupied-dot"></span>

              <div>
                <strong>{occupiedTables}</strong>
                <small>Occupied</small>
              </div>
            </div>

            <div className="table-summary-card">
              <span className="summary-dot reserved-dot"></span>

              <div>
                <strong>{reservedTables}</strong>
                <small>Reserved</small>
              </div>
            </div>

            <div className="table-summary-card">
              <span className="summary-dot cleaning-dot"></span>

              <div>
                <strong>{cleaningTables}</strong>
                <small>Cleaning</small>
              </div>
            </div>

          </div>

          <div className="restaurant-table-legend">

            <span>
              <i className="legend-dot available-dot"></i>
              Available
            </span>

            <span>
              <i className="legend-dot occupied-dot"></i>
              Occupied
            </span>

            <span>
              <i className="legend-dot reserved-dot"></i>
              Reserved
            </span>

            <span>
              <i className="legend-dot cleaning-dot"></i>
              Cleaning
            </span>

          </div>

          <div className="restaurant-table-grid">

            {tables.map((table) => (

              <div
                className={`restaurant-table-card ${table.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
                key={table.number}
              >

                <div className="restaurant-table-card-top">

                  <div className="restaurant-table-number">
                    {table.number}
                  </div>

                  <span
                    className={getStatusClass(
                      table.status
                    )}
                  >
                    {table.status}
                  </span>

                </div>

                <div className="restaurant-table-icon">
                  ▦
                </div>

                <div className="restaurant-table-capacity">

                  <span>
                    Capacity
                  </span>

                  <strong>
                    {table.capacity} Guests
                  </strong>

                </div>

                {table.status === "Occupied" && (

                  <div className="restaurant-table-guest">

                    <span>
                      Current Guest
                    </span>

                    <strong>
                      {table.guest}
                    </strong>

                    <small>
                      Order ₹
                      {table.amount.toLocaleString()}
                    </small>

                  </div>

                )}

                {table.status === "Reserved" && (

                  <div className="restaurant-table-guest">

                    <span>
                      Reserved For
                    </span>

                    <strong>
                      {table.guest}
                    </strong>

                    <small>
                      Reservation confirmed
                    </small>

                  </div>

                )}

                {table.status === "Available" && (

                  <div className="restaurant-table-guest available-message">

                    <span>
                      Ready for guests
                    </span>

                    <small>
                      No active order
                    </small>

                  </div>

                )}

                {table.status === "Cleaning" && (

                  <div className="restaurant-table-guest cleaning-message">

                    <span>
                      Cleaning in progress
                    </span>

                    <small>
                      Will be available soon
                    </small>

                  </div>

                )}

                <button
                  className="table-action-button"
                  onClick={() =>
                    alert(
                      `Table ${table.number} selected`
                    )
                  }
                >
                  View Details →
                </button>

              </div>

            ))}

          </div>

        </div>

      )}

      {/* ORDERS */}

      {activeTab === "Orders" && (

        <div className="restaurant-orders-section">

          <div className="restaurant-orders-header">

            <div>

              <p className="module-label">
                FOOD & BEVERAGE
              </p>

              <h3>
                Order Management
              </h3>

              <p>
                Track restaurant and room service orders.
              </p>

            </div>

            <button
              className="primary-button"
              onClick={openNewOrder}
            >
              + New Order
            </button>

          </div>

          <div className="restaurant-order-summary">

            <button
              className={
                orderFilter === "All"
                  ? "order-summary-card active"
                  : "order-summary-card"
              }
              onClick={() =>
                setOrderFilter("All")
              }
            >

              <div className="order-summary-icon">
                ◉
              </div>

              <div>
                <strong>
                  {orderCounts.all}
                </strong>

                <span>
                  All Orders
                </span>
              </div>

            </button>

            <button
              className={
                orderFilter === "Preparing"
                  ? "order-summary-card active"
                  : "order-summary-card"
              }
              onClick={() =>
                setOrderFilter("Preparing")
              }
            >

              <div className="order-summary-icon">
                ◷
              </div>

              <div>
                <strong>
                  {orderCounts.preparing}
                </strong>

                <span>
                  Preparing
                </span>
              </div>

            </button>

            <button
              className={
                orderFilter === "Ready"
                  ? "order-summary-card active"
                  : "order-summary-card"
              }
              onClick={() =>
                setOrderFilter("Ready")
              }
            >

              <div className="order-summary-icon">
                ✓
              </div>

              <div>
                <strong>
                  {orderCounts.ready}
                </strong>

                <span>
                  Ready
                </span>
              </div>

            </button>

            <button
              className={
                orderFilter === "Served"
                  ? "order-summary-card active"
                  : "order-summary-card"
              }
              onClick={() =>
                setOrderFilter("Served")
              }
            >

              <div className="order-summary-icon">
                ◉
              </div>

              <div>
                <strong>
                  {orderCounts.served}
                </strong>

                <span>
                  Served
                </span>
              </div>

            </button>

            <button
              className={
                orderFilter === "Completed"
                  ? "order-summary-card active"
                  : "order-summary-card"
              }
              onClick={() =>
                setOrderFilter("Completed")
              }
            >

              <div className="order-summary-icon">
                ✓
              </div>

              <div>
                <strong>
                  {orderCounts.completed}
                </strong>

                <span>
                  Completed
                </span>
              </div>

            </button>

          </div>

          <section className="dashboard-panel restaurant-orders-full-panel">

            <div className="panel-header">

              <div>

                <h3>
                  All Orders
                </h3>

                <p>
                  {filteredOrders.length} orders found
                </p>

              </div>

            </div>

            <div className="restaurant-orders-toolbar">

              <div className="restaurant-order-search">

                <span>
                  ⌕
                </span>

                <input
                  type="text"
                  placeholder="Search order, guest, table or item..."
                  value={orderSearch}
                  onChange={(event) =>
                    setOrderSearch(
                      event.target.value
                    )
                  }
                />

              </div>

              <select
                value={orderFilter}
                onChange={(event) =>
                  setOrderFilter(
                    event.target.value
                  )
                }
                className="restaurant-order-filter"
              >

                <option value="All">
                  All Status
                </option>

                <option value="Preparing">
                  Preparing
                </option>

                <option value="Ready">
                  Ready
                </option>

                <option value="Served">
                  Served
                </option>

                <option value="Completed">
                  Completed
                </option>

              </select>

            </div>

            <div className="table-wrapper restaurant-orders-table-wrapper">

              <table>

                <thead>

                  <tr>
                    <th>ORDER</th>
                    <th>TYPE</th>
                    <th>GUEST</th>
                    <th>LOCATION</th>
                    <th>ITEMS</th>
                    <th>TIME</th>
                    <th>AMOUNT</th>
                    <th>STATUS</th>
                    <th>ACTION</th>
                  </tr>

                </thead>

                <tbody>

                  {filteredOrders.length > 0 ? (

                    filteredOrders.map((order) => (

                      <tr key={order.id}>

                        <td>

                          <strong className="booking-id">
                            {order.id}
                          </strong>

                        </td>

                        <td>

                          <span
                            className={
                              order.type === "Room Service"
                                ? "order-type room-service"
                                : "order-type restaurant"
                            }
                          >
                            {order.type}
                          </span>

                        </td>

                        <td>

                          <strong>
                            {order.guest}
                          </strong>

                        </td>

                        <td>
                          {order.location}
                        </td>

                        <td>

                          <span className="order-items-text">
                            {order.items}
                          </span>

                        </td>

                        <td>
                          {order.time}
                        </td>

                        <td>

                          <strong>
                            ₹
                            {order.amount.toLocaleString()}
                          </strong>

                        </td>

                        <td>

                          <span
                            className={getOrderStatusClass(
                              order.status
                            )}
                          >
                            {order.status}
                          </span>

                        </td>

                        <td>

                          <div className="order-action-buttons">

                            {order.status === "Preparing" && (

                              <button
                                className="order-action-button"
                                onClick={() =>
                                  updateOrderStatus(
                                    order.id,
                                    "Ready"
                                  )
                                }
                              >
                                Mark Ready
                              </button>

                            )}

                            {order.status === "Ready" && (

                              <button
                                className="order-action-button"
                                onClick={() =>
                                  updateOrderStatus(
                                    order.id,
                                    "Served"
                                  )
                                }
                              >
                                Mark Served
                              </button>

                            )}

                            {order.status === "Served" && (

                              <button
                                className="order-action-button"
                                onClick={() =>
                                  updateOrderStatus(
                                    order.id,
                                    "Completed"
                                  )
                                }
                              >
                                Complete
                              </button>

                            )}

                            {order.status === "Completed" && (

                              <button
                                className="order-action-button disabled"
                                disabled
                              >
                                Completed
                              </button>

                            )}

                          </div>

                        </td>

                      </tr>

                    ))

                  ) : (

                    <tr>

                      <td
                        colSpan="9"
                        className="restaurant-no-orders"
                      >

                        <div>

                          <span>
                            ◌
                          </span>

                          <strong>
                            No orders found
                          </strong>

                          <p>
                            Try changing your search or filter.
                          </p>

                        </div>

                      </td>

                    </tr>

                  )}

                </tbody>

              </table>

            </div>

          </section>

        </div>

      )}

      {/* ROOM SERVICE */}

      {activeTab === "Room Service" && (

        <div className="restaurant-placeholder">

          <div className="restaurant-placeholder-icon">
            ⌂
          </div>

          <p className="module-label">
            FOOD & BEVERAGE
          </p>

          <h3>
            Room Service
          </h3>

          <p>
            Manage food orders delivered directly to guest rooms.
          </p>

          <button
            className="secondary-button"
            onClick={() =>
              setActiveTab("Orders")
            }
          >
            View Room Service Orders →
          </button>

        </div>

      )}

      {/* =========================
          NEW ORDER MODAL
      ========================= */}

      {showOrderForm && (

        <div
          className="restaurant-modal-overlay"
          onClick={closeNewOrder}
        >

          <div
            className="restaurant-order-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* MODAL HEADER */}

            <div className="restaurant-modal-header">

              <div>

                <p className="module-label">
                  FOOD & BEVERAGE
                </p>

                <h3>
                  Create New Order
                </h3>

                <p>
                  Add guest details and select food items.
                </p>

              </div>

              <button
                className="restaurant-modal-close"
                onClick={closeNewOrder}
              >
                ×
              </button>

            </div>

            {/* ORDER TYPE */}

            <div className="new-order-type-selector">

              <button
                className={
                  newOrderType === "Restaurant"
                    ? "new-order-type active"
                    : "new-order-type"
                }
                onClick={() =>
                  setNewOrderType("Restaurant")
                }
              >

                <span>
                  ▦
                </span>

                <strong>
                  Restaurant
                </strong>

                <small>
                  Dine-in order
                </small>

              </button>

              <button
                className={
                  newOrderType === "Room Service"
                    ? "new-order-type active"
                    : "new-order-type"
                }
                onClick={() =>
                  setNewOrderType("Room Service")
                }
              >

                <span>
                  ⌂
                </span>

                <strong>
                  Room Service
                </strong>

                <small>
                  Deliver to room
                </small>

              </button>

            </div>

            {/* GUEST DETAILS */}

            <div className="new-order-form-grid">

              <div className="new-order-field">

                <label>
                  Guest Name
                </label>

                <input
                  type="text"
                  placeholder="Enter guest name"
                  value={newOrderGuest}
                  onChange={(event) =>
                    setNewOrderGuest(
                      event.target.value
                    )
                  }
                />

              </div>

              <div className="new-order-field">

                <label>
                  {newOrderType === "Restaurant"
                    ? "Table Number"
                    : "Room Number"}
                </label>

                <input
                  type="text"
                  placeholder={
                    newOrderType === "Restaurant"
                      ? "e.g. Table 04"
                      : "e.g. Room 205"
                  }
                  value={newOrderLocation}
                  onChange={(event) =>
                    setNewOrderLocation(
                      event.target.value
                    )
                  }
                />

              </div>

            </div>

            {/* ADD MENU ITEM */}

            <div className="new-order-add-item">

              <div className="new-order-field">

                <label>
                  Select Menu Item
                </label>

                <select
                  value={selectedMenuItem}
                  onChange={(event) =>
                    setSelectedMenuItem(
                      event.target.value
                    )
                  }
                >

                  <option value="">
                    Choose a dish...
                  </option>

                  {menuItems.map((item) => (

                    <option
                      value={item.name}
                      key={item.name}
                    >
                      {item.name} — ₹{item.price}
                    </option>

                  ))}

                </select>

              </div>

              <button
                className="primary-button add-order-item-button"
                onClick={addMenuItem}
              >
                + Add Item
              </button>

            </div>

            {/* SELECTED ITEMS */}

            <div className="new-order-items-section">

              <div className="new-order-items-header">

                <div>

                  <h4>
                    Order Items
                  </h4>

                  <span>
                    {newOrderItems.length} item
                    {newOrderItems.length !== 1
                      ? "s"
                      : ""}
                  </span>

                </div>

              </div>

              {newOrderItems.length === 0 ? (

                <div className="new-order-empty">

                  <span>
                    ☷
                  </span>

                  <strong>
                    No items added
                  </strong>

                  <p>
                    Select dishes from the menu above.
                  </p>

                </div>

              ) : (

                <div className="new-order-items-list">

                  {newOrderItems.map((item) => (

                    <div
                      className="new-order-item"
                      key={item.name}
                    >

                      <div className="new-order-item-info">

                        <strong>
                          {item.name}
                        </strong>

                        <small>
                          ₹{item.price} each
                        </small>

                      </div>

                      <div className="new-order-quantity">

                        <button
                          onClick={() =>
                            decreaseItemQuantity(
                              item.name
                            )
                          }
                        >
                          −
                        </button>

                        <strong>
                          {item.quantity}
                        </strong>

                        <button
                          onClick={() =>
                            increaseItemQuantity(
                              item.name
                            )
                          }
                        >
                          +
                        </button>

                      </div>

                      <strong className="new-order-item-total">
                        ₹
                        {(
                          item.price *
                          item.quantity
                        ).toLocaleString()}
                      </strong>

                      <button
                        className="new-order-remove"
                        onClick={() =>
                          removeItem(item.name)
                        }
                      >
                        ×
                      </button>

                    </div>

                  ))}

                </div>

              )}

            </div>

            {/* TOTAL */}

            <div className="new-order-total-section">

              <div className="new-order-total-row">

                <span>
                  Subtotal
                </span>

                <strong>
                  ₹{orderSubtotal.toLocaleString()}
                </strong>

              </div>

              <div className="new-order-total-row">

                <span>
                  GST (5%)
                </span>

                <strong>
                  ₹{orderTax.toLocaleString()}
                </strong>

              </div>

              <div className="new-order-total-row grand-total">

                <span>
                  Grand Total
                </span>

                <strong>
                  ₹{orderTotal.toLocaleString()}
                </strong>

              </div>

            </div>

            {/* FOOTER */}

            <div className="restaurant-modal-footer">

              <button
                className="secondary-button"
                onClick={closeNewOrder}
              >
                Cancel
              </button>

              <button
                className="primary-button"
                onClick={createNewOrder}
              >
                Create Order →
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Restaurant;