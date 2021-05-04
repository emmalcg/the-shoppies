import {useContext} from 'react';
import {SearchContext} from '../context/SearchContext'

export default function ResultsContainer () {
    const [searchValue, setSearchValue] = useContext(SearchContext);


    return (
        <div>
            <h2>Results for "{searchValue}"</h2>
        </div>
    )
}