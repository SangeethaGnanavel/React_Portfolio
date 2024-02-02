import { Link } from "react-router-dom";
import Navbar from "./Navbar";
// import headerImage from "../images/img1.jpg";
// const headerStyle = { backgroundImage: `url(${headerImage})` };

export default function Header() {
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center header-img">
      <div className="container flex-row justify-space-between-lg ">
        <div className="col-6 justify-content-start">
          <h3 className="about-name">Sangeetha Gnanavel</h3>
        </div>
        <div className="col-6 justify-content-end">
          <Navbar
            links={[
              <Link key={1} className="nav-link text-light" to="/">
                About
              </Link>,
              <Link key={2} className="nav-link text-light" to="/Portfolio">
                Portfolio
              </Link>,
              <Link key={3} className="nav-link text-light" to="/Contact">
                Contact
              </Link>,
              <Link key={4} className="nav-link text-light" to="/Resume">
                Resume
              </Link>,
            ]}
          />
        </div>
      </div>
    </header>
  );
}
