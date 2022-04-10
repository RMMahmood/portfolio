import * as React from "react";
import styled from "styled-components";
import InternalLink from "./InternalLink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    position: sticky;
    background-color: #151515;
    top: 0;
    height: 60px;
    width: 100%;
    padding: 0 20px;
    z-index: 1;
`;

const HeaderLink = styled(InternalLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 10px;
    text-align: center;
`;

const HomeLink = styled(HeaderLink)`
    margin-right: auto;
    font-size: 25px;
`;

export default class Header extends React.PureComponent<{}, {}> {
    constructor(props: {}) {
        super(props);
    }
    render() {
        return (
            <HeaderWrapper>
                <HomeLink to="/" aria-label="Home Page">
                    <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                </HomeLink>
                <HeaderLink to="/co-op">Co-op Experience</HeaderLink>
            </HeaderWrapper>
        )
    }
}