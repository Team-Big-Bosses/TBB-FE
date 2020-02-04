import React from 'react'
import { Route } from 'react-router-dom';
import './scss/App.scss'

import AdminMapBuilder from './admin/map-builder'
import World from './components/world'
import LandingPage from './components/landing/LandingPage'
import Login from './components/landing/Login'
import FormikRegister from './components/landing/Register'
import FormikRegisterTest from './components/landing/test'

function App() {
  return (
    <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={FormikRegister} />
        <Route path="/world" component={World} />
        <Route path="/test" component={FormikRegisterTest} />
    </div>
  );
}

export default App;
