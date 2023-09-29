import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export default function DetailsPage () {

  const [item, setItem] = useState([]);
  const [types, setTypes] = useState();
  const [weaknesses, setWeaknesses] = useState();
  const [nextEvolution, setNextEvolution] = useState();
  const { id } = useParams();

   
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setItem(data.pokemon[id - 1]);
        setTypes(data.pokemon[id-1].type.join(', '))
        setWeaknesses(data.pokemon[id-1].weaknesses.join(', '))
        setNextEvolution(data.pokemon[id-1].next_evolution[0].name)
      }) 
        .catch(error => console.error( error))
  }, [id]);
   
  
  return (
    <div className="pokemon-details">
      <h2>{item.name} Details</h2>
      <img src={item.img} alt={item.name} />
      <p>Num: {item.num}</p> 
      <p>Type: {types}</p> 
      <p>Weaknesses: {weaknesses}</p>
      <p>Evolutions:   {nextEvolution} </p>
      <Link to="/">Back to Index</Link>
     
    </div>
  );
}