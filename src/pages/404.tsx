import * as React from "react";
import styled from "styled-components";
import Page from "../components/Page";

const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color: rgba(255, 255, 255, .05);  
    backdrop-filter: blur(5px);
    border-radius: 10px;
    font-size: 18px;
    text-align: center;
`;

export default function NotFoundPage() {
    return (
        <Page title="Page Not Found">
            <Content>
                <h1>Page Not Found</h1>
                <h2>The page you requested does not exist</h2>
            </Content>
        </Page>
    )
}