import * as React from "react";
import styled, { CSSProperties, keyframes } from "styled-components";

const BubbleAnimation = keyframes`
    from {
        transform: translateY(calc(100vh + 100%));
    }  
    to {
        transform: translateY(calc(0vh - 100%));
    }
`;

const BubbleElement = styled.div`
    position: absolute;
    height: 150px;
    width: 150px;
    opacity: 0.25;
    border-radius: 50%;
    animation-name: ${BubbleAnimation};
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    background-color: #fff;
    transform: translateY(calc(100vh + 100%));

    &.resetting {
        animation-name: none;
    }
`;

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    filter: blur(20px); 
    z-index: 0;
`;

function random(min: number, max: number) {
    return Math.random() * (max - min + 1) + min;
}

function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class Bubble extends React.PureComponent<{}, CSSProperties> {
    constructor(props: {}) {
        super(props);

        const size = randomInt(150, 250);

        this.state = {
            height: `${size}px`,
            width: `${size}px`,
            backgroundColor: `rgb(${randomInt(0, 256)}, ${randomInt(0, 256)}, ${randomInt(0, 256)})`,
            left: `calc(${random(0, 100)}% - ${size}px)`,
            animationDelay: `${random(0, 5)}s`,
            animationDuration: `${random(10, 20)}s`,
            animationDirection: (randomInt(1, 2) == 2) ? 'reverse' : 'normal',
            opacity: randomInt(20, 70) / 100
        };
    }
    animationIteration() {
        const size = randomInt(150, 250);

        this.setState({
            height: `${size}px`,
            width: `${size}px`,
            backgroundColor: `rgb(${randomInt(0, 256)}, ${randomInt(0, 256)}, ${randomInt(0, 256)})`,
            left: `calc(${random(0, 100)}% - ${size}px)`,
            opacity: randomInt(20, 70) / 100,
        });
    }
    render() {
        return (
            <BubbleElement style={this.state} onAnimationIteration={this.animationIteration.bind(this)} />
        )
    }
}

export default function Background() {
    const bubbles: React.ReactNode[] = [];

    for (let i = 0; i < randomInt(10, 20); i++) {
        bubbles.push(<Bubble key={i} />);
    }

    return (
        <Container>
            {bubbles}
        </Container>
    )
}