
import { useState } from "react";

function Signup({ onLogin, onNext }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    zip: "",
    province: "",
    city: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  function handleNext(event) {
  event.preventDefault();

  if (form.password !== form.confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  onNext({firstName: form.firstName,
  lastName: form.lastName,});
}

  return (
    <main className="signup-screen">
      <img
        className="signup-logo"
        src="/stms-logo.png"
        alt="STMS Logo"
      />

      <h1>Create your account</h1>

      <form className="signup-card" onSubmit={handleNext}>
        <section className="signup-section">
          <h2>PERSONAL</h2>
          <div className="signup-grid">
            <input name="firstName" placeholder="Name" value={form.firstName} onChange={handleChange} required />
            <input name="lastName" placeholder="Last name" value={form.lastName} onChange={handleChange} required />
          </div>
        </section>

        <section className="signup-section">
          <h2>CONTACT</h2>
          <div className="signup-grid">
            <input name="phone" placeholder="+1 Phone Number" value={form.phone} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
          </div>
        </section>

        <section className="signup-section">
          <h2>ADDRESS</h2>
          <input name="address" placeholder="Home Address" value={form.address} onChange={handleChange} required />
          <div className="signup-grid">
            <input name="zip" placeholder="Zip code" value={form.zip} onChange={handleChange} required />
            <input name="province" placeholder="Province" value={form.province} onChange={handleChange} required />
          </div>
          <input name="city" placeholder="City" value={form.city} onChange={handleChange} required />
        </section>

        <section className="signup-section">
          <h2>ACCOUNT</h2>
          <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
          <input name="confirmPassword" type="password" placeholder="Confirm password" value={form.confirmPassword} onChange={handleChange} required />
        </section>

        <p className="signup-step">STEP 1 OF 3</p>

        <button className="signup-next" type="submit">
          Next
        </button>
      </form>

      <div className="signup-login">
        <span>Already have an account?</span>
        <button type="button" onClick={onLogin}>
          Log in
        </button>
      </div>
    </main>
  );
}

export default Signup;
