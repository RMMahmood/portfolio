import * as React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const Style = createGlobalStyle`
    body {
        color: white;
        background-color: #121212;
        margin: 0;
        font-family: 'Roboto';
    }

    * {
        box-sizing: border-box;
    }
`;

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 100vh;
    max-width: 1500px;
    margin: 0 auto 0 auto;
`;

const BodyWrapper = styled.main`
    position: relative;
    flex: 1 1 auto;
`;

export default function Page({ title, children }: { title: string; children?: React.ReactNode; }) {
    return (
        <React.Fragment>
            <Helmet>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
                <title>{title} | Raza Mahmood</title>
            </Helmet>
            <Style />
            <PageWrapper>
                <BodyWrapper>{children}</BodyWrapper>
            </PageWrapper>
        </React.Fragment>
    )
}