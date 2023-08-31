import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'

const projects = () => (
  <Layout>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <h2 className={utilStyles.pageHeading}>Our Work</h2>
    <p className={utilStyles.description}>There is nothing here yet...</p>
  </Layout>
)

export default projects;
