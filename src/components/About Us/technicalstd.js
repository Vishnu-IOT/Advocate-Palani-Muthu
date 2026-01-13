import React from 'react'
import mobile from '../../assets/mobile.png'
import fast from '../../assets/fast.png'
import ssl from '../../assets/ssl.png'

function Technicalstd() {
    const standards = [
        { icon: mobile, title: "Mobile Friendly Design", color: "#8b5cf6" },
        { icon: fast, title: "Fast Loading Speed", color: "#f59e0b" },
        { icon: ssl, title: "SSL Secured (HTTPS)", color: "#10b981" },
        { icon: fast, title: "Premium Hosting", color: "#ef4444" }
    ];
    return (
        <section className="tech-standards-section">
            <div className="about-container">
                <h2 className="tech-section-title">Website Technical Standards</h2>
                <div className="tech-grid">
                    {standards.map((standard, index) => (
                        <div className="tech-item" key={index}>
                            <span className="tech-icon" style={{ color: standard.color }}>
                                <img src={standard.icon} alt={standard.title} />
                            </span>
                            <span className="tech-title">{standard.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Technicalstd
