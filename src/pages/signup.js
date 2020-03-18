import React, { useState } from "react"
import Layout from "./../components/layout"
import Container from "react-bootstrap/Container"
import SEO from "./../components/seo"
import Form from "react-bootstrap/form"
import Button from "react-bootstrap/Button"
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'
import { Link, navigate } from 'gatsby'
import { SERVER_URI } from './../globals';

export default function Login() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState('')

  const _handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const resObj = await fetch(`${SERVER_URI}/user/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      })

      const res = await resObj.json();

      if(res.err) {
        setLoading(false)
        setIsError(true)
        setError(res.err)
        return;
      }

      const loginResObj = await fetch(`${SERVER_URI}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });
      const loginRes = await loginResObj.json();

      if(loginRes.err) {
        setLoading(false);
        setIsError(true)
        setError(loginRes.err)
      }

      localStorage.setItem('@user', JSON.stringify(loginRes.data));
      navigate('/app')

    } catch (err) {
      setLoading(false)
      setIsError(true)
      setError(err.toString())
    }
  }

  return (
    <Layout noHeader>
      <SEO title="Create Account" />

      <Container className="p-5" style={{ height: "80vh" }}>
        <h1 className="display-4 text-center">Create Account</h1>

        <div className="mt-5 ml-auto mr-auto" style={{ maxWidth: "30rem" }}>

          {
            isError && <Alert variant="danger">{error}</Alert>
          }

          <Form onSubmit={_handleSubmit}>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>E-mail Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button type="submit" className="mt-4" block disabled={loading}>
              {loading ? <Spinner animation="border" variant="light" /> : 'Create Account'}
            </Button>
            <p>Already have an account? <Link to="/login">Login</Link> now</p>
          </Form>
        </div>
      </Container>
    </Layout>
  )
}
