import React, { useEffect, useState } from 'react';
import Place from '../../Place/Place';

const Home = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7077/places')
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, [])
    return (
        <div className="container">
            <div className="row">
                {
                    places.length === 0 && <div className="spinner-border text-dark" role="status">
                        <span className="sr-only"></span>
                    </div>
                }
                <h2 class="text-center mt-5">Popular Destinations</h2>
                <p class="text-center lead">Bangladesh's best tourist destinations</p>
                {
                    
                    places.map(place => <Place place={place} key={place._id}></Place>)
                }
            </div>
        </div>

    );
};

export default Home;