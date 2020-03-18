import React from 'react';
import Layout from './../components/layout'
import SEO from './../components/seo'
import Container from 'react-bootstrap/Container'
import { Link } from 'gatsby';

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
        <p className="ml-3">
          Paste the following code at the end of body to request for a captcha
        </p>
      </Container>
    </Layout>
  )
}