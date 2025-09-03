import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsList from "./ProductsList";
import Product from "./Product";
import Cart from "./Cart";

function App() {
    const [cart, setCart] = useState([]);

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<ProductsList />} />
                    <Route 
                        path="/product/:id" 
                        element={<Product cart={cart} setCart={setCart} />} 
                    />
                    <Route 
                        path="/cart" 
                        element={<Cart cart={cart} />} 
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;