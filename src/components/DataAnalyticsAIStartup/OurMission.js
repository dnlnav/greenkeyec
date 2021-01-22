import React from 'react';
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
                <div>{documentToReactComponents(startDescription.json)}</div>
                <ul className="our-mission-list">
                  {list.map((item, index) => (
                    <li key={item}>
                      <i className="flaticon-tick"></i>
                      {item}
                      <img
                        src="/images/our-mission/our-mission-shape2.png"
                        alt="banner"
                      />
                    </li>
                  ))}
                </ul>
                <div>{documentToReactComponents(endDescription.json)}</div>
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
                src={image?.url ?? '/images/our-mission/our-mission1.png'}
                alt={image?.title ?? 'Imagen'}
              />
              <div className="shape">
                <img
                  src="/images/our-mission/our-mission-shape1.png"
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
