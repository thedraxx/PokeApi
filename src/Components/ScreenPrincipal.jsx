import React, { useEffect, useState } from "react";
import { Consulta } from "./Consulta";


export const ScreenPrincipal = () => {
  const [pokemon, setPokemon] = useState([]);
  const [active, setActive] = useState(false);

  return (
    <div>
      <Consulta
        setPokemon={setPokemon}
        pokemon={pokemon}
        active={active}
        setActive={setActive}
      />
    </div>
  );
};
