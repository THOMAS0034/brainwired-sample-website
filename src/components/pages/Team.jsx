  import React from 'react'
  import './Team.css'
  import { motion } from 'framer-motion'

  export const Team = () => {
    return (
      <motion.div
      className="view"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 1 }}
    >
      <div>
        <h1 style={{padding:'50px'}}>Our Founders</h1>
        <div className="founder-cards">
          <div className="founder-card">
            <img className='founder-image'  src='./imageset/sreeshankar.webp'/>
            <div className="founder-content">
          <h1 className='founder-name'>Sreeshankar nair</h1>
          <h5 style={{fontWeight:700,color:'rgb(25, 104, 22)',paddingBottom:'25px',fontSize:'15px'}}>CO-FOUDNER & CEO</h5>
          <p className='founder-motive'>An Innovation isn't worthful unless it is meaningful for the less fortunate, Brainwired is a dream to bring the smiles back to our farmers
            </p>
            <a href="https://www.linkedin.com/in/sreeshankar-nair-6b1414144" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-linkedin" style={{ fontSize: '24px', color: '#0e76a8' }}></i>
</a>
            </div>
          </div>
          <div className="founder-card">
            <img className='founder-image'  src='./imageset/romeo.webp'/>
            <div className="founder-content">
          <h1 className='founder-name'>Romeo P Jerard</h1>
          <h5 style={{fontWeight:700,color:'rgb(25, 104, 22)',paddingBottom:'25px',fontSize:'15px'}}>CO-FOUNDER & COO</h5>
          <p className='founder-motive'>There is more happiness in giving than in receiving, Brainwired tries to bring happiness to our farmers
            </p>
            <a href="https://in.linkedin.com/in/romeo-p-jerard-1059ab15a" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-linkedin" style={{ fontSize: '24px', color: '#0e76a8' }}></i>
</a>
            </div>
          </div>
          <div className="founder-card">
            <img className='founder-image'  src='./imageset/praveen.webp'/>
            <div className="founder-content">
          <h1 className='founder-name'>Praveen Ramachandran</h1>
          <h5 style={{fontWeight:700,color:'rgb(25, 104, 22)',paddingBottom:'25px',fontSize:'15px'}}>CRO</h5>
          <p className='founder-motive'>The path to the goal becomes clear when we know exactly where we want to go. My dream is to become an humble industrialist, a person who can help the generations to come for pursuing to build an ecologically sustainable solutions to face the global problems
            </p>
            <a href="https://in.linkedin.com/in/praveen-ramachandran-agco01" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-linkedin" style={{ fontSize: '24px', color: '#0e76a8' }}></i>
</a>
            </div>
          </div>
          <div className="founder-card">
            <img className='founder-image'  src='./imageset/sajil.png'/>
            <div className="founder-content">
          <h1 className='founder-name'>Sajil V S</h1>
          <h5 style={{fontWeight:700,color:'rgb(25, 104, 22)',paddingBottom:'25px',fontSize:'15px'}}>CTO</h5>
          <p className='founder-motive'>I see a world where machines would work with humans and I work on my version of JARVIS to fulfill this dream, I believe in people, and people who share the same vision and work together in achieving the same goal is the real strength
            </p>
            <a href="https://www.linkedin.com/in/sreeshankar-nair-6b1414144" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-linkedin" style={{ fontSize: '24px', color: '#0e76a8' }}></i>
</a>
            </div>
          </div>
        </div>



        <h1 style={{padding:'75px'}}>Our Mentors</h1>
         <div className="team-section">
      <div className="team-row1">
      <div className="team-cards">
        <div className="team-card">
          <img src="./imageset/m1.png" alt="Sreeshankar Nair" className="team-image" />
          <h3 className="team-name">Peyush Bansal</h3>
          <p style={{fontWeight:700,color:'rgb(25, 104, 22)',paddingBottom:'5px',fontSize:'15px'}}>CEO and founder of Lenskart</p> 
        </div>
        <div className="team-card">
          <img src="./imageset/m2.png" alt="Sreeshankar Nair" className="team-image" />
          <h3 className="team-name">Namita Thapar</h3>
          <p style={{fontWeight:700,color:'rgb(25, 104, 22)',paddingBottom:'5px',fontSize:'15px'}}>Executive Director at Emcure Pharmaceuticals Ltd</p>  
        </div>
        <div className="team-card">
          <img src="./imageset/m3.webp" alt="Sreeshankar Nair" className="team-image" />
          <h3 className="team-name">Aman Gupta</h3>
          <p style={{fontWeight:700,color:'rgb(25, 104, 22)',paddingBottom:'5px',fontSize:'15px'}}>Co Founder and CMO at boAt Lifestyle</p> 
        </div>
        <div className="team-card">
          <img src="./imageset/m4.webp" alt="Sreeshankar Nair" className="team-image" />
          <h3 className="team-name">Ashneer Grover</h3>
          <p style={{fontWeight:700,color:'rgb(25, 104, 22)',paddingBottom:'5px',fontSize:'15px'}}>Ex MD | Founder - BharatPe</p> 
        </div>
        <div className="team-card">
          <img src="./imageset/m5.png" alt="Sreeshankar Nair" className="team-image" />
          <h3 className="team-name">Dhianu Das</h3>
          <p style={{fontWeight:700,color:'rgb(25, 104, 22)',paddingBottom:'5px',fontSize:'15px'}}>Founder, Agility Ventures</p> 
        </div>
        <div className="team-card">
          <img src="./imageset/m6.png" alt="Sreeshankar Nair" className="team-image" />
          <h3 className="team-name">Munish Bhatia</h3>
          <p style={{fontWeight:700,color:'rgb(25, 104, 22)',paddingBottom:'5px',fontSize:'15px'}}>General Partner, India Accelerator </p> 
        </div>
        </div>
        <div className="team-row2">
        <div className="team-card">
          <img src="./imageset/m7.png" alt="Sreeshankar Nair" className="team-image" />
          <h3 className="team-name">Gaurav Saraogi</h3>
          <p style={{fontWeight:700,color:'rgb(25, 104, 22)',paddingBottom:'5px',fontSize:'15px'}}>MD, Chemco Group</p> 
        </div>
        <div className="team-card">
          <img src="./imageset/m8.png" alt="Sreeshankar Nair" className="team-image" />
          <h3 className="team-name">Parthiv Rokadia</h3>
          <p style={{fontWeight:700,color:'rgb(25, 104, 22)',paddingBottom:'5px',fontSize:'15px'}}>MD, Star Exports</p> 
        </div>
        <div className="team-card">
          <img src="./imageset/m9.png" alt="Sreeshankar Nair" className="team-image" />
          <h3 className="team-name">Vishnuraj Kunjur</h3>
          <p style={{fontWeight:700,color:'rgb(25, 104, 22)',paddingBottom:'5px',fontSize:'15px'}}>Co-Founder, Zigzag Patterns</p> 
        </div>
        <div className="team-card">
          <img src="./imageset/m10.png" alt="Sreeshankar Nair" className="team-image" />  
          <h3 className="team-name">Rakesh Kumar</h3>
          <p style={{fontWeight:700,color:'rgb(25, 104, 22)',paddingBottom:'5px',fontSize:'15px'}}>Ex-Operations Head , Amul</p> 
        </div>
        <div className="team-card">
          <img src="./imageset/m11.jpg" alt="Sreeshankar Nair" className="team-image" />
          <h3 className="team-name">Siddharth Nair</h3>
          <p style={{fontWeight:700,color:'rgb(25, 104, 22)',paddingBottom:'5px',fontSize:'15px'}}>Founder & CEO Amaryllis Consultancy Services
</p> 
        </div>
        </div>
        </div>
        </div>
        </div>
        </motion.div>
    )
  }
