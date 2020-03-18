import React from "react"
import { Router } from "@reach/router"
import Layout from './../components/layout'
import PrivateRoute from './../components/privateRoute'
import Profile from './../components/profile';

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <PrivateRoute path="/" component={Profile} />
      </Router>
    </Layout>
  )
}

export default App