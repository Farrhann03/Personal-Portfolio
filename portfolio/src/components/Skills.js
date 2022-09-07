import React from 'react';
import { Container, Row, Col } from "react-bootstrap"
import {BsPatchCheckFill} from 'react-icons/bs';


export const Skills = () => {
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <h4>What I have in experience</h4>
                            <div className="skill-container-experience">
                                <div className='skill-experience-content'>
                                    <article className="skill-experience-skills">
                                        <BsPatchCheckFill className='skill-experience-icons'/>
                                            <div>
                                                <h5>HTML</h5>
                                            </div>
                                    </article>
                                    <article className="skill-experience-skills">
                                        <BsPatchCheckFill className='skill-experience-icons'/>
                                            <div>
                                                <h5>CSS</h5>
                                            </div>
                                    </article>
                                    <article className="skill-experience-skills">
                                        <BsPatchCheckFill className='skill-experience-icons'/>
                                            <div>
                                                <h5>JavaScript</h5>
                                            </div>
                                    </article>
                                    <article className="skill-experience-skills">
                                        <BsPatchCheckFill className='skill-experience-icons'/>
                                            <div>
                                                <h5>React.JS</h5>
                                            </div>
                                    </article>
                                    <article className="skill-experience-skills">
                                        <BsPatchCheckFill className='skill-experience-icons'/>
                                            <div>
                                                <h5>React Native</h5>
                                            </div>
                                    </article>
                                    <article className="skill-experience-skills">
                                        <BsPatchCheckFill className='skill-experience-icons'/>
                                            <div>
                                                <h5>GIT</h5>
                                            </div>
                                    </article>
                                    <article className="skill-experience-skills">
                                        <BsPatchCheckFill className='skill-experience-icons'/>
                                            <div>
                                                <h5>Agile Scrum</h5>
                                            </div>
                                    </article>
                                    <article className="skill-experience-skills">
                                        <BsPatchCheckFill className='skill-experience-icons'/>
                                            <div>
                                                <h5>PostGres SQL</h5>
                                            </div>
                                    </article>
                                    <article className="skill-experience-skills">
                                        <BsPatchCheckFill className='skill-experience-icons'/>
                                            <div>
                                                <h5>Node.JS</h5>
                                            </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}