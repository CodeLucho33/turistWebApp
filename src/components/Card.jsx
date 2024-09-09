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
                <div><h1 className="my-name-card"><em><i>Luis Restrepo.</i></em></h1>
                    <p>Soy entusiasta del desarrollo web. Disfruto crear proyectos que resuelvan problemas</p></div>
                <button onClick={handleContact} className="btn-contact">Contact me!</button>

            </div>
            <div>
                {contact}
            </div>


        </div>

        </>

    )

}

