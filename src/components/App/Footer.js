import React from 'react';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Footer = ({
  logo,
  linkedInLink,
  instagramLink,
  facebookLink,
  description,
  infoListCollection: { items: infoList },
  copyright,
}) => {
  return (
    <footer className="footer-area bg-color">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <a href="/" className="logo">
                <img src={logo} alt="logo" />
              </a>
              <div>{documentToReactComponents(description.json)}</div>

              <ul className="social-link">
                <li>
                  <Link
                    href={facebookLink}
                    className="d-block"
                    target="_blank"
                    rel="noreferrer">
                    <a>
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={instagramLink}
                    className="d-block"
                    target="_blank"
                    rel="noreferrer">
                    <a>
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={linkedInLink}
                    className="d-block"
                    target="_blank"
                    rel="noreferrer">
                    <a>
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 offset-lg-5 col-sm-6">
            <div className="single-footer-widget">
              <ul className="footer-contact-info">
                {infoList.map(({ nombre, link, iconName }) => (
                  <li key={nombre}>
                    <i className={`bx bx-${iconName} bxl-${iconName}`}></i>
                    <Link href={link}>
                      <a>{nombre}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom-area">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div>
                {!!copyright.json ? (
                  <span>{documentToReactComponents(copyright.json)} </span>
                ) : (
                  ''
                )}
                <span>
                  Powered by{' '}
                  <a
                    target="_blank"
                    href="https://dnlnav.dev/"
                    rel="noreferrer">
                    <strong>DnlNav</strong>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-map">
        <img src="/images/footer-map.png" alt="footer-logo" />
      </div>
    </footer>
  );
};

export default Footer;
