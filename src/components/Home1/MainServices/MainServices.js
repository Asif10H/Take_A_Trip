import React from 'react';
import SingleMainService from '../SingleMainService/SingleMainService';
import service1 from '../../../serviceIcon/1.svg'
import service2 from '../../../serviceIcon/2.svg'
import service3 from '../../../serviceIcon/3.svg'
const mainServices = [
    {
        name: "Comfortable Journey",
        description: "Lorem ipsum dolor, sit amet consectetur  adipisicing elit. Tempore v",
        image: service1
    },
    {
        name: "Luxurious Hotel",
        description: "Lorem ipsum dolor, sit amet consectetur  adipisicing elit. Tempore v",
        image: service2
    },
    {
        name: "Travel Guide",
        description: "Lorem ipsum dolor, sit amet consectetur  adipisicing elit. Tempore v",
        image: service3
    }
]
const MainServices = () => {
    return (
        <div className="container">
            <div className="text-center mt-5">
                <h1>Our Services</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    mainServices.map(service => <SingleMainService service={service}></SingleMainService>)
                }
            </div>
        </div>
    );
};

export default MainServices;