import React from "react";
import myPhoto from '/myPhoto.jpg';
import { Contact } from "./Contact";
import { useState } from "react";
export function Card() {
    const [contact, setContact] = useState()
    function handleContact() {
        setContact(<Contact />)
    }
    return (
        <>
        <div className="card-plus-contact">

            <div className="presentation-card">

                <img className="my-photo" src={myPhoto} alt="" />
                <div><h1>Luis Restrepo</h1>
                    <p>Soy desarrollador frontend especialista en React</p></div>
                <button onClick={handleContact} className="btn-contact">Contact me!</button>

            </div>
            <div>
                {contact}
            </div>


        </div>

        </>

    )

}

