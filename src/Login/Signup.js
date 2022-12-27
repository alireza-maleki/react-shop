import React, { useState } from "react";
import "./Login.css";
import Validation from "./Validation";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  postPassword,
  postName,
  postEmail,
  postRepeatPassword,
  postData,
  login,
} from "../Redux/action";

const Signup = () => {
  const Swal = require("sweetalert2");
  const dispatch = useDispatch();
  const namePost = useSelector((state) => state.namePost);
  const emailPost = useSelector((state) => state.emailPost);
  const passwordPost = useSelector((state) => state.passwordPost);
  const repeatPasswordPost = useSelector((state) => state.repeatPasswordPost);
  const postError = useSelector((state) => state.postError);
  const exist = useSelector((state) => state.exist);

  console.log(namePost);
  console.log(emailPost);
  console.log(passwordPost);
  console.log(repeatPasswordPost);
  console.log(postError);

  const [errors, setErrors] = useState({
    namePost: "",
    emailPost: "",
    passwordPost: "",
    repeatPasswordPost: "",
    existError: "",
  });

  console.log(errors);

  const btnSignUpHandler = (event) => {
    event.preventDefault();
    const userData = {
      name: namePost,
      email: emailPost,
      password: passwordPost,
    };

    setErrors(
      Validation(namePost, emailPost, passwordPost, repeatPasswordPost, exist)
    );

    if(!Validation){
      errors = "";
    }

    if (errors.length === 0) {
      dispatch(login());
      Swal.fire({
        title: "Welcome To My Website",
        text: "You are currently a member of the site",
        icon: "success",
        confirButtonText: "Continue",
      });
    }
    dispatch(postData(userData));
  };

  // const changeHandler = (event) => {
  //   setValues({ ...values, [event.target.name]: event.target.value });
  // };

  return (
    <div className="main">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Welcome !</h2>
        </div>
        <form>
          <div className="name">
            <label className="label">Fullname</label>
            <input
              className="input"
              type="text"
              name="fullname"
              // value={values.fullname}
              // onChange={changeHandler}
              value={namePost}
              onChange={(event) => dispatch(postName(event.target.value))}
            />
            {errors.namePost && <p className="error">{errors.namePost}</p>}
          </div>
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
            {errors.existError && <p className="error">{errors.existError}</p>}
          </div>
          <div className="password">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              // value={values.password}
              // onChange={changeHandler}
              value={passwordPost}
              onChange={(event) => dispatch(postPassword(event.target.value))}
            />
            {errors.passwordPost && (
              <p className="error">{errors.passwordPost}</p>
            )}
          </div>
          <div className="repeatPassword">
            <label className="label">ConfirmPassword</label>
            <input
              className="input"
              type="password"
              name="password"
              // value={values.password}
              // onChange={changeHandler}
              value={repeatPasswordPost}
              onChange={(event) =>
                dispatch(postRepeatPassword(event.target.value))
              }
            />
            {errors.repeatPasswordPost && (
              <p className="error">{errors.repeatPasswordPost}</p>
            )}
          </div>
          <div>
            <button className="submit" onClick={btnSignUpHandler}>
              sign up
            </button>
          </div>
          <div className="register">
            <p>Have you registered? <Link to="/login">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
