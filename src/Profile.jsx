
function Profile({
  profilePhoto,
  userName,
  userEmail,
  onBack,
  onLogout,
  onOpenSection,
}) {
  const experienceItems = [
    {
      icon: "route",
      title: "Driver experience",
      description: "Routes, alerts and road reports",
    },
    {
      icon: "shield",
      title: "Operator console",
      description: "Requires authorized credentials",
    },
  ];

  const accountItems = [
    {
      icon: "bell",
      title: "Notifications",
      description: "Alert radius and preferences",
    },
    {
      icon: "lock",
      title: "Security & privacy",
      description: "Password and data permissions",
    },
    {
      icon: "settings",
      title: "App settings",
      description: "Units, accessibility and theme",
    },
    {
      icon: "help",
      title: "Help & support",
      description: "Guides and contact options",
    },
  ];

  function ProfileIcon({ name }) {
    const paths = {
      route: (
        <>
          <path d="M4 5h16v14H4z" />
          <path d="M8 9h8M8 13h8M8 17h4" />
        </>
      ),
      shield: (
        <>
          <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
          <path d="m9 12 2 2 4-4" />
        </>
      ),
      bell: (
        <>
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
          <path d="M10 21h4" />
        </>
      ),
      lock: (
        <>
          <rect x="4" y="10" width="16" height="11" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </>
      ),
      settings: (
        <>
          <circle cx="12" cy="12" r="3" />
          <path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.6a8 8 0 0 1-2 .8l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-2-.8l-1.7.6-1.4-2.4 1.4-1.1a8 8 0 0 1 0-2l-1.4-1.1 1.4-2.4 1.7.6a8 8 0 0 1 2-.8l.3-1.8h2.8l.3 1.8a8 8 0 0 1 2 .8l1.7-.6 1.4 2.4-1.4 1.1a8 8 0 0 1 0 2z" />
        </>
      ),
      help: (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M9.5 9a2.5 2.5 0 1 1 4.3 1.7c-1 .9-1.8 1.3-1.8 2.8" />
          <path d="M12 17h.01" />
        </>
      ),
    };

    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {paths[name]}
      </svg>
    );
  }

  return (
    <main className="profile-screen">
      <header className="profile-topbar">
        <button
          type="button"
          className="profile-back"
          onClick={onBack}
          aria-label="Go back"
        >
          ‹
        </button>

        <img
          className="profile-logo"
          src="/stms-logo.png"
          alt="STMS"
        />
      </header>

      <div className="profile-content">
        <h1 className="profile-page-title">Profile</h1>

        {/* User profile card */}
        <section className="profile-user-card">
          <img
            className="profile-user-avatar"
            src={profilePhoto || "/default-avatar.png"}
            alt="Profile"
          />

          <div className="profile-user-details">
            <h2>{userName || "Your name"}</h2>

            <p>{userEmail || "Email not provided"}</p>

            <span className="profile-authorized-badge">
              Authorized operator
            </span>
          </div>

          <button
            type="button"
            className="profile-edit-button"
            onClick={() => onOpenSection?.("Edit profile")}
            aria-label="Edit profile"
          >
            ›
          </button>
        </section>

        {/* Experience */}
        <h3 className="profile-section-heading">Experience</h3>

        <section className="profile-list-card">
          {experienceItems.map((item) => (
            <button
              type="button"
              className="profile-list-item"
              key={item.title}
              onClick={() => onOpenSection?.(item.title)}
            >
              <span className="profile-item-icon">
                <ProfileIcon name={item.icon} />
              </span>

              <span className="profile-item-text">
                <strong>{item.title}</strong>
                <small>{item.description}</small>
              </span>
            </button>
          ))}
        </section>

        {/* Account and app */}
        <h3 className="profile-section-heading">
          Account & app
        </h3>

        <section className="profile-list-card">
          {accountItems.map((item) => (
            <button
              type="button"
              className="profile-list-item"
              key={item.title}
              onClick={() => onOpenSection?.(item.title)}
            >
              <span className="profile-item-icon">
                <ProfileIcon name={item.icon} />
              </span>

              <span className="profile-item-text">
                <strong>{item.title}</strong>
                <small>{item.description}</small>
              </span>
            </button>
          ))}
        </section>

        {/* Log out */}
        <button
          type="button"
          className="profile-logout"
          onClick={onLogout}
        >
          <span>⇥</span>
          Log out
        </button>

        <p className="profile-version">
          STMS Prototype · Demo information only · v1.0.0
        </p>
      </div>
    </main>
  );
}

export default Profile;
