import React from "react";
import { Link } from 'react-router-dom'

const LandingPage = () =>{
  return(
    <div className="landing-container">
      <div className="landing-nav">
        <Link to="/login">Login</Link>
      </div>
      <h1>Welcome to Team Big Bosses!</h1>
    </div>
  )
}

export default LandingPage;