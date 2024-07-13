import React, { useContext } from "react";
import { PokemonContext } from "../../providers/pokemon";

import {
  Card,
  StyledLink,
  CardName,
  CardImg,
  CardDetails,
  CardId,
  Container,
  Menu
} from "./styles";

const PokemonCard = ({ pokemon }) => {
  const nameCapitalized = pokemon.name.split("-")[0];
  const { updatePokemon } = useContext(PokemonContext);

  const pokemonType = pokemon?.types?.map(
    ({ type }) => type.name[0].toUpperCase() + type.name.slice(1)
  );

  const handleCaughtClick = () => {
    const updatedPokemon = { ...pokemon, caught: !pokemon.caught };
    updatePokemon(updatedPokemon);
  };

  const handleFavoriteClick = () => {
    const updatedPokemon = { ...pokemon, favorite: !pokemon.favorite };
    updatePokemon(updatedPokemon);
  };

  return (
    <Container>
      <StyledLink to={`pokemon/${pokemon.id}`}>
        <Card className={pokemonType[0]}>
          <CardId className={pokemonType[0]}># {pokemon.id}</CardId>
          <CardImg
            src={pokemon.image}
            alt={nameCapitalized}
            style={{ display: "block" }}
          />
          <CardName>{nameCapitalized}</CardName>
          <CardDetails>{pokemonType.join(" / ")}</CardDetails>
        </Card>
      </StyledLink>
      <Menu>
        <img
          src={pokemon.caught ? '/icons/caught.png' : '/icons/not_caught.png'}
          onClick={handleCaughtClick}
          alt={pokemon.caught ? "Caught" : "Not caught"}
        />
        <img
          src={pokemon.favorite ? '/icons/favorite.png' : '/icons/not_favorite.png'}
          onClick={handleFavoriteClick}
          alt={pokemon.favorite ? "Favorite" : "Not favorite"}
        />
      </Menu>
    </Container>
  );
};

export default PokemonCard;

//mostra img diferentes, se estiver capturado ou não*/

