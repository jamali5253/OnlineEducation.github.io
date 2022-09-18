import React from "react";
import "./Error.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Error__Page = () => {
  return (
    <>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>
                  <br></br>
                  <br></br>
                </div>
                <div className="contant_box_404">
                  <h3 className="head1">Look like you're lost</h3>
                  <p className="head2">
                    the page you are looking for not avaible!
                  </p>
                  <Link to="/">
                    <Button variant="contained" size="large">
                      Go Home
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error__Page;
