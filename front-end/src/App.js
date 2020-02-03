import React from 'react'
import { Route } from 'react-router-dom';
import './scss/App.scss'

import AdminMapBuilder from './admin/map-builder'
import World from './components/world'
import LandingPage from './components/landing/LandingPage'
import Login from './components/landing/Login'
import Register from './components/landing/Register'

function App() {
  return (
    <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/world" component={World} />
    </div>
  );
}

export default App;
