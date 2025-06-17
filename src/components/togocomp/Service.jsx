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
                <img className='service-card-img' src="./imageset/activity.png" alt="" />
                <h1 className='service-card-head'>Vet Support</h1>
                <p className='service-card-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore neque labore ea temporibus enim explicabo deserunt perferendis ad, minus odit?</p>
            </div>

            <div className="service-card">  
                <img className='service-card-img' src="./imageset/activity.png" alt="" />
                <h1 className='service-card-head'>Vet Support</h1>
                <p className='service-card-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore neque labore ea temporibus enim explicabo deserunt perferendis ad, minus odit?</p>
            </div>

            <div className="service-card">
                <img className='service-card-img' src="./imageset/activity.png" alt="" />
                <h1 className='service-card-head'>Vet Support</h1>
                <p className='service-card-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore neque labore ea temporibus enim explicabo deserunt perferendis ad, minus odit?</p>
            </div>

            <div className="service-card">
                <img className='service-card-img' src="./imageset/activity.png" alt="" />
                <h1 className='service-card-head'>Vet Support</h1>
                <p className='service-card-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore neque labore ea temporibus enim explicabo deserunt perferendis ad, minus odit?</p>
            </div>

            <div className="service-card">
                <img className='service-card-img' src="./imageset/activity.png" alt="" />
                <h1 className='service-card-head'>Vet Support</h1>
                <p className='service-card-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore neque labore ea temporibus enim explicabo deserunt perferendis ad, minus odit?</p>
            </div>

            <div className="service-card">
                <img className='service-card-img' src="./imageset/activity.png" alt="" />
                <h1 className='service-card-head'>Vet Support</h1>
                <p className='service-card-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore neque labore ea temporibus enim explicabo deserunt perferendis ad, minus odit?</p>
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
            </div>
        </div>
    </div>
  )
}
