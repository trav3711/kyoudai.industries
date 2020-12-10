import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>This is the index page</h1>
      <h1>This is the index page</h1>
      <p>Some text</p>
    </Layout>
  )
}
