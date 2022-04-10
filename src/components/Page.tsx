import * as React from "react";
import { Helmet } from "react-helmet";
import styled, { createGlobalStyle } from "styled-components";
import Background from "./Background";
import Header from "./Header";
import "@fontsource/roboto";

const Style = createGlobalStyle`
    body {
        color: white;
        background-color: #121212;
        margin: 0;
        font-family: 'Roboto', sans-serif;
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
            <Helmet htmlAttributes={{ lang: 'en' }}>
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