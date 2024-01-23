import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { faFacebook, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


export function Layout() {
  useEffect(() => {
    const toggler = document.querySelector('.navbar-toggler');
    const navbar = document.querySelector('.navbar-collapse');

    toggler.addEventListener('click', function() {
      navbar.classList.toggle('show');
    });

    document.addEventListener('click', function(e) {
      if (!navbar.contains(e.target)) {
        navbar.classList.remove('show');
      }
    });
  }, []);



  return(
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand ms-5" to="/homePage">
            <img src="https://ucarecdn.com/0066e806-94bf-48f8-961b-5a1be2e234fe/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="Logo"  className="logo"/>
            FreeBee
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/homePage">
                  Home
                  <span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/coursePage">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teacherPage">
                 Teacher Trainings
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/blogPage"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                 Community
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/blogPage">
                    Blog
                  </Link>
                  <Link className="dropdown-item" to="/blogPage">
                    Free Sessions
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/blogPage">
                    Volunteer Teaching
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutPage">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <ul className="nav align-items-center">
                  <li className="nav-item">
                    <Link className="nav-link" to="https://www.facebook.com/">
                      <FontAwesomeIcon icon={faFacebook} />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="whynotmee52@gmail.com">
                      <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="www.linkedin.com/in/arif-afajal-395a80167">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="https://www.youtube.com/">
                      <FontAwesomeIcon icon={faYoutube} />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="https://www.gmail.com/">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>

        <Outlet />
      </div>
    </>
  );
}
