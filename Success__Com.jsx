import { VpnLock } from "@material-ui/icons";
import React from "react";
import SuccessStories from "./SuccessStories";
import Sdata from "./Success__Data";

const Success__Com = () => {
  return (
    <>
      {Sdata.map((val) => {
        return (
          <SuccessStories
            logoimg={val.logoimg}
            logoname={val.logoname}
            title={val.title}
            cname={val.companyname}
            writer={val.writername}
          />
        );
      })}
    </>
  );
};

export default Success__Com;
