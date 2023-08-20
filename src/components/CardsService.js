import { Component } from "react";

// imagenes
import techumbre from "../assets/images/techumbre.jpg";
import vallas from "../assets/images/vallas.jpg";

import pintura from "../assets/images/pintura.jpg";
import paneles from "../assets/images/paneles.jpg";
import luz from "../assets/images/luz.jpg";

class CardsService extends Component {

    state = {};

    componentWillMount() {
        this.setState({
            servicios: [
                { title: 'Techumbre', image: techumbre },
                { title: 'Vallas', image: vallas },
                { title: 'Revestimiento', image: luz },
                { title: 'Cubiertas', image: luz },
                { title: 'Pinturas', image: pintura },
                { title: 'Reparacion de Paneles de Yeso', image: paneles },
                { title: 'Cuidado del Césped', image: luz },
                { title: 'Lavadora a Presión', image: luz },
                { title: 'Azulejos y Suelos', image: luz },
                { title: 'Renovación General', image: luz },
                { title: 'Eléctricidad', image: luz },
            ]
        })
    }

    render() {
        return (
      
<div className="servicios">
    
    <h1  className="title-service">Nuestros Servicios</h1>
    <div className="line"></div>
    
           <div class="cards-service">

                {this.state.servicios.map((servicio, i) => {
                    return (
                        <div class="card-service">
                            <div class="image-service">
                                <img src={servicio.image} alt={servicio.title} />
                            </div>
                            <div class="content">
                                <h2>{servicio.title}</h2>
                                <div className="line"></div>
                                <p>Look at this sleepiest pupper!</p>
                            </div>
                        </div>
                    );
                })
                }


            </div>
            </div>
        );
    }
}

export default CardsService;