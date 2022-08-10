import React from "react";
import "../styles/resume.css";
import resumeText from "../images/amir-resume.pdf";

export default function Resume() {
  return (
    <section>
      <div className="contres">
        <div className="headskill">
          <h2>SKILLS</h2>
          <ul className="skills">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>Semantic UI</li>
            <li>Handlebars</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>SQL db, MySQL and Sequelize </li>
            <li>NoSQL databases,MongoDB and Mongoose </li>
            <li>GraphQL</li>
            <li>Apollo</li>
            <li>Insomnia </li>
            <li>Heroku</li>
          </ul>
        </div>
        <div className="resumelink">
          <a href={resumeText} aria-label="Download Resume">
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
    </section>
  );
}

// export default function Resume() {
//   return (
//     <div className="resumeDiv">
//       <h1>RESUME</h1>

//       <embed
//         className="resumeContent"
//         src={resumeText}
//         width="90%"
//         height="700"
//       ></embed>
//     </div>
//   );
// }
