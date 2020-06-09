import React from 'react'
import { Link } from 'gatsby'

import ReadLink from '../read-link'

import css from './styles.module.sass'

const PostPreview = ({ post }) => (
  <article className={css.post}>
    <h3>
      <Link to={post.slug}>{post.title}</Link>
    </h3>
    <p>{post.excerpt}</p>
    <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
  </article>
)

export default PostPreview