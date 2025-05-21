import React from 'react'
import './Home.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

export const Home = () => {
    useEffect(() => {
    AOS.init({ duration: 1000 });
  },[]);
  return (
    <div className='view'>
        <div>
        <img className='homeimage1'   src="/imageset/simon-maisch-mTujepy0ers-unsplash.jpg" alt="" />
        <p className='p1' data-aos="fade-up" data-aos-delay="200">Brainwired is an agritech startup based out of India,
            which has developed a livestock health monitoring, and tracking system named WeSTOCK.
            Our motive is to empower the lifestyle of all livestock farmers with high end technology
            at an affordable rate. Our team has a passion for making things with real value. This has
            led us to assemble a multi-talented group that can do just about anything. We believe in
            creating a brand through strategy, story-telling, products, and integrated experiences on web,
             mobile, and in the world. So that we become a household name among Indian farmers becoming a
              symbol of trust and quality</p>
        </div>
        <div className='block square' data-aos="fade-up" data-aos-delay="200">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Neque, ratione asperiores placeat ut culpa quidem ducimus officiis vitae similique iusto totam corporis iure
            earum natus cum consequuntur sint sapiente. Omnis!
        </div>
        <div className='block rect' data-aos="fade-up" data-aos-delay="300">Block 2</div>
        <div className='block square' data-aos="fade-up" data-aos-delay="40">Block 3</div>
        <div className='block rect' data-aos="fade-up" data-aos-delay="500">Block 4</div>
        <div className='block square' data-aos="fade-up" data-aos-delay="600">Block 5</div>
        <div className='block rect' data-aos="fade-up" data-aos-delay="700">Block 6</div>
        <div className='block square' data-aos="fade-up" data-aos-delay="800">Block 7</div>
    </div>
    
  )
}
