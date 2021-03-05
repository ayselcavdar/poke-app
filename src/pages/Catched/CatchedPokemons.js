import React, { useState } from "react";
import { firstCharToUpperCase } from "../../utils/firstCharToUpperCase";

import FavPokemon from "../../components/FavPokemon/FavPokemon";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Translate from "../../components/Translate/Translate";

import { LinkContainer } from "react-router-bootstrap";
import { Button, Card, Col, Nav, Row } from "react-bootstrap";

import { useSelector } from "react-redux";

const CatchedPokemon = () => {
  const catchedPokemon = useSelector((state) => state.catchedPokemon);
  const [visible, setVisible] = useState(30);
  const showMoreHandler = () => {
    setVisible((prevValue) => prevValue + 30);
  };
  console.log("catchedPokemon: ", catchedPokemon);

  return (
    <div>
      {catchedPokemon.length === 0 ? (
        <Row className="mt-3 ml-2">
          <Col xs={12} md={8}>
            <ErrorMessage variant="danger">
              <Translate
                turkish="Henüz yakalanmış pokemonunuz bulunmamaktadır. Ana sayfaya dönün ve pokemonları yakalamayı deneyin."
                english="You don't have any catched pokemon yet. Go back to home page and try to catch pokemons."
              />
              <LinkContainer className="d-inline" to="/">
                <Nav.Link>
                  <Translate turkish="Ana Sayfa" english="Home Page" />
                </Nav.Link>
              </LinkContainer>
            </ErrorMessage>
          </Col>
        </Row>
      ) : (
        <>
          <Card.Header>
            <h4>
              <Translate
                turkish="Yakalanan Pokemonlar:  "
                english="Catched Pokemons: "
              />
              <b>{catchedPokemon.length}</b>
            </h4>
          </Card.Header> 
            <Row className="m-2">
              {catchedPokemon.slice(0, visible).map((pokemon) => {
                return (
                  <Row
                  key={pokemon.pokemonId}
                  className="m-3"
                  >
                    <Card
                      style={{
                        width: "15rem"     
                      }}
                    >
                      <div >
                        <h3 className=" text-white text-center my-3 text-dark">
                          {`${firstCharToUpperCase(pokemon.pokemon.name)}`}
                        </h3>
                        <Card.Img
                          variant="top"
                          src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.pokemonId}.png`}
                        />
                        <FavPokemon pokeId={pokemon.pokemonId} />
                        <div className="text-center mt-1 mb-1">
                          <LinkContainer to={`/details/${pokemon.pokemonId}`}>
                            <Button variant="info">
                              <Translate
                                turkish={"Daha Fazla Bilgi"}
                                english={"More Details"}
                              />
                              <i className="fas fa-info-circle text-white ml-3" />
                            </Button>
                          </LinkContainer>
                        </div>
                      </div>
                    </Card>
                  </Row>
                );
              })}
            </Row>
            {catchedPokemon.length >= 30 && (
              <div className="text-center mt-4">
                <Button onClick={showMoreHandler}>
                  <Translate
                    turkish={"Daha Fazla Pokemon Göster"}
                    english={"Show More"}
                  />
                </Button>
              </div>
            )}
        </>
      )}
    </div>
  );
};

export default CatchedPokemon;
