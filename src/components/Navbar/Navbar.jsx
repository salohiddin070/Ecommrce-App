import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../context/Store";
import { useEffect } from "react";
import { useState } from "react";
import "./Navbar.scss"
const Navbar = () => {
  const { user, setUser, cartList } = useStore();
  const [isChange, setIsChange] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser((prev) => ({ ...prev, isLoggedIn: false }));
  };

  useEffect(() => {
    if(cartList.length > 0 ){
        setIsChange(true);
        setTimeout(() => {
            setIsChange(false)
        },[800])
    }
  }, [cartList.length]);

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <img
          src="https://static.vecteezy.com/system/resources/previews/016/471/452/non_2x/abstract-modern-ecommerce-logo-ecommerce-logo-design-shop-logo-design-template-creative-ecommerce-logo-vector.jpg"
          alt=""
          style={{
            width: "65px",
            // objectFit:"cover",
          }}
        />
        <a className="navbar-brand" href="#">
          Ecommers App
        </a>
        <button
          className="navbar-toggler bg-light "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="bg-light collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
          style={{ position: "relative" }}
        >
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Electronic
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Jawelery
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Men's clothing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Woman's clothing
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Contact
              </a>
            </li>
          </ul>

          {user.isLoggedIn === true ? (
            <Link
              to="/cart"
              style={{ textDecoration: "none", marginTop: "15px" }}
            >
              <box-icon name="cart-alt"></box-icon>
              <span
                style={{
                  color: "red",
                  // background: "red",
                  borderRadius: "50%",
                  position: "absolute",
                  margin: "10px",
                  padding: "4px",
                  marginTop: "-21px",
                  marginLeft: "-10px",
                  marginRight: "15px",
                }}
              >
                {cartList.length}
              </span>
              {isChange ? <box-icon
                name="bell"
                animation="tada"
                style={{ marginLeft: "12px", marginRight: "12px" }}
              ></box-icon> :
              <box-icon name="bell"></box-icon>}
              <button onClick={handleLogout} className="btn btn-danger">
                Log out
              </button>
            </Link>
          ) : (
            <Link to={"/login"}>
              <button className="btn btn-primary" type="button">
                Log in
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useStore } from "../../context/Store";
// // import "./Navbar.scss";

// const Navbar = () => {
//   const { user, setUser, cartList } = useStore();
//   const [isChange, setIsChange] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser((prev) => ({ ...prev, isLoggedIn: false }));
//   };

//   useEffect(() => {
//     let timer;

//     if (cartList.length > 0) {
//       setIsChange(true);
//       timer = setTimeout(() => {
//         setIsChange(false);
//       }, 800);
//     }
//     return () => clearTimeout(timer);
//   }, [cartList.length]);
//   return (
//     <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
//       <div className="container">
//         <a className="navbar-brand" href="#">
//           Ecommers
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div
//           className="collapse navbar-collapse justify-content-end bell-style"
//           id="navbarSupportedContent"
//         >
//           <ul className="navbar-nav  mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">
//                 About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Servisec
//               </a>
//             </li>
//             <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle"
//                 href="#"
//                 id="navbarDropdown"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Kategories
//               </a>
//               <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Electronics
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Jawelery
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Mens clothing
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Woman clothing
//                   </a>
//                 </li>
//               </ul>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link " href="#">
//                 Contact
//               </a>
//             </li>
//           </ul>
//           {user.isLoggedIn === true ? (
//             <Link to="/cart">
//               <box-icon name="cart-alt"></box-icon>
//               <span className="bellstyle">{cartList.length}</span>
//               {isChange ? (
//                 <box-icon name="bell" animation="tada"></box-icon>
//               ) : (
//                 <box-icon name="bell"></box-icon>
//               )}
//               <button onClick={handleLogout} className="btn btn-danger">
//                 Log out
//                 <i class="fa-solid fa-right-from-bracket"></i>
//               </button>
//             </Link>
//           ) : (
//             <Link to="/login">
//               <button className="btn btn-primary" type="button">
//                 Log in
//               </button>
//             </Link>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
