import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import homeIcon from "../image/homeicon.png";
import bascketicon from "../image/bascketicon.png";
import usericon from "../image/usericon.png";
import { useDispatch, useSelector } from "react-redux";
import { searchBar } from "../Redux/action";
import Card from "../Card/Card";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogedIn = useSelector((state) => state.isLogedIn);

  return (
    <div className="header">
      <div className="navbar">
        <Link className="home" to="/">
          <img className="homeicon" src={homeIcon} /> Home
        </Link>
      </div>
      <div className="navbar">
        {isLogedIn ? (
          <img
          onClick={() => navigate("login")}
          className="bascketicon"
          src={usericon}
        />
        ) : (
          <button className="loginORsignupBtn" onClick={() => navigate("signup")}>login / sign up</button>
        )}
        <Link to="carditem">
          <Card />
        </Link>
        <input
          onChange={(event) => dispatch(searchBar(event.target.value))}
          type="search"
          placeholder="search..."
        />
      </div>
    </div>
  );
};

export default Header;
