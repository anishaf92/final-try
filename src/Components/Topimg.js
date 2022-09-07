import React from "react";
import Images from "./assets/toppic.png";
import "./style.css";
export default function Topimg(){
    return(
    <div className="imgcont">
        <img src={Images}></img>
        <div className="Head">Online Experiences</div>
        <div className="text">join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</div>
    </div>
    );
}
