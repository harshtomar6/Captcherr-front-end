import React from "react"
import Layout from "./../components/layout"
import SEO from "./../components/seo"
import Container from "react-bootstrap/Container"
import { Link } from "gatsby"
import { SERVER_URI } from "./../globals"

export default function GetStarted() {
  return (
    <Layout>
      <SEO title="Get Started" />

      <Container className="p-5">
        <h2> Get Started</h2>
        <p className="lead">
          Integrate Captcha to your website in less than 5 minutes
        </p>
        <br />

        <h5>1. Signup and get API Keys</h5>
        <p className="ml-3">
          You need to create an account to get an API key.
          <Link to="/signup"> Click here</Link> to create an account
        </p>
        <br />

        <h5>2. Add Captcha widget</h5>
        <p className="ml-3 mb-0">
          Paste the following code before the closing body tag to request for a captcha
        </p>
        <pre className="p-2 bg-dark ml-3">
          <code className="ml-3 text-light">
            {`<script src="${SERVER_URI}/scripts/catpcha.js"></script>`}
          </code>
        </pre>
        <p className="ml-3">
          When this script is loaded, a variable <code>captchaId</code> is added to <code>window</code> object.
          You need this variable later to validate the captcha.
        </p>
        <p className="mt-2 ml-3 mb-0">
          To render Captcha, Add the following code in your HTML page
        </p>
        <pre className="p-2 bg-dark ml-3">
          <code className="text-light">
            {`<div id="captcha-container" data-apikey="YOUR_API_KEY"></div>`}
          </code>
        </pre>
        <small className="ml-3">* YOUR_API_KEY should be replaced by actual API Key </small>
        <br />
        <br />

        <h5>3. Validate Captcha</h5>
        <p className="ml-3">
          Validate Captcha by sending a <code>POST</code> request to{" "}
          <code>{`${SERVER_URI}/captcha/validate`}</code>. <br/>
          Send following params as Request payload
        </p>
        <pre className="p-2 ml-3 bg-dark">
          <code className="text-light">
            {`
            {
              "captchaId": window.captchaId,
              "key": "YOUR_API_KEY",
              "text": "TEXT_FROM_USER_INPUT"
            }`
            }
          </code>
        </pre>
        <p className="ml-3">
          The API will respond as
        </p>
        <pre className="p-2 ml-3 bg-dark">
          <code className="text-light">
            {`
            {
              "err": null,
              "data": {
                "_id": "5e724a615f511037840344af",
                "solved": true,
                "user": "5e6f42d5660ca41440d4836e",
                "createdAt": "2020-03-18T16:20:49.552Z",
                "validated": true
              }
            }
            `
            }
          </code>
        </pre>
        <p className="ml-3">
          If the Captcha is validated successfully, <code>validated</code> field will be true.
          Don't confuse <code>solved</code> with <code>validated</code> field.
          <code> solved</code> field will always be true. It implies that an attempt made to solve this captcha.
        </p>
      </Container>
    </Layout>
  )
}
