//CONSTANTS

export const CATCH_POKEMON = 'CATCH_POKEMON';
export const RELEASE_POKEMON = 'RELEASE_POKEMON';

export const FAV_POKEMON = 'FAV_POKEMON';
export const REMOVE_FAV_POKEMON = 'REMOVE_FAV_POKEMON';

export const TR_LANGUAGE = 'TR_LANGUAGE';
export const EN_LANGUAGE = 'EN_LANGUAGE';

//ACTIONS

export const catchPokemon = (pokemon) => {
  return { type: CATCH_POKEMON, payload: pokemon };
};

export const releasePokemon = (pokemon) => {
  return { type: RELEASE_POKEMON, payload: pokemon };
};

export const favPokemon = (pokemon) => {
  return { type: FAV_POKEMON, payload: pokemon };
};
export const removeFavPokemon = (pokemon) => {
  return { type: REMOVE_FAV_POKEMON, payload: pokemon };
};

export const trLanguage = (language) => {
  return { type: TR_LANGUAGE, payload: language };
};
export const enLanguage = (language) => {
  return { type: EN_LANGUAGE, payload: language };
};