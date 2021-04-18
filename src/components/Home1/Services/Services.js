import React from 'react';
import SingleService from '../SingleService/SingleService';

const services = [
    {
        name: "Handpicked Hotels",
        description: "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
        image: "https://i.ibb.co/jwQ0tfb/Hot-Air-Balloon.png"
    },
    {
        name: "World Class Service",
        description: "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
        image: "https://i.ibb.co/Dz0ztNL/Map-Marker.png"
    },
    {
        name: "Best Price Guarantee",
        description: "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
        image: "https://i.ibb.co/5MPJ4DJ/Worldwide-Location.png"
    }
]
const Services = () => {

    return (
        <div className="container">
            <div className="text-center mt-5 mb-5">
                <h1>Why Choose Us</h1>
                <h5>Here are reasons you should plan trip with us</h5>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(service => <SingleService service={service}></SingleService>)
                }
            </div>
        </div>
    );
};

export default Services;