import React from "react";
import { useParams, Link, useNavigate, Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getData, addToCard } from "../Redux/action";
import "./Product.css";

const Product = () => {
  const information = useSelector((state) => state.information);
  console.log(information);
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id);
  const add = useSelector((state) => state.add);
  // console.log(add);
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);
  // console.log(post);
  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className="product">
      {information.map((item, index) => {
        return (
          <div className="insideProduct" key={item.id}>
            <img className="productImage" src={item.image} />
            <p className="description">{item.description}</p>
            <h1 className="price">Price: {item.price} $</h1>
            <button
              onClick={() => dispatch(addToCard(item))}
              className="btnCard"
            >
              Add To Card
            </button>
          </div>
        );
      })}
    </div>

    // <div className="product">
    //   {post
    //     .filter((item) => {
    //       return item._id == id;
    //     })
    //     .map((item) => {
    //       return (
    //         <div className="insideProduct" key={item._id}>
    //           <img className="productImage" src={item.image} />
    //           <p className="description">{item.description}</p>
    //           <h1 className="price">Price: {item.price}</h1>
    //           <button  onClick={() => dispatch(addToCard(item))} className="btnCard">Add To Card</button>
    //         </div>
    //       );
    //     })}
    // </div>
  );
};

export default Product;
