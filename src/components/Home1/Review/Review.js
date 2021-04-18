import React from 'react';
import './Review.css'
const Review = ({review}) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card card-shadow ">
                <div className="card-img-top mx-auto">
                    <img style={{height: '200px'}} src={`data:image/png;base64,${review.image.img}`} className="p-2 img-responsive center-block d-block mx-auto review-img rounded-circle img-fluid" alt=""/>
                </div>
                <div className="card-body text-center">
                    <h6 className="card-title country-name">{review.name}</h6>
                    <p className="lead">{review.review}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;