import React from 'react';
import { Link } from 'react-router-dom';
import './Togofoot.css';

export const Togofoot = () => {
  return (
    <div>
      <footer className="togo-foot-footer text-center text-lg-start text-white" >
        <section className="togo-foot-social d-flex justify-content-between p-4" >
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="https://www.facebook.com/brainwired01/" className="text-white me-4">
              <i className="social fab fa-facebook-f"></i>
            </a>
            <a href="https://x.com/Brainwired3" className="text-white me-4">
              <i className="social fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/brain_wired/?hl=en" className="text-white me-4">
              <i className="social fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/brain-wired/posts/?feedView=all" className="text-white me-4">
              <i className="social fab fa-linkedin"></i>
            </a>
            <a href="https://www.youtube.com/channel/UChbpQq0Vq4h0d9zzBcFJHFQ" className="text-white me-4">
              <i className="social fab fa-youtube"></i>
            </a>
          </div>
        </section>

        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <img src="./imageset/togologo-white.avif" alt="" className="img-fluid w-25 togo-foot-logo" />
                <h6 className="text-uppercase fw-bold togo-foot-company">A venture of Brainwired</h6>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold togo-foot-heading">Products</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                <p><Link to="/westock" className="text-grey togo-foot-link">Westock</Link></p>
                <p><Link to="/Togo" className="text-grey togo-foot-link">Togo</Link></p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold togo-foot-heading">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                <p><Link to="/career" className="text-grey togo-foot-link">Career</Link></p>
                <p><Link to="/team" className="text-grey togo-foot-link">Team</Link></p>
                <p><Link to="/aboutus" className="text-grey togo-foot-link">About us</Link></p>
                <p><Link to="/blog" className="text-grey togo-foot-link">Blog</Link></p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold togo-foot-heading">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                <p><i className="fas fa-home mr-3"></i> 1st Floor, Maker Village, Kerala Technology Innovation Zone, Kinfra Hi-Tech Park Main Rd, North Kalamassery, Kochi, Kerala 683503</p>
                <p><i className="fas fa-envelope mr-3"></i> info@brainwired.in</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2025 Copyright:
          <a className="text-white" href=""> Brainwired.com</a>
        </div>
      </footer>
    </div>
  )
}
