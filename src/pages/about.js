import React from "react";
import { Link } from "gatsby";

export default function About() {
  return (
    <>
      <h1>Hello Nick! You are awesome!</h1>
      <p>This is my personal web site</p>

      <Link to="/">&larr; back to home</Link>
    </>
  );
}
