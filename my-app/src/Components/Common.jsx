import React from "react";
import {NavLink} from "react-router-dom";
const Common = (pros)=>{
    return(
        <>
        <section>
        <div id="header" className="d-flex align-items-center">
          <div className="container-fluid nag_bg">
              <div className="col-10 mx-auto">
             <div className = "row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="my-4">
                    {pros.name} <strong className="brand-name">@BsX</strong>
                  </h1>
                  <h2 className="my-3">
                    We  are the most energetic node js developer team to grow your
                    bussiness mount high
                  </h2>
                </div>
                <div className="mt-3">
                    <NavLink  to = {pros.visit} className="btn-get-started">{pros.btname}</NavLink>
                </div>
                </div>
            </div>
          </div>
        </div>
        </section>
        </>
    )
}

export default Common;