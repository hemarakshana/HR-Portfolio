import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hemarakshana C </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            I am a fresher seeking an opportunity to showcase my talent and grow in my career.
            <br />
            I have completed B.Tech in Information Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Journal
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs in Medium 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Turning ideas into impactful digital experiences..!"{" "}
          </p>
          <footer className="blockquote-footer">Hemarakshana</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
