import React from 'react';

// Import images for student reviews
import kedarImage from "./../images/kedar.jpg";
import mandarImage from "./../images/mandar.jpg";
import sujayImage from "./../images/sujay.jpg";
import sakshiImage from "./../images/sakshi.jpg";
import tanishkaImage from "./../images/tanishka.jpg";
import AjayImage from "./../images/Ajay.jpg";

// Student data
const students = [
  {
    name: "keadr",
    position: "Software Engineer, Innovaccer",
    quote: "AccioJob trained me and helped me improve my technical skills perfectly to land the job I had dreamed of!",
    before: "Chemical Engineer",
    after: "Software Engineer, Innovaccer",
    image: kedarImage, // Imported image
  },
  {
    name: "mandar",
    position: "Application Developer, ThoughtWorks",
    quote: "Low CGPA was a worry, but Acciojob helped me master real-time projects and coding in 5 months!",
    before: "M.Sc. in Computer Science",
    after: "Application Developer, ThoughtWorks",
    image: mandarImage, // Imported image
  },
  {
    name: "sujay",
    position: "Software Developer, PayGlocal",
    quote: "It’s never too late! I switched from Automobile Engineering to IT with AccioJob’s help.",
    before: "2-year education gap",
    after: "Software Developer, PayGlocal",
    image: sujayImage, // Imported image
  },
  {
    name: "sakshi",
    position: "Software Developer, Maersk",
    quote: "AccioJob’s structure and guidance helped me crack my dream job.",
    before: "CS Student, Tier-3 College",
    after: "Software Developer, Maersk",
    image: sakshiImage, // Imported image
  },
  {
    name: "tanishka",
    position: "Software Developer, Bamboo Rose",
    quote: "From UPSC struggles to excelling in coding, AccioJob transformed my career!",
    before: "UPSC Aspirant",
    after: "Software Developer, Bamboo Rose",
    image: tanishkaImage, // Imported image
  },
  {
    name: "Ajay",
    position: "Software Developer, Gainsight",
    quote: "From Sales to Software Development, AccioJob’s support changed my life!",
    before: "Sales Background",
    after: "Software Developer, Gainsight",
    image: AjayImage, // Imported image
  },
];

// ReviewPage Component
function ReviewPage() {
  return (
    <div className="review-container">
      <h1>Student Reviews</h1>
      <div className="reviews">
        {students.map((student, index) => (
          <div className="review-card" key={index}>
            <img src={student.image} alt={student.name} className="review-image" />
            <h2>{student.name}</h2>
            <p><strong>{student.position}</strong></p>
            <p>"{student.quote}"</p>
            <p className="before-after">Before: {student.before}</p>
            <p className="before-after">After: {student.after}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewPage;
