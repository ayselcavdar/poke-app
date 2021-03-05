import React, { useState, useEffect } from 'react';
import Translate from '../Translate/Translate';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { catchPokemon, releasePokemon } from '../../Action/actions';

const CatchAndReleaseBtn = ({ pokeId, pokemonDetail }) => {
  
  const [catched, setCatched] = useState(false);
  const dispatch = useDispatch();
  const catchedPokemons = useSelector((state) => state.catchedPokemon);
  console.log("pokemonDetail: ", catchedPokemons);

  useEffect(() => {
    for (let i = 0; i < catchedPokemons.length; i++) {
      if (catchedPokemons[i].pokemonId === parseInt(pokeId)) {
        setCatched(true);
      }
    }
  }, [catchedPokemons]);

  const catchReleasePokemonHandler = (pokemonDetail) => {
    if (catched === true) {
      dispatch(releasePokemon(pokemonDetail));
      setCatched(false);
    } else if (catched === false) {
      dispatch(catchPokemon(pokemonDetail));
      setCatched(true);
    }
  };

  return (
    <div>
      {catched ? (
        <Button    
          variant='danger'
          className="mt-5 ml-3 pr-4 pl-5"
          onClick={() => catchReleasePokemonHandler(pokemonDetail)}
        >
          <Translate turkish={"Pokemon'u yakala"} english={'Release Pokemon'} />
        </Button>
      ) : (
        <Button   
          className="mt-5 ml-3 pr-5 pl-5"
          onClick={() => catchReleasePokemonHandler(pokemonDetail)}
        >
          <Translate turkish={"Pokemon'u yakala"} english={'Catch pokemon'} />
        </Button>
      )}
    </div>
  );
};

export default CatchAndReleaseBtn;
