import React from "react";
import { cardtitle, containercard, datas, DIV, H5, IMG } from "./StyledComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Busqueda } from "./Busqueda";
export const MostrarPokemons = ({ pokemon, search, isLoading }) => {

  return (
    <DIV>
      {isLoading ? (
        <Busqueda search={search} pokemon={pokemon} />
      ) : (
        pokemon.map((e) => {
          return (
            <section key={e.id}>
              <Card style={containercard}>
                <Card.Img variant="top" src={e.sprites.front_default} />
                <Card.Body style={datas}>
                  <Card.Title className="text-center" style={cardtitle}>
                    {e.name.toUpperCase()}
                  </Card.Title>
                  <Card.Text>
                    <H5>Type: {e.types[0].type.name}</H5>
                    <H5>id: {e.id}</H5>
                    <H5>weight: {e.weight}</H5>
                  </Card.Text>
                </Card.Body>
              </Card>
            </section>
          );
        })
      )}
      {}
    </DIV>
  );
};
