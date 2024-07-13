import React, { createContext, useState, useEffect } from "react";
import api, { getPokemonImageUrl } from "../services/api";
import axios from "axios";

export const PokemonContext = createContext();

export const PokemonProvider = props => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemonsDetails = async (pokemons) => {  //espera array
    for (const pokemon of pokemons) {  //pega cada pokemon, faz o teste
      const { data } = await axios.get(pokemon.url)
      pokemon.id = data.id
      pokemon.types = data.types
      pokemon.image = getPokemonImageUrl(data.id)  //adiciona id, tipo e img
    }
    setPokemons([...pokemons]);
  }

  const updatePokemon = pokemon => { //espera pokemon atualizado, acha no array e substitui o antigo
    const index = pokemons.findIndex(({ id }) => id === pokemon.id)
    pokemons[index] = pokemon

    setPokemons([...pokemons]);
  };

  const fetchPokemons = async () => {
    const { data } = await api.get('/pokemon?limit=18')
    fetchPokemonsDetails(data.results) //resultado primeira chamada
   };

   useEffect(() => {
    if(!pokemons.length) fetchPokemons();
   }, []);

  return (
    <PokemonContext.Provider value={{ pokemons, updatePokemon }}>
      {props.children}
    </PokemonContext.Provider>
  )
};


