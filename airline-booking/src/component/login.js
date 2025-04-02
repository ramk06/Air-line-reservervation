import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./auth.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            navigateTo: null,
        };
    }

    handleLogin = (e) => {
        e.preventDefault();
        const { email, password } = this.state;

        if (email === "admin@example.com" && password === "admin123") {
            alert("Admin Login Successful");
            this.setState({ navigateTo: "/admin/dashboard" });
        } else if (email === "user@example.com" && password === "user123") {
            alert("Customer Login Successful");
            this.setState({ navigateTo: "/customer/home" });
        } else {
            alert("Invalid Credentials");
        }
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { email, password, navigateTo } = this.state;

        if (navigateTo) {
            return <Navigate to={navigateTo} />;
        }

        return (
            <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={this.handleLogin}>
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
                <button type="submit" className="primary-btn">Login</button>
            </form>
            <p>
                <Link to="/register">Create an Account</Link> | <Link to="/forgot-password">Forgot Password?</Link>
            </p>
            </div>
        );
    }
}

export default Login;
