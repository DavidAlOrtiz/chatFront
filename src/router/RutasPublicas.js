import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'

export const RutasPublicas = ({isAuthenticate, component: Component , ...rest}) => {
  return (
    <Route {...rest} 
        component={ (props) => (
            (!isAuthenticate ? <Component {...props} />  : <Redirect  to="/"/>)
        ) } />
  )
}
