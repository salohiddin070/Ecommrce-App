import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../context/Store";

const URL = "https://fakestoreapi.com/products/";

const ViewProduct = () => {
  const [currentProd, setCurrentPord] = useState(null);
  const { id } = useParams();

  const {
    user,
    cartList,
    handleAddCArt,
    handleIncrementProd,
    handleDecrementProd,
    handleRemoveProd,
  } = useStore();

  const getCurrentProduct = async () => {
    try {
      const response = await axios.get(URL + id);
      setCurrentPord(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentProduct();
  }, [id]);

  return currentProd ? (
    <div>
      <div className="container">
        <div className="row py-5">
          <div className="col-12">
            <button className="btn btn-light px-5">
              {currentProd.category}
            </button>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <img
              style={{ width: "100%", height: "" }}
              src={currentProd.image}
              alt="photo"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 bg-white p-3 rounded">
            <h3>{currentProd.title}</h3>
            <p>{currentProd.description}</p>
            <div className="d-flex gap-5">
              {/* <span className="badge bg-warning">{currentProd.price}$</span>   */}
              {
                <div className="d-flex align-items-center justify-content-between">
                  <mark>{currentProd.price}$</mark>

                  {user.isLoggedIn &&
                    cartList.find((item) => item.product.id == id) ? (
                    <div className="mt-2 d-flex flex-wrap">
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => handleDecrementProd(currentProd.id)}
                        className="btn btn-light"
                        disabled={
                          cartList.find((item) => item.product.id == id)
                            .count === 1
                        }
                      >
                        -
                      </button>

                      <button className="btn btn-light disabled">
                        {cartList.find((item) => item.product.id == id).count}
                      </button>

                      <button
                        onClick={() => handleIncrementProd(currentProd.id)}
                        className="btn btn-light"
                      >
                        +
                      </button>
                      <button
                        onClick={() => handleRemoveProd(currentProd.id)}
                        className="btn btn-outline-danger"
                      >
                        &times;
                      </button>
                    </div>
                  ) : (
                    <button
                      style={{ marginLeft: "20px" }}
                      onClick={() => handleAddCArt(currentProd)}
                      className="btn btn-outline-info"
                    >
                      <box-icon name="cart-alt"></box-icon>
                    </button>
                  )}
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div
        style={{ height: "100%", width: "100%", marginBottom: "99vh" }}
        class="w-100 d-flex justify-content-center text-danger w-100"
      >
        <div class="spinner-border mt-5" role="status">
          <span class="visually-hidden mt-5">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
