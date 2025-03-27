import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container_sign_up">
      <div className="left_sign_up">
        {/* Add an image or content if needed */}
      </div>

      <div className="right_sign_up">
        <h1>Sign Up</h1>
        <form>
          <input type="text" name="username" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
          <input type="password" name="password" placeholder="Create Password" required />
          <input type="text" name="city" placeholder="City" required />
          <input type="tel" name="phone" placeholder="Phone Number" required />

          <button type="submit" className="Create_account">Create Account</button>
        </form>

        <p>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
