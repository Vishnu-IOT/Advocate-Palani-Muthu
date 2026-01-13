import React from 'react'
import civil from '../../assets/civil.png';
import criminal from '../../assets/criminal.png';
import corporate from '../../assets/corporate.png';
import family from '../../assets/family.png';
import property from '../../assets/property.png';
import labour from '../../assets/labour.png';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Practiceareas() {
    const areas = [
        { icon: civil, title: "Civil Court", cases: "Property disputes, contracts, and civil litigation matters.", color: "#3b82f6" },
        { icon: criminal, title: "Criminal Court", cases: "Defense representation, bail matters, and criminal trials.", color: "#8b5cf6" },
        { icon: family, title: "Family / Divorce Court", cases: "Marriage registration, divorce, custody, and maintenance.", color: "#ec4899" },
        { icon: property, title: "Motor Accident Cases", cases: "Compensation claims, insurance disputes, and accident liability cases.", color: "#f59e0b" },
        { icon: labour, title: "Workmen Compensation and Consumer Court", cases: "Employment disputes, wrongful termination, and compliance.", color: "#10b981" },
        { icon: corporate, title: "Corporate Cases", cases: "Company registration, agreements, and corporate compliance.", color: "#06b6d4" }
    ];
    return (
        <section className="practice-areas" id="services">
            <div className="container">
                <h2 className="section-title">Legal Practice Areas</h2>
                <div className='section-border'><p></p></div>
                <p className='section-subtitles'>Comprehensive legal services tailored to meet your specific needs across various <br />domains of law.</p>
                <div className="areas-grid">
                    {areas.map((area, index) => (
                        <div className="area-card" key={index}>
                            {/* <div className="area-icon" style={{ backgroundColor: area.color + '20', color: area.color }}> */}
                            <img className="area-img" src={area.icon} alt={area.title} />
                            {/* </div> */}
                            <h3>{area.title}</h3>
                            <p className="area-cases">{area.cases}</p>
                            <Link to="/contact" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                                <div className="area-rating">
                                    <p>Consult Now</p>
                                    <span className='area-arrow'><FaArrowRightLong /></span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Practiceareas
