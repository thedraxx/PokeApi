import React, { useEffect, useState } from "react";
import { helpHttp } from "../Components/helpers/helphttp";
import { MostrarPokemons } from "./MostrarPokemons";

export const Consulta = ({ pokemon, setPokemon, active, setActive }) => {
  useEffect(() => {
    const fetchData = async () => {
      let pokeApi = `https://pokeapi.co/api/v2/pokemon?limit=50&offset=200`;
      const pokedata = await Promise.resolve(helpHttp().get(pokeApi));
      const get = await Promise.all(
        pokedata.results.map(async (e) => {
          const valores = await Promise.resolve(helpHttp().get(e.url));
          return valores;
        })
      );

      setPokemon(get);
    };

    fetchData();
  }, []);

  return (
      <MostrarPokemons pokemon = {pokemon} />
  );
};
