import React from 'react';

const PackagedDetails = (props) => {
    const { packageName, image, hotelType, duration, description, cost } = props.packages;
    return (
        <div className="col-md-4 col-sm-12">
            <div className="card card-shadow ">
                <div className="card-img-top">
                    <img src={image} className="article-img img-thumbnail " alt="..." />
                </div>
                <div className="card-body">
                    <h2 className="card-title country-name">{packageName}</h2>
                    <p className="card-text">{hotelType}</p>
                    <p className="card-text">Duration: {duration}</p>
                    <p className="card-text">{description}</p>
                    <p className="card-text">Cost: {cost}</p>
                </div>
            </div>
        </div>
    
    );
};

export default PackagedDetails;