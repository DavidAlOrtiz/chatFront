import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'

export const RutasPrivadas = ({isAuthenticate, component: Component , ...rest}) => {
  return (
    <Route {...rest} 
        component={ (props) => (
            (isAuthenticate ? <Component {...props} />  : <Redirect  to="/auth"/>)
        ) } />
  )
}