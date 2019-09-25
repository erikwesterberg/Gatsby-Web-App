import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const AboutPage = () => (
  <Layout>
    <h1>About me</h1>
    <p>
      <Link to="/contact">Want to work with me? Reach out.</Link>
    </p>
  </Layout>
)

export default AboutPage
