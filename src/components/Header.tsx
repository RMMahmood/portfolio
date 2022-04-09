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
`;

const HomeLink = styled(InternalLink)`
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
                <HomeLink to="/">
                    <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                </HomeLink>
            </HeaderWrapper>
        )
    }
}