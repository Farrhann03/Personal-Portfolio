import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons"; 
import todoList from "../assets/images/todo list thumbnail.svg";
import covidChecker from "../assets/images/covid checker thumbnail.svg";
import supperMakanApa from "../assets/images/supper thumbnail.svg";

export const Projects = () => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'nopener,noreferrer');
    };

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>sample of projects worked on</p>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Project 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Project 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Project 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Container>
                                        <Row>
                                            <Col>
                                                <img className="project-listbox" height={1920} width={1200} src={todoList} alt="" />
                                                <Col xs={15} md={9} xl={8}>
                                                    <button onClick={() => openInNewTab('https://github.com/Farrhann03/Farhan-Project-1-todo-list')}>View my project code<ArrowRightCircle size={25}/></button>
                                                    <button onClick={() => openInNewTab('https://farrhann03.github.io/Farhan-Project-1-todo-list/')}>View project live<ArrowRightCircle size={25}/></button>
                                                </Col>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Container>
                                        <Row>
                                            <Col>
                                                <img className="project-listbox" height={1920} width={1200} src={covidChecker} alt=""/>
                                                <Col xs={15} md={9} xl={8}>
                                                    <button onClick={() => openInNewTab('https://github.com/Farrhann03/covid-tracker')}>View my project code<ArrowRightCircle size={25}/></button>
                                                    <button onClick={() => openInNewTab('https://Ocean272.github.io/covid-tracker/')}>View project live<ArrowRightCircle size={25}/></button>
                                                </Col>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Container>
                                        <Row>
                                            <Col>
                                                <img className="project-listbox" height={1920} width={1200} src={supperMakanApa} alt=""/>
                                                <Col xs={18} md={12} xl={11}>
                                                    <button onClick={() => openInNewTab('https://github.com/Farrhann03/Group1-project4')}>View my frontend code<ArrowRightCircle size={25}/></button>
                                                    <button onClick={() => openInNewTab('https://github.com/Farrhann03/Group-1_Project-3')}>View my backend code<ArrowRightCircle size={25}/></button>
                                                    <button onClick={() => openInNewTab('https://snack.expo.dev/@farrhann/supper-makan-apa')}>View project live<ArrowRightCircle size={25}/></button>
                                                </Col>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-right" src={colorSharp2} /> */}
        </section>
    )
}