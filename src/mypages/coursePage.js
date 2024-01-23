import React from 'react';
import { Layout } from './layout';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function CoursePage() {
  const courses = [
    { id: 1, name: 'Web Development', description: 'Learn HTML, CSS, and JavaScript.' },
    { id: 2, name: 'Data Science', description: 'Explore the world of data science with hands-on projects.' },
    { id: 3, name: 'Python Programming', description: 'Master Python programming from basics to advanced concepts.' },
    { id: 4, name: 'Machine Learning Fundamentals', description: 'Introduction to machine learning algorithms and techniques.' },
    { id: 5, name: 'React.js Basics', description: 'Introduction to building user interfaces with React.js.' },
    { id: 6, name: 'Node.js Fundamentals', description: 'Learn server-side JavaScript with Node.js.' },
    { id: 7, name: 'Full Stack Development', description: 'Combine front-end and back-end skills for full-stack development.' },
    { id: 8, name: 'Mobile App Development', description: 'Build mobile applications for iOS and Android platforms.' },
    { id: 9, name: 'Java Programming', description: 'Explore the Java programming language and its applications.' },
    { id: 10, name: 'Database Management', description: 'Learn about database design and management.' },
    { id: 11, name: 'Cybersecurity Essentials', description: 'Fundamental concepts and practices in cybersecurity.' },
    { id: 12, name: 'Artificial Intelligence in Business', description: 'Explore AI applications in the business world.' },
  ];

  return (
    <>
      <Layout />
      <div className="course-page">
        <h1 className="heading">Explore Courses</h1>
        <div className="course-list">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-header">
                <h2 className="course-name">{course.name}</h2>
              </div>
              <div className="course-content">
                <p className="course-description">{course.description}</p>
              </div>
              <div className="course-footer">
                <button className="start-button">Start</button>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="container-fluid row bg-dark text-light mt-5 gg d-flex flex-row flex-wrap lol1">
      <div className="col-lg-2 col-md-4 col-8 ftimg">
        <img className="img-fluid" src="https://ucarecdn.com/0066e806-94bf-48f8-961b-5a1be2e234fe/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="Logo" />
      </div>
      <div className="col-lg-2 col-md-4 col-6">
        <h3>Quick Links</h3>
        <ul className="rrr">
          <li><a href="#">Work</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Placements</a></li>
          <li><a href="#">Tricks & Tips</a></li>
        </ul>
      </div>
      <div className="col-lg-2 col-md-4 col-12">
        <h3>Programs</h3>
        <ul className="rrr">
          <li><a href="#">Online platform</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">Articles</a></li>
        </ul>
      </div>
      <div className="col-lg-2 col-md-4 col-6">
        <h3>Resources</h3>
        <ul className="rrr">
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Submit Ticket</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="col-lg-4 col-md-8 col-12">
        <h3>Newsletter</h3>
        <form className="newsletter-container">
          <label htmlFor="email">Enter your email:</label>
          <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Your Email" aria-label="Your Email" aria-describedby="button-addon2" />
            <button className="btn btn-outline-light" type="button" id="button-addon2">Subscribe</button>
          </div>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            <FontAwesomeIcon icon={faYoutube} className="social-icon" />
          </div>
        </form>
      </div>
      <div className="col-12 text-center mt-4 bg-dark lol2">
        <hr />
        <h5>Copyright &copy;2023 All Rights Reserved.</h5>
      </div>
    </div>
    </>
  );
}
export default CoursePage;
