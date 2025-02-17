import React, { useState } from 'react';
import Slider from 'react-slick';

// Importing images
import image6 from "./../images/image6.jpg";
import image7 from "./../images/image7.jpg";
import image9 from "./../images/image9.jpg";
import image11 from "./../images/image11.jpg";

const Service = () => {
  // Set state for the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };

  const handleServiceClick = (index) => {
    setCurrentSlide(index);  
  };

  // Gallery data for services
  const serviceData = [
    {
      id: 1,
      title: "Online Courses",
      image: image6,
      description: "Explore a wide range of courses designed to help you learn at your own pace. Courses available in various subjects."
    },
    {
      id: 2,
      title: "Live Tutoring",
      image: image7,
      description: "Get personalized assistance from expert tutors. One-on-one sessions to clear your doubts and boost your learning."
    },
    {
      id: 3,
      title: "Certification",
      image: image9,
      description: "Earn certificates upon successful completion of courses to showcase your skills and achievements."
    },
    {
      id: 4,
      title: "Group Discussions",
      image: image11,
      
      description: "Engage in group discussions to enhance your learning. Collaborate with peers and share knowledge in interactive sessions."
    }
  ];

  return (
    <div className="service-page">
      <h1 className="service-title">Our Learning Services</h1>

      {/* Slider for displaying the services */}
      <Slider {...settings} initialSlide={currentSlide}>
        {serviceData.map((service, index) => (
          <div key={service.id} className="service-item">
            <div className="service-icon">
              <img src={service.image} alt={service.title} />
            </div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </Slider>

      {/* Service options that users can click on */}
      <div className="service-options">
        {serviceData.map((service, index) => (
          <div 
            key={service.id} 
            className="service-option" 
            onClick={() => handleServiceClick(index)}
          >
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
