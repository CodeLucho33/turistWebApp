import React from "react";
import { Activity } from "./Activity";
import { paises } from "./paises";
export function Main(props) {
    return(
       <>
        <h1 className="title-top-activities">Top three activities to do in <span>{props.name}</span></h1>
        <div className="content-activites">
        <Activity 
        actOne={props.uno}
        imgOne={props.img1}
        whyOne ={props.why1}
        />
        <Activity 
         actTwo={props.dos}
         imgTwo={props.img2}
         whyTwo ={props.why2}
         />
        <Activity 
        actThree={props.tres} 
        imgTh={props.img3}
        whyTh ={props.why3}
        />
        </div>
        
    </> 
    )
    
}