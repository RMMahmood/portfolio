import * as React from "react";
import Page from "../components/Page";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Card = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 500px;
    padding: 25px;
    background-color: rgba(31,31,31,0.750);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    text-align: center;
    backdrop-filter: blur(50px);

    a {
        display: block;
        color: white;
        transition: color ease-in 200ms;
        text-decoration: none;

        &:hover {
            color: #BB86FC;
        }
    }
`

const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    font-size: 25px;

    a {
        padding: 0 5px 0 5px;
    }
`

export default function IndexPage() {
    return (
        <Page title="Home">
            <Card>
                <div>
                    <StaticImage src="../images/headshot.jpg" alt="Raza's Headshot" width={200} height={200} style={{ borderRadius: '50%' }}></StaticImage>
                    <h1>Raza Mahmood</h1>
                    <p>I am a 5th year computer science co-op student at the University of Guelph who specializes in front end web development.</p>


                    <a href="mailto:rmahmood@uoguelph.ca">rmahmood@uoguelph.ca</a>
                    <a href="mailto:razammahmood@gmail.com">razammahmood@gmail.com</a>

                    <SocialLinks>
                        <a aria-label="Github" href="https://github.com/RMMahmood">
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                        </a>
                        <a aria-label="LinkedIn" href="https://www.linkedin.com/in/rmmahmood/">
                            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                        </a>
                    </SocialLinks>

                </div>
            </Card>
        </Page>
    )
}
