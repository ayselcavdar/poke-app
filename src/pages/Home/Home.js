import { useState, useEffect } from "react";
import { getPokemons, getPokemon } from "../../services/apiService";
import Loading from "../../components/Loading/Loading";
import PokemonCard from "../../components/Card/PokemonCard";
import BackToTopIcon from '../../components/BackToTop/BackToTop';
import { Card } from "react-bootstrap";
import Pagination from '../../components/Pagination/Pagination'

const Home = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);

  const initialURL = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    async function fecthData() {
      let response = await getPokemons(initialURL);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
      console.log("response :", response)
      setLoading(false);
    }
    fecthData();
  }, []);

  const nextHandler = async () => {
    setLoading(true);
    let data = await getPokemons(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };
  console.log("nextUrl: ", nextUrl)

  const prevHandler = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getPokemons(prevUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon);
        console.log(pokemonRecord);
        if(pokemonRecord)
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  return (
    <div title="HomeTitle">
      {loading ? (
        <Loading />
      ) : (
          <>
          <Card.Body className="text-center">
            <Pagination prevHandler={prevHandler} nextHandler={nextHandler} />
          </Card.Body>
          {pokemonData.map((pokemon) => {
            if(!pokemon)return null;
            const pokeId = pokemon.id;
            return (
              <PokemonCard key={pokeId} pokemon={pokemon} />
            );
          })}
         
          <Card.Body className="text-center">
            <Pagination prevHandler={prevHandler} nextHandler={nextHandler} />
            <BackToTopIcon />      
          </Card.Body> 
       
        </>
      )}
    </div>
  );
};

export default Home;
