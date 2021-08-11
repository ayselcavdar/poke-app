import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Col, Image, Row, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Loading from "../../components/Loading/Loading";
import Translate from "../../components/Translate/Translate";
import CatchAndReleaseBtn from "../../components/CatchAndReleaseBtn/CatchAndReleaseBtn";
import Status from "../../components/Status/Status";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { firstCharToUpperCase } from "../../utils/firstCharToUpperCase";

const PokemonDetails = (props) => {
  const { pokeId } = props.match.params;
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const [hp, setHp] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [attack, setAttack] = useState(0);
  const [attack2, setAttack2] = useState(0);
  const [defence, setDefence] = useState(0);
  const [defence2, setDefence2] = useState(0);
  const [name, setName] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [backImg, setBackImg] = useState("");
  const [frontImg, setFrontImg] = useState("");
  const [error, setError] = useState("");
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const imgUrl = "https://pokeres.bastionbot.org/images/pokemon/";

  useEffect(() => {
    axios
      .get(`${url + pokeId}`)
      .then((res) => {
        setPokemonDetail(res.data);
        setHp(res.data.stats[0].base_stat);
        setAttack(res.data.stats[1].base_stat);
        setDefence(res.data.stats[2].base_stat);

        setSpeed(res.data.stats[5].base_stat);
        setAttack2(res.data.stats[3].base_stat);
        setDefence2(res.data.stats[4].base_stat);

        setName(res.data.name);
        setHeight(res.data.height);
        setWeight(res.data.weight);
        setFrontImg(res.data.sprites.front_default);
        setBackImg(res.data.sprites.back_default);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      });
  }, [pokeId]);

  return (
    <Container>
      {pokemonDetail.length === 0 ? (
        <Loading />
      ) : error ? (
        <ErrorMessage variant="danger"> {error} </ErrorMessage>
      ) : (
        <>
          <div className="text-center">
            <Image className="pb-4" src={frontImg} />
            <h1 className="d-inline">
              {firstCharToUpperCase(name)}
            </h1>
            <Image className="pb-4" src={backImg} />
          </div>
          <Row>
            <Col xs={12} md={5}>
              <Image style={{width:'100%'}}  src={pokemonDetail?.sprites?.front_shiny ? pokemonDetail?.sprites?.front_shiny : `${imgUrl + pokeId}.png`} fluid />
            </Col>

            <Col xs={12} md={6}>
              <div className="p-4">
                <div className="text-center">
                  <h2>
                    <Translate turkish="İstatistikler" english="Statistics" />
                  </h2>
                </div>
                <Row className="mt-3 ">
                  <Status
                    hp={hp}
                    defence={defence}
                    attack={attack}
                    infoHpEn="Health"
                    infoDefEn="Defence"
                    infoAttackEn="Attack"
                    infoHpTr="Sağlık"
                    infoDefTr="Savunma"
                    infoAttackTr="Saldırı"
                  />
                </Row>
                <Row className="mt-3 ">
                  <Status
                    hp={speed}
                    defence={defence2}
                    attack={attack2}
                    infoHpEn="Speed"
                    infoDefEn="Special Defence"
                    infoAttackEn="Special Attack"
                    infoHpTr="Hız"
                    infoDefTr="Özel Savunma"
                    infoAttackTr="Özel Saldırı"
                  />
                </Row>
              </div>
              <Row className="pl-4">
                <Col>
                  <h5>
                    <Translate turkish="Boy: " english="Height: " />
                    <Card.Subtitle style={{ display: "inline" }}>
                      {(height / 10).toFixed(1)} m
                    </Card.Subtitle>
                  </h5>
                  <h5>
                    <Translate turkish="Kilo: " english="Weight: " />
                    <Card.Subtitle style={{ display: "inline" }}>
                      {(weight / 10).toFixed(1)} kg
                    </Card.Subtitle>
                  </h5>
                </Col>
                <Col>
                  <h5>
                    <Translate
                      turkish="Tecrübe: "
                      english="Base Experience: "
                    />
                    <Card.Subtitle style={{ display: "inline" }}>
                      {pokemonDetail?.base_experience}
                    </Card.Subtitle>
                  </h5>
                  <h5>
                    <Translate turkish="Yetenek: " english="Ability: " />
                    <Card.Subtitle style={{ display: "inline" }}>
                      {firstCharToUpperCase(
                        pokemonDetail?.abilities[0].ability.name
                      )}
                    </Card.Subtitle>
                  </h5>
                </Col>
              </Row>
              <Row
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "3rem",
                }}
              >
                <Col>
                  <CatchAndReleaseBtn
                    pokeId={pokeId}
                    pokemonDetail={pokemonDetail}
                  />
                </Col>
                <Col>
                  <>
                    <LinkContainer to="/">
                      <Button variant="secondary" block className="mt-5 ml-2">
                        <Translate
                          english="Explore More Pokemon"
                          turkish="Daha Fazla Pokemon Keşfet"
                        />
                      </Button>
                    </LinkContainer>
                  </>
                </Col>
              </Row>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default PokemonDetails;
