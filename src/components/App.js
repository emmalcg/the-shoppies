import {useEffect, useState} from 'react';
import Search from './Search'
import MovieContainer from './MovieContainer'
import NominationContainer from './NominationContainer'
import Header from './Header'
import {SearchProvider} from '../context/SearchContext'

const MovieApiUrl = 'http://www.omdbapi.com/?s=man&apikey=e5f2ee09&'

function App() {
  const [loading, setLoading] = useState(true);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
  
    fetch(MovieApiUrl)
    .then((res) => {
        return res.json()
    })
    .then((jsonResult) => {
        console.log(jsonResult)
        setSearchedMovies(jsonResult.Search)
    })

  },[])

  const search = (searchInput) => {
    fetch(`http://www.omdbapi.com/?s=${searchInput}&apikey=e5f2ee09&`)
    .then(res => res.json())
    .then(jsonResult => {
      if (jsonResult.Response === 'True') {
        setSearchedMovies(jsonResult.Search);
      } else {
        setErrorMessage(jsonResult.Error)
      }
    })
  }



  return (
    <div className="App">
      <Header />
      <SearchProvider>
        <Search
          search={search}
        />
        <section>
          <MovieContainer />
          <NominationContainer />
        </section>
      </SearchProvider>
    </div>
  );
}

export default App;
