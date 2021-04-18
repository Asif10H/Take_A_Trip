import React from 'react';
import './Article.css'
const Article = (props) => {
    const { name, image } = props.article;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card card-shadow ">
                <div className="card-img-top">
                    <img src={image} className="article-img img-thumbnail " alt="..." />
                </div>
                <div className="card-body">
                    <h6 className="card-title country-name">{name}</h6>
                    <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, quasi!</p>
                    <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    );
};

export default Article;