import React, { useState } from "react";
import casesData from "../../json/cases.json";
import { useLanguage } from "../../LanguageContext.js";


function ServiceList() {
    const { t } = useLanguage();

    const [court, setCourt] = useState("");
    const [status, setStatus] = useState("");
    const [results, setResults] = useState([]);
    const [searched, setSearched] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const filteredCases = casesData.filter((item) => {
            return (
                (court ? item.court === court : true) &&
                (status ? item.status === status : true)
            );
        });

        setResults(filteredCases);
        setSearched(true);
    };

    return (
        <div className="appointment-form-card">
            <h2 className="appointment-main-title"> {t("servicesform")}</h2>
            <h3 className="appointment-form-title"> {t("casestatus")}</h3>

            <form className="appointment-form" onSubmit={handleSubmit}>
                {/* Court Dropdown */}
                <div className="form-group">
                    <label>Court Complex <span style={{ color: "red" }}>*</span></label>
                    <select value={court} onChange={(e) => setCourt(e.target.value)}>
                        <option value="">Select Court</option>
                        <option value="Civil Court">Combined Courts, Jauankondam</option>
                        <option value="Criminal Court">Criminal Court</option>
                        <option value="Family Court">Family Court</option>
                    </select>
                </div>

                {/* Status Dropdown */}
                <div className="form-group">
                    <label>Case Status <span style={{ color: "red" }}>*</span></label>
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="">Select Status</option>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>

                <button type="submit" className="submit-btn">
                    {t("casebtn")}
                </button>
            </form>

            {/* Results */}
            {searched && (
                <div className="results">
                    {results.length === 0 ? (
                        <p>No cases found</p>
                    ) : (
                        results.map((item) => (
                            <div className="case-card" key={item.id}>
                                <h4>{item.caseNumber}</h4>
                                <p><strong>Court:</strong> {item.court}</p>
                                <p><strong>Status:</strong> {item.status}</p>
                                <p><strong>Client:</strong> {item.client}</p>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

export default ServiceList;
