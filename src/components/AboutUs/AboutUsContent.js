import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const AboutUsContent = ({ columnasCollection: { items: columns }, linkId }) => {
  return (
    <section id={linkId} className="about-area ptb-70">
      <div className="circle-shape1">
        <img src="/images/shape/circle-shape1.png" alt="banner" />
      </div>

      <div className="container">
        <div className="row">
          {columns.map(({ title, list, description }) => (
            <div key={title} className="col-lg-6 col-md-6 col-sm-6">
              <div className="about-text">
                <h3>{title}</h3>
                <div>{documentToReactComponents(description.json)}</div>
                <ul className="features-list">
                  {list.map((item) => (
                    <li key={item}>
                      <i className="flaticon-tick"></i> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="circle-shape1">
        <img src="/images/shape/circle-shape1.png" alt="banner" />
      </div>
    </section>
  );
};

export default AboutUsContent;
