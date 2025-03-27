import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="container_sign_in">
      {/* Left Section with Image */}
      <div className="left_sign_in"></div>

      {/* Right Section with Sign-in Form */}
      <div className="right_sign_in">
        <p>Don't have an account with us?</p>
        <Link to="/Signup">Click here to Register</Link>
        <h1>Sign In</h1>
        <form>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            required
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
