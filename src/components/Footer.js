import { Component } from "react";

// importar traducciones
import { withTranslation } from "react-i18next";

class Footer extends Component {
    render() {
        
    const { t} = this.props;

        return (
            <div className="footer">

                <div className="contact">
                    <div className="namecontact">
                        <h2>{t("header.contact")}</h2>
                    </div>
                    <div className="contactos">

                         <div className="cont"><i className='bx bx-phone'></i> +1 (111) 111-1111</div>
                         <div className="cont m"><i className='bx bx-envelope'></i>email@gmail.com   </div>                     

                    </div>

                </div>

                <div className="copyright">
                    <p>
                        &copy; 2023 USABUILDERS
                    </p>
                </div>
            </div>
        );
    }
}

export default withTranslation('global') (Footer);