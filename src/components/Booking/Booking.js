import React from 'react';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './Booking.css'
const Booking = () => {
    return (
        <div className="container mt-5 ">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col-md-12">
                    <h1>Booking Now</h1>
                    <div className="card">
                        <div className="card-body">
                            <ProcessPayment></ProcessPayment>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;