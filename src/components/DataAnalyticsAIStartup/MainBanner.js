import React from 'react';
import ReactWOW from 'react-wow';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const MainBanner = ({
  title,
  description,
  ctaLink,
  ctaText,
  image,
  linkId,
}) => {
  return (
    <div id={linkId} className="banner-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <div className="banner-content">
              <ReactWOW delay=".1s" animation="fadeInLeft">
                <h1>{title}</h1>
              </ReactWOW>

              <ReactWOW delay=".1s" animation="fadeInLeft">
                <div>{documentToReactComponents(description.json)}</div>
              </ReactWOW>

              <ReactWOW delay=".1s" animation="fadeInRight">
                <div className="btn-box">
                  <a href={ctaLink} className="default-btn">
                    <i className="flaticon-right"></i>
                    {ctaText}
                  </a>
                </div>
              </ReactWOW>
            </div>
          </div>

          <div className="col-lg-7 col-md-12">
            <div className="banner-animation-image">
              <img
                className="custom-banner-image"
                src={
                  image?.url ??
                  '/images/main-banner/banner-two/banner-two-main-img.png'
                }
                alt={image?.title ?? 'banner'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
