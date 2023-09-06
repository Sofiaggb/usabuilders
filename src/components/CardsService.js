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

// traduccion
import { withTranslation } from "react-i18next";

class CardsService extends Component {

    state = {};

    constructor(props) {
        super(props);

        // componentWillMount() {
        this.state = {
            servicios: [
                { title: this.props.t("CardsService.electrician"), image: luz, content: this.props.t("CardsService.electricianContent") },
                { title: this.props.t("CardsService.roofing"), image: techumbre, content: this.props.t("CardsService.roofingContent") },
                { title: this.props.t("CardsService.fences"), image: vallas, content: this.props.t("CardsService.fencesContent") },
                { title: this.props.t("CardsService.Siding"), image: revestimiento, content: this.props.t("CardsService.SidingContent") },
                { title: this.props.t("CardsService.decks"), image: cubiertas, content: this.props.t("CardsService.decksContent") },
                { title: this.props.t("CardsService.paint"), image: pintura, content: this.props.t("CardsService.paintContent") },
                { title: this.props.t("CardsService.drywall"), image: paneles, content: this.props.t("CardsService.drywallContent") },
                { title: this.props.t("CardsService.lawn"), image: cesped, content: this.props.t("CardsService.lawnContent") },
                { title: this.props.t("CardsService.pressure"), image: hidroyet, content: this.props.t("CardsService.pressureContent") },
                { title: this.props.t("CardsService.tiles"), image: suelo, content: this.props.t("CardsService.tilesContent") },
                { title: this.props.t("CardsService.general"), image: renovacion, content: this.props.t("CardsService.generalContent") }
            ]
        }
    }

    // usamos este método para obtener un nuevo estado a partir de las props
    static getDerivedStateFromProps(nextProps, prevState) {
        // Comparamos el idioma actual con el anterior
        if (nextProps.i18n.language !== prevState.language) {
            // Devolvemos un nuevo estado con los textos traducidos
            return {
                language: nextProps.i18n.language,
                servicios: [
                    { title: nextProps.t("CardsService.electrician"), image: luz, content: nextProps.t("CardsService.electricianContent") },
                    { title: nextProps.t("CardsService.roofing"), image: techumbre, content: nextProps.t("CardsService.roofingContent") },
                    { title: nextProps.t("CardsService.fences"), image: vallas, content: nextProps.t("CardsService.fencesContent") },
                    { title: nextProps.t("CardsService.Siding"), image: revestimiento, content: nextProps.t("CardsService.SidingContent") },
                    { title: nextProps.t("CardsService.decks"), image: cubiertas, content: nextProps.t("CardsService.decksContent") },
                    { title: nextProps.t("CardsService.paint"), image: pintura, content: nextProps.t("CardsService.paintContent") },
                    { title: nextProps.t("CardsService.drywall"), image: paneles, content: nextProps.t("CardsService.drywallContent") },
                    { title: nextProps.t("CardsService.lawn"), image: cesped, content: nextProps.t("CardsService.lawnContent") },
                    { title: nextProps.t("CardsService.pressure"), image: hidroyet, content: nextProps.t("CardsService.pressureContent") },
                    { title: nextProps.t("CardsService.tiles"), image: suelo, content: nextProps.t("CardsService.tilesContent") },
                    { title: nextProps.t("CardsService.general"), image: renovacion, content: nextProps.t("CardsService.generalContent") }
                ]
            }
        }
        return null;
    }

    render() {

        const { t } = this.props;

        return (

            <div className="servicios">

                <h1 className="title-service">{t("CardsService.title")}</h1>
                <div className="line"></div>

                <div className="cards-service">

                    {this.state.servicios.map((servicio, i) => {
                        return (
                            <div key={i} className="card-service">
                                <div className="image-service">
                                    <img src={servicio.image} alt={servicio.title} />
                                </div>
                                <div className="content">
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

export default withTranslation('global')(CardsService);