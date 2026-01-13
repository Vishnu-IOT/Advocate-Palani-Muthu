import React from 'react'

function Academictimeline() {
    const academicData = [
        {
            course: "M.L",
            institution: "Annamalai University (D.D.E)",
            university: "Annamalai University (D.D.E)",
            yearOfCompletion: "1999 - 2002",
            percentage: "54%"
        },
        {
            course: "M.A Yoha",
            institution: "Vision for Wisdom, Aliar",
            university: "Bharathiar University",
            yearOfCompletion: "2008 - 2010",
            percentage: "87%"
        },
        {
            course: "B.L",
            institution: "Central Law College, Salem",
            university: "Madras University",
            yearOfCompletion: "1994 - 1997",
            percentage: "48 %"
        },
        {
            course: "B.Sc Chemistry",
            institution: "Periyar Arts and Science College Trichy",
            university: "Bharathidasan University",
            yearOfCompletion: "1989 - 1992",
            percentage: "52%"
        },
        {
            course: "H.S.C",
            institution: "Ponnaiah Hr. Sec.School, Trichy",
            university: "Tamil Nadu State Board",
            yearOfCompletion: "1986 - 1988",
            percentage: "63 %"
        },
        {
            course: "S.S.L.C",
            institution: "Ponnaiah Hr. Sec.School, Trichy",
            university: "Tamil Nadu State Board",
            yearOfCompletion: "1986",
            percentage: "69 %"
        }
    ];
    return (
        <section className="academic-timeline-section">
            <div className="academic-timeline-container">
                <h2 className="academic-timeline-title">Academic Course</h2>
                <div className="academic-table-wrapper">
                    <table className="academic-table">
                        <thead>
                            <tr>
                                <th>Course</th>
                                <th>Institution</th>
                                <th>University</th>
                                <th>Year of Completion</th>
                                <th>Percentage of Marks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {academicData.map((item, index) => (
                                <tr key={index}>
                                    <td data-label="Course">
                                        <span className="course-name">{item.course}</span>
                                    </td>
                                    <td data-label="Institution">
                                        <span className="institution-name">{item.institution}</span>
                                    </td>
                                    <td data-label="University">
                                        <span className="university-name">{item.university}</span>
                                    </td>
                                    <td data-label="Year of Completion">
                                        <span className="year-range">{item.yearOfCompletion}</span>
                                    </td>
                                    <td data-label="Percentage of Marks">
                                        <span className="percentage-value">{item.percentage}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Academictimeline
