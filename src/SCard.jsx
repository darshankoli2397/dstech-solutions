import React from "react";
import web from "../src/images/s1.jpg";
import { NavLink } from "react-router-dom";

const SCard = (props) => {
  return (
    <>
      <div className="col-md-4 col-12 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <h4>Back-End Developer</h4>
            <p className="card-text">
                 Bharati Vidyapeet 
                (deemed to be University)
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default SCard;
