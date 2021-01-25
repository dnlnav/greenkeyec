import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const FeaturedService = ({ cardsCollection: { items: cards }, linkId }) => {
  return (
    <div id={linkId} className="boxes-area">
      <div className="container">
        <div className="row">
          {cards.map(({ ctaLink, ctaText, description, title, icon }) => (
            <div key={title} className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-boxes-item">
                <div className="icon">
                  <img src={icon.url} alt="banner" />
                </div>
                <h3>
                  <a href="/service-details">{title}</a>
                </h3>
                <div className="single-boxes-item__text">
                  {documentToReactComponents(description.json)}
                </div>

                <a href={ctaLink} className="default-btn">
                  <i className="flaticon-right"></i>
                  {ctaText}
                </a>

                <div className="shape1">
                  <img src="/images/services/service-shape2.png" alt="banner" />
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
