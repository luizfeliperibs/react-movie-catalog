import { useState, useEffect } from 'react'
import Search from './components/Search.jsx'

const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};

const App = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const fetchMovies = async () => {
      try {
        
        const endpoint = `${API_BASE_URL}/discover/movie/sort_by=popularity.desc`;

        const response = await fetch(endpoint, API_OPTIONS);

        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }

      } catch (error) {
        console.error(`Error fetching movies:, ${error}`);
      }
  }
    

  useEffect(() => {

  }, []);

  return (

    <main>

      <div className="pattern"></div>

      <div className="wrapper">
        
        <header>
          <img src="./hero.png" alt="Hero-Banner"/>
          <h1>Busque por <span className="text-gradient">Filmes</span> De Todo Lugar!</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </header>

        <section className="all-movies">
          <h2>Todos Os Filmes</h2>
        </section>

      </div>

    </main>

  )

}


export default App