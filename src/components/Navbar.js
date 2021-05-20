import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Assets/image.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import docpdf from '../Assets/cvenglish.pdf';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => setOpenModal(!openModal);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
      <Modal isOpen={openModal} toggle={toggleModal} style={{margin: "50px 200px", width: "800px"}}>
        <ModalHeader toggle={toggleModal}>Martín Alarcón - CV 2021</ModalHeader>
        <ModalBody >
          <object
          style={{width: "850px", height: "600px"}}
          data={docpdf}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>Back</Button>
        </ModalFooter>
      </Modal>
        <Navbar.Brand href="/">
          <img src={logo} alt="brand"  width="70" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item className="fork-btn">
              <Button
                target="_blank"
                className="fork-btn-inner"
                onClick={()=>toggleModal()}
              >
                <AiFillStar style={{ fontSize: "1.1em" }} /> Watch CV
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
