import React from "react";

import Maggie from "../../../img/maggie.jpg"
import Homero from "../../../img/homer.jpg"
import Bart from "../../../img/bart.jpg"
import './Cards.css'
import Card from "./Card/Card";



class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="containerCards">
                <div className="row">
                   <Card name="Maggie" img={Maggie}/>
                   <Card name="Homero" img={Homero}/>
                   <Card name="Bart" img={Bart}/>
                </div>
            </div>
         );
    }
}
 
export default Cards;