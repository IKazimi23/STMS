
function Confirmed({ onContinue }) {
  return (
    <main className="confirmed-screen">

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

      <h1>Phone verified!</h1>

      <p className="confirmed-subtitle">
        Your number is confirmed. Next, let's set up your profile.
      </p>

      <section className="confirmed-card">

        <div className="success-circle">
          <div className="success-check">✓</div>
        </div>

        <h2>Verification successful</h2>

        <button
          type="button"
          className="confirmed-button"
          onClick={onContinue}
        >
          Continue
        </button>

      </section>
    </main>
  );
}

export default Confirmed;
