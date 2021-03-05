import React from "react";
import { Navbar, Nav, Image, Button } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import Translate from '../Translate/Translate';
import PokiImg from "../../assets/images/poki.png";

import { trLanguage, enLanguage } from '../../Action/actions';
import { useDispatch } from 'react-redux';
const AppNavbar = () => {
  const dispatch = useDispatch();

  const trLanguageHandler = () => {
    dispatch(trLanguage('tr'));
  };
  const enLanguageHandler = () => {
    dispatch(enLanguage('en'));
  };
  return (
    <div>
      <Navbar bg="danger" variant="dark">
        <LinkContainer to="/">
        <Navbar.Brand >
          <Image style={{ width: "102px", height: "42px" }} src={PokiImg} />
        </Navbar.Brand>
        </LinkContainer>
        <Nav className="mr-auto">
          <LinkContainer to="/catched">
          <Nav.Link> <Translate turkish="Yakalanan Pokemonlar" english="Catched Pokemons" /></Nav.Link>          
          </LinkContainer>
          <LinkContainer to="/favourites">
          <Nav.Link><Translate turkish="Favori Pokemonlar" english="Favorite Pokemons" /></Nav.Link> 
          </LinkContainer>
        </Nav>
        <div className='ml-auto pr-2 pt-2 d-inline'>
            <div className='text-white d-inline mr-2'>
              <Translate turkish='Dil: ' english='Language: ' />
            </div>

            <Button
              className='border p-1 mx-1'
              onClick={() => trLanguageHandler()}
              variant='light'
            >
              TR
            </Button>
            <Button
              className='p-1 mx-1 '
              onClick={() => enLanguageHandler()}
              variant='light'
            >
              EN
            </Button>
          </div>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
