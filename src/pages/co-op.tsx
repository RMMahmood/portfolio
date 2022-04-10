import * as React from "react";
import Page from "../components/Page";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

const TermWrapper = styled.div`
    padding: 20px 30px;
    background-color: rgba(31,31,31,0.750);
    backdrop-filter: blur(50px);
    margin: 50px 0;
`;

function Term({ data }: { data: any }) {
    const goals = data.goals.map((text: any, index: number) => (
        <p key={index}>{text}</p>
    ));

    return (
        <TermWrapper>
            <h1>Workterm {data.term} - {data.job.title}</h1>
            <h2>{data.employer.name}</h2>
            <hr />

            <h3>Introduction</h3>
            <p>{data.introduction}</p>

            <h3>About the Job</h3>
            <p>{data.job.description}</p>

            <h3>Workterm Goals</h3>
            <div>{goals}</div>

            <h3>Conclusions and Acknowledgments</h3>
            <p>{data.conclusion}</p>
        </TermWrapper>
    )
}

export default function IndexPage() {
    const terms = useStaticQuery(graphql`
        query TermReports {
            allCoOpJson {
                nodes {
                    term
                    introduction
                    employer {
                        name
                        description
                    }
                    job {
                        title
                        description
                    }
                    goals
                    conclusion
                }
            }
        }
    `).allCoOpJson.nodes.map((data: any, index: number) => (
        <Term key={index} data={data} />
    ));;

    return (
        <Page title="Co-op">
            {terms}
        </Page>
    )
}
