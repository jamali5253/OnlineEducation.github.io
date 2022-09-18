import React from "react";

const Pricing = () => {
  return (
    <div className="sect sect--padding-bottom">
      <div className="container">
        <div className="row row--center">
          <h1 className="row__title">Pricing</h1>
          <h2 className="row__sub">What fits your business the best?</h2>
        </div>
        <div className="row row--center row--margin">
          <div className="col-md-4 col-sm-4 price-box price-box--purple">
            <div className="price-box__wrap">
              <div className="price-box__img" />
              <h1 className="price-box__title">Startup</h1>
              <p className="price-box__people">1 - 100 people</p>
              <h2 className="price-box__discount">
                <span className="price-box__dollar">$</span>49
                <span className="price-box__discount--light">/mo</span>
              </h2>
              <h3 className="price-box__price">$65/mo</h3>
              <p className="price-box__feat">Features</p>
              <ul className="price-box__list">
                <li className="price-box__list-el">1 License</li>
                <li className="price-box__list-el">24h helpcenter</li>
                <li className="price-box__list-el">No tasks limit</li>
                <li className="price-box__list-el">No contractors limit </li>
              </ul>
              <div className="price-box__btn">
                <a className="btn btn--purple btn--width">Start now</a>
              </div>
            </div>
          </div>
          {/* second */}
          <div className="col-md-4 col-sm-4 price-box price-box--violet">
            <div className="price-box__wrap">
              <div className="price-box__img" />
              <h1 className="price-box__title">Business</h1>
              <p className="price-box__people">100 - 500 people</p>
              <h2 className="price-box__discount">
                <span className="price-box__dollar">$</span>149
                <span className="price-box__discount--light">/mo</span>
              </h2>
              <h3 className="price-box__price">$225/mo</h3>
              <p className="price-box__feat">Features</p>
              <ul className="price-box__list">
                <li className="price-box__list-el">1 License</li>
                <li className="price-box__list-el">24h helpcenter</li>
                <li className="price-box__list-el">No tasks limit</li>
                <li className="price-box__list-el">No contractors limit </li>
              </ul>
              <div className="price-box__btn">
                <a className="btn btn--violet btn--width">Start now</a>
              </div>
            </div>
          </div>
          {/* terzo */}
          <div className="col-md-4 col-sm-4 price-box price-box--blue">
            <div className="price-box__wrap">
              <div className="price-box__img" />
              <h1 className="price-box__title">Corporate</h1>
              <p className="price-box__people">500+ people</p>
              <h2 className="price-box__discount">
                <span className="price-box__dollar">$</span>399
                <span className="price-box__discount--light">/mo</span>
              </h2>
              <h3 className="price-box__price">$499/mo</h3>
              <p className="price-box__feat">Features</p>
              <ul className="price-box__list">
                <li className="price-box__list-el">1 License</li>
                <li className="price-box__list-el">24h helpcenter</li>
                <li className="price-box__list-el">No tasks limit</li>
                <li className="price-box__list-el">No contractors limit </li>
              </ul>
              <div className="price-box__btn">
                <a className="btn btn--blue btn--width">Start now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
