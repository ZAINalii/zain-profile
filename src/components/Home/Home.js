import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import ScrollToTop from "../ScrollToTop";
import Home2 from "./Home2";
import Type from "./Type";
import home from "../../Assets/home.svg";


function Home() {
  return (
    <section>
        <ScrollToTop />
        <Particle />
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 , fontSize:"1.4em" }} className="heading">
                Hello <span style={{color:"#0090ff"}}> I'm </span>
              </h1>


              <h1 className="heading-name">
                <strong className="main-name"> Zain Ali</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={home}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
