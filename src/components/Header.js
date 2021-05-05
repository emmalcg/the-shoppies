import styled from 'styled-components'

const StyledH1 = styled.h1`
    margin: 2rem 0;
    font-size: 5.5rem;

`

export default function Header () {
    return (
        <header>
            <StyledH1>The Shoppies</StyledH1>
        </header>
    )
}