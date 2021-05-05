import styled from 'styled-components'

const StyledDiv = styled.div`
    width: 100%;
    background-color: lightblue;
    padding: 1rem;
`

const Text = styled.p`
    font-size: 2rem;
    text-align: center;
`

export default function Banner () {
    return(
        <StyledDiv>
            <Text>Thanks for nominating 5 movies!</Text>
        </StyledDiv>
    )
}