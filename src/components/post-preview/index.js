import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

import ReadLink from '../read-link'

import css from './styles.module.sass'

const PostPreview = ({ post }) => (
  <article className={css.post}>
    <Link to={post.slug} className={css.imgLink}>
      <Image
        fluid={post.image.sharp.fluid}
        className={css.img}
        alt={post.title}
      />
    </Link>
    <div>
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
    </div>
  </article>
)

export default PostPreview
