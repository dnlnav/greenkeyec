import React from 'react';

const Funfacts = ({ itemsCollection: { items }, title, linkId }) => {
  return (
    <div id={linkId} className="funfacts-area pb-70 pt-100">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
        </div>
        <div className="row">
          {items.map(({ name, description, icon: { url: icon } }) => (
            <div key={name} className="col-6 col-md-4">
              <div className="single-funfacts-box">
                <div className="icon">
                  <img src={icon} alt="banner" />
                </div>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Funfacts;
