import React, { useState } from 'react'
import { FaLocationArrow } from "react-icons/fa";


function Bookappoinment() {
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        caseType: '',
        preferredTime: '',
        caseDescription: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Consultation request submitted successfully! We will contact you within 24 hours.');
    };
    return (
        <div className="appointment-form-card">
            <h2 className="appointment-form-title">Book an Appointment</h2>
            <p className="appointment-form-subtitle">
                Fill out the form below to request a free consultation. We will get back to you within 24 hours.
            </p>

            <form className="appointment-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobileNumber">Mobile Number</label>
                        <input
                            type="tel"
                            id="mobileNumber"
                            name="mobileNumber"
                            placeholder="Enter your mobile number"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="caseType">Case Type</label>
                        <select
                            id="caseType"
                            name="caseType"
                            value={formData.caseType}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Case Type</option>
                            <option value="criminal">Criminal Law</option>
                            <option value="civil">Civil Law</option>
                            <option value="family">Family Law</option>
                            <option value="property">Property Law</option>
                            <option value="corporate">Corporate Law</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="preferredTime">Preferred Time</label>
                        <input
                            type="text"
                            id="preferredTime"
                            name="preferredTime"
                            placeholder="e.g., Morning, Afternoon"
                            value={formData.preferredTime}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="caseDescription">Case Description</label>
                    <textarea
                        id="caseDescription"
                        name="caseDescription"
                        placeholder="Brief description of your legal issue..."
                        rows="5"
                        value={formData.caseDescription}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                    Submit Consultation Request &nbsp;&nbsp;<FaLocationArrow />
                </button>

                <p className="form-disclaimer">
                    *Submitting this form does not create an attorney-client relationship.
                </p>
            </form>
        </div>
    )
}

export default Bookappoinment
