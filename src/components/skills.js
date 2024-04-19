import React, { useState, useEffect, useMemo } from 'react';
import meter2 from "../assets/img/team/Nathan-Team22.png";
import meter1 from "../assets/img/team/Philippe-Team.png";
import meter3 from "../assets/img/team/Killian-Team.png";
import meter4 from "../assets/img/team/Maxime-Team.png";
import meter5 from "../assets/img/team/Isaak-Team.png";
import meter6 from "../assets/img/team/Clement-Team.png";
import meter7 from "../assets/img/team/Quentin-Team.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Skills = () => {

  const [slideIndex, setSlideIndex] = useState(0);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  

  const CustomDot = ({ onClick, active }) => {
    return (

      <button
        className={`react-multi-carousel-dot-list ${active ? "active" : "inactive"}`}
        onClick={() => onClick()}
      >

      </button>
    );
  };

  const handleNextClick = (index) => {

    if (slideIndex == 6) {
      setSlideIndex(0)
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  const handlePrevClick = () => {

      if (slideIndex == 0) {
        setSlideIndex(6)
      } else {
        setSlideIndex(slideIndex - 1);
      }


  };


  const renderNameTeamWorker = (currentSlide) => {
    switch (currentSlide) {
      case 0:
        return "Nathan SABOURDY";
      case 1:
        return "Killian DESSERICH";
      case 2:
        return "Maxime ROTH-FESSLER";
      case 3:
        return "Isaak NICOLAS";
      case 4:
        return "Clément BERNAT";
      case 5:
        return "Quentin ROUVIER";
      case 6:
        return "Philippe CHEYPE";
    }
  };

  const renderPositionTeamWorker = (currentSlide) => {
    switch (currentSlide) {
      case 0:
        return "Développeur de la solution mobile iOS et de l’organisation au sein de l’équipe";
      case 1:
        return "Développeur de la solution web et mobile iOS";
      case 2:
        return "Développeur de la solution Back-End de Tidaly";
      case 3:
        return "Développeur de la solution Tidaly web. En charge également de la mise en place du matériel Hub et du capteur par point d’eau";
      case 4:
        return "Développeur de la solution Tidaly mobile Android";
      case 5:
        return "Développeur de la solution du système embarqué Hub connecté";
      case 6:
        return "Développeur de la solution du système embarqué Hub connecté";
    }
  };

  const renderPositionTeamWorkerLink = (currentSlide) => {
    switch (currentSlide) {
      case 0:
        return "https://www.linkedin.com/in/nathan-sabourdy-9aa552174/";
      case 1:
        return "https://www.linkedin.com/in/killian-desserich-ba2627212/";
      case 2:
        return "https://www.linkedin.com/in/maxime-roth-fessler-445b33204/";
      case 3:
        return "www.linkedin.com/in/nathan-sabourdy-9aa552174/";
      case 4:
        return "https://www.linkedin.com/in/cl%C3%A9ment-bernat-a8002b204/";
      case 5:
        return "https://www.linkedin.com/in/rouvierquentin/";
      case 6:
        return "https://www.linkedin.com/in/philippe-cheype/";
    }
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;

    const handlePreviousButtonClick = async () => {
      await previous();
      await handlePrevClick();
    };

    const handleNextButtonClick = async () => {
      await next();
      await handleNextClick();
    };

    return (
      <div className="carousel-button-group"> // remember to give it position:absolute
        <button aria-label="Go to previous slide" class="react-multiple-carousel__arrow react-multiple-carousel__arrow--left "  onClick={() => { next(); handlePreviousButtonClick();}} type="button"></button>

      <button aria-label="Go to previous slide" class="react-multiple-carousel__arrow react-multiple-carousel__arrow--right "  onClick={() => { next(); handleNextClick();}} type="button"></button>
      </div>
    );
  };



  return (
    <section className="skill" id="team">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Equipe</h2>

              <h3 style={{ color: "#64a9ea" }}>{renderNameTeamWorker(slideIndex)}</h3>
              <div className="social-icon">
                <a href={renderPositionTeamWorkerLink(slideIndex)} target="_blank"><img src={navIcon1} alt="Icon" /></a>
              </div>
              <p>{renderPositionTeamWorker(slideIndex)}</p>

              <Carousel responsive={responsive} className="skill-slider" infinite={true} showDots={true} CustomDot={CustomDot} arrows={false} customButtonGroup={<ButtonGroup />}  >
                <div className="item">
                    <img src={meter1} alt="Image" />
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Image" />
                  </div>
                  <div className="item">
                    <img src={meter3} alt="Image" />
                  </div>
                  <div className="item">
                    <img src={meter4} alt="Image" />
                  </div>
                  <div className="item">
                    <img src={meter5} alt="Image" />
                  </div>
                  <div className="item">
                    <img src={meter6} alt="Image" />
                  </div>
                  <div className="item">
                    <img src={meter7} alt="Image" />
                    <h5 style={{ color: "white"}}>fa</h5>
                    <h5 style={{ color: "white"}}>dz</h5>
                  </div>
              </Carousel>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
