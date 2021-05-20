import React, { useState, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageViewer from 'react-simple-image-viewer';

import medicine from "../../Assets/Projects/modern-medicine.jpeg";
import waste from "../../Assets/Projects/waste-manage.png";
import lighting from "../../Assets/Projects/lighting-system.png";


import doctor1 from "../../Assets/doctor/agenda_consulta.png";
import doctor2 from "../../Assets/doctor/agenda.png";
import doctor3 from "../../Assets/doctor/consultas_doctor.png";
import doctor4 from "../../Assets/doctor/lateral.png";
import doctor5 from "../../Assets/doctor/pacientes_doctor.png";
import doctor6 from "../../Assets/doctor/reserva_consulta.png";
import doctor7 from "../../Assets/doctor/reserva_consulta2.png";
import doctor8 from "../../Assets/doctor/reserva_consulta3.png";

import lighting1 from "../../Assets/lighting/calendarios_luminar.png";
import lighting2 from "../../Assets/lighting/mapa_luminarias.png";
import lighting3 from "../../Assets/lighting/luminaria_detalles.png";
import lighting4 from "../../Assets/lighting/reportes_lum.png";

import waste1 from "../../Assets/waste/gadere_catalog.png";
import waste2 from "../../Assets/waste/gadere_catalog.png";
import waste3 from "../../Assets/waste/gadere_dash.png";
import waste4 from "../../Assets/waste/gadere_notif.png";
import waste5 from "../../Assets/waste/gadere_report.png";
import waste6 from "../../Assets/waste/gadere_reportavance.png";
import waste7 from "../../Assets/waste/gadere_reportavance2.png";



function Projects() {

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [imagesArray, setImagesArray] = useState([]);

  const wasteImages = [
    waste1, waste2, waste3, waste4, waste5, waste6, waste7
  ];

  const doctorImages = [
    doctor1, doctor2, doctor3, doctor4, doctor5, doctor6, doctor7, doctor8
  ]

  const lightingImages = [
    lighting1, lighting2, lighting3, lighting4
  ]

  const openImageViewer = useCallback((tipo) => {
    if(tipo == "1"){
      setImagesArray(doctorImages);
    }else if(tipo == "2"){
      setImagesArray(wasteImages);
    }else{
      setImagesArray(lightingImages);
    }
    console.log('open viewer', tipo)
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <Container fluid className="project-section">
      {isViewerOpen && (
        <ImageViewer
          style={{zIndex: 9999}}
          src={ imagesArray }
          currentIndex={ currentImage }
          onClose={ closeImageViewer }
        />
      )}
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
              imgPath={medicine}
              isBlog={false}
              title="Telemedicine Solution"
              description="It is a technological solution for any user who require access to a face-to-face or virtual medical consultation with any registered medical specialist. This technological solution makes access to health more efficient and easier. For this project I worked with RCB as the main developper of the mobile part of the solution, I used Flutter along with agora.io, Firebase Cloud Messaging and others to develop two mobile apps one for patients and other for doctors... also I programmed some screens in the web platform of the solution"
              openViewer={()=>openImageViewer("1")}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={waste}
              isBlog={false}
              title="Collection and Treatment of Industrial and Medical Waste Solution"
              description="I worked along with RCB as the web platform developer (ReactJS), this application manage the administration data of the hole process, including: tracing of the vehicles in static map, send and receive push notifications through websocket and FCM, reports generation, interactive dashboard"
              openViewer={()=>openImageViewer("2")}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lighting}
              isBlog={false}
              title="Web Platform to manage Intelligent Public Lighting System"
              description="It is a solution for device control and data processing of the Public Lightning System in Ibarra city. I developped the backend on .Net Core and frontend based on AngularJS, also I used mongoDB because of the great ammount of data. Through this web platform the users can control the luminairs, program its behavior, search and program data sending through reports service."
              link="https://github.com/soumyajit4419/Editor.io"
              openViewer={()=>openImageViewer("3")}
            />
          </Col>

          
        </Row>
        
      </Container>
    </Container>
  );
}

export default Projects;
