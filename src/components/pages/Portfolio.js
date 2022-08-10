import React from "react";
import project1Image from "../images/project1.png";
import project2Image from "../images/project2.png";
import project3Image from "../images/project3.png";
import project4Image from "../images/project4.png";
import project5Image from "../images/project5.png";
import project6Image from "../images/project6.png";
import "../styles/portfolio.css";

export default function Portfolio() {
  return (
    <div className="porthead">
      <h1 className="portfolio">PORTFOLIO</h1>
      <div />

      <div className="projectPage">
        <p className="project4">
          <img
            className="project3Image"
            src={project3Image}
            alt="team profile generator"
          />
          <a
            className="project3Link"
            href="https://amiresf1983.github.io/Weather-Forecast-Application//"
          >
            WEATHER FORECAST APP
          </a>{" "}
          <br />
          <a href="https://github.com/amiresf1983/Weather-Forecast-Application">
            GITHUB REPO
          </a>
        </p>
      </div>

      <div className="projectPage">
        <p className="project6">
          <img
            className="project6Image"
            src={project1Image}
            alt="social network app"
          />
          <a className="project6Link" href="https://book-taku.herokuapp.com">
            BOOKTAKU GROUP PROJECT
          </a>{" "}
          <br />
          <a href="https://github.com/amiresf1983/Book-taku">GITHUB REPO</a>
        </p>
      </div>

      <div className="projectPage">
        <p className="project6">
          <img
            className="project6Image"
            src={project2Image}
            alt="social network app"
          />
          <a
            className="project6Link"
            href="https://amiresf1983.github.io/Project-1-group-A"
          >
            MARVEL TUBE GROUP PROJECT
          </a>{" "}
          <br />
          <a href="https://github.com/amiresf1983/MarvelTube">GITHUB REPO</a>
        </p>
      </div>
      <div className="projectPage">
        <p className="project4">
          <img
            className="project4Image"
            src={project4Image}
            alt="team profile generator"
          />
          <a
            className="project4Link"
            href="https://drive.google.com/file/d/1vJmnBW-WZXnT9OBovgspeXAe8pUjBbm7/view/"
          >
            TEAM PROFILE GENERATOR
          </a>{" "}
          <br />
          <a href="https://github.com/amiresf1983/Team-Profile-Generator">
            GITHUB REPO
          </a>
        </p>
      </div>

      <div className="projectPage">
        <p>
          <img
            className="project5Image"
            src={project5Image}
            alt="web developers hub"
          />
          <a
            className="project5Link"
            href="https://web-developers-hub.herokuapp.com/"
          >
            WEB DEVELOPERS HUB
          </a>{" "}
          <br />
          <a href="https://github.com/amiresf1983/Web-Developers-Hub">
            GITHUB REPO
          </a>
          <br></br>
          <br></br>
        </p>
      </div>

      <div className="projectPage">
        <p className="project6">
          <img
            className="project6Image"
            src={project6Image}
            alt="social network app"
          />
          <a
            className="project6Link"
            href="https://drive.google.com/file/d/1esTpjiI6ZvauwtztXhGDAwXnkPPJ1Ayx/view"
          >
            SOCIAL NETWORK API
          </a>{" "}
          <br />
          <a href="https://github.com/amiresf1983/Social-Network-API">
            GITHUB REPO
          </a>
        </p>
      </div>
    </div>
  );
}

// <div className="projectPage">
//         <p>
//           <img className="project1Image" src={project1Image} alt="project2" />
//           <a className="project1Link" href="https://book-taku.herokuapp.com/">
//             BOOKTAKU
//           </a>{" "}
//           <br />
//           <a href="https://github.com/amiresf1983/Book-taku">GITHUB REPO</a>
//         </p>
//       </div>

//       <div className="projectPage">
//         <p>
//           <img className="project2Image" src={project2Image} alt="marveltube" />
//           <a
//             className="project2Link"
//             href="https://amiresf1983.github.io/Project-1-group-A/"
//           >
//             MARVELTUBE
//           </a>{" "}
//           <br />
//           <a href="https://github.com/amiresf1983/MarvelTube"> GITHUB REPO </a>
//         </p>
//       </div>

{
  /* <div className="projectPage">
        <p className="project4">
          <img className="project1Image" src={project1Image} alt="booktaku" />
          <a className="project1Link" href="https://book-taku.herokuapp.com/">
            BOOKTAKU
          </a>{" "}
          <br />
          <a href="https://github.com/amiresf1983/Book-taku">GITHUB REPO</a>
        </p>
      </div>
      <div className="projectPage">
        <p className="project4">
          <img className="project2Image" src={project2Image} alt="marveltube" />
          <a
            className="project2Link"
            href="https://https://amiresf1983.github.io/Project-1-group-A//"
          >
            MARVELTUBE
          </a>{" "}
          <br />
          <a href="https://github.com/amiresf1983/MarvelTube">GITHUB REPO</a>
        </p>
      </div> */
}
