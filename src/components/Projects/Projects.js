import React, { useState, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
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

import Solar1 from "../../Assets/Solar/IMG_20190722_165732.jpg";
import Solar2 from "../../Assets/Solar/IMG_20190722_165834.jpg";
import Solar3 from "../../Assets/Solar/IMG_20191031_150946.jpg";
import Solar4 from "../../Assets/Solar/IMG_20191031_151026.jpg";
import Solar5 from "../../Assets/Solar/IMG_20191106_091107.jpg";
import Solar6 from "../../Assets/Solar/IMG_20191216_104328.jpg";
import Solar7 from "../../Assets/Solar/IMG_20191216_104359.jpg";
import Solar8 from "../../Assets/Solar/IMG_20191216_105625.jpg";
import Solar9 from "../../Assets/Solar/IMG_20200113_100053.jpg";

import BES1 from "../../Assets/BES.jpg"
import BES3 from "../../Assets/BES/BES3.png"
import BES4 from "../../Assets/BES/BES4.png"
import BES5 from "../../Assets/BES/BES5.png"

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

  const solarImages = [
    Solar1, Solar2, Solar3, Solar4, Solar5, Solar6, Solar7, Solar8, Solar9
  ]

  const BESImages = [
    BES3, BES4, BES5
  ]

  const openImageViewer = useCallback((tipo) => {
    if (tipo === "0") {
      setImagesArray(BESImages)
    }else if(tipo === "1"){
      setImagesArray(doctorImages);
    }else if(tipo === "2"){
      setImagesArray(wasteImages);
    }else if(tipo === "3"){
      setImagesArray(lightingImages);
    }else{
      setImagesArray(solarImages)
    }
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
              imgPath={BES1}
              isBlog={false}
              title="Brightview Enterprise Solutions Connect - Web Portal"
              description="This Solution manages all the data related to work orders, locations, clients, etc, in the landscaping service that Brightview offers to the public around the country (All design rights reserved to Automated Decision)"
              openViewer={()=>openImageViewer("0")}
            />
          </Col>
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Solar3}
              isBlog={false}
              title="Construction of a small photovoltaic lab with solar tracking along with meteorological sensors"
              description="This was my final graduation project. The main objetive of the project was to study the solar energy potential that equatorial regions have, beacause of the geographic localization and in the particular case of Quito its altitude. For this I built three mini photovoltaic systems, one with static solar panels, the second one with one axis solar tracking and the third one with two axis solar tracking. Also I implement some positioning strategies in function of live meteorological measurements."
              link="https://github.com/soumyajit4419/Editor.io"
              openViewer={()=>openImageViewer("4")}
            />
          </Col>

          
        </Row>
        
      </Container>
    </Container>
  );
}

export default Projects;
