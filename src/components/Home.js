import { Component } from "react";
import paisaje from '../assets/images/paisaje.jpeg';

import CardsService from "./CardsService";

class Home extends Component {

    render() {
        return (
            <div className="home">
                <section className="section-1">
                    <img className="lazyloaded" src={paisaje} alt="portada" />
                    <div className="loaded-phrase">
                        <h1 className="title">Tenemos lo que necesitas</h1>
                    </div>
                </section>

                <CardsService />
            </div>

        );
    }
}

export default Home;