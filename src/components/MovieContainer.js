import {useContext, useEffect, useState} from 'react';
import {SearchContext} from '../context/SearchContext'
import styled from 'styled-components'
import Banner from '../components/Banner'
import Button from '../components/Button'

const StyledSection = styled.main`
    margin: 2rem 0;

    margin-top: 7rem;
    display: flex;
    justify-content: space-between;

    @media(max-width:640px) {
        flex-wrap: wrap;
    }

    &.showBanner {
        margin-top: 2rem;
    }
`
const MovieItem = styled.li`
    padding: 1rem;
    list-style: none;
    display: flex;

    @media(max-width:850px) {
        display: block;
        text-align: center;
    }

    @media(max-width:640px) {
        display: flex;
        text-align: left;
    }
`
const ListContainer = styled.div`
    padding: 2rem;
    width: 48%;
    min-height: 15rem;
    border-radius: 2rem;
    border: 1px solid var(--dark-color);
    background-color: var(--light-color);

    @media(max-width:640px) {
        width: 100%;
        margin-bottom: 2rem;
    }
`
const StyledH2 = styled.h2`
    font-size: 2rem;
    font-weight: 400;
    color: var(--dark-color);
    padding-bottom: 0.5rem;
`

const MovieTitle = styled.p`
    font-size: 1.8rem;
    line-height: 3rem;
    font-weight: 800;
    color: var(--dark-color);
    max-width: 35rem;
    margin-right: auto;
    padding-right: 1rem;

    @media(max-width:851px) {
        padding-right: 0;
    }
`

const Year = styled.span`
    font-size: 1.8rem;
    padding: 0 0.8rem;
    font-weight: 300;
    line-height: 3rem;
    color: var(--dark-color);

`
const NominationHeader = styled.div`
    display: flex;
    justify-content: space-between;
`
const NominationCount = styled.p`
    font-size: 1.8rem;
    color: var(--dark-color);
    font-weight: 400;
`

const FillerText = styled.p`
    margin-top: 2rem;
    font-size: 1.8rem;
    
`

export default function ResultsContainer ({movies}) {
    const [searchValue] = useContext(SearchContext);
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [nominatedMovies, setNominatedMovies] = useState([]);
    const [nominationsFull, setNominationsFull] = useState(false);

    useEffect(() => {
        
        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=e5f2ee09&`)
        .then(res => res.json())
        .then(jsonResult => {
            if (jsonResult.Response === 'True') {
            setSearchedMovies(jsonResult.Search);
            } 
        })
        .catch((err) => {
            alert(`Sorry, we can't find movies right now. Please try again later.`)
        })
    },[searchValue])

    useEffect(() => {
        if(nominatedMovies.length >= 5) {
            setNominationsFull(true)
        } else {
            setNominationsFull(false)
        }
    },[nominatedMovies.length])

    const nominateMovie = (e) => {
        const movieId = e.target.parentNode.id
        const clickedMovie = searchedMovies.filter(movie => movie.imdbID === movieId); 
        setNominatedMovies([...nominatedMovies, {Title: clickedMovie[0].Title, Year: clickedMovie[0].Year, Id: movieId}])
    }

    const removeMovie = (e) => {
        const movieId = e.target.parentNode.id
        setNominatedMovies(nominatedMovies.filter(movie => movie.Id !== movieId))
    }
    
    return (
    <>
        {nominationsFull && <Banner/>}
        <StyledSection className={nominationsFull && "showBanner"}>
            
            <ListContainer>
                {
                    searchValue.length > 0 
                    ?
                    <>
                    <StyledH2>Results for "{searchValue}"</StyledH2>
                    <ul>
                        {
                            searchedMovies.map(movie => {
                                return (
                                    <MovieItem id={movie.imdbID} key ={movie.imdbID}>
                                        <MovieTitle>
                                            {movie.Title}
                                            <Year>{`(${movie.Year})`}</Year>
                                        </MovieTitle>
                                        <Button 
                                            text='Nominate'
                                            onClick={nominateMovie}
                                            disabled={nominatedMovies.some(movieObj => (movieObj.Id === movie.imdbID)) || nominationsFull}
                                        />
                                    </MovieItem>
                                )
                            })
                        }
                    </ul>
                    </>
                    : <>
                        <StyledH2>Results</StyledH2>
                        <FillerText>
                            Search to nominate your favourite movies!
                        </FillerText>
                        </>
                }
            </ListContainer>
            <ListContainer>
                <NominationHeader>
                    <StyledH2>Nominations</StyledH2>
                    {nominatedMovies.length > 0 && 
                        <NominationCount>
                            {`${nominatedMovies.length}/5`}
                        </NominationCount>
                    }
                </NominationHeader>
                    {nominatedMovies.length === 0 &&
                        <FillerText>
                            No nominations selected
                        </FillerText>

                    }
                {
                    nominatedMovies.map(movie => {
                        return (
                            <MovieItem id={movie.Id} key ={`${movie.Id}nom`}>
                                <MovieTitle>
                                    {movie.Title}
                                    <Year>{`(${movie.Year})`}</Year>
                                </MovieTitle>
                                <Button 
                                    text='Remove'
                                    onClick={removeMovie}
                                    className='remove'
                                />
                            </MovieItem>
                        )
                    })
                }
            </ListContainer>

        </StyledSection>
    </>
    )
}