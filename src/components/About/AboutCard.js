import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey, my name is <span className="purple">Martín Alarcón, </span>
            I'm 26 years old and I live in <span className="purple"> Quito, Ecuador.</span>
            <br />I am a software developer and electronics engineer, graduted from one the best colleges in my country.
            <br />Since 2019 I've worked and collaborated on several projects using diferent kinds of technologies in frontend, backend or databases handling.
            <br />Also I have electronic skills in the field of instrumentation, automationa and renewable energy (Photovoltaic).
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <i className="fas fa-microchip"></i> Learn more about developing and electronics.
            </li>
            <li className="about-activity">
              <i className="fas fa-guitar"></i> Play guitar
            </li>
            <li className="about-activity">
              <i className="fas fa-gamepad"></i> Play videogames
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "#3295f8ad" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer style={{ marginBlockEnd: 0, color: "#3295f8ad" }}>Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
