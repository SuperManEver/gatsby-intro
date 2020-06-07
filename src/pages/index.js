import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

import "./global.css";

export default function Index() {
  return (
    <Layout>
      <div>
        <h1>Home page</h1>

        <Link to="/about">About Me! &rarr;</Link>
      </div>
    </Layout>
  );
}
