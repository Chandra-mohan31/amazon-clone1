import React from 'react';
import "./Home.css";
import Product from "./Product";


function Home() {
    return (
        <div className="home">
        <img 
        className="home__image"
        src="/amazonbanner.jpeg"alt=""/>
        <div className="home__row">
        <Product 
        id={123}
        title="LAPTOP"
        price={500}
        rating={5}
        image="./product.jpeg"
        />
          <Product 
        id={123}
        title="MOBILE"
        price={120}
        rating={5}
        image="./mobile.jpeg"
        />
        </div>
        <div className="home__row">
        <Product 
        id={123}
        title="IRON BOX"
        price={20}
        rating={5}
        image="./ironbox.jpeg"
        />
          <Product 
        id={123}
        title="HAIR DRYER"
        price={20}
        rating={5}
        image="./hairdryer.jpeg"
        />
          <Product 
        id={123}
        title="TABLE"
        price={80}
        rating={5}
        image="./table.jpeg"
        />
        </div>
        <div className="home__row">
        <Product 
        id={123}
        title="REFRIGERATOR"
        price={300}
        rating={5}
        image="./refrigerator.jpeg"
        />
        
        </div>
        </div>
    )
}

export default Home
