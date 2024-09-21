import Details from "../pages/MovieDetails/movieDetails";
import HomeItem from "../pages/Home/homeindex";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyFavorites from "../pages/Favorites/favorites";
import MovieDetails from "../pages/MovieDetails/movieDetails";

function RoutesApp() {
  return (
  //  O routes precisa estar em um arquivo separado
    <Router>
      <div className="Routes">
        <Routes>
          <Route path="/" element={<HomeItem />} />
          <Route path="movie/:id" element={<Details />} />
          <Route path="/details" element={<Details />} />
          <Route path="/favorites" element={<MyFavorites />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default RoutesApp;