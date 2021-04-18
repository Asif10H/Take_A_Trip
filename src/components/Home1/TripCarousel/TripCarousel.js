import React from 'react';

const TripCarousel = () => {
    return (
        <div className="container">
            <div className="row">
                <div
                    id="carouselExampleControls"
                    className="carousel slide panda-slide mt-5"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row d-flex align-items-center p-5">
                                <div className="col-md-7">
                                    <h1>Beautiful Bangladesh</h1>
                                    <p className="lead">
                                        Explore the beauty of Bangladesh with us and find yourself by travelling
                                     </p>
                                    <button className="btn btn-primary">Explore Now</button>
                                </div>
                                <div className="col-md-5">
                                    <img
                                        src="https://i.ibb.co/ZB0sx7D/manikpur.jpg"
                                        className="d-block w-100"
                                        alt="manikpur"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row d-flex align-items-center p-5">
                                <div className="col-md-7">
                                    <h1>Beautiful Bangladesh</h1>
                                    <p>
                                        Explore the beauty of Bangladesh with us and find yourself by travelling
                                     </p>
                                    <button className="btn btn-primary">Explore Now</button>
                                </div>
                                <div className="col-md-5">
                                    <img
                                        src="https://i.ibb.co/yqYZX6k/marayontong.jpg"
                                        className="d-block w-100"
                                        alt="marayontong"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row d-flex align-items-center p-5">
                                <div className="col-md-7">
                                    <h1>Beautiful Bangladesh</h1>
                                    <p>
                                        Explore the beauty of Bangladesh with us and find yourself by travelling
                                     </p>
                                    <button className="btn btn-primary">Explore Now</button>
                                </div>
                                <div className="col-md-5">
                                    <img
                                        src="https://i.ibb.co/MNDF419/saintmartine.jpg"
                                        className="d-block w-100"
                                        alt="saintmartine"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row d-flex align-items-center p-5">
                                <div className="col-md-7">
                                    <h1>Beautiful Bangladesh</h1>
                                    <p>
                                        Explore the beauty of Bangladesh with us and find yourself by travelling
                                     </p>
                                    <button className="btn btn-primary">Explore Now</button>
                                </div>
                                <div className="col-md-5">
                                    <img
                                        src="https://i.ibb.co/n8M14j6/sajek.jpg"
                                        className="d-block w-100"
                                        alt="sajek"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row d-flex align-items-center p-5">
                                <div className="col-md-7">
                                    <h1>Beautiful Bangladesh</h1>
                                    <p>
                                        Explore the beauty of Bangladesh with us and find yourself by travelling
                                     </p>
                                    <button className="btn btn-primary">Explore Now</button>
                                </div>
                                <div className="col-md-5">
                                    <img
                                        src="https://i.ibb.co/b7B0HMz/DCIM-100-GOPRO-GOPR0345-JPG.jpg"
                                        className="d-block w-100"
                                        alt="sunamganj"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#carouselExampleControls"
                        role="button"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carouselExampleControls"
                        role="button"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TripCarousel;