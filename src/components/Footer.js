import { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <div className="footer">

                <div className="contact">
                    <div className="namecontact">
                        <h2>Contáctanos:</h2>
                    </div>
                    <div className="contactos">

                         <div className="cont"><i className='bx bx-phone'></i> +1 (757) 749-9898</div>
                         <div className="cont m"><i className='bx bx-envelope'></i>usabuilders2020@gmail.com   </div>                     

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

export default Footer;