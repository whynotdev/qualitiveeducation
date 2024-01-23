// src/components/TeacherTraining.js
import React from 'react';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.css";
import { Layout } from './layout';

export function TeacherTraining() {
  return (
    <>
    <Layout/>
    <div className="teacher-training m-3">
      <h2 className='text-center'>Teacher Training Programs</h2>
      <p className='teacher'>
        Our teacher training programs are designed to equip educators with the skills and knowledge necessary for
        effective teaching. Whether you're a new teacher or looking to enhance your expertise, our programs cover a
        wide range of topics, including classroom management, curriculum development, and innovative teaching strategies.
      </p>
      <p className='teacher'>
        Join us on the journey of continuous learning and professional development. We believe that empowered teachers
        contribute to the success and growth of students.
      </p>
      <div className="training-details">
        <h3 className='text-center'>Upcoming Training Sessions:</h3>
        <ul>
          <li>Effective Classroom Communication - Date: [28-01-2024]</li>
          <li>Technology Integration in Education - Date: [28-01-2024]</li>
          <li>Inclusive Teaching Practices - Date: [28-01-2024]</li>
        </ul>
      </div>

      {/* Volunteer Teachers Poster */}
      <div className="poster m-3">
        <h2 className="text-center">Join Our Volunteer Teachers Program</h2>
        <p>
          Are you currently studying for your master's degree and passionate about teaching? Become a volunteer teacher
          and help others grow. We offer opportunities both offline in nearby locations and online. All resources will be
          checked and approved by us.
        </p>
      </div>

      {/* Internship Registration Poster */}
      <div className="poster m-3 ">
        <h2 className="text-center">Interested in Internship?</h2>
        <div className='col-12 row d-flex flex-row'>
        <div className='col-4'></div>
        <div className='col-4'>
        <figure>
          <img src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
          <figcaption> <p>
          Register with us and get an internship certificate. If you are passionate about education, let's collaborate
          for a valuable learning experience.
          <br/>
          
          <a href='#'>Register</a>
        </p></figcaption>
        </figure>
        </div>
        <div className='col-4'></div>
        
        </div>
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
