import React, { Fragment, useState } from "react";
import Validation from "./Validation";
import "./Address.css";
import { useNavigate } from "react-router-dom";

const Address = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  const [values, setValues] = useState({
    username: "",
    phonenumber: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const changeHandler = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  const showHandler = () => {
    setState(true);
  };

  return (
    <Fragment>
      <div className="text-center mt-5">
        <button onClick={showHandler} className="button-17" role="button">
          Enter Your Address
        </button>
      </div>
      {state ? (
        <form onSubmit={submitHandler} className="mb-5">
          <div className="form-group m-3">
            <label>FullName :</label>
            <input
              value={values.username}
              type="text"
              className="form-control"
              placeholder="Enter your name"
              name="username"
              onChange={changeHandler}
            />
            {errors.username && (
              <p className="error text-danger">{errors.username}</p>
            )}
          </div>
          <div className="form-group m-3">
            <label>Phone Number :</label>
            <input
              value={values.phonenumber}
              type="text"
              className="form-control"
              placeholder="Phonenumber"
              name="phonenumber"
              maxLength="11"
              onChange={changeHandler}
            />
            {errors.phonenumber && (
              <p className="error text-danger">{errors.phonenumber}</p>
            )}
          </div>
          <div className="form-group m-3">
            <label>Address :</label>
            <textarea
              value={values.address}
              placeholder="Enter your address ..."
              className="form-control"
              rows="3"
              name="address"
              onChange={changeHandler}
            ></textarea>
            {errors.address && (
              <p className="error text-danger">{errors.address}</p>
            )}
          </div>
          <button type="submit" className="btnSubmit m-3">
            Submit
          </button>
          <button
            onClick={() => navigate("signup")}
            className="btnSubmit m-3"
            
          >
            Next
          </button>
        </form>
      ) : (
        <div className="text-center mt-5">
          <h4>Click the button above to enter the address ...</h4>
        </div>
      )}
    </Fragment>
  );
};

export default Address;
