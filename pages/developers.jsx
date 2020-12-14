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
        {allPostsData.map(({ name, title, technologies, description, portfolio }) => (
          <div key={name} className={utilStyles.developer_container}>
              <h1>{name}</h1>
              <h3 className={utilStyles.headingLg}>{title}</h3>
              <h5>{technologies}</h5>
              <p>{description}</p>
              <Link href={portfolio}>
                <a target="_blank" rel="noopener noreferrer">{name}'s portfolio</a>
              </Link>
          </div>
        ))}
    </Layout>
  )
};
