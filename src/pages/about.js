import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <h1>Hello Nick! You are awesome!</h1>
      <p>This is my personal web site</p>

      <Link to="/">&larr; back to home</Link>
    </Layout>
  );
}
