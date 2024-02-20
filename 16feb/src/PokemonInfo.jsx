// PokemonInfo.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonInfo = () => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
        setPokemonData(response.data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchPokemonData();
  }, []);

  return (
    <div>
      <h1>Pokemon Information</h1>
      {pokemonData ? (
        <div>
          <h2>Name: {pokemonData.name}</h2>
          <h2>URL: {pokemonData.url}</h2>
          <h2>Abilities:</h2>
          <ul>
            {pokemonData.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokemonInfo;
