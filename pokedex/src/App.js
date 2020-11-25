import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import background from './images/pokedex-wallpaper.png';
import NavBar from "./components/layout/NavBar";
import DashBoard from "./components/layout/Dashboard";
// import SearchBar from "./components/search/SearchBar";
import Pokemon from './components/pokemon/Pokemon'


const App = () => {
  return (
    <>
    <Router>
    <div className='App' style={{ background: `${background}` }}>
      <NavBar/>
      <div className='Container'>
        <Switch>
          <Route exact path='/' component={DashBoard}/>
          <Route exact path='/pokemon/:pokemonIndex' component={Pokemon}/>
        </Switch>
      </div>
    </div>
    </Router>
    </>
  )
}

export default App

