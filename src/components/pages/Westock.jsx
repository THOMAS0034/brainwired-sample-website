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
            <img className='westock_tagimg' src='./imageset/westocktag.webp'/>
            <p className='westock-content' data-aos='fade-in' data-aos-delay='100'>
                WeStock is an advanced IoT-based health and environment monitoring system specifically designed for dairy and beef cattle.
                 It helps farmers track the reproductive, physical, and environmental conditions of their cows in real-time. With sensor-based data collection
                  and intelligent alerts, WeStock enhances herd health, reduces manual labor, and improves farm productivity by ensuring timely interventions for breeding,
                illness, and environmental threats. Whether you're managing a small dairy or a large-scale cattle farm, WeStock brings smart farming to your fingertips.
            
            </p>
            <h1 className='westock-features' data-aos='fade-in' data-aos-delay='200'>
                FEATURES
            </h1>
            <h1 className='featurehead' data-aos='fade-in' data-aos-delay='300' style={{color:'rgb(232, 61, 61)'}}>Heat Cycle Detection</h1>
            <p className='feature-content' data-aos='fade-in' data-aos-delay='400'>
              Detecting a cow’s heat cycle at the right time is critical for improving breeding success and farm productivity. WeStock’s heat cycle detection system leverages advanced motion sensors and behavioral analytics to monitor signs of estrus, such as increased restlessness, mounting behavior, and reduced feed intake. By analyzing these subtle indicators in real-time, the system can accurately identify when a cow is in heat and send timely alerts to the farmer. This eliminates the need for manual observation, which is often unreliable and time-consuming, and instead enables a data-driven approach to breeding. As a result, farmers can plan insemination more effectively, reduce the number of failed breeding attempts, and enhance herd fertility outcomes over time.
            </p>
            <h1 className='featurehead' data-aos='fade-in' data-aos-delay='300' style={{color:'rgb(234, 144, 33)'}}>Body Temperature Monitoring</h1>
            <p className='feature-content' data-aos='fade-in' data-aos-delay='400'>
              Body temperature is a vital sign of a cow’s health, and deviations from the normal range can be early indicators of illness or stress. WeStock’s body temperature monitoring feature continuously tracks each animal's temperature using precision sensors that are either wearable or integrated into the livestock environment. This data is processed in real-time, and if a cow’s temperature rises due to fever or drops due to environmental stress, the system immediately alerts the farmer. By catching these warning signs early, the feature allows for quick veterinary intervention, preventing the escalation of health issues and minimizing treatment costs. This not only supports animal welfare but also protects farm productivity by reducing sick days and improving recovery rates.
            </p>
            <h1 className='featurehead' data-aos='fade-in' data-aos-delay='300' style={{color:'rgb(39, 205, 69)'}}>Health Issue Prediction</h1>
            <p className='feature-content' data-aos='fade-in' data-aos-delay='400'>
              WeStock goes beyond simple health tracking with its intelligent Health Issue Prediction capability. By continuously collecting and analyzing data such as temperature trends, activity levels, feeding patterns, and behavioral shifts, the system can detect anomalies that may indicate the onset of disease or discomfort. Whether it’s identifying the early stages of mastitis, lameness, or digestive issues, the AI engine flags potential problems before visible symptoms appear. This proactive approach gives farmers a crucial advantage in managing herd health, enabling timely treatment and reducing the risk of widespread illness. Over time, this not only improves the longevity and well-being of the cows but also results in significant cost savings and better overall herd performance.
            </p>
            <h1 className='featurehead' data-aos='fade-in' data-aos-delay='300' style={{color:'rgb(47, 192, 197)'}}>Movement & Activity Tracking</h1>
            <p className='feature-content' data-aos='fade-in' data-aos-delay='400'>
              Movement and activity are strong indicators of a cow’s health, comfort, and productivity. WeStock’s activity tracking feature uses wearable sensors or environmental monitors to record walking patterns, lying time, step count, and overall mobility. These data points are analyzed to detect behavioral changes that may indicate lameness, injury, stress, or even calving. For example, reduced movement may point to discomfort or disease, while hyperactivity might suggest a cow is in heat. By providing detailed insights into each animal’s daily routine, the system empowers farmers to make informed decisions quickly. This not only enhances animal care but also boosts efficiency by reducing guesswork and ensuring timely interventions.
            </p>
        </div>
    </div>
  )
}
