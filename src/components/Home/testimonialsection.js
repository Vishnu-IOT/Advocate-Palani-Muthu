import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';
import { useLanguage } from "../../LanguageContext.js";

function Testimonialsection() {
    const { t } = useLanguage();
    const testimonials = [
        {
            name: "Rajesh Kumar",
            role: "Business Owner",
            text: "Outstanding legal expertise! R. Sharma handled my corporate dispute with utmost professionalism and secured a favorable outcome.",
            rating: 5
        },
        {
            name: "Priya Mehta",
            role: "Individual Client",
            text: "Excellent service in my family law case. Very responsive, knowledgeable, and compassionate throughout the process.",
            rating: 5
        },
        {
            name: "Amit Patel",
            role: "Property Developer",
            text: "Best advocate for property disputes. Clear communication, strategic approach, and delivered results beyond expectations.",
            rating: 5
        },
        {
            name: "Amit Patel",
            role: "Property Developer",
            text: "Best advocate for property disputes. Clear communication, strategic approach, and delivered results beyond expectations.",
            rating: 5
        }
    ];
    return (
        <section className="testimonials-section">
            <div className="container">
                <h2 className="section-title">{t("client")}</h2>
                <div className='section-border'><p></p></div>
                <p className='section-subtitles'>{t("reviews")}</p>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div className="testimonial-card" key={index}>
                            <div className="testimonial-stars">
                                {"⭐".repeat(testimonial.rating)}
                            </div>
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                                <div className="author-info">
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='test-btn'>
                    <p className='review-btn'>Read More Reviews on Google
                        <span className='area-arrow'><FaArrowRightLong /></span></p>
                </div>
            </div>
        </section>
    )
}

export default Testimonialsection
