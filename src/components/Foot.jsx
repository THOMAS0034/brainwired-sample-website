import React from 'react'
import './Foot.css'
import { Link } from 'react-router-dom'
export const Foot = () => {
  return (
  <footer className="text-center text-lg-start text-white" style={{ backgroundColor:'rgb(47, 47, 47)' }}>
    <section className="d-flex justify-content-between p-4" style={{ backgroundColor:'rgb(0, 166, 36)' }}>
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
            <img src="./imageset/logo.webp" alt="" className="img-fluid w-25"/>
            <h6 className="text-uppercase fw-bold">Brainwired</h6>

            <p>
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Products</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
            <p><Link to="/westock" className="text-white">Westock</Link></p>
            <p><a href="#!" className="text-white">Togo</a></p>   
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Useful links</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
            <p><Link to="/career" className="text-white">Career</Link></p>
            <p><Link to="/team" className="text-white">Team</Link></p>
            <p><Link to="/aboutus" className="text-white">About us</Link></p>
            <p><Link to="/blog" className="text-white">Blog</Link></p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
            <p><i className="fas fa-home mr-3"></i> 1st Floor, Maker Village, Kerala Technology Innovation Zone, Kinfra Hi-Tech Park Main Rd, North Kalamassery, Kochi, Kerala 683503</p>
            <p><i className="fas fa-envelope mr-3"></i> info@brainwired.in</p>
          </div>
        </div>
      </div>
    </section>

    <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
      © 2025 Copyright:
      <a className="text-white" href="">Brainwired.com</a>
    </div>
  </footer>

  )
}

