import React from 'react'
import image1 from "./../images/image1.jpg"
import image2 from "./../images/image2.jpg"
import image3 from "./../images/image3.jpg"
import image4 from "./../images/image4.jpg"
import image5 from "./../images/image5.jpg"

const galleryData = [
    {
      id: 1,
      title: "React for Beginners",
      image: image1,
      description: "Learn the basics of ReactJS"
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      image: image2,
      description: "Deep dive into modern JavaScript"
    },
    {
      id: 3,
      title: "HTML & CSS Essentials",
      image: image3,
      description: "Master HTML and CSS for web development"
    },
    {
      id: 4,
      title: "Node.js Crash Course",
      image:image4,
      description: "Understand the fundamentals of Node.js"
    },
    {
        id: 5,
        title: "Node.js Crash Course",
        image:image5,
        description: "Understand the fundamentals of Node.js"
      },
      {
        id: 6,
        title: "Node.js Crash Course",
        image:image1,
        description: "Understand the fundamentals of Node.js"
      },
      {
        id: 7,
        title: "Node.js Crash Course",
        image:image2,
        description: "Understand the fundamentals of Node.js"
      },
      {
        id: 8,
        title: "Node.js Crash Course",
        image:image3,
        description: "Understand the fundamentals of Node.js"
      },
    // Add more items here
  ];
  
  const Gallery = () => {
    return (
      <div className="gallery-container">
        <h1 className="gallery-title">Our Learning Resources</h1>
        <div className="gallery-grid">
          {galleryData.map((item) => (
            <div key={item.id} className="gallery-item">
              <img src={item.image} alt={item.title} className="gallery-image" />
              <div className="gallery-info">
                <h3 className="gallery-item-title">{item.title}</h3>
                <p className="gallery-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
export default Gallery
