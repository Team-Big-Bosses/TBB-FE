import React from "react";
import { Link } from 'react-router-dom'
import '../../scss/landing.scss'


const LandingPage = () =>{
  return(
    <div className="landing-container">
      <h1>Welcome to Team Big Bosses!</h1>
      <div className="landing-nav">
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

export default LandingPage;