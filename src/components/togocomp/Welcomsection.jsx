import React, { useEffect, useState } from "react";
import "./Welcomesection.css";
import { div } from "framer-motion/client";
import { motion } from "framer-motion";
export default function Welcomesection() {
  return (
    <motion.div
          className="view"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration:  1 }}
        >
    <div>
        <div className="intro">
            <h1 className="intro1">
                Brainwired presents
            </h1>
            <img src="./imageset/togologo.avif" alt="" />
        </div>
        <div className="welcome-section">
            <div className="welcome-text">
                <h1 className="welcome-texth1" style={{color:"white"}}>
                    Smart Healthcare
                </h1>
                <h1 className="welcome-texth11" style={{color:"black"}}>
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
    </motion.div>
  );
}
