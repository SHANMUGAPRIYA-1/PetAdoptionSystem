import React, { useEffect } from "react";
import Header from "./Header";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import "./App.css";

const LandingPage = () => {
  useEffect(() => {
    const handleNavClick = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute("href").substring(1);

      if (targetId === "") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      }
    };

    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavClick);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleNavClick);
      });
    };
  }, []);

  return (
    <>
      <Header />
      <div className="outer-container">
        <div className="inner-box">
          <h1 className="main-heading">
            Adopt <span>love</span>,<br /> foster <span>happiness</span>.
          </h1>
          <div className="horizontal-container">
            <div className="review-section">
              <h3 className="review-title">Our happy pet owners</h3>
              <p className="review-rating">⭐ 4.8 (1.5k Reviews)</p>
              <div className="review-images">
                <img src="https://th.bing.com/th/id/OIP.A5rbQInLYsk9WRWsSvVG4wHaLH?w=140&h=209&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="User 1" className="review-avatar" />
                <img src="https://th.bing.com/th/id/OIP.H9UYen-_zre2XDocB14GZQHaEK?w=321&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="User 2" className="review-avatar" />
                <img src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="User 3" className="review-avatar" />
                <span className="review-avatar">+3k</span>
              </div>
            </div>

            <div className="image-container">
              <img src="/landingpage.png" alt="Adopt a pet" />
            </div>

            <div className="text-content">
              <h3 className="info-title">WHAT WE DO?</h3>
              <p className="info-text">
                With a focus on matching the right pet with the right family,
                P makes it easy to adopt love and foster happiness.
              </p>
              <button className="info-button">View pets</button>
            </div>
          </div>
        </div>
      </div>
      
      <div id="about">
        <About />
      </div>
      
      <div id="services">
        <Service />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default LandingPage;
