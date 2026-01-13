import React from 'react'
import phone from '../../assets/phone.png'
import email from '../../assets/email.png'
import whatsapp from '../../assets/whatsapp.png'

function Contacthero() {
    const contactInfo = [
        {
            icon: phone,
            title: "Phone",
            details: [
                "+91 94430 94377",
                "+91 73970 44377"
            ],
            color: "#f59e0b"
        },
        {
            icon: email,
            title: "Email",
            details: [
                "rpalani71@gmail.com"
            ],
            color: "#3b82f6"
        },
        {
            icon: whatsapp,
            title: "WhatsApp",
            details: [
                "+91 94430 94377",
                "Available 24x7"
            ],
            color: "#10b981"
        }
    ];
    return (
        <div className="contact-details-card">
            <h2 className="contact-details-title">Contact Details</h2>
            <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                    <div className="contact-info-item" key={index}>
                        <div className="contact-info-icon" style={{ color: info.color }}>
                            <img src={info.icon} alt={info.title} />
                        </div>
                        <div className="contact-info-content">
                            <h3>{info.title}</h3>
                            {info.details.map((detail, idx) => (
                                <p key={idx}>{detail}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Contacthero
