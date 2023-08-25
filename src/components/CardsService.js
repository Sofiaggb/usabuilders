import { Component } from "react";

// imagenes
import techumbre from "../assets/images/techumbre.jpg";
import vallas from "../assets/images/vallas.jpg";
import revestimiento from "../assets/images/revestimiento.jpg";
import cubiertas from "../assets/images/techo.jpg";
import pintura from "../assets/images/pintura.jpg";
import paneles from "../assets/images/paneles.jpg";
import cesped from "../assets/images/cesped.jpg";
import hidroyet from "../assets/images/lavadora.jpg";
import suelo from "../assets/images/suelo.jpg";
import renovacion from "../assets/images/renovacion.jpg";
import luz from "../assets/images/luz.jpg";

class CardsService extends Component {

    state = {};

    componentWillMount() {
        this.setState({
            servicios: [
                { title: 'Eléctricidad', image: luz, content:'Ofrecemos servicios de todos los aspectos de  instalaciones eléctricas.' },
                { title: 'Techumbre', image: techumbre, content:'Nuestro equipo  identificarán el problema y efectuarán una reparación de inmediato para salvaguardar su propiedad' },
                { title: 'Vallas', image: vallas, content:'ofrecemos los servicios de instalación y mantenimiento' },
                { title: 'Revestimiento', image: revestimiento, content:'soluciones  de belleza libre de mantenimiento y la durabilidad probada.'},
                { title: 'Cubiertas', image: cubiertas, content:' Mejora el aislamiento de vivienda' },
                { title: 'Pinturas', image: pintura, content:'Nos especializamos en pintar condominios y apartamentos y mantenimiento de pintura de rutina' },
                { title: 'Reparacion de Paneles de Yeso', image: paneles, content:'Ofrecemos servicios de expertos en la  reparación de paneles de yeso' },
                { title: 'Cuidado del Césped', image: cesped, content:'Proporcionamos servicios de cuidado del césped que incluyen cortar, recortar, fertilizar, controlar malezas, recortar arbustos.' },
                { title: 'Lavadora a Presión', image: hidroyet, content:'Servicios  con el objetivo de conseguir resultados de limpieza perfectos en el hogar.' },
                { title: 'Azulejos y Suelos', image: suelo, content:'Experiencia en instalacion de azulejos y pisos' },
                { title: 'Renovación General', image: renovacion, content:'Realizamos tu proyecto  de cambiar lo que deseas en tu hogar' }
            ]
        })
    }

    render() {
        return (
      
<div className="servicios">
    
    <h1  className="title-service">Nuestros Servicios</h1>
    <div className="line"></div>
    
           <div className="cards-service">

                {this.state.servicios.map((servicio, i) => {
                    return (
                        <div className="card-service">
                            <div className="image-service">
                                <img src={servicio.image} alt={servicio.title} />
                            </div>
                            <div class="content">
                                <h2>{servicio.title}</h2>
                                <div className="line"></div>
                                <p>{servicio.content}</p>
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