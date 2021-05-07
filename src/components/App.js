import { GlobalStyles } from '../styles/GlobalStyles';
import Search from './Search'
import MovieContainer from './MovieContainer'
import Header from './Header'
import {SearchProvider} from '../context/SearchContext'

function App() {

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
