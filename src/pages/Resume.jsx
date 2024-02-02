import resume from "../images/resume.pdf";

export default function Resume() {
  return (
    <div className="container pt-4 resume">
      <a href={resume} download>
        Click to download resume
      </a>
      <h3>Front End Proficiencies</h3>
      <ul>
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Responsive Design</li>
        <li>Version Control/Git</li>
        <li>Front-End Testing</li>
        <li>RESTful APIs and AJAX</li>
      </ul>

      <h3>Back End Proficiencies</h3>
      <ul>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>API</li>
        <li>Authentication and Authorization</li>
        <li>MySql</li>
        <li>MongoDB</li>
      </ul>
    </div>
  );
}
