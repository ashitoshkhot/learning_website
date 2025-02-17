import React from 'react';

// Import your images
import image12 from "./../images/image12.jpg";
import image13 from "./../images/image13.jpg";
import image14 from "./../images/image14.jpg";
import image15 from "./../images/image15.jpg";
import image16 from "./../images/image16.jpg";
import image17 from "./../images/image17.jpg";
import topImage from "./../images/image18.jpg"; // Assuming this is your "top blog" image

// Sample blog posts with locally imported images
const blogPosts = [
  {
    id: 1,
    title: "Full Stack Developer Course Syllabus: A Comprehensive Guide",
    content: "Full Stack Development is one of the most challenging and rewarding careers in the tech industry. This course covers both front-end and back-end technologies.",
    date: "27 May 2023",
    readTime: "4 min read",
    image: image12, // Imported image
  },
  {
    id: 2,
    title: "Data Analyst Course Syllabus: The Learning Path",
    content: "As the world becomes increasingly data-driven, the demand for skilled Data Analysts continues to grow. This blog breaks down the essential skills and tools.",
    date: "27 May 2023",
    readTime: "4 min read",
    image: image13, // Imported image
  },
  {
    id: 3,
    title: "Automation Testing Syllabus: A Detailed Road-map",
    content: "Automation testing is revolutionizing the way software testing is conducted. Learn about the tools and practices to master this field.",
    date: "27 May 2023",
    readTime: "4 min read",
    image: image14, // Imported image
  },
  {
    id: 4,
    title: "Top Accenture Interview Questions",
    content: "Accenture is a multinational professional services company that provides a wide range of services in strategy, consulting, technology, and operations.",
    date: "23 Jun 2023",
    readTime: "18 min read",
    image: image15, // Imported image
  },
  {
    id: 5,
    title: "What is Full Stack Development?",
    content: "Discover the role and skills of a full-stack developer. Learn how they master both front-end and back-end technologies for seamless web development.",
    date: "3 Jul 2023",
    readTime: "15 min read",
    image: image16, // Imported image
  },
  {
    id: 6,
    title: "How to Become a Full-Stack Developer: A Step-by-Step Guide",
    content: "From front-end to back-end, discover the comprehensive guide on how to become a full-stack developer and conquer the world of web development.",
    date: "1 Jun 2023",
    readTime: "12 min read",
    image: image17, // Imported image
  },
];

function BlogPage() {
  return (
    <div className="blog-container">
      <h1>Blog</h1>
      
      {/* Top Blog Section */}
      <div className="top-blog">
        <h2>Top Blog</h2>
        <div className="top-blog-item" style={{ backgroundImage: `url(${topImage})` }}>
          <h3>Top Blog: Full Stack Developer Course Syllabus</h3>
          <p>This is a comprehensive guide to becoming a full stack developer. It covers all the key skills you need to succeed in the field.</p>
          <p><strong>Read time: 4 min</strong></p>
        </div>
      </div>

      <h2>Latest Blog Posts</h2>

      {/* Blog List Section with Background Image */}
      <div className="blog-list" style={{ backgroundImage: `url(${topImage})` }}>
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-item">
            <img src={post.image} alt={post.title} className="blog-image" />
            <h3>{post.title}</h3>
            <p className="blog-date">{post.date}</p>
            <p>{post.content.substring(0, 150)}...</p>
            <p><strong>{post.readTime}</strong></p>
            <a href={`/blog/${post.id}`} className="read-more">Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
