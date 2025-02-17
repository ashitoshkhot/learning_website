import React from 'react'
import logo from '../images/logo.jpg';
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="hero">
      <nav>
        <img src={logo} alt="Logo" className="logo" />
        <ul>
          <li><a href="#home"><Link to = "/">Home</Link></a></li>
          <li><a href="#about"><Link to = "/aboutus">About</Link></a></li>
          <li className="dropdown">
            <a href="#courses"><Link to = "/courses">Courses</Link></a>
            <ul className="dropdown-menu">
              <li><a href="#certificate"><Link to = "/CertificatePage">Certificate</Link></a></li>
            </ul>
          </li>
          <li><a href="#features"><Link to = "/features">Features</Link></a></li>
          <li><a href="#review"><Link to = "/reviews">Reviews</Link></a></li>
          <li><a href="#policy"><Link to = "/Privacy-policy">Policy</Link> </a></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>

        <Link to="/contactus">
        <button className="contact-btn">Contact</button>
       </Link>
      </nav>
    </div>
  )
}

export default Navbar