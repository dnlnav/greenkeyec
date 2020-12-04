import React from 'react';
import { Link } from 'gatsby';
import shape2 from '../../assets/images/services/service-shape2.png';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const FeaturedService = ({ cards }) => {
  return (
    <div className="boxes-area">
      <div className="container">
        <div className="row">
          {cards.map(({ ctaLink, ctaText, description, title, icon }) => (
            <div key={title} className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-boxes-item">
                <div className="icon">
                  <img src={icon.fluid.src} alt="banner" />
                </div>
                <h3>
                  <Link to="/service-details">{title}</Link>
                </h3>
                <div>{documentToReactComponents(description.json)}</div>

                <Link to={ctaLink} className="default-btn">
                  <i className="flaticon-right"></i>
                  {ctaText}
                </Link>

                <div className="shape1">
                  <img src={shape2} alt="banner" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedService;
