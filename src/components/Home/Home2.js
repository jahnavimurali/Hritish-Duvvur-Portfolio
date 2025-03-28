import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/playstation.png";
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
          Creating Immersive <span className="purple">Gaming Experiences</span>
        </h1>
        <p className="home-about-body">
          I'm a passionate <b className="purple">Game Developer</b> with expertise in{" "}
          <i>
            <b className="purple">C#, C++, Unity, and Unreal Engine</b>
          </i>.  
          <br />
          <br />
          Currently pursuing my Master's in Game Design and Development at <b className="purple">Rochester Institute of Technology</b>,  
          I love building immersive gaming experiences and exploring{" "}
          <b className="purple">AI-driven gameplay mechanics</b>.
          <br />
          <br />
          Always excited to push the boundaries of <b className="purple">game design</b> and  
          bring creative ideas to life! 🎮
        </p>
      </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          {/* <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
