import React from 'react';
import shape1 from '../../assets/images/our-mission/our-mission-shape1.png';
import shape2 from '../../assets/images/our-mission/our-mission-shape2.png';
import mission1 from '../../assets/images/our-mission/our-mission1.png';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const OurMission = ({
  buttonLink,
  buttonText,
  image,
  endDescription,
  startDescription,
  list,
  title,
  linkId,
}) => {
  return (
    <section id={linkId} className="our-mission-area ptb-100">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12">
            <div className="our-mission-content">
              <div className="content">
                <h2>{title}</h2>
                <p>{documentToReactComponents(startDescription.json)}</p>
                <ul className="our-mission-list">
                  {list.map((item) => (
                    <li>
                      <i className="flaticon-tick"></i>
                      {item}
                      <img src={shape2} alt="banner" />
                    </li>
                  ))}
                </ul>
                <p>{documentToReactComponents(endDescription.json)}</p>
                <a href={buttonLink} className="default-btn">
                  <i className="flaticon-right"></i>
                  {buttonText}
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12">
            <div className="our-mission-image">
              <img
                src={image?.fluid?.src ?? mission1}
                alt={image?.title ?? 'Imagen'}
              />
              <div className="shape">
                <img src={shape1} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
