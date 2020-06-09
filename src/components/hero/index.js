import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import css from './styles.module.sass'

export default function Hero() {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "audi-bg.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag="section"
      fluid={image.sharp.fluid}
      className={css.imgBg}
      fadeIn="soft"
    >
      <div className={css.textBox}>
        <h1>Frontend Master + Gatsby &hearts;</h1>
        <p>
          Hello Minnesota
          <Link to="/about/"> Learn about me &rarr;</Link>
        </p>
      </div>
    </BackgroundImage>
  )
}
