import React, { useEffect } from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import RotatingText from '../Roatingtext';
import { useNavigate } from 'react-router-dom';


export const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 });
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);

  return (
    <div className='view'>
      <div>
        <div className="firstimage">
        <img
          className='homeimage1'
          src="/imageset/homepage.png"
          alt="Farm"
        />
        <h1 className='hometext'>
          ENCHANCING
          LIVESTOCK {''}
          <RotatingText texts={['HEALTH', 'WELLNESS', 'VITALITY','YIELD']} />
        </h1>
        </div>
        <p
          className='p1'
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Brainwired is an agritech startup based out of India,
          which has developed a livestock health monitoring, and tracking system named WeSTOCK.
          Our motive is to empower the lifestyle of all livestock farmers with high end technology
          at an affordable rate. Our team has a passion for making things with real value. This has
          led us to assemble a multi-talented group that can do just about anything. We believe in
          creating a brand through strategy, story-telling, products, and integrated experiences on web,
          mobile, and in the world. So that we become a household name among Indian farmers becoming a
          symbol of trust and quality.
        </p>
      </div>

      <div
        className='discover_block'
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <h1 className='discover-head'>Discover our products</h1>
      </div>

      <div className="product-cards" data-aos="zoom-in" data-aos-delay="700">
        <div className="product-card">
          <img className='product-image'  src='./imageset/westocktag.webp'/>
          <div className="product-info">
        <h1 className='product-info'>We stock</h1>
        <h5>(cowboy)</h5>
        <p className='product-desc'>WeStock is an innovative livestock management platform designed to help farmers monitor the health and
           activity of their animals in real time. By using IoT-enabled devices and data analytics, WeStock enables early detection of health issues,
            reduces manual labor, and improves overall farm productivity. Its user-friendly dashboard provides insights into animal behavior, movement,
             and vital signs, allowing for proactive care and efficient decision-making in livestock farming.
           </p>
           <button className='product-btn' onClick={() => navigate('/Westock')}>
            Know more
           </button>
           </div>
        </div>
        <div className="product-card" style={{backgroundColor:'rgb(38, 137, 152)'}}>
          <img className='product-image'  src='./imageset/westocktag.webp'/>
          <div className="product-info">
        <h1 className='product-info'>Togo</h1>
        <p className='product-desc'>The Togo Pet Care Collar is a smart wearable device created to monitor the well-being of pets.
           Equipped with sensors, it tracks parameters such as activity levels, temperature, and location, helping pet owners stay
            informed about their pets' health and safety. The collar connects to a mobile app, offering real-time alerts and daily
             activity summaries, making it easier to detect unusual behavior and ensure timely care for companion animals.
           </p>
           <button className='product-btn'>
            Know more
           </button>
           </div>
        </div>
        <div className="product-card" style={{backgroundColor:'rgba(212, 64, 27, 0.96)'}}>
          <img className='product-image'  src='./imageset/westocktag.webp'/>
          <div className="product-info">
        <h1 className='product-info'>Westock</h1>
        <h5>(Rancher)</h5>
        <p className='product-desc'>WeStock Rancher is an innovative horse management platform built to help ranchers and equestrian 
          professionals monitor the health and activity of their horses in real time. By leveraging IoT-enabled devices and intelligent data analytics,
           WeStock Rancher enables early detection of health concerns, reduces manual effort, and enhances overall ranch efficiency.
             </p>
           <button className='product-btn'>
            Coming soon
           </button>
           </div>
        </div>
        <div className="product-card" style={{backgroundColor:'rgb(106, 123, 255)'}}>
          <img className='product-image'  src='./imageset/westocktag.webp'/>
          <div className="product-info">
        <h1 className='product-info'>Westock</h1>
        <h5>(Dunes)</h5>
        <p className='product-desc'>WeStock Dunes is a smart livestock management solution tailored for goat farmers.
           Using IoT-powered sensors and advanced data analytics, WeStock Dunes provides real-time monitoring of goat health,
            activity, and environmental conditions. The platform helps detect early signs of illness or stress, reducing losses
             and improving herd productivity. With its user-friendly interface, farmers can track feeding behavior, mobility, and
              vital parameters—enabling timely interventions and smarter, data-driven decisions for sustainable goat farming.
           </p>
           <button className='product-btn'>
            Coming soon
           </button>
           </div>
        </div>
        <div className="product-card" style={{backgroundColor:'rgb(188, 101, 25)'}}>
          <img className='product-image'  src='./imageset/westocktag.webp'/>
          <div className="product-info">
        <h1 className='product-info'>Togo</h1>
        <p className='product-desc'>The Togo Pet Care Collar is a smart wearable device created to monitor the well-being of pets.
           Equipped with sensors, it tracks parameters such as activity levels, temperature, and location, helping pet owners stay
            informed about their pets' health and safety. The collar connects to a mobile app, offering real-time alerts and daily
             activity summaries, making it easier to detect unusual behavior and ensure timely care for companion animals.
           </p>
           <button className='product-btn'>
            Coming soon
           </button>
           </div>
        </div>
        <div className="product-card" style={{backgroundColor:'rgb(145, 77, 152)'}}>
          <img className='product-image'  src='./imageset/westocktag.webp'/>
          <div className="product-info">
        <h1 className='product-info'>Togo</h1>
        <p className='product-desc'>The Togo Pet Care Collar is a smart wearable device created to monitor the well-being of pets.
           Equipped with sensors, it tracks parameters such as activity levels, temperature, and location, helping pet owners stay
            informed about their pets' health and safety. The collar connects to a mobile app, offering real-time alerts and daily
             activity summaries, making it easier to detect unusual behavior and ensure timely care for companion animals.
           </p>
           <button className='product-btn'>
            Coming soon
           </button>
           </div>
        </div>
        </div>
        <h1 className='partner-head'>
            Awards and Recognition
        </h1>
        <div className='award-container' data-aos="zoom-in" data-aos-delay="300">
          <div className="part-card">
              <img className='part-image'  src='./imageset/a1.webp'/>
          </div>
          <div className="part-card">
              <img className='part-image'  src='./imageset/a2.webp'/>
          </div>
          <div className="part-card">
              <img className='part-image'  src='./imageset/a3.webp'/>
          </div>
          <div className="part-card">
              <img className='part-image'  src='./imageset/a4.webp'/>
          </div>
          <div className="part-card">
              <img className='part-image'  src='./imageset/a5.webp'/>
          </div>
          <div className="part-card">
              <img className='part-image'  src='./imageset/a6.webp'/>
          </div>
          <div className="part-card">
              <img className='part-image'  src='./imageset/a7.webp'/>
          </div>
          <div className="part-card">
              <img className='part-image'  src='./imageset/a8.webp'/>
          </div>
          <div className="part-card">
              <img className='part-image'  src='./imageset/a9.webp'/>
          </div>
          <div className="part-card">
              <img className='part-image'  src='./imageset/a10.webp'/>
          </div>
          <div className="part-card">
              <img className='part-image'  src='./imageset/a11.webp'/>
          </div>
      </div>
        <h1 className='partner-head'>
            Our partners
        </h1>
        <div className='part-container' data-aos="zoom-in" data-aos-delay="300">
          <div className="part-card">
              <img className='part-image'  src='./imageset/part1.webp'/>
          </div>
          <div className="part-card">
              <img className='part-image'  src='./imageset/part2.webp'/>
          </div>
          <div className="part-card">
              <img className='part-image'  src='./imageset/part3.webp'/>
          </div>
          <div className="part-card">
              <img className='part-image'  src='./imageset/part4.webp'/>
          </div>
          <div className="part-card">
              <img className='part-image'  src='./imageset/part5.webp'/>
          </div>
          <div className="part-card">
              <img className='part-image'  src='./imageset/part6.webp'/>
          </div>
          <div className="part-card">
              <img className='part-image'  src='./imageset/part7.webp'/>
          </div>
          <div className="part-card">
              <img className='part-image'  src='./imageset/part8.webp'/>
          </div>
          <div className="part-card">
              <img className='part-image'  src='./imageset/part9.webp'/>
          </div>
      </div>
      </div>
  );
};
