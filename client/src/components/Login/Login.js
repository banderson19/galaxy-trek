import React from 'react'

export default function(props) {
  return (
    <div>
      <h1> Login Page </h1>
      <a href={process.env.REACT_APP_LOGIN}><button>Login</button></a>
    </div>
  )
}

// be sure to change port in all locations - login.js, .env, server.js, auth0 ++
