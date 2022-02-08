import React from "react";
import {Link} from "react-router-dom";

export default function Menu () {
    return (
        <nav class="topo">
            <Link to= "/"><img width="200px" src="./img/dallas.png" alt="DallasTrip"/
            ></Link><br/><h4><p> Viaje conosco!</p></h4>
            <Link to= "/Destinos">Destinos</Link><br/>
            <Link to= "/Promocoes">Promoções</Link><br/>
            <Link to= "/Contato">Contato</Link>
        </nav>
    );

}