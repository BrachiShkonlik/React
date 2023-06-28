import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsCart } from "react-icons/bs";
import { addToCart } from '../Redux/Actions/CartAction';
import { reductionQty } from '../Redux/Actions/ProductAction';

export function GetDetails(props) {
    const [show, setShow] = useState(false);
    const handeClose = () => setShow(false);
    const handeShow = () => setShow(true);
    const dispach = useDispatch();
    const tempretureProduct = {
        description: props.product.description
        , price: props.product.price
        , image: props.product.image
        , qty: 1
        , name: props.product.name
        , id: props.product.id
    }
    tempretureProduct.qty = 1;
    return (
        <>
            <Button variant="light" onClick={() =>{
                handeShow();
                console.log("yryryr")
            }}>More Detailes ∨</Button>

            <Modal show={show} onHide={handeClose} >
                <Modal.Header X closeButton >
                    <Modal.Title>{props.product.name}</Modal.Title>
                </Modal.Header >
                <Modal.Body id = "ModalBody">
                    <Form>
                        <Form.Group className="mb-3" controlId="logInForm.ControlText1" >
                            <img id="detailesImg" style={{ height: "200px", width: "300px" }} src={props.product.image}></img><br></br>
                            <h5>{props.product.description}</h5><br></br>
                            <h5>price: ₪ {props.product.price}</h5>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" id="add_to_cart_buton"
                    disabled={props.product.qty == 0 ? true : false} 
                    onClick={(e) => {
                    e.preventDefault();
                    dispach(reductionQty(props.product.id));
                    dispach(addToCart((tempretureProduct)));
                    setShow(false);
                    }}>Add to cart <BsCart></BsCart>
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}