import React from "react";

const SuccessStories = (props) => {
  return (
    <>
      <div className="sect sect--white">
        <div className="container">
          <div className="row">
            <h1 className="row__title">Success Stories</h1>
            <h2 className="row__sub">
              Companies you <span className="row__sub--light">(will)</span>{" "}
              propably know
            </h2>
          </div>
          <div className="row row--margin row--text-center">
            <div className="col-md-8 col-sm-10 col-xs-12 row__carousel">
              <div
                id="myCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                {/* Indicators */}
                <ol className="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="#myCarousel" data-slide-to={1} />
                  <li data-target="#myCarousel" data-slide-to={2} />
                </ol>
                {/* Wrapper for slides */}
                <div className="carousel-inner">
                  <div className="item active">
                    <div className="item__content">
                      <img
                        className="item__img"
                        src={props.logoimg}
                        alt={props.logoname}
                      />
                      <span className="item__name">slack</span>
                      <p className="item__description">{props.title}</p>
                    </div>
                    <div className="item__avatar" />
                    <p className="item__people">{props.cname}</p>
                    <p className="item__occupation">{props.writer}</p>
                  </div>
                </div>
                {/* Left and right controls */}
                <a
                  className="left carousel-control"
                  href="#myCarousel"
                  data-slide="prev"
                >
                  <img
                    className="carousel-control__img"
                    src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMxLjQ5NCAzMS40OTQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMxLjQ5NCAzMS40OTQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij4KPHBhdGggZD0iTTEwLjI3Myw1LjAwOWMwLjQ0NC0wLjQ0NCwxLjE0My0wLjQ0NCwxLjU4NywwYzAuNDI5LDAuNDI5LDAuNDI5LDEuMTQzLDAsMS41NzFsLTguMDQ3LDguMDQ3aDI2LjU1NCAgYzAuNjE5LDAsMS4xMjcsMC40OTIsMS4xMjcsMS4xMTFjMCwwLjYxOS0wLjUwOCwxLjEyNy0xLjEyNywxLjEyN0gzLjgxM2w4LjA0Nyw4LjAzMmMwLjQyOSwwLjQ0NCwwLjQyOSwxLjE1OSwwLDEuNTg3ICBjLTAuNDQ0LDAuNDQ0LTEuMTQzLDAuNDQ0LTEuNTg3LDBsLTkuOTUyLTkuOTUyYy0wLjQyOS0wLjQyOS0wLjQyOS0xLjE0MywwLTEuNTcxTDEwLjI3Myw1LjAwOXoiIGZpbGw9IiM2Zjc5ZmYiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="
                  />
                </a>
                <a
                  className="right carousel-control"
                  href="#myCarousel"
                  data-slide="next"
                >
                  <img
                    className="carousel-control__img"
                    src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMxLjQ5IDMxLjQ5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMS40OSAzMS40OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiPgo8cGF0aCBkPSJNMjEuMjA1LDUuMDA3Yy0wLjQyOS0wLjQ0NC0xLjE0My0wLjQ0NC0xLjU4NywwYy0wLjQyOSwwLjQyOS0wLjQyOSwxLjE0MywwLDEuNTcxbDguMDQ3LDguMDQ3SDEuMTExICBDMC40OTIsMTQuNjI2LDAsMTUuMTE4LDAsMTUuNzM3YzAsMC42MTksMC40OTIsMS4xMjcsMS4xMTEsMS4xMjdoMjYuNTU0bC04LjA0Nyw4LjAzMmMtMC40MjksMC40NDQtMC40MjksMS4xNTksMCwxLjU4NyAgYzAuNDQ0LDAuNDQ0LDEuMTU5LDAuNDQ0LDEuNTg3LDBsOS45NTItOS45NTJjMC40NDQtMC40MjksMC40NDQtMS4xNDMsMC0xLjU3MUwyMS4yMDUsNS4wMDd6IiBmaWxsPSIjNmY3OWZmIi8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sect sect--white sect--no-padding">
        <div className="container">
          <div className="row row--center">
            <div className="col-md-3 col-xs-6 col-sm-6 partner">
              <a href="#" className="partner__link">
                <img
                  className="partner_img"
                  src="https://image.ibb.co/mOtHRw/fblogo.png"
                />
              </a>
            </div>
            <div className="col-md-3  col-xs-6 col-sm-6 partner">
              <a href="#" className="partner__link">
                <img
                  className="partner_img"
                  src="https://image.ibb.co/nfpXRw/twitterlogo.png"
                />
              </a>
            </div>
            <div className="col-md-3 col-xs-6 col-sm-6 partner">
              <a href="#" className="partner__link">
                <img
                  className="partner_img"
                  src="https://image.ibb.co/imgOYb/googlelogo.png"
                />
              </a>
            </div>
            <div className="col-md-3 col-xs-6 col-sm-6 partner">
              <a href="#" className="partner__link">
                <img
                  className="partner_img"
                  src="https://image.ibb.co/ebGAeG/dribbblelogo.png"
                />
              </a>
            </div>
          </div>
          <div className="row row--center">
            <div className="col-md-3 col-xs-6 col-sm-6 partner">
              <a href="#" className="partner__link">
                <img
                  className="partner_img"
                  src="https://image.ibb.co/npV8Yb/gitlogo.png"
                />
              </a>
            </div>
            <div className="col-md-3 col-xs-6 col-sm-6 partner">
              <a href="#" className="partner__link">
                <img
                  className="partner_img"
                  src="https://image.ibb.co/cGyZ6w/stacklogo.png"
                />
              </a>
            </div>
            <div className="col-md-3 col-xs-6 col-sm-6 partner">
              <a href="#" className="partner__link">
                <img
                  className="partner_img"
                  src="https://image.ibb.co/ij03zG/inlogo.png"
                />
              </a>
            </div>
            <div className="col-md-3 col-xs-6 col-sm-6 partner">
              <a href="#" className="partner__link">
                <img
                  className="partner_img"
                  src="https://image.ibb.co/ekqdzG/codepenlogo.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessStories;
