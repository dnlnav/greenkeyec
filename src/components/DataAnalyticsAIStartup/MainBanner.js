import React from 'react';
import ReactWOW from 'react-wow';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import img1 from '../../assets/images/main-banner/banner-two/banner-two-shape1.png';
import img2 from '../../assets/images/main-banner/banner-two/banner-two-shape2.png';
import img3 from '../../assets/images/main-banner/banner-two/banner-two-shape3.png';
import img4 from '../../assets/images/main-banner/banner-two/banner-two-shape4.png';
import img5 from '../../assets/images/main-banner/banner-two/banner-two-shape5.png';
import img6 from '../../assets/images/main-banner/banner-two/banner-two-shape6.png';
import img7 from '../../assets/images/main-banner/banner-two/banner-two-shape7.png';
import img8 from '../../assets/images/main-banner/banner-two/banner-two-shape8.png';
import img9 from '../../assets/images/main-banner/banner-two/banner-two-shape9.png';
import img10 from '../../assets/images/main-banner/banner-two/banner-two-shape10.png';
import img11 from '../../assets/images/main-banner/banner-two/banner-two-shape11.png';
import img12 from '../../assets/images/main-banner/banner-two/banner-two-shape12.png';
import img13 from '../../assets/images/main-banner/banner-two/banner-two-main-img.png';

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
            {!!image ? (
              <div className="banner-animation-image">
                <img
                  className="custom-banner-image"
                  src={image.fluid.src}
                  alt={image.title}
                />
                <div />
              </div>
            ) : (
              <div className="banner-animation-image">
                <ReactWOW delay=".1s" animation="fadeInDown">
                  <img src={img1} alt="banner" />
                </ReactWOW>
                <ReactWOW delay=".1s" animation="fadeInDown">
                  <img src={img2} alt="banner" />
                </ReactWOW>
                <ReactWOW delay=".1s" animation="fadeInDown">
                  <img src={img3} alt="banner" />
                </ReactWOW>
                <ReactWOW delay=".1s" animation="fadeInDown">
                  <img src={img4} alt="banner" />
                </ReactWOW>
                <ReactWOW delay=".1s" animation="fadeInUp">
                  <img src={img5} alt="banner" />
                </ReactWOW>
                <ReactWOW delay=".1s" animation="fadeInDown">
                  <img src={img6} alt="banner" />
                </ReactWOW>
                <ReactWOW delay=".1s" animation="fadeInDown">
                  <img src={img7} alt="banner" />
                </ReactWOW>
                <ReactWOW delay=".1s" animation="fadeInDown">
                  <img src={img8} alt="banner" />
                </ReactWOW>
                <ReactWOW delay=".1s" animation="fadeInDown">
                  <img src={img9} alt="banner" />
                </ReactWOW>
                <ReactWOW delay=".1s" animation="fadeInDown">
                  <img src={img10} alt="banner" />
                </ReactWOW>
                <ReactWOW delay=".1s" animation="fadeInDown">
                  <img src={img11} alt="banner" />
                </ReactWOW>
                <ReactWOW delay=".1s" animation="fadeInLeft">
                  <img src={img12} alt="banner" />
                </ReactWOW>
                <img src={img13} alt="banner" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
