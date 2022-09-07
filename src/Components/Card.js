import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import Katie from "./assets/katie.png";
import star from "./assets/star.png"
import data from "./data"
export default function Card(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            
        {badgeText && <div className="cbadge">{badgeText}</div>}
        <img src={require(`./assets/${props.img}`)} className="card--image" />
        <div className="card--stats">
            <img src={require(`./assets/star.png`)} className="card--star" />
            <span>{props.rating}</span>
            <span className="gray">({props.reviewCount}) • </span>
            <span className="gray">{props.location}</span>
        </div>
        <p>{props.title}</p>
        <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
    );
}