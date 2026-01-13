import React from 'react'
import trust from '../../assets/trusted.png';
import profile from '../../assets/profile.jpg';


function Herosection() {
    return (
        <section className="hero" id="home">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <p className="hero-subtitle"><img className='hero-trusted' src={trust} alt='Trusted' />Trusted Legal Council Since 1997</p>
                        <h1 className="hero-title">
                            Advocate <div className="highlight">   R. Palani Muthu <span className="hero-degree">
                                M.A.,M.L
                            </span>  </div>
                        </h1>

                        <p className="hero-council">
                            Bar Council Reg: 989/1997 | 25+ Years Experience
                        </p>
                        <p className="hero-description">
                            Dedicated to providing strategic legal solutions with <br />integrity. Specializing in High Court and District Court<br />litigations with a proven track record of success.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn-primary">Book Consultation</button>
                            <div className='mobile-btn'>
                                <button className="btn-secondary">Contact Advocate</button>
                                <button className="btn-secondary" >View Practice Areas</button>
                            </div>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="image-container">
                            <img src={profile} alt="Advocate R. Sharma" />
                            <div className="video-badge">
                                <span>"Justice For All"</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Herosection
