import React from 'react'
import './body.css'
import Button from 'react-bootstrap/Button'
import bg from './bg.jpg'

const Body =() =>(
    <div className="body">
        <img className="img" src={bg} alt="bg"></img>
        <div className="Text1">LIMITED EDITION</div>
        <div className="Text2">'NEW ARRIVAL'</div>
        <Button className="btn3">View More</Button>
    </div>
)

export default Body;