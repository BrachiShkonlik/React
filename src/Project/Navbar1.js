import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { BsCart3 } from "react-icons/bs";
import { BsShopWindow } from "react-icons/bs";
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsChatRightText } from "react-icons/bs";
import logo from "../Redux/Pictures/logo.jpg"
import forAbout from '../Redux/Pictures/forAbout.jpg';


export function Navbar1() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Nav className='mainNavigation sticky-nav' id="navbar">
        <>
          <span class="tab1"></span>
          <img src={logo} width={"150px"} height={"120px"}></img>
          <span class="tab"></span>
        </>
        <>
          <Nav.Item>
            <Nav.Link onClick={() => { navigate("/Shop") }}><h5><BsShopWindow className='bcCart3'></BsShopWindow></h5></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => { navigate("/Cart") }}><BsCart3 className='bcCart3'></BsCart3></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <BsChatRightText className='bcCart3' onClick={handleShow}></BsChatRightText>
            </Nav.Link>
          </Nav.Item>
        </>
      </Nav>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h1 className= "about">About us...</h1></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <>
          <div id="aboutText">
            {/* <h6> */}
              It all started in 1998,<br></br>
              when Ruth and Barchi went to hang out together<br></br>
              their stomachs demanded it, food, but good food.<br></br>
              they were looking for a place to eat<br></br>
              but their disappointment was great-<br></br>
              the pizza they bought was dry, the ice was tasteless and the salad was curvaceously cut<br></br>
              then they decided - no more!<br></br>
              they open a food store that will respect itself and make everyone happy and satisfied<br></br>
              And since then until today
              we bake, prepare and cook everything for you with great love.<br></br>
              <br></br><br></br>
              <h4>
                We are waiting for you to enjoy a culinary experience,<br></br>
                At our address - 1 Yafo Street, Jerusalem.<br></br></h4>
              <br></br><br></br>
            {/* </h6> */}
            </div>
            <img src={forAbout} id="forAbout" style={{height: "300px"}}></img>
          </>
        </Offcanvas.Body>


      </Offcanvas>
    </>
  );
}