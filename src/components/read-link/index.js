import React from 'react'
import { Link } from 'gatsby'

import css from './styles.module.sass'

export default function ReadLink(props) {
  return <Link {...props} className={css.link} />
}
