import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import About from './views/About/About';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setPokemons } from './store/modules/pokemonSlice';
import { useEffect } from 'react';
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
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
