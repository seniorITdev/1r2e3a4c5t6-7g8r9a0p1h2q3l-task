import { useState, ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import { useDispatch } from "react-redux";
import { setTerm } from '../_store/_reducer/moviesSlice';

const Search = () => {
    const [keyword, setKeyword] = useState<string>("");
    const dispatch = useDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.currentTarget.value);
    }

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(setTerm(keyword));
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            dispatch(setTerm(keyword));
        }
    }
    return (
        <>
            <div className="search">
                <input type="text" value={keyword} onChange={handleChange} onKeyDown={handleKeyDown} />
                <button onClick={handleClick}>Search</button>
            </div>
        </>
    );
}

export default Search