import React from 'react'
import Image from 'gatsby-image'

import useInstagram from 'src/hooks/use-instagram'

import css from './styles.module.sass'

export default function Insta() {
  const instaPhotos = useInstagram()
  const { username } = instaPhotos[0]

  return (
    <div>
      <h2>Instagram posts from @{username}</h2>
      <div className={css.wrapper}>
        {instaPhotos.map((photo) => (
          <a className={css.link} href={`https://instagram.com/p/${photo.id}/`}>
            <Image
              key={photo.id}
              className={css.img}
              fluid={photo.fluid}
              alt={photo.caption}
            />
          </a>
        ))}
      </div>
      <a href={`https://instagram.com/${username}`}>
        See more on Instagram &rarr;
      </a>
    </div>
  )
}
