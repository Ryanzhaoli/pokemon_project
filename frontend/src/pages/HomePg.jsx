import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



export default function HomePage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [weaknessFilter, setWeaknessFilter] = useState('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
      .then(response => response.json())
      .then(data => setPokemonList(data.pokemon))
      .catch(error => console.error( error));
  }, []);

    const listPokemon = pokemonList.filter(pokemon => {
    const nameMatch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
    const typeMatch = typeFilter ? pokemon.type.includes(typeFilter) : true;
    const weaknessMatch = weaknessFilter ? pokemon.weaknesses.includes(weaknessFilter) : true;

    return nameMatch && typeMatch && weaknessMatch;
  });

  return (
    <div>
      <h1>Kanto Pokedex</h1>
      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
          <option value="">All Types</option>
          {Array.from(new Set(pokemonList.flatMap(pokemon => pokemon.type))).map(type => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <select value={weaknessFilter} onChange={e => setWeaknessFilter(e.target.value)}>
          <option value="">All Weaknesses</option>
          {Array.from(new Set(pokemonList.flatMap(pokemon => pokemon.weaknesses))).map(weakness => (
            <option key={weakness} value={weakness}>
              {weakness}
            </option>
          ))}
        </select>
      </div>
      <div className="pokemon-list">
        {listPokemon.map(pokemon => (
          <div key={pokemon.id} className="pokemon-item">
            <img src={pokemon.img} alt={pokemon.name} />
            <h3> <Link to={`/${pokemon.id}`}> {pokemon.name} </Link> </h3>
            <p>Num: {pokemon.num}</p>
            <p>Type: {pokemon.type.join(', ')}</p>
            <p>Weaknesses: {pokemon.weaknesses.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  )
}