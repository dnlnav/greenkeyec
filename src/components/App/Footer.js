import React from 'react';
import { Link } from 'gatsby';
import footerMap from '../../assets/images/footer-map.png';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Footer = ({
  logo,
  linkedInLink,
  instagramLink,
  facebookLink,
  description,
  infoList,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-area bg-color">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <a href="/" className="logo">
                <img src={logo} alt="logo" />
              </a>
              <p>{documentToReactComponents(description.json)}</p>

              <ul className="social-link">
                <li>
                  <Link
                    to={facebookLink}
                    className="d-block"
                    target="_blank"
                    rel="noreferrer">
                    <i className="bx bxl-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    to={instagramLink}
                    className="d-block"
                    target="_blank"
                    rel="noreferrer">
                    <i className="bx bxl-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    to={linkedInLink}
                    className="d-block"
                    target="_blank"
                    rel="noreferrer">
                    <i className="bx bxl-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 offset-lg-5 col-sm-6">
            <div className="single-footer-widget">
              <ul className="footer-contact-info">
                {infoList.map(({ nombre, link, iconName }) => (
                  <li>
                    <i className={`bx bx-${iconName} bxl-${iconName}`}></i>
                    <a href={link}>{nombre}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom-area">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>
                Copyright @{currentYear} <strong>Rewy</strong> All rights
                reserved{' '}
                <a
                  target="_blank"
                  href="https://envytheme.com/"
                  rel="noreferrer">
                  EnvyTheme
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-map">
        <img src={footerMap} alt="footer-logo" />
      </div>
    </footer>
  );
};

export default Footer;
