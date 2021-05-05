import {useReducer, useState} from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';
import Search from './Search'
import MovieContainer from './MovieContainer'
import NominationContainer from './NominationContainer'
import Header from './Header'
import {SearchProvider} from '../context/SearchContext'


const MovieApiUrl = 'http://www.omdbapi.com/?s=man&apikey=e5f2ee09&'

function App() {
  const [errorMessage, setErrorMessage] = useState(null)

  return (
    <>
      <GlobalStyles />
      <div className="wrapper">
        <Header />
        <SearchProvider>
          <Search/>
          <MovieContainer />
        </SearchProvider>

      </div>
    </>
  );
}

export default App;
