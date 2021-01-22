import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const StartProject = ({
  title,
  description,
  linkId,
  image,
  button: { iconName, link, nombre },
}) => {
  return (
    <section id={linkId} className="project-start-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="project-start-image">
              <img
                src={image?.url ?? '/images/project-start1.png'}
                alt={image?.title ?? 'Imagen'}
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="project-start-content">
              <h2>{title}</h2>
              <div>{documentToReactComponents(description.json)}</div>
              <a href={link} className="default-btn">
                <i
                  className={`bx bxl-${iconName} project-start-area__icon`}></i>{' '}
                {nombre}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="circle-shape1">
        <img src="/images/shape/vector-shape3.png" alt="banner" />
      </div>
    </section>
  );
};

export default StartProject;
