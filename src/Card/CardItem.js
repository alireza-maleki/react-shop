import React, { useEffect, useState } from "react";
import "./CardItem.css";
import { useSelector, useDispatch } from "react-redux";
import { removeInCard } from "../Redux/action";
import Address from "../UserAddress/Address";
import { plusToProduct, minesToProduct, nextButton, setAddress } from "../Redux/action";
import { Link } from "react-router-dom";


const CardItem = () => {
  const dispatch = useDispatch();
  const add = useSelector((state) => state.add);
  // console.log(add);

  const plus = useSelector((state) => state.plus);
  console.log(plus);

  const next = useSelector((state) => state.next);
  console.log(next);

  const address = useSelector((state) => state.address);

  return (
    <>
      {add.length > 0 ? (
        <div className="container-items">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Pic</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {add.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <img className="cardImg" src={item.image} />
                    </td>
                    <td>{item.name}</td>
                    <td>{(item.price) * plus}</td>
                    <td>
                      <button
                        onClick={() => dispatch(minesToProduct(item,item.countInStock))}
                        className="minesBtn"
                      >
                        -
                      </button>
                      {item.qty}
                      <button
                        onClick={() => dispatch(plusToProduct(item,item.countInStock))}
                        className="plusBtn"
                      >
                        +
                      </button>
                      </td>
                      <td>
                      <button
                        onClick={() => dispatch(removeInCard(item))}
                        className="btnRemove"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Address />
        </div>
      ) : (
        <div className="empty">
          <h1>Card is Empty!</h1>
        </div>
      )}
    </>
  );
};

export default CardItem;
