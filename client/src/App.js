import './App.css';
import React from 'react'
import { Route } from 'react-router-dom'

import Landingpage from './components/landingpage/landingpage.js'
import Home from './components/home/home.js' 
import Detalles from './components/detalles/detalles.js'
import CrearActividad from './components/crearactividad/crearactividad.js'
import Navbar from './components/navbar/navbar.js'

export function App() {
  return (
    <React.Fragment>
    <div className="lnd">
    <Route exact path="/" component={Landingpage}/>
    <div className="homee">
    <Route path="/home" component={Navbar}/>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/home/detalles/:idPais" component={Detalles}/>
    <Route exact path="/home/crear" component={CrearActividad}/>
    </div>
    </div>
    </React.Fragment>
  );
}

export default App

