import Head from 'next/head'
import Link from 'next/link'
import Header, { siteTitle } from '../components/header'
import utilStyles from '../styles/utils.module.css'
import indexStyles from '../styles/index.module.css'

const Home() {
  return (
    <Header home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <p className={utilStyles.headingLg}>
        Welcome! Kyoudai Industries was started with the goal of enabling junior software developers the chance
        to enter the freelance market by removing the classic experience barriers.
      </p>
      <p>
        Of course you may ask, isn't a good amount of experience necessary to make a productive freelance engineer?
        The answer is yes, but at Kyoudai Industries we believe that every engineer has value,
        and want to be the initial stepping stone that enables younger engineers to thrive in the modern tech workplace.
      </p>

    </Header>
  )
}

export default Home;
