import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from '../pages/Home/Home';
import PokemonDetails from '../pages/Detail/PokemonDetails';
import CatchedPokemons from '../pages/Catched/CatchedPokemons';
import FavouritePokemons from '../pages/Favourite/FavouritePokemons';
import Error from '../pages/Error/Error';

import AppNavbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const AppRouter = () => {
    return (
        <Router>
            <AppNavbar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/details/:pokeId" component={PokemonDetails}/>
                <Route path="/catched" component={CatchedPokemons}/>
                <Route path="/favourites" component={FavouritePokemons}/>
                <Route component={Error}/>
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter;
