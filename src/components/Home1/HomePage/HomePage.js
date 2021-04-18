import React from 'react';
import Articles from '../Articles/Articles';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import MainServices from '../MainServices/MainServices';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import TripCarousel from '../TripCarousel/TripCarousel';

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <TripCarousel></TripCarousel>
            <Home></Home>
            <MainServices></MainServices>
            <Services></Services>
            <Articles></Articles>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;