import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am going to graduate from{" "}
              <b className="purple">University of Helsinki</b> with a master's
              degree in <b className="purple">Computer Science</b> in July of
              2024. Drawing upon my proficiency in programming languages like{" "}
              <b className="purple">Python</b>, <b className="purple">Java</b>,
              and <b className="purple">Javascript</b>, along with my grasp of
              frameworks such as <b className="purple">Node.js</b>,
              <b className="purple">React.js</b>, and{" "}
              <b className="purple">SpringBoot</b>, my aim is to develop
              software solutions that leave a significant mark by enhancing
              efficiency and promoting excellence in the long run.
              <br />
              <br />
              My professional aspiration is to continuously enhance my technical
              prowess and advance to a senior engineering role in the near
              future. I have a strong passion for both comprehensive{" "}
              <b className="purple">full-stack solutions</b> and{" "}
              <b className="purple">intricate system-level products</b>, and I
              am enthusiastic about embracing emerging technologies and
              dedicating my efforts to projects that bring about positive
              changes in the ever-evolving landscape of software engineering.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/dralnmatthew"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/zhanghu-zhao-711106232/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dralnmatthew/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
