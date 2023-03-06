import { useSelector } from 'react-redux';
import { RootState } from './_store/store';
import Search from './layouts/Search';
import ImageGallery from './layouts/ImageGallery';
import DetailPage from './layouts/DetailPage';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import LoadingMovieItem from './components/LoadingMovieItem';

function App() {
  const isOpen = useSelector<RootState, boolean>((state: RootState) => state.detail.isOpen);
  return (
    <>
      <Header />
      <Search />
      <ImageGallery />
      {isOpen && <DetailPage />}
      <Footer />
    </>
  );
}

export default App;
