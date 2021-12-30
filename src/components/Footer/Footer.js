import React from "react";
import './Footer.css'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div >
                <p className="text-center py-3">Hecho por programa desde tu casa</p>
            </div>
         );
    }
}
 
export default Footer;