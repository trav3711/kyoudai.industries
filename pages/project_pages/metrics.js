import Head from 'next/head'
import Link from 'next/Link'
import utilStyles from '../../styles/utils.module.css'
import Layout, { siteTitle } from '../../components/Layout'

const metrics = () => (
  <Layout>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <h1 className={utilStyles.heading2Xl}>Metrics</h1>
    <p>Something about the metrics app</p>
  </Layout>
);

export default metrics;
