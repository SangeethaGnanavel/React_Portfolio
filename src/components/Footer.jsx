import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-primary p-2 footer">
      <div className="container text-center mb-5">
        <a
          href="https://github.com/SangeethaGnanavel?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="footer-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/sangeetha-gnanavel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="footer-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
