import React from "react";
import "../style/workwithus.css";
import { workwithus } from "./dbase/whyworkwithus";

const Workwithus = () => {
  return (
    <div className="workwithus-background">
    <div className="container my-5">
      <h1 className="text-center fw-bold">WHY YOU SHOULD CHOOSE US</h1>
      <div className="workwithus-us-container">
        {workwithus.map((item, index) => (
          <div key={index} className="workwithus-us">
          
           <h2 className="mb-4">{item.title}</h2>
           <p>{item.description}</p>
           </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Workwithus;
