import React from 'react'
import {Link} from 'react-router-dom';

   const Footer = () => {
   return (
    <footer >
      <div className="footerContainer">
        <div className="socialIcons">
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-google-plus"></i></a>
          <a href="#"><i className="fa-brands fa-youtube"></i></a>
        </div>
        <div className="footerNav">
          <ul>
            <li><a href="#"><Link to = "/">Gallery</Link></a></li>
            <li><a href="#"><Link to = "/aboutus">About</Link></a></li>
            <li><a href="#"><Link to = "/CertificatePage">Certificate</Link></a></li>
            <li><a href="#"><Link to = "/features">Features</Link></a></li>
            <li><a href="#"><Link to = "/Review">Reviews</Link></a></li>
            <li><a href="#"><Link to = "/Privacy-policy">Policy</Link></a></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><a href="#"><Link to = "/contactus">Contact</Link></a></li>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
        <p>
          Copyright &copy;2025; Designed by <span className="designer">Creative learning</span>
        </p>
      </div>
    </footer>
  );
}

 export default Footer
