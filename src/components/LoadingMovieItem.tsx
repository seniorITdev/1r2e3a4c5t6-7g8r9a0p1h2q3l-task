import ContentLoader from 'react-content-loader';

const LoadingMovieItem = () => (
    <ContentLoader
        width={250}
        height={500}
        viewBox="0 0 250 500"
        backgroundColor="#f0f0f0"
        foregroundColor="#a0a4a4"
    >
        <rect x="1" y="329" rx="4" ry="4" width="190" height="9" />
        <rect x="2" y="348" rx="3" ry="3" width="119" height="6" />
        <rect x="0" y="2" rx="10" ry="10" width="200" height="317" />
    </ContentLoader>
)

export default LoadingMovieItem