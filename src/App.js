import React from 'react'
import './App.css';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from './Project/Shop';
import Home from './Project/Home';
import { Cart } from './Project/Cart';
import { Navbar1 } from './Project/Navbar1'
import { useState } from 'react';

function App() {
  const [width, setWindowWidth] = useState(0);
  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }

  return (
    <>
      <header className='mainNavigation'>
      <h1>Hi</h1>
      <h1>Welcome</h1>
      </header>
      <Provider store={Store}>
        <BrowserRouter>
            <Navbar1></Navbar1>
            <Routes>
              <Route exact path="/" element={<Home />}>  </Route>
              <Route exact path="/Shop" element={<Shop />}>  </Route>
              <Route exact path="/Cart" element={<Cart />}>  </Route>
              <Route exact path="/cerditCard" element={<cerditCard />}>  </Route>
            </Routes>
          </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
