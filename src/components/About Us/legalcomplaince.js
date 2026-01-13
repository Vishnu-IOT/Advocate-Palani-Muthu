import React from 'react'
import disclaimer from '../../assets/disclimer.png'
import confidence from '../../assets/confidence.png'
import policy from '../../assets/policy.png'

function Legalcomplaince() {
    const policies = [
        {
            icon: disclaimer,
            title: "Disclaimer",
            description: "This website does not solicit legal advice. The information provided is for general informational purposes only. Visiting this website or sending an email does not create an attorney-client relationship. Users are advised to seek independent legal advice for their specific legal issues."
        },
        {
            icon: confidence,
            title: "Client Confidentiality",
            description: "We maintain strict confidentiality regarding all client communications and case details in accordance with the Advocates Act, 1961. Your data is secure with us."
        },
        {
            icon: policy,
            title: "Privacy Policy",
            description: "We take privacy seriously. Any personal information collected through our contact forms is used solely for the purpose of communication regarding your legal matter."
        }
    ];

    return (
        <section className="legal-compliance-section">
            <div className="about-container">
                <h2 className="about-section-title">Legal Compliance & Policies</h2>
                <div className="compliance-list">
                    {policies.map((policy, index) => (
                        <div className="compliance-item" key={index}>
                            <div className="compliance-header">
                                <span className="compliance-icon"><img src={policy.icon} alt={policy.title} /></span>
                                <h3>{policy.title}</h3>
                            </div>
                            <p className="compliance-description">{policy.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Legalcomplaince
