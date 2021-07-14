
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";
import MyVerticallyCenteredModal from "./Components/Modal";
import { useState } from "react";
const App = ({Movies, setMovies}) => {

    
      const [SearchTerm, setSearchTerm] = useState("");
      const [Rate, setRate] = useState(0);
      const [modal, setModal] = useState(false);

  const rating = (r) => {
    setRate(r);
  };
  const getTitle = (t) => {
    setSearchTerm(t);
  };
  const movieAddhandler = (addMovies) => {
    setMovies([...Movies, addMovies]);
  };
  const handleModal = (m) => {
    setModal(m);
  };
  console.log(Rate);
    return (
        <div className="App">
            <header>
          <Filter title={getTitle} rate={rating} modalShow={handleModal} />
      </header>
      <main>
        <MovieList
          Movies={Movies.filter(
            (movie) =>
              movie.title.toLowerCase().match(SearchTerm.toLowerCase().trim()) &&
              movie.stars >= Rate
          )}
        />
        <MyVerticallyCenteredModal
            show={modal}
            onHide={() => setModal(false)}
            addMovie={movieAddhandler}
          />
        </main>
        <footer>
          <h6> Haithem.jegham 2021  </h6>
        </footer>
        </div>
    )
}

export default App

