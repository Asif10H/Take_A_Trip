import React from 'react';
import Article from '../Article/Article';
const articles = [
    {
        name: "Memorial Day to Someone Told Me to Travel",
        description: "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
        image: "https://i.ibb.co/C5QfMVk/article1.jpg"
    },
    {
        name: "7 Tips For Nomads On A Budget Trips",
        description: "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
        image: "https://i.ibb.co/DKNyj6b/article2.jpg"
    },
    {
        name: "Taking A Travel Blog Victory Lap",
        description: "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
        image: "https://i.ibb.co/bsmGbZ3/article3.jpg"
    }
]
const Articles = () => {
    return (
        <div className="container">
            <div className="text-center mt-5 mb-5">
                <h1>Articles & Tips</h1>
                <h5>Explore some of the best tips from around the world</h5>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    articles.map(article => <Article article={article}></Article>)
                }
            </div>
        </div>
    );
};

export default Articles;