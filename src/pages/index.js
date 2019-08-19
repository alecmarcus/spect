import React from 'react'
import Head from 'next/head'
import { Axis } from 'components'
import { easeInOutQuad } from 'utils'
import styles from './styles/index.module.scss'

const Home = () => (
  <>
    <Head>
      <title>Spect Generator: Axis</title>
    </Head>
    <Axis qty={20} maxShift={0} yEase={easeInOutQuad} maxAmp={600} wLength={250} />
  </>
)

export default Home
