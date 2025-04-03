import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import "./register.css"; // Ensure you have a CSS file for styling
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "", // Added confirm password state
      navigateTo: null,
    };
  }

  handleRegister = (e) => {
    e.preventDefault();

    // Check if passwords match
    const { password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    alert("Registration Successful! Please login.");
    this.setState({ navigateTo: "/login" });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, password, confirmPassword, navigateTo } = this.state;

    if (navigateTo) {
      return <Navigate to={navigateTo} />;
    }

    return (
      <div className="auth-container">
        <h2>Register</h2>
        <form onSubmit={this.handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={name}
            onChange={this.handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={this.handleChange}
            required
          />
          <button type="submit" className="primary-btn">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    );
  }
}

export default Register;
