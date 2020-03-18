import React from "react"
import { Container, Jumbotron, Button } from "react-bootstrap"
import { SERVER_URI } from './../globals'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO
      title="Captcherr - Protect your website from spam"
      keywords={[`gatsby`, `react`, `bootstrap`]}
    />

    <Jumbotron className="bg-white" style={{ height: "80vh" }}>
      <Container className="d-flex flex-column justify-content-center h-100 align-items-center">
        <h1 className="display-4 text-center">
          Protect your website from spam
        </h1>
        <p className="lead text-center">
          Allow only real humans on your website by integrating captchas and
          block bad traffic or Bots.
        </p>
        <div className="d-flex flex-wrap justify-content-center">
          <Button href="/get-started" size="lg" className="m-2">
            Get Started
          </Button>
          <Button
            href={`${SERVER_URI}/example.html`}
            variant="outline-primary"
            size="lg"
            className="m-2"
          >
            See Demo
          </Button>
        </div>
      </Container>
    </Jumbotron>
  </Layout>
)

export default IndexPage
