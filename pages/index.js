import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import indexStyles from '../styles/index.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <p className={utilStyles.headingLg}>A revolutionary contracting company formed by two brothers</p>
      <div className={indexStyles.linkContainer}>
        <Link href= './project_pages/metrics'>
          <a className={utilStyles.linkLg}>Metrics</a>
        </Link>
      </div>
      <div className={indexStyles.linkContainer}>
        <Link href= 'https://github.com/trav3711/metrics'>
          <a className={utilStyles.linkLg}>Newsroom</a>
        </Link>
      </div>
      <div className={indexStyles.linkContainer}>
        <Link href= 'https://github.com/trav3711/metrics'>
          <a className={utilStyles.headingLg}>JWOTD</a>
        </Link>
      </div>
      <div className={indexStyles.linkContainer}>
        <Link href= 'https://github.com/trav3711/metrics'>
          <a className={utilStyles.headingLg}>Contact Us</a>
        </Link>
      </div>

    </Layout>
  )
}
