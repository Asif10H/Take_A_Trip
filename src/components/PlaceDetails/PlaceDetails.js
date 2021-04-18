import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import PackagedDetails from '../PackagedDetails/PackagedDetails';

const packagesData = [
    {
        packageName: "Super Deluxe Package",
        hotelType: "Stay in a 4 star hotel",
        image: "https://i.ibb.co/10VVMTg/5.jpg",
        duration: "2 days and 2 nights",
        description: "All Travel Cost are included Lunch,Dinner & Breakfast of everyday included A local guide",
        cost: "Only TK.8000 per person"
    },
    {
        packageName: "Deluxe Package",
        hotelType: "Stay in a 4 star hotel",
        image: "https://i.ibb.co/kgHWBGK/4.jpg",
        duration: "2 days and 2 nights",
        description: "All Travel Cost are included  Lunch,Dinner & Breakfast of everyday included A local guide",
        cost: "Only TK.7000 per person"
    },
    {
        packageName: "Standard Package",
        hotelType: "Stay in a 3 star hotel",
        image: "https://i.ibb.co/QYjRpcL/3.jpg",
        duration: "2 days and 2 nights",
        description: "All Travel Cost are included  Lunch,Dinner & Breakfast of everyday included A local guide",
        cost: "Only TK.6000 per person"
    }
]

const PlaceDetails = () => {
    const { _id } = useParams();
    const [placeDetail, setPlaceDetail] = useState({});
    useEffect(() => {
        fetch(`https://mighty-springs-80713.herokuapp.com/places/${_id}`)
            .then(res => res.json())
            .then(data => setPlaceDetail(data))
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>{placeDetail.name}</h1>
                    <img src={placeDetail.imageURL} alt="" />
                    <h1>৳{placeDetail.addPrice}</h1>
                </div>
                <div className="col-md-6">
                    <h1>About</h1>
                    <p className="lead">{placeDetail.description}</p>
                </div>
                {
                    packagesData.map(packages => <PackagedDetails packages={packages}></PackagedDetails>)
                }
            </div>
            <Link to={"/booking"} className="card-link btn btn-primary mt-3 mb-3">Checkout</Link>
        </div>
    );
};

export default PlaceDetails;