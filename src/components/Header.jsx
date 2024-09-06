import React from "react";
import { paises } from "./paises";
import { useState } from "react";
export function Header(props) {
   

    
    return (
        <>
        <div className="header">
            <h1 >{props.name}</h1>
            <p>{props.descripcion}</p>

        </div>
            
        </>
    )

}