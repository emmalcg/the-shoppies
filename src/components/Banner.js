import styled from 'styled-components'

const StyledDiv = styled.div`
    width: 100%;
    padding: 2rem;
    position: absolute;
    left: 0;

`

// const Text = styled.textPath`
//     font-size: 2rem;
//     text-align: center;
// `

const SVG = styled.svg `
    position: absolute;
    width: 100%;
    top: -5.5rem;
    left: 0;
`


export default function Banner () {
    return(
        <StyledDiv>

            <SVG viewBox="0 0 1135.05 112.05">
                <path id="banner-text" d="M.67 54.38c50 23.81 78.57 21.43 145.24 10.71C212.1 54.46 260.4 40.13 312.57 38.9 413.76 36.52 454.59 70.7 556.62 77c147.47 9.1 174.04-49.41 330.95-39.29 110.71 7.14 182.14 44.05 248.81 19.05" fill="none" stroke="pink" strokeWidth="4.5rem" strokeMiterlimit="10"/>
                <text y="40" fontSize="25" >
                    <textPath id="text-path" className="text" href="#banner-text">
                        Thanks for nominating 5 movies!
                    </textPath>
                </text>
            </SVG>
        </StyledDiv>


    )
}