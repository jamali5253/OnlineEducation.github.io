import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./Main__Blog";
import Blogcard from "./Blogcard";
import Contact from "./Contact";
import Home from "./Home";
import Main__Project_Page from "./Main__Project_Page";
import Pricing from "./Pricing";
import SuccessStories from "./SuccessStories";
import Success__Com from "./Success__Com";
import Error__Page from "./Error__Page";

const Page__Header = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main__Project_Page />}>
          <Route index element={<Home />} />
          <Route path="/price" element={<Pricing />} />
          <Route path="/blog" element={<Blogcard />} />
          <Route path="/success" element={<Success__Com />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error__Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Page__Header;
