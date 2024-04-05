import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import HeaderImg from "../assets/img/memoji4.png"
import { useState, useEffect } from "react"

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "l'eau"];
    const period = 500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    })

    const tick = () => {

        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>

                        <h1>{``}<span className="wrap">BIENVENUE !</span></h1>
                        <h1>{``}ENSEMBLE cultivons la sagesse de<span className="wrap2"> {text}</span></h1>
                        <p style={{ color: 'white' }}>Projet fondé en 2022</p>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <img src={HeaderImg} alt="Header Img" />
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

//<span className="tagline">Welcome to my Portfolio</span>
//en dessous de p pour le onClick
//<button onClick={() => console.log('connect')}> let's connect <ArrowRightCircle size={25}/> </button>