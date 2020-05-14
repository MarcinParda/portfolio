import React from 'react'
import "./../sass/contact.scss";

const Contact = () => {
    return (
        <section className="contact">
            <div className="container">
                <header><p className="p--h1 p--uppercase"><span className="span--green span--h1">K</span>ontakt</p></header>
                <article>
                    <p><span className="span--green">J</span>eśli jesteś zainteresowany nawiązaniem współpracą w postaci pracy lub stażu, zapraszam do kontaktu. Wyślij wiadomość za pomocą formularza lub skorzystaj z poniższych danych kontaktowych.</p>
                    <div className="icons">
                        <div className="icon">
                            <i className="fa fa-phone"></i>
                            <p>576-259-548</p>
                        </div>
                        <div className="icon">
                            <i className="fa fa-envelope"></i>
                            <p>marcin98parda@gmail.com</p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Contact;