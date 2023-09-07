import { Component } from "react";
import paisaje from '../assets/images/paisaje.jpeg';

// componentes
import CardsService from "./CardsService";

// traducciones
import { withTranslation } from "react-i18next";

class Home extends Component {

    render() {

        const {t} = this.props;
        return (
            <div className="home">
                <section className="section-1">
                    <img className="lazyloaded" src={paisaje} alt="portada" />
                    <div className="loaded-phrase">
                        <h1 className="title">{t("home.title")}</h1>
                    </div>
                </section>

                <CardsService />
            </div>

        );
    }
}

export default withTranslation('global') (Home);