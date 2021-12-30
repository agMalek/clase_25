import React from 'react'

import './Card.css'

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
          
            <div className="col">
                <div className="miCard">        
                    <img src={this.props.img} alt="" />
                    <h2>{this.props.name}</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, laboriosam labore laboriosam labore. </p>
                    <button className="btn btn-danger">Leer mas...</button>
                </div>
            </div>
            
        );
    }
}
 
export default Card;
