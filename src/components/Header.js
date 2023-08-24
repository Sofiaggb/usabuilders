import { Component } from "react";
import logo from '../assets/images/logo.jpg';
import { NavLink } from "react-router-dom";

class Header extends Component {

    // constructor(props) {
    //     super(props);
        // this.state = {
        //   clase: "menu-ul"
        // };
    //   }

    state = {
        clase: "menu-ul"
      };

    show = () =>{
        this.setState(prevState => ({
            clase: prevState.clase === "menu-ul" ? "menu-ul turn-on-menu" : "menu-ul"
          }));
    }

    render(){
        return(
            <header id="header">
            <div className="center">
                 {/* logo  */}
                 <NavLink to="/home">
                <div id="logo" >
                    <img src={logo} className="app-logo" alt="logotipo" />
                </div>
                </NavLink>
    
                {/* menu  */}
                <nav id="menu">
                    
                    <div className="hamburger" onClick={this.show}>
                        <i class='bx bx-menu'></i>
                    </div>
                    
                    <ul className={this.state.clase}>
                        <li><NavLink activeClassName="active" to="/about">Nosotros</NavLink></li>
                        <li><NavLink activeClassName="active"  to="/contact" >Contáctanos</NavLink></li>
                        <li><NavLink activeClassName="active" to="/language">Idioma</NavLink></li>
    
                    </ul>
                </nav>
    
                {/* limpiar flotados */}
                <div className="clearfix"></div>
    
            </div>
        </header>
        );
    }
}

export default Header;