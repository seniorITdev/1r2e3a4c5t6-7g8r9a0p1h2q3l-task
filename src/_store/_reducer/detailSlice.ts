import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DetailType } from '../../_model/detailType';

interface DetailStateType {
    detail: DetailType,
    isOpen: boolean,
    showId: string
}
const initialState: DetailStateType = {
    detail: {
        id: "",
        title: "",
        overview: "",
        runtime: 0,
        poster: null,
        backdrop: null,
    },
    isOpen: false,
    showId: ""
};

export const moivesSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {
        setDetail: (state, action: PayloadAction<DetailType>) => {
            state.detail = { ...action.payload };
        },
        setIsOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload;
        },
        setShowId: (state, action: PayloadAction<string>) => {
            state.showId = action.payload;
        }
    },
});

export const { setDetail, setIsOpen, setShowId } = moivesSlice.actions;
export default moivesSlice.reducer;
