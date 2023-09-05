import { Component } from "react";
import logo from '../assets/images/logo.jpg';
import { NavLink } from "react-router-dom";
// importar traducciones
import { withTranslation } from "react-i18next";

class Header extends Component {

    state = {
        clase: "menu-ul",
        hamburgerShow: "hamburger",
        closeHamburger: "close-hamburger"
    };

    show = () => {
        this.setState(prevState => ({
            clase: prevState.clase === "menu-ul" ? "menu-ul turn-on-menu" : "menu-ul",
            hamburgerShow: prevState.hamburgerShow === "hamburger" ? "hamburger hamburger-hidden" : "hamburger",
            closeHamburger: prevState.closeHamburger === "close-hamburger" ? "close-hamburger close-hamburger-show" : "close-hamburger"
        }));
    }

    close = () => {
        this.setState(prevState => ({
            clase: prevState.clase === "menu-ul turn-on-menu" ? "menu-ul" : "menu-ul turn-on-menu",
            hamburgerShow: prevState.hamburgerShow === "hamburger hamburger-hidden" ? "hamburger" : "hamburger hamburger-hidden",
            closeHamburger: prevState.closeHamburger === "close-hamburger close-hamburger-show" ? "close-hamburger" : "close-hamburger close-hamburger-show"
        }))
    }

    render() {

        const { t, i18n } = this.props;

        return (
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

                        <div className={this.state.hamburgerShow} onClick={this.show}>
                            <i className='bx bx-menu'></i>

                        </div>
                        <div className={this.state.closeHamburger} onClick={this.close}>
                            <i class='bx bx-x'></i>
                        </div>


                        <ul className={this.state.clase}>
                            <li><NavLink activeClassName="active" to="/about">{t('header.about')}</NavLink></li>
                            <li><NavLink activeClassName="active" to="/contact" >{t('header.contact')}</NavLink></li>
                            <li>
                                <select name="idioma" className="idioma">
                                    <option value="en" onClick={() => i18n.changeLanguage("en")}>{t('header.en')}</option>
                                    <option value="es" onClick={() => i18n.changeLanguage("es")} >{t('header.es')}</option>
                                </select>
                            </li>
                        </ul>
                    </nav>

                    {/* limpiar flotados */}
                    <div className="clearfix"></div>

                </div>
            </header>
        );
    }
}

export default withTranslation('global')(Header);