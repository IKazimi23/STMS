
import { useState } from "react";

function Icon({ name, size = 24, color = "currentColor" }) {
  const paths = {
    car: (
      <>
        <path d="M5 11 7 5h10l2 6" />
        <path d="M3 11h18v8H3z" />
        <path d="M6 19v2M18 19v2M3 14h18" />
        <circle cx="7" cy="15" r="1" />
        <circle cx="17" cy="15" r="1" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </>
    ),
    gauge: (
      <>
        <path d="M4 19a9 9 0 1 1 16 0" />
        <path d="m12 14 4-4" />
        <circle cx="12" cy="14" r="1" />
      </>
    ),
    route: (
      <>
        <path d="m3 21 18-18-7 18-3-8-8-3Z" />
      </>
    ),
    warning: (
      <>
        <path d="m10.3 3.9-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3.1l-8-14a2 2 0 0 0-3.4 0Z" />
        <path d="M12 9v4M12 17h.01" />
      </>
    ),
    sliders: (
      <>
        <path d="M4 6h16M4 12h16M4 18h16" />
        <path d="M8 3v6M16 9v6M10 15v6" />
      </>
    ),
    home: (
      <>
        <path d="m3 10 9-7 9 7v11H3z" />
        <path d="M9 21v-7h6v7" />
      </>
    ),
    map: (
      <>
        <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z" />
        <path d="M9 3v15M15 6v15" />
      </>
    ),
    chart: (
      <>
        <path d="M3 3v18h18" />
        <path d="m7 14 4-4 4 3 6-8" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    arrow: <path d="m9 18 6-6-6-6" />,
    check: <path d="m5 12 4 4L19 6" />,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

function Dashboard({ profilePhoto }) {
  const [role, setRole] = useState("driver");
  const [activeTab, setActiveTab] = useState("home");
  const [selectedAction, setSelectedAction] = useState("");

  const actions = [
    { name: "Plan route", icon: "route", color: "#4CAF50" },
    { name: "Report", icon: "warning", color: "#FCD666" },
    { name: "Alerts", icon: "bell", color: "#E02026" },
    { name: "Filters", icon: "sliders", color: "#FFD54F" },
  ];

  const navigation = [
    { name: "home", icon: "home" },
    { name: "map", icon: "map" },
    { name: "alerts", icon: "bell" },
    { name: "activity", icon: "chart" },
    { name: "profile", icon: "user" },
  ];

  return (
    <main className="dashboard">
      

      <header className="dashboard-header">
        <img
          className="dashboard-avatar"
          src={profilePhoto || "https://i.pravatar.cc/128?img=12"}
          alt="Profile"
        />

        <img
          className="dashboard-logo"
          src="/stms-logo.png"
          alt="STMS Smart Traffic Management System"
        />

        <button
          className="dashboard-notification"
          onClick={() => setSelectedAction("Notifications")}
          aria-label="Notifications"
        >
          <Icon name="bell" size={25} color="#334155" />
          <span className="notification-dot" />
        </button>
      </header>

      <section className="dashboard-role">
        <button
          className={role === "driver" ? "role-option selected" : "role-option"}
          onClick={() => setRole("driver")}
        >
          <Icon name="car" size={20} />
          Driver
        </button>

        <button
          className={role === "operator" ? "role-option selected" : "role-option"}
          onClick={() => setRole("operator")}
        >
          <Icon name="shield" size={20} />
          Operator
        </button>
      </section>

      <section className="traffic-status">
        <div className="traffic-icon">
          <Icon name="gauge" size={38} color="#67FA6F" />
        </div>

        <div className="traffic-description">
          <span className="traffic-label">CITY TRAFFIC</span>
          <h1>Light congestion</h1>
        </div>

        <div className="traffic-percentage">
          <strong>82%</strong>
          <span>network flowing</span>
        </div>
      </section>

      <section className="traffic-map">
        <div className="map-streets">
          <span className="map-river" />
          <span className="map-road road-one" />
          <span className="map-road road-two" />
          <span className="map-road road-three" />
          <span className="map-road road-four" />
          <span className="map-road road-five" />
          <span className="map-road road-six" />

          <span className="map-place place-one">Charing Cross</span>
          <span className="map-place place-two">Strand</span>
          <span className="map-place place-three">River Thames</span>
          <span className="map-place place-four">Waterloo Bridge</span>
          <span className="map-place place-five">London</span>
        </div>

        <div className="map-heading">LONDON TRAFFIC</div>
        <div className="map-illustrative">Illustrative incidents</div>

        <div className="map-marker accident-marker">
          <span>➤</span>
          <strong>Accident</strong>
        </div>

        <div className="map-marker moderate-marker">
          <span>⚒</span>
          <strong>Moderate</strong>
        </div>

        <div className="map-marker cleared-marker">
          <span><Icon name="check" size={23} color="white" /></span>
          <strong>Cleared</strong>
        </div>

        <div className="map-credit">
          Map: Esri, HERE, Garmin, © OpenStreetMap contributors
        </div>
      </section>

      <section className="map-legend">
        <div><i className="legend-clear" />Clear</div>
        <div><i className="legend-moderate" />Moderate</div>
        <div><i className="legend-severe" />Severe</div>
        <span>Updated 2m ago</span>
      </section>

      <section className="quick-actions">
        <h2>Quick actions</h2>

        <div className="action-grid">
          {actions.map((action) => (
            <button
              className="action-card"
              key={action.name}
              onClick={() => setSelectedAction(action.name)}
            >
              <Icon name={action.icon} size={32} color={action.color} />
              <span>{action.name}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="active-nearby">
        <div className="section-heading">
          <h2>Active nearby</h2>
          <button onClick={() => setSelectedAction("All incidents")}>
            See all
          </button>
        </div>

        <button
          className="incident-card"
          onClick={() => setSelectedAction("Collision on Riverside Drive")}
        >
          <div className="incident-icon">
            <Icon name="car" size={29} color="#E7000B" />
          </div>

          <div className="incident-details">
            <div className="incident-meta">
              <strong>Critical</strong>
              <span>8 min ago</span>
            </div>

            <h3>Collision on Riverside Drive</h3>
            <p>2 lanes blocked · Expect 18 min delay</p>
          </div>

          <Icon name="arrow" size={25} color="white" />
        </button>
      </section>

      <section className="safety-reminder">
        <Icon name="shield" size={22} color="#7DFF82" />
        <p>
          <strong>Drive safely.</strong> Plan and review routes before you begin
          your journey.
        </p>
      </section>

      <nav className="dashboard-navigation">
  {navigation.map((item) => (
    <button
      key={item.name}
      className={
        activeTab === item.name
          ? "nav-item nav-active"
          : "nav-item"
      }
      onClick={() => setActiveTab(item.name)}
      aria-label={item.name}
    >
      <span className="nav-icon">
        <Icon name={item.icon} size={20} />
      </span>

      <span className="nav-label">
        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
      </span>
    </button>
  ))}
</nav>

      {selectedAction && (
        <div className="dashboard-modal-backdrop" onClick={() => setSelectedAction("")}>
          <div className="dashboard-modal" onClick={(event) => event.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedAction("")}
            >
              ×
            </button>
            <h2>{selectedAction}</h2>
            <p>This feature will be connected to the STMS system.</p>
            <button
              className="modal-done"
              onClick={() => setSelectedAction("")}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Dashboard;
