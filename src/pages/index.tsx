import * as React from "react";
import Page from "../components/Page";
import styled from "styled-components";
import ExternalLink from "../components/ExternalLink";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 500px;
    padding: 25px;
    background-color: rgba(31,31,31,0.750);
    border-radius: 8px;
    flex-direction: column;
    margin: auto 20px;
    text-align: center;
    backdrop-filter: blur(15px);
    row-gap: 15px;

    @media only screen and (min-width: 540px) {
        margin: auto;
    }
    
    >*{
        margin: 0;
    }
`;

const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
`;

export default function IndexPage() {
    return (
        <Page title="Home">
            <Card>
                <StaticImage src="../images/headshot.jpg" alt="Raza's Headshot" width={200} height={200} style={{ borderRadius: '50%' }}></StaticImage>
                <h1>Raza Mahmood</h1>
                <p>I am a 5th year computer science co-op student at the University of Guelph who specializes in front end web development.</p>

                <ExternalLink href="mailto:razammahmood@gmail.com">razammahmood@gmail.com</ExternalLink>

                <SocialLinks>
                    <ExternalLink aria-label="Github" href="https://github.com/RMMahmood">
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </ExternalLink>
                    <ExternalLink aria-label="LinkedIn" href="https://www.linkedin.com/in/rmmahmood/">
                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </ExternalLink>
                </SocialLinks>
            </Card>
        </Page>
    )
}
