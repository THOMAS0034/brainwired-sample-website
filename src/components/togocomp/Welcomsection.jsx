import React, { useEffect, useState } from "react";
import "./Welcomesection.css";
import { div } from "framer-motion/client";

export default function Welcomesection() {
  return (
    <div>
        <div className="intro">
            <h1 className="intro1">
                Brainwired presents
            </h1>
            <h1 className="intro2">TOGO</h1>
        </div>
        <div className="welcome-section">
            <div className="welcome-text">
                <h1 className="" style={{color:"white"}}>
                    Smart Healthcare
                </h1>
                <h1 className="welcome-texth1" style={{color:"black"}}>
                    For Your Beloved Pets
                </h1>
                <h3 className="welcome-texth3">
                    For pets with love
                    From Us!
                </h3>
                <p className="welcome-content">
                    TOGO brings cutting-edge technology to pet healthcare with
                     real-time health monitoring, instant vet consultations, and 
                     comprehensive health tracking
                </p>
                <button className="prebookbtn">
                    Pre-book
                </button>
            </div>
            <div className="welcome-image">
                <img src="./imageset/togolab.png" alt="" />
            </div>
        </div>
    </div>
  );
}
