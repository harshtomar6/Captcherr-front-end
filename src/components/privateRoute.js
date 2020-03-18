import React, { Component } from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "../services/auth.js"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() && location.pathname !== `/login`) {
    typeof window !== 'undefined' && navigate("/login")
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute