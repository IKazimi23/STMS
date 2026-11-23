
import { useState } from "react";

function Verification({ onVerify, onChangeNumber }) {
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  function handleChange(value, index) {
    if (!/^\d?$/.test(value)) return;

    const updatedCode = [...code];
    updatedCode[index] = value;
    setCode(updatedCode);

    if (value && index < 5) {
      document.getElementById(`code-${index + 1}`)?.focus();
    }
  }

  function handleVerify(event) {
    event.preventDefault();

    if (code.some((digit) => digit === "")) {
      alert("Please enter all 6 digits.");
      return;
    }

    onVerify?.();
  }

  return (
    <main className="verification-screen">

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

      <h1>Verify your phone</h1>

      <p className="verification-subtitle">
        Enter the 6-digit code we sent to your phone number.
      </p>

      <form className="verification-card" onSubmit={handleVerify}>

        <div className="code-inputs">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              inputMode="numeric"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => {
                if (e.key === "Backspace" && !digit && index > 0) {
                  document.getElementById(`code-${index - 1}`)?.focus();
                }
              }}
              aria-label={`Verification digit ${index + 1}`}
            />
          ))}
        </div>

        <div className="resend-code">
          <span>Didn't get the code?</span>
          <button type="button" onClick={() => setCode(["", "", "", "", "", ""])}>
            Resend code
          </button>
        </div>

        <button type="submit" className="verify-button">
          Verify
        </button>

        <div className="change-number">
          <span>Wrong number?</span>
          <button type="button" onClick={onChangeNumber}>
            Change it
          </button>
        </div>

      </form>

    </main>
  );
}

export default Verification;
