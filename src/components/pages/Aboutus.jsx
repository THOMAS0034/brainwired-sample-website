import React from 'react'
import './Aboutus.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Aboutus = () => {
  useEffect(() => {
          AOS.init({ duration: 1000 });
          setTimeout(() => {
            AOS.refresh();
          }, 500);
        }, []);

  return (
    <div className="aboutus-container">
      <h1>
          “Providing affordable and efficient livestock health monitoring and tracking system“ 
        </h1>
      <section className="aboutus-section">
        <div className="aboutus-text">
          <h2>Our Vision</h2>
          <p>
            At Brainwired, we envision a future where technology empowers livestock farmers to achieve
            unmatched health monitoring and productivity. We strive to bring affordable and smart solutions 
            to transform traditional farming into data-driven and efficient enterprises.
          </p>
        </div>
        <div className="aboutus-image">
          <img src="./imageset/aboutus1.jpg" alt="Our Vision" />
        </div>
      </section>
      <section className="aboutus-section reverse">
        <div className="aboutus-image">
          <img src="./imageset/aboutus2.jpg"  alt="Technology" />
        </div>
        <div className="aboutus-text">
          <h2>Innovative Technology</h2>
          <p>
            We utilize cutting-edge IoT devices and data analytics to deliver real-time monitoring of livestock health,
            enabling early detection of issues, improving animal welfare, and reducing manual labor on farms.
          </p>
        </div>
      </section>
      <section className="aboutus-section">
        <div className="aboutus-text">
          <h2>Dedicated Team</h2>
          <p>
            Our passionate and multidisciplinary team combines expertise in agriculture, engineering, and data science,
            working relentlessly to develop innovative products tailored for farmers’ needs and challenges.
          </p>
        </div>
        <div className="aboutus-image">
          <img src="./imageset/aboutus3.jpg"  alt="Our Team" />
        </div>
      </section>
      <section className="aboutus-history">
        <h2 style={{padding:'100px'}}>A Brief Brainwired History</h2>
      </section>
              <p className='history' data-aos='fade-in' data-aos-delay='100'>
          Brainwired is an agritech startup based out of Kochi, which has developed a livestock health monitoring, and tracking system named WeSTOCK, that uses an IoT ear tag and a unique ML algorithm to identify sick and pregnant livestock and alert farmers accordingly. Mr Sreeshankar S Nair and Mr Romeo P Jerard founded the company in February 2018.
Coming from an agriculture background both co-founders wanted to develop a solution to help their grandparents with their dairy farm, what started as a project then ended being a venture when they realized the importance of modern-day agricultural practices in the livestock sector. WeSTOCK monitors the day-to-day activity of particular livestock and alerts farmers in case of any emergency. The whole system is highly customizable giving farmers the ability to choose from features allowing affordability and still ensuring quality. The technology being built in-house is created to support the farmers and livestock in the country.
Our team has a passion for making things with real value. This has led us to assemble a multi-talented group that can do just about anything. We believe in creating a brand through strategy, story-telling, products, and integrated experiences on web, mobile, and in the world. So that we become a household name among Indian farmers becoming a symbol of trust and quality.
        </p>

    </div>
  );
};
