import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.png";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const experienceYears = () => {
    const dob = new Date("01/01/2019");  
    const month_diff = Date.now() - dob.getTime();  
    const age_dt = new Date(month_diff);   
    const year = age_dt.getUTCFullYear();  
    return Math.abs(year - 1970);
  }
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="main-text"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{ textAlign: 'justify' }}>
              {`I'm an engineer 👨🏻‍💻🖥️🔌🤖 with ${experienceYears()} years of proffesional experience in the software development field. ` +
              `My passion for programming started when I was at college. ` +
              `I realized that I could complement my knowledge and give more value to my electric and electronic projects by developing software. ` +
              `Since then I fell in love with it and I haven't stop learning. ` +
              `Recently I've been working for a US company called "Automated Decision"`}
              <br />
              <br />My favorite programming languages include: &nbsp;
              <i>
                <b className="second-text"> Javascript, Java, Kotlin, Dart, C#, Python </b>
              </i>
              <br />
              <br />
              I feel confortable using modern JS Frameworks like &nbsp;
              <i>
                <b className="second-text"> Node.js, React.js, AngularJS, Loopback</b>
              </i>
              <br />
              <br />
              I have proffesional experience using relational and no relational databases &nbsp;
              <i>
                <b className="second-text"> SQL Server and MongoDB </b>
              </i>
              <br />
              <br />
              Also I have some experience using cloud services like &nbsp;
              <i>
                <b className="second-text"> Salesforce, AWS, Azure </b>
              </i>
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
              Feel free to <span className="second-text">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vedderzeznick"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/martin.alarconaguirre"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/martin-fullstack"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/vedderzeznick/"
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
