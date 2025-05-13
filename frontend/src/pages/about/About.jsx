import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Empowering Learners. Everywhere.</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            We are dedicated to providing high-quality online courses that help
            individuals grow in their careers and personal development. Our
            platform is built with learners in mind — intuitive, flexible, and scalable.
          </p>
        </div>

        <div className="about-section">
          <h2>What We Offer</h2>
          <ul className="features-list">
            <li>UX/UI Design Principles</li>
            <li>Web Development Bootcamp</li>
            <li> Introduction to Python</li>
            <li> Data Science with R</li>
            <li>Digital Marketing Fundamentals</li>
          </ul>
        </div>

        <div className="about-section team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="https://media.istockphoto.com/id/1562983249/photo/portrait-of-happy-and-successful-businessman-indian-man-smiling-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=tfBv6taG9nTidFwENcrvEEvRHABN5gDAmg-K1G1Etnc=" alt="Instructor 1" />
              <h4>Rohan Mehta</h4>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="https://femina.wwmindia.com/content/2021/sep/women-thumb1632797644.jpg" alt="Instructor 2" />
              <h4>Saneha Patil</h4>
              <p>Head of Content</p>
            </div>
            <div className="team-member">
              <img src="https://t3.ftcdn.net/jpg/06/92/37/76/360_F_692377648_BORlI6j3E5APvbhuhDXXm5Ik6lJECJ0g.jpg" alt="Instructor 3" />
              <h4>Arjun Mehta</h4>
              <p>Full Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
