import React from 'react'
import './Service.css'
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

export const Service = () => {
        useEffect(() => {
            AOS.init({ duration: 1000 });
            setTimeout(() => {
              AOS.refresh();
            }, 500);
          }, []);
  return (
    <div>
        <h1>What we provide</h1>
<div className="togo-features">
  <h1 className='togo-featurehead' data-aos='zoom-in' data-aos-delay='400' style={{color:'rgb(234, 144, 33)'}}>Online Vet Consultations</h1>
  <div className="togo-flex-right">
    <img className='togo-feature-image' src='./imageset/togo_health.png'/>
    <p className='togo-feature-content' data-aos='fade-left' data-aos-delay='500'>
      TOGO connects pet owners with licensed veterinarians for real-time online consultations. Whether it’s a health concern, a behavioral issue, or an emergency, expert advice is just a click away—ensuring your pet receives timely and accurate care from the comfort of home.
    </p>
  </div>

  <h1 className='togo-featurehead' data-aos='zoom-in' data-aos-delay='400' style={{color:'rgb(225, 38, 38)'}}>Medicine & Supplements Delivery</h1>
  <div className="togo-flex-left">
    <img className='togo-feature-image' src='./imageset/togo_location.png'/>
    <p className='togo-feature-content' data-aos='fade-right' data-aos-delay='500'>
      TOGO makes pet healthcare easier by enabling doorstep delivery of prescribed medications, supplements, and essential treatments. Easily order your vet-prescribed medicines directly through the app and never miss a dose again.
    </p>
  </div>

  <h1 className='togo-featurehead' data-aos='zoom-in' data-aos-delay='400' style={{color:'rgb(41, 125, 209)'}}>Personalized Nutrition Guidance</h1>
  <div className="togo-flex-right">
    <img className='togo-feature-image' src='./imageset/togo_activity.png'/>
    <p className='togo-feature-content' data-aos='fade-left' data-aos-delay='500'>
      Every pet is unique—and so are their dietary needs. TOGO provides tailored nutritional advice based on your pet’s breed, age, weight, and medical history. Get vet-backed diet plans and food suggestions to ensure optimal health and longevity.
    </p>
  </div>

  <h1 className='togo-featurehead' data-aos='zoom-in' data-aos-delay='400' style={{color:'rgb(175, 88, 179)'}}> On-Demand Grooming Services</h1>
  <div className="togo-flex-left">
    <img className='togo-feature-image' src='./imageset/togo_behavior.png'/>
    <p className='togo-feature-content' data-aos='fade-right' data-aos-delay='500'>
      Keep your pets clean, healthy, and stylish with TOGO’s on-demand grooming feature. Book professional groomers for at-home grooming appointments that include bathing, nail clipping, hair trimming, and more.
    </p>
  </div>

  <h1 className='togo-featurehead' data-aos='zoom-in' data-aos-delay='400' style={{color:'rgb(100, 118, 61)'}}>Home-Based Medical Testing</h1>
  <div className="togo-flex-right">
    <img className='togo-feature-image' src='./imageset/togo_environment.png'/>
    <p className='togo-feature-content' data-aos='fade-left' data-aos-delay='500'>
        TOGO allows pet owners to schedule essential medical tests like blood tests, stool samples, or allergy checks right from their home. Certified professionals collect samples and upload results directly into your TOGO health dashboard.
    </p>
  </div>

  <h1 className='togo-featurehead' data-aos='zoom-in' data-aos-delay='400' style={{color:'rgb(255, 140, 0)'}}>Pet Marketplace & E-Commerce</h1>
  <div className="togo-flex-left">
    <img className='togo-feature-image' src='./imageset/togo_vet.png'/>
    <p className='togo-feature-content' data-aos='fade-right' data-aos-delay='500'>
      Explore TOGO’s all-in-one marketplace where you can buy and sell pets or accessories, and access a full-fledged e-commerce section to shop for food, toys, accessories, apparel, and more—curated by trusted pet brands.
    </p>
  </div>
</div>
</div>
  )
}
