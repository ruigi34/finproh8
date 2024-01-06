import { useState } from 'react';
import Header from './components/Header';
import Movie from './components/Movie';
import { useEffect } from 'react';

import { useSelector } from 'react-redux';

export default function App() {
  const search = useSelector((state) => state.search.search);

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getMovies = async () => {
    setIsLoading(true);
    const response = await fetch(`http://www.omdbapi.com/?apikey=ab854689&s=${search}`);
    const data = await response.json();
    if (data.Response === 'False') {
      setMovies([]);
      setError(data.Error);
    } else {
      setError('');
      setMovies(data.Search);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div>
      <Header title="FinProH8" />
      <div className="container">
        <h4 className="my-4">Show your favorites movie</h4>
        <div className="row">
          {isLoading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h4>{error}</h4>
          ) : (
            movies.map((movie) => (
              <div key={movie.imdbID} className="col-md-3 mb-3">
                <Movie movie={movie} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
