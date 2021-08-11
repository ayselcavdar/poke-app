import React, { useState } from "react";

import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Translate from "../../components/Translate/Translate";
import FavPokemon from "../../components/FavPokemon/FavPokemon";

import { firstCharToUpperCase } from "../../utils/firstCharToUpperCase";

import { Button, Card, Col, Nav, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";

const FavouritePokemons = () => {
  const catchedPokemons = useSelector((state) => state.catchedPokemon);
  const favPokemons = useSelector((state) => state.favPokemon);
  const [visible, setVisible] = useState(30);

  const showMoreHandler = () => {
    setVisible((prevValue) => prevValue + 30);
  };
  return (
    <>
      {favPokemons.length === 0 ? (
        <Row className="mt-3 ml-2">
          <Col xs={12} md={7}>
            <ErrorMessage variant="danger">
              <Translate
                turkish="Favori pokemonunuz bulunmamaktadır."
                english="You don't have any favorite pokemon."
              />
              <LinkContainer className="d-inline" to="/catched">
                <Nav.Link>
                  <Translate
                    turkish="Yakalanan Pokemonlar"
                    english="Catched Pokemon"
                  />
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
                turkish="Favori pokemonlar: "
                english="Favorite Pokemons:"
              />
              <b>{favPokemons.length}</b>
            </h4>
          </Card.Header>

          <Row className="m-2">
            {favPokemons.slice(0, visible).map((favPokemon) => (
              <div key={favPokemon.favPokemonId}>
                {catchedPokemons.map(
                  (catchedPokemon) =>
                    catchedPokemon.pokemonId === favPokemon.favPokemonId && (
                      <Row key={catchedPokemon.pokemonId} className="m-3 ">
                        <Card
                          style={{
                            width: "15rem",
                          }}
                        >
                          <div>
                            <h3 className=" text-white text-center my-3 text-dark">
                              {`${firstCharToUpperCase(
                                catchedPokemon.pokemon.name
                              )}`}
                            </h3>
                            <Card.Img
                              variant="top"
                              src={`https://pokeres.bastionbot.org/images/pokemon/${catchedPokemon.pokemonId}.png`}
                              src={catchedPokemon?.pokemon?.sprites?.front_default ? catchedPokemon?.pokemon?.sprites?.front_default : `https://pokeres.bastionbot.org/images/pokemon/${catchedPokemon.pokemonId}.png`}

                            />
                            <FavPokemon pokeId={catchedPokemon.pokemonId} />
                            <div className="text-center mt-1 mb-1">
                              <LinkContainer
                                to={`/details/${catchedPokemon.pokemonId}`}
                              >
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
                    )
                )}
              </div>
            ))}
          </Row>
          {favPokemons.length >= 30 && (
            <div className="text-center my-4">
              <Button onClick={showMoreHandler}>Show More</Button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default FavouritePokemons;
