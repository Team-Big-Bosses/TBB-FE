import React from 'react'
import { Route } from 'react-router-dom';

import World from './components/world'
import LandingPage from './components/landing/LandingPage'
import Login from './components/landing/Login'
import Register from './components/landing/Register'

function App() {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/world" component={World} />
    </div>
  );
}

export default App;
