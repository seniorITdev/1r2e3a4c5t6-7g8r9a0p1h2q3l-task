import ContentLoader from 'react-content-loader';

const LoadingDetailPage = () => (
    <ContentLoader
        width={650}
        height={700}
        viewBox="0 0 650 700"
        backgroundColor="#f0f0f0"
        foregroundColor="#a0a4a4"
    >
        <rect x="1" y="440" rx="7" ry="7" width="450" height="40" />
        <rect x="2" y="500" rx="7" ry="7" width="200" height="25" />
        <rect x="2" y="580" rx="5" ry="5" width="630" height="15" />
        <rect x="2" y="610" rx="5" ry="5" width="630" height="15" />
        <rect x="2" y="640" rx="5" ry="5" width="350" height="15" />
        <rect x="0" y="2" rx="30" ry="30" width="630" height="400" />
    </ContentLoader>
)

export default LoadingDetailPage