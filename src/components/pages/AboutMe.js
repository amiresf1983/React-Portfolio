import React from "react";
import amirImg from "../images/avatar.jpg";
import "../styles/aboutme.css";

function AboutMe() {
  return (
    <div className="aboutmeDiv">
      <div className="imageDiv">
        <img className="amirImg" src={amirImg} alt="picture of amir" />
      </div>
      <div className="heading">
        <h1 className="aboutme">
          HI THERE! I'M AMIR &nbsp;&nbsp;{" "}
          <span className="title">FULL-STACK WEB DEVELOPER</span>{" "}
        </h1>
      </div>
      <br></br>
      <br></br>
      <div className="content">
        I AM a junior full-stack web developer with an extensive background in
        Design, project coordination and engineering within the telco &
        construction industries. Facilitating end to end project lifecycles, I
        oversee planning, procurement, technical design development, costing,
        subcontractor management, client negotiations and review of project
        progress. Delivering quality and innovative project solutions enables me
        to drive cost savings consistently. I am passionate about working with
        multidisciplinary teams. I am looking for a new opportunity to deliver
        quality projects on time whilst exceeding deliverables as well as
        balancing client and business objectives.
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <span className="span2"> </span>
        <p className="pTag"></p>
      </div>
    </div>
  );
}

export default AboutMe;
