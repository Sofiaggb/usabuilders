import { Component } from "react";
import about from "../assets/images/about.jpg"

class About extends Component {

    render() {
        return (
            <div className="about">
                <div className="mision">
                    <div className="mision-center">
                        <div className="con">
                            <div className="t-m">
                            <p >sobre nosotros</p>
                            </div>
                        
                         <div className="line-about"></div>
                         </div>
                        <h2 className="title-mision">NUESTRA MISIÓN</h2>
                        <div className="tex-mision">
                            <p>Nuestra empresa proporciona servicios de alta calidad para construir, renovar o mejorar
                                estructuras y espacios, esto incluiye remodelación de viviendas, proyectos
                                comerciales, mantenimiento de propiedades y más.
                                Satisfaciendo las necesidades de los clientes, cumpliendo con los estándares de calidad y
                                seguridad, entregando los proyectos en el tiempo y presupuesto establecidos.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="image-mision">
                    <img src={about} alt="about us" />
                </div>
            </div>
        );
    }
}

export default About;