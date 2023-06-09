import React from "react";
import { Container, Row, Col, Fade } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

import home from "../../Assets/experience.svg";
import ProjectExperienceCards from "./ProjectExperienceCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
       
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={7} className="project-card">

              <h1 className="project-heading">
                  <strong className="blueSpan">Experience </strong>
              </h1>
              <p style={{ color: "black" }}>
                My contributions and experiences.
              </p>
              <p style={{ color: "black" }}>
              Experienced Lead  <span className="blueSpan">Full Stack Developer </span> skilled in <span className="blueSpan">React.js, Java, and Cloud platforms. </span> Actively involved in managing, developing, assisting and delivering solutions.
              <br/>
              Adept in <span className="blueSpan">optimizing</span> legacy code for significant 
              performance improvements. 
              <br/>
              Strong advocate of <span className="blueSpan">team collaboration.</span>
              </p>
          </Col>

          <Col md={5} className="project-card">
            <img src={home} alt= "home img"  className="img-fluid"
                style={{ maxHeight: "450px" }}/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant   of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          

          <ProjectExperienceCards></ProjectExperienceCards>
          <ProjectExperienceCards></ProjectExperienceCards>

          <div className="experience-main">
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                {/* <img
									src={require(`../../assests/images/${experience["header_image_path"]}`)}
									alt=""
								/> */}
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: "#0f0f0f" }}
                >
                  titile
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: "#0f0f0f"}}
                >
                  subtitle
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: "#0f0f0f" }}
                >
                  "description"
                </p>
              </div>
            </div>
          </Fade>
        </div>
        {/* <ExperienceAccordion sections={experience["sections"]} theme={theme} /> */}

        

      </div>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
