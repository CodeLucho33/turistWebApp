import React from "react";
import { paises } from "./paises";

export function Activity(props) {
    return (
        <>
            <div className="top-activities">
                <div className="activity-one">
                    <h2 className="title-top-activity">{props.actOne}</h2>
                    {props.imgOne? <img  className="img-top-activity"src={`${props.imgOne}`}/>:null}
                    <p>{props.whyOne}</p>
                </div>
                <div className="activity-two">
                    <h2 className="title-top-activity">{props.actTwo}</h2>
                  {props.imgTwo?<img  className="img-top-activity"src={`${props.imgTwo}`}/>:null}  
                    <p>{props.whyTwo}</p>
                </div>
                <div className="activity-three">
                    <h2 className="title-top-activity">{props.actThree}</h2>
                    {props.imgTh?<img  className="img-top-activity"src={`${props.imgTh}`} alt="Imagen "/>:null}
                    <p>{props.whyTh}</p>
                </div>

            </div>

        </>
    )


}