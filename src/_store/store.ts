import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import detailReducer from './_reducer/detailSlice';
import moviesReducer from './_reducer/moviesSlice';

export const store = configureStore({
    reducer: {
        detail: detailReducer,
        movies: moviesReducer
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
