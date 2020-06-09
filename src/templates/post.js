import React from 'react'

import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import Layout from 'src/components/layout'
import ReadLink from 'src/components/read-link'

export const query = graphql`
  query GetPost($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`

export default function Post({ data: { mdx: post } }) {
  const {
    frontmatter: { title, author },
    body,
  } = post

  return (
    <Layout>
      <h1>{title}</h1>
      <p>Posted by {author}</p>
      <MDXRenderer>{body}</MDXRenderer>
      <ReadLink to="/">&larr; back to all posts</ReadLink>
    </Layout>
  )
}
