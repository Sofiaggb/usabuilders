import React, { Component} from "react";

import emailjs from "@emailjs/browser";

// traduccion
import { withTranslation } from "react-i18next";
// alertas lindas
import Swal from "sweetalert2";

class Contact extends Component {

    formRef = React.createRef();
    nameRef = React.createRef();
    emailRef = React.createRef();
    messageRef = React.createRef();

    validateForm = () => {
        let send = true;
        const isValidName  = this.nameRef && !this.nameRef.current?.value;
        const isValidEmail  = this.emailRef && !this.emailRef.current?.value;
        const isValidMessage  = this.messageRef && !this.messageRef.current?.value;
        if (isValidName) {
            Swal.fire({
                icon: 'error',
                text: 'the name is required, please fill in the field '
              });
            return send = false ;
        }if (isValidEmail) {
            Swal.fire({
                icon: 'error',
                text: 'the email is required, please fill in the field '
              });
            return send = false ;
        }if (isValidMessage) {
            Swal.fire({
                icon: 'error',
                text: 'the message is required, please fill in the field '
              });
            return send = false ;
        }

        return send;
        
    }

   
      

      SendEmail = (event) =>{
        event.preventDefault();

        if(this.validateForm()){
        const serviceId = process.env.REACT_APP_SEVICE_ID;
        const templateId = process.env.REACT_APP_TEMPLATE_ID;
        const apikey = process.env.REACT_APP_API_KEY;

        emailjs.sendForm(serviceId, templateId, this.formRef.current, apikey)
        .then(response => console.log(response))
        .catch(error => console.log(error));

        // limpiar formulario
        event.target.reset();
        Swal.fire({
            icon: 'success',
            text: 'your email has been successfully sent',
            showConfirmButton: false,
            timer: 1500
          })
     }
    }

    render() {

        const {t}= this.props;

        return (
            <div className="content-contact">
                <div className="container-contact">
                    <div className="row header">
                        <h1 className="contact-title">{t("header.contact")}</h1>
                        <h3 className="contact-subtitle">{t("contact.subtitle")}</h3>
                    </div>
                    <div className="row body">
                        <form  className="form-contact" ref={this.formRef} onSubmit={this.SendEmail}>
                            <ul>

                                <li>
                                    <div className="left">
                                        <label htmlFor="name">{t("contact.name")}</label>
                                        <input type="text" className="data-contact" name="name" placeholder="John" 
                                         ref={this.nameRef} required pattern="[A-Za-záéíóúüñ' ]+"/>
                                    </div>
                                </li>

                                <li>
                                    <div>
                                        <label htmlFor="email">Email <span className="req">*</span></label>
                                        <input type="email" className="data-contact" name="email" placeholder="john@gmail.com"
                                          ref={this.emailRef} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"/>
                                    </div>
                                </li>
                                <li><div className="divider"></div></li>
                                <li>
                                    <label htmlFor="message">{t("contact.message")}</label>
                                    <textarea cols="46" rows="3" name="message" ref={this.messageRef}  required></textarea>
                                </li>

                                <li>
                                    <input className="btn btn-submit" type="submit" value={t("contact.submit")} />
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

export default withTranslation('global') (Contact);