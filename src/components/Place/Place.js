import React from 'react';
import { Link } from 'react-router-dom';
import './Place.css'
const Place = (props) => {
    const { name, imageURL, _id } = props.place;

    return (
        <div class="col-lg-4 col-md-6 col-sm-12 py-3">
            <div>
                <img class="img-fluid rounded" src={imageURL} alt="" />
            </div>
            <div class="caption">
                <p class="d-flex align-items-center"> {name}</p>
            </div>
            <Link to={`/place/${_id}`} className="card-link btn btn-primary mt-3 ml-auto">Details</Link>
        </div>
    );
};

export default Place;