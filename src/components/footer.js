import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1-white.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="text-center pt-5">
            <div className="social-icon2">
              <a href="https://www.linkedin.com/in/nathan-sabourdy-9aa552174" target="_blank"><img src={navIcon1} alt="Icon" /></a>
            </div>
            <p style={{ color: 'white' }}>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}