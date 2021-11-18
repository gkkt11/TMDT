import React from 'react';

import './header.css'
import Button from 'react-bootstrap/Button'

const Header =() =>(
    <div className="header">
        <Button className="btn">Store</Button>
        <Button className="btn">Women</Button>
        <Button className="btn">Men</Button>
        <Button className="btn">Kids</Button>
        <Button className="btn2">ERROR</Button>    
        <Button className="btn">Limited</Button>
        <Button className="btn">Login</Button>
        <Button className="btn">Cart</Button>
        <Button className="btn">Language</Button>
    </div>
)
export default Header;