import React from "react";
import { useParams, Outlet } from "react-router";
import cardLogo from "../image/bascketicon.png";
import "../Header/Header.css";
import "./Card.css";
import { useDispatch, useSelector } from "react-redux";

const Card = () => {
  const add = useSelector((state) => state.add);

  return (
    <div className="cardLogo">
      <img className="bascketicon" src={cardLogo} />
      {add.length > 0 && <span className="badge">{add.length}</span>}
    </div>
  );
};

export default Card;
