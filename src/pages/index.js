import React from "react";
import { Link } from 'gatsby'
import Layout from '../components/Layout';

const IndexPage = () => (
  
    <Layout>
      <h1>Hello</h1>
      <h2>I'm erik, a full stack developer from sunny Stockholm.</h2>
      <p>Need a developer?<Link to="/contact">Contact me.</Link></p>
    </Layout>
)
export default IndexPage;
