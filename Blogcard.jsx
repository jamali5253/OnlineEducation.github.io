import React from "react";
import Bdata from "./BlogData";
import MediaCard from "./Blog__Card__Comp";

const Blogcard = () => {
  return (
    <>
      <div className="card-deck-wrapper">
        <div className="card-deck">
          {Bdata.map((val) => {
            return (
              <MediaCard
                Bimg={val.Bimg}
                Bheading={val.Bheading}
                Btitle={val.Btitle}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blogcard;
