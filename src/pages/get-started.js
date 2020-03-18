import React from 'react';
import Layout from './../components/layout'
import SEO from './../components/seo'
import Container from 'react-bootstrap/Container'
import { Link } from 'gatsby';
import { SERVER_URI } from './../globals'

export default function GetStarted() {

  return (
    <Layout>
      <SEO title="Get Started" />

      <Container className="p-5">
        <h2> Get Started</h2>
        <p className="lead">
          Integrate Captcha to your website in less than 5 minutes
        </p>
        <br/>

        <h5>1. Signup and get API Keys</h5>
        <p className="ml-3">
          You need to create an account to get an API key. 
          <Link to="/signup"> Click here</Link> to create an account
        </p>
        <br/>

        <h5>2. Add Captcha widget</h5>
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
        
        <br/><br/>

        <h5>3. Validate Captcha</h5>
        <p className="ml-3">
        Validate Captcha by sending a <code>POST</code> request to <code>{`${SERVER_URI}/captcha/validate`}</code>
        </p>
      </Container>
    </Layout>
  )
}