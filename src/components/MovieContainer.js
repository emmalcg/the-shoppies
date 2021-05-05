import {useContext, useEffect, useState} from 'react';
import {SearchContext} from '../context/SearchContext'
import styled from 'styled-components'
import Banner from '../components/Banner'
import Button from '../components/Button'

const MovieItem = styled.li`
    padding: 1rem;
    list-style: none;
    display: flex;
`
const ListContainer = styled.div`
    padding: 1rem;
    background: pink;
    width: 48%;
    min-height: 15rem;
`
const StyledSection = styled.section`
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
`
const StyledH2 = styled.h2`
    font-size: 2rem;
`

const MovieTitle = styled.h4`
    font-size: 1.8rem
`

const Year = styled.p`
    font-size: 1.8rem;
    padding: 0 0.8rem;
`

export default function ResultsContainer ({movies}) {
    const [searchValue] = useContext(SearchContext);
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [nominatedMovies, setNominatedMovies] = useState([]);

    useEffect(() => {
        
        fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=e5f2ee09&`)
        .then(res => res.json())
        .then(jsonResult => {
            if (jsonResult.Response === 'True') {
            setSearchedMovies(jsonResult.Search);
            } 
        })
    
    },[searchValue])

    const nominateMovie = (e) => {

        const movieTitle = e.target.parentNode.children[0].innerText
        const movieYear = e.target.parentNode.children[1].innerText

        // const clickedMovie = e.target.value
        // console.log(clickedMovie)
        setNominatedMovies([...nominatedMovies, {Title: movieTitle, Year: movieYear}])
    }

    console.log(nominatedMovies)

    const removeMovie = (e) => {
        const movieTitle = e.target.parentNode.children[0].innerText

        setNominatedMovies(nominatedMovies.filter(movie => movie.Title !== movieTitle))
    }

    
    return (
    <>
        {nominatedMovies.length === 5 && <Banner/>}
        <StyledSection>
            <ListContainer>
                {
                    searchValue.length > 0 
                    ?
                    <>
                    <StyledH2>Results for "{searchValue}"</StyledH2>
                    <ul>
                        {
                            searchedMovies.map(movie => {
                                // console.log(movie)
                                return (
                                    <MovieItem key ={movie.imdbID}>
                                        <MovieTitle>{movie.Title}</MovieTitle>
                                        <Year>{`(${movie.Year})`}</Year>
                                        <Button 
                                            text='Nominate'
                                            onClick={nominateMovie}
                                            disabled={nominatedMovies.some(movieObj => (movieObj.Title.includes(movie.Title))) || nominatedMovies.length >= 5}
                                        />
                                    </MovieItem>
                                )
                            })
                        }
                    </ul>
                    </>
                    : <StyledH2>Search For Results</StyledH2>
                }
            </ListContainer>
            <ListContainer>
                <StyledH2>Nominations</StyledH2>
                {
                    nominatedMovies.map(movie => {
                        return (
                            <MovieItem key ={`${movie.Title}nom`}>
                                <MovieTitle>{movie.Title}</MovieTitle>
                                <Year>{movie.Year}</Year>
                                <Button 
                                    text='Remove'
                                    onClick={removeMovie}
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