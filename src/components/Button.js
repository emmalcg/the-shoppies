import styled from 'styled-components'

const StyledButton = styled.button`
    height: 3rem;
    min-width: 9rem;
    padding: 0.5rem 1rem;
    display: inline-block;
    position: relative;
    overflow: hidden;
    z-index: 1;

    border-radius: 2rem;
    border: 1px solid var(--dark-color);
    background-color: #D6E265;
    color: var(--dark-color);
    transition: al .4s;

    font-family: proxima-nova, sans-serif;
    font-size: 1.6rem;

    &:after {
        content: "";
        position: absolute;
        bottom 0;
        left: 0;
        width: 100%
        height: 100%
        background-color: #D6E265
        border-radius: 10rem;
        z-index: -2;
    }
    &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: var(--bright-color);
        transition: all .4s;
        border-radius: 10rem;
        z-index: -1;
    }
    &:hover,
    &:focus {
        &:before {
            width: 100%;
        };
    }


    &:disabled {
        background-color: transparent;

        &:hover {
            background-color: transparent;
            &:before {
                width: 0%;
            }
        }
    }

    &.remove {
        background-color: #FF7638;

        &:before {
            background-color: var(--light-coral);
        }
    }
`


export default function Button ({text, onClick, disabled, className}) {
    return (
        <StyledButton
            onClick={onClick}
            disabled={disabled}
            className={className}
        >
            {text}
        </StyledButton>
    )
}