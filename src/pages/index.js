import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout>
    <h1>YO!</h1>
    <h2>
      I'm Erik, I love software development and my dog.. Also my Girlfriend.
    </h2>
    <p>
      Need a happy and motivated developer?
      <Link to="/contact">Contact me.</Link>
    </p>
  </Layout>
)
export default IndexPage;
