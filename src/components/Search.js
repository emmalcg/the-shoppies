import { useContext } from 'react';
import {SearchContext} from '../context/SearchContext'
import {FiSearch} from 'react-icons/fi'
import styled from 'styled-components'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem 2.5rem; 
    position: relative;
`
const StyledLabel = styled.label`
    padding-bottom: 0.7rem;
    font-size: 1.8rem;
    font-weight: 400;
    color: var(--light-color);
`

const StyledInput = styled.input`
    padding: 0.5rem 1.2rem 0.5rem 3rem;
    font-size: 1.8rem;
    color: var(--dark-color);

    border-radius: 2rem;
    border: 1px solid var(--dark-color);
    transition: all 0.5s;
    background-color: var(--light-color);

    &:hover,
    &:focus {
        background-color: var(--bright-color);
    }
`
const Symbol = styled(FiSearch)`
    color: var(--dark-color);
    transform: scale(2);
    z-index: 1;
    position: absolute;
    bottom: 3.7rem;
    left: 3rem;
`
export default function Search() {

    const [searchValue, setSearchValue] = useContext(SearchContext);

    const handleSearchChanges = (e) => {
        e.preventDefault()
        setSearchValue(e.target.value);
    }

    return (
        <div>
            <StyledForm onSubmit={e => e.preventDefault()}>
                <StyledLabel htmlFor="userSearch">Search a movie title</StyledLabel>
                <Symbol/>
                <StyledInput 
                    type="search"
                    aria-label="Search"
                    name="userSearch"
                    value={searchValue}
                    onChange={handleSearchChanges}
                />
            </StyledForm>
        </div>
    )
}