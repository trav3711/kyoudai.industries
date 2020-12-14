import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'

const about = () => (
  <Layout>
    <h2 className={utilStyles.pageHeading}>Who We Are</h2>
    <p className={utilStyles.headingLg}>
      Kyoudai Industries is a collective made up of a group of friends
      who share a passion for software, technology, and fixing our society
      one git commit at a time.
    </p>
    <p className={utilStyles.headingLg}>
      Our current means of accomplishing this rather lofty goal is to offer first-class
      engineering and technological skills to whoever may be seeking them out.
    </p>
    <p className={utilStyles.headingLg}>
        Feel free to browse our
        <Link href="/developers"><a> current developers</a></Link>,
        <Link href="/projects"><a> projects</a></Link> we have worked on, and
        <Link href="/contact"><a> contact</a></Link> us if you have any questions
    </p>
  </Layout>
)

export default about;
