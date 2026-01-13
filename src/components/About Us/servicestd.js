import React from 'react'
import language from '../../assets/translate.png'
import professional from '../../assets/professional-trust.png'

function Servicestd() {
    const standards = [
        {
            icon: language,
            title: "Language Support",
            description: "We provide legal consultation and documentation services in both English and Tamil to ensure clear communication with all clients.",
            color: "#3b82f6"
        },
        {
            icon: professional,
            title: "Professional Trust",
            description: "Our practice is built on the pillars of integrity, transparency, and unwavering dedication to our client's best interests.",
            color: "#f59e0b"
        }
    ];
    return (
        <section className="service-standards-section">
            <div className="about-container">
                <h2 className="about-section-title">Service Standards</h2>
                <div className="standards-grid">
                    {standards.map((standard, index) => (
                        <div className="standard-card" key={index}>
                            <div className="standard-icon" style={{ color: standard.color }}>
                                <img src={standard.icon} alt={standard.title} />
                            </div>
                            <div className="standard-content">
                                <h3>{standard.title}</h3>
                                <p>{standard.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Servicestd
