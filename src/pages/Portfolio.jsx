// This is a static page mocking an "About Us" section for our fake user data

import "../styles/Portfolio.css";
import { FaGithub } from "react-icons/fa";

import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";

export default function Portfolio() {
  return (
    <div className="container pt-4">
      <div className="row justify-content-center p-2">
        <div className="col-4 img1">
          <img src={img1} alt="Fitness Dashboad" />
          <a
            className="project-name"
            href=" https://sangeethagnanavel.github.io/Fitness_Dashboard/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fitness Dashboad
          </a>
          <a
            href="https://github.com/SangeethaGnanavel/5_day_weather_forecast"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-overlay"
          >
            <FaGithub className="icon" />
          </a>
          <p className="project-detail">API's/Javascript</p>
        </div>
        <div className="col-4 img2">
          <img src={img2} alt=" Retro Wheels" />
          <a
            className="project-name"
            href="https://whispering-depths-78873-209c3008c97c.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Retro Wheels
          </a>
          <a
            href="https://github.com/SangeethaGnanavel/Retro_Wheels"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-overlay"
          >
            <FaGithub className="icon" />
          </a>
          <p className="project-detail">MVC / MySQL</p>
        </div>
      </div>

      <div className="row justify-content-center p-2">
        <div className="col-4 img3">
          <img src={img3} alt="MVC" />
          <a
            className="project-name"
            href="https://pwa-text-editor-9rmj.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            PWA
          </a>
          <a
            href="https://github.com/SangeethaGnanavel/PWA_Text_Editor"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-overlay"
          >
            <FaGithub className="icon" />
          </a>
          <p className="project-detail">PWA/Webpack/SW/IndexDB</p>
        </div>

        <div className="col-4 img4">
          <img src={img4} alt="Weather App" />
          <a
            className="project-name"
            href="https://sangeethagnanavel.github.io/5_day_weather_forecast/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Weather App
          </a>
          <a
            href="https://github.com/SangeethaGnanavel/5_day_weather_forecast"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-overlay"
          >
            <FaGithub className="icon" />
          </a>
          <p className="project-detail">API's/Javascript</p>
        </div>
      </div>

      <div className="row justify-content-center p-2">
        <div className="col-5 img5 ">
          <img src={img5} alt="Social Network API" />
          <a
            className="project-name"
            href="https://screenrec.com/share/8svYUkWQ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            Social Network API
          </a>
          <a
            href="https://github.com/SangeethaGnanavel/Social_Network_API"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-overlay"
          >
            <FaGithub className="icon" />
          </a>
          <p className="project-detail">Express Js / Mongoose</p>
        </div>
      </div>
    </div>
  );
}
