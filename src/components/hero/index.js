import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import css from './styles.module.sass'

export default function Hero() {
  return (
    <div className={css.imgBg}>
      <div className={css.textBox}>
        <h1>Frontend Master + Gatsby &hearts;</h1>
        <p>
          Hello Minnesota
          <Link to="/about/"> Learn about me &rarr;</Link>
        </p>
      </div>
    </div>
  )
}
