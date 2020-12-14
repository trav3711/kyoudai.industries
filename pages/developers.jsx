import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/devs'

import Card from '../components/developer_card'
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
        <ul className={utilStyles.list}>
            {allPostsData.map(({ name, title, technologies, description }) => (
              <div className={utilStyles.developer_container}>
                  <h1>{name}</h1>
                  <h3 className={utilStyles.headingLg}>{technologies}</h3>
                  <p>{description}</p>
              </div>
            ))}
          </ul>
    </Layout>
  )
};
