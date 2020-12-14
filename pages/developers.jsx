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
<<<<<<< HEAD
        {allPostsData.map(({ name, title, technologies, description }) => (
          <div className={utilStyles.developer_container}>
              <h1>{name}</h1>
              <h3 className={utilStyles.headingLg}>{technologies}</h3>
              <p>{description}</p>
          </div>
        ))}
=======
        <ul className={utilStyles.list}>
            {allPostsData.map(({ name, title, technologies, description }) => (
              <div key={name} className={utilStyles.developer_container}>
                  <h1>{name}</h1>
                  <h3 className={utilStyles.headingLg}>{technologies}</h3>
                  <p>{description}</p>
              </div>
            ))}
          </ul>
>>>>>>> 1b175f2427ad1fb5ba5fb6f61b3a80c4dfc6aff9
    </Layout>
  )
};
