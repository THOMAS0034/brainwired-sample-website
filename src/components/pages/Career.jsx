 import React from 'react'
import './Career.css'
import { color } from 'framer-motion'
import { useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos'
import './Westock.css'
import { motion } from 'framer-motion';

export const Career = () => {
  useEffect(() => {
          AOS.init({ duration: 1000 });
          setTimeout(() => {
            AOS.refresh();
          }, 500);
        }, []);
  return (
     <motion.div
      className="view"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 1 }}
    >
    <div>
      <h1 className='career-heading'>
        Join the Team!
      </h1>
      <h5 style={{padding:'25px',color:'rgb(3, 146, 22)'}}>
        We're looking for passionate and dedicated people who share our vision to join our growing team.
      </h5>
      <p className='career-culture-content'>
        Brainwired works to create a company culture that sustains a creative workforce and encourages a healthy work-life balance.Our employees have opportunities to attend events,share their work, and take time off to volunteer or learn new skills. And We're looking for passionate and dedicated people who share our vision to join our growing team. As part of our commitment to diversity and inclusion, we're cultivating an equitable and empathetic workplace, a listening and learning culture, and an empowered and inspired community.
      </p>
      <h1 className='career-core-values'>
        Our core values
      </h1>
      <div className="core-container">
  <section className="core-section">
    <div className="core-text" data-aos="fade-right">
      <h2>Lead with passion</h2>
      <p>
        We love what we do and we do what we love. We are driven, take ownership for our work, and hold each other responsible.
      </p>
    </div>
    <div className="core-image" data-aos="fade-left">
      <img src="./imageset/leader1.png" alt="Our Vision" />
    </div>
  </section>

  <section className="core-section reverse">
    <div className="core-image" data-aos="fade-right">
      <img src="./imageset/rise.jpg" alt="Technology" />
    </div>
    <div className="core-text" data-aos="fade-left">
      <h2>Continue to grow</h2>
      <p>
        We keep learning, teaching, and growing individually, as a company and as a community.
      </p>
    </div>
  </section>

  <section className="core-section">
    <div className="core-text" data-aos="fade-right">
      <h2>Bring good vibes</h2>
      <p>
        We are positive, respectful team players. We build each other up, and are always ready to go the extra mile to help one another.
      </p>
    </div>
    <div className="core-image" data-aos="fade-left">
      <img src="./imageset/vibe.jpg" alt="Our Team" />
    </div>
  </section>
</div>

    <h1 style={{fontSize:'45px'}}>
      Come Work With Us!
    </h1>
    <h5 style={{paddingTop:'200px',paddingBottom:'300px', fontSize:'35px',color:'rgb(58, 109, 19)'}}>
      careers@brainwired.in
    </h5>
    </div>
    </motion.div>
  )
}
