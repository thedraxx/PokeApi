import "../App.css";
import React from "react";
import {DIV, H5 } from "./StyledComponent";
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
              <Card className="containercard">
                <Card.Img variant="top" src={e.sprites.front_default} />
                <Card.Body className="datas">
                  <Card.Title className="text-center text-light" >
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
