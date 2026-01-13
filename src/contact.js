import React from 'react'
import Contacthero from './components/Contact/contacthero'
import Consultationinfo from './components/Contact/consultationinfo'
import Mapsection from './components/Contact/mapsection'
import Bookappoinment from './components/Contact/bookappoinment'
import ContactHerosection from './components/Contact/contactHerosection'
import './styles/contactstyles.css'

function Contact() {
    return (
        <div className="contact-app">
            <ContactHerosection />

            <section className="contact-main-section">
                <div className="contact-container">
                    <div className="contact-grid">
                        <div className="contact-left">
                            <Contacthero />
                            <Consultationinfo />
                        </div>
                        <div className="contact-right">
                            <Bookappoinment />
                        </div>
                    </div>
                </div>
            </section>

            <Mapsection />
        </div>
    )
}

export default Contact
