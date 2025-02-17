// src/CertificatePage.js
import React from "react";

function CertificatePage() {
  const learner = {
    name: "Thombare Swapnil",
    courseTitle: "React for Beginners",
    date: "14 February 2025",
  };

  return (
    <div className="certificate-container">
      <div className="certificate-card">
        <div className="certificate-header">
          <h1>Certificate of Creative Learning platform </h1>
        </div>
        <div className="certificate-body">
          <h2>This is to certify that</h2>
          <h3 className="learner-name">{learner.name}</h3>
          <p>Has successfully completed the course</p>
          <h4 className="course-title">{learner.courseTitle}</h4>
          <p className="completion-date">On: {learner.date}</p>
        </div>
        <div className="certificate-footer">
          <p className="signature">Instructor Signature</p>
        </div>
      </div>
    </div>
  );
}

export default CertificatePage;
