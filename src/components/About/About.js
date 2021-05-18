import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/develope.gif";
import { UncontrolledTooltip } from 'reactstrap';
import { Tooltip } from "bootstrap";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              More about <strong className="purple">ME</strong>
            </h1> 
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <div id="jsicon">
            <Techstack iconName="devicon-javascript-plain" />
          </div>
          <UncontrolledTooltip placement="top" target="jsicon">
            JavaScript
          </UncontrolledTooltip>
          <div id="nodeicon">
            <Techstack iconName="devicon-nodejs-plain-wordmark " />
          </div>
          <UncontrolledTooltip placement="top" target="nodeicon">
            NodeJS
          </UncontrolledTooltip>
          <div id="reacticon">
          <Techstack iconName="devicon-react-original-wordmark" />
          </div>
          <UncontrolledTooltip placement="top" target="reacticon">
            ReactJS
          </UncontrolledTooltip>
          <div id="angularicon">
          <Techstack iconName="devicon-angularjs-plain" />
          </div>
          <UncontrolledTooltip placement="top" target="angularicon">
            AngularJS
          </UncontrolledTooltip>
          <div id="expressicon">
          <Techstack iconName="devicon-express-original-wordmark" />
          </div>
          <UncontrolledTooltip placement="top" target="expressicon">
            Express
          </UncontrolledTooltip>
          <div id="csharpicon">
          <Techstack iconName="devicon-csharp-plain" />
          </div>
          <UncontrolledTooltip placement="top" target="csharpicon">
            C sharp
          </UncontrolledTooltip>
          <div id="pythonicon">
          <Techstack iconName="devicon-python-plain-wordmark " />
          </div>
          <UncontrolledTooltip placement="top" target="pythonicon">
            Python
          </UncontrolledTooltip>
          <div id="fluttericon">
          <Techstack iconName="devicon-flutter-plain" />
          </div>
          <UncontrolledTooltip placement="top" target="fluttericon">
            Flutter
          </UncontrolledTooltip>
          <div id="kotlinicon">
          <Techstack iconName="devicon-kotlin-plain" />
          </div>
          <UncontrolledTooltip placement="top" target="kotlinicon">
            Kotlin
          </UncontrolledTooltip>
          <div id="cssicon">
          <Techstack iconName="devicon-css3-plain" />
          </div>
          <UncontrolledTooltip placement="top" target="cssicon">
            CSS 3
          </UncontrolledTooltip>
          <div id="materialicon">
          <Techstack iconName="devicon-materialui-plain" />
          </div>
          <UncontrolledTooltip placement="top" target="materialicon">
            MaterialUI
          </UncontrolledTooltip>
          <div id="bootstrapicon">
          <Techstack iconName="devicon-bootstrap-plain-wordmark" />
          </div>
          <UncontrolledTooltip placement="top" target="bootstrapicon">
            Bootstrap
          </UncontrolledTooltip>
          <div id="sqlicon">
          <Techstack iconName="devicon-microsoftsqlserver-plain" />
          </div>
          <UncontrolledTooltip placement="top" target="sqlicon">
            SQL Server
          </UncontrolledTooltip>
          <div id="mongoid">
          <Techstack iconName="devicon-mongodb-plain" />
          </div>
          <UncontrolledTooltip placement="top" target="mongoid">
            MongoDB
          </UncontrolledTooltip>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <div id="windowsicon">
          <Techstack iconName="devicon-windows8-original" />
          </div>
          <UncontrolledTooltip placement="top" target="windowsicon">
            Windows
          </UncontrolledTooltip>
          <div id="macicon">
          <Techstack iconName="devicon-apple-original" />
          </div>
          <UncontrolledTooltip placement="top" target="macicon">
            MacOS iOS
          </UncontrolledTooltip>
          <div id="linuxicon">
          <Techstack iconName="devicon-linux-plain" />
          </div>
          <UncontrolledTooltip placement="top" target="linuxicon">
            Linux
          </UncontrolledTooltip>
          <div id="androidicon">
          <Techstack iconName="devicon-android-plain" />
          </div>
          <UncontrolledTooltip placement="top" target="androidicon">
            Android
          </UncontrolledTooltip>
          <div id="giticon">
          <Techstack iconName="devicon-git-plain-wordmark" />
          </div>
          <UncontrolledTooltip placement="top" target="giticon">
            Github
          </UncontrolledTooltip>
          <div id="vsicon">
          <Techstack iconName="devicon-visualstudio-plain" />
          </div>
          <UncontrolledTooltip placement="top" target="vsicon">
            Visual Studio
          </UncontrolledTooltip>
          <div id="vscicon">
          <Techstack iconName="cib-visual-studio-code" />
          </div>
          <UncontrolledTooltip placement="top" target="vscicon">
            Visual Studio Code
          </UncontrolledTooltip>
          <div id="postmanicon">
          <Techstack iconName="cib-postman" />
          </div>
          <UncontrolledTooltip placement="top" target="postmanicon">
            Postman
          </UncontrolledTooltip>
          <div id="firebaseicon">
          <Techstack iconName="devicon-firebase-plain" />
          </div>
          <UncontrolledTooltip placement="top" target="firebaseicon">
            Firebase
          </UncontrolledTooltip>
        </Row>
        
      </Container>
    </Container>
  );
}

export default About;
