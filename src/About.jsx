import React from "react";
import web from "../src/images/software1.png";
//import { NavLink } from "react-router-dom";
import Commom from "./Commom";
import Adata from "./Adata";
import ACard from "./ACard";
import SCard from "./ACard";
import Surajdata from "./Surajdata";
const About = () => {
  return (
    <>
      
      <div className="my-5">
        <h1 className="text-center"><b>Who We Are.....</b>  </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Adata.map((val, ind) => {
                return <ACard key={ind} imgsrc={val.imgsrc} title={val.title} />;
              })}
              {Surajdata.map((val, ind) => {
                return <SCard key={ind} imgsrc={val.imgsrc} title={val.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <Commom
        name="Welcome.......................                                       
        Grow your business with"
        imgsrc={web}
        visit=""
        btname="Get Started"
      />
    </>
  );
};

export default About;
