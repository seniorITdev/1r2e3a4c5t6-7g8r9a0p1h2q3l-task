import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setIsOpen, setShowId } from '../_store/_reducer/detailSlice';
import { MovieType } from '../_model/movieType';
import itemImage from "../_asset/image/item_image.jpg";

const detailElement = document.getElementById('detail') as HTMLElement;

const MovieItem = ({ id, title, poster }: MovieType) => {
    const dispatch = useDispatch();
    const handleClick = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch(setIsOpen(true));
        dispatch(setShowId(id));
    }

    return (
        <>
            <div onClick={handleClick} className="movieItem">
                {<img src={poster ? poster : itemImage} className="movieitem-image" />}
                <div className="movieitem-title"><label>{title}</label></div>
            </div>
        </>
    )
}

export default MovieItem