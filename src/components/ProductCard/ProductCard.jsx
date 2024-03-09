import React, { memo } from "react";
import "./ProductCard.scss";
import { useStore } from "../../context/Store";
import { Link } from "react-router-dom";

const ProductCard = ({ prod }) => {
  console.log("CHILD RENDERED");
  const {
    user,
    cartList,
    handleAddCArt,
    handleIncrementProd,
    handleDecrementProd,
    handleRemoveProd,
  } = useStore();
  const { id } = prod;

  return (
    <div key={prod.id} className="prod-item">
      <div className="card mb-5">
        <img src={prod.image} alt="products" className="card-img-top" />
        <div className="card-body">
          <Link to={`/product/${id}`}>
            <h4>{prod.title}</h4>
            <p>{prod.description}</p>
          </Link>
          <div className="d-flex align-items-center justify-content-between">
            <mark>{prod.price}$</mark>

            {user.isLoggedIn == true &&
            cartList.find((item) => item.product.id == id) ? (
              <div className="mt-2 d-flex">
                <button
                  onClick={() => handleDecrementProd(id)}
                  className="btn btn-light"
                  disabled={
                    cartList.find((item) => item.product.id === id).count === 1
                  }
                >
                  -
                </button>
                <button className="btn btn-light disabled">
                  {cartList.find((item) => item.product.id === id).count}
                </button>
                <button
                  onClick={() => handleIncrementProd(id)}
                  className="btn btn-light"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemoveProd(id)}
                  className="btn btn-outline-danger"
                >
                  &times;
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleAddCArt(id)}
                className="btn btn-outline-info"
              >
                <box-icon name="cart-alt"></box-icon>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
