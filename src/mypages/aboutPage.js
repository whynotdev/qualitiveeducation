import React from "react";
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { Layout } from "./layout";
export function AboutPage(){
    return(
    <>
    
    <Layout/>
        <div className="king col-lg-12 text-light text-center">
        <h1 className="h11 my-3 ">About Us<br/></h1>
                
        </div>
        <section>
    <div className="container">
        <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
                <h2 className="">Our Commitment to Inclusive Education</h2>
                <p className="about1">
                    At <b>FreeBee</b>, we are dedicated to ensuring inclusive and equitable quality education for everyone. 
                    Our mission is to promote lifelong learning opportunities for all individuals, regardless of background, 
                    ensuring that education is accessible and tailored to meet the diverse needs of our community.
                </p>
                <p className="about1">
                    We believe in creating an educational environment that fosters diversity, equity, and inclusion. 
                    Through our programs and initiatives, we strive to break down barriers and provide equal opportunities 
                    for learning, empowering individuals to reach their full potential.
                </p>
                <p  className="about1">
                    Join us on this journey towards a future where education knows no boundaries, 
                    and every person has the chance to learn, grow, and contribute to a better world.
                </p>

                <h3>How We Address Inclusivity:</h3>
                <ul className="about">
                    <li><strong>Diverse Curriculum:</strong> Our curriculum includes content that reflects diverse perspectives, cultures, and backgrounds, ensuring a well-rounded education.</li>
                    <li><strong>Accessible Learning Materials:</strong> We provide learning materials in multiple formats and languages to accommodate different learning styles and abilities.</li>
                    <li><strong>Adaptive Teaching Methods:</strong> Our educators use a variety of teaching methods to cater to different learning needs, incorporating technology for adaptive learning experiences.</li>
                    <li><strong>Inclusive Classroom Environment:</strong> We actively foster a classroom culture that values diversity and promotes inclusivity, creating a welcoming space for all students.</li>
                </ul>
            </div>
        </div>
    </div>
</section>

        <div className="container-fluid row d-flex flex-row map01">
        <div className="col-lg-1"></div>
        <div className="col-lg-10 ">
            <div className="mt-5 mb-5">
            <iframe className="map1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4481599267224!2d77.61918447581077!3d12.94314951549992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1143faf54fe7%3A0xcd637c9daad0a2b0!2sKGiSL%20MicroCollege!5e0!3m2!1sen!2sin!4v1703479004307!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
           
       </div>
        <div className="col-lg-1"></div>
        <div></div>
        </div>
        <div>

            <div className="container-fluid row">
                
            
                <div className="col-lg-1"></div>
                <div className="col-lg-6">
                <h1> Get In Touch</h1>
                
<textarea  className="mb-5 mt-5 col-11 gap-1 p-5" placeholder="Enter a Message" ></textarea> <br/> <br/>
<input  className="col-6 p-4" type="text" placeholder="Enter your name"/>
<input className="col-5 ms-1 p-4" type="email" placeholder="Enter your email"/>  <br/> <br/>
<input  className="col-lg-11 p-4" type="text" placeholder="Enter your subject "/> <br/> <br/>
<button type="button" class="btn btn-outline-success">S E N D</button>
                </div>
                <div className="col-lg-3 mt-5">
                    <div className="row container-fluid mt-5">
                        <div className="col-3 mt-4">
                        <FontAwesomeIcon className="container-fluid" icon={faBuilding} />
                        </div>
                        <div className="col-9">
                            <h3>Bangalore, karnataka</h3>
                            <h4 className="text-muted">kormangala-595004</h4>
                            
                        </div>
                    </div>
                    <div className="row container-fluid">
                        <div className="col-3 mt-4">
                        <FontAwesomeIcon  className="container-fluid" icon={faMobileScreenButton} />
                        </div>
                        <div className="col-9">
                            <h3>-981 805 9564</h3>
                            <h4 className="text-muted">Mon to Fri 9am to 6pm</h4>
                            
                        </div>
                    </div>
                    <div className="row container-fluid">
                        <div className="col-3 mt-4">
                        <FontAwesomeIcon className="container-fluid" icon={faEnvelope} />
                        </div>
                        <div className="col-9">
                            <h3>support@kgisl.com</h3>
                            <h4 className="text-muted">Send us your query at anytime</h4>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-2"></div>


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