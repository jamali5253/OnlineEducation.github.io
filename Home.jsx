import React from "react";
import { useNavigate } from "react-router";
import Contact from "./Contact";
import Pricing from "./Pricing";

const Home = (props) => {
  const nav1 = useNavigate();
  const nav2 = useNavigate();
  const click = () => {
    nav1("/contact");
  };
  const click2 = () => nav2("/price");
  return (
    <div className="sect sect--padding-top">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="site">
              <h1 className="site__title">
                Fast paced way to grow your business
              </h1>
              <h2 className="site__subtitle">Manage analytics like a boss</h2>
              <div className="site__box-link">
                <a className="btn btn--width" onClick={click2}>
                  Pricing
                </a>
                <a className="btn btn--revert btn--width" onClick={click}>
                  Contact
                </a>
              </div>
              <img
                className="site__img"
                src="https://image.ibb.co/c7grYb/image3015.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
