import React, { useState, useEffect } from 'react';
import meter2 from "../assets/img/team/Nathan-Team22.png";
import meter1 from "../assets/img/team/Philippe-Team.png";
import meter3 from "../assets/img/team/Killian-Team.png";
import meter4 from "../assets/img/team/Maxime-Team.png";
import meter5 from "../assets/img/team/Isaak-Team.png";
import meter6 from "../assets/img/team/Clement-Team.png";
import meter7 from "../assets/img/team/Quentin-Team.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';





export const Skills = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  useEffect(() => {
    console.log("slide Index Next 2 -->", slideIndex);
  }, [slideIndex]); // Dependency array ensures useEffect runs when slideIndex changes

  const handleNextClick = () => {
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
      <button className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left" onClick={() => { 
          
          handlePreviousButtonClick();
          
      }}></button>

      <button className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right" onClick={() => { next(); handleNextClick();}}></button>
      </div>
    );
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
        return "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text. Nathan SABOURDY";
      case 1:
        return "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text. Killian DESSERICH";
      case 2:
        return "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text. Maxime ROTH-FESSLER";
      case 3:
        return "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text. Isaak NICOLAS";
      case 4:
        return "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text. Clément BERNAT";
      case 5:
        return "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text. Quentin ROUVIER";
      case 6:
        return "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Philippe CHEYPE";
    }
  };

  return (
    <section className="skill" id="team">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Equipe</h2>
              <h3 style={{ color: "#64a9ea" }}>{renderNameTeamWorker(slideIndex)}</h3>

              <p>{renderPositionTeamWorker(slideIndex)}</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider" arrows={false} customButtonGroup={<ButtonGroup />}>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter7} alt="Image" />
                  <h5>Web Development</h5>
                </div>
              </Carousel>

              <p style={{ color: "black", margin: 0, padding: 0 }}>{(slideIndex + 1)+ "/7"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
