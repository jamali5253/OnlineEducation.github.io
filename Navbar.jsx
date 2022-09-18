import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="https://image.ibb.co/fOur3b/favicon.png"
      />
      <meta name="theme-color" content="#1885ed" />
      <title>Bricks.io - Homepage</title>
      <header className="header">
        <div className="container header__container">
          <div className="header__logo">
            <img
              className="header__img"
              src="https://image.ibb.co/kcVou6/path3000.png"
            />{" "}
            <h1 className="header__title">
              Bricks<span className="header__light">.io</span>
            </h1>
          </div>
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <div className="header__menu">
            <nav id="navbar" className="header__nav collapse">
              <ul className="header__elenco">
                <Link to="/">
                  <li className="header__el">
                    <a href="#" className="header__link">
                      Home
                    </a>
                  </li>
                </Link>
                <Link to="/price">
                  <li className="header__el">
                    <a href="#" className="header__link">
                      Pricing
                    </a>
                  </li>
                </Link>
                <Link to="/success">
                  <li className="header__el">
                    <a href="#" className="header__link">
                      Success-Stories
                    </a>
                  </li>
                </Link>
                <Link to="/blog">
                  <li className="header__el">
                    <a href="#" className="header__link">
                      Blog
                    </a>
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="header__el header__el--blue">
                    <a href="#" className="header__link  ">
                      Contact
                    </a>
                  </li>
                </Link>

                <li className="header__el header__el--blue">
                  <a href className="btn btn--primary">
                    Sign In →
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
