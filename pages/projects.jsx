import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

const projects = () => (
  <Layout>
    <h2 className={utilStyles.pageHeading}>Our Work</h2>
    <p className={utilStyles.description}>There's nothing here yet...</p>
  </Layout>
)

export default projects;
