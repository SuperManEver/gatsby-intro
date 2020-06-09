import React, { useState } from 'react'

import css from './styles.module.sass'

const Wave = () => {
  const [waves, setWaves] = useState(0)
  const label = `👋 ${waves} ${waves === 1 ? 'wave' : 'waves'}`

  return (
    <button className={css.btn} onClick={() => setWaves(waves + 1)}>
      {label}
    </button>
  )
}

export default Wave
