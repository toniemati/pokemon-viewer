import { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPokemons } from './store/modules/pokemonSlice';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Search from './views/Search/Search';
import About from './views/About/About';
import Details from './views/Details/Details';

function App() {
  const dispatch = useDispatch();

  const getPokemons = async () => {
    const { data: { results }} = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1200');
    dispatch(setPokemons(results));
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
