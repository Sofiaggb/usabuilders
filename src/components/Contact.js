import React, { Component} from "react";

import emailjs from "@emailjs/browser";

class Contact extends Component {

    formRef = React.createRef();

      SendEmail = (event) =>{
        event.preventDefault();
        const serviceId = process.env.REACT_APP_SEVICE_ID;
        const templateId = process.env.REACT_APP_TEMPLATE_ID;
        const apikey = process.env.REACT_APP_API_KEY;

        emailjs.sendForm(serviceId, templateId, this.formRef.current, apikey)
        .then(response => console.log(response))
        .catch(error => console.log(error));

        event.target.reset();
     }

    render() {
        return (
            <div className="content-contact">
                <div className="container-contact">
                    <div className="row header">
                        <h1 className="contact-title">CONTÁCTANOS</h1>
                        <h3 className="contact-subtitle">Tenemos lo que necesitas y ¡más!</h3>
                    </div>
                    <div className="row body">
                        <form  className="form-contact" ref={this.formRef} onSubmit={this.SendEmail}>
                            <ul>

                                <li>
                                    <div className="left">
                                        <label htmlFor="name">Nombre</label>
                                        <input type="text" className="data-contact" name="name" placeholder="John" required/>
                                    </div>
                                </li>

                                <li>
                                    <div>
                                        <label htmlFor="email">Email <span className="req">*</span></label>
                                        <input type="email" className="data-contact" name="email" placeholder="john@gmail.com" required/>
                                    </div>
                                </li>
                                <li><div className="divider"></div></li>
                                <li>
                                    <label htmlFor="message">Mensaje</label>
                                    <textarea cols="46" rows="3" name="message" required></textarea>
                                </li>

                                <li>
                                    <input className="btn btn-submit" type="submit" value="Enviar" />
                                </li>

                            </ul>
                        </form>
                    </div>
                </div>

                <div className="direct-contact-container">

                    <ul className="contact-list">
                        <li className="list-item">
                            {/* <div className="city"> */}
                            <i className='bx bx-location-plus' ></i>
                            {/* <div className="place space"> */}
                            <span className="contact-text space">Hampton Rd, Virginia</span>
                            {/* </div> */}
                            {/* </div> */}
                        </li>

                        <li className="list-item">
                        <i className='bx bx-phone'></i>
                                <span className="contact-text space">
                                    +1 (757) 749-9898
                                </span>
                        </li>

                        <li className="list-item">
                            <i className='bx bx-envelope'></i>
                                <span className="contact-text space">
                                    usabuilders2020@gmail.com
                                </span>
                        </li>

                    </ul>
                </div>
            </div>
        );
    }
}

export default Contact;