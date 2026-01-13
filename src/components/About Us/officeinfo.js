import React from 'react'
import address from '../../assets/address-about.png';
import timings from '../../assets/timings.png';


function Officeinfo() {
    const officeData = [
        {
            icon: address,
            title: "Office Address",
            details: [
                "S.S.Complex, OPP. Indian Bank,",
                " Co-Optex Lane, Jayankondam,",
                "Udaiyarpalayam, Ariyalur Dt - 621 802."
            ],
            link: "View address on Google maps"
        },
        {
            icon: timings,
            title: "Office Timings",
            details: [
                "Mon - Fri: 9:00 AM - 6:00 PM",
                "Saturday: 9:00 AM - 1:00 PM",
                "Sunday: By Appointment Only"
            ]
        },
        {
            icon: address,
            title: "Court Proximity",
            details: [
                "Supreme CourtHigh Court: 0.5 km",
                "City Civil Court: 0.8 km",
                "Family Court: 1.0 km",
                "Egmore Court: 3.5 km"
            ]
        }
    ];
    return (
        <section className="office-info-section">
            <div className="about-container">
                <h2 className="about-section-title">Office Information</h2>
                <div className="office-grid">
                    {officeData.map((office, index) => (
                        <div className="office-card" key={index}>
                            <div className="office-icon"><img src={office.icon} alt={office.title} /></div>
                            <h3 className="office-title">{office.title}</h3>
                            <div className="office-details">
                                {office.details.map((detail, idx) => (
                                    <p key={idx}>{detail}</p>
                                ))}
                            </div>
                            {office.link && (
                                <a href="#" className="office-link">{office.link}</a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Officeinfo
