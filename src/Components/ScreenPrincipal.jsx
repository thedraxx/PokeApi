import React, { useEffect, useState } from "react";
import { Consulta } from "./Consulta";
import { Search } from "./Search";

export const ScreenPrincipal = () => {
  const [pokemon, setPokemon] = useState([]);
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <Search setSearch={setSearch} setIsLoading={setIsLoading} />
      <Consulta
        isLoading={isLoading}
        search={search}
        setPokemon={setPokemon}
        pokemon={pokemon}
        active={active}
        setActive={setActive}
      />
    </div>
  );
};
