import React from "react";
import './style.css'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <p className="text-center py-4">Hecho por programa desde tu casa</p>
            </div>
         );
    }
}
 
export default Footer;