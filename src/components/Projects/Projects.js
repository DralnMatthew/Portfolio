import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import auction from "../../Assets/Projects/Auction.png";
import ecommerce from "../../Assets/Projects/Ecommerce.png";
import cookify from "../../Assets/Projects/Cookify.png";
import snake from "../../Assets/Projects/Snake.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={cookify}
              isBlog={false}
              title="Cookify"
              description="Cookify is a dynamic web application focused on food sharing.
              "
              ghLink="https://github.com/DralnMatthew/Cookify"
              demoLink="https://cookify-dralnmatthew.netlify.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Snake Game"
              description="Snake is a Multiplayer Online Battle Arena (MOBA) game designed to offer user authentication and score-based player combat on the server."
              ghLink="https://github.com/DralnMatthew/Snake"
              demoLink="http://35.228.85.55/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={auction}
              isBlog={false}
              title="Auction"
              description="Online Auction Platform"
              ghLink="https://github.com/DralnMatthew/Auction"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce"
              description="Designed and developed an e-commerce platform with session-based cart and online payment functionality."
              ghLink="https://github.com/DralnMatthew/Ecommerce"
              demoLink="https://dralnmatthew.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
