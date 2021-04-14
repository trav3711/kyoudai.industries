import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'

const contact = () => (
  <Layout>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <h2 className={utilStyles.pageHeading}>Contact Us!</h2>
    <p className={utilStyles.description}>Well not yet.</p>
  </Layout>
)

export default contact;
