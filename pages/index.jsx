import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/Layout'

import utilStyles from '../styles/utils.module.css'
import indexStyles from '../styles/index.module.css'

function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  )
}

export default Home;
