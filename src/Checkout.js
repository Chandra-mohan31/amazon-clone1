import React from 'react';
import {useStateValue} from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import CurrencyFormat from "react-currency-format";

function Checkout() {
    const [{basket}]=useStateValue();
    return (
        <div className="checkout">
        <div className="checkout__left">
        <img className="checkout__ad"
        src="./checkoutimg.jpeg"
         alt=""/>
         {basket?.length==0 ?(
             <div>
             <h2 >Your shopping basket is empty</h2>
             <p>you have no items in your basket,get to the homepage and click the "add to basket" button</p>
             </div>
         ): (
             <div>
             <h2 className="checkout__title">Your shopping basket</h2>
             {basket.map(item =>(
                 <CheckoutProduct 
                 id={item.id}
                 title={item.title}
                 image={item.image}
                 price={item.price}
                 rating={item.rating}
                 />
             ))}
             </div>
         )}
         </div>
         {basket.length > 0 && (
             <div className="checkout__right">
               <Subtotal />
             <basket/>
             </div>
         )}

            
        </div>
    );
}

export default Checkout;
