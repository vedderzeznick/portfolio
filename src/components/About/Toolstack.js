import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiMicrosoftsqlserver,
  SiWindows,
  SiAndroid,
  SiGit,
  SiVisualstudio
} from "react-icons/si";
import { DiApple } from "react-icons/di";
import { UncontrolledTooltip } from 'reactstrap';

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col id="windowsicon" xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <UncontrolledTooltip placement="top" target="windowsicon">
            Windows
          </UncontrolledTooltip>
      <Col id="macicon" xs={4} md={2} className="tech-icons">
        <DiApple />
      </Col>
      <UncontrolledTooltip placement="top" target="macicon">
            MacOS iOS
          </UncontrolledTooltip>
      <Col id="linuxicon" xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <UncontrolledTooltip placement="top" target="linuxicon">
            Linux
          </UncontrolledTooltip>
      <Col id="androidicon" xs={4} md={2} className="tech-icons">
        <SiAndroid />
      </Col>
      <UncontrolledTooltip placement="top" target="androidicon">
          Android Studio
      </UncontrolledTooltip>
      <Col id="giticon" xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <UncontrolledTooltip placement="top" target="giticon">
            Git
      </UncontrolledTooltip>
      <Col id="vsicon" xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
      </Col>
      <UncontrolledTooltip placement="top" target="vsicon">
            Visual Studio
      </UncontrolledTooltip>
      <Col id="vscicon" xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <UncontrolledTooltip placement="top" target="vscicon">
            Visual Studio Code
      </UncontrolledTooltip>
      <Col id="postmanicon" xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <UncontrolledTooltip placement="top" target="postmanicon">
            Postman
          </UncontrolledTooltip>
          <Col id="sqlicon" xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>
      <UncontrolledTooltip placement="top" target="sqlicon">
            SQL Server
      </UncontrolledTooltip>
    </Row>
  );
}

export default Toolstack;
