import React from 'react';
import './SingleMainService.css'
const SingleMainService = (props) => {
    const { name, image, description } = props.service;
    console.log(image);
    return (
        <div>
        <div className="col">
            <div className="card h-100 main card-shadow">
                <img src={image} className="card-img-top img-fluid h-50 w-50" alt={name} />
                <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                    <p className="card-text text-center lead">{description}</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SingleMainService;