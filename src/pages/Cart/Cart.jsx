import React from "react";
import { useStore } from "../../context/Store";
import "./Cart.scss";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartList, setCartList, handleIncrementProd, handleDecrementProd, handleRemoveProd } = useStore();
  const [totaPrince, setTotalPrince] = useState(0);

  const handleClearCard = () => {
    setCartList([]);
  };

  useEffect(() => {
    let sum = 0;
    cartList.forEach((item) => {
      sum += item.product.price * item.count;
    });
    setTotalPrince(sum);
  }, [cartList]);
  return (
    <div className="container">
      {cartList.length > 0 && (
        <div className="d-flex justify-content-between align-items center py-">
          <h2>Shopping cart</h2>
          <button
            onClick={handleClearCard}
            className="btn btn-link text-danger"
          >
            Remove all
          </button>
        </div>
      )}
      {cartList.length > 0 ? (
        <div>
          {cartList.map((item) => {
            return (
              <div key={item.product.id}>
                <div className="row cart bg-white py-1 rounded mb-3">
                  <div className="col-3">
                    <Link to={`/product/${item.product.id}`}>
                      <img
                        src={item.product.image}
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="col-3">
                    <h3>{item.product.title}</h3>
                    <span className="text-primary">
                      {item.product.category}
                    </span>
                    <p>{item.product.price}$</p>
                  </div>
                  <div className="col-3">
                    <div className="btn-group">
                      <button
                        onClick={() => handleDecrementProd(item.product.id)}
                        className="btn btn-light"
                        disabled={item.count === 1}
                      >
                        -
                      </button>
                      <button className="btn btn-light">{item.count}</button>
                      <button
                        onClick={() => handleIncrementProd(item.product.id)}
                        className="btn btn-light"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-3">
                    <b className="fs-5 mb-3 d-block">
                      {item.count}x={item.count * item.product.price}$
                    </b>
                    <button
                      onClick={() => handleRemoveProd(item.product.id)}
                      className="btn btn-light d-block"
                    >
                      <box-icon name="trash" color="red"></box-icon>
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
          <div className="total">
            <h3>Total: {totaPrince}$</h3>
            <p>{cartList.length} items selected!</p>
            <button className="chekout">Chekout</button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <img
            src="https://blogzine.webestica.com/assets/images/icon/empty-cart.svg"
            className="img-fluid"
            alt="emty cart"
          />
          <h2>You are not added any product!</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
