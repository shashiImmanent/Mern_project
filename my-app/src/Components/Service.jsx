import React from "react";
import Sdata from "../Components/Sdata";
import Card from "../Components/Card";

const Service = ()=>{
    return(
        <>
          <div className="my-5">
        <h1 className="text-center">Our Services</h1>
        <div className="container-fluid mv-5 ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {
                  Sdata.map((val,ind)=>{
                    return <Card key={ind} 
                      imgsrc = {val.imgsrc}
                      title= {val.title}
                    />
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export  default Service;