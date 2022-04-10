import * as React from "react";
import { Helmet } from "react-helmet";
import styled, { createGlobalStyle } from "styled-components";
import Background from "./Background";
import Header from "./Header";

const Style = createGlobalStyle`
    body {
        color: white;
        background-color: #121212;
        margin: 0;
        font-family: 'Roboto';
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #191919;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
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
`;

const BodyWrapper = styled.main`
    display: flex;
    flex-direction: column;
    position: relative;
    flex: 1 1 auto;
    max-width: 1500px;
    margin: 0 auto;
`;

export default function Page({ title, children }: { title: string; children?: React.ReactNode; }) {
    return (
        <React.Fragment>
            <Helmet>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
                <title>{title} | Raza Mahmood</title>
            </Helmet>
            <Style />
            <Background />
            <PageWrapper>
                <Header />
                <BodyWrapper>{children}</BodyWrapper>
            </PageWrapper>
        </React.Fragment>
    )
}