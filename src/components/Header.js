import { Component } from "react";
import logo from '../assets/images/logo.jpg';
import { NavLink } from "react-router-dom";
// importar traducciones
import { withTranslation } from "react-i18next";

class Header extends Component {

    state = {
        clase: "menu-ul",
        hamburgerShow: "hamburger",
        closeHamburger: "close-hamburger",
        buttonsIdioma: "content-buttons-idioma",
        flechaIdiomas: "bx bx-chevron-down"
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
            closeHamburger: prevState.closeHamburger === "close-hamburger close-hamburger-show" ? "close-hamburger" : "close-hamburger close-hamburger-show",
            buttonsIdioma: prevState.buttonsIdioma === "content-buttons-idioma show-idiomas" ? "content-buttons-idioma" : "content-buttons-idioma show-idiomas",
            flechaIdiomas: prevState.flechaIdiomas === "bx bx-chevron-down bx-rotate-180" ? "bx bx-chevron-down" : "bx bx-chevron-down bx-rotate-180"
        }));
    }

    idioma = () => {
        this.setState(prevState => ({
            buttonsIdioma: prevState.buttonsIdioma === "content-buttons-idioma" ? "content-buttons-idioma show-idiomas" : "content-buttons-idioma",
            flechaIdiomas: prevState.flechaIdiomas === "bx bx-chevron-down" ? "bx bx-chevron-down bx-rotate-180" : "bx bx-chevron-down"
         }));
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
                            <i className='bx bx-x'></i>
                        </div>


                        <ul className={this.state.clase}>
                            <li><NavLink activeClassName="active" to="/about">{t('header.about')}</NavLink></li>
                            <li><NavLink activeClassName="active" to="/contact" >{t('header.contact')}</NavLink></li>
                            <li>
                                <div className="idioma" onClick={this.idioma}>{t('header.language')} <i className={this.state.flechaIdiomas}></i></div>
                                
                                    <div className={this.state.buttonsIdioma}>
                                    <button className="button-idioma" onClick={() => i18n.changeLanguage("es")}>{t('header.es')}</button>
                                    <button className="button-idioma" onClick={() => i18n.changeLanguage("en")}>{t('header.en')}</button>
                                </div>
                               
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