import React, { Component } from "react";
import {Button} from '@geist-ui/react';
import { Link } from "react-router-dom";

const SplashPage = () => {
  return (
      <div style={{ height: "100%",
          width: "100%",
          display: "flex",
          position: "fixed",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          backgroundImage: `url("https://github.com/ismatullaevash/sign-language-app/blob/main/static/mesh-gradient.png?raw=true")`}}>
      <h1><center>Signnum</center>
      <br></br> 
      <span>ASL made personal and easy using AI!</span>  
      <br></br><br></br>
      <center> <Link to="/basic"><Button style={{ height: "100%",
            backgroundColor: "#B2D0DF",
            color: "white"
            }}>Let's Learn!</Button></Link></center>
      </h1> 
      </div>
  );
}

export default SplashPage;
