import React, { Component } from "react";
import "./auth.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleRegister = (e) => {
    e.preventDefault();
    alert("Registration Successful! Please login.");
    this.props.history.push("/login");
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, password } = this.state;

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
          <button type="submit" className="primary-btn">Register</button>
        </form>
        <p>Already have an account? <a href="/login">Login</a></p>
      </div>
    );
  }
}

export default Register
