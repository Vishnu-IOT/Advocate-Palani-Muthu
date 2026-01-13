import React from 'react'
import appointment from '../../assets/appointment.png'
import consultation from '../../assets/consultation.png'

function Consultationinfo() {
    return (
        <div className="consultation-info-card">
            <h2 className="consultation-info-title">Consultation Info</h2>
            <div className="consultation-items">
                <div className="consultation-item">
                    <div className="consultation-icon"><img src={appointment} alt="appointment" /></div>
                    <div className="consultation-content">
                        <h3>Appointment Required: Yes</h3>
                    </div>
                </div>
                <div className="consultation-item">
                    <div className="consultation-icon"><img src={consultation} alt="consultation" /></div>
                    <div className="consultation-content">
                        <h3>Consultation Fee: ₹1,000</h3>
                    </div>
                </div>
            </div>
            <p className="consultation-note">
                * Fees adjustable against case filing charges if engaged.
            </p>
        </div>
    )
}

export default Consultationinfo
