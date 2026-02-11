import React, { useState } from "react";
import ariyalur_pending from "../../json/ariyalur_pending.json";
import ariyalur_disposed from "../../json/ariyalur_disposed.json";
import jayankondam_pending from "../../json/jayankondam_pending.json";
import jayankondam_disposed from "../../json/jayankondam_disposed.json";
import { useLanguage } from "../../LanguageContext.js";

function ServiceList() {
    const { t } = useLanguage();

    const [court, setCourt] = useState("");
    const [status, setStatus] = useState("");
    const [results, setResults] = useState(null);
    const [selectcourt, setselectcourt] = useState(null);
    const [searched, setSearched] = useState(false);

    // ⭐ NEW STATE
    const [activeCourt, setActiveCourt] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        let selectedData = null;
        let selectedCourt = null;

        if (court === "Combined Courts, Ariyalur" && status === "Pending") {
            selectedData = ariyalur_pending;
            selectedCourt = ariyalur_pending.casesByCourt;
        }
        if (court === "Combined Courts, Ariyalur" && status === "Disposed") {
            selectedData = ariyalur_disposed;
            selectedCourt = ariyalur_disposed.casesByCourt;
        }
        if (court === "Combined Courts, Jayankondam" && status === "Pending") {
            selectedData = jayankondam_pending;
            selectedCourt = jayankondam_pending.casesByCourt;
        }
        if (court === "Combined Courts, Jayankondam" && status === "Disposed") {
            selectedData = jayankondam_disposed;
            selectedCourt = jayankondam_disposed.casesByCourt;
        }

        setResults(selectedData);
        setselectcourt(selectedCourt);
        setActiveCourt(null); // reset selection
        setSearched(true);
    };

    return (
        <div className="appointment-form-card">
            <h2 className="appointment-main-title">{t("servicesform")}</h2>
            <h3 className="appointment-form-title">{t("casestatus")}</h3>

            {/* FORM */}
            <form className="appointment-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                        Court Complex <span style={{ color: "red" }}>*</span>
                    </label>
                    <select value={court} onChange={(e) => setCourt(e.target.value)} required>
                        <option value="">Select Court</option>
                        <option value="Combined Courts, Ariyalur">
                            Combined Courts, Ariyalur
                        </option>
                        <option value="Combined Courts, Jayankondam">
                            Combined Courts, Jayankondam
                        </option>
                    </select>
                </div>

                <div className="form-group">
                    <label>
                        Case Status <span style={{ color: "red" }}>*</span>
                    </label>
                    <select value={status} onChange={(e) => setStatus(e.target.value)} required>
                        <option value="">Select Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Disposed">Disposed</option>
                    </select>
                </div>

                <button type="submit" className="submit-btn">
                    {t("casebtn")}
                </button>
            </form>

            {/* RESULTS */}
            {searched && results && (
                <div className="results">

                    {/* COURT LIST */}
                    <div className="court-list">

                        <p className="court-complex">Total Number of Establishments in Court Complex : {results.summary.totalEstablishments} / Total number of cases : {results.summary.totalCases}</p>
                        {/* <p className="court-complex">Total number of cases : {results.summary.totalCases}</p> */}

                        {Object.entries(results.summary.courts).map(([key, value]) => (
                            <p className="court-sub">{key} : {value}</p>
                        ))}

                        {Object.keys(selectcourt).map((courtName) => (
                            <p
                                key={courtName}
                                className={`court-title ${activeCourt === courtName ? "active" : ""}`}
                                // onClick={() => activeCourt === null ? setActiveCourt(courtName) : setActiveCourt(null)}
                                onClick={() => setActiveCourt(courtName)}
                                style={{ cursor: "pointer" }}
                            >
                                {courtName}
                            </p>
                        ))}

                    </div>
                    {/* TABLE */}
                    {activeCourt && (
                        <div className="table-wrapper">
                            {selectcourt[activeCourt].length === 0 ? (
                                <p>No cases found</p>
                            ) : (
                                <table className="case-table">
                                    <thead>
                                        <tr>
                                            <th>Sr No</th>
                                            <th>Case Number</th>
                                            <th>Petitioner vs Respondent</th>
                                            <th>Advocate Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectcourt[activeCourt].map((item) => (
                                            <tr key={item.srNo}>
                                                <td>{item.srNo}</td>
                                                <td>{item.caseNumber}</td>
                                                <td>
                                                    {item.petitioner} <strong>VS</strong>{" "}
                                                    {item.respondent}
                                                </td>
                                                <td>{item.advocates}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default ServiceList;
