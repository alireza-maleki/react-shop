import React from "react";
import "./Home.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, detailProduct } from "../Redux/action";
import { useNavigate, Link, useParams } from "react-router-dom";
import { searchBar, setToken, productInformation } from "../Redux/action";
import Loading from "../Loading/Loading";

const Home = () => {
  const information = useSelector((state) => state.information);
  console.log(information);
  const params = useParams();
  // console.log(params);
  const detail = useSelector((state) => state.detail);
  // console.log(detail);
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  // console.log(search);
  const { post, loading } = useSelector((state) => state.post);
  const navigate = useNavigate();
  console.log(post);
  useEffect(() => {
    dispatch(getData());
    // dispatch(setToken());
  }, []);

  const productHandler = (item) => {
    dispatch(productInformation(item))
    navigate(`${item}`)
  }

  return (
    <>
      {loading && <Loading />}
      <div className="container">
        {post
          .filter((item) => {
            return item.title.toLowerCase().includes(search.toLowerCase());
          })
          .map((item, index) => {
            return (
              <div className="inside" key={index}>
                <img className="productImage" src={item.image} />
                <p>category  :  <span>{item.title}</span></p>
                <p>count  :  <span>{item.rating.count}</span></p>
                <h5>Price: <span>{item.price} $</span></h5>
                <button
                  onClick={() => productHandler(item.id)}
                  className="btnProduct"
                >
                  More
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Home;
