import React from 'react'
import './Service.css'
import { rgba } from 'framer-motion'

export const Service = () => {
  return (
    <div>
        <h1 className='paltoo-header' >Introducing Paltoo collar</h1>
        <div className="paltooheader">
            <img className='paltoo-img' src="./imageset/paltoo-collar.avif" alt="" />
            <div className="paltoo-text">
                <h1 className='paltoo-text-h1'>PALTOO COLLAR</h1>
                <h3 className='paltoo-text-h3'>  The Smart Collar That Keeps Your Pet Safe & Healthy</h3>
            <p className='paltoo-def'>Paltoo is an AI-powered smart collar that continuously monitor’s your pet’s vital signs, activity levels and behaviour patterns. Get real-time alerts and insights about your pet’s health directly in your smartphone</p>
            </div>
        </div>

        <h1 className='explore-feat'>Explore The Features of Paltoo</h1>


        <div className="service-container">
            <div className="service-card">
                <img className='service-card-img' src="./imageset/health.avif" alt="" />
                <h1 className='service-card-head'>Health Monitoring</h1>
                <p className='service-card-content'>Tracks vital signs including heart rate, respiration, body temperature, and activity levels in real-time. Advanced sensors detect even subtle changes in your pet's health parameters.</p>
            </div>

            <div className="service-card">  
                <img className='service-card-img' src="./imageset/activity.png" alt="" />
                <h1 className='service-card-head'>Vet Support</h1>
                <p className='service-card-content'>Includes services that provides vet services for the customer. find and contact vets that are nearby and book an appoinment for your pets!</p>
            </div>

            <div className="service-card">
                <img className='service-card-img' src="./imageset/smartalerts.avif" alt="" />
                <h1 className='service-card-head'>Smart Alerts</h1>
                <p className='service-card-content'>Receive immediate notifications for abnormal health patterns, emergency situations, and activity changes.</p>
            </div>

            <div className="service-card">
                <img className='service-card-img' src="./imageset/aihealth.avif" alt="" />
                <h1 className='service-card-head'>AI Health Analysis</h1>
                <p className='service-card-content'>AI-powered analysis provides personalized health insights and early detection of potential health issues.</p>
            </div>

            <div className="service-card">
                <img className='service-card-img' src="./imageset/activitytrack.avif" alt="" />
                <h1 className='service-card-head'>Activity Tracking</h1>
                <p className='service-card-content'>Monitor daily exercise, rest periods, and overall activity patterns to ensure optimal pet wellness.</p>
            </div>

            <div className="service-card">
                <img className='service-card-img' src="./imageset/settings.avif" alt="" />
                <h1 className='service-card-head'>Customizable Settings</h1>
                <p className='service-card-content'>Adjust monitoring thresholds and alert preferences based on your pet's specific needs and health conditions.</p>
            </div>
        </div>
        <button className='buy-paltoo' >BUY PALTOO</button>
        <h1 className='togo-header' >Discover our TOGO Application</h1>
        <p className='togo-def'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae velit exercitationem, asperiores non consectetur aliquid. Sed quisquam error, facilis animi eveniet ducimus fuga reprehenderit rerum, corporis tempore possimus, rem atque!</p>
        <div className="togo-learn-container">
            <img className='togo-learn-img' src="./imageset/togo-img.avif" alt="" />
            <div className="togo-learn-text">
                <h1 className='togo-feature-header'>Features of TOGO</h1>
                <div className="togo-feat-container">
                    <div className="togo-feat-card">
                        <h3 className='togo-feat-head'>Pet Profile</h3>
                        <p className='togo-feat-p'>Users can manage pet profile for each pets</p>
                    </div>
                    <div className="togo-feat-card">
                        <h3 className='togo-feat-head'>Pet Profile</h3>
                        <p className='togo-feat-p'>Users can manage pet profile for each pets</p>
                    </div>

                    <div className="togo-feat-card">
                        <h3 className='togo-feat-head'>Pet Profile</h3>
                        <p className='togo-feat-p'>Users can manage pet profile for each pets</p>
                    </div>

                    <div className="togo-feat-card">
                        <h3 className='togo-feat-head'>Pet Profile</h3>
                        <p className='togo-feat-p'>Users can manage pet profile for each pets</p>
                    </div>
                </div>
                <button className="togo-learn-btn">Learn More</button>
            </div>
        </div>
        <div className="contact-section">
  <div className="contact-left">
    <h1>We'd love to
hear
from you</h1>
    <p>
      Fill up the form and our team will get back to you as soon as possible
    </p>
    <div className="contact-info">
      <p>📞 +91 9995985324</p>
      <p>📧 info@brainwired.in</p>
    </div>
  </div>

  <form className="contact-form">
    <div className="form-row">
      <input className="input-field" type="text" placeholder="Your First Name" name="firstName" required />
      <input className="input-field" type="text" placeholder="Your Last Name" name="lastName" required />
    </div>

    <div className="form-row">
      <input className="input-field" type="email" placeholder="Your Email" name="email" required />
      <input className="input-field" type="tel" placeholder="Your Phone" name="phone" required />
    </div>

    <input className="input-field" type="text" placeholder="State/Region" name="state" required />
    <input className="input-field" type="number" placeholder="No. of Pets (Dog or Cat)" name="numLivestock" required />

    <textarea className="input-field" placeholder="Your Message (optional)" rows="4" />

    <button className="submit-btn" type="submit">Submit form</button>
  </form>
    </div>
    </div>
  )
}
