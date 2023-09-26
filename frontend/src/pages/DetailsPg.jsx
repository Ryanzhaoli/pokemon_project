import React ,{useState, useEffect} from 'react';
import { Link ,useParams } from 'react-router-dom';


export default function DetailsPage () {

  let [pokemon, setPokemon] = useState([]);

  let {id} = useParams(); 
  

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json/${id}`) 
      .then(response => response.json())
      .then(data => setPokemon(data.pokemon))
      .catch(error => console.error(error));
  }, [id]);

   
   // codes are not working , I tried ...
  
  return (
    <div className="pokemon-details">
      <h2>{pokemon.name} Details</h2>
      <img src={pokemon.img} alt={pokemon.name} />
      <p>Num: {pokemon.num}</p> 
      <p>Type: {pokemon.type}</p>
      <p>Weaknesses: {pokemon.weaknesses}</p>
      <Link to="/">Back to Index</Link>
      {pokemon.next_evolution && (
        <div>
          <h3>Next Evolution</h3>
          {pokemon.next_evolution.map(evolution => (
            <div key={evolution.num}>
              <Link to={`/${evolution.num}`}>{evolution.name}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}