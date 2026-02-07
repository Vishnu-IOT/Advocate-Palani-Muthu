import React from 'react'
import './styles/servicestyles.css'
import ServicesHerosection from './components/Court-Services/servicesHerosection'
import ServiceList from './components/Court-Services/serviceslist'

function Services() {
    return (
        <div className="services-app">
            <ServicesHerosection />

            <section className="services-main-section">
                <div className="services-container">
                    <ServiceList />
                </div>
            </section>

        </div>
    )
}

export default Services
