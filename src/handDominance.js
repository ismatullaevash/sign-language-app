import React, { Component } from 'react';
import {Button} from '@geist-ui/react';
import { Link } from "react-router-dom";

const ChooseDomHand = () => {
    return (
        <div style={{ height: "100%",
            width: "100%",
            display: "flex",
            position: "fixed",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            backgroundImage: `url("https://github.com/ismatullaevash/sign-language-app/blob/main/static/mesh-gradient.png?raw=true")`}}>
        <h1><center>First, choose your dominant hand</center>
        <br></br><br></br>
        <Link to="quiz">
       <Button style={{ height: "100%",
              backgroundColor: "#B2D0DF",
              color: "white",
              alighnItems: "left"
              }}>Left!</Button></Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="guide"><Button style={{ height: "100%",
              backgroundColor: "#B2D0DF",
              color: "white",
              alighnItems: "right"
              }}>Right!</Button></Link>
        </h1> 
        </div>
    );
}

export default ChooseDomHand;