import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import ProfileImage from "../assets/images/Profile.png";

export const Banner = () => {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };


    return (
        <section className="banner" id="aboutme">
            <Container>
                <Row classname="align-items-center">
                    <Col>
                        <span className="tagline"> Welcome to my Portfolio</span>
                        <h1>{`Hello, I'm Farhan, a software developer. `}</h1>
                        <p>I love tech and creating. I'm a lifelong learner and I like taking photos.</p>
                        <button onClick={() => openInNewTab('https://drive.google.com/file/d/1NU6W2VPnJjM4BR7ScsR40bWQITH4GTiN/view?usp=sharing')}> View my CV <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={ProfileImage} alt="Profile Img" className="profile-image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}