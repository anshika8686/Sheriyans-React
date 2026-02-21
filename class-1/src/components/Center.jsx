import React from "react";
import "./Center.css";
import bgImage from "../assets/monitor-teaching-padel-class-2024-10-14-22-21-30-utc-scaled-1200x800-f70_56.webp";

const Center = () => {
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero-content">
        <h1>
          Unleash Your Inner Champion Today.<br />
          All In One Place.
        </h1>

        <p>
          Join the ultimate tennis experience — where passion meets
          performance and every swing brings you closer to victory.
        </p>

        <button className="hero-btn">Start your own journey</button>
      </div>
    </div>
  );
};

export default Center;