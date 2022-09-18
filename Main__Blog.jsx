import React from "react";
import MediaCard from "./Blog__Card__Comp";
import Blog__Card__Comp from "./Blog__Card__Comp";

const Blog = () => {
  console.log();
  return (
    <div className="sect sect--white">
      <div className="container">
        <div className="row">
          <h1 className="row__title">Our blog</h1>
          <h2 className="row__sub">Sneak peeks from our writings</h2>
        </div>
        <MediaCard />
      </div>
    </div>
  );
};

export default Blog;
