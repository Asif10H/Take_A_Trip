import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://mighty-springs-80713.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="container">
            <h1 className="text-center mt-5 mb-5">Reviews</h1>
            {
                reviews.length === 0 && <div className="spinner-border text-dark" role="status">
                    <span className="sr-only"></span>
                </div>
            }
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    reviews.map(review => <Review review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;