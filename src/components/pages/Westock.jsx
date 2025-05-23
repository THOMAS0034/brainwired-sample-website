import React from 'react'
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import './Westock.css'

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
            <div className="card-cont">
                <div className="card">
        <div className="box-area">
          <div className="box">
            <h1>Heat cycle</h1>
            <img alt="Mountaineering" src="./imageset/heatcycle.jpg" />
            <div className="overlay">
              <h3>Heat cycle</h3>
              <p>lorem40</p>
            </div>
          </div>
          <div className="box">
            <h3>Heat cycle</h3>
            <img alt="Mountaineering" src="./imageset/heatcycle.jpg" />
            <div className="overlay">
              <h3>Heat cycle</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque modi explicabo libero ea nam. Quod.</p>
            </div>
          </div>
          <div className="box">
            <h1>Heat cycle</h1>
            <img alt="Mountaineering" src="./imageset/heatcycle.jpg" />
            <div className="overlay">
              <h3>Heat cycle</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque modi explicabo libero ea nam. Quod.</p>
            </div>
          </div>
          <div className="box">
            <h1>Heat cycle</h1>
            <img alt="Mountaineering" src="./imageset/heatcycle.jpg" />
            <div className="overlay">
              <h3>Heat cycle</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque modi explicabo libero ea nam. Quod.</p>
            </div>
          </div>       
      </div>
                </div>
            </div>
        </div>
    </div>
  )
}
