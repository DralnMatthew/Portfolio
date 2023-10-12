import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Zhanghu Zhao </span>
            from <span className="purple"> Suzhou, China.</span>
            <br /> I am a final year student pursuing an MSc in Computer Science
            at <span className="purple">University of Helsinki</span>.
            <br />
            Additionally, I am currently employed as a software developer at
            <span className="purple"> Bravori</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photograph
            </li>
            <li className="about-activity">
              <ImPointRight /> Skiing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
