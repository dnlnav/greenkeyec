import React from 'react';

const Funfacts = ({ items }) => {
  return (
    <div className="funfacts-area pb-70">
      <div className="container">
        <div className="row">
          {items.map(
            ({
              name,
              description,
              icon: {
                fluid: { src: icon },
              },
            }) => (
              <div className="col-lg-3 col-sm-6 col-6 col-md-3">
                <div className="single-funfacts-box">
                  <div className="icon">
                    <img src={icon} alt="banner" />
                  </div>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Funfacts;
