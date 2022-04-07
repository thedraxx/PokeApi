import "../App.css";
import React from "react";
import { Card } from "react-bootstrap";
import { Message } from "./Message";
import { DIV, H5 } from "./StyledComponent";

export const Busqueda = ({ search, pokemon }) => {
  let PokeFilter = pokemon.filter(
    (e) => e.name === search.nombre.toLowerCase().trim()
  );
    console.log(PokeFilter.length);
  return (
    <DIV>
      {PokeFilter.length === 0 ? <Message msg="Pokemon no encontrado" bgColor="#f24a72"/> : PokeFilter.map((e) => {
        return (
          <section key={e.id}>
            <Card className="containercard">
              <Card.Img variant="top" src={e.sprites.front_default} />
              <Card.Body className="datas">
                <Card.Title className="text-center text-light">
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
      })}
    </DIV>
  );
};
