import React from 'react'
import './Blog.css'
import { motion } from 'framer-motion'

export const Blog = () => {
  return (
     <motion.div
      className="view"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 1 }}
    >
    <div>
         <div className="blog-container">
      <h1 className="title">Our Blogs</h1>

      <div className="blog">
        <img src="./imageset/blog1.jpg" alt="Namita Thapar" className="blog-image" />
        <div className="blog-content">
          <h2 className="blog-title">
            My leadership learnings and regrets: Shark Tank India tested every ounce of my inner strength
          </h2>
          <p className="blog-description">
            This is the third article in a series published every week, where Namita Thapar, Executive Director, Emcure Pharmaceuticals relives her experiences as a Shark on Shark Tank India.....
          </p>
          <span className="badge namita">Namita Thapar</span>
          <span className="date">8 Feb, 2022</span>
        </div>
      </div>

      <div className="blog">
        <img src="./imageset/blog2.png" alt="Shark Tank Startups" className="blog-image" />
        <div className="blog-content">
          <h2 className="blog-title">
            <a href="#" className="blog-link">
              From Get-A-Whey To Skippi, Here's How These Startups' Sales Changed After Coming To Shark Tank India
            </a>
          </h2>
          <p className="blog-description">
            NoShark Tank India season 1 was a refreshing change for prime time Indian television...
          </p>
          <span className="badge career">CAREER</span>
          <span className="date">May 14, 2022</span>
        </div>
      </div>

      <div className="blog">
        <img src="./imageset/blog3.png" alt="Agri India Hackathon Winners" className="blog-image" />
        <div className="blog-content">
          <h2 className="blog-title">Agri India Hackathon Winners</h2>
          <p className="blog-description">
            WESTOCK – IoT/ML based ear tag for livestock health monitoring and tracking system while observing livestock behavioural parameters......
          </p>
          <span className="badge twitter">Twitter</span>
          <span className="date">27 Feb, 2021</span>
        </div>
      </div>
      <div className="blog">
        <img src="./imageset/blog4.jpg" alt="Agri India Hackathon Winners" className="blog-image" />
        <div className="blog-content">
          <h2 className="blog-title">Artificial Intelligence & IoT Incorporated in Livestock Farming and Cattle Trading in India
</h2>
          <p className="blog-description">
            MoooFarm reared 18 crores in seed funding in January this year. The government also introduced apps such as e-Gopala in August 2020 to assist farmers in selecting higher livestock and boosting dairy output....... Read more ...
          </p>
          <span className="badge twitter">Twitter</span>
          <span className="date">27 Feb, 2021</span>
        </div>
      </div>
      <div className="blog">
        <img src="./imageset/blog5.jpg" alt="Agri India Hackathon Winners" className="blog-image" />
        <div className="blog-content">
          <h2 className="blog-title">Cattle trade and livestock farming in India get a touch of AI, IoT</h2>
          <p className="blog-description">
           Jaipur-based cattle farmer Gabduram Meena used to travel frequently to cattle fairs, but when the pandemic struck in 2020, fairs closed and laws around animal trade became stricter....... Read more ...
          </p>
          <span className="badge twitter">Twitter</span>
          <span className="date">27 Feb, 2021</span>
        </div>
      </div>
      <div className="blog">
        <img src="./imageset/blog6.jpg" alt="Agri India Hackathon Winners" className="blog-image" />
        <div className="blog-content">
          <h2 className="blog-title">Discover 5 Top Digital Livestock Management Solutions</h2>
          <p className="blog-description">
            Staying ahead of the technology curve means strengthening your competitive advantage. That is why we give you data-driven innovation insights into the agriculture sector....... Read more ...
          </p>
          <span className="badge twitter">Twitter</span>
          <span className="date">27 Feb, 2021</span>
        </div>
      </div>
      <div className="blog">
        <img src="./imageset/blog7.jpg" alt="Agri India Hackathon Winners" className="blog-image" />
        <div className="blog-content">
          <h2 className="blog-title">Brainwired (Drakon Innovations Pvt ltd)’s Post</h2>
          <p className="blog-description">
            It is an amazing moment when leading minds of our generation validate your idea and believe in your vision.:rocket: Thank you Peyush Bansal for being the amazing person you are and for joining our cause. We aim to reach greater heights together along with you and other #sharks . ....... Read more
          </p>
          <span className="badge twitter">Twitter</span>
          <span className="date">27 Feb, 2021</span>
        </div>
      </div>
      <div className="blog">
        <img src="./imageset/blog8.png" alt="Agri India Hackathon Winners" className="blog-image" />
        <div className="blog-content">
          <h2 className="blog-title">Meet the 24 winning startups of Maharashtra Startup Week 2020</h2>
          <p className="blog-description">
            Since its inception in 2018, the Maharashtra Startup Week has grown to be a major platform for entrepreneurial talent in the country to work .... Read more ..
          </p>
          <span className="badge twitter">Twitter</span>
          <span className="date">27 Feb, 2021</span>
        </div>
      </div>
    </div>
    </div>
    </motion.div>
  )
}
