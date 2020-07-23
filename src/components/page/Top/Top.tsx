import React from 'react'
import Head from 'next/head'

import styles from './Top.module.css'

export const Top = () => {
  return (
    <>
      <Head>
        <title>Top</title>
      </Head>

      <main className={styles.top}>Top</main>
    </>
  )
}
