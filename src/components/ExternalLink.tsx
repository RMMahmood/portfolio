import styled from "styled-components";

const ExternalLink = styled.a`
    display: block;
    transition: color ease-in 200ms;
    text-decoration: none;
    padding: 0 5px 0 5px;
    color: white;

    &:hover {
        color: #BB86FC;
    }
`;

export default ExternalLink;