import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
const stripePromise = loadStripe('pk_test_51IhUynA7ITRKRjZwAlB0T4s0PGkySTKpv1cn7rvPuRRiAnATDjHQjxRixJekf5Nfy7asGrHKyAjrihF5oeXlBHWc00WXpWzGim');


const ProcessPayment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <SimpleCardForm></SimpleCardForm>
            </Elements>
        </div>
    );
};

export default ProcessPayment;