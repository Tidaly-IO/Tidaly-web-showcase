import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TrackVisibility from 'react-on-screen';


// Mobile Pictures Img
import loginM from '../assets/img/mobile/login.png';
import subscribeM from '../assets/img/mobile/subscribe.png';
import homepageM from '../assets/img/mobile/homepage.png';
import profileM from '../assets/img/mobile/profile.png';
import sensorsAddM from '../assets/img/mobile/sensorsAdd.png';
import sensorStatWithoutGlobalConsumptionM from '../assets/img/mobile/sensorStatsWithoutGlobalConsumption.png';
import sensorStatWithGlobalConsumptionM from '../assets/img/mobile/sensorStatWithGlobalConsumption.png';
import statsM from '../assets/img/mobile/stats.png';
// END Mobile Pictures Img

// Web Pictures Img
import loginW from '../assets/img/web/loginWeb.png';
import subscribeW from '../assets/img/web/subscribeWeb.png';
import homepageW from '../assets/img/web/homepageWeb.png';
import profileW from '../assets/img/web/profileWeb.png';
import sensorsAddW from '../assets/img/web/sensorsAddWeb.png';
import sensorStatWithoutGlobalConsumptionW from '../assets/img/web/sensorStatsWithoutGlobalConsumptionWeb.png';
import metsensorStatWithGlobalConsumptionW from '../assets/img/web/sensorStatWithGlobalConsumption Web.png';
import statsW from '../assets/img/web/statsWeb.png';
// Web Pictures Img

// Hardware Pictures Img
import hub from '../assets/img/hardware/hub.png';
import sensorMeterFlow from '../assets/img/hardware/sensorMeterFlow.png';
// Web Pictures Img


export const Projects = () => {

  const mobileImages = useMemo(
    () => [
      { src: loginM, alt: 'Image', title: 'Connexion', description:"La page de connexion vous permettra de vous connecter à votre application Tidaly."},
      { src: subscribeM, alt: 'Image', title: 'Inscription', description:"La page d’inscription vous permettra de créer un compte chez Tidaly. Votre page d’accueil vous aidera rapidement à prendre connaissance de votre consommation du jour mais également à prendre connaissance de votre consommation sur la semaine et sur le mois actuel." },
      { src: homepageM, alt: 'Image', title: 'Accueil', description:"Votre page d’accueil vous aidera rapidement à prendre connaissance de votre consommation du jour mais également à prendre connaissance de votre consommation sur la semaine et sur le mois actuel." },
      { src: statsM, alt: 'Image', title: 'Statistiques', description:"La page statistiques vous donnera les informations nécessaires pour une analyse complète de votre consommation d’eau en litres et en euros dans le temps." },
      { src: sensorsAddM, alt: 'Image', title: 'Mes capteurs', description:"La page capteurs vous donnera la possibilité d’enregistrer vos matériels Tidaly Hub connectés ou bien capteur(s) par point d’eau. Vous aurez également la possibilité de prendre connaissance de la consommation actuelle de votre Hub et de vos capteurs par point d’eau." },
      { src: sensorStatWithGlobalConsumptionM, alt: 'Image', title: 'Statistiques de consommation des capteurs sur la consommation globale', description:"La page répartition de consommation vous donnera les informations sur votre consommation d’eau en litres et en euros dans le temps mais également réparties selon vos capteurs par point d’eau. Vous pourrez également sélectionner une date et relever l’historique des dernières consommations sur quel point d’eau." },
      { src: sensorStatWithoutGlobalConsumptionM, alt: 'Image', title: 'Statistiques de consommation globale des capteurs', description:"La page répartition de consommation partie 2 vous donnera les informations sur votre consommation d’eau en litres et en euros dans le temps mais réparties seulement sur vos capteurs par point d’eau. Vous pourrez également sélectionner une date et relever l’historique des dernières consommations sur quel point d’eau." },
      { src: profileM, alt: 'Image', title: 'Profil utilisateur', description:"La page profil utilisateur vous permettra de gérer votre compte utilisateur, concernant l’image, les informations, et la suppression du profil utilisateur. C’est également sur cette page que vous pourrez vous déconnecter." },
    ],
    []
  );

  const webImages = useMemo(
    () => [

      { src: loginW, alt: 'Image', title: 'Connexion', description:"La page de connexion vous permettra de vous connecter à votre application Tidaly."},
      { src: subscribeW, alt: 'Image', title: 'Inscription', description:"La page d’inscription vous permettra de créer un compte chez Tidaly. Votre page d’accueil vous aidera rapidement à prendre connaissance de votre consommation du jour mais également à prendre connaissance de votre consommation sur la semaine et sur le mois actuel." },
      { src: homepageW, alt: 'Image', title: 'Accueil', description:"Votre page d’accueil vous aidera rapidement à prendre connaissance de votre consommation du jour mais également à prendre connaissance de votre consommation sur la semaine et sur le mois actuel." },
      { src: statsW, alt: 'Image', title: 'Statistiques', description:"La page statistiques vous donnera les informations nécessaires pour une analyse complète de votre consommation d’eau en litres et en euros dans le temps." },
      { src: sensorsAddW, alt: 'Image', title: 'Mes capteurs', description:"La page capteurs vous donnera la possibilité d’enregistrer vos matériels Tidaly Hub connectés ou bien capteur(s) par point d’eau. Vous aurez également la possibilité de prendre connaissance de la consommation actuelle de votre Hub et de vos capteurs par point d’eau." },
      { src: metsensorStatWithGlobalConsumptionW, alt: 'Image', title: 'Statistiques de consommation des capteurs sur la consommation globale', description:"La page répartition de consommation vous donnera les informations sur votre consommation d’eau en litres et en euros dans le temps mais également réparties selon vos capteurs par point d’eau. Vous pourrez également sélectionner une date et relever l’historique des dernières consommations sur quel point d’eau." },
      { src: sensorStatWithoutGlobalConsumptionW, alt: 'Image', title: 'Statistiques de consommation globale des capteurs', description:"La page répartition de consommation partie 2 vous donnera les informations sur votre consommation d’eau en litres et en euros dans le temps mais réparties seulement sur vos capteurs par point d’eau. Vous pourrez également sélectionner une date et relever l’historique des dernières consommations sur quel point d’eau." },
      { src: profileW, alt: 'Image', title: 'Profil utilisateur', description:"La page profil utilisateur vous permettra de gérer votre compte utilisateur, concernant l’image, les informations, et la suppression du profil utilisateur." },
    ],
    []
  );

  const hardwareImages = useMemo(
    () => [
      { src: hub, alt: 'Image', title: 'Hub connecté', description:"Le hub connecté est un dispositif qui se positionnera directement sur votre compteur d'eau. Il sera la solution pour récupérer les informations de votre consommation globale en mètres cubes. Par la suite, celles-ci vous seront transmises directement via votre application Tidaly."},
      { src: sensorMeterFlow, alt: 'Image', title: 'Capteur par point d\'eau', description:"(En cours) Le capteur par point d'eau sera la solution qui vous permettra de relever votre consommation sur chaque point d'eau de votre maison." },
    ],
    []
  );

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
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

  const [activeTab, setActiveTab] = useState('first');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const MemoizedCarousel = React.memo(({ images }) => (
    <Carousel responsive={responsive} className="projectS-slider" infinite={true} showDots={true}>
      {images.map((image, index) => (
        <div className="item" key={index}>
          <h2 style={{ color: "black" }}>{image.title}</h2>
          <p style={{ color: "black" }}>{image.description}</p>
          <img src={image.src} alt={image.alt} style={{ width: image.src.includes("W") ? "80%" : "30%" }} />
        </div>
      ))}
    </Carousel>
  ));

  const MemoizedCarouselMobile = React.memo(({ images }) => (
    <Carousel responsive={responsive} className="projectS-slider" infinite={true} showDots={true}>
      {images.map((image, index) => (
        <div className="item" key={index}>
          <h2 style={{ color: "black" }}>{image.title}</h2>
          <p style={{ color: "black" }}>{image.description}</p>
          <img src={image.src} alt={image.alt}/>
        </div>
      ))}
    </Carousel>
  ));

  const MemoizedCarouselHardware = React.memo(({ images }) => (
    <Carousel responsive={responsive} className="projectS-slider" infinite={true} showDots={true}>
      {images.map((image, index) => (
        <div className="item" key={index}>
          <h2 style={{ color: "black" }}>{image.title}</h2>
          <p style={{ color: "black" }}>{image.description}</p>
          <img src={image.src} alt={image.alt}/>
        </div>
      ))}
    </Carousel>
  ));

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Projet</h2>
                  <p style={{ color: 'white' }}>
                      <b>
                      Tidaly est une application web et mobile pour surveiller votre consommation d'eau en temps réel.

                      Suivez votre consommation sur chaque point d'eau, chez vous ou bien en déplacement.

                      Avec l'analyse de données, les alertes et le coaching personnalisé, économisez de l'eau et de l'argent en
                      comprenant votre consommation.

                      <hr style={{ border:'3px solid #bbb;' }}></hr>
                      </b>
                  </p>
                  <Tab.Container id="projects-tabs" activeKey={activeTab} onSelect={handleTabChange}>
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          <b>Web</b>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          <b>Mobile</b>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          <b>Matériel</b>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          <Col>
                            <div className="CarousselP-bx wow zoomIn">
                              <MemoizedCarousel images={webImages} />
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <Col>
                            <div className="CarousselP-bx wow zoomIn">
                              <MemoizedCarouselMobile images={mobileImages} />
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <Col>
                            <div className="CarousselP-bx wow zoomIn">
                              <MemoizedCarouselHardware images={hardwareImages} />
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <h1 style={{ color: '#64a9ea' }}>d</h1>
    </section>
    
  );
};

