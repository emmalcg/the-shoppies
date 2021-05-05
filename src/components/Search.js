import { useContext } from 'react';
import {SearchContext} from '../context/SearchContext'
import styled from 'styled-components'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem 2.5rem; 
    background-color: pink;
`
const StyledLabel = styled.label`
    font-size: 1.8rem;
    padding-bottom: 0.7rem;
`

const StyledInput = styled.input`
    font-size: 1.8rem;
    padding: 0.5rem;
`
export default function Search({search}) {

    const [searchValue, setSearchValue] = useContext(SearchContext);

    const handleSearchChanges = (e) => {
        e.preventDefault()
        setSearchValue(e.target.value);
        // search(searchValue);
    }


    return (
        <div>
            <StyledForm onSubmit={e => e.preventDefault()}>
                <StyledLabel htmlFor="userSearch">Movie Title</StyledLabel>
                <StyledInput 
                    type="text"
                    name="userSearch"
                    value={searchValue}
                    onChange={handleSearchChanges}
                />
            </StyledForm>
        </div>
    )
}