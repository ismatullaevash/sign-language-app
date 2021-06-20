import React, { Component } from 'react';
import { Button } from '@geist-ui/react';
import image from './aslSigns.jpg'
import { Link } from "react-router-dom";

const ShowImage = () => {
    return (
        <div style={{ height: "100%",
            width: "100%",
            display: "flex",
            position: "fixed",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            backgroundImage: `url("https://github.com/ismatullaevash/sign-language-app/blob/main/static/mesh-gradient.png?raw=true")`}}>
        
            <center><img src={image} alt="ASL Signs" style={{
                height: 210,
                width: 300,
            }} /></center>



            <br></br> <br></br>
            <center><Link to="quiz"><Button style={{ height: "100%",
            backgroundColor: "#B2D0DF",
            color: "white"
            }}>Continue</Button></Link></center>
        </div>
    );
}

export default ShowImage;