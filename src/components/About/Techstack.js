import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiAngularSimple,
  DiCss3,
  DiBootstrap
} from "react-icons/di";
import { SiCsharp, SiFlutter, SiKotlin, SiMaterialUi, SiFirebase } from "react-icons/si";
import { UncontrolledTooltip } from 'reactstrap';

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col id="nodeicon" xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <UncontrolledTooltip placement="top" target="nodeicon">
            NodeJS
      </UncontrolledTooltip>
      <Col id="reacticon" xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <UncontrolledTooltip placement="top" target="reacticon">
            ReactJS
      </UncontrolledTooltip>
      <Col id="angularicon" xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
      </Col>
      <UncontrolledTooltip placement="top" target="angularicon">
          AngularJS
      </UncontrolledTooltip>
      <Col id="csharpicon" xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <UncontrolledTooltip placement="top" target="csharpicon">
          .Net Core
      </UncontrolledTooltip>
      <Col id="fluttericon" xs={4} md={2} className="tech-icons">
        <SiFlutter />
      </Col>
      <UncontrolledTooltip placement="top" target="fluttericon">
        Flutter
      </UncontrolledTooltip>
      <Col id="kotlinicon" xs={4} md={2} className="tech-icons">
        <SiKotlin />
      </Col>
      <UncontrolledTooltip placement="top" target="kotlinicon">
        Kotlin
      </UncontrolledTooltip>
      <Col id="pythonicon" xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <UncontrolledTooltip placement="top" target="pythonicon">
        Python
      </UncontrolledTooltip>
      <Col id="cssicon" xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <UncontrolledTooltip placement="top" target="cssicon">
        CSS 3
      </UncontrolledTooltip>
      <Col id="materialicon" xs={4} md={2} className="tech-icons">
        <SiMaterialUi />
      </Col>
      <UncontrolledTooltip placement="top" target="materialicon">
        MaterialUI
      </UncontrolledTooltip>
      <Col id="bootstrapicon" xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <UncontrolledTooltip placement="top" target="bootstrapicon">
        Bootstrap
      </UncontrolledTooltip>
      <Col id="mongoid" xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <UncontrolledTooltip placement="top" target="mongoid">
            MongoDB
      </UncontrolledTooltip>
      <Col id="firebaseicon" xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <UncontrolledTooltip placement="top" target="firebaseicon">
            Firebase
      </UncontrolledTooltip>
    </Row>
  );
}

export default Techstack;
