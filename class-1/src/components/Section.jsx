import "./Section.css";
import bgImageone from "../assets/div1.png";
import bgImagetwo from "../assets/div2.png";
import bgImagethree from "../assets/div3.png";

const Section = () => {
  return (
    <div className="section-wrapper">

      <div className="sec_para">
        <p>
          At Horizon, we don't play just tennis—we live it.<br />
          Since 2021, our club has been a home for players of <br/>all levels,
          from eager beginners to seasoned pros.
        </p>
      </div>

      <div className="section">
        <div className="card"  style={{ backgroundImage: `url(${bgImageone})` }}>
          
        </div>

        <div className="card" style={{ backgroundImage: `url(${bgImagetwo})` }}>
        </div>

        <div className="card" style={{ backgroundImage: `url(${bgImagethree})` }}>
        </div>
      </div>

      <div className="stats-heading">
        <p>A few more facts about us in numbers</p>
      </div>

      <div className="stats-container">
        <div className="stat-box">
          <h2>12000+</h2>
          <p>Hours of Play Annually</p>
        </div>

        <div className="stat-box">
          <h2>89%</h2>
          <p>Player Retention Rate</p>
        </div>

        <div className="stat-box">
          <h2>1200+</h2>
          <p>Active Members</p>
        </div>

        <div className="stat-box">
          <h2>125+</h2>
          <p>Annual Tournaments</p>
        </div>
      </div>

    </div>
  );
};

export default Section;