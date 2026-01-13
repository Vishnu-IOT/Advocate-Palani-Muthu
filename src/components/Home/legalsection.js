import React from 'react'

function Legalsection() {
    const insights = [
        {
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop",
            category: "Property Law",
            title: "Understanding Property Registration Rules in 2024",
            date: "Jan 10, 2024"
        },
        {
            image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&h=250&fit=crop",
            category: "Family Law",
            title: "Mutual Consent Divorce: Process and Timeline",
            date: "Jan 8, 2024"
        },
        {
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop",
            category: "Legal Awareness",
            title: "Rights of a Consumer in India: What You Need to Know",
            date: "Jan 5, 2024"
        }
    ];
    return (
        <section className="insights-section">
            <div className="container">
                <div className="insights-header">
                    <h2 className="section-title">Legal Insights</h2>
                    <button className="btn-view-all">View All Articles</button>
                </div>
                {/* <div className='section-border'><p></p></div> */}
                <div className="insights-grid">
                    {insights.map((insight, index) => (
                        <div className="insight-card" key={index}>
                            <div className="insight-image">
                                <img src={insight.image} alt={insight.title} />
                                <span className="insight-category">{insight.category}</span>
                            </div>
                            <div className="insight-content">
                                <h3>{insight.title}</h3>
                                <p className="insight-date">{insight.date}</p>
                                <button className="btn-read-more">Read Article →</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Legalsection
