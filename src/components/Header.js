import styled from 'styled-components'

const StyledH1 = styled.h1`
    margin: 2rem 0;
    font-size: 7.5rem;
    font-family: myriad-pro, sans-serif;
    font-weight: 900;
    font-style: italic;
    letter-spacing: -0.5rem;
    color: var(--light-color);
    -webkit-text-stroke-width: 0.2rem;
    -webkit-text-stroke-color: #0A5012;

    text-align: center;
`

export default function Header () {
    return (
        <header>
            <StyledH1>The Shoppies</StyledH1>
        </header>
    )
}