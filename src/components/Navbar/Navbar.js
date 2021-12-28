import React from "react";
import Logo from "../../img/header-simpsons.gif"
import './style.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <header>
                <nav className="d-flex">
                    <img src={Logo} alt="Logo" className="imgLogo" />
                    <ul className="d-flex ">
                        <li className="px-2"><a className="menuItem" href="#">Inicio</a></li>
                        <li className="px-2"><a className="menuItem" href="#">Blog</a></li>
                        <li className="px-2"><a className="menuItem" href="#">Contacto</a></li>
                    </ul>
                    {/* <form>
                        <input type="text" placeholder="Search" />
                        <button className="btn btn-outline-danger">Busqueda</button>
                    </form> */}
                    <form className="d-flex buscador">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-danger" type="onclick">Busqueda</button>
                    </form>
                </nav>
            </header>
         );
    }
}
 
export default Navbar;