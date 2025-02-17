import React from 'react'
import image1 from "./../images/features/image1.jpg"
import image2 from "./../images/features/image2.jpg"

import image3 from "./../images/features/image3.jpg"
import image4 from "./../images/features/image4.jpg"

import image5 from "./../images/features/image5.jpg"
import image6 from "./../images/features/image6.jpg"





const featuresData = [
    {
      id: 1,
      title: "Wide Range of Courses",
      image: image1,
      description: "We offer a vast variety of courses in tech, business, and design."
    },
    {
      id: 2,
      title: "Expert Instructors",
      image: image5,
      description: "Learn from industry experts with real-world experience."
    },
    {
      id: 3,
      title: "Certificates upon Completion",
      image: image4,
      description: "Earn certificates to showcase your skills and advance your career."
    },
    {
      id: 4,
      title: "Live Support",
      image: image3,
      description: "Get real-time help from our support team to assist with your learning."
    },
    {
      id: 5,
      title: "Self-Paced Learning",
      image: image2,
      description: "Learn at your own pace, anytime, anywhere, with lifetime access."
    },
    {
      id: 6,
      title: "Affordable Pricing",
      image: image6,
      description: "Access premium learning content at affordable prices."
    }
  ];
  
  const Features = () => {
    return (
      <div className="features-container">
        <h1 className="features-title">Why Choose Us?</h1>
        <div className="features-grid">
          {featuresData.map((feature) => (
            <div key={feature.id} className="feature-card">
              <img src={feature.image} alt={feature.title} className="feature-image" />
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Features;