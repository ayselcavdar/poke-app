import React, { useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { favPokemon, removeFavPokemon } from '../../Action/actions';
import './favPokemon.css';

const FavPokemon = ({ pokeId }) => {
  const [like, setLike] = useState(true);
  const [color, setColor] = useState('');
  const dispatch = useDispatch();
  const favPokemons = useSelector((state) => state.favPokemon);

  useLayoutEffect(() => {
    for (let i = 0; i < favPokemons.length; i++) {
      if (favPokemons[i].favPokemonId === pokeId) {
        setColor('red');
        setLike(!like);
      }
    }
  }, []);

  const favHandler = (pokeId) => {
    if (like === true) {
      setColor('red');
      dispatch(favPokemon(pokeId));
    } else if (like === false) {
      setColor('gray');
      dispatch(removeFavPokemon(pokeId));
    }
    setLike(!like);
  };

  return (
    <div>
      <i
        className={`fas fa-heart fa-2x float-right pt-2 pr-2 pl-2  like-icon ${color}`}
        onClick={() => favHandler(pokeId)}
      />
    </div>
  );
};

export default FavPokemon;