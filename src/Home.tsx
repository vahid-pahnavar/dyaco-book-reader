import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Welcome to your Home of PWA!</h1>
            <Link to="/about">برو به درباره</Link>
        </div>
    )
};

export default Home;