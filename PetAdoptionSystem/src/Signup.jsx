import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/users/addUser",
        formData
      );
      console.log("Signup Successful:", response.data);
      alert("Account created successfully!");
      navigate("/signin")
    } catch (error) {
      console.error("Signup Failed:", error);
      alert("Signup failed. Try again.");
    }
  };

  return (
    <div className="container_sign_up">
      <div className="left_sign_up">
        {/* Add an image or content if needed */}
      </div>

      <div className="right_sign_up">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="address"
            required
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
          />

          <button type="submit" className="Create_account">
            Create Account
          </button>
        </form>

        <p>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
