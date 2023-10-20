import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import classes from "./register.module.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <p className={classes.title}>Register</p>
        <p className={classes.message}>
          Sign up now and get full access to our app.
        </p>
        <div className={classes.flex}>
          <label>
            <input
              className={classes.input}
              type="text"
              // placeholder="Enter your first name"
              required
            />
            <span>First Name</span>
          </label>

          <label>
            <input
              className={classes.input}
              type="text"
              // placeholder="Enter your last name"
              required
            />
            <span>Last Name</span>
          </label>
        </div>

        <label>
          <input
            className={classes.input}
            type="email"
            // placeholder="Enter your email"
            required
          />
          <span>Email</span>
        </label>

        <label>
          <input
            className={classes.input}
            type={showPassword ? "text" : "password"} // Toggle input type
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=""
            required
          />
          <span>Password</span>
          <span
            className={classes.passwordToggle}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </label>

        <label>
          <input
            className={classes.input}
            type={showPassword ? "text" : "password"} // Toggle input type
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder=""
            required
          />
          <span>Confirm Password</span>
          <span
            className={classes.passwordToggle}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </label>

        <div className={classes.submitContainer}>
          <button className={classes.submit}>Submit</button>
        </div>
        <p className={classes.signin}>
          Already have an account? <NavLink to="/signin">Sign In</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Register;
