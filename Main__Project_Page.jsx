import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Main__Project_Page = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
};

export default Main__Project_Page;
