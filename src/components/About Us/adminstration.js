import React from 'react'

function Adminstration() {
    const adminData = [
        {
            label: "Content Updates",
            value: "Managed by the Advocate's office admin for clear legal communication."
        },
        {
            label: "Admin Panel",
            value: "Secure CMS provided for updating blog posts, case studies, and law firm testimonials."
        },
        {
            label: "Maintenance",
            value: "Regular technical maintenance and security audits are performed to ensure website integrity."
        }
    ];
    return (
        <section className="administration-section">
            <div className="about-container">
                <h2 className="about-section-title">Administration</h2>
                <div className="admin-list">
                    {adminData.map((item, index) => (
                        <div className="admin-item" key={index}>
                            <div className="admin-label">{item.label}:</div>
                            <div className="admin-value">{item.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Adminstration
