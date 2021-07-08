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
    if(tipo === "1"){
      setImagesArray(doctorImages);
    }else if(tipo === "2"){
      setImagesArray(wasteImages);
    }else if(tipo == "3"){
      setImagesArray(lightingImages);
    }else{
      setImagesArray(["https://ucc6fad5b6c7c1834c3142a7f6c5.previews.dropboxusercontent.com/p/thumb/ABMFPKEjB-uIfSPkbQ2uaRpDknyKcVXi8ZVPood7ubaKXAQJ74i8O6fBNT65Jt8iUhBlFSxiX9_FaU5tM8Qa6KQEEirXJqO0VGpD644ls7mdnQwCxQmrSkvdpTFKSQFvMypF75fWH2nBMihAe_uVh6idLVrOxxaVn6zhjwXcmyMFYuM3MBDeOagyNhDduollk1e6TB-FpQOB48VzRmMvfa0xV3baLSjyvnzN-_jutgY8vMkJirtZmnxr6usuxBKm3BJubY5i8JofDYCtSUDnTfPU-UgddhuUsJjFmGyg0U1ijOB2Y7pmgIIwbI5vwJHMFJMSXikDjZsZlv5KMKnhY73Bt14JRrvbec7pYxhgCWnMFsTr2Ii_oFX9oajPpGVHA0REmUB3z9R3PcYM6mfQjfVUPxUHeha6cRF8pI7nsKuQRy7LxqEgDgGwuAdJNTEI4jijTiJtlPEQvhyIC5DPZ6qV/p.jpeg?size=2048x1536&size_mode=3",
    "https://uca38a65a7bc2fbae8bb30398650.previews.dropboxusercontent.com/p/thumb/ABPgmqZUZ9lcmYpx48b5KCAqJOrzayt1f_WoFPRhp5VFih3Ig9YVkMc8u2kUNrsGo4kJ8KoN1Jo12M-W4A6v905cq_SHu0mgOVyFR0UqbTLkz8Etpm9rMj0EOW_F14f1Rynutwnj2QhDqKn682Hh-gd6_75OuiwQWgSbfub0D7dZm1bGH-s90ue1ziwtk31jHNCylFaZe7-nDDIJz3nDmK38QJhbU9LT9mmu_EQlMO2d7LNvlzm7t769-gLJYPjeUQghhluFUiIa91dM7SxHkj4f8C2vIisDvOXJ_E8Zz2SoFqSH4miecQGwKHFwUAw1SzU4EDlHrIYu22MpIS4H3KOI99TcStP_v78YtKNhDs9OICgYtePBu1jeIaWBMBuWPobA-wm5QdkICi-ts8wuVRfljEqX0bAoiEiF6Wmn4RLHgBWw2jgkgs1_TfLPVKrcL8fIdE8zHaaDcxT0DxzVgC4a/p.jpeg?size=2048x1536&size_mode=3",
  "https://uc5deaed03a8058a1f43ea153bb0.previews.dropboxusercontent.com/p/thumb/ABPtUQNBvyT9zV2jWZadveKylU3SnbQ5n12iSzQOWjZhxBaGRhhIC8xxcqkNT1FWSlNng4ZbXljuf6SoBoSz6hQaoEX-BRk-pHAAOXobGsFFdqAegfHm08QWf573hiLe770m1gimwLtbQ5y06MJ3zw9GaasqVmucblGREgs29Lf-HjNIsghjjTWmGfFBVDAm9QzkUT0fr6gXoy7DqyD1pWB2JDoKiNcUtfJvFgC7Mlmkxap0AGYmakxBFYZpk9tzasCHKuSyARox0s7GZS-UTRuuRppF_7TnWE-_0z4cBHa4KhKK5L6iWD9z610jA395ktyzemE8ev9P55cY5vTwPflMCWdKG5WY3MFYE6F18RxJ19xfh3k2bm9EURSAEF8-CFzIgKumvjxV2S_N1kbRfylwyCvLxpDahyi3dn19CWx4JXzWzI9g1aasBEAK16X76AoOgUISBAsbnyeGicCh_Gw1/p.jpeg?size=2048x1536&size_mode=3",
"https://ucacaea7a72c5efe44ef3af4c458.previews.dropboxusercontent.com/p/thumb/ABNhEoWUU43pW6IIUD3XCingSTf8EDllXgS2uo72oiZQVi4t__F7PrDTBbUnAs8yHC68q5YEXhT_TkjtvWKJYPuVAkgZPccc5ECpvR_BcGyTa5nJZu7A5ROlogJoJ6trvGfZ1l8qlOr_eILdcphfwWO2t4kXTT-7IxA1NOyZ2mH2VjTnVBjiKtda8WNVdofaHDcsBKE8PVqY2hiKC3IL-M-B-eQ2dVgkyqiceTgdE72xlGyawQe_Uu00kaicPtniiqQzvwBeymeH8BBclOBtEY3-xmWOpP8RF36MZdGUJjN4FEhJ7lailYC5gfpe9n3vP4Jb7zTeqo6XxKmsegmQrLl-WaVC-5-3Eu3NTWK3sKQWLzYQaW2lLiz4Ule5YmjgBZ1QaY9uE5GD329iYvF_5KVi7rR2Dikom8ANB9IhfjPnSqqX2A3rF2biT-uaINxFeOGJmFMSoWI7o32rNWpHHItD/p.jpeg?size=2048x1536&size_mode=3",
"https://uc8b3f5f6456c2370027f9766a0a.previews.dropboxusercontent.com/p/thumb/ABPmbTN_0HwAfwzFCBBBSrZU_nyV87PiVv0ayJMNycd6Bwp7RXGpMlF_KOyWJV9cijeb2QAE1W94QwVlpUAuS2qk6nNgvGiKkm2VcsLPzmbecmRrgBSAHZIsIa_YJ4u-EzVXIhlAKn22nZr0Z41BYwpES89ge-A885cgiNMHEkEp_4x4QcKvveQ_08nvEhma4ehL5uC-DR6twga9a1uDS9J2wu9plY41FRjPwYXS66ft0hdk2xzqW5VniBRLi-A_VRnpT_ZWYlx_GjFc78WumP-oQ141_PVRzBwVCCF7sso6M4_2wDlv5fNfKndpqbYLAatt705IQwqPpxqAVAs9qBirJOKQ-CtsH2sSCDDoapLu8D8tS48N6Gd68v2OQN5-HZ88YJgzsYKM8O8os_O1xDfarP2ZkfVzyMSw1rWtetj1jqycvdNye5iqHsDUvPBup7AssXmbOg1vRpWPOl_DMVhB/p.jpeg?size=2048x1536&size_mode=3",
"https://ucf296b19458b3ddd6d178b7d810.previews.dropboxusercontent.com/p/thumb/ABObENv4ToC0mvZtfTKTVNgLuvqyUJud1L03RyDvWG-F4pFMusAfzy_gO8etKiVzNKj_l6n5-yJ1OS5pVxHsrHM_HyIugIeJgWQymboow6wcxvb0tGMJoEqOMRh16im6JAcd22YbN4kquVbKOpkOQfLkKDHGkVB3zLkLrcxYY1Jh0y7_mEjEbkT3lwJ5JmX7rrRgkPU4Qq5kL0hSPUM5a8aX7KxAC-hLZ6-RBX3FDhjNSkeyxmoncscleOu-LHRTD1llJ-01Z-Cr_2u-h-cw5BoQmhOrF84In1Ko65f67I69ljaytA-eKQY6jnzJRXojPHJ4jv026thl1yzV6AcZw5ttuQ9PLSImP75TU5YY71n-QUa2Yw-8VsGAMRWgB3sKWudfJ53THXszXMmPCsRrSLSmdcTZYrRRCuacmjFlT2unuZ7qsuu2M1NJzv85ORV61GKiVSuziN6wg2NPTIMbVHGS/p.jpeg?size=2048x1536&size_mode=3",
"https://uc7e79448be86efc2497495775d6.previews.dropboxusercontent.com/p/thumb/ABPdw87JQejf2IRhXoHkfQAkgMwCvlWDugCLAzyaVnnR6KOYWYl3l5ywu_6ArQxMfFxqtMpJ5tcKjJUxEpIkXW8I-_vp661TkI41VNIJiMv0LRe19vpeSgG1MbVhQjmBsz32wrBtkSpQld8To3bP2R3p0LbFeLzpboVAQVjZ_0sCZ1I9jJbIVpdj0XOSj7f5jEDNlrtyJXtgxSPC1AMAwRj3iZo9m-2-LHAAqzbvRfxdkBXl3OqbGKSbzIlWtQH2e2fuuzrzsTvwpjN70chY2FpypRNTSFgvoyc7dSAYH_ov4-IGyPb0gzgB5VzcVi6N8aVr0CEJbMaIoAhms-qwLPlvmMg9if389JIG5zaJGM7r2WCywYI6dZ8T0N00dKpr8UTJebnIDu3xjz6RIRxjM_nISI4ECB70DoZCAonfOmnGioDcuX1OWzViG9fWlwaHVXsxEcCdG1fjnrVA_Va_AaBb/p.jpeg?size=2048x1536&size_mode=3"])
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://uc01a85146b0ae34d458e74ee19a.previews.dropboxusercontent.com/p/thumb/ABP2UQBGVfs5uhCjXuSTutWkwLZ3Z4Hv2mndxEBSRVKtZ3hSdQrZgg7PKMEVLjz6hHKC9w1sEfQ3gaAWGjXFzfrEwvmbqTj633WZZ9a_QNNBatzet_lBpCFjc4ytMjCQ8pJv27OQp9tKmOgNSupRf3Pmh0y0Jg3gHHHflm8uoZATqkQhC15tWd898O_yFhHDgViqDTGKokKplZuSDDMx64eL7yNo9HsKARSCitKDJwe1YDpcAHvx8sziUM5DQZLfsGy_ug_LkQj2wFk7d5mPhF1znrZC-swBHnRAWIPwGdT4fVgyUp1hQqEHidFTcGLxEI5t_EPIQMol7B_Hl8rld29LpQ4-gDZV6py2nJghY7QrgZLzf560RKXTqZeWU8KFkU1vmB8f9AlJzcbCWFIqKMw0i0Saz2avZapuoUpPNLNVuEj1kStHJaKqYWKlVy_x8LIGx6vOen5KHFzYPhM-H4L7oXmv7aJ2Ljoh2QsE5MEIovBY7F5Itzy_hH0HdgIQRdGzxVWABNCAegY5TyLl6r62/p.jpeg?fv_content=true&size_mode=5"}
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
