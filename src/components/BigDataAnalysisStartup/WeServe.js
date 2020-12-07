import React from 'react';
import { Link } from 'gatsby';

import VectorShape11 from '../../assets/images/shape/vector-shape11.png';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const WeServe = ({ title, description, itemList }) => {
  return (
    <section className="industries-serve-area bg-fafafb pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
          <p>
            <span>{documentToReactComponents(description.json)}</span>
          </p>
        </div>

        <div className="row">
          {itemList.map(({ iconName, nombre, link }) => (
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="flaticon-factory"></i>
                </div>
                {nombre}
                <a href={link} className="link-btn"></a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="vector-shape11">
        <img src={VectorShape11} alt="Vector Shape" />
      </div>
    </section>
  );
};

export default WeServe;
