import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted border-bottom border-top">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom bg-dark">
          <div className="me-5 d-none d-lg-block text-white">
            <span>Get connected with us on social networks:</span>
          </div>
          <div className='text-white'>
            <a href="https://facebook.com" className="me-4 text-reset">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com" className="me-4 text-reset">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://google.com" className="me-4 text-reset">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href="https://instagram.com" className="me-4 text-reset">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" className="me-4 text-reset">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com" className="me-4 text-reset">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </section>

        <div className="text-center p-4 bg-dark text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2024 Copyright:
          <Link className="text-reset fw-bold text-white" style={{textDecoration: 'none'}} to="https://demo-portfolio-website.vercel.app">Pratik Singh</Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
