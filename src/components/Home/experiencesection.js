import React from 'react'
import court from '../../assets/court.png'
import client from '../../assets/client.png'
import casehighlights from '../../assets/case.png'


function Experiencesection() {
    const experiences = [
        { img: court, title: "Court Experience", description: "Regular practice as an advocate for the past 28 years in Civil and Criminal side in various courts especially Jayankondam and Ariyalur Courts. I can explore my legal skill to my knowledge." },
        { img: client, title: "Clients", description: "Representing individuals, small businesses, and large corporate entities with equal dedication." },
        { img: casehighlights, title: "Case Highlights", description: "Successfully handled 500+ civil disputes and 200+ criminal defense cases with high success rate." }
    ];

    const processes = [
        { step: "1", title: "Initial Consultation", description: "Meeting to understand the facts and legal merits of your case." },
        { step: "2", title: "Case Analysis", description: "In-depth research and strategy formulation for the best outcome." },
        { step: "3", title: "Documentation", description: "Drafting necessary legal notices, petitions, or agreements." },
        { step: "4", title: "Representation", description: "Filing and representing your interests in the court of law." }
    ];
    return (
        <section className="experience-section">
            <div className="container">
                <div className="experience-grid">
                    <div className="experience-left">
                        <h2 className="experience-title">Experience & Expertise</h2>
                        <p className="experience-subtitle">
                            With over 15 years of dedicated legal practice, I bring extensive
                            experience across multiple domains of law.
                        </p>
                        <div className="timeline">
                            {experiences.map((exp, index) => (
                                <div className="timeline-item" key={index}>
                                    {/* <div className="timeline-marker"></div> */}
                                    <img className='timeline-img' src={exp.img} alt={exp.title} />
                                    <div className="timeline-content">
                                        <h4>{exp.title}</h4>
                                        <p className="description">{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="experience-right">
                        <h3>Legal Consultation Process</h3>
                        <div className="process-steps">
                            {processes.map((process, index) => (
                                <div className="process-card" key={index}>
                                    <div className="process-step">{process.step}</div>
                                    <div className="process-content">
                                        <h4>{process.title}</h4>
                                        <p>{process.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experiencesection
