
import { useState } from "react";

import Login from "./Login";
import Signup from "./Signup";
import Verification from "./Verification";
import Verifying from "./Verifying";
import Confirmed from "./Confirmed";
import Setup from "./setup";
import Dashboard from "./Dashboard";

function App() {
  const [currentPage, setCurrentPage] = useState("welcome");
  const [profilePhoto, setProfilePhoto] = useState(null);

  // LOGIN
  if (currentPage === "login") {
    return (
      <Login
        onSignup={() => setCurrentPage("signup")}
      />
    );
  }

  // SIGNUP
  if (currentPage === "signup") {
    return (
      <Signup
        onLogin={() => setCurrentPage("login")}
        onNext={() => setCurrentPage("verification")}
      />
    );
  }

  // VERIFICATION
  if (currentPage === "verification") {
    return (
      <Verification
        onVerify={() => setCurrentPage("verifying")}
        onChangeNumber={() => setCurrentPage("signup")}
      />
    );
  }

  // VERIFYING
  if (currentPage === "verifying") {
    return (
      <Verifying
        onComplete={() => setCurrentPage("confirmed")}
      />
    );
  }

  // CONFIRMED
  if (currentPage === "confirmed") {
    return (
      <Confirmed
        onContinue={() => setCurrentPage("setup")}
      />
    );
  }

  // PROFILE SETUP
  if (currentPage === "setup") {
    return (
      <Setup
        photo={profilePhoto}
        onPhotoChange={setProfilePhoto}
        onTakePhoto={() => setCurrentPage("camera")}
        onFinish={() => setCurrentPage("dashboard")}
        onBack={() => setCurrentPage("confirmed")}
      />
    );
  }

  // CAMERA
  if (currentPage === "camera") {
    return (
      <TakePhoto
        onCancel={() => setCurrentPage("setup")}
        onCapture={(photo) => {
          setProfilePhoto(photo);
          setCurrentPage("setup");
        }}
      />
    );
  }

  // DASHBOARD
  if (currentPage === "dashboard") {
    return (
      <Dashboard
        profilePhoto={profilePhoto}
      />
    );
  }

  // WELCOME
  return (
    <main className="welcome-screen">

      <p className="eyebrow">
        SMARTER MOBILITY STARTS HERE
      </p>

      <div className="hero-visual">
        <div className="circle circle-large"></div>
        <div className="circle circle-small"></div>

        <div className="logo-area">
          <img
            src="/stms-logo.png"
            alt="STMS Logo"
          />
        </div>
      </div>

      <section className="welcome-content">
        <h1>
          Welcome to<br />
          smarter journeys.
        </h1>

        <p>
          Live traffic. Timely alerts. Safer roads.<br />
          Your city, moving better.
        </p>
      </section>

      <button
        className="start-button"
        onClick={() => setCurrentPage("login")}
      >
        Start
      </button>

      <div className="login-text">
        <span>Already have an account?</span>

        <button
          className="login-button"
          onClick={() => setCurrentPage("login")}
        >
          Log in
        </button>
      </div>

    </main>
  );
}

export default App;
