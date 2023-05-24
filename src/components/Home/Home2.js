import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import Particle from "../Particle";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">

      <Container>
        <Row>
          <Col md={8} className="home-about-description">

            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span style={{color:"#0090ff"}}> ME </span> 
            </h1>
            <p className="home-about-body">
              
            I use my passion and skills to create digital products and
          experiences. I have worked with international
          customers who rely on my <span className="blueSpan">design,
          implementation,</span> and <span className="blueSpan">development strategies</span> of their
          digital products. As an independent, I have also
          worked with <span className="blueSpan">web agencies, companies,
          startups</span> and <span className="blueSpan">individuals</span> to help them in achieving goals.
          <br/><br/>
          I share my experience in <span className="blueSpan">backend development and full stack development. </span> 
          It’s my pleasure to have worked on projects presented as use cases and nominated for <span className="blueSpan">interternational awards.</span>
          <br/>
          <br/>
          When I’m not at the computer, I’m usually travelling, exploring new restaurants, running or planning to travel. 

              <br />

              <br />
              <br />
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        
        </Row>


        <Row>
          <Col md={8} className="home-about-social">
            <h1>Let's Connect</h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ZAINalii"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <GitHubIcon />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <TwitterIcon />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/-zain-ali/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <LinkedInIcon />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
