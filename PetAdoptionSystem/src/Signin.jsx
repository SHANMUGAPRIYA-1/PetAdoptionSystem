import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // For redirection after successful login

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/users/login",
        formData
      );
      alert("Login Successful!");
      navigate("/"); // Redirect user after successful login
    } catch (error) {
      alert("Invalid email or password. Please try again.");
      console.error("Login error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="container_sign_in">
      {/* Left Section with Image */}
      <div className="left_sign_in"></div>

      {/* Right Section with Sign-in Form */}
      <div className="right_sign_in">
        <p>Don't have an account with us?</p>
        <Link to="/Signup">Click here to Register</Link>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit" className="Login_in">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
