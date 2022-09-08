import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCards } from "./ProjectCards";
// import colorSharp2 from "../assets/images/colorSharp2";
import projImg2 from "../assets/images/Profile.png";

export const Projects = () => {

    const projects = [
        {
            title: "To-do List Web Application",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Covid Status Checker Web Application",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Supper Makan Apa? Application Backend API",
            description: "Development",
            imgUrl: projImg2,
        },
        {
            title: "Supper Makan Apa? Mobile Application",
            description: "Design & Development",
            imgUrl: projImg2,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>sample of projects worked on</p>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return(
                                                    <ProjectCards
                                                        key={index}
                                                        {...project}
                                                        />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">sample</Tab.Pane>
                                <Tab.Pane eventKey="third">sample</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-right" src={colorSharp2} /> */}
        </section>
    )
}