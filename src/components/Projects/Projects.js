import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// ✅ Project images
import asianfestival from "../../Assets/Projects/asianfestival.png";
import burgerhouse from "../../Assets/Projects/burgerhouse.png";
import digitalclock from "../../Assets/Projects/digitalclock.png";
import grocerychecklist from "../../Assets/Projects/grocerychecklist.png";
import loginform from "../../Assets/Projects/loginform.png";
import modernclaci from "../../Assets/Projects/modernclaci.png";
import pimpom from "../../Assets/Projects/pimpom.png";
import simplybot from "../../Assets/Projects/simplybot.png";
import streamit from "../../Assets/Projects/streamit.png";
import taskmanagement from "../../Assets/Projects/taskmanagement.png";
import tictactoe from "../../Assets/Projects/tictactoe.png";
import weatherapp from "../../Assets/Projects/weatherapp.png";

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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={asianfestival}
              isBlog={false}
              title="Asian Festival"
              description="A vibrant celebration of Asian cultures, traditions, and food."
              ghLink="https://github.com/hemarakshana/asian-festival"
              demoLink="https://hemarakshana.github.io/asian-festival/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={burgerhouse}
              isBlog={false}
              title="Burger House"
              description="Ultimate destination for mouth-watering burgers crafted with love."
              ghLink="https://github.com/hemarakshana/burger-house"
              demoLink="https://hemarakshana.github.io/burger-house/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="Weather App"
              description="Sleek and user-friendly app providing real-time weather updates."
              ghLink="https://github.com/hemarakshana/Weather-App"
              demoLink="https://hemarakshana.github.io/Weather-App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grocerychecklist}
              isBlog={false}
              title="Grocery Checklist"
              description="Simple web app for managing shopping lists efficiently."
              ghLink="https://github.com/hemarakshana/grocery_checklist"
              demoLink="https://hemarakshana.github.io/grocery_checklist/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={streamit}
              isBlog={false}
              title="StreamIT"
              description="Modern streaming platform delivering seamless entertainment."
              ghLink="https://github.com/hemarakshana/streamit"
              demoLink="https://hemarakshana.github.io/streamit/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simplybot}
              isBlog={false}
              title="Simply Bot"
              description="Smart chatbot designed to simplify user interactions."
              ghLink="https://github.com/hemarakshana/Simply-Bot"
              demoLink="https://hemarakshana.github.io/Simply-Bot/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loginform}
              isBlog={false}
              title="Login Form"
              description="Secure and user-friendly authentication interface."
              ghLink="https://github.com/hemarakshana/LoginForm"
              demoLink="https://hemarakshana.github.io/LoginForm/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskmanagement}
              isBlog={false}
              title="Task Management"
              description="Productivity web app to organize and track tasks efficiently."
              ghLink="https://github.com/hemarakshana/task-management"
              demoLink="https://hemarakshana.github.io/task-management/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={modernclaci}
              isBlog={false}
              title="Modern Calci"
              description="Stylish and functional calculator for modern users."
              ghLink="https://github.com/hemarakshana/Modern-Calci"
              demoLink="https://hemarakshana.github.io/Modern-Calci/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic Tac Toe"
              description="Classic two-player game with a modern twist."
              ghLink="https://github.com/hemarakshana/Tic-Tac-Toe"
              demoLink="https://hemarakshana.github.io/Tic-Tac-Toe/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digitalclock}
              isBlog={false}
              title="Digital Clock"
              description="Real-time clock displaying current time precisely."
              ghLink="https://github.com/hemarakshana/Digital-Clock"
              demoLink="https://hemarakshana.github.io/Digital-Clock/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pimpom}
              isBlog={false}
              title="PIM POM"
              description="Mini game transforming numbers into fun keywords by divisibility."
              ghLink="https://github.com/hemarakshana/Pim-Pom"
              demoLink="https://hemarakshana.github.io/Pim-Pom/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
