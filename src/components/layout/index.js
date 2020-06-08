import React from 'react'
import Helmet from 'react-helmet'

import useMetadata from 'src/hooks/use-sitemetadata'
import Header from '../header'

import css from './styles.module.sass'

export default function Layout({ children }) {
  const { title, description } = useMetadata()

  return (
    <>
      <Helmet>
        <html lang="en"></html>
        <title>{title}</title>
        <meta name={description} content="site description" />
      </Helmet>
      <Header />
      <main className={css.wrapper}>{children}</main>
    </>
  )
}
