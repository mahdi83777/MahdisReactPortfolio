import React from "react";
import profileImage from "../../assets/large/Profile/Mahdi.jpg";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Greetings! I'm a Computer and Communication Engineering graduate eager to contribute to team success where I can apply and further develop the
analytical skills and knowledge I built. Academic studies provided me with a solid proficiency in Computer Software and Hardware, Coding Languages, Cryptography and Network Security. A consistent track of records of successfully completing projects from the
concept and detail of the design through to implementation, testing and handover. I am motivated to learn, grow and excel in the
engineering industry.

          </p>
          
        </div>
      </div>
    </section>
  );
}

export default About;
