import React, { useState } from "react";
import "./Login.css";
import Validation2 from "./Validation2";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { postPassword, postEmail, loginUserData, login } from "../Redux/action";

const Login2 = () => {
  const Swal = require("sweetalert2");
  const dispatch = useDispatch();
  const emailPost = useSelector((state) => state.emailPost);
  const passwordPost = useSelector((state) => state.passwordPost);
  const invalid = useSelector((state) => state.invalid);
  const postError = useSelector((state) => state.postError);
  const mainData = useSelector((state) => state.mainData);

  console.log(emailPost);
  console.log(passwordPost);
  console.log(invalid);
  console.log(postError);
  console.log(mainData);


  const [errors, setErrors] = useState({
    emailPost: "",
    passwordPost: "",
    invalidError: "",
  });

  const btnLoginHandler = (event) => {
    event.preventDefault();
    const userData = {
      email: emailPost,
      password: passwordPost,
    };

    if (mainData) {
      dispatch(login());
      Swal.fire({
        title: "Welcome To My Website",
        text: "You are currently a member of the site",
        icon: "success",
        confirButtonText: "Continue",
      });
    }

    setErrors(
      Validation2(emailPost, passwordPost, invalid)
    );

    dispatch(loginUserData(userData));
  };

  return (
    <div className="main">
      <div className="app-wrapper2">
        <div>
          <h2 className="title">Enter your information</h2>
        </div>
        <form>
        <div className="email">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              name="emali"
              value={emailPost}
              onChange={(event) => dispatch(postEmail(event.target.value))}
            />
            {errors.emailPost && <p className="error">{errors.emailPost}</p>}
            {errors.invalidError && <p className="error">{errors.invalidError}</p>}
          </div>
          <div className="password">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              value={passwordPost}
              onChange={(event) => dispatch(postPassword(event.target.value))}
            />
            {errors.passwordPost && (
              <p className="error">{errors.passwordPost}</p>
            )}
          </div>
          <div>
            <button className="submit" onClick={btnLoginHandler}>
              Login
            </button>
          </div>
          <div className="register">
            <p>
              Not registered? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login2;
