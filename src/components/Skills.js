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
                                <div>
                                    <h3>A little bit more about myself, I love creating.</h3>
                                    <p>
                                        I was a graphic design student and was very intruiged with the concept of UI/UX and programming.
                                        But i took a detour in my career path and tried to fit my hobby as a career, I worked as a photographer/videographer
                                        commercially for about 6 years until COVID and decided to take a new path in life. To combine both my creative mind and tech interests
                                        I decided to take a course in Software Development and here I am. I love learning the whole aspect and the fulfillment of making things work.
                                    </p>
                                </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}