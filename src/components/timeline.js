import React, { useEffect } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { Chrono } from "react-chrono";
import ideation from "../assets/img/timeline/ideation.jpg";
import hacking from "../assets/img/timeline/hacking.png";
import testAndLearn from "../assets/img/timeline/testeAndLearn.jpg";
import management from "../assets/img/timeline/management.jpg";
import alpha from "../assets/img/timeline/alpha.jpg";
import beta from "../assets/img/timeline/beta.jpg";

const Home = () => {
  const items = [{
    title: "IDÉATION ET RECHERCHE",
    cardTitle: " ",
    url: "http://www.history.com",
    // cardSubtitle:"Les débuts",
    cardDetailedText: "Brainstorming autour de l'idée de Tidaly. Mise en contact avec l'entreprise DIELH METERING et d'autres entreprises dans le secteur de l'eau pour comprendre et savoir si Tidaly est une solution viable.",
    media: {
      type: "IMAGE",
      source: {
        url: ideation
      }
    }
  },

  {
    title: "HACKING INDUSTRY CAMP",
    // cardSubtitle: "Event Subtitle",
    // https://www.linkedin.com/feed/update/urn:li:activity:7003375097554083840/
    cardDetailedText: "Tidaly participe pour la première fois à un concours entrepreneurial et remporte le prix de la meilleure solution IoT (Internet des Objets).",
    media: {
        type: "IMAGE",
        source: {
          url: hacking
        }
      }
  },

  {
    title: "TESTE ET APPRENTISSAGE",
    // cardSubtitle: "Event Subtitle",
    cardDetailedText: "Création du groupe Tidaly comptant 6 membres. Premier avancement sur l'application mobile/web et sur la solution principale, le hub connecté.",
    media: {
        type: "IMAGE",
        source: {
          url: testAndLearn
        }
      }
  },

  {
    title: "MANAGEMENT ET PROCESSUS",
    // cardTitle: "Event Title",
    // cardSubtitle: "Event Subtitle",
    cardDetailedText: "Création de règles au sein de l'équipe et de son organisation dans le temps pour la bonne avancée du projet. Amélioration en parallèle sur l'application mobile/web et le hub connecté.",
    media: {
        type: "IMAGE",
        source: {
          url: management
        }
      }
  },

  {
    title: "ALPHA PROTOTYPE",
    cardDetailedText: "Solution web et mobile ayant la possibilité de récupérer et d'afficher les données de consommation de votre maison. Cependant, la solution du Hub connecté n'est pas encore finalisée.",
    media: {
        type: "IMAGE",
        source: {
          url: alpha
        }
      }
  },

  {
    title: "BETA PROTOTYPE",
    cardDetailedText: "Amélioration des fonctionnalités sur les solutions mobile et web. Finalisation de la partie technique du Hub connecté et premier prototype de nos capteurs par point d'eau.",
    media: {
        type: "IMAGE",
        source: {
          url: beta
        }
      }
  },

//   {
//     title: "PROCHAINEMENT",
//     cardTitle: "Event Title",
//     cardSubtitle: "Event Subtitle",
//     cardDetailedText: "Detailed description of the event.",
//   },

];

  return (

    <div style={{ width: "100%", margin: "auto", marginBottom: "-80px" }}>
        <Chrono items={items}
            itemWidthRatio={0.5}
            useReadMore={true}
            mode="VERTICAL_ALTERNATING"
            slideShow
            cardHeight={340}
            mediaHeight={310}
            theme={{
                primary:  "#FFF",
                secondary: "#FFF",
                cardBgColor: "#FFF",
                cardForeColor: "#000",
                titleColor: 'white',
                titleColorActive: 'black',
                datePadding: "100px",
            }}
            disableToolbar
            buttonTexts={{
                first: 'Jump to First',
                last: 'Jump to Last',
                next: 'Next',
                previous: 'Previous',
              }}
        />
    </div>
  )
}

const Timeline = () => {

  return (
    <div style={{ backgroundColor: '#64a9ea'}} id="timeline">
        <div style={{ padding: '0 100px' , marginTop:'-20px'}}>
            <section className="project" id="projects" >

            <Container>
                <Row>
                <Col>

                        <h2>Historique des aventures de Tidaly</h2>
                        <p></p>
                        <p style={{ color: 'white' }}>
                            <b>
                            <hr style={{ border:'3px solid #bbb;' }}></hr>
                            </b>
                        </p>

                        <Home></Home>

                </Col>
                </Row>
            </Container>
            </section>
        </div>
    </div>

  );
};

export default Timeline;
