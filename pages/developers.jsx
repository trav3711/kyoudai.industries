import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/Layout'
import { getSortedPostsData } from '../lib/devs'

import utilStyles from '../styles/utils.module.css'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function developers({ allPostsData }) {
  return (
    <Layout>
        {allPostsData.map(({ name, title, technologies, description }) => (
          <div className={utilStyles.developer_container}>
              <h1>{name}</h1>
              <h3 className={utilStyles.headingLg}>{technologies}</h3>
              <p>{description}</p>
          </div>
        ))}
    </Layout>
  )
};
