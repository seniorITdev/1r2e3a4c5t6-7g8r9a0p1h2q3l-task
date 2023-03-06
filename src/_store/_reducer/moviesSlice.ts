import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieType } from '../../_model/movieType';

interface MoviesStateType { movies: MovieType[], term: string }

const initialState: MoviesStateType = { movies: [], term: "" };

export const moivesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<MovieType[]>) => {
            state.movies = [...action.payload];
        },
        setTerm: (state, action: PayloadAction<string>) => {
            state.term = action.payload;
        }
    },
});

export const { setMovies, setTerm } = moivesSlice.actions;
export default moivesSlice.reducer;
