import React from "react";
import { DIV, H5, IMG } from "./StyledComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
export const MostrarPokemons = ({ pokemon }) => {
 
 
 const containercard ={
  width: "18rem",
  backgroundColor: "#fdfdfd",
  boxShadow: "1.5px 3px 7px black",
  background: 'linear-gradient(150deg, rgba(2,0,36,1) 0%, #fffaf5 0%, #ffd8ab 100%)',
  borderRadius: "40px",
 }

 const datas ={
  width: "18rem",
  backgroundColor: "#ffecce",
  boxShadow: "1px 3px 7px black",
  textShadow: "1px 1px 1px black",
}

const cardtitle ={
  color: "#fff",
}
 
  return (
    <DIV>
      {pokemon.map((e) => {
        console.log(e)
        return (
          <section key={e.id}>
            <Card style={containercard}>
              <Card.Img variant="top" src={e.sprites.front_default} />
              <Card.Body style={datas}>
                <Card.Title className="text-center" style={cardtitle}>{e.name.toUpperCase()}</Card.Title>
                <Card.Text>
                 <H5>Type: {(e.types[0].type.name)}</H5> 
                  <H5>id: {(e.id)}</H5>
                  <H5>weight: {(e.weight)}</H5>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </section>
        );
      })}
    </DIV>
  );
};
