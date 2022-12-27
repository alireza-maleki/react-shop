import React from "react";
import "./Redirect.css";
import { useNavigate } from "react-router";

const Redirect = () => {

    const navigate = useNavigate();

  return (
    <div className="redirect">
      <div>
        <h1>page not found</h1>
        <button onClick={() => navigate("/")}>back</button>
      </div>
    </div>
  );
};

export default Redirect;
