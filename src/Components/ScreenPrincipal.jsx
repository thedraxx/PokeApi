import React, { useEffect, useState } from "react";
import { Consulta } from "./Consulta";
import { Search } from "./Search";

export const ScreenPrincipal = () => {
  const [pokemon, setPokemon] = useState([]);
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState({});
  return (
    <div>
      <Search setSearch={setSearch} />
      <Consulta
        search={search}
        setPokemon={setPokemon}
        pokemon={pokemon}
        active={active}
        setActive={setActive}
      />
    </div>
  );
};
