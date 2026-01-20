import React from 'react'
// import address from '../../assets/address.png'

function Mapsection() {
    return (
        <section className="map-section">
            <div className="map-container">
                <div className="map-placeholder">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.366341445339!2d78.11437197452832!3d11.66842864210875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401bdcb2d3c2cf55%3A0x2f3ca69cc4d4258c!2sMPeoples%20Business%20Solutions%20Pvt.%20Ltd.%2C!5e0!3m2!1sen!2sin!4v1768889188023!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, borderRadius: "8px" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map Location"
                    />
                    {/* <div className="map-overlay">
                        <div className="map-icon">
                            <img src={address} alt="address" />

                        </div>
                        <h3>Visit Our Chambers</h3>
                        <p>High Court Road, Chennai</p>
                        <button className="map-btn">View on Google Maps</button>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Mapsection

