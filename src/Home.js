import React,{useState} from 'react';
import "./Home.css";
import Product from "./Product";



function Home() {
    const images=["./amazonbanner.jpeg","./adbanner.jpeg","./hairdryer.jpeg"];
    const [index,setIndex]=useState(0);
    
    {/*
    const increment=()=>{
     setIndex(index+1);
    } 
    const decrement =()=>{
      setIndex(0);
    }
    function slider(){
      if(index < images.length-1){
        increment();
      }else{
        decrement();
      }
    } */}
    //setInterval(slider, 5000);
    return (
        <div className="home">
        
        
        {/*<button onClick={increment}>{"<"}</button>*/}
        <img 
        className="home__image"
        src={images[index]} alt=""/>
        
        {/*<button onClick={increment}>{">"}</button>*/}
        
  
        
       
        <div className="home__row">
        <Product 
        id={123}
        title="Lenovo Ideapad Gaming 3 Ryzen 5 Hexa Core - (8 GB/1 TB HDD/256 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA Geforce GTX 1650 Ti) 15ARH05 Gaming Laptop  (15.6 inch, Onyx Black, 2.2 kg, With MS Office)"
        price={500}
        rating={5}
        image="https://rukminim1.flixcart.com/image/312/312/kdyus280/computer/m/k/7/lenovo-original-imafur8ebuadrrcg.jpeg?q=70"
        />
          <Product 
        id={1234}
        title="Apple iPhone XR (Black, 64 GB) ,The iPhone XR has arrived to scintillate our senses with a host of features, such as the Liquid Retina Display, a faster Face ID, and a powerful A12 Bionic Chip. Whether it's that picture-perfect portrait shot or a jaw-dropping HDR selfie."
        price={120}
        rating={4}
        image="https://rukminim1.flixcart.com/image/312/312/jnj7iq80/mobile/u/b/g/apple-iphone-xr-mryj2hn-a-original-imafa6zkm7qhv2zd.jpeg?q=70"
        />
        </div>
        <div className="home__row">
        <Product 
        id={12345}
        title="Lenovo Tab M8 (2nd Gen) HD 32 GB 8 inch with Wi-Fi+4G Tablet (Iron Grey)"
        price={20}
        rating={5}
        image="https://rukminim1.flixcart.com/image/612/612/k6qsn0w0/tablet/3/q/z/lenovo-za5g0047in-original-imafp4w7qvpnprv5.jpeg?q=70"
        />
          <Product 
        id={123456}
        title="Logitech G203 Prodigy RGB Wired Gaming Mouse – Black"
        price={20}
        rating={4}
        image="data:image/jpeg;base64,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"
        />
          <Product 
        id={1234567}
        title="MemeHO Normal Wood Wood Portable Laptop Table  (Finish Color - Wood)"
        price={80}
        rating={3}
        image="https://rukminim1.flixcart.com/image/612/612/jt1tq4w0/portable-laptop-table/z/n/u/mfb-melamine-fiberboard-shi-04-memeho-wood-original-imafeh47mbxqgdgd.jpeg?q=70"
        />
        </div>
        <div className="home__row">
        <Product 
        id={12345678}
        title="Whirlpool 265 L Frost Free Double Door 3 Star (2020) Convertible Refrigerator  (Magnum Steel, IF INV CNV 278 MAGNUM STEEL (3S)-N)"
        price={300}
        rating={4}
        image="./refrigerator.jpeg"
        />
        
        </div>
        </div>
    )
}

export default Home
