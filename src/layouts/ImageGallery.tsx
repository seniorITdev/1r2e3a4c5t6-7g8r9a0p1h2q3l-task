import { useQuery } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';
import { setMovies } from '../_store/_reducer/moviesSlice';
import { MovieType } from '../_model/movieType';
import { Complate } from '../_model/Common';
import { GET_MOVIES } from '../_apollo/gql/movieGql';
import { RootState } from '../_store/store';
import MovieItem from '../components/MovieItem';
import FadeIn from 'react-fade-in';
import LoadingMovieItem from '../components/LoadingMovieItem';

interface NodeType {
    __typeName: string,
    id?: string,
    title?: string,
    poster?: string | null,
}

interface EdgeType {
    __typeName: string,
    node: NodeType,
}

const ImageGallery = () => {
    const term = useSelector<RootState, string>((state: RootState) => state.movies.term);
    const movies = useSelector<RootState, MovieType[]>((state: RootState) => state.movies.movies);
    const dispatch = useDispatch();
    const { loading, error, data } = useQuery(
        GET_MOVIES,
        {
            variables: { term: term },
            onCompleted: (data) => {
                const movies: MovieType[] = [];
                data.search.edges.forEach(({ node }: EdgeType) => {
                    const { __typeName, ...movie } = node;
                    if (movie.id !== undefined) {
                        movies.push((movie as Complate<typeof movie>));
                    }
                });
                dispatch(setMovies(movies));
            }
        }
    )

    return (
        <>
            { }
            {movies.length > 0 && <div className="image-gallery">
                {loading && [0, 1, 2].map((index) => <LoadingMovieItem key={index} />)}
                {!loading && <FadeIn delay={100} className="fadein-gallery">
                    {movies.map(({ id, title, poster }) => <MovieItem key={id} id={id} title={title} poster={poster} />)}
                </FadeIn>}
            </div>
            }
        </>
    );
}

export default ImageGallery;
