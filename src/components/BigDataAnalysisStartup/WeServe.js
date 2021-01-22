import React from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const WeServe = ({ title, description, itemList, linkId }) => {
  return (
    <section
      id={linkId}
      className="industries-serve-area bg-fafafb pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
          <p>
            <span>{documentToReactComponents(description.json)}</span>
          </p>
        </div>

        <div className="row">
          {itemList.map(({ iconName, nombre, link }) => (
            <div className="col-lg-3 col-sm-6 col-md-6 mb-30">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className={iconName}></i>
                </div>
                {nombre}
                <a href={link} className="link-btn" aria-label={nombre}></a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="vector-shape11">
        <img src="/images/shape/vector-shape11.png" alt="Vector Shape" />
      </div>
    </section>
  );
};
export default WeServe;
