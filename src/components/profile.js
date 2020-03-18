import React from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { getLoggedInUser } from './../services/auth'
import { SERVER_URI } from './../globals'

export default function Profile() {

  const {user} = getLoggedInUser()

  return (
    <Container className="p-5">
      <h2 style={{fontWeight: 100}}>Hello, {user.name}</h2>
      <p className="lead">
        You API key is <code>{user._id}</code>
      </p>
      <br/>

      <h5>Next Steps</h5>
      <p className="ml-3 mb-0">
          Paste the following code at the end of body to request for a captcha
        </p>
        <code className="ml-3">
          {`<script src="${SERVER_URI}/scripts/catpcha.js"></script>`}
        </code>
        <br/>
        <p className="mt-2 ml-3 mb-0">
          To render Captcha, Add the following code in your HTML page
        </p>
        <code className="ml-3">
          {
            `<div id="captcha-container" data-apikey="YOUR_API_KEY"></div>`
          }
        </code>
    </Container>
  )
}