import { Card, Button } from "react-bootstrap";
import Translate from "../Translate/Translate";
import TypePreview from "../TypePreview/TypePreview";
import { firstCharToUpperCase } from "../../utils/firstCharToUpperCase";
import { POKEMON_TYPES } from "../../constants/typeOfPokemons";
import { LinkContainer} from 'react-router-bootstrap';
const cardBody = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const PokemonCard = ({ pokemon }) => {
  return (
    <Card className="m-3" style={{ width: "19em", display: "inline-flex" }}>
      <Card.Img
        style={{ width: "10em" }}
        className="m-auto"
        variant="top"
        src={pokemon?.sprites?.front_default ? pokemon?.sprites?.front_default : `https://pokeres.bastionbot.org/images/pokemon/${pokemon?.id}.png`}
        all="pokemon-img"
      />
      <Card.Body style={cardBody}>
        <h3>{`${firstCharToUpperCase(pokemon?.name)}`}</h3>
        <Card.Body style={{display:'inline-flex'}}>
          {pokemon.types.map((type, i) => {
            return (
              <TypePreview
                key={i}
                backgroundColor={POKEMON_TYPES[type.type.name].color}
              >
                <Translate
                 turkish={POKEMON_TYPES[type.type.name].nameTr}
                 english={type.type.name} 
                />
              </TypePreview>
            );
          })}
        </Card.Body>
        <LinkContainer to={`/details/${pokemon?.id}`}>
          <Button size="lg" variant="danger">
            <Translate turkish={"Daha Fazla Bilgi"} english={"More Details"} />
            <i className="fas fa-info-circle text-white ml-3" />
          </Button>
        </LinkContainer>  
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
