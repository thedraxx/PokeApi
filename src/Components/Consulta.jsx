import React, { useEffect, useState } from "react";
import { helpHttp } from "../Components/helpers/helphttp";
import { MostrarPokemons } from "./MostrarPokemons";
import { Loader } from "./Loader";

export const Consulta = ({ pokemon, setPokemon, active, setActive,search }) => {

  useEffect(() => {
    setActive(true);
    const fetchData = async () => {
      let pokeApi = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=200`;
      const pokedata = await Promise.resolve(helpHttp().get(pokeApi));
      const get = await Promise.all(
        pokedata.results.map(async (e) => {
          const valores = await Promise.resolve(helpHttp().get(e.url));
          return valores;
        })
      );
      setPokemon(get);
      setActive(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {active && <Loader />}
      <MostrarPokemons pokemon={pokemon} search={search} />
    </div>
  );
};
