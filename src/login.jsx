
import { useState } from "react";

function Login({ onSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  function handleLogin(event) {
  event.preventDefault();
}

  return (
    <main className="login-screen">
      <img
        className="login-logo"
        src="/stms-logo.png"
        alt="STMS Logo"
      />

      <h1>Welcome back</h1>
      <p className="login-subtitle">
        Log in to follow live traffic and incidents
      </p>

      <form className="login-card" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="login-options">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me
          </label>

          <button type="button" className="forgot-button">
            Forgot password?
          </button>
        </div>

        <button type="submit" className="login-submit">
          Log in
        </button>
      </form>

      <div className="signup-text">
  <span>New to STMS?</span>
  <button
  type="button"
  onClick={onSignup}
>
  Sign up
</button>
</div>
    </main>
  );
}

export default Login;
