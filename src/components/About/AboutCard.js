import React from "react";
import Card from "react-bootstrap/Card";
import { GiGuitar, GiGamepad } from "react-icons/gi";
import { FaRobot } from "react-icons/fa";

function AboutCard() {
  const ageCalculation = () => {
    const dob = new Date("03/21/1995");  
    const month_diff = Date.now() - dob.getTime();  
    const age_dt = new Date(month_diff);   
    const year = age_dt.getUTCFullYear();  
    return Math.abs(year - 1970);
  }
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey, my name is <span className="purple">Martín Alarcón, </span>
            I'm {ageCalculation()} years old and I'm currently living in <span className="purple"> Quito, Ecuador.</span>
            <br />I am a software developer and electronics engineer, graduted from one the best colleges in my country.
            <br />Since 2019 I've worked and collaborated on several projects using diferent kinds of technologies in frontend, backend or databases handling.
            <br />Also I have electronic skills in the field of instrumentation, automation and renewable energy (Photovoltaic).
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <FaRobot /> Learn more about developing and electronics.
            </li>
            <li className="about-activity">
              <GiGuitar /> Play guitar
            </li>
            <li className="about-activity">
              <GiGamepad /> Play videogames
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
