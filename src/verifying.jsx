
import { useEffect } from "react";

function Verifying({ onComplete }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <main className="verifying-screen">
      <div className="verification-progress">
        <span>STEP 2 OF 3</span>
        <div className="progress-bars">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <img
        className="verification-logo"
        src="/stms-logo.png"
        alt="STMS Logo"
      />

      <h1>Verifying…</h1>

      <p className="verifying-subtitle">
        Please wait while we confirm your code.
      </p>

      <section className="verifying-card">
        <div className="checking-circle"></div>
        <h2>Checking your code…</h2>
        <p>This only takes a moment</p>
      </section>
    </main>
  );
}

export default Verifying;
