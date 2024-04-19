import { useState, useRef } from "react"; 
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img-svg.svg";
import TrackVisibility from 'react-on-screen';


export const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [sendError, setSendError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm('service_26pe0vk', 'template_32i210o', form.current, {
        publicKey: 'Woq2O9hG4Ep7KDFnI',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSending(false);
          setIsSent(true);
          setSendError(false);
          form.current.reset();
          setTimeout(() => {
            setIsSent(false);
          }, 5000); // Masquer le message envoyé après 5 secondes
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSending(false);
          setIsSent(false);
          setSendError(true);
        },
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2 style={{ color: 'black' }}>Contacter </h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="Prénom"  name="name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="Nom"  name="lastName"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" placeholder="Email" name="mail"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" placeholder="Téléphone" name="phoneNumber"/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" placeholder="Message"  name="message"></textarea>
                      {isSending ? (
                        <button disabled><span>Envoi en cours...</span></button>
                      ) : (
                        <button type="submit" value="Send"><span>Envoyer</span></button>
                      )}
                    </Col>
                  </Row>
                </form>
                {isSent && (
                  <div className="sent-message success">Le message a été envoyé avec succès!</div>
                )}
                {sendError && (
                  <div className="sent-message error">Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.</div>
                )}
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
