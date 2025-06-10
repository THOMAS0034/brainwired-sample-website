import React from 'react'
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import './Westock.css'
import { color } from 'framer-motion';
import { motion } from 'framer-motion';

export const Westock = () => {
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
      transition={{ duration:  1 }}
    >
    <div className='westock-view'>
        <div className="westock-img">
            <img  className='westock-logoimg'src='./imageset/westock_logo.webp'/> 
        </div>
        <div className="westock-content">
            <img className='westock_tagimg' src='./imageset/cowboynew.png'/>
            <h3 style={{color:'rgb(29, 157, 52)'}}>Brainwired presents</h3>
            <h1 className='worlds_most'>"worlds most affordable" livestock health monitoring system</h1>
            <p className='westock-content' data-aos='zoom-in' data-aos-delay='200'>
                WeStock is an advanced IoT-based health and environment monitoring system specifically designed for dairy and beef cattle.
                It helps farmers track the reproductive, physical, and environmental conditions of their cows in real-time. With sensor-based data collection
                and intelligent alerts, WeStock enhances herd health, reduces manual labor, and improves farm productivity by ensuring timely interventions for breeding,
                illness, and environmental threats. Whether you're managing a small dairy or a large-scale cattle farm, WeStock brings smart farming to your fingertips.
            
              </p>
              <h1 className='westock-features' data-aos='zoom-in' data-aos-delay='300'>
                  FEATURES
              </h1>
              <div className="feature-container">
              <h1 className='featurehead' data-aos='zoom-in' data-aos-delay='400' style={{color:'rgb(62, 187, 17)'}}>Health care</h1>
              <div className="flex-right">
                <img className='feature-image' src='./imageset/we1.jpg'/>
              <p className='feature-content' data-aos='fade-left' data-aos-delay='500'>
                WeSTOCK is committed to revolutionizing livestock health management by offering the most affordable and accessible healthcare solutions in the world. Our system harnesses the power of Internet of Things (IoT) and Machine Learning (ML) to continuously monitor the physiological and behavioral parameters of animals. By analyzing real-time data collected from wearable sensors, WeSTOCK can detect early signs of illness, stress, or abnormal activity patterns—often before visible symptoms appear. This proactive approach enables timely intervention, reducing the risk of severe diseases and improving overall animal well-being.
              </p>
              </div>
              <h1 className='featurehead' data-aos='zoom-in' data-aos-delay='400' style={{color:'rgb(234, 144, 33)'}}>Activity Monitoring</h1>
              <div className="flex-left">
              <img className='feature-image' src='./imageset/we2.jpg'/>
              <p className='feature-content' data-aos='fade-right' data-aos-delay='500'>
                WeSTOCK’s advanced Activity Monitoring system plays a vital role in safeguarding livestock health by keeping a close watch on their daily behavior and routines. Using precision sensors and intelligent algorithms, the system tracks key metrics such as feeding habits, drinking patterns, rumination time, mobility, and resting behavior. These parameters provide deep insights into the well-being of each animal, helping farmers identify deviations that may indicate stress, illness, or discomfort.
              </p>
              </div>
              <h1 className='featurehead' data-aos='zoom-in' data-aos-delay='400' style={{color:'rgb(225, 38, 38)'}}>Heat Cycle Detection</h1>
              <div className="flex-right">
                <img className='feature-image' src='./imageset/we3.jpg'/>
              <p className='feature-content' data-aos='fade-left' data-aos-delay='500'>
               Accurate tracking of the heat cycle is essential for optimizing reproduction and ensuring higher pregnancy success rates in dairy and beef cattle. WeSTOCK uses advanced motion sensors and behavioral analytics to monitor subtle signs of estrus such as restlessness, increased movement, reduced feed intake, and mounting behavior — indicators that often go unnoticed in manual observation.
              </p>
              </div>
              <h1 className='featurehead' data-aos='zoom-in' data-aos-delay='400' style={{color:'rgb(41, 125, 209)'}}>Weather Monitoring</h1>
              <div className="flex-left">
                <img className='feature-image' src='./imageset/we4.jpg'/>
              <p className='feature-content' data-aos='fade-right' data-aos-delay='500'>
                Maintaining an optimal environment within your livestock shed is critical for animal health, comfort, and productivity. WeSTOCK’s Weather Monitoring system tracks real-time temperature and humidity levels both inside and around your farm.
Using integrated IoT sensors, the system continuously gathers climate data, helping farmers detect unfavorable environmental conditions like excessive heat, cold, or humidity — all of which can negatively affect livestock well-being and performance.
              </p>
              </div>
              <h1 className='featurehead' data-aos='zoom-in' data-aos-delay='400' style={{color:'rgb(175, 88, 179)'}}>Vet Support</h1>
              <div className="flex-right">
                <img className='feature-image' src='./imageset/we5.jpg'/>
              <p className='feature-content' data-aos='fade-left' data-aos-delay='500'>
                Access to expert veterinary care is crucial for maintaining the health and productivity of your livestock. With WeSTOCK’s Vet Support, farmers can easily connect with experienced veterinary professionals from their local region or anywhere across the country — all through a smart, integrated platform.

Whether it’s a routine health check-up, emergency diagnosis, or expert advice on treatment and nutrition, our network of certified vets is available to provide timely and reliable consultation. The system ensures that farmers receive accurate guidance based on real-time data, such as temperature, activity, and feeding patterns gathered by IoT sensors.
              </p>
              </div>
              <h1 className='featurehead' data-aos='zoom-in' data-aos-delay='400' style={{color:'rgb(100, 118, 61)'}}>Proper Documentation</h1>
              <div className="flex-left">
                <img className='feature-image' src='./imageset/we6.jpg'/>
              <p className='feature-content' data-aos='fade-right' data-aos-delay='500'>
               Maintaining accurate and organized farm records is essential for smooth operations and critical when dealing with insurance claims, bank loans, or government schemes. With WeSTOCK’s Proper Documentation feature, farmers can easily manage and store all vital information related to their livestock and farm performance in one secure digital platform.

From individual cattle biodata — including age, breed, health history, and reproductive records — to overall farm productivity metrics like milk yield, feeding schedules, and vet visits, every piece of data is automatically logged and readily accessible.
              </p>
              </div>
              </div>
              <h1 style={{padding:'80px'}}>We'd love to hear from you</h1>
              <h3 style={{padding:'105px'}}>Fill out the form and our team will reach out to you as soon as possible</h3>
              <div className="formsection">
        <div className="form-container">
          <form action="/submit" method="POST">
            <label htmlFor="email">Email:</label><br />
            <input className="input-field" type="email" id="email" name="email" required /><br /><br />

            <label htmlFor="firstName">First Name:</label><br />
            <input className="input-field" type="text" id="firstName" name="firstName" required /><br /><br />

            <label htmlFor="lastName">Last Name:</label><br />
            <input className="input-field" type="text" id="lastName" name="lastName" required /><br /><br />

            <label htmlFor="state">State/Region:</label><br />
            <input className="input-field" type="text" id="state" name="state" required /><br /><br />

            <label htmlFor="phone">Phone Number:</label><br />
            <input className="input-field" type="tel" id="phone" name="phone" required /><br /><br />

            <label htmlFor="numLivestock">Number of Livestock:</label><br />
            <input className="input-field" type="number" id="numLivestock" name="numLivestock" required min="1" /><br /><br />

            <label style={{paddingTop:'25px',paddingBottom:'25px'}} >Type of Livestock:</label><br />
            <div className="checkbox-group">
  <div className="checkbox-item">
    <input className="input-field1" type="checkbox" id="cattle" name="livestockType" value="Cattle" />
    <label htmlFor="cattle">Cattle</label>
  </div>

  <div className="checkbox-item">
    <input className="input-field1" type="checkbox" id="buffalo" name="livestockType" value="Buffalo" />
    <label htmlFor="buffalo">Buffalo</label>
  </div>

  <div className="checkbox-item">
    <input className="input-field1" type="checkbox" id="goat" name="livestockType" value="Goat" />
    <label htmlFor="goat">Goat</label>
  </div>

  <div className="checkbox-item">
    <input className="input-field1" type="checkbox" id="sheep" name="livestockType" value="Sheep" />
    <label htmlFor="sheep">Sheep</label>
  </div>
</div>


            <button className='submit-btn' type="submit">Submit</button>
          </form>
        </div>
      </div>
          </div>
      </div>
      </motion.div>
    )
}
