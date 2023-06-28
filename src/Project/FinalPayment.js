import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { useAlert } from 'react-alert-with-buttons'


export function FinalPayment() {
    // const alert = useAlert();
    const navigate = useNavigate();
    const productArr = useSelector((state) => state.CartReduser);
    const [show, setShow] = useState(false);
    const handeClose = () => setShow(false);
    const handeShow = () => setShow(true);
    let totalPay = 0;
    // debugger
    // useEffect(()=>{if(show){alert("Are you sure you want to proceed to payment?")}})

    return (
        <>
            {/* <button class="button" onClick={handeShow}>
            Go to payment
                <div class="button__horizontal"></div>
                <div class="button__vertical"></div>
            </button> */}
            <Button variant="light" onClick={handeShow}>Go to payment</Button>
            <Modal id="bill" show={show} onHide={handeClose}>
                <Modal.Header X closeButton >
                    <Modal.Title>bill</Modal.Title>
                </Modal.Header >
                <Modal.Body id="bill" >
                    {productArr.map((item, index) => (
                        <Card style={{ width: '18rem' }} show={show} onHide={handeClose}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    price: {item.price}<br></br>
                                    qty: {item.qty}<br></br>
                                    total: ₪ {item.price * item.qty}<br></br>
                                </Card.Text>
                                <p id="totalPay">totalPay:{totalPay += item.price * item.qty}</p>

                            </Card.Body>
                        </Card>

                    ))}
                </Modal.Body>

                <h4 id="total"> total: ₪ {totalPay}</h4><br></br>
                <Modal.Footer>

                    <Button variant="secondary" onClick={handeClose}>back</Button>
                    <Button variant="light" onClick={handeClose}
                    >Payment by credit </Button>
                </Modal.Footer>
            </Modal>

        </>
    )

}