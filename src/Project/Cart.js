import { useDispatch, useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { FinalPayment } from "./FinalPayment";
import { BsTrash } from "react-icons/bs";
import { deleteFromCart } from '../Redux/Actions/CartAction';
import { additionQtyToCart, reductionQtyFromCart } from '../Redux/Actions/CartAction';
import { useState } from "react";
// import { Refresh } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import { additionQty, reductionQty } from '../Redux/Actions/ProductAction';
import React, { useEffect } from 'react';
// import hungryChild from "../Redux/Pictures/hungryChild.jpg"

export function Cart() {
    const [show, setShow] = useState(false);
    const cartArr = useSelector((state) => state.CartReduser);
    const dispach = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        document.title = 'What I want to eat'
    }, []);
    
    return (
        <div id="cart">
            {cartArr.length === 0 ?
                <div id="emptyCart">
                    <h1><br></br></h1>
                    <h1 id="emptyCartText">Oops, you're still hungry 😢,</h1>
                    <br></br>
                    <h1 id="Oops button">However, you can <span id="oder" onClick={() => { navigate("/Shop") }}>order</span> now.</h1>
                </div>
                :
                <div id="notEmptyCart" >
                    <h1><br></br></h1>
                    {cartArr.map((item, index) => (
                        <div id="cart_Card"className="d-flex justify-content-around" >
                            <Card id="cartCard" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body id="card_body">
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        ₪ {item.price}<br></br>
                                    </Card.Text>
                                    <Button id="cartButton" class="plusButton" onClick={(e) => {
                                        e.preventDefault();
                                        setShow(false);
                                        dispach(reductionQty((item.id)));
                                        dispach(additionQtyToCart((item.id)))
                                        navigate("/Cart")
                                    }}>+</Button>
                                    {item.qty}
                                    <Button id="cartButton" onClick={(e) => {
                                        e.preventDefault();
                                        setShow(false);
                                        dispach(additionQty((item.id)));
                                        dispach(reductionQtyFromCart((item.id)))
                                        navigate("/Cart")
                                    }}
                                    >-</Button>
                                </Card.Body>
                                <Button id = "deleteButton" variant="light" onClick={(e) => {
                                    e.preventDefault();
                                    dispach(deleteFromCart((item.id)))
                                }}><BsTrash></BsTrash></Button>
                            </Card>
                        </div>
                        
                    ))}
                    <FinalPayment></FinalPayment>
                </div>
            }
        </div>
    );
}

