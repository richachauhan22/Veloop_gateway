import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.email.trim() || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    setError("Login is not available yet. Please try again later.");
  }

  return (
    <main className={styles.registerPage}>
      <section className={styles.registerCard}>
        <Link to="/" className={styles.brand}>
          VELOOP<span> GIVEAWAY</span>
        </Link>

        <p className={styles.eyebrow}>WELCOME BACK</p>
        <h1>Login Here</h1>
        <p className={styles.subtitle}>
          Sign in to access your VELOOP account and giveaways.
        </p>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
            />
          </div>

          {error && (
            <p className={styles.error} role="alert">
              {error}
            </p>
          )}

          <button className={styles.submitButton} type="submit">
            Login
          </button>
        </form>

        <p className={styles.loginText}>
          Don&apos;t have an account? <Link to="/register">Register Here</Link>
        </p>

        <Link to="/" className={styles.backLink}>
          Back to giveaways
        </Link>
      </section>
    </main>
  );
}

export default Login;
