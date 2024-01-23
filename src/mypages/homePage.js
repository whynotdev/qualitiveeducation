import { Layout } from "./layout";
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
export function HomePage(){
    return(
    <>

    <Layout/>
    <section>
    <div className="hero1 col-lg-12 text-light">
            <div className="row">
            <div className="col-lg-2 col-sm-1"></div>
               <div className="col-lg-5 col-xl-7 col-sm-12 col-md-12 smscreen  px-sm-3">
                <span class="sp1 my-3">Building Bridges to Quality Education</span>
                <h1 className="h11 my-3 ">contribute to the improvement <br/>of education in India</h1>
                <p class="p1 my-4">This platform can offer video lessons, interactive quizzes,<br/> and other resources to supplement traditional classroom learning.
               </p>
                <a href="#" class=" btn bg-success py-3 px-4 text-light a12" >Get Started Now</a>
               </div>
               <div className="col-lg-5 col-sm-1"></div>
            </div>

        </div>
        </section>
        <section>
        <div className=" row hero2 mb-5 ">
            <div className="mt-5 row d-flex flex-row container-fluid">
                <div className="col-lg-1"></div>
            <div className="col-lg-5 col-md-6  col-sm-12 my-5">
                <img  className="container-fluid" src="https://images.pexels.com/photos/3772508/pexels-photo-3772508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
             <h1 className="text-dark font-weight-bold">A COMPHRENSHINIVE <br/>TEACHING APPROACH</h1>
             <p className="text-muted hero2Pages mt-4"> 
             Multimodal Instruction: different learning styles for a more engaging learning experience.<br/><br/>
             Inquiry-Based Learning: Provide additional support or challenges based on student requirements.<br/><br/>
             Real-World Connections: Relate lessons to practical applications in the real world.<br/><br/>
             Community Involvement: Establish communication channels with parents and involve the community in the educational process.
             </p>
             <a className="text-success hero2anchor mt-5">Learn More</a>
            </div>
            </div>
        </div>
        </section>


        <div className="">
            <div className="text-center row col-12">
            <h1 className="text-dark font-weight-bold">PROGRAMS WE OFFER</h1>  
            <p className="text-muted hero2Pages">
            various aspects of education to ensure a holistic and thorough learning experience for students.<br/>
            metus, sed Your Gateway to Smart Learning and Skill Building
             </p>
            </div>
            <div className="col-lg-12 row gap-4 d-flex flex-row">
            <div className="col-lg-2"></div>
                <div className="col-lg-4 card hero3cd">
                <div class="card mb-3 mt-3">
                    <img src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/blog1.jpg.webp" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <a class="card-title hero3an">Computer Science </a>
                        <p class="card-text">A foundational course covering basic programming concepts and computer science fundamentals.</p>
                        <a className="text-success hero2anchor">Learn More</a>
                    </div>
                </div>
            </div>
                <div className="col-lg-4 card hero3cd">
                <div class="card mb-3 mt-3">
                    <img src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/blog2.jpg.webp" class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <a class="card-title hero3an">Digital Literacy</a>
                        <p class="card-text">An introductory course on navigating the digital world, understanding online safety.</p>
                        <a className="text-success hero2anchor">Learn More</a>
                    </div>
                </div>

                </div>
                <div className="col-lg-2"></div>
            </div>

        </div>
      <section>
        <div className="container-fluid row d-flex flex-row">
            <div className="col-lg-6 col-sm-12 col-md-6">
                <div className="text-center">
                <h1 className="text-dark font-weight-bold">ESSENTIAL RESOURCES</h1>  
            <p className="text-muted hero2Pages">
            Providing essential resources freely can contribute significantly to promoting education<br/>

             </p>
                </div>
                <div>
                  <div className="card container-fluid row d-flex flex-row p-2 m-3 pot1">
                     <div className="col-6">
                <h4 className="fg">Digital Library</h4>  
            <p className="text-muted">
            A free digital library serves as a valuable resource, offering a diverse range of<br/>
            educational materials accessible to users worldwide.
             </p></div>
                     <div className="col-3"></div>
                     <div className="col-3 mt-5">
                      <a href="#" className="pot p-4">< FontAwesomeIcon className="gf" icon={faAngleRight} /></a>
                     </div>
                  </div>
                </div>
                <div>
                  <div className="card container-fluid row d-flex flex-row p-2 m-3 pot1">
                     <div className="col-6">
                <h4 className="fg">Coding and Programming Resources:</h4>  
            <p className="text-muted">
            Create coding challenges and exercises to help individuals develop programming skills.<br/>
            Encourage participation in open source projects to promote collaborative coding.
             </p></div>
                     <div className="col-3"></div>
                     <div className="col-3 mt-5">
                      <a href="#" className="pot p-4">< FontAwesomeIcon className="gf" icon={faAngleRight} /></a>
                     </div>
                  </div>
                </div>
                <div>
                  <div className="card container-fluid row d-flex flex-row p-2 m-3 pot1">
                     <div className="col-6">
                <h4 className="fg">Civic Education and Awareness:</h4>  
            <p className="text-muted">
            Offer resources on civic responsibilities, democracy, and social issues.<br/>
            Develop content that raises awareness on important societal issues.
             </p></div>
                     <div className="col-3"></div>
                     <div className="col-3 mt-5">
                      <a href="#" className="pot p-4">< FontAwesomeIcon className="gf" icon={faAngleRight} /></a>
                     </div>
                  </div>
                </div>


            </div>
            <div className="col-lg-6 col-sm-12">
                <img class="container-fluid" src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/visit1.jpg.webp"/>

            </div>
        </div>
        </section>

    <div className="col-12 row d-flex flex-row mt-5 text-muted">
    
        <div className="col-lg-4 text-center">
            <div > <img class="container-fluid mb-3" src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/class-img1.jpg.webp"/>
            <h3>This is one step ahed to real world <br/>
            That's what make you strong<br/>
            Out of comfort zone</h3>
            </div>
            
        </div>
        <div className="col-lg-4 text-center">
        <div > <img class="container-fluid mb-3" src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/class-img2.jpg.webp"/>
        <h3>This is one step ahed to real world <br/>
            That's what make you strong<br/>
            Out of comfort zone</h3>
        </div>
        </div>
        <div className="col-lg-4 text-center">
        <div > <img class="container-fluid mb-3" src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/class-img3.jpg.webp"/>
        <h3>This is one step ahed to real world <br/>
            That's what make you strong<br/>
            Out of comfort zone</h3>
        </div>
        </div>
    

    </div>
    <hr/>
    <div>
    <div className="text-center row col-12 mt-5">
            <h1 className="text-dark font-weight-bold">OUR PARTNERS</h1>  
            <p className="text-muted hero2Pages">
            Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus <br/>
            metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa.
             </p>
             <div class="image-slider mt-5">
  <div>
    <div className="">
    <marquee><p className="displayin"> Coding Ninja |  IQvia    |  KGiSL  </p></marquee>
      
      
      {/* <!-- Add more image elements as needed --> */}
    </div>
  </div>
</div>


     </div>
    </div>

    <section>
    
        <div className="container">
            <div className="row">
                <div>

                </div>
            </div>

        </div>
    </section>

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
    </>);
}