import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
`

const SVG = styled.svg `
    width: 50rem;

    path {
        fill: none;
    }

`

export default function Banner () {

    return(
        <StyledDiv>

            <SVG viewBox="0 -30 1135.05 120">
                <path id="banner-text" d="M.67 54.38c50 23.81 78.57 21.43 145.24 10.71C212.1 54.46 260.4 40.13 312.57 38.9 413.76 36.52 454.59 70.7 556.62 77c147.47 9.1 174.04-49.41 330.95-39.29 110.71 7.14 182.14 44.05 248.81 19.05" pathLength="1"/>
                <text y="40" fontSize="75" fontWeight="500" fill="var(--bright-color)" letterSpacing="1.5px">
                    <textPath id="text-path" className="text" href="#banner-text">
                        Thanks for nominating 5 movies!
                    </textPath>
                </text>
            </SVG>
        </StyledDiv>


    )
}