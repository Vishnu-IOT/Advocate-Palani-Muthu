import React from 'react'
import scholar from '../../assets/scholar.png'

function Acheivementsection() {
    const stats = [
        { number: "25+", label: "Years of Practice" },
        { number: "1500+", label: "Cases Handled" },
        { number: "98%", label: "Success Rate" },
        { number: "Top", label: "Rated Advocate" }
    ];

    const awards = [
        { img: scholar, title: "Landmark Civil Litigation – O.S. No. 13/2006", org: " Successfully handled a high-profile civil suit against Don Bosco Higher Secondary School before the Perambalur District Court, followed by execution proceedings before the District Munsif Court, Jayankondam, ensuring effective enforcement of the decree." },
        { img: scholar, title: "Acquittal in Section 302 IPC Criminal Cases", org: "Defended multiple serious criminal cases under Section 302 of the Indian Penal Code before the District and Sessions Courts at Trichy, Perambalur, and Ariyalur." }
    ];
    return (
        <section className="achievements-section">
            <div className="container">
                <h2 className="section-title">Achievements & Recognition</h2>
                <div className='section-border'><p></p></div>
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div className="stat-card" key={index}>
                            <h3 className="stat-number-large">{stat.number}</h3>
                            <p className="stat-label-large">{stat.label}</p>
                        </div>
                    ))}
                </div>
                <div className="awards-grid">
                    {awards.map((award, index) => (
                        <div className="award-card" key={index}>
                            <div className="award-year"><img src={award.img} alt="Scholar" /></div>
                            <div>
                                <h4>{award.title}</h4>
                                <p>{award.org}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Acheivementsection
