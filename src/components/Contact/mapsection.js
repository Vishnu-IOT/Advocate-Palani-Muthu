import React from 'react'
import address from '../../assets/address.png'

function Mapsection() {
    return (
        <section className="map-section">
            <div className="map-container">
                <div className="map-placeholder">
                    <div className="map-overlay">
                        <div className="map-icon"><img src={address} alt="address" /></div>
                        <h3>Visit Our Chambers</h3>
                        <p>High Court Road, Chennai</p>
                        <button className="map-btn">View on Google Maps</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mapsection
