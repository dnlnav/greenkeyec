import React from 'react';
import process7 from '../../assets/images/process/process7.png';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const HowItWork = ({
  image: {
    fluid: { src: image },
  },
  description,
  title,
  items,
  linkId,
}) => {
  return (
    <section id={linkId} className="process-area ptb-100 bg-fafafb">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
          <p>{documentToReactComponents(description.json)}</p>
        </div>
        <div className="row align-items-center m-0">
          <div className="col-lg-6 col-md-12 p-0">
            <div className="process-image">
              <img src={image || process7} alt="banner" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 p-0">
            <div className="process-content">
              <div className="row">
                {items.map(
                  (
                    {
                      name,
                      icon: {
                        fluid: { src: icon },
                      },
                    },
                    index
                  ) => (
                    <div className="col-lg-12 col-md-6">
                      <div className="single-box-item">
                        <div className="d-flex align-items-center">
                          <div className="image">
                            <img src={icon} alt="banner" />
                          </div>
                          <h3>{name}</h3>
                          <div className="number">{index + 1}</div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
