import { useContext } from 'react';
import {SearchContext} from '../context/SearchContext'

export default function Search({search}) {

    const [searchValue, setSearchValue] = useContext(SearchContext);

    const handleSearchChanges = (e) => {
        setSearchValue(e.target.value);
        search(searchValue);
    }


    return (
        <div>
            <form action="">
                <input type="text"
                    value={searchValue}
                    onChange={handleSearchChanges}
                />
            </form>
        </div>
    )
}