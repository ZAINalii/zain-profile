import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import {
  DiJavascript1,
  DiReact,
   DiJava, DiMysql, 
} from "react-icons/di";
import { FaSalesforce } from "react-icons/fa";
import {
  
  SiSpring,
  SiGooglecloud,
  SiAzuredevops,
  SiMysql,
  SiCsharp
} from "react-icons/si";



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <SiSpring />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSalesforce />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
    </Row>
  );
}

export default Techstack;
