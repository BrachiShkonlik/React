import { useSelector } from "react-redux";
// import "rsuite/dist/rsuite.min.css";
import React, { useEffect } from 'react';
import { GetDetails } from "./GetDetails";
import Card from 'react-bootstrap/Card';


function Shop() {
    const productArr = useSelector((state) => state.ProductsReduser);
    useEffect(() => {
        document.title = 'A taste of rael food'
    }, []);
    return (
        <>
        <div class="grid-container" id="Shop">
      
            {productArr.map((item, index) => (
                <figure className="snip0016">
                    <img src={item.image} alt={item.name} id="shopImg"/>
                    <figcaption>
                        <div><h2><span> {item.name} </span><br></br> ₪{item.price} </h2></div>
                        <div><p><GetDetails product={item} disabled={item.qty == 0 ? true : false}></GetDetails></p></div>
                    </figcaption>
                </figure>
            ))}
        </div>
        </>

    );
};
export default Shop;

























































































