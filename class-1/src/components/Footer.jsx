import React from "react";
import "./Footer.css";
import tennis from "../assets/tennis.jpg"
import tennisball from "../assets/tennis ball.jpg"


const Footer = () => {
  return (
    <div className="services-section">
      <div className="section">
              <div className="card services-text">
                <h2>Services</h2>
               <p>
                 Explore our full range of coaching, training, and tennis experiences.
                 From first serve to match point — we've got the right program for you.
               </p>
               <button className="services-btn">Explore More</button>
              </div>
      
              <div className="card" style={{ backgroundImage: `url(${tennis})` }}>
              </div>
      
              <div className="card" style={{ backgroundImage: `url(${tennisball})` }}>
              </div>
            </div>
      
    </div>
  );
};

export default Footer;