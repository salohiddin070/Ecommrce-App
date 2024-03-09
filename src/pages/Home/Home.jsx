import React, { useCallback, useMemo } from "react";
import Carousel from "../../components/Carousel/Carousel";
import Slider from "react-slick";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Home.scss";
// import { toast } from "react-toastify";

const PrevArrow = (props) => {
  const {onClick } = props;
  return (
    <div onClick={onClick} className="my-icon my-icon-left">
      <box-icon size="sm" color="white" name="chevron-left"></box-icon>
    </div>
  );
};
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="my-icon my-icon-right">
      <box-icon size="sm" color="white" name="chevron-right"></box-icon>
    </div>
  );
};

const Home = () => {
  const [allProducts, setAllProducts] = useState(null);
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        // {
        //   breakpoint: 480,
        //   settings: {
        //     slidesToShow: 1,
        //     slidesToScroll: 1
        //   }
        // }
      ]
  };

  const handAllProducts = async () => {
    try {
      const respons = await axios.get("https://fakestoreapi.com/products");
      setAllProducts(respons.data);
    } catch (error) {
      console.log(error);
    }
  };

  const cachedDate = useCallback((prod)=> ({...prod}), [])

  useEffect(() => {
    handAllProducts();
  }, []);
  return allProducts ? (
    <div className="homee">
      <Carousel />
      <div className="container">
        <div className="row">
          <h3 className="text-center mb-3">Electronics</h3>
          <div className="bgg"></div>
          <div className="row">
            <div className="col-12">
              <Slider {...settings}>
                {allProducts
                  ?.filter((item) => item.category === "electronics")
                  .map((prod) => (
                    <ProductCard prod={cachedDate(prod)} key={prod.id} />
                  ))}
              </Slider>
            </div>
          </div>
        </div>

        <div className="row">
          <h3 className="text-center mb-3">Jewelery</h3>
          <div className="bgg"></div>
          <div className="row">
            <div className="col-12">
              <Slider {...settings}>
                {allProducts
                  ?.filter((item) => item.category === "jewelery")
                  .map((prod) => (
                    <ProductCard prod={cachedDate(prod)} key={prod.id} />
                  ))}
              </Slider>
            </div>
          </div>
        </div>

        <div className="row">
          <h3 className="text-center mb-3">Men's clothing</h3>
          <div className="bgg"></div>
          <div className="row">
            <div className="col-12">
              <Slider {...settings}>
                {allProducts
                  ?.filter((item) => item.category === "men's clothing")
                  .map((prod) => (
                    <ProductCard prod={cachedDate(prod)} key={prod.id} />
                  ))}
              </Slider>
            </div>
          </div>
        </div>

        <div className="row">
          <h3 className="text-center mb-3">Women's clothing</h3>
          <div className="bgg"></div>
          <div className="row">
            <div className="col-12">
              <Slider {...settings}>
                {allProducts
                  ?.filter((item) => item.category === "women's clothing")
                  .map((prod) => (
                    <ProductCard prod={cachedDate(prod)} key={prod.id} />
                  ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div style={{width: "100%", marginBottom: "99vh"}}>
      <div class="d-flex justify-content-center mt-5 mb-5">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
