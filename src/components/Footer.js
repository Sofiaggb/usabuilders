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

                         <div className="cont"><i class='bx bx-phone'></i> (757) 249-9898</div>
                         <div className="cont m"><i class='bx bx-envelope'></i>usabuilders2020@gmail.com   </div>                     

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