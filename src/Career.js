import React from "react";
import web from "../src/images/img2.svg";
import { NavLink } from "react-router-dom";
import Commom from "./Commom";

const Carrer = () => {
    return (
        <>
          <Commom
            name="Welcome to About page"
            imgsrc={web}
            visit="/Crrear"
            btname="Contact Now"
          />
        </>
      );
};

export default Carrer;