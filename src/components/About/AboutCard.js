import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            
          A passionate and experienced developer having 
              <span className="blueSpan"> 4+ years</span>  of experience in <span className="blueSpan"> design and development</span>. Always in pursuit of embracing new challenges. Strong experience in building <span className="blueSpan"> stand-alone applications</span> with huge code base. 
              Remarkable background in design, development and test-driven development by overseeing all the aspects of SDLC. <span className="blueSpan"> 
              <br />

              Immaculate coding and interpersonal skills</span> are my distinguishing elements.
              <br />

            
            <br />
            <br />
          </p>
  

      {/*     <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
