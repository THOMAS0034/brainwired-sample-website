import React from 'react'
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import './Westock.css'
import { color } from 'framer-motion';

export const Westock = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        setTimeout(() => {
          AOS.refresh();
        }, 500);
      }, []);
  return (
    <div className='westock-view'>
        <div className="westock-img">
            <img  className='westock-logoimg'src='./imageset/westock_logo.webp'/> 
        </div>
        <div className="westock-content">
            <img className='westock_tagimg' src='./imageset/cowboynew.png'/>
            <h3 style={{color:'rgb(29, 157, 52)'}}>Brainwired presents</h3>
            <h1 className='worlds_most' style={{width:'40%', margin:'auto',paddingBottom:'150px',paddingTop:'50px'}}>“ worlds most affordable “
livestock health monitoring system</h1>
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
          </div>
      </div>
    )
}
